import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from './(site)/blog/_data/posts';

const SITE_URL = 'https://buzzybrainsacademy.com';

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency'];

const routes: { path: string; changeFrequency: ChangeFreq; priority: number }[] = [
  // Core
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/best-coaching-institute-pune', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/admissions', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/achievements', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/exams', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/sitemap', changeFrequency: 'monthly', priority: 0.3 },

  // Indian boards & competitive exams
  { path: '/foundation', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/10th-board', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/12th-board', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/12th-board-pcm', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/12th-board-pcb', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/test-series', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/commerce-tuitions', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/ipmat-exam', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/cat-exam', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/olympiad-math', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/olympiads', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sof-olympiads', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/sof-imo-coaching-pune', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/ioqm-coaching-pune', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/ioqm-amc-coaching-pune', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/amc-8-10-coaching-pune', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/maths-kangaroo-coaching-pune', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/nmtc-coaching-pune', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/one-on-one', changeFrequency: 'monthly', priority: 0.7 },

  // International pathways
  { path: '/international-boards', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ap-exam', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/sat-exam', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/clat-exam', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/ivy-league-counselling', changeFrequency: 'monthly', priority: 0.7 },

  // Specialized tracks
  { path: '/coding-lab', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/programming-classes', changeFrequency: 'monthly', priority: 0.65 },

  // SEO pillar guides
  { path: '/iit-jee-coaching-pune', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/neet-coaching-pune', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/foundation-classes-pune', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/olympiad-coaching-pune', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/maths-tuition-pune', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/international-boards-coaching-pune', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/cuet-commerce-coaching-pune', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/ca-foundation-coaching-pune', changeFrequency: 'monthly', priority: 0.65 },

  // Locations
  { path: '/coaching-in-amanora', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/coaching-in-kharadi', changeFrequency: 'monthly', priority: 0.65 },

  // Blog
  { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },

  // Resource Centre — free tools
  { path: '/resource-centre', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/neet-jee-rank-predictor', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/score-calculator', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/jee-quiz', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/neet-quiz', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/study-timetable-generator', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/board-exam-study-planner', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/foundation-maths-quiz-class-6', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/foundation-maths-quiz-class-7', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/foundation-maths-quiz-class-8', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/foundation-maths-quiz-class-9', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/foundation-maths-quiz-class-10', changeFrequency: 'monthly', priority: 0.7 },

  // Legal
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/refund-policy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: 'monthly' as ChangeFreq,
    priority: 0.5,
  }));

  const categoriesWithPosts = [...new Set(BLOG_POSTS.map((post) => post.category))];
  const categoryEntries = categoriesWithPosts.map((category) => ({
    url: `${SITE_URL}/blog/${category}`,
    lastModified,
    changeFrequency: 'weekly' as ChangeFreq,
    priority: 0.6,
  }));

  return [...staticEntries, ...categoryEntries, ...blogEntries];
}
