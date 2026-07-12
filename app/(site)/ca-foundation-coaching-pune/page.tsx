import { PillarPage } from '../../components/PillarPage';

export default function CaFoundationPillarPage() {
  return (
    <PillarPage
      eyebrow="CA Foundation Coaching Pune"
      h1={<>CA Foundation Coaching in Pune: A Realistic Starting Guide</>}
      lede="CA Foundation is the entry gate to the Chartered Accountancy pipeline — here's exactly what it covers, when to register, and how to prepare for it alongside Class 12 boards."
      primaryProgram={{ href: '/commerce-tuitions', label: 'BuzzyBrains Commerce Tuitions' }}
      secondaryPrograms={[{ href: '/one-on-one', label: 'One-on-One Coaching' }]}
      relatedPosts={[
        { href: '/blog/ca-foundation-vs-cuet-bcom-after-12th-commerce', label: 'CA Foundation vs a CUET-Based B.Com' },
        { href: '/blog/cuet-commerce-section-preparation-guide', label: 'CUET Commerce Section: What It Actually Tests' },
      ]}
      faq={[
        {
          question: 'When can a student register for CA Foundation?',
          answer: 'Students can register for CA Foundation with ICAI while still in Class 12, and are eligible to appear for the exam after completing their Class 12 board exams.',
        },
        {
          question: 'What does the CA Foundation syllabus cover?',
          answer: 'Four papers: Accounting, Business Laws, Quantitative Aptitude, and Business Economics — a more rigorous, exam-focused extension of Class 11-12 Commerce fundamentals.',
        },
        {
          question: 'Can CA Foundation prep run alongside Class 12 board preparation?',
          answer: 'Yes — Accounting and Business Economics overlap significantly with the board syllabus. The parts that need dedicated extra time are Business Laws and Quantitative Aptitude, which go beyond what boards cover.',
        },
      ]}
      body={[
        {
          kind: 'p',
          text: "CA Foundation is the first exam in the Chartered Accountancy pipeline run by the Institute of Chartered Accountants of India (ICAI), and it's also the point where most students first feel the gap between school-level Commerce and professional-exam-level Commerce. Knowing exactly what it covers — and when to start — makes that transition far less abrupt.",
        },
        { kind: 'h2', text: 'When to register, and when to attempt it' },
        {
          kind: 'p',
          text: 'A student can register for CA Foundation with ICAI while still in Class 12, well before board exams. The exam itself can only be attempted after appearing for Class 12 boards, which gives most students a natural runway: register early, prepare alongside board studies, and sit the exam once boards are done.',
        },
        { kind: 'h2', text: 'The four papers, and how much they overlap with boards' },
        {
          kind: 'ul',
          items: [
            'Accounting — the closest overlap with Class 11-12 Accountancy, but taken noticeably deeper and faster than the board syllabus.',
            'Business Economics — overlaps well with Class 11-12 Economics theory, particularly Micro and Macroeconomics.',
            'Business Laws — almost entirely new content for most students, covering the Indian Contract Act and other core commercial law, with limited board-syllabus overlap.',
            'Quantitative Aptitude — builds on Class 11-12 Applied/Core Maths and Statistics but at a faster, more exam-specific pace.',
          ],
        },
        { kind: 'h2', text: 'Why "just study harder in the last two months" doesn\'t work here' },
        {
          kind: 'p',
          text: "Because Business Laws and a meaningful chunk of Quantitative Aptitude sit outside the standard board syllabus, they can't be picked up in a short cram window the way overlapping topics can. Students who wait until after boards to start these sections consistently run short on time — the realistic approach is to begin Business Laws and CA-specific Quantitative Aptitude practice well before boards, running in parallel with regular Accountancy and Economics revision.",
        },
        { kind: 'h2', text: 'How we structure CA Foundation support' },
        {
          kind: 'p',
          text: 'At BuzzyBrains Commerce Tuitions, CA Foundation guidance is layered on top of regular Class 12 Accountancy and Economics teaching rather than run as a completely separate course — since so much of the syllabus already overlaps — with dedicated sessions carved out specifically for Business Laws and CA-pattern Quantitative Aptitude, the two areas board preparation alone won\'t cover.',
        },
      ]}
    />
  );
}
