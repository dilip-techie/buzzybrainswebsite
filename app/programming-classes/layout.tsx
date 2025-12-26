import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programming Classes Grades 6-12 | IIT Kanpur Expert | Python, Java, Web Dev',
  description: 'Master coding with IIT Kanpur expert mentor. Programming classes for Grades 6-12 aligned with CBSE, ICSE, IGCSE, IB & international boards. Learn Python, Java, Web Development & more.',
  keywords: 'programming classes, coding classes, Python, Java, CBSE, ICSE, IGCSE, IB, computer science coaching, grades 6-12',
  openGraph: {
    title: 'Programming Classes | Master Coding with IIT Kanpur Expert',
    description: 'Learn programming from an IIT Kanpur graduate. Complete curriculum for all boards, small batches, hands-on projects.',
    url: 'https://buzzybrains.com/programming-classes',
    siteName: 'BuzzyBrains',
    images: [
      {
        url: 'https://buzzybrains.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ProgrammingClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
