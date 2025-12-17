import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grade 12 Board Exam & JEE/NEET Prep | Score 95%+ | IITian Mentor Coaching | BuzzyBrains Academy",
  description: "Master Grade 12 PCM/PCB with dual preparation for JEE/NEET by IITian mentor (IIT Kanpur & IIM Ahmedabad). Premium coaching with small batches, expert faculty, and proven 95%+ board results.",
};

export default function Class12BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
