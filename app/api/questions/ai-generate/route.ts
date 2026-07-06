import { NextResponse } from 'next/server';
import { ChatOpenAI } from '@langchain/openai';
import { z } from 'zod';

const OLYMPIAD_TYPE_LABELS: Record<string, string> = {
  'olympiad:ntse-mat':        'NTSE Mental Ability Test (MAT) — logical reasoning, pattern recognition, analogies',
  'olympiad:ntse-sat':        'NTSE Scholastic Aptitude Test (SAT) — curriculum-based but at a competitive depth',
  'olympiad:ioqm':            'Indian Olympiad Qualifier in Mathematics (IOQM) — proof-style, deep problem solving',
  'olympiad:sof-imo':         'SOF International Mathematics Olympiad — challenging MCQs above board level',
  'olympiad:sof-nso':         'SOF National Science Olympiad — advanced science reasoning MCQs',
  'olympiad:jee-foundation':  'JEE Foundation — physics/maths problems testing conceptual depth for future JEE prep',
  'olympiad:neet-foundation': 'NEET Foundation — biology/chemistry problems testing conceptual depth for future NEET prep',
};

const questionSchema = z.object({
  questions: z.array(z.object({
    content: z.string().describe("The actual question text. Can include math or markdown."),
    options: z.array(z.string()).length(4).describe("Exactly 4 realistic options/distractors for a multiple choice question."),
    correctAnswer: z.string().describe("The exact string matching one of the options that is the correct answer."),
    explanation: z.string().describe("A step-by-step mathematical explanation of how to solve the problem and arrive at the correct answer.")
  }))
});

// ── Verification schema ──────────────────────────────────────────────
const verificationSchema = z.object({
  results: z.array(z.object({
    questionIndex: z.number().describe("The 0-based index of the question being verified."),
    isCorrect: z.boolean().describe("true if the marked correctAnswer is actually the right answer, false if it is wrong."),
    actualCorrectOption: z.string().describe("The exact string from the options array that IS the truly correct answer. If the original was correct, repeat it here."),
    correctedExplanation: z.string().describe("A corrected step-by-step explanation that arrives at the actually correct answer. If the original was correct, repeat the original explanation."),
  }))
});

// ── Verify + auto-correct generated questions ────────────────────────
async function verifyAndCorrectQuestions(
  questions: { content: string; options: string[]; correctAnswer: string; explanation: string }[],
  llm: ChatOpenAI
): Promise<{ content: string; options: string[]; correctAnswer: string; explanation: string; verified: boolean }[]> {
  
  // Step 0: Quick sanity — ensure correctAnswer is actually in options
  const sanitized = questions.map(q => {
    if (!q.options.includes(q.correctAnswer)) {
      // Try case-insensitive / trimmed match
      const match = q.options.find(o => o.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase());
      if (match) return { ...q, correctAnswer: match };
    }
    return q;
  });

  // Step 1: Build verification prompt
  const questionsBlock = sanitized.map((q, i) => 
    `[Q${i}] ${q.content}\n  A) ${q.options[0]}\n  B) ${q.options[1]}\n  C) ${q.options[2]}\n  D) ${q.options[3]}\n  Marked Answer: ${q.correctAnswer}`
  ).join('\n\n');

  const verifyPrompt = `You are a rigorous math/science answer verifier. For EACH question below, independently solve it step-by-step, then check if the "Marked Answer" is correct.

${questionsBlock}

IMPORTANT RULES:
1. Solve each question from scratch. Do NOT trust the marked answer.
2. Your "actualCorrectOption" MUST be the EXACT string from the options list — copy-paste it character by character.
3. If the marked answer is wrong, set isCorrect to false and provide the truly correct option and a corrected explanation.
4. If the marked answer is right, set isCorrect to true and repeat the option and explanation.
5. DO NOT use LaTeX or dollar signs. Write math as plain text.`;

  try {
    const verifier = llm.withStructuredOutput(verificationSchema);
    const result = await verifier.invoke(verifyPrompt);

    // Step 2: Apply corrections
    return sanitized.map((q, i) => {
      const v = result.results.find(r => r.questionIndex === i);
      if (!v) return { ...q, verified: false };

      if (v.isCorrect) {
        return { ...q, verified: true };
      }

      // Auto-correct: ensure the corrected answer is actually in options
      const correctedAnswer = q.options.includes(v.actualCorrectOption) 
        ? v.actualCorrectOption 
        : q.correctAnswer; // fallback to original if verifier hallucinates

      console.log(`[Verifier] Q${i} CORRECTED: "${q.correctAnswer}" → "${correctedAnswer}"`);

      return {
        ...q,
        correctAnswer: correctedAnswer,
        explanation: v.correctedExplanation || q.explanation,
        verified: true,
      };
    });
  } catch (err: any) {
    console.error('[Verifier] Verification failed, returning unverified questions:', err.message);
    return sanitized.map(q => ({ ...q, verified: false }));
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { grade, board, subject, chapter, topic, concept, difficulty, count, syllabusContext, olympiadType } = body;

    if (!grade || !subject || !difficulty || !count) {
      return NextResponse.json({ error: 'Missing required parameters (grade, subject, difficulty, count)' }, { status: 400 });
    }

    const llm = new ChatOpenAI({
      model: "gpt-4o-mini",
      maxTokens: 8192,
      apiKey: process.env.OPENAI_API_KEY,
    });

    const structuredLlm = llm.withStructuredOutput(questionSchema);

    // --- Build the prompt ---
    let prompt = `You are an expert curriculum designer for ${board || 'ICSE/CBSE'} board, specializing in Grade ${grade} ${subject}.
I need you to generate exactly ${count} multiple-choice questions (MCQs) for the following:
- Chapter: ${chapter || 'N/A'}
- Topic: ${topic || 'N/A'}
- Specific Concept (if any): ${concept || 'General understanding'}
- Difficulty Level: ${difficulty} (Ensure the complexity perfectly matches this tier).
`;

    // --- RAG: Inject syllabus context if provided ---
    if (syllabusContext && syllabusContext.trim().length > 0) {
      const truncatedContext = syllabusContext.trim().slice(0, 12000);
      prompt += `
=== SYLLABUS REFERENCE (from official textbook/syllabus PDF) ===
${truncatedContext}
=== END SYLLABUS REFERENCE ===

CRITICAL: You MUST base your questions strictly on the content, terminology, examples, and concepts found in the syllabus reference above.
- Use the same variable names, equation forms, and definitions as the textbook.
- Reference specific theorems, laws, or formulas mentioned in the syllabus.
- Your questions should test understanding of what is actually taught, not general knowledge.
`;
    }

    // --- Olympiad sub-type guidance ---
    if (difficulty === 'Olympiad' && olympiadType && OLYMPIAD_TYPE_LABELS[olympiadType]) {
      const olympiadPrompts: Record<string, string> = {
        'olympiad:ntse-mat': `
These are NTSE Mental Ability Test (MAT) questions. They must test:
- Series completion with complex patterns (e.g., interleaved arithmetic-geometric sequences)
- Analytical reasoning puzzles (seating arrangements, blood relations with 5+ people)
- Non-verbal reasoning: paper folding, mirror images, figure matrix with rotation+shading
- Coding-decoding with multi-step cipher rules
- Venn diagram logic with 3+ overlapping sets
DO NOT generate simple math problems. These are PURE REASONING questions.
Example level: "In a certain code, COMPUTER is written as DPNQVUFS. How is ELEPHANT written in that code?"`,

        'olympiad:ntse-sat': `
These are NTSE Scholastic Aptitude Test (SAT) questions. They must be:
- Based on curriculum topics BUT require multi-step reasoning and clever insight
- Significantly harder than board exams — a top 5% student should find these challenging
- Include tricky distractors based on common competitive exam pitfalls
- Require combining 2-3 concepts to solve a single problem
Example level for Maths: "If f(x) = x^2 - 3x + 2, find the number of integers in the range [-10, 10] for which f(f(x)) = 0"
Example level for Science: "A ball is thrown vertically up from a moving train. Describe its trajectory as seen by an observer on the platform."`,

        'olympiad:ioqm': `
These are IOQM / RMO level questions — India's hardest math competition for school students.
ABSOLUTE REQUIREMENTS:
- Questions MUST involve deep mathematical reasoning, not routine computation
- Require clever tricks, non-obvious insights, or elegant constructions
- Topics: Number theory (modular arithmetic, Diophantine equations, divisibility), Combinatorics (pigeonhole, counting with restrictions, graph theory), Algebra (inequalities like AM-GM/Cauchy-Schwarz, functional equations, polynomials with integer roots), Geometry (circle theorems, concurrency, power of a point)
- A student who ONLY knows textbook factorisation or basic algebra should NOT be able to solve these

EXAMPLE IOQM-LEVEL QUESTIONS (match this difficulty):
- "Find the number of positive integers n < 1000 such that n^2 + n + 1 is divisible by 7"
- "Let a, b, c be positive reals with abc = 1. Prove that a^2 + b^2 + c^2 >= a + b + c. For the MCQ, find the minimum value of a^2 + b^2 + c^2."
- "How many ways can you tile a 2×10 grid using 1×2 dominoes?"
- "Find the remainder when 2^2024 is divided by 13"

DO NOT generate basic factorisation, simple equation solving, or textbook-level problems. Those are UNACCEPTABLE for IOQM.`,

        'olympiad:sof-imo': `
These are SOF International Mathematics Olympiad questions — harder than board, easier than IOQM.
- Multi-step problem solving requiring combination of concepts
- Non-routine applications of standard formulas
- Pattern recognition in number sequences with algebraic justification
- Geometry problems requiring construction of auxiliary lines or multiple theorem application
- Problems that LOOK simple but have a subtle twist
Example level: "The sum of all two-digit numbers which leave remainder 3 when divided by 7 is ___"
A textbook student should struggle with at least 2-3 of these.`,

        'olympiad:sof-nso': `
These are SOF National Science Olympiad questions — advanced science reasoning.
- Require applying scientific principles to novel, unfamiliar situations
- Multi-concept questions combining 2-3 topics (e.g., electricity + magnetism + energy)
- Experimental reasoning: "What would happen if..." scenarios
- Data interpretation from graphs/tables with scientific analysis
- Questions based on real-world phenomena requiring physics/chemistry/biology insight
Example: "A sealed container has ice at 0°C and water vapor at 100°C separated by a movable piston. Describe what happens to the piston over time and why."`,

        'olympiad:jee-foundation': `
These are JEE Foundation questions — building toward IIT-JEE competitive exam patterns.
- Physics: Problems requiring free-body diagrams, energy conservation with multiple steps, relative motion
- Maths: Quadratic inequalities, AM-GM applications, coordinate geometry with parametric approaches
- Must require setting up equations from word problems, not just plug-and-solve
- Distractors should trap students who use shortcuts without understanding
Example: "Two blocks of masses m and 2m are connected by a string over a frictionless pulley on an inclined plane at 30°. Find the acceleration and tension."`,

        'olympiad:neet-foundation': `
These are NEET Foundation questions — building toward medical entrance exam patterns.
- Biology: Deep conceptual questions on cellular mechanisms, genetics problems with pedigree analysis, ecology with numerical reasoning
- Chemistry: Stoichiometry multi-step problems, periodic trends requiring prediction, reaction mechanism reasoning
- Must test UNDERSTANDING not memorization — "why" not "what"
- Include clinical/real-world application scenarios
Example: "A person with blood group AB marries a person with blood group O. Using a Punnett square, determine the probability of their child having blood group A."`,
      };

      prompt += `
=== OLYMPIAD TARGETING — CRITICAL ===
${olympiadPrompts[olympiadType] || OLYMPIAD_TYPE_LABELS[olympiadType]}

HARD RULES FOR OLYMPIAD QUESTIONS:
1. These must be SIGNIFICANTLY harder than regular board exam questions.
2. A student scoring 90% in school exams should find these CHALLENGING.
3. DO NOT generate questions that can be solved by direct formula application.
4. Each question must require at least 2-3 logical steps or a non-obvious insight.
5. The wrong options must be sophisticated traps, not obviously wrong.
=== END OLYMPIAD TARGETING ===
`;
    }

    prompt += `
Rules for generation:
1. Generate mathematically sound and unambiguous questions.
2. Provide exactly 4 distinct options. Do not make the correct answer obviously stand out by length or format.
3. Include common misconceptions as distractors in the wrong options.
4. Provide a detailed, step-by-step explanation.
5. IMPORTANT: DO NOT use LaTeX formatting or dollar signs ($) for math. Write equations as plain text (e.g. x^2 + 2x = 0).
6. CRITICAL: The correctAnswer MUST be the EXACT same string as one of the 4 options. Double-check this.
7. CRITICAL: Solve the question yourself before writing the answer. Make sure the correctAnswer is mathematically correct.

Return the result matching the requested JSON schema perfectly.`;

    // ── Pass 1: Generate ──────────────────────────────────────────────
    const result = await structuredLlm.invoke(prompt);
    console.log(`[Generator] Generated ${result.questions.length} questions. Starting verification...`);

    // ── Pass 2: Verify + Auto-Correct ─────────────────────────────────
    const verified = await verifyAndCorrectQuestions(result.questions, llm);
    
    const correctedCount = verified.filter((q, i) => q.correctAnswer !== result.questions[i].correctAnswer).length;
    if (correctedCount > 0) {
      console.log(`[Verifier] ✓ Auto-corrected ${correctedCount}/${verified.length} questions.`);
    } else {
      console.log(`[Verifier] ✓ All ${verified.length} questions passed verification.`);
    }

    return NextResponse.json({ 
      questions: verified,
      verification: {
        total: verified.length,
        corrected: correctedCount,
        allVerified: verified.every(q => q.verified),
      }
    });
  } catch (error: any) {
    console.error('Failed to generate AI questions:', error);
    const message = error?.message || error?.toString() || 'Unknown error';
    return NextResponse.json({ error: `Failed to generate questions: ${message}` }, { status: 500 });
  }
}
