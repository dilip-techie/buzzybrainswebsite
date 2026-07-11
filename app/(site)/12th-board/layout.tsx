import type { Metadata } from "next";
import { ProgramJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Grade 12 Board Exam & JEE/NEET Prep | Score 95%+ | IITian Mentor Coaching | BuzzyBrains Academy",
  description: "Master Grade 12 PCM/PCB with dual preparation for JEE/NEET by IITian mentor (IIT Kanpur & IIM Ahmedabad). Premium coaching with small batches, expert faculty, and proven 95%+ board results.",
  alternates: { canonical: "https://buzzybrainsacademy.com/12th-board" },
  openGraph: {
    title: "Grade 12 Board Exam & JEE/NEET Prep | Score 95%+",
    description: "Master Grade 12 PCM/PCB with dual preparation for JEE/NEET by IITian & IIM mentors.",
    url: "https://buzzybrainsacademy.com/12th-board",
    siteName: "BuzzyBrains Academy",
    images: [
      {
        url: "https://buzzybrainsacademy.com/images/buzzybrains_social.jpg",
        width: 1200,
        height: 630,
        alt: "Grade 12 Board Exam & JEE/NEET Prep - BuzzyBrains Academy",
      },
    ],
    type: "website",
  },
};

export default function Class12BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Grade 12 Board Exam & JEE/NEET Prep"
        description="Master Grade 12 PCM/PCB with dual preparation for JEE/NEET by IITian mentor (IIT Kanpur & IIM Ahmedabad). Premium coaching with small batches, expert faculty, and proven 95%+ board results."
        path="/12th-board"
      />
      {children}
    </>
  );
}
