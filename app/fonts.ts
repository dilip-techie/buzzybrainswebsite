import { Geist_Mono } from 'next/font/google';

// Only the olympiad-subject pages (via components/olympiad/*) and
// /programming-classes render anything in this font — it used to load
// globally on every page via the root layout for no reason. Import this
// into just the layouts that need it instead.
export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
