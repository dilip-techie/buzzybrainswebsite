import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Coding Olympiads Guide: ZIO, ZCO, INOI, IOI, USACO & More | BuzzyBrains Academy',
  description:
    "A complete guide to Indian and international coding olympiads for school students: ZIO, ZCO, INOI, IOITC, IOI, USACO, APIO, IOAI, Codeforces and more. Eligibility, format, stages and how to prepare.",
  keywords:
    'coding olympiad, informatics olympiad, ZIO, ZCO, INOI, IOITC, IOI, USACO, APIO, IOAI, Codeforces, CodeChef, competitive programming for school students, coding olympiad India',
  alternates: { canonical: 'https://buzzybrainsacademy.com/coding-olympiads' },
  openGraph: {
    title: 'Coding Olympiads: The Complete Indian and International Guide',
    description:
      'ZIO, ZCO, INOI, IOI, USACO, APIO, IOAI and more — how each coding olympiad works, who it is for, and how to prepare. From BuzzyBrains Academy, Pune.',
    url: 'https://buzzybrainsacademy.com/coding-olympiads',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Coding Olympiads Guide - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coding Olympiads: The Complete Indian and International Guide',
    description:
      'ZIO, ZCO, INOI, IOI, USACO, APIO, IOAI and more — how each coding olympiad works and how to prepare.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function CodingOlympiadsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Coding Olympiad Guide and Preparation"
        description="Guide to Indian and international coding olympiads (ZIO, ZCO, INOI, IOI, USACO and more) with preparation support from BuzzyBrains Academy, Pune."
        path="/coding-olympiads"
      />
      {children}
    </>
  );
}
