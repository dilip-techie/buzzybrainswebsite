import { Brain, GraduationCap, Target, Users2 } from 'lucide-react';

const points = [
  {
    icon: Brain,
    title: 'Problem-solving depth JEE alone doesn\'t build',
    desc: 'Olympiad physics rewards multi-concept derivation and genuinely unfamiliar problems — exactly the muscle JEE Advanced and top international admissions test for.',
  },
  {
    icon: GraduationCap,
    title: 'A real signal for competitive admissions',
    desc: 'A serious olympiad track record — Indian or international — is one of the few things that meaningfully differentiates an application to IITs, Oxbridge and Ivy League programs alike.',
  },
  {
    icon: Target,
    title: 'Mechanics-first, because every track rewards it',
    desc: 'NSEP, F=ma, BPhO, APhO and EuPhO all lean hardest on mechanics — master it once, and every one of these five tracks gets easier.',
  },
  {
    icon: Users2,
    title: 'IITian mentors who\'ve solved these exact problems',
    desc: 'Taught by mentors with real olympiad and JEE coaching depth — not generalists teaching physics alongside three other subjects.',
  },
];

export default function WhyPhysicsOlympiads() {
  return (
    <section className="oly-section">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow">Why Physics Olympiads</span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
            More than a competition — a different level of physics.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="oly-card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-oly-brand-50 text-oly-brand-500">
                <p.icon size={18} />
              </div>
              <h3 className="mt-4 text-[15.5px] font-bold leading-snug text-oly-ink">{p.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-oly-ink/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
