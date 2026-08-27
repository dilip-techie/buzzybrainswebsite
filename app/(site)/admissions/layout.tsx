import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Admissions & Merit Scholarships (Up to 50%) | BuzzyBrains Academy",
  description: "Apply for premium coaching programs with merit-based scholarships up to 50% and a transparent admission process.",
  alternates: { canonical: "https://buzzybrainsacademy.com/admissions" },
  openGraph: {
    title: "Admission Enquiry & Merit Scholarships (Up to 50%)",
    description: "IITian Mentorship. Apply for premium coaching programs with merit-based scholarships up to 50% and a transparent admission process.",
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
  twitter: {
    card: "summary_large_image",
    title: "Admission Enquiry & Merit Scholarships (Up to 50%)",
    description: "IITian Mentorship. Apply for premium coaching programs with merit-based scholarships up to 50% and a transparent admission process.",
    images: ["https://buzzybrainsacademy.com/images/buzzybrains_social.jpg"],
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
