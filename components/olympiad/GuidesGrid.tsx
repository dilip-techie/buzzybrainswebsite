import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export interface GuideGroup {
  heading: string;
  guides: { href: string; label: string }[];
}

export default function GuidesGrid({
  eyebrow = 'Free Guides',
  title,
  subtitle,
  groups,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  groups: GuideGroup[];
}) {
  return (
    <section id="oly-guides" className="oly-section bg-oly-paper">
      <div className="oly-container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="oly-eyebrow">
            <BookOpen size={12} /> {eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-[15.5px] leading-relaxed text-oly-ink/60">{subtitle}</p>
          )}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.heading}
              className="reveal rounded-2xl border border-oly-line bg-white p-6"
            >
              <h3 className="text-[17px] font-extrabold text-oly-ink">{group.heading}</h3>
              <ul className="mt-4 space-y-1">
                {group.guides.map((g) => (
                  <li key={g.href}>
                    <Link
                      prefetch={false}
                      href={g.href}
                      className="block rounded-lg px-3 py-2.5 text-[14.5px] font-semibold leading-snug text-oly-ink/75 transition-colors hover:bg-oly-paper hover:text-oly-ink"
                    >
                      {g.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
