import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import JsonLd from '../components/JsonLd';
import RevealObserver from '../components/RevealObserver';

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
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </>
  );
}
