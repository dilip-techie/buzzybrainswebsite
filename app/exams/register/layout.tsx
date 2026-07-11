import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | BuzzyBrains Exams',
  robots: { index: false, follow: false },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
