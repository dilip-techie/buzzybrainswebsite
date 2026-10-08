import { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { CONTACT_FAQS } from './_data';

export const metadata: Metadata = {
  title: 'Contact BuzzyBrains Academy | Call, WhatsApp, Visit Our Pune Centers',
  description: 'Contact BuzzyBrains Academy in Amanora, Hadapsar, Pune. Call, WhatsApp or visit our Head Office and branches, and book a free demo class with IITian and IIM mentors.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/contact' },
  openGraph: {
    title: 'Contact BuzzyBrains Academy',
    description: 'IITian Mentorship. Get in touch with our expert mentors',
    url: 'https://buzzybrainsacademy.com/contact',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact BuzzyBrains Academy',
    description: 'IITian Mentorship. Get in touch with our expert mentors',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd name="Contact" path="/contact" />
      <FaqJsonLd items={CONTACT_FAQS} />
      {children}
    </>
  );
}
