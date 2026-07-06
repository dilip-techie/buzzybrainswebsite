import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation Program (Grades 6-10) | Expert IITian Mentor Coaching | BuzzyBrains Academy",
  description: "Build strong academic foundations with expert guidance from IITian mentors. Premium Foundation coaching for Grades 6-10 with personalized learning paths, advanced concepts, and proven results.",
  openGraph: {
    title: "Foundation Program (Grades 6-10) | Expert IITian Mentor Coaching",
    description: "Build strong academic foundations with expert guidance from IITian mentors. Premium Foundation coaching for Grades 6-10 with personalized learning paths, advanced concepts, and proven results.",
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
};

export default function FoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
