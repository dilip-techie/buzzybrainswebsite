import type { Metadata } from 'next';
import type { Track } from '@/lib/olympiad/data';

/**
 * Data for the NSEP / NSEC / NSEB coaching pages (/nsep-coaching-pune etc.).
 * All three share one page component (components/olympiad/NseExamPage.tsx).
 *
 * Facts used here match the site's existing exam guides: the National Standard
 * Examinations are conducted by IAPT, are multiple-choice with negative marking,
 * cover Class 11-12 level content, and lead to INPhO / INChO / INBO, a selection
 * camp and the international olympiad. Exact dates, fees and patterns change each
 * cycle, so pages tell families to confirm them with IAPT / HBCSE.
 */

export type NseSlug = 'nsep' | 'nsec' | 'nseb';

export interface NseExam {
  slug: NseSlug;
  path: string;
  code: string; // NSEP
  qualifier: string; // IOQP
  subject: string; // Physics
  emoji: string;
  fullName: string;
  nextStage: string; // INPhO
  international: string; // IPhO
  blogHref: string;
  blogLabel: string;
  /** Pathway steps shown in the hero visual. */
  pathway: { code: string; label: string }[];
  heroLede: string;
  chips: { label: string; color: string }[];
  titleLines: [string, string];
  highlight: string;
  tracksTitle: string;
  tracksSubtitle: string;
  tracks: Track[];
  roadmapTitle: string;
  roadmapSteps: { step: string; title: string; desc: string }[];
  facultyTitle: string;
  facultySubtitle: string;
  useScienceFaculty: boolean;
  leadHeading: string;
  programs: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  faqs: { q: string; a: string }[];
}

const NOTE_ON_NAMES =
  'IAPT and HBCSE run the first stage of the national science olympiad programme, which has also been called IOQP, IOQC and IOQB in recent cycles, with the NSE names still widely used. Names, dates and stages are updated by the organisers, so always confirm the current notice on the official IAPT and HBCSE websites.';

export const NSE_EXAMS: Record<NseSlug, NseExam> = {
  nsep: {
    slug: 'nsep',
    path: '/nsep-coaching-pune',
    code: 'NSEP',
    qualifier: 'IOQP',
    subject: 'Physics',
    emoji: '⚛️',
    fullName: 'National Standard Examination in Physics',
    nextStage: 'INPhO',
    international: 'IPhO',
    blogHref: '/blog/nsep-physics-olympiad-preparation-guide',
    blogLabel: 'Read the NSEP preparation guide',
    pathway: [
      { code: 'NSEP', label: 'First stage · IAPT' },
      { code: 'INPhO', label: 'National olympiad' },
      { code: 'Camp', label: 'Orientation-cum-selection' },
      { code: 'IPhO', label: 'International team' },
    ],
    heroLede:
      "Structured coaching for NSEP, the first stage of India's Physics Olympiad pipeline run by IAPT, leading to INPhO, the selection camp and the IPhO team. Mechanics-first, mentored by IIT alumni, in batches capped at 12.",
    chips: [
      { label: 'NSEP · INPhO · IPhO', color: '#2547CC' },
      { label: 'Class 11–12', color: '#F59E0B' },
      { label: 'Negative-marking strategy', color: '#10B981' },
    ],
    titleLines: ['Crack NSEP.', 'Reach'],
    highlight: 'the IPhO Pathway.',
    tracksTitle: 'What NSEP actually tests.',
    tracksSubtitle:
      'A multiple-choice paper across Class 11–12 physics, applied at a depth that rewards conceptual flexibility over formula recall. This is how we organise the syllabus.',
    tracks: [
      {
        id: 'nsep-mechanics',
        code: 'Mechanics',
        name: 'Mechanics & Properties of Matter',
        grades: 'Class 11–12',
        blurb: 'The topic physics olympiads test hardest. Newton’s laws, energy and momentum, rotation, gravitation, oscillations and fluids, taught through multi-step problems rather than isolated formulas.',
        meta: [['Approach', 'Free-body diagrams first'], ['Skill', 'Choosing the right method']],
        topics: ['Newton’s Laws', 'Energy & Momentum', 'Rotation', 'Oscillations'],
        outcome: 'The foundation every physics olympiad builds on',
        color: 'brand',
      },
      {
        id: 'nsep-em-optics',
        code: 'EM & Optics',
        name: 'Electricity, Magnetism & Optics',
        grades: 'Class 11–12',
        blurb: 'Electrostatics, circuits, magnetic effects, electromagnetic induction and ray and wave optics, with attention to the conceptual traps that negative marking punishes.',
        meta: [['Approach', 'Concept before formula'], ['Skill', 'Spotting symmetry']],
        topics: ['Electrostatics', 'Circuits', 'Induction', 'Optics'],
        outcome: 'Accuracy under negative marking',
        color: 'amber',
      },
      {
        id: 'nsep-thermo-modern',
        code: 'Thermo & Modern',
        name: 'Thermodynamics & Modern Physics',
        grades: 'Class 12',
        blurb: 'Heat, kinetic theory, thermodynamic processes, atoms, nuclei and the photoelectric effect, linked back to mechanics so students see physics as one connected subject.',
        meta: [['Approach', 'Link ideas across topics'], ['Skill', 'Estimation and units']],
        topics: ['Thermodynamics', 'Kinetic Theory', 'Atoms & Nuclei', 'Photoelectric Effect'],
        outcome: 'Full-syllabus coverage for the paper',
        color: 'sky',
      },
    ],
    roadmapTitle: 'A fixed sequence, because NSEP prep isn’t random.',
    roadmapSteps: [
      { step: '01', title: 'Diagnostic Mechanics Test', desc: 'A timed mechanics mock shows exactly where your child stands before we build a plan.' },
      { step: '02', title: 'Concept Foundation', desc: 'Mechanics-first sessions across the Class 11–12 syllabus, so ideas connect instead of being memorised.' },
      { step: '03', title: 'Problem-Pattern Drilling', desc: 'Past-paper style problems sorted by technique, not just topic, so patterns become instinct.' },
      { step: '04', title: 'Weekly Timed Mocks', desc: 'Full-length MCQ mocks under real conditions with negative marking, scored with a rank sheet every week.' },
      { step: '05', title: 'Exam-Day Readiness', desc: 'Speed drills, guess-or-skip strategy and last-mile revision tuned to the NSEP format.' },
    ],
    facultyTitle: 'Mentors who’ve solved these exact problem sets.',
    facultySubtitle: 'Led by Dilip Sir (B.Tech, IIT Kanpur) and an IIT Bombay PhD, both of whom mentor JEE and olympiad Physics directly.',
    useScienceFaculty: false,
    leadHeading: 'Sit a real timed mechanics mock before you commit.',
    programs: ['NSEP / INPhO', 'F=ma / USAPhO', 'Not sure yet — need guidance'],
    metaTitle: 'NSEP Coaching in Pune | Physics Olympiad | BuzzyBrains Academy',
    metaDescription:
      'NSEP coaching in Pune for Class 11–12: the first stage of the Indian Physics Olympiad pathway to INPhO and IPhO. Mechanics-first, IIT-alumni mentors, batches of 12.',
    keywords:
      'NSEP coaching Pune, NSEP preparation, National Standard Examination in Physics, IOQP coaching, INPhO preparation, physics olympiad Pune, IAPT NSEP',
    faqs: [
      {
        q: 'What is NSEP and who conducts it?',
        a: 'NSEP (National Standard Examination in Physics) is conducted by IAPT and is the first stage of India’s physics olympiad pipeline. Clearing the cutoff leads to INPhO, then a selection camp, and eventually the International Physics Olympiad (IPhO) for students who make the team.',
      },
      {
        q: 'Is NSEP the same as IOQP?',
        a: NOTE_ON_NAMES,
      },
      {
        q: 'Is there negative marking in NSEP?',
        a: 'Yes. NSEP is a multiple-choice paper with negative marking, so accuracy and a clear guess-or-skip strategy matter as much as coverage. Our weekly mocks are marked the same way.',
      },
      {
        q: 'Does NSEP preparation help with JEE Physics?',
        a: 'Significantly. Both reward conceptual flexibility over formula plug-in, so serious NSEP preparation and JEE Physics preparation reinforce each other.',
      },
      {
        q: 'When should my child start?',
        a: 'A Class 11 student can plan for two attempts (Class 11 and Class 12), so starting early and building depth works best. Class 12 students should focus on timed mocks and closing specific gaps. Confirm the current eligibility and dates with IAPT.',
      },
      {
        q: 'What is the batch size?',
        a: 'Every BuzzyBrains Academy batch is capped at 12 students, so every student gets individual score analysis.',
      },
    ],
  },

  nsec: {
    slug: 'nsec',
    path: '/nsec-coaching-pune',
    code: 'NSEC',
    qualifier: 'IOQC',
    subject: 'Chemistry',
    emoji: '🧪',
    fullName: 'National Standard Examination in Chemistry',
    nextStage: 'INChO',
    international: 'IChO',
    blogHref: '/blog/nsec-chemistry-olympiad-preparation-guide',
    blogLabel: 'Read the NSEC preparation guide',
    pathway: [
      { code: 'NSEC', label: 'First stage · IAPT' },
      { code: 'INChO', label: 'National olympiad' },
      { code: 'Camp', label: 'Selection camp' },
      { code: 'IChO', label: 'International team' },
    ],
    heroLede:
      "Structured coaching for NSEC, the first stage of India's Chemistry Olympiad pipeline run by IAPT, leading to INChO, the selection camp and the IChO team. Mechanism-first Organic, strong Physical numericals, batches capped at 12.",
    chips: [
      { label: 'NSEC · INChO · IChO', color: '#2547CC' },
      { label: 'Class 11–12', color: '#F59E0B' },
      { label: 'Mechanism-based Organic', color: '#10B981' },
    ],
    titleLines: ['Crack NSEC.', 'Reach'],
    highlight: 'the IChO Pathway.',
    tracksTitle: 'What NSEC actually tests.',
    tracksSubtitle:
      'A multiple-choice, negative-marking paper across Physical, Organic and Inorganic Chemistry, weighing all three branches and rewarding applied understanding over memorised reactions.',
    tracks: [
      {
        id: 'nsec-physical',
        code: 'Physical',
        name: 'Physical Chemistry',
        grades: 'Class 11–12',
        blurb: 'Mole concept, thermodynamics, equilibrium, kinetics, electrochemistry and solutions. Numericals that fade fastest without regular practice, so we revisit them every week.',
        meta: [['Approach', 'Numericals on a schedule'], ['Skill', 'Units and estimation']],
        topics: ['Mole Concept', 'Thermodynamics', 'Equilibrium', 'Kinetics'],
        outcome: 'Fast, accurate numerical problem solving',
        color: 'brand',
      },
      {
        id: 'nsec-organic',
        code: 'Organic',
        name: 'Organic Chemistry',
        grades: 'Class 11–12',
        blurb: 'The most common weak point. We rebuild Organic around mechanisms, not memorised named reactions, which is exactly what olympiad-level questions test.',
        meta: [['Approach', 'Mechanism-first'], ['Common trap', 'Memorising reactions']],
        topics: ['Reaction Mechanisms', 'Stereochemistry', 'Functional Groups', 'Named Reactions'],
        outcome: 'The single highest-leverage change for most students',
        color: 'amber',
      },
      {
        id: 'nsec-inorganic',
        code: 'Inorganic',
        name: 'Inorganic Chemistry',
        grades: 'Class 11–12',
        blurb: 'Periodic trends, chemical bonding, coordination compounds and the chemistry of the main groups, learnt through patterns and reasons rather than lists of facts.',
        meta: [['Approach', 'Trends and reasons'], ['Skill', 'Linking structure to property']],
        topics: ['Periodic Trends', 'Bonding', 'Coordination Compounds', 'p-Block'],
        outcome: 'Balanced coverage across all three branches',
        color: 'sky',
      },
    ],
    roadmapTitle: 'A fixed sequence, because NSEC prep isn’t random.',
    roadmapSteps: [
      { step: '01', title: 'Diagnostic Chemistry Test', desc: 'A timed mixed mock across Physical, Organic and Inorganic shows where the real gaps are.' },
      { step: '02', title: 'Concept Foundation', desc: 'All three branches built up evenly, with Organic taught through mechanisms from the start.' },
      { step: '03', title: 'Problem-Pattern Drilling', desc: 'Numerical and mechanism problems sorted by technique, with weekly Physical Chemistry practice.' },
      { step: '04', title: 'Weekly Timed Mocks', desc: 'Full-length MCQ mocks with negative marking, scored with individual feedback every week.' },
      { step: '05', title: 'Exam-Day Readiness', desc: 'Speed drills, guess-or-skip strategy and last-mile revision tuned to the NSEC format.' },
    ],
    facultyTitle: 'Mentors who teach Chemistry at olympiad depth.',
    facultySubtitle: 'Research-trained science faculty who mentor JEE, NEET and olympiad Chemistry directly.',
    useScienceFaculty: true,
    leadHeading: 'Sit a real timed chemistry mock before you commit.',
    programs: ['NSEC / INChO', 'Not sure yet — need guidance'],
    metaTitle: 'NSEC Coaching in Pune | Chemistry Olympiad | BuzzyBrains Academy',
    metaDescription:
      'NSEC coaching in Pune for Class 11–12: the first stage of the Indian Chemistry Olympiad pathway to INChO and IChO. Mechanism-first Organic, research-trained faculty, batches of 12.',
    keywords:
      'NSEC coaching Pune, NSEC preparation, National Standard Examination in Chemistry, IOQC coaching, INChO preparation, chemistry olympiad Pune, IAPT NSEC',
    faqs: [
      {
        q: 'What is NSEC and who conducts it?',
        a: 'NSEC (National Standard Examination in Chemistry) is conducted by IAPT and is the first stage of India’s chemistry olympiad pipeline. Clearing the cutoff leads to INChO, then a selection camp, and eventually the International Chemistry Olympiad (IChO) for students who make the team.',
      },
      {
        q: 'Is NSEC the same as IOQC?',
        a: NOTE_ON_NAMES,
      },
      {
        q: 'Is NSEC harder than JEE Chemistry?',
        a: 'It covers similar content but rewards deeper conceptual and mechanism-based reasoning over formula recall, and it uses negative marking. Strong JEE Chemistry preparation helps, but it is not enough on its own.',
      },
      {
        q: 'Why do students struggle with Organic Chemistry in NSEC?',
        a: 'Most students study Organic through memorised named reactions. NSEC-level questions test mechanisms, so rebuilding Organic around mechanisms is usually the biggest single improvement.',
      },
      {
        q: 'When should my child start?',
        a: 'A Class 11 student can plan for two attempts (Class 11 and Class 12), so starting early works best. Class 12 students should focus on timed mocks and specific gaps. Confirm the current eligibility and dates with IAPT.',
      },
      {
        q: 'What is the batch size?',
        a: 'Every BuzzyBrains Academy batch is capped at 12 students, so every student gets individual score analysis.',
      },
    ],
  },

  nseb: {
    slug: 'nseb',
    path: '/nseb-coaching-pune',
    code: 'NSEB',
    qualifier: 'IOQB',
    subject: 'Biology',
    emoji: '🧬',
    fullName: 'National Standard Examination in Biology',
    nextStage: 'INBO',
    international: 'IBO',
    blogHref: '/blog/nseb-biology-olympiad-preparation-guide',
    blogLabel: 'Read the NSEB preparation guide',
    pathway: [
      { code: 'NSEB', label: 'First stage · IAPT' },
      { code: 'INBO', label: 'National olympiad' },
      { code: 'Camp', label: 'Selection camp' },
      { code: 'IBO', label: 'International team' },
    ],
    heroLede:
      "Structured coaching for NSEB, the first stage of India's Biology Olympiad pipeline run by IAPT, leading to INBO, the selection camp and the IBO team. NCERT-depth teaching, diagram practice, batches capped at 12.",
    chips: [
      { label: 'NSEB · INBO · IBO', color: '#2547CC' },
      { label: 'Class 11–12', color: '#F59E0B' },
      { label: 'NCERT-depth Biology', color: '#10B981' },
    ],
    titleLines: ['Crack NSEB.', 'Reach'],
    highlight: 'the IBO Pathway.',
    tracksTitle: 'What NSEB actually tests.',
    tracksSubtitle:
      'A multiple-choice, negative-marking paper across Botany, Zoology and applied biology, at a depth beyond standard board syllabi. Much of the difficulty is NCERT content tested at genuine depth.',
    tracks: [
      {
        id: 'nseb-cell-genetics',
        code: 'Cell & Genetics',
        name: 'Cell Biology, Biochemistry & Genetics',
        grades: 'Class 11–12',
        blurb: 'The foundation that underpins nearly everything tested later: cell structure and function, biomolecules, molecular basis of inheritance and genetics problems.',
        meta: [['Approach', 'Structure and function'], ['Skill', 'Reading diagrams precisely']],
        topics: ['Cell Structure', 'Biomolecules', 'Genetics', 'Molecular Biology'],
        outcome: 'Depth in the core everything else rests on',
        color: 'brand',
      },
      {
        id: 'nseb-physiology',
        code: 'Physiology',
        name: 'Plant & Animal Physiology',
        grades: 'Class 11–12',
        blurb: 'How plants and animals work: transport, nutrition, respiration, excretion, control and coordination, with attention to the fine structural detail boards often skim past.',
        meta: [['Approach', 'NCERT at full depth'], ['Skill', 'Linking structure to function']],
        topics: ['Plant Physiology', 'Human Physiology', 'Transport', 'Coordination'],
        outcome: 'Precise structural and functional understanding',
        color: 'amber',
      },
      {
        id: 'nseb-ecology-evolution',
        code: 'Ecology & Evolution',
        name: 'Ecology, Evolution & Applied Biology',
        grades: 'Class 12',
        blurb: 'Ecology, evolution and applied biology, areas that boards often treat lightly but NSEB expects students to know well, practised under full-length timed conditions.',
        meta: [['Approach', 'Concepts plus data'], ['Skill', 'Reasoning from evidence']],
        topics: ['Ecology', 'Evolution', 'Biotechnology', 'Applied Biology'],
        outcome: 'Coverage of the areas boards under-teach',
        color: 'sky',
      },
    ],
    roadmapTitle: 'A fixed sequence, because NSEB prep isn’t random.',
    roadmapSteps: [
      { step: '01', title: 'Diagnostic Biology Test', desc: 'A timed mock across Botany and Zoology shows exactly where the gaps are.' },
      { step: '02', title: 'NCERT-Depth Foundation', desc: 'NCERT Biology rebuilt at full depth, with diagrams and structural detail practised throughout.' },
      { step: '03', title: 'Problem-Pattern Drilling', desc: 'Application and data-based questions sorted by technique, with regular genetics and ecology practice.' },
      { step: '04', title: 'Weekly Timed Mocks', desc: 'Full-length MCQ mocks with negative marking, scored with individual feedback every week.' },
      { step: '05', title: 'Exam-Day Readiness', desc: 'Speed drills, guess-or-skip strategy and last-mile revision tuned to the NSEB format.' },
    ],
    facultyTitle: 'Mentors who teach Biology at olympiad depth.',
    facultySubtitle: 'Biology specialists who mentor NEET and olympiad Biology directly.',
    useScienceFaculty: true,
    leadHeading: 'Sit a real timed biology mock before you commit.',
    programs: ['NSEB / INBO', 'Not sure yet — need guidance'],
    metaTitle: 'NSEB Coaching in Pune | Biology Olympiad | BuzzyBrains Academy',
    metaDescription:
      'NSEB coaching in Pune for Class 11–12: the first stage of the Indian Biology Olympiad pathway to INBO and IBO. NCERT-depth teaching, biology specialists, batches of 12.',
    keywords:
      'NSEB coaching Pune, NSEB preparation, National Standard Examination in Biology, IOQB coaching, INBO preparation, biology olympiad Pune, IAPT NSEB',
    faqs: [
      {
        q: 'What is NSEB and who conducts it?',
        a: 'NSEB (National Standard Examination in Biology) is conducted by IAPT and is the first stage of India’s biology olympiad pipeline. Clearing the cutoff leads to INBO, then a selection camp, and eventually the International Biology Olympiad (IBO) for students who make the team.',
      },
      {
        q: 'Is NSEB the same as IOQB?',
        a: NOTE_ON_NAMES,
      },
      {
        q: 'Is NSEB just NEET Biology at a harder level?',
        a: 'Not exactly. NSEB shares core content with NEET Biology but tests it more conceptually, and includes areas like ecology, genetics and physiology that boards often treat lightly. It also uses negative marking.',
      },
      {
        q: 'Do we need books beyond NCERT?',
        a: 'Much of NSEB’s difficulty is NCERT content tested at genuine depth, including fine structural and functional detail. Rebuilding NCERT Biology with that depth is usually more valuable than jumping straight to other reference books.',
      },
      {
        q: 'When should my child start?',
        a: 'A Class 11 student can plan for two attempts (Class 11 and Class 12), so building depth early works best. Class 12 students should add ecology, evolution and applied biology and move to timed mocks. Confirm the current eligibility and dates with IAPT.',
      },
      {
        q: 'What is the batch size?',
        a: 'Every BuzzyBrains Academy batch is capped at 12 students, so every student gets individual score analysis.',
      },
    ],
  },
};

export function buildNseMetadata(exam: NseExam): Metadata {
  const url = `https://buzzybrainsacademy.com${exam.path}`;
  const image = 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg';
  return {
    title: exam.metaTitle,
    description: exam.metaDescription,
    keywords: exam.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: exam.metaTitle,
      description: exam.metaDescription,
      url,
      siteName: 'BuzzyBrains Academy',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: `${exam.code} Coaching in Pune - BuzzyBrains Academy` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: exam.metaTitle,
      description: exam.metaDescription,
      images: [image],
    },
  };
}
