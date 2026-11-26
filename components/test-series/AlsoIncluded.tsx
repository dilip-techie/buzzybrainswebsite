import { CalendarCheck, NotebookPen, Library, Layers, Lightbulb, type LucideIcon } from 'lucide-react';

export interface IncludedItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const DEFAULT_INCLUDED: IncludedItem[] = [
  {
    icon: CalendarCheck,
    title: 'Personalised study plan',
    body: 'A study plan tailored to you, so every week of revision has a clear target.',
  },
  {
    icon: NotebookPen,
    title: 'Chapter-wise notes',
    body: 'Concise notes for each chapter that cover the key concepts, handy for quick revision before every paper.',
  },
  {
    icon: Library,
    title: 'Past-paper database',
    body: 'A database of past board papers to practise from alongside the mock series.',
  },
  {
    icon: Layers,
    title: 'Subject modules',
    body: 'Focused modules for each subject that break complex topics into clear, manageable parts.',
  },
  {
    icon: Lightbulb,
    title: 'Tips to score better marks',
    body: 'Special tips to help you score better marks in the board exams.',
  },
];

export interface AlsoIncludedProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: IncludedItem[];
}

/** "What you also get" strip: the extras that come with the test series. */
export default function AlsoIncluded({
  eyebrow = 'ALSO INCLUDED',
  title = 'More than mock papers. Everything you need to score higher.',
  subtitle = 'Alongside the full-length papers and marked scorecards, every student gets the tools below.',
  items = DEFAULT_INCLUDED,
}: AlsoIncludedProps) {
  return (
    <section id="ts-included" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="reveal font-ledger text-[12px] tracking-[0.25em] text-[#B23A2E]">{eyebrow}</p>
        <h2 className="reveal mt-4 max-w-3xl font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
          {title}
        </h2>
        <p className="reveal mt-4 max-w-2xl text-[16px] leading-relaxed text-[#0E2148]/70" data-delay="2">
          {subtitle}
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <li
                key={it.title}
                className="reveal rounded-sm border border-[#0E2148]/10 bg-[#FAF7EF] p-7"
                data-delay={String(i % 3)}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0E2148] text-[#E4C158]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[18px] font-bold text-[#0E2148]">{it.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#0E2148]/70">{it.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
