import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | BuzzyBrains - Expert Coaching by IITian Mentor',
  description: 'Get in touch with BuzzyBrains. Connect with our expert IITian and IIM mentors for personalized coaching guidance.',
  openGraph: {
    title: 'Contact Us | BuzzyBrains',
    description: 'Get in touch with our expert mentors',
    url: 'https://buzzybrains.com/contact',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
