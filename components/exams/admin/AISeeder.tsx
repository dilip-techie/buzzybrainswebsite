'use client';

import React, { useState, useRef, useMemo } from 'react';
import { Bot, Save, CheckCircle2, AlertCircle, Loader2, Sparkles, Wand2, Upload, FileText, X, Trophy, BookOpen, ShieldCheck, ChevronDown } from 'lucide-react';
import LatexContent from '@/components/exams/ui/LatexContent';

// ── Curriculum Data ──────────────────────────────────────────────────
type DiffKey = 'Easy' | 'Medium' | 'Hard' | 'Olympiad';

const GRADES = ['7', '8', '9', '10', '11', '12'];

const BOARDS_BY_GRADE: Record<string, string[]> = {
  '7': ['CBSE'], '8': ['CBSE', 'Foundation'], '9': ['CBSE', 'ICSE'],
  '10': ['CBSE'], '11': ['CBSE'], '12': ['CBSE'],
};

const SUBJECTS: Record<string, string[]> = {
  'CBSE-7': ['Maths', 'Science'],
  'CBSE-8': ['Maths', 'Science'], 'Foundation-8': ['Maths', 'Physics', 'Science'],
  'CBSE-9': ['Maths', 'Science'], 'ICSE-9': ['Maths', 'Science'],
  'CBSE-10': ['Maths', 'Science', 'Physics'],
  'CBSE-11': ['Maths', 'Physics', 'Chemistry', 'Biology'],
  'CBSE-12': ['Maths', 'Physics', 'Chemistry', 'Biology'],
};

const CHAPTERS: Record<string, string[]> = {
  // Grade 7
  'CBSE-7-Maths': ['Integers', 'Fractions and Decimals', 'Simple Equations', 'Lines and Angles', 'The Triangle and its Properties', 'Perimeter and Area', 'Algebraic Expressions', 'Ratio and Proportion', 'Data Handling'],
  'CBSE-7-Science': ['Nutrition in Plants', 'Nutrition in Animals', 'Heat', 'Acids Bases and Indicators', 'Physical and Chemical Changes', 'Weather Climate', 'Soil', 'Respiration in Organisms', 'Transportation in Animals', 'Reproduction in Plants', 'Motion and Time', 'Electric Current', 'Light', 'Forests'],
  // Grade 8
  'CBSE-8-Maths': ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Data Handling', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Comparing Quantities', 'Algebraic Expressions and Identities', 'Mensuration', 'Exponents and Powers', 'Direct and Inverse Proportions', 'Factorisation', 'Introduction to Graphs'],
  'CBSE-8-Science': ['Crop Production and Management', 'Microorganisms', 'Synthetic Fibres and Plastics', 'Metals and Non-Metals', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plants and Animals', 'Cell Structure and Functions', 'Reproduction in Animals', 'Reaching the Age of Adolescence', 'Force and Pressure', 'Friction', 'Sound', 'Light', 'Stars and the Solar System'],
  'Foundation-8-Maths': ['Rational Numbers', 'Linear Equations', 'Mensuration', 'Algebraic Expressions'],
  'Foundation-8-Physics': ['Light', 'Force and Pressure', 'Sound'],
  'Foundation-8-Science': ['Cell Structure', 'Metals and Non-Metals'],
  // Grade 9
  'CBSE-9-Maths': ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', 'Lines and Angles', 'Triangles', 'Quadrilaterals', 'Circles', 'Herons Formula', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
  'CBSE-9-Science': ['Matter in Our Surroundings', 'Is Matter Around Us Pure', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound', 'Natural Resources', 'Improvement in Food Resources'],
  'ICSE-9-Maths': ['Expansions', 'Factorisation', 'Simultaneous Linear Equations', 'Indices', 'Logarithms', 'Triangles', 'Circles', 'Statistics'],
  'ICSE-9-Science': ['Measurement and Experimentation', 'Motion', 'Heat and Energy', 'Light', 'Sound', 'Atomic Structure', 'Periodic Table', 'Chemical Changes'],
  // Grade 10
  'CBSE-10-Maths': ['Real Numbers', 'Polynomials', 'Pair of Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Trigonometry', 'Circles', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
  'CBSE-10-Science': ['Chemical Reactions and Equations', 'Acids Bases and Salts', 'Metals and Non-Metals', 'Carbon and its Compounds', 'Life Processes', 'Control and Coordination', 'Reproduction', 'Heredity', 'Light Reflection and Refraction', 'Human Eye', 'Electricity', 'Magnetic Effects', 'Sources of Energy', 'Environment'],
  'CBSE-10-Physics': ['Light Reflection and Refraction', 'Human Eye', 'Electricity', 'Magnetic Effects of Electric Current'],
  // Grade 11
  'CBSE-11-Maths': ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Complex Numbers', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Straight Lines', 'Conic Sections', 'Limits and Derivatives', 'Statistics', 'Probability'],
  'CBSE-11-Physics': ['Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion', 'Work Energy and Power', 'System of Particles', 'Gravitation', 'Mechanical Properties', 'Thermal Properties', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves'],
  'CBSE-11-Chemistry': ['Structure of Atom', 'Classification of Elements', 'Chemical Bonding', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Hydrogen', 'Organic Chemistry', 'Hydrocarbons', 'Environmental Chemistry'],
  'CBSE-11-Biology': ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Cell Structure', 'Cell Division', 'Photosynthesis', 'Respiration', 'Plant Growth', 'Digestion and Absorption', 'Breathing', 'Body Fluids', 'Locomotion', 'Neural Control'],
  // Grade 12
  'CBSE-12-Maths': ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability', 'Application of Derivatives', 'Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability'],
  'CBSE-12-Physics': ['Electric Charges and Fields', 'Electrostatic Potential', 'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves', 'Ray Optics', 'Wave Optics', 'Dual Nature of Radiation', 'Atoms', 'Nuclei', 'Semiconductor Electronics'],
  'CBSE-12-Chemistry': ['Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry', 'd and f Block Elements', 'Coordination Compounds', 'Haloalkanes', 'Alcohols Phenols Ethers', 'Aldehydes Ketones', 'Amines', 'Biomolecules', 'Polymers'],
  'CBSE-12-Biology': ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Biotechnology Principles', 'Biotechnology Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity', 'Environmental Issues'],
};

// Olympiad types filtered by grade
const OLYMPIAD_TYPES_BY_GRADE: Record<string, { value: string; label: string; desc: string }[]> = {
  '7':  [
    { value: 'olympiad:sof-imo', label: 'SOF — Math Olympiad (IMO)', desc: 'Challenging MCQs beyond board level' },
    { value: 'olympiad:sof-nso', label: 'SOF — Science Olympiad (NSO)', desc: 'Advanced science reasoning' },
  ],
  '8':  [
    { value: 'olympiad:sof-imo', label: 'SOF — Math Olympiad (IMO)', desc: 'Challenging MCQs beyond board level' },
    { value: 'olympiad:sof-nso', label: 'SOF — Science Olympiad (NSO)', desc: 'Advanced science reasoning' },
    { value: 'olympiad:ioqm',    label: 'IOQM / RMO', desc: 'Deep math reasoning, proof-style' },
  ],
  '9':  [
    { value: 'olympiad:ntse-mat', label: 'NTSE — Mental Ability (MAT)', desc: 'Logical reasoning, patterns, analogies' },
    { value: 'olympiad:ntse-sat', label: 'NTSE — Scholastic Aptitude (SAT)', desc: 'Curriculum topics at competitive depth' },
    { value: 'olympiad:ioqm',    label: 'IOQM / RMO', desc: 'Deep math reasoning, proof-style' },
    { value: 'olympiad:sof-imo', label: 'SOF — Math Olympiad (IMO)', desc: 'Challenging MCQs beyond board level' },
    { value: 'olympiad:sof-nso', label: 'SOF — Science Olympiad (NSO)', desc: 'Advanced science reasoning' },
  ],
  '10': [
    { value: 'olympiad:ntse-mat', label: 'NTSE — Mental Ability (MAT)', desc: 'Logical reasoning, patterns, analogies' },
    { value: 'olympiad:ntse-sat', label: 'NTSE — Scholastic Aptitude (SAT)', desc: 'Curriculum topics at competitive depth' },
    { value: 'olympiad:ioqm',    label: 'IOQM / RMO', desc: 'Deep math reasoning, proof-style' },
    { value: 'olympiad:sof-imo', label: 'SOF — Math Olympiad (IMO)', desc: 'Challenging MCQs beyond board level' },
    { value: 'olympiad:sof-nso', label: 'SOF — Science Olympiad (NSO)', desc: 'Advanced science reasoning' },
  ],
  '11': [
    { value: 'olympiad:ioqm',            label: 'IOQM / RMO', desc: 'Deep math reasoning, proof-style' },
    { value: 'olympiad:sof-imo',         label: 'SOF — Math Olympiad (IMO)', desc: 'Challenging MCQs beyond board level' },
    { value: 'olympiad:sof-nso',         label: 'SOF — Science Olympiad (NSO)', desc: 'Advanced science reasoning' },
    { value: 'olympiad:jee-foundation',  label: 'JEE Foundation', desc: 'Physics/Maths conceptual depth' },
    { value: 'olympiad:neet-foundation', label: 'NEET Foundation', desc: 'Bio/Chem conceptual depth' },
  ],
  '12': [
    { value: 'olympiad:ioqm',            label: 'IOQM / RMO', desc: 'Deep math reasoning, proof-style' },
    { value: 'olympiad:sof-imo',         label: 'SOF — Math Olympiad (IMO)', desc: 'Challenging MCQs beyond board level' },
    { value: 'olympiad:sof-nso',         label: 'SOF — Science Olympiad (NSO)', desc: 'Advanced science reasoning' },
    { value: 'olympiad:jee-foundation',  label: 'JEE Foundation', desc: 'Physics/Maths conceptual depth' },
    { value: 'olympiad:neet-foundation', label: 'NEET Foundation', desc: 'Bio/Chem conceptual depth' },
  ],
};

const COUNT_OPTIONS = [1, 2, 3, 4, 5, 6, 8, 10];

interface GeneratedQuestion {
  board: string; grade: string; subject: string; chapter: string; topic: string;
  difficulty: DiffKey; type: string; content: string; options: string[];
  correctAnswer: string; explanation: string; tags: string[]; verified?: boolean;
}

// ── Styled Dropdown ──────────────────────────────────────────────────
function Select({ label, value, onChange, options, placeholder }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full appearance-none p-2.5 pr-8 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all cursor-pointer hover:border-slate-300"
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
    </div>
  );
}

// ── Select with Custom Input ─────────────────────────────────────────
function SelectWithCustom({ label, value, onChange, options, placeholder }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; placeholder?: string;
}) {
  const [isCustom, setIsCustom] = useState(false);
  const isValueInOptions = options.some(o => o.value === value);

  return (
    <div>
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">{label}</label>
      {!isCustom && isValueInOptions || (!isCustom && !value) ? (
        <div className="relative">
          <select
            value={value}
            onChange={e => {
              if (e.target.value === '__custom__') {
                setIsCustom(true);
                onChange('');
              } else {
                onChange(e.target.value);
              }
            }}
            className="w-full appearance-none p-2.5 pr-8 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all cursor-pointer hover:border-slate-300"
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            <option value="__custom__">＋ Custom...</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            autoFocus
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Type custom value..."
            className="flex-1 p-2.5 border border-indigo-300 rounded-lg text-sm font-semibold text-slate-800 bg-indigo-50/30 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400"
          />
          <button
            onClick={() => { setIsCustom(false); onChange(options[0]?.value || ''); }}
            className="px-2.5 py-1 text-xs font-bold text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50"
          >
            ← List
          </button>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
export default function AISeederPage() {
  const [activeTab, setActiveTab] = useState<'manual' | 'auto'>('manual');

  // Curriculum selections
  const [grade, setGrade] = useState('9');
  const [board, setBoard] = useState('ICSE');
  const [subject, setSubject] = useState('Maths');
  const [chapter, setChapter] = useState('Factorisation');
  const [topic, setTopic] = useState('');

  // Difficulty counts (manual mode)
  const [diffCounts, setDiffCounts] = useState<Record<DiffKey, number>>({ Easy: 0, Medium: 3, Hard: 0, Olympiad: 0 });

  // Olympiad
  const [olympiadType, setOlympiadType] = useState('');

  // PDF / RAG
  const [syllabusText, setSyllabusText] = useState('');
  const [pdfFileName, setPdfFileName] = useState('');
  const [pdfParsing, setPdfParsing] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [reviewQuestions, setReviewQuestions] = useState<GeneratedQuestion[]>([]);

  // ── Derived curriculum data ────────────────────────────────────────
  const availableBoards = useMemo(() => BOARDS_BY_GRADE[grade] || ['CBSE'], [grade]);
  const availableSubjects = useMemo(() => SUBJECTS[`${board}-${grade}`] || ['Maths', 'Science'], [board, grade]);
  const availableChapters = useMemo(() => CHAPTERS[`${board}-${grade}-${subject}`] || [], [board, grade, subject]);
  const availableOlympiadTypes = useMemo(() => OLYMPIAD_TYPES_BY_GRADE[grade] || [], [grade]);
  const olympiadRequested = activeTab === 'manual' ? diffCounts.Olympiad > 0 : true;

  // ── Cascade resets ─────────────────────────────────────────────────
  const handleGradeChange = (g: string) => {
    setGrade(g);
    const boards = BOARDS_BY_GRADE[g] || ['CBSE'];
    setBoard(boards[0]);
    const subs = SUBJECTS[`${boards[0]}-${g}`] || ['Maths'];
    setSubject(subs[0]);
    const chaps = CHAPTERS[`${boards[0]}-${g}-${subs[0]}`] || [];
    setChapter(chaps[0] || '');
    setTopic('');
    setOlympiadType('');
  };

  const handleBoardChange = (b: string) => {
    setBoard(b);
    const subs = SUBJECTS[`${b}-${grade}`] || ['Maths'];
    setSubject(subs[0]);
    const chaps = CHAPTERS[`${b}-${grade}-${subs[0]}`] || [];
    setChapter(chaps[0] || '');
    setTopic('');
  };

  const handleSubjectChange = (s: string) => {
    setSubject(s);
    const chaps = CHAPTERS[`${board}-${grade}-${s}`] || [];
    setChapter(chaps[0] || '');
    setTopic('');
  };

  // ── PDF Upload ─────────────────────────────────────────────────────
  const handlePdfUpload = async (file: File) => {
    if (!file.name.toLowerCase().endsWith('.pdf')) { setPdfError('Please upload a .pdf file'); return; }
    setPdfParsing(true); setPdfError(null); setPdfFileName(file.name);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/questions/parse-pdf', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to parse PDF');
      setSyllabusText(data.text);
    } catch (err: any) {
      setPdfError(err.message); setPdfFileName(''); setSyllabusText('');
    } finally { setPdfParsing(false); }
  };

  const clearPdf = () => { setSyllabusText(''); setPdfFileName(''); setPdfError(null); if (fileInputRef.current) fileInputRef.current.value = ''; };

  // ── Generate ───────────────────────────────────────────────────────
  const handleGenerate = async (mode: 'manual' | 'auto') => {
    setLoading(true); setError(null); setSuccess(null); setReviewQuestions([]);
    const counts = mode === 'auto' ? { Easy: 3, Medium: 3, Hard: 2, Olympiad: 2 } : diffCounts;
    const allGenerated: GeneratedQuestion[] = [];

    try {
      for (const [diff, count] of Object.entries(counts)) {
        if (count > 0) {
          const payload: any = { board, grade, subject, chapter, topic: topic || chapter, concept: '', difficulty: diff, count };
          if (syllabusText.trim()) payload.syllabusContext = syllabusText;
          if (diff === 'Olympiad' && olympiadType) payload.olympiadType = olympiadType;

          const res = await fetch('/api/questions/ai-generate', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error || `Failed to generate ${diff} questions`); }
          const data = await res.json();
          const qs = data.questions.map((q: any) => {
            const tags = [topic || chapter, subject];
            if (diff === 'Olympiad' && olympiadType) tags.push(olympiadType);
            return { ...q, board, grade, subject, chapter, topic: topic || chapter, difficulty: diff, type: 'MCQ', tags };
          });
          allGenerated.push(...qs);
        }
      }
      setReviewQuestions(allGenerated);
    } catch (err: any) { setError(err.message || 'Generation failed'); }
    finally { setLoading(false); }
  };

  const handleSaveToDb = async () => {
    if (reviewQuestions.length === 0) return;
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/questions/bulk', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ questions: reviewQuestions }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSuccess(`Successfully imported ${reviewQuestions.length} questions to the database!`);
      setReviewQuestions([]);
    } catch (err: any) { setError(err.message || 'Failed to save'); }
    finally { setLoading(false); }
  };

  const diffBadgeColor = (d: string) => {
    if (d === 'Easy') return 'bg-emerald-50 text-emerald-600 border-emerald-200';
    if (d === 'Medium') return 'bg-amber-50 text-amber-600 border-amber-200';
    if (d === 'Hard') return 'bg-red-50 text-red-600 border-red-200';
    return 'bg-purple-50 text-purple-600 border-purple-200';
  };

  const totalQuestions = activeTab === 'auto' ? 10 : Object.values(diffCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl"><Bot className="w-6 h-6" /></div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Curriculum Seeder</h1>
          <p className="text-slate-500 text-sm">Generate NCERT/board-aligned questions with syllabus grounding</p>
        </div>
      </div>

      {/* Mode Tabs */}
      <div className="flex gap-4 border-b border-slate-200">
        <button onClick={() => setActiveTab('manual')} className={`pb-3 px-4 font-bold text-sm border-b-2 flex items-center gap-2 ${activeTab === 'manual' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
          <Sparkles className="w-4 h-4" /> Assisted Review
        </button>
        <button onClick={() => setActiveTab('auto')} className={`pb-3 px-4 font-bold text-sm border-b-2 flex items-center gap-2 ${activeTab === 'auto' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
          <Wand2 className="w-4 h-4" /> Auto Pattern (3-3-2-2)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ════ LEFT PANEL: Controls ════ */}
        <div className="col-span-1 space-y-4">

          {/* Curriculum Selectors Card */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3.5">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center text-[10px] font-black">1</span>
              Target Curriculum
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <Select label="Class" value={grade} onChange={handleGradeChange}
                options={GRADES.map(g => ({ value: g, label: `Grade ${g}` }))} />
              <Select label="Board" value={board} onChange={handleBoardChange}
                options={availableBoards.map(b => ({ value: b, label: b }))} />
            </div>

            <Select label="Subject" value={subject} onChange={handleSubjectChange}
              options={availableSubjects.map(s => ({ value: s, label: s }))} />

            <SelectWithCustom label="Chapter" value={chapter} onChange={setChapter}
              options={availableChapters.map(c => ({ value: c, label: c }))} placeholder="Select chapter" />

            <SelectWithCustom label="Topic (Optional)" value={topic} onChange={setTopic}
              options={[
                { value: '', label: 'Same as chapter' },
                ...(chapter ? [{ value: chapter, label: chapter }] : []),
              ]} placeholder="Same as chapter" />
          </div>

          {/* PDF Upload Card */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center text-[10px] font-black">2</span>
              Syllabus PDF <span className="text-[10px] text-slate-400 font-normal">(Optional RAG)</span>
            </h3>

            {!pdfFileName ? (
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition-colors"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={e => { e.preventDefault(); e.stopPropagation(); const f = e.dataTransfer.files[0]; if (f) handlePdfUpload(f); }}>
                <Upload className="w-5 h-5 mx-auto text-slate-400 mb-1" />
                <p className="text-xs text-slate-500 font-medium">Drop NCERT PDF or <span className="text-indigo-600 underline">browse</span></p>
                <input ref={fileInputRef} type="file" accept=".pdf" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handlePdfUpload(f); }} />
              </div>
            ) : (
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span className="text-xs font-bold text-indigo-700 truncate">{pdfFileName}</span>
                  </div>
                  <button onClick={clearPdf} className="p-1 hover:bg-indigo-100 rounded text-indigo-400 hover:text-red-500"><X className="w-3.5 h-3.5" /></button>
                </div>
                {pdfParsing && <div className="flex items-center gap-2 text-xs text-indigo-600"><Loader2 className="w-3 h-3 animate-spin" /> Extracting...</div>}
                {syllabusText && <div className="text-[10px] text-indigo-600 font-medium">✓ {syllabusText.length.toLocaleString()} chars — AI will use as ground truth</div>}
              </div>
            )}
            {pdfError && <div className="p-2 bg-red-50 text-red-600 text-xs font-bold rounded-lg flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> {pdfError}</div>}
          </div>

          {/* Quantity & Difficulty Card */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3.5">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center text-[10px] font-black">3</span>
              Quantity & Difficulty
            </h3>

            {activeTab === 'manual' ? (
              <div className="grid grid-cols-2 gap-2.5">
                {(['Easy', 'Medium', 'Hard', 'Olympiad'] as DiffKey[]).map(d => (
                  <div key={d} className={`flex items-center justify-between p-2.5 rounded-lg border ${diffBadgeColor(d)}`}>
                    <span className="text-xs font-bold">{d}</span>
                    <div className="relative">
                      <select
                        value={diffCounts[d]}
                        onChange={e => setDiffCounts(prev => ({...prev, [d]: Number(e.target.value)}))}
                        className="appearance-none w-14 p-1 pr-5 text-center border rounded text-xs font-bold bg-white cursor-pointer"
                      >
                        {[0,1,2,3,4,5,6,8,10].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-700">
                Auto mode: <strong>3 Easy, 3 Medium, 2 Hard, 2 Olympiad</strong> = 10 questions
              </div>
            )}

            <div className="text-xs text-slate-500 font-semibold text-right">
              Total: <span className="text-indigo-600 font-bold">{totalQuestions}</span> questions
            </div>
          </div>

          {/* Olympiad Type Card — only when Olympiad is requested */}
          {olympiadRequested && availableOlympiadTypes.length > 0 && (
            <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <Trophy className="w-4 h-4 text-purple-500" />
                Olympiad Target Exam
              </h3>
              <div className="relative">
                <select
                  value={olympiadType}
                  onChange={e => setOlympiadType(e.target.value)}
                  className="w-full appearance-none p-2.5 pr-8 bg-white border border-purple-200 rounded-lg text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 cursor-pointer"
                >
                  <option value="">Select exam type...</option>
                  {availableOlympiadTypes.map(ot => (
                    <option key={ot.value} value={ot.value}>{ot.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
              </div>
              {olympiadType && (
                <p className="text-[10px] text-purple-500 font-medium px-1">
                  {availableOlympiadTypes.find(o => o.value === olympiadType)?.desc}
                </p>
              )}
            </div>
          )}

          {/* Generate Button */}
          <button disabled={loading || !chapter || totalQuestions === 0} onClick={() => handleGenerate(activeTab)}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 transition-colors shadow-lg shadow-indigo-600/20">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {loading ? 'Generating...' : `Generate ${totalQuestions} Questions`}
          </button>

          {error && <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg flex items-start gap-2"><AlertCircle className="w-4 h-4 shrink-0" /> {error}</div>}
          {success && <div className="p-3 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg flex items-start gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> {success}</div>}
        </div>

        {/* ════ RIGHT PANEL: Review ════ */}
        <div className="col-span-1 lg:col-span-2 space-y-4">
          {reviewQuestions.length === 0 ? (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl text-slate-400">
              <Bot className="w-12 h-12 mb-3 text-slate-300" />
              <p className="text-sm font-semibold">Generated questions will appear here</p>
              <p className="text-xs text-slate-400 mt-1">Grade {grade} • {board} • {subject} • {chapter || '...'}</p>
              {syllabusText && <p className="text-xs text-indigo-500 mt-2 flex items-center gap-1"><BookOpen className="w-3 h-3" /> Syllabus grounded</p>}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div>
                  <h3 className="font-bold text-slate-900">Review Questions ({reviewQuestions.length})</h3>
                  <p className="text-xs text-slate-500">
                    Grade {grade} • {board} • {subject} • {chapter}
                    {syllabusText && <span className="text-indigo-500 ml-1">• RAG Active</span>}
                  </p>
                </div>
                <button disabled={loading} onClick={handleSaveToDb} className="py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg flex items-center gap-2 transition-colors">
                  <Save className="w-4 h-4" /> Save to Database
                </button>
              </div>

              {/* Verification Banner */}
              {reviewQuestions.some(q => q.verified !== undefined) && (
                <div className={`p-3 rounded-lg flex items-center gap-2 text-xs font-bold ${
                  reviewQuestions.every(q => q.verified) ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  {reviewQuestions.every(q => q.verified)
                    ? `All ${reviewQuestions.length} answers independently verified`
                    : `${reviewQuestions.filter(q => q.verified).length}/${reviewQuestions.length} verified`}
                </div>
              )}

              {reviewQuestions.map((q, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 flex gap-0">
                    {q.verified !== undefined && (
                      <span className={`text-[10px] font-bold px-2 py-1 border-b border-l flex items-center gap-1 ${
                        q.verified ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-slate-100 text-slate-400 border-slate-200'
                      }`}>
                        <ShieldCheck className="w-3 h-3" /> {q.verified ? 'Verified ✓' : 'Unverified'}
                      </span>
                    )}
                    {q.difficulty === 'Olympiad' && q.tags?.some(t => t.startsWith('olympiad:')) && (
                      <span className="bg-purple-100 text-[10px] font-bold text-purple-600 px-2 py-1 border-b border-l border-purple-200 uppercase tracking-wider">
                        {availableOlympiadTypes.find(ot => q.tags.includes(ot.value))?.label.split('—')[0]?.trim() || 'Olympiad'}
                      </span>
                    )}
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-bl-lg border-b border-l uppercase tracking-wider ${diffBadgeColor(q.difficulty)}`}>
                      {q.difficulty}
                    </span>
                  </div>

                  <div className="pr-28">
                    <span className="font-bold text-indigo-600 mr-2">Q{idx+1}.</span>
                    <div className="font-semibold text-slate-800 text-sm"><LatexContent content={q.content} /></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className={`p-3 text-sm rounded-lg border ${opt === q.correctAnswer ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                        {opt} {opt === q.correctAnswer && <CheckCircle2 className="w-4 h-4 inline ml-2 text-emerald-500" />}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg">
                    <span className="text-[10px] font-bold uppercase text-blue-600 tracking-wider block mb-1">Explanation</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
