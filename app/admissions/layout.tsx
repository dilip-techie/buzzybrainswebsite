import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission Enquiry & Merit Scholarships (Up to 50%) | IITian Mentor Coaching | BuzzyBrains Academy",
  description: "Apply for premium coaching programs with merit-based scholarships up to 50%. Transparent admission process with no hidden charges. Expert guidance from IITian and IIM mentors for IIT-JEE, NEET & Board exams.",
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
