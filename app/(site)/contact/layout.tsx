import { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us | BuzzyBrains Academy - Expert Coaching by IITian Mentor',
  description: 'Get in touch with BuzzyBrains Academy. Connect with our expert IITian and IIM mentors for personalized coaching guidance.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/contact' },
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
  return (
    <>
      <BreadcrumbJsonLd name="Contact Us" path="/contact" />
      <FaqJsonLd
        items={[
          {
            question: 'How can I enroll in a course?',
            answer:
              'Contact us via WhatsApp or phone to discuss your learning goals. Our admissions team will guide you through the enrollment process and help you choose the right program.',
          },
          {
            question: 'What are the available scholarship options?',
            answer:
              'We offer merit-based scholarships up to 50% for high-performing students. Visit our Admissions page for detailed information about our scholarship tiers.',
          },
          {
            question: 'Do you offer online classes?',
            answer:
              'Yes! We offer both online and offline coaching options. Our experienced mentors (IITian and IIM graduates) provide personalized guidance through multiple formats to suit your needs.',
          },
          {
            question: 'What is your response time?',
            answer:
              'We typically respond to WhatsApp messages within a few minutes during business hours. For the fastest response, please contact us via WhatsApp.',
          },
          {
            question: 'Can I schedule a free consultation?',
            answer:
              'Absolutely! Contact us to schedule a free consultation with our mentors. They will assess your current level and discuss the best learning path for your goals.',
          },
        ]}
      />
      {children}
    </>
  );
}
