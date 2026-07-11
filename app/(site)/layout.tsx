import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import JsonLd from '../components/JsonLd';

const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('bb-theme');
    var theme = (stored === 'light' || stored === 'dark')
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script id="theme-init" strategy="beforeInteractive">
        {themeInitScript}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9SGR78TX74"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9SGR78TX74');
          `,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: 'BuzzyBrains Academy',
          description:
            'Premium coaching institute in Pune for IIT-JEE, NEET, Olympiads, NTSE and Foundation courses (Grades 6–10) with IITian faculty and AI-powered learning.',
          url: 'https://buzzybrainsacademy.com',
          logo: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
          telephone: '+91-98505-70525',
          email: 'hello@buzzybrainsacademy.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
          openingHours: 'Mo-Sa 09:00-20:00',
          sameAs: [
            'https://www.facebook.com/profile.php?id=61590943110329',
            'https://www.youtube.com/@BuzzyBrainsAcademy',
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the batch size at BuzzyBrains Academy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Every batch is capped at a maximum of 12 students, ensuring personalized attention and mentoring for each child.',
              },
            },
            {
              '@type': 'Question',
              name: 'Which programs does BuzzyBrains Academy offer in Pune?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We offer Foundation coaching for Grades 6–10, IIT-JEE preparation, NEET preparation, and Olympiad training for IMO, NSO, IOQM, PRMO and NMTC.',
              },
            },
            {
              '@type': 'Question',
              name: 'Who teaches at BuzzyBrains Academy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our faculty includes IIT alumni and industry experts with 25+ years of teaching experience, focused on conceptual, visual and AI-powered learning.',
              },
            },
            {
              '@type': 'Question',
              name: 'How do I book a free demo class?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can book a free demo class through the form on our website, by calling us, or by messaging us on WhatsApp.',
              },
            },
          ],
        }}
      />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
