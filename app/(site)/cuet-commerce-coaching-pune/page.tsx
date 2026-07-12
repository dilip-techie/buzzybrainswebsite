import { PillarPage } from '../../components/PillarPage';

export default function CuetCommercePillarPage() {
  return (
    <PillarPage
      eyebrow="CUET Commerce Coaching Pune"
      h1={<>CUET Commerce Coaching in Pune: What It Actually Takes</>}
      lede="CUET Commerce domain papers test the same NCERT syllabus as your board exams — in a faster, objective format that rewards a different kind of practice."
      primaryProgram={{ href: '/commerce-tuitions', label: 'BuzzyBrains Commerce Tuitions' }}
      secondaryPrograms={[{ href: '/one-on-one', label: 'One-on-One Coaching' }]}
      relatedPosts={[
        { href: '/blog/cuet-commerce-section-preparation-guide', label: "CUET Commerce Section: What It Actually Tests" },
        { href: '/blog/ca-foundation-vs-cuet-bcom-after-12th-commerce', label: 'CA Foundation vs a CUET-Based B.Com' },
      ]}
      faq={[
        {
          question: 'Do I need separate coaching for CUET Commerce and my board exams?',
          answer: 'Not entirely separate — both draw on the same NCERT Accountancy, Economics and Business Studies syllabus. What you need alongside board-style teaching is dedicated timed MCQ practice, since CUET tests the same concepts in a faster, objective format.',
        },
        {
          question: 'Which Commerce subjects does CUET test?',
          answer: 'Accountancy, Business Studies, and Economics/Business Economics are each tested as separate CUET domain papers, alongside the compulsory Languages and General Test sections most students also attempt.',
        },
        {
          question: 'When should CUET-specific preparation start?',
          answer: 'Ideally alongside Class 12 board preparation, chapter by chapter — not as a separate track started only after boards are done. This keeps CUET-style MCQ practice synced with concepts while they are still fresh.',
        },
      ]}
      body={[
        {
          kind: 'p',
          text: "Most Class 12 Commerce students discover CUET's actual format later than they should — assuming that scoring well on board-style written answers will translate directly into a strong CUET score. It often doesn't, because CUET Commerce domain papers are entirely objective, tightly timed, and built to catch students who've only memorized board-style answer templates rather than understood the underlying concept.",
        },
        { kind: 'h2', text: 'What the CUET Commerce papers actually look like' },
        {
          kind: 'p',
          text: 'Each CUET domain subject paper — Accountancy, Business Studies, Economics/Business Economics — is a multiple-choice test drawn from the NCERT Class 12 syllabus, attempted within a strict per-section time limit. There is no long-answer format and no partial credit for a correct method with the wrong final selection; every question has to be recognized and answered fast.',
        },
        { kind: 'h2', text: 'Where board prep and CUET prep genuinely overlap' },
        {
          kind: 'ul',
          items: [
            'Core Accountancy concepts — journal entries, ledgers, final accounts — are tested in both formats, so a solid board-level foundation is never wasted effort.',
            'Business Studies theory (principles of management, business environment) and Economics theory (demand/supply, national income, money and banking) carry over directly.',
            'Genuine concept clarity outperforms memorized answers in both formats — CUET simply removes the safety net of a well-rehearsed written template.',
          ],
        },
        { kind: 'h2', text: 'Where CUET prep needs a dedicated track' },
        {
          kind: 'p',
          text: "The gap is speed and objective-format practice. A student who can write a strong five-mark board answer on depreciation methods can still lose time on the same concept in a CUET MCQ if they haven't specifically drilled recognizing it in that format. Timed mock tests — not just board-style practice papers — need a fixed weekly slot from the start of Class 12, not a rushed add-on in the final month.",
        },
        { kind: 'h2', text: 'How we structure it at BuzzyBrains Commerce Tuitions' },
        {
          kind: 'p',
          text: 'We run CUET-style MCQ sets chapter-synchronized with board teaching — as soon as an Accountancy, Economics or Business Studies chapter is covered for boards, a short timed CUET-format set follows immediately, while the concept is still fresh. This avoids the common trap of finishing the full board syllabus and only then starting CUET practice from zero.',
        },
      ]}
    />
  );
}
