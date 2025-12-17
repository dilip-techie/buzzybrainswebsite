import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation Program (Grades 6-10) | Expert IITian Mentor Coaching | BuzzyBrains Academy",
  description: "Build strong academic foundations with expert guidance from IITian mentors. Premium Foundation coaching for Grades 6-10 with personalized learning paths, advanced concepts, and proven results.",
};

export default function FoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
