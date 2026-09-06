import { Playfair_Display, Archivo, Space_Mono } from 'next/font/google';

const playfair = Playfair_Display({
  variable: '--font-ts-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
});

const archivo = Archivo({
  variable: '--font-ts-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
  variable: '--font-ts-ledger',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const testSeriesFontVars = `${playfair.variable} ${archivo.variable} ${spaceMono.variable}`;
