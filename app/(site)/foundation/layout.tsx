import type { Metadata } from "next";
import { ProgramJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Foundation Program (Grades 6-10) | BuzzyBrains Academy",
  description: "Build strong academic foundations with expert guidance from IITian mentors. Personalized learning paths, advanced concepts and proven results for Grades 6-10.",
  alternates: { canonical: "https://buzzybrainsacademy.com/foundation" },
  openGraph: {
    title: "Foundation Program (Grades 6-10) | BuzzyBrains Academy",
    description: "Build strong academic foundations with expert guidance from IITian mentors. Personalized learning paths, advanced concepts and proven results for Grades 6-10.",
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
    title: "Foundation Program (Grades 6-10) | BuzzyBrains Academy",
    description: "Build strong academic foundations with expert guidance from IITian mentors. Personalized learning paths, advanced concepts and proven results for Grades 6-10.",
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
        description="Build strong academic foundations with expert guidance from IITian mentors. Premium Foundation coaching for Grades 6-10 with personalized learning paths, advanced concepts, and proven results."
        path="/foundation"
      />
      {children}
    </>
  );
}
