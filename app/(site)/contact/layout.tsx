import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | BuzzyBrains Academy - Expert Coaching by IITian Mentor',
  description: 'Get in touch with BuzzyBrains Academy. Connect with our expert IITian and IIM mentors for personalized coaching guidance.',
  openGraph: {
    title: 'Contact Us | BuzzyBrains Academy',
    description: 'Get in touch with our expert mentors',
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
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
