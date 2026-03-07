import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1-on-1 Personalized Coaching | Expert <strong>IITian</strong> & IIM Mentor | BuzzyBrains Academy",
  description: "Personalized 1-on-1 coaching sessions with expert <strong>IITian</strong> mentor (IIT Kanpur & IIM Ahmedabad). Custom learning plans for IIT-JEE, NEET, Board Exams, and any academic goal with flexible online/offline options.",
};

export default function OneOnOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
