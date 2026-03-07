import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grade 10 Board Exam Coaching | Score 90%+ | <strong>IITian</strong> Mentor Guidance | BuzzyBrains Academy",
  description: "Achieve 90%+ in Grade 10 board exams with expert coaching from <strong>IITian</strong> mentor (IIT Kanpur). Comprehensive Maths & Science curriculum with personalized mentorship and proven success strategies.",,
};

export default function Class10BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
