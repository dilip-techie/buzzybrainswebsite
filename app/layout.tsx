import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuzzyBrains Academy: Mentorship by IIT/IIM Alumni | A Premier IIT-JEE/NEET Coaching Institute.",
  description: "Join BuzzyBrains Academy for top-notch IIT-JEE, NEET and Foundation Programs. We also offer premium coaching experience for Foundation and Olompiad preparation. We have Expert faculty, comprehensive study materials, and proven success strategies to help you achieve your dreams.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "BuzzyBrains Academy | Premium Coaching by IITian Mentor",
    description: "Experience premium academic mentorship led by IITian (IIT Kanpur) & IIM Ahmedabad alumni. Expert coaching for IIT-JEE, NEET, and Board exams.",
    url: "https://buzzybrainsacademy.com",
    type: "website",
    images: [
      {
        url: "https://buzzybrainsacademy.com/images/buzzybrains_social.jpg",
        width: 1200,
        height: 630,
        alt: "BuzzyBrains Academy - Premium Coaching by IITian Mentor",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
