import type { Metadata } from "next";
import { ProgramJsonLd } from "../../components/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/hreflang";

export const metadata: Metadata = {
  title: "Elite Foundation Program (Grades 6-10), Min. 80% to Apply | BuzzyBrains Academy",
  description: "An elite, merit-based program: minimum 80% marks required to apply, limited seats. Build strong academic foundations with expert guidance from IITian mentors. Personalized learning paths, advanced concepts and proven results for Grades 6-10.",
  alternates: {
    canonical: "https://buzzybrainsacademy.com/foundation",
    languages: buildLanguageAlternates("https://buzzybrainsacademy.com/foundation"),
  },
  openGraph: {
    title: "Elite Foundation Program (Grades 6-10), Min. 80% to Apply | BuzzyBrains Academy",
    description: "IITian Mentorship. Elite, merit-based program: minimum 80% marks to apply. Build strong academic foundations with expert guidance from IITian mentors. Personalized learning paths, advanced concepts and proven results for Grades 6-10.",
    url: "https://buzzybrainsacademy.com/foundation",
    type: "website",
    images: [
      {
        url: "https://buzzybrainsacademy.com/images/foundation.jpg",
        width: 1200,
        height: 630,
        alt: "Foundation Program - Expert IITian Mentor Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Foundation Program (Grades 6-10), Min. 80% to Apply | BuzzyBrains Academy",
    description: "IITian Mentorship. Elite, merit-based program: minimum 80% marks to apply. Build strong academic foundations with expert guidance from IITian mentors. Personalized learning paths, advanced concepts and proven results for Grades 6-10.",
    images: ["https://buzzybrainsacademy.com/images/foundation.jpg"],
  },
};

export default function FoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Foundation Program (Grades 6-10)"
        description="An elite, merit-based program: minimum 80% marks required to apply, limited seats. Build strong academic foundations with expert guidance from IITian mentors. Premium Foundation coaching for Grades 6-10 with personalized learning paths, advanced concepts, and proven results."
        path="/foundation"
      />
      {children}
    </>
  );
}
