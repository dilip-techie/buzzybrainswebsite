import type { Metadata } from "next";
import { ProgramJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Grade 10 Board Coaching for 90%+ Scores | BuzzyBrains Academy",
  description: "Achieve 90%+ in Grade 10 board exams with expert coaching from an IITian mentor. Comprehensive Maths & Science curriculum, proven success strategies.",
  alternates: { canonical: "https://buzzybrainsacademy.com/10th-board" },
  openGraph: {
    title: "Grade 10 Board Exam Coaching | Score 90%+",
    description: "Achieve 90%+ in Grade 10 board exams with expert coaching from an IITian mentor (IIT Kanpur).",
    url: "https://buzzybrainsacademy.com/10th-board",
    siteName: "BuzzyBrains Academy",
    images: [
      {
        url: "https://buzzybrainsacademy.com/images/buzzybrains_social.jpg",
        width: 1200,
        height: 630,
        alt: "Grade 10 Board Exam Coaching - BuzzyBrains Academy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grade 10 Board Exam Coaching | Score 90%+",
    description: "Achieve 90%+ in Grade 10 board exams with expert coaching from an IITian mentor (IIT Kanpur).",
    images: ["https://buzzybrainsacademy.com/images/buzzybrains_social.jpg"],
  },
};

export default function Class10BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Grade 10 Board Exam Coaching"
        description="Achieve 90%+ in Grade 10 board exams with expert coaching from IITian mentor (IIT Kanpur). Comprehensive Maths & Science curriculum with personalized mentorship and proven success strategies."
        path="/10th-board"
      />
      {children}
    </>
  );
}
