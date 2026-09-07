import type { Metadata } from 'next';
import JsonLd, { PersonJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { FACULTY_PROFILES } from '@/lib/faculty/data';

const SITE_URL = 'https://buzzybrainsacademy.com';

const FAQS = [
  {
    question: 'Who teaches Mathematics at BuzzyBrains Academy?',
    answer: "Four mentors teach Mathematics across different tracks: Dilip Sir (Founder, B.Tech IIT Kanpur, JEE AIR 400) for Foundation and JEE, Dipak JK Sir (M.Tech IIT Bombay) for Olympiad tracks (IOQM, AMC), Pooja Madam (B.Tech IIT Delhi) for one-to-one online coaching, and Arun Sir (M.Sc. Mathematics) across Grade 6-12 and Engineering Mathematics.",
  },
  {
    question: 'Does BuzzyBrains Academy have PhD faculty?',
    answer: "Yes — Agarwal Sir (PhD, IIT Bombay) teaches Chemistry & Physics, Dr. Mrinmayee (PhD, IIT Kharagpur) teaches Chemistry, and Dr. Urmila (PhD, IISER Pune) teaches Chemistry & Science.",
  },
  {
    question: 'Who teaches NEET Biology, and what makes them qualified?',
    answer: "Dr. Todkar, a practicing General Physician with 25+ years of experience, and Priya Madam (B.E., Pune University) teach NEET Biology — Dr. Todkar's real clinical background brings applied medical context that a purely textbook-trained teacher can't.",
  },
  {
    question: 'Is there a dedicated Olympiad coach, or do JEE teachers cover it as an extra?',
    answer: "Dipak JK Sir has coached India's IOQM → RMO → INMO → IMO pipeline, plus AMC 8/10/12, AIME and USAMO, specifically since 2010 — it's his specialization, not an add-on to JEE teaching.",
  },
  {
    question: 'What is the student-to-faculty batch ratio at BuzzyBrains Academy?',
    answer: "Every batch across every program is capped at a maximum of 12 students — a fixed limit, not a marketing claim — so each mentor can give individual attention rather than teaching to a room's average.",
  },
  {
    question: 'Why does BuzzyBrains Academy call its faculty "Top 1%"?',
    answer: "Because it's a description of credentials, not a slogan: every mentor has either cleared one of India's most competitive entrance exams (JEE, CAT, GATE — each with an acceptance rate under 2%) or holds a PhD from a top research institute, and teaches only the specific subject they hold that depth in.",
  },
];

export const metadata: Metadata = {
  title: 'Our Faculty — Top 1% Mentors | BuzzyBrains Academy',
  description:
    'Meet the Top 1% faculty at BuzzyBrains Academy — IIT/IIM alumni and PhD mentors, each teaching only the subject they hold real depth in. Batches capped at 12 students.',
  keywords:
    'BuzzyBrains Academy faculty, best faculty coaching institute Pune, IIT alumni teachers Pune, PhD faculty Pune, Dilip Sah IIT Kanpur, top 1 percent faculty Pune',
  alternates: { canonical: `${SITE_URL}/faculty` },
  openGraph: {
    title: 'Our Faculty — Top 1% Mentors | BuzzyBrains Academy',
    description: 'IITian Mentorship. Meet the Top 1% faculty — IIT/IIM alumni and PhD mentors, each a specialist in their own subject. Batches capped at 12.',
    url: `${SITE_URL}/faculty`,
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: `${SITE_URL}/images/buzzybrains_social.jpg`, width: 1200, height: 630, alt: 'BuzzyBrains Academy Faculty' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Faculty — Top 1% Mentors | BuzzyBrains Academy',
    description: 'IITian Mentorship. Meet the Top 1% faculty — IIT/IIM alumni and PhD mentors, each a specialist in their own subject. Batches capped at 12.',
    images: [`${SITE_URL}/images/buzzybrains_social.jpg`],
  },
};

export default function FacultyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Faculty', item: `${SITE_URL}/faculty` },
          ],
        }}
      />
      {FACULTY_PROFILES.map((f) => (
        <PersonJsonLd
          key={f.name}
          name={f.name}
          jobTitle={`${f.subject} Mentor, BuzzyBrains Academy`}
          description={f.bio}
          alumniOf={f.alumniOf}
          path="/faculty"
        />
      ))}
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
