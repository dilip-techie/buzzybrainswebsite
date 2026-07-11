import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Admission Enquiry & Merit Scholarships (Up to 50%) | IITian Mentor Coaching | BuzzyBrains Academy",
  description: "Apply for premium coaching programs with merit-based scholarships up to 50%. Transparent admission process with no hidden charges. Expert guidance from IITian and IIM mentors for IIT-JEE, NEET & Board exams.",
  alternates: { canonical: "https://buzzybrainsacademy.com/admissions" },
  openGraph: {
    title: "Admission Enquiry & Merit Scholarships (Up to 50%)",
    description: "Apply for premium coaching programs with merit-based scholarships up to 50% and a transparent admission process.",
    url: "https://buzzybrainsacademy.com/admissions",
    siteName: "BuzzyBrains Academy",
    images: [
      {
        url: "https://buzzybrainsacademy.com/images/buzzybrains_social.jpg",
        width: 1200,
        height: 630,
        alt: "Admissions - BuzzyBrains Academy",
      },
    ],
    type: "website",
  },
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd name="Admissions" path="/admissions" />
      {children}
    </>
  );
}
