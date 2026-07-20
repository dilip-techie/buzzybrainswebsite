import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const BRAND = {
  amber: '#F59E0B',
  amberDark: '#B45309',
  navy: '#0F172A',
  ink: '#1E293B',
  inkMuted: '#475569',
  line: '#E2E8F0',
  paper: '#FFFFFF',
  panel: '#FFF7ED',
  panelBorder: '#FDE68A',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: BRAND.ink,
    paddingTop: 80,
    paddingBottom: 56,
    paddingHorizontal: 40,
    backgroundColor: BRAND.paper,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: BRAND.navy,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  headerBrand: { fontSize: 13, fontFamily: 'Helvetica-Bold', color: '#FFFFFF' },
  headerBrandAccent: { color: BRAND.amber },
  headerTag: { fontSize: 8, color: '#94A3B8' },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36,
    borderTopWidth: 1,
    borderTopColor: BRAND.line,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: { fontSize: 8, color: '#94A3B8' },
  h1: { fontSize: 22, fontFamily: 'Helvetica-Bold', color: BRAND.navy, marginBottom: 6 },
  h2: { fontSize: 15, fontFamily: 'Helvetica-Bold', color: BRAND.navy, marginBottom: 10, marginTop: 4 },
  h3: { fontSize: 11.5, fontFamily: 'Helvetica-Bold', color: BRAND.amberDark, marginBottom: 6, marginTop: 12 },
  eyebrow: {
    fontSize: 8.5,
    color: BRAND.amberDark,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.2,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  p: { fontSize: 9.5, lineHeight: 1.55, color: BRAND.inkMuted, marginBottom: 8 },
  bullet: { flexDirection: 'row', marginBottom: 5, paddingRight: 4 },
  bulletDot: { width: 12, fontSize: 9.5, color: BRAND.amberDark, fontFamily: 'Helvetica-Bold' },
  bulletText: { flex: 1, fontSize: 9.5, lineHeight: 1.5, color: BRAND.inkMuted },
  panel: {
    backgroundColor: BRAND.panel,
    borderWidth: 1,
    borderColor: BRAND.panelBorder,
    borderRadius: 6,
    padding: 12,
    marginBottom: 14,
  },
  divider: { height: 1, backgroundColor: BRAND.line, marginVertical: 14 },
  row: { flexDirection: 'row' },
  gridTable: { borderWidth: 1, borderColor: BRAND.line, borderRadius: 4, overflow: 'hidden', marginBottom: 12 },
  gridRow: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: BRAND.line },
  gridRowHead: { flexDirection: 'row', backgroundColor: BRAND.navy },
  gridCellHead: { flex: 1, padding: 6, fontSize: 8, fontFamily: 'Helvetica-Bold', color: '#FFFFFF' },
  gridCell: { flex: 1, padding: 6, fontSize: 8.5, color: BRAND.inkMuted, borderLeftWidth: 1, borderLeftColor: BRAND.line },
  gridCellFirst: { borderLeftWidth: 0 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  checkbox: { width: 9, height: 9, borderWidth: 1, borderColor: BRAND.amberDark, marginRight: 8, borderRadius: 2 },
  checkboxLabel: { fontSize: 9.5, color: BRAND.inkMuted, flex: 1 },
  tag: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: BRAND.amberDark,
    backgroundColor: BRAND.panel,
    borderWidth: 1,
    borderColor: BRAND.panelBorder,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 7,
    marginRight: 6,
    marginBottom: 6,
  },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 },
});

function Header() {
  return (
    <View style={styles.header} fixed>
      <Text style={styles.headerBrand}>
        Buzzy<Text style={styles.headerBrandAccent}>Brains</Text> Academy
      </Text>
      <Text style={styles.headerTag}>Board Exam Study Planner</Text>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>buzzybrainsacademy.com · Amanora, Hadapsar, Pune</Text>
      <Text style={styles.footerText} render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
    </View>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item, i) => (
        <View style={styles.bullet} key={i}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item, i) => (
        <View style={styles.checkboxRow} key={i}>
          <View style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <View style={styles.tagRow}>
      {items.map((t, i) => (
        <Text style={styles.tag} key={i}>{t}</Text>
      ))}
    </View>
  );
}

interface BoardPlan {
  grade: string;
  board: string;
  subjects: string;
  structureNote: string;
  focusNote: string;
  phases: { phase: string; focus: string }[];
  tips: string[];
}

const BOARD_PLANS: BoardPlan[] = [
  {
    grade: 'Class 10',
    board: 'CBSE',
    subjects: 'English, Hindi/Second Language, Mathematics, Science, Social Science (+ optional skill subject)',
    structureNote:
      'Most CBSE Class 10 subjects combine a board written exam with an internal assessment component (periodic tests, portfolio, practicals/activities) — the exact split varies by subject, so always confirm current weightage from your school\'s official circular.',
    focusNote:
      'Mathematics and Science reward NCERT-first, formula-and-derivation depth over rote learning — questions increasingly test application, not just recall.',
    phases: [
      { phase: 'Apr - Jun', focus: 'Build genuine chapter-by-chapter understanding across all subjects; do not rush ahead without solidifying basics.' },
      { phase: 'Jul - Sep', focus: 'Complete full syllabus coverage; begin first-pass revision of earlier chapters alongside new ones.' },
      { phase: 'Oct - Dec', focus: 'Full-syllabus practice papers under timed conditions; identify and close specific weak chapters.' },
      { phase: 'Jan - Feb', focus: 'Focused revision using NCERT + previous years\' papers; sample-paper mocks under real exam timing.' },
      { phase: 'Mar', focus: 'Light, high-yield revision only — formulas, diagrams, key definitions; protect sleep and stay calm.' },
    ],
    tips: [
      'Redo NCERT in-text and back-exercise questions from memory, not just recognition.',
      'Keep a single formula/definition sheet per subject, updated and revised weekly.',
      'Attempt at least 5-6 full previous years\' papers under real time limits before the exam.',
    ],
  },
  {
    grade: 'Class 10',
    board: 'ICSE',
    subjects: 'English, Second Language, Mathematics, Science (Physics/Chemistry/Biology), History & Civics, Geography',
    structureNote:
      'ICSE (CISCE) typically includes an internal assessment / project component alongside the written paper for most subjects, and is generally known for going into descriptive depth per topic — precise weightage varies by subject and year, so confirm with your school.',
    focusNote:
      'ICSE\'s broader, more descriptive syllabus rewards structured written answers and strong English expression across subjects, not just Science and Maths.',
    phases: [
      { phase: 'Apr - Jun', focus: 'Build depth chapter by chapter; start project/internal-assessment work early rather than late.' },
      { phase: 'Jul - Sep', focus: 'Complete syllabus; practice structured, full-sentence answers for History, Civics and Geography specifically.' },
      { phase: 'Oct - Dec', focus: 'Full previous-years\' paper practice; refine answer-writing technique and time allocation per section.' },
      { phase: 'Jan - Feb', focus: 'Consolidate project/internal assessment submissions; intensive revision and mock papers.' },
      { phase: 'Mar', focus: 'Final, light revision — key diagrams, dates, formulas; review your own previous mock-paper mistakes.' },
    ],
    tips: [
      'Practice writing full, structured answers for Humanities subjects, not just point-form notes.',
      'Start project work and internal assessment submissions well before the deadline crunch.',
      'Revise English grammar and composition regularly — it carries real weight across ICSE\'s language-heavy paper style.',
    ],
  },
  {
    grade: 'Class 10 (SSC)',
    board: 'Maharashtra State Board',
    subjects: 'Marathi/English, Hindi, Mathematics (Algebra & Geometry papers), Science (Paper 1 & 2), Social Science (History-Pol. Science & Geography)',
    structureNote:
      'Maharashtra SSC exams are primarily written, theory-based papers, with practical/oral and internal assessment components for Science and language subjects — Mathematics is assessed as two separate papers (Algebra and Geometry).',
    focusNote:
      'Because Maths is split into two separate papers, each needs its own dedicated, tracked preparation rather than being treated as a single combined subject.',
    phases: [
      { phase: 'Apr - Jun', focus: 'Build separate, genuine understanding in Algebra and Geometry — do not let one overshadow the other.' },
      { phase: 'Jul - Sep', focus: 'Complete full syllabus across both Science papers and Social Science; keep pace evenly across subjects.' },
      { phase: 'Oct - Dec', focus: 'Practice previous years\' question papers for each paper separately, under real time limits.' },
      { phase: 'Jan - Feb', focus: 'Focused revision of formulas (Algebra/Geometry), diagrams (Science), and map work (Geography).' },
      { phase: 'Mar', focus: 'Light final revision; recheck practical/oral preparation and submission requirements.' },
    ],
    tips: [
      'Track Algebra and Geometry as two separate preparation tracks with their own practice-paper sets.',
      'Practice map-based questions for Geography and diagram-labeling for Science specifically — these are frequently under-practiced.',
      'Solve at least 5 years of previous board papers per subject under real exam timing.',
    ],
  },
  {
    grade: 'Class 12',
    board: 'CBSE',
    subjects: 'Stream-specific: Physics, Chemistry, Maths/Biology (Science) · Accountancy, Business Studies, Economics (Commerce) · Humanities electives (Arts)',
    structureNote:
      'Class 12 CBSE subjects generally combine a board written theory exam with practicals (Science) or projects/internal assessment (Commerce, Arts) — exact weightage varies by subject, so confirm current-year details from your school.',
    focusNote:
      'If you are also preparing for JEE or NEET, your board revision calendar should be deliberately aligned with your competitive-exam preparation, not run as two disconnected tracks.',
    phases: [
      { phase: 'Apr - Jun', focus: 'Build genuine NCERT-level depth — this base directly supports both board marks and JEE/NEET preparation.' },
      { phase: 'Jul - Sep', focus: 'Complete syllabus; begin practicals/project work early for Science and Commerce streams.' },
      { phase: 'Oct - Dec', focus: 'Full-length board-pattern practice papers; if applicable, keep JEE/NEET mock-test rhythm running in parallel.' },
      { phase: 'Jan - Feb', focus: 'Intensive board-focused revision; finalize practicals/vivas; sample-paper mocks under timed conditions.' },
      { phase: 'Mar', focus: 'Final, high-yield revision only — NCERT line-items, formulas, diagrams; protect sleep before each paper.' },
    ],
    tips: [
      'Use NCERT as the shared base for both board exams and JEE/NEET — it is not "extra" work, it is the same foundation.',
      'Schedule practicals and project submissions early — a rushed practical exam hurts both marks and stress levels.',
      'If pursuing JEE/NEET too, see our dedicated revision and time-management guides on the BuzzyBrains blog.',
    ],
  },
  {
    grade: 'Class 12 (HSC)',
    board: 'Maharashtra State Board',
    subjects: 'Stream-specific: Physics, Chemistry, Maths/Biology (Science) · Book-Keeping & Accountancy, Economics, Organisation of Commerce (Commerce) · Humanities electives (Arts)',
    structureNote:
      'HSC exams are primarily written theory papers, with practicals for Science-stream subjects and internal assessment components in several subjects — precise structure varies by subject, so confirm current details from your junior college.',
    focusNote:
      'HSC and JEE/NEET syllabi overlap substantially but are not identical in question style — board answers reward structured, complete written responses, while JEE/NEET reward fast, precise application.',
    phases: [
      { phase: 'Apr - Jun', focus: 'Build genuine conceptual depth across all subjects — this is the shared base for boards and any competitive exam.' },
      { phase: 'Jul - Sep', focus: 'Complete syllabus; begin practical preparation early for Science-stream subjects.' },
      { phase: 'Oct - Dec', focus: 'Full board-pattern practice papers; maintain a parallel JEE/NEET mock rhythm if applicable.' },
      { phase: 'Jan - Feb', focus: 'Intensive revision and mock papers; finalize practicals; practice full, structured written answers.' },
      { phase: 'Mar', focus: 'Final, light revision — key formulas, diagrams, and definitions; avoid new material this close to exams.' },
    ],
    tips: [
      'Practice writing full, structured answers for HSC even if you are used to JEE/NEET\'s objective-question format — the skills are different.',
      'Do not neglect practicals and internal assessment components while focused on competitive-exam prep.',
      'Align your HSC and JEE/NEET revision calendars deliberately rather than treating them as two separate plans.',
    ],
  },
];

function CoverPage() {
  return (
    <Page size="A4" style={{ ...styles.page, paddingTop: 0, paddingBottom: 0, paddingHorizontal: 0 }}>
      <View style={{ backgroundColor: BRAND.navy, paddingTop: 90, paddingBottom: 60, paddingHorizontal: 44 }}>
        <Text style={{ fontSize: 11, color: '#94A3B8', letterSpacing: 2, marginBottom: 14 }}>BUZZYBRAINS ACADEMY · PUNE</Text>
        <Text style={{ fontSize: 30, fontFamily: 'Helvetica-Bold', color: '#FFFFFF', lineHeight: 1.25, marginBottom: 10 }}>
          Board Exam{'\n'}Study Planner
        </Text>
        <Text style={{ fontSize: 13, color: BRAND.amber, fontFamily: 'Helvetica-Bold', marginBottom: 18 }}>
          Class 10 &amp; Class 12 · CBSE, ICSE &amp; Maharashtra Board
        </Text>
        <Text style={{ fontSize: 10, color: '#CBD5E1', lineHeight: 1.6, maxWidth: 380 }}>
          A printable, month-by-month planning framework built by IIT Kanpur-mentored faculty — covering how to
          sequence your syllabus, revise without cramming, and walk into your board exam prepared, not panicked.
        </Text>
      </View>
      <View style={{ padding: 44 }}>
        <Text style={{ fontSize: 9, color: BRAND.inkMuted, marginBottom: 16, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Helvetica-Bold' }}>
          What&apos;s inside
        </Text>
        {[
          'A universal weekly planning template you can reuse across every subject',
          'The spaced-revision framework we teach every BuzzyBrains student',
          'Board-specific month-by-month roadmaps for 5 grade/board combinations',
          'A printable final-week exam-readiness checklist',
        ].map((t, i) => (
          <View style={styles.bullet} key={i}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={{ ...styles.bulletText, fontSize: 10.5 }}>{t}</Text>
          </View>
        ))}
        <View style={{ marginTop: 40, borderTopWidth: 1, borderTopColor: BRAND.line, paddingTop: 16 }}>
          <Text style={{ fontSize: 9, color: BRAND.inkMuted }}>
            Prepared by Dilip Sah (IIT Kanpur alumnus, JEE AIR 400) and the BuzzyBrains Academy faculty team.
          </Text>
          <Text style={{ fontSize: 9, color: BRAND.inkMuted, marginTop: 4 }}>
            201, Pallazo, Nr. Wisdom World School, Amanora, Hadapsar, Pune · buzzybrainsacademy.com
          </Text>
        </View>
      </View>
    </Page>
  );
}

function FrameworkPage() {
  return (
    <Page size="A4" style={styles.page}>
      <Header />
      <Text style={styles.eyebrow}>Before You Start</Text>
      <Text style={styles.h1}>The Planning Framework</Text>
      <Text style={styles.p}>
        Every board and grade section in this planner uses the same underlying framework — a weekly time template and
        a spaced-revision cycle. Fill these in for your own subjects before jumping to your board-specific section.
      </Text>

      <Text style={styles.h3}>1. Your Weekly Study Grid</Text>
      <Text style={styles.p}>
        Photocopy or redraw this grid weekly. Fill in one subject per slot — rotate subjects across the week rather
        than studying only one subject per day.
      </Text>
      <View style={styles.gridTable}>
        <View style={styles.gridRowHead}>
          <Text style={styles.gridCellHead}>Day</Text>
          <Text style={styles.gridCellHead}>Morning</Text>
          <Text style={styles.gridCellHead}>Afternoon</Text>
          <Text style={styles.gridCellHead}>Evening / Revision</Text>
        </View>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
          <View style={styles.gridRow} key={d}>
            <Text style={{ ...styles.gridCell, ...styles.gridCellFirst, fontFamily: 'Helvetica-Bold', color: BRAND.ink }}>{d}</Text>
            <Text style={styles.gridCell}> </Text>
            <Text style={styles.gridCell}> </Text>
            <Text style={styles.gridCell}> </Text>
          </View>
        ))}
      </View>

      <Text style={styles.h3}>2. The Spaced-Revision Cycle We Teach</Text>
      <Text style={styles.p}>
        A topic studied once is not a topic learned — it fades without deliberate revisiting. Use this cycle for every
        chapter, adjusting the exact gap to fit your own exam timeline:
      </Text>
      <View style={styles.panel}>
        <Bullets
          items={[
            'First pass: learn the chapter properly — understand, don\'t just read.',
            'Revisit 1 (about a week later): self-test from memory before re-reading anything.',
            'Revisit 2 (a few weeks later): redo the hardest 2-3 problems or questions from the chapter.',
            'Revisit 3 (before the exam): a fast, high-yield pass — formulas, diagrams, key definitions only.',
          ]}
        />
      </View>

      <Text style={styles.h3}>3. Three Rules That Matter More Than Hours Studied</Text>
      <Bullets
        items={[
          'Active recall beats re-reading. Testing yourself (from memory) builds retention far faster than passively re-reading notes.',
          'Consistency beats intensity. A steady daily routine sustained for months outperforms occasional long, exhausting sessions.',
          'Review your mistakes, not just your scores. Every wrong answer should tell you exactly what to revise next — not just how you did.',
        ]}
      />

      <View style={{ ...styles.divider, marginTop: 18 }} />
      <Text style={{ fontSize: 9, color: BRAND.inkMuted, fontStyle: 'italic' }}>
        Turn the page for your specific board and grade\'s month-by-month roadmap.
      </Text>
      <Footer />
    </Page>
  );
}

function BoardPage({ plan }: { plan: BoardPlan }) {
  return (
    <Page size="A4" style={styles.page}>
      <Header />
      <Text style={styles.eyebrow}>{plan.board}</Text>
      <Text style={styles.h1}>{plan.grade} Study Roadmap</Text>
      <Tags items={plan.subjects.split(/[,·]/).map((s) => s.trim()).filter(Boolean).slice(0, 8)} />

      <View style={styles.panel}>
        <Text style={{ ...styles.p, marginBottom: 0, color: BRAND.ink }}>{plan.structureNote}</Text>
      </View>

      <Text style={styles.h3}>What to Focus On</Text>
      <Text style={styles.p}>{plan.focusNote}</Text>

      <Text style={styles.h3}>Month-by-Month Roadmap</Text>
      <View style={styles.gridTable}>
        <View style={styles.gridRowHead}>
          <Text style={{ ...styles.gridCellHead, flex: 0.55 }}>Phase</Text>
          <Text style={{ ...styles.gridCellHead, flex: 1.6 }}>Focus</Text>
        </View>
        {plan.phases.map((ph, i) => (
          <View style={styles.gridRow} key={i}>
            <Text style={{ ...styles.gridCell, ...styles.gridCellFirst, flex: 0.55, fontFamily: 'Helvetica-Bold', color: BRAND.ink }}>
              {ph.phase}
            </Text>
            <Text style={{ ...styles.gridCell, flex: 1.6 }}>{ph.focus}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.h3}>Specific Tips for {plan.board} {plan.grade}</Text>
      <Bullets items={plan.tips} />

      <Text style={{ fontSize: 8, color: '#94A3B8', marginTop: 10, fontStyle: 'italic' }}>
        Exact syllabus weightage, paper patterns and exam dates are set and updated by your board each year — always
        confirm current details from your school and your board\'s official website.
      </Text>
      <Footer />
    </Page>
  );
}

function ChecklistPage() {
  return (
    <Page size="A4" style={styles.page}>
      <Header />
      <Text style={styles.eyebrow}>Final Stretch</Text>
      <Text style={styles.h1}>Exam-Readiness Checklist</Text>
      <Text style={styles.p}>Print this page and tick items off in the final two weeks before each paper.</Text>

      <Text style={styles.h3}>One Week Before</Text>
      <Checklist
        items={[
          'Completed at least one full timed practice paper for this subject',
          'Reviewed and revised my formula / key-definitions sheet',
          'Identified my 2-3 weakest chapters and gave them extra revision time',
          'Confirmed exam-day logistics: admit card, stationery, reporting time',
        ]}
      />

      <Text style={styles.h3}>The Night Before</Text>
      <Checklist
        items={[
          'Light revision only — no new topics',
          'Bag packed: admit card, ID, stationery, water bottle',
          'Alarm set with a generous buffer for travel',
          'Aiming for a full night\'s sleep, not a last-minute all-nighter',
        ]}
      />

      <Text style={styles.h3}>On Exam Day</Text>
      <Checklist
        items={[
          'Read the full question paper before starting to write',
          'Attempted the questions I am most confident about first',
          'Managed time per section — did not get stuck on one question',
          'Reviewed answers in the last few minutes if time allowed',
        ]}
      />

      <View style={{ ...styles.divider, marginTop: 20 }} />

      <View style={{ ...styles.panel, backgroundColor: BRAND.navy, borderColor: BRAND.navy }}>
        <Text style={{ fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#FFFFFF', marginBottom: 6 }}>
          Want a personalized study plan, not just a template?
        </Text>
        <Text style={{ fontSize: 9.5, color: '#CBD5E1', lineHeight: 1.6, marginBottom: 8 }}>
          BuzzyBrains Academy runs small batches (max 12 students) across CBSE, ICSE, IGCSE, IB and Maharashtra Board,
          led by founder Dilip Sah — IIT Kanpur alumnus, JEE AIR 400, 25+ years of mentoring experience.
        </Text>
        <Text style={{ fontSize: 9.5, color: BRAND.amber, fontFamily: 'Helvetica-Bold' }}>
          Book a free demo class: +91 98505 70525 · hello@buzzybrainsacademy.com
        </Text>
        <Text style={{ fontSize: 9, color: '#94A3B8', marginTop: 4 }}>
          201, Pallazo, Nr. Wisdom World School, Amanora, Hadapsar, Pune
        </Text>
      </View>
      <Footer />
    </Page>
  );
}

export function StudyPlannerDocument() {
  return (
    <Document title="BuzzyBrains Academy — Board Exam Study Planner" author="BuzzyBrains Academy">
      <CoverPage />
      <FrameworkPage />
      {BOARD_PLANS.map((plan) => (
        <BoardPage plan={plan} key={`${plan.board}-${plan.grade}`} />
      ))}
      <ChecklistPage />
    </Document>
  );
}
