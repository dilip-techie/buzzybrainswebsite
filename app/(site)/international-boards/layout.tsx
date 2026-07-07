import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IGCSE, IB & AP Exam Coaching | A*/7/5 Results | IITian Mentor Guidance | BuzzyBrains Academy",
  description: "Premier coaching for IGCSE, IB, and AP exams with expert guidance from IITian mentor. Achieve A*/7/5 grades with personalized mentorship, comprehensive curriculum, and proven international board expertise.",
};

export default function InternationalBoardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
