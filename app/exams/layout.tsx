import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './exams-globals.css';
import Providers from '@/components/exams/auth/Providers';
import { DialogProvider } from '@/components/exams/ui/DialogProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BuzzyBrains Exams | Interactive Learning & Assessment Platform',
  description:
    'Empowering students in classes 7-12 with engaging, NCERT-aligned assessments and real-time analytics.',
};

export default function ExamsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <div className="min-h-full flex flex-col">
        <Providers>
          <DialogProvider>{children}</DialogProvider>
        </Providers>
      </div>
    </div>
  );
}
