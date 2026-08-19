import type { Metadata } from "next";
import { ProgramJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "IGCSE, IB & AP Exam Coaching | BuzzyBrains Academy",
  description: "Premier coaching for IGCSE, IB and AP exams with expert guidance from an IITian mentor — personalized mentorship and proven results.",
  alternates: { canonical: "https://buzzybrainsacademy.com/international-boards" },
  openGraph: {
    title: "IGCSE, IB & AP Exam Coaching | A*/7/5 Results",
    description: "Premier coaching for IGCSE, IB, and AP exams — personalized mentorship and proven international board expertise.",
    url: "https://buzzybrainsacademy.com/international-boards",
    siteName: "BuzzyBrains Academy",
    images: [
      {
        url: "https://buzzybrainsacademy.com/images/buzzybrains_social.jpg",
        width: 1200,
        height: 630,
        alt: "IGCSE, IB & AP Exam Coaching - BuzzyBrains Academy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IGCSE, IB & AP Exam Coaching | A*/7/5 Results",
    description: "Premier coaching for IGCSE, IB, and AP exams — personalized mentorship and proven international board expertise.",
    images: ["https://buzzybrainsacademy.com/images/buzzybrains_social.jpg"],
  },
};

export default function InternationalBoardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="IGCSE, IB & AP Exam Coaching"
        description="Premier coaching for IGCSE, IB, and AP exams with expert guidance from IITian mentor. Achieve A*/7/5 grades with personalized mentorship, comprehensive curriculum, and proven international board expertise."
        path="/international-boards"
      />
      {children}
    </>
  );
}
