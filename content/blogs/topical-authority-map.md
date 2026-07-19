# Topical Authority Map — Olympiad & IGCSE/IB Content Clusters

How the 15 new long-form articles connect to BuzzyBrains Academy's existing live pages, and the internal linking strategy to maximize topical authority for Google, AI Overviews, and citation-based AI search engines (ChatGPT, Claude, Gemini, Perplexity).

## 1. The Existing Site Structure (Context)

BuzzyBrains Academy's site already has three relevant layers for these clusters:

```
Homepage (/)
└── Programs Mega-Menu
    ├── Indian Boards & Competitive Exams
    │   ├── /foundation
    │   ├── /12th-board-pcm (IIT-JEE)
    │   ├── /12th-board-pcb (NEET)
    │   ├── /olympiad-math (Maths Excellence)
    │   └── /olympiads (Olympiad Program)
    └── International Pathways
        └── /international-boards (IGCSE #igcse · IB #ib · A-Level #a-level · AP #ap)

Pillar Guides (existing, shorter-form SEO pages)
├── /iit-jee-coaching-pune
├── /neet-coaching-pune
├── /foundation-classes-pune
├── /olympiad-coaching-pune
├── /maths-tuition-pune
└── /international-boards-coaching-pune

Blog (/blog) — existing short-form posts (500-800 words)
├── ioqm-syllabus-preparation-guide (olympiad)
├── prmo-vs-ioqm-what-changed (olympiad)
├── nmtc-sof-olympiads-worth-it (olympiad)
├── how-early-should-olympiad-prep-start (olympiad)
├── four-pillars-of-competition-maths (maths-tuition)
├── parents-guide-to-olympiad-exams-india (olympiad)
├── from-board-maths-to-olympiad-maths (maths-tuition)
├── is-my-child-ready-for-advanced-maths (maths-tuition)
├── what-is-maths-excellence-programme (maths-tuition)
├── problem-solving-speed-without-losing-understanding (maths-tuition)
├── olympiad-training-to-jee-advanced-overlap (olympiad)
├── vedic-maths-shortcuts-that-help-in-exams (maths-tuition)
├── jee-main-vs-advanced-explained (iit-jee)
└── [+ Foundation and Commerce clusters, not relevant here]

/about — Founder Dilip Sah's story and credentials
/admissions, /contact, /#contact — conversion pages
```

## 2. Where the 15 New Articles Sit

The 15 new articles are **long-form (2,500-3,500 word) deep-dive content**, distinct in depth and format from the existing short-form blog posts. They function as a **second, deeper layer** beneath the existing pillar guides — not a replacement for the shorter posts, but a complementary layer that:

1. Gives Google and AI search engines significantly more comprehensive, quotable content per topic (existing posts are ~600 words; these are 2,500-3,500).
2. Targets long-tail, specific queries the shorter posts don't fully cover (AMC 8, Science Olympiad, IB AA vs AI, IB Physics scoring, IGCSE Additional Maths).
3. Cross-links extensively into the existing short-form posts, creating a genuine topic cluster rather than isolated pages.

```
                    /olympiads (Program page)
                          |
              /olympiad-coaching-pune (Pillar guide)
                          |
        ┌─────────────────┴─────────────────┐
        |                                     |
  Existing short posts                 NEW long-form articles
  (ioqm-syllabus-guide, etc.)          (10 Olympiad articles)
        └──────────────┬──────────────────────┘
                cross-linked both ways


                /international-boards (Program page, #igcse #ib anchors)
                          |
        /international-boards-coaching-pune (Pillar guide)
                          |
                NEW long-form articles
                (5 IGCSE/IB articles)
```

## 3. Full Internal Linking Strategy

### Upward links (new articles → existing pages)

Every one of the 15 articles links to at least one real program page and, where relevant, the matching pillar guide:

| New Article Cluster | Links Up To |
|---|---|
| All 10 Olympiad articles | `/olympiads` (Program page) |
| Foundation-adjacent Olympiad articles (#1, #9) | `/foundation` |
| JEE-adjacent Olympiad article (#6) | `/12th-board-pcm` |
| All 5 IGCSE/IB articles | `/international-boards` (with `#igcse` or `#ib` anchor as relevant) |

### Sideways links (new articles → existing short-form blog posts)

This is the highest-value linking layer — it merges the new long-form content with the site's existing topical cluster rather than creating a disconnected new one:

- `how-to-prepare-for-ioqm-from-grade-8` ↔ `ioqm-syllabus-preparation-guide`, `prmo-vs-ioqm-what-changed`
- `why-olympiad-preparation-improves-jee-success` ↔ `olympiad-training-to-jee-advanced-overlap`, `jee-main-vs-advanced-explained`
- `olympiad-vs-school-mathematics-key-differences` ↔ `from-board-maths-to-olympiad-maths`
- `mental-maths-techniques-every-olympiad-student-should-know` ↔ `vedic-maths-shortcuts-that-help-in-exams`
- `parents-guide-to-olympiad-exams-india` (existing) ↔ `parents-guide-to-olympiad-exams-india` referenced by article #1, #10
- `four-pillars-of-competition-maths` (existing, short) ↔ referenced by article #10 as the "four pillars" already established on-site

### Cross-cluster links (Olympiad ↔ IGCSE/IB, where genuinely relevant)

- `why-olympiad-preparation-improves-jee-success` naturally sits alongside IB/IGCSE content for families evaluating multiple pathways — recommend adding it to the "Related Reading" section of `ib-mathematics-aa-vs-ai-which-should-you-choose`, since both discuss choosing the right advanced-maths pathway.

### Downward links (existing pages → new articles)

To close the loop and give the new content real link equity, update:

- `/olympiads` program page: add a "Guides" or "Learn More" section linking to the 10 new Olympiad articles (grouped, similar to how `/international-boards` could link to the 5 IGCSE/IB articles).
- `/international-boards` page: add links to the 5 new IGCSE/IB articles near the relevant `#igcse`/`#ib` anchor sections.
- `/olympiad-coaching-pune` and `/international-boards-coaching-pune` pillar guides: add "Related guides" chip rows linking to the new articles (matching the existing `relatedGuides` pattern already used elsewhere on the site's blog system).
- Blog index (`/blog`): once published as live pages, these 15 articles should appear in the existing category-filtered grid, tagged `olympiad`, `maths-tuition`, and a new `international-sat` (existing category, currently used for International Boards + SAT content) or a dedicated `igcse-ib` category if finer granularity is wanted.

## 4. Why This Structure Maximizes AI Search Visibility

- **Depth signals topical authority.** A 2,500-3,500 word article that fully answers a query (with Quick Answer, FAQ, and structured data) is far more likely to be the source an AI Overview or ChatGPT/Claude/Gemini/Perplexity cites than a fragment.
- **The FAQ + Quick Answer format is directly extractable.** Every article's Quick Answer section (40-60 words) and FAQ section (10+ Q&A pairs) are formatted for direct lifting into a featured snippet or AI-generated answer.
- **Dense internal linking within a real, live cluster** (not just to a homepage) signals to crawlers that this is a coherent topic authority, not a disconnected content farm.
- **Consistent entity grounding** — every article references Dilip Sah (IIT Kanpur, JEE AIR 400, 25+ years), the same real address, and the same real batch-size figure — builds the kind of consistent, cross-referenced entity profile that AI systems use to build confidence in a source before citing it.

## 5. Recommended Next Steps

1. Convert these 15 Markdown files into live Next.js blog routes (matching the site's existing `app/(site)/blog/[slug]/page.tsx` pattern and `BLOG_POSTS` data structure), or publish via whatever CMS/blog pipeline is chosen.
2. Add the "downward links" described in Section 3 — this is the step most often skipped, and it's the one that actually closes the topical-authority loop.
3. Stagger publication (2-3 articles/week per the index.md publishing note) rather than publishing all 15 simultaneously.
4. After publishing, verify all internal links resolve (no dead links) and that JSON-LD schema validates via Google's Rich Results Test.
