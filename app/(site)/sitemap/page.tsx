import Link from 'next/link';
import { BLOG_POSTS, CATEGORY_LABELS, type BlogCategory } from '../blog/_data/posts';

interface SiteLink {
  href: string;
  label: string;
}

interface SiteSection {
  title: string;
  links: SiteLink[];
}

const SECTIONS: SiteSection[] = [
  {
    title: 'Main Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/best-coaching-institute-pune', label: 'Best Coaching Institute in Pune — Complete Guide' },
      { href: '/about', label: 'About Us' },
      { href: '/admissions', label: 'Admissions & Scholarships' },
      { href: '/achievements', label: 'Achievements' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/exams', label: 'Exams Portal' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Best Institute in Pune — By Exam',
    links: [
      { href: '/best-ioqm-institute-in-pune', label: 'Best IOQM Institute in Pune' },
      { href: '/best-nmtc-institute-in-pune', label: 'Best NMTC Institute in Pune' },
      { href: '/best-amc-coaching-institute-in-pune', label: 'Best AMC 8/10 Coaching Institute in Pune' },
      { href: '/best-maths-olympiad-institute-in-pune', label: 'Best Maths Olympiad Institute in Pune' },
      { href: '/best-jee-coaching-institute-in-pune', label: 'Best IIT-JEE Coaching Institute in Pune' },
      { href: '/best-neet-coaching-institute-in-pune', label: 'Best NEET Coaching Institute in Pune' },
      { href: '/best-igcse-ib-institute-in-pune', label: 'Best IGCSE & IB Coaching Institute in Pune' },
      { href: '/best-foundation-institute-in-pune', label: 'Best Foundation Coaching Institute in Pune' },
      { href: '/best-physics-olympiad-institute-in-pune', label: 'Best Physics Olympiad Institute in Pune' },
      { href: '/best-science-olympiad-institute-in-pune', label: 'Best Science Olympiad Coaching Institute in Pune' },
    ],
  },
  {
    title: 'Indian Boards & Competitive Exams',
    links: [
      { href: '/foundation', label: 'Foundation Program (Grades 6–10)' },
      { href: '/10th-board', label: 'Grade 10 Board Exam Coaching' },
      { href: '/12th-board-pcm', label: 'IIT-JEE Coaching' },
      { href: '/12th-board-pcb', label: 'NEET Coaching' },
      { href: '/commerce-tuitions', label: 'BuzzyBrains Commerce Tuitions' },
      { href: '/ipmat-exam', label: 'IPMAT Coaching' },
      { href: '/cat-exam', label: 'CAT Coaching' },
      { href: '/olympiad-math', label: 'Maths Excellence Program' },
      { href: '/olympiads', label: 'Olympiad Program' },
      { href: '/physics-olympiad-coaching-pune', label: 'Physics Olympiad Coaching (NSEP, INPhO, F=ma, BPhO)' },
      { href: '/one-on-one', label: 'One-on-One Coaching' },
      { href: '/clat-exam', label: 'CLAT Coaching' },
    ],
  },
  {
    title: 'International Pathways',
    links: [
      { href: '/international-boards', label: 'International Boards — Overview' },
      { href: '/international-boards#igcse', label: 'IGCSE (Cambridge)' },
      { href: '/international-boards#ib', label: 'IB Diploma' },
      { href: '/international-boards#a-level', label: 'A Level / AS Level' },
      { href: '/ap-exam', label: 'AP Exams' },
      { href: '/sat-exam', label: 'SAT Exam' },
      { href: '/ivy-league-counselling', label: 'Ivy League Counselling' },
    ],
  },
  {
    title: 'Specialized Tracks',
    links: [{ href: '/coding-lab', label: 'Code Ninja — Coding & AI' }],
  },
  {
    title: 'SEO Guides & Pillar Pages',
    links: [
      { href: '/iit-jee-coaching-pune', label: 'IIT JEE Coaching Pune — Guide' },
      { href: '/neet-coaching-pune', label: 'NEET Coaching Pune — Guide' },
      { href: '/foundation-classes-pune', label: 'Foundation Classes Pune — Guide' },
      { href: '/olympiad-coaching-pune', label: 'Olympiad Coaching Pune — Guide' },
      { href: '/maths-tuition-pune', label: 'Maths Tuition Pune — Guide' },
      { href: '/international-boards-coaching-pune', label: 'International Boards Coaching Pune — Guide' },
      { href: '/cuet-commerce-coaching-pune', label: 'CUET Commerce Coaching Pune — Guide' },
      { href: '/ca-foundation-coaching-pune', label: 'CA Foundation Coaching Pune — Guide' },
    ],
  },
  {
    title: 'Locality Pages',
    links: [
      { href: '/coaching-in-amanora', label: 'Coaching in Amanora' },
      { href: '/coaching-in-kharadi', label: 'Coaching in Kharadi' },
    ],
  },
];

const BLOG_CATEGORY_ORDER: BlogCategory[] = [
  'iit-jee',
  'neet',
  'commerce',
  'ipmat',
  'cat',
  'foundation',
  'olympiad',
  'maths-tuition',
  'sat-exam',
  'ap-exam',
  'igcse',
  'ib',
  'clat',
  'ivy-colleges',
  'coding',
  'coding-olympiad',
];

export default function SitemapPage() {
  const blogSections: SiteSection[] = BLOG_CATEGORY_ORDER.filter((cat) =>
    BLOG_POSTS.some((p) => p.category === cat)
  ).map((cat) => ({
    title: `Blog — ${CATEGORY_LABELS[cat]}`,
    links: BLOG_POSTS.filter((p) => p.category === cat).map((p) => ({
      href: `/blog/${p.slug}`,
      label: p.title,
    })),
  }));

  const allSections = [...SECTIONS, ...blogSections];
  const totalLinks = allSections.reduce((sum, s) => sum + s.links.length, 0);

  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container article-shell center">
          <span className="eyebrow">🗺️ Sitemap</span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Every Page on BuzzyBrains Academy</h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 640 }}>
            A complete, organized index of the site — programs, SEO guides, locality pages and every blog post,
            grouped the same way they're organized in the main menu.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell" style={{ maxWidth: 1040 }}>
          <div className="sitemap-total">
            <span><b>{allSections.length}</b> sections</span>
            <span>·</span>
            <span><b>{totalLinks}</b> pages</span>
          </div>
          <div className="sitemap-grid">
            {allSections.map((section) => (
              <div className="sitemap-group" key={section.title}>
                <h3>{section.title}</h3>
                <span className="sitemap-count">{section.links.length} page{section.links.length === 1 ? '' : 's'}</span>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link prefetch={false} href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
