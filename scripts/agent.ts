import { ChatOpenAI } from '@langchain/openai';
import { z } from 'zod';
import { StateGraph, START, END } from '@langchain/langgraph';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
dotenv.config();

const prisma = new PrismaClient();

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  maxTokens: 8192,
  apiKey: process.env.OPENAI_API_KEY,
});

// ── Olympiad Type Labels ─────────────────────────────────────────────
const OLYMPIAD_TYPE_LABELS: Record<string, string> = {
  'olympiad:ntse-mat':        'NTSE Mental Ability Test (MAT) — logical reasoning, pattern recognition, analogies',
  'olympiad:ntse-sat':        'NTSE Scholastic Aptitude Test (SAT) — curriculum-based but at a competitive depth',
  'olympiad:ioqm':            'Indian Olympiad Qualifier in Mathematics (IOQM) — proof-style, deep problem solving',
  'olympiad:sof-imo':         'SOF International Mathematics Olympiad — challenging MCQs above board level',
  'olympiad:sof-nso':         'SOF National Science Olympiad — advanced science reasoning MCQs',
  'olympiad:jee-foundation':  'JEE Foundation — physics/maths problems testing conceptual depth',
  'olympiad:neet-foundation': 'NEET Foundation — biology/chemistry problems testing conceptual depth',
};

// ── Parse CLI Arguments ──────────────────────────────────────────────
function parseArgs() {
  const rawArgs = process.argv.slice(2);
  let pdfPath = '';
  let olympiadType = 'olympiad:ntse-sat'; // default
  const textParts: string[] = [];

  for (let i = 0; i < rawArgs.length; i++) {
    if (rawArgs[i] === '--pdf' && rawArgs[i + 1]) {
      pdfPath = rawArgs[++i];
    } else if (rawArgs[i] === '--olympiad' && rawArgs[i + 1]) {
      olympiadType = rawArgs[++i];
    } else {
      textParts.push(rawArgs[i]);
    }
  }

  return { input: textParts.join(' '), pdfPath, olympiadType };
}

// ── PDF Text Extraction ──────────────────────────────────────────────
async function extractPdfText(filePath: string): Promise<string> {
  const resolvedPath = path.resolve(filePath);
  if (!fs.existsSync(resolvedPath)) {
    console.error(`[PDF] File not found: ${resolvedPath}`);
    return '';
  }

  try {
    const buffer = fs.readFileSync(resolvedPath);
    const pdfModule: any = await import('pdf-parse');
    const pdfParse = pdfModule.default ?? pdfModule;
    const parsed = await pdfParse(buffer);
    const text = parsed.text?.trim() || '';
    console.log(`[PDF] Extracted ${text.length.toLocaleString()} chars from ${filePath} (${parsed.numpages} pages)`);
    return text;
  } catch (err: any) {
    console.error(`[PDF] Failed to parse: ${err.message}`);
    return '';
  }
}

// ── Retry Helper ─────────────────────────────────────────────────────
async function withRetry<T>(fn: () => Promise<T>, label: string, maxRetries = 3): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      console.error(`[${label}] Attempt ${attempt}/${maxRetries} failed: ${err.message}`);
      if (attempt === maxRetries) throw err;
      const delay = attempt * 2000;
      console.log(`[${label}] Retrying in ${delay / 1000}s...`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw new Error(`[${label}] All retries exhausted`); // unreachable
}

// ── LangGraph State ──────────────────────────────────────────────────
interface AgentState {
  targetInput: string;
  pdfPath: string;
  olympiadType: string;
  syllabusContext: string;
  curriculum: { grade: string, board: string, subject: string, chapter: string, topics: string[] } | null;
  gaps: { topic: string, required: { Easy: number, Medium: number, Hard: number, Olympiad: number } }[];
  generatedQuestions: any[];
  status: string;
  totalInserted: number;
}

// ── Node 1: PDF Extractor ────────────────────────────────────────────
async function pdfExtractor(state: AgentState): Promise<Partial<AgentState>> {
  if (!state.pdfPath) {
    console.log(`\n[PDF] No PDF provided — running without syllabus grounding.`);
    return { syllabusContext: '' };
  }

  console.log(`\n[PDF] Extracting syllabus content from: ${state.pdfPath}`);
  const text = await extractPdfText(state.pdfPath);
  
  if (!text) {
    console.log(`[PDF] ⚠ No text extracted — continuing without RAG context.`);
    return { syllabusContext: '' };
  }

  // Truncate to ~12000 chars for prompt budget
  const truncated = text.slice(0, 12000);
  console.log(`[PDF] ✓ Loaded ${truncated.length.toLocaleString()} chars as syllabus context.`);
  return { syllabusContext: truncated };
}

// ── Node 2: Planner ──────────────────────────────────────────────────
async function curriculumPlanner(state: AgentState): Promise<Partial<AgentState>> {
  console.log(`\n[Planner] Mapping curriculum for: ${state.targetInput}`);

  const schema = z.object({
    grade: z.string(),
    board: z.string(),
    subject: z.string(),
    chapter: z.string(),
    topics: z.array(z.string()).describe("List of sub-topics within this chapter"),
  });
  
  const structuredLlm = llm.withStructuredOutput(schema);

  let prompt = `You are a curriculum architect. Break down the following request into specific details. Request: "${state.targetInput}". Return grade, board, subject, chapter, and an array of exhaustive topics.`;
  
  // If we have syllabus context, help the planner extract real topics
  if (state.syllabusContext) {
    prompt += `\n\nUse the following syllabus reference to identify the exact topics covered:\n${state.syllabusContext.slice(0, 4000)}`;
  }

  const result = await withRetry(
    () => structuredLlm.invoke(prompt),
    'Planner'
  );

  console.log(`[Planner] Found ${result.topics.length} topics for Chapter: ${result.chapter}`);
  result.topics.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));
  return { curriculum: result };
}

// ── Node 3: Assessor ─────────────────────────────────────────────────
async function databaseAssessor(state: AgentState): Promise<Partial<AgentState>> {
  if (!state.curriculum) return {};
  console.log(`\n[Assessor] Checking database for existing questions...`);
  const { grade, subject, chapter, topics } = state.curriculum;
  
  const gaps: any[] = [];
  const targetCounts = { Easy: 3, Medium: 3, Hard: 2, Olympiad: 2 };
  
  for (const topic of topics) {
    const existing = await prisma.question.groupBy({
      by: ['difficulty'],
      where: { grade, subject, chapter, topic },
      _count: { id: true }
    });
    
    const existingCounts: Record<string, number> = { Easy: 0, Medium: 0, Hard: 0, Olympiad: 0 };
    existing.forEach(e => existingCounts[e.difficulty] = e._count.id);
    
    const required: any = {};
    let needsGen = false;
    for (const [diff, target] of Object.entries(targetCounts)) {
      const needed = Math.max(0, target - existingCounts[diff]);
      required[diff] = needed;
      if (needed > 0) needsGen = true;
    }
    
    if (needsGen) {
      const existingStr = Object.entries(existingCounts).filter(([,c]) => c > 0).map(([d,c]) => `${c} ${d}`).join(', ') || 'none';
      const neededStr = Object.entries(required).filter(([,c]) => (c as number) > 0).map(([d,c]) => `${c} ${d}`).join(', ');
      console.log(`  📌 ${topic}: existing=[${existingStr}] → need=[${neededStr}]`);
      gaps.push({ topic, required });
    } else {
      console.log(`  ✓ ${topic}: fully covered`);
    }
  }
  
  console.log(`[Assessor] ${gaps.length} topic(s) require new questions.`);
  return { gaps };
}

// ── Node 4: Generator ────────────────────────────────────────────────
async function questionGenerator(state: AgentState): Promise<Partial<AgentState>> {
  if (state.gaps.length === 0 || !state.curriculum) {
    return { status: 'complete' };
  }
  
  // Process one gap at a time
  const gap = state.gaps[0];
  console.log(`\n[Generator] Writing questions for topic: ${gap.topic}...`);
  
  const qSchema = z.object({
    questions: z.array(z.object({
      difficulty: z.enum(['Easy', 'Medium', 'Hard', 'Olympiad']),
      content: z.string(),
      options: z.array(z.string()).length(4),
      correctAnswer: z.string(),
      explanation: z.string()
    }))
  });
  
  const structuredLlm = llm.withStructuredOutput(qSchema);
  
  // Build prompt
  let instructions = `Generate MCQs for Grade ${state.curriculum.grade} ${state.curriculum.board} ${state.curriculum.subject}, Chapter: ${state.curriculum.chapter}, Topic: ${gap.topic}.\n`;
  instructions += `Requirements:\n`;
  instructions += `IMPORTANT: DO NOT use LaTeX formatting or dollar signs ($) for math. Write equations as plain text (e.g. x^2 + 2x = 0).\n`;

  let totalRequested = 0;
  for (const [diff, count] of Object.entries(gap.required)) {
    if (count > 0) {
      instructions += `- ${count} questions of ${diff} difficulty.\n`;
      totalRequested += count;
    }
  }

  // ── RAG: Inject syllabus context ──
  if (state.syllabusContext) {
    instructions += `\n=== SYLLABUS REFERENCE (from official textbook/syllabus PDF) ===\n`;
    instructions += state.syllabusContext;
    instructions += `\n=== END SYLLABUS REFERENCE ===\n`;
    instructions += `\nCRITICAL: Base your questions strictly on the content, terminology, examples, and concepts found in the syllabus reference above.\n`;
  }

  // ── Olympiad sub-type ──
  if (gap.required.Olympiad > 0 && state.olympiadType && OLYMPIAD_TYPE_LABELS[state.olympiadType]) {
    const olympiadDetails: Record<string, string> = {
      'olympiad:ioqm': `IOQM/RMO level — India's hardest math competition. Questions MUST involve number theory (modular arithmetic, divisibility), combinatorics (pigeonhole, tiling), algebra (AM-GM, functional equations), or geometry (concurrency, power of a point). DO NOT generate basic factorisation or textbook problems. Example: "Find the remainder when 2^2024 is divided by 13"`,
      'olympiad:ntse-mat': `NTSE MAT — Pure reasoning: complex series patterns, analytical puzzles (5+ person seating/blood relations), coding-decoding with multi-step ciphers, Venn diagrams with 3+ sets. NOT math problems.`,
      'olympiad:ntse-sat': `NTSE SAT — Curriculum topics at competitive depth requiring multi-step reasoning and combining 2-3 concepts. Top 5% students should find these challenging.`,
      'olympiad:sof-imo': `SOF Math Olympiad — Multi-step problems with subtle twists, non-routine formula applications, pattern recognition requiring algebraic proof.`,
      'olympiad:sof-nso': `SOF Science Olympiad — Apply scientific principles to novel situations, multi-concept questions, experimental "what would happen if" reasoning.`,
      'olympiad:jee-foundation': `JEE Foundation — Free-body diagrams, energy conservation chains, quadratic inequalities, coordinate geometry with parametric approaches. Must require equation setup from word problems.`,
      'olympiad:neet-foundation': `NEET Foundation — Genetics with pedigree analysis, stoichiometry multi-step, periodic trend predictions, clinical application scenarios. Test understanding not memorization.`,
    };
    instructions += `\n=== OLYMPIAD TARGETING — CRITICAL ===\n`;
    instructions += olympiadDetails[state.olympiadType] || OLYMPIAD_TYPE_LABELS[state.olympiadType];
    instructions += `\nHARD RULES: Must be SIGNIFICANTLY harder than board exams. Require 2-3 logical steps or non-obvious insight. Wrong options must be sophisticated traps.\n`;
    instructions += `=== END OLYMPIAD TARGETING ===\n`;
  }
  
  const result = await withRetry(
    () => structuredLlm.invoke(instructions),
    `Generator (${gap.topic})`
  );

  console.log(`[Generator] AI wrote ${result.questions.length} questions (requested ${totalRequested}).`);
  
  const formattedQuestions = result.questions.map(q => {
    const tags = [gap.topic, state.curriculum!.subject];
    if (q.difficulty === 'Olympiad' && state.olympiadType) {
      tags.push(state.olympiadType);
    }
    return {
      ...q,
      board: state.curriculum!.board,
      grade: state.curriculum!.grade,
      subject: state.curriculum!.subject,
      chapter: state.curriculum!.chapter,
      topic: gap.topic,
      type: 'MCQ',
      tags,
    };
  });
  
  return { generatedQuestions: formattedQuestions };
}

// ── Node 5: Seeder ───────────────────────────────────────────────────
async function databaseSeeder(state: AgentState): Promise<Partial<AgentState>> {
  if (state.generatedQuestions.length === 0) return {};
  console.log(`\n[Seeder] Inserting ${state.generatedQuestions.length} questions into DB...`);
  
  try {
    const result = await prisma.question.createMany({
      data: state.generatedQuestions,
      skipDuplicates: true
    });
    
    const newTotal = state.totalInserted + result.count;
    console.log(`[Seeder] ✓ Inserted ${result.count} questions (total so far: ${newTotal}).`);
    
    // Remove the processed gap
    const remainingGaps = state.gaps.slice(1);
    return { gaps: remainingGaps, generatedQuestions: [], totalInserted: newTotal };
  } catch (err: any) {
    console.error(`[Seeder] ✗ DB insertion failed: ${err.message}`);
    // Still remove the gap to avoid infinite loop, but log the error
    const remainingGaps = state.gaps.slice(1);
    return { gaps: remainingGaps, generatedQuestions: [] };
  }
}

// ── Conditional Edge ─────────────────────────────────────────────────
function shouldContinue(state: AgentState) {
  if (state.gaps.length > 0) {
    return 'Generator';
  }
  return END;
}

// ── Build Graph ──────────────────────────────────────────────────────
const workflow = new StateGraph<AgentState>({
  channels: {
    targetInput:         { value: (x, y) => y ?? x, default: () => '' },
    pdfPath:             { value: (x, y) => y ?? x, default: () => '' },
    olympiadType:        { value: (x, y) => y ?? x, default: () => 'olympiad:ntse-sat' },
    syllabusContext:     { value: (x, y) => y ?? x, default: () => '' },
    curriculum:          { value: (x, y) => y ?? x, default: () => null },
    gaps:                { value: (x, y) => y ?? x, default: () => [] },
    generatedQuestions:  { value: (x, y) => y ?? x, default: () => [] },
    status:              { value: (x, y) => y ?? x, default: () => '' },
    totalInserted:       { value: (x, y) => y ?? x, default: () => 0 },
  }
})
  .addNode("PDFExtractor", pdfExtractor)
  .addNode("Planner", curriculumPlanner)
  .addNode("Assessor", databaseAssessor)
  .addNode("Generator", questionGenerator)
  .addNode("Seeder", databaseSeeder)
  .addEdge(START, "PDFExtractor")
  .addEdge("PDFExtractor", "Planner")
  .addEdge("Planner", "Assessor")
  .addEdge("Assessor", "Generator")
  .addEdge("Generator", "Seeder")
  .addConditionalEdges("Seeder", shouldContinue, {
    "Generator": "Generator",
    [END]: END
  });

const app = workflow.compile();

// ── Entry Point ──────────────────────────────────────────────────────
async function run() {
  const { input, pdfPath, olympiadType } = parseArgs();

  if (!input) {
    console.error(`
Usage: npm run agent:seed "<target>" [--pdf <path>] [--olympiad <type>]

Examples:
  npm run agent:seed "Grade 9 ICSE Maths Algebra"
  npm run agent:seed "Grade 10 CBSE Science Light" --pdf ./syllabus/ncert_10_science.pdf
  npm run agent:seed "Grade 9 Maths" --pdf ./syllabus.pdf --olympiad olympiad:ioqm

Available olympiad types:
  olympiad:ntse-mat        NTSE Mental Ability Test
  olympiad:ntse-sat        NTSE Scholastic Aptitude Test
  olympiad:ioqm            IOQM / RMO / INMO pathway
  olympiad:sof-imo         SOF International Math Olympiad
  olympiad:sof-nso         SOF National Science Olympiad
  olympiad:jee-foundation  JEE Foundation
  olympiad:neet-foundation NEET Foundation
`);
    process.exit(1);
  }
  
  console.log(`\n🚀 Starting Autonomous AI Seeder Agent`);
  console.log(`   Target: ${input}`);
  if (pdfPath) console.log(`   📄 PDF:  ${pdfPath}`);
  console.log(`   🏆 Olympiad Type: ${olympiadType}`);
  console.log(`   ─────────────────────────────────────\n`);

  try {
    await app.invoke({
      targetInput: input,
      pdfPath,
      olympiadType,
      syllabusContext: '',
      curriculum: null,
      gaps: [],
      generatedQuestions: [],
      status: '',
      totalInserted: 0,
    });
    console.log(`\n✅ Autonomous seeding complete!\n`);
  } catch (err: any) {
    console.error(`\n❌ Agent failed: ${err.message}\n`);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

run();
