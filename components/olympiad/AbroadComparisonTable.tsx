import { Table2, Sparkles } from 'lucide-react';
import { physicsAbroadComparison, physicsCupBonus } from '@/lib/olympiad/data';

export default function AbroadComparisonTable() {
  return (
    <section id="oly-comparison" className="oly-section bg-oly-paper">
      <div className="oly-container">
        <div className="max-w-xl">
          <span className="oly-eyebrow">
            <Table2 size={12} /> At a Glance
          </span>
          <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
            The five tracks, side by side.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-oly-ink/60">
            Format, level and — most importantly — how a student from India actually gets in.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-oly-line bg-white">
          <table className="w-full min-w-[720px] border-collapse text-left text-[13.5px]">
            <thead>
              <tr className="border-b border-oly-line bg-oly-brand-50/40">
                <th scope="col" className="px-5 py-4 font-bold text-oly-ink">Olympiad</th>
                <th scope="col" className="px-5 py-4 font-bold text-oly-ink">Region</th>
                <th scope="col" className="px-5 py-4 font-bold text-oly-ink">Format</th>
                <th scope="col" className="px-5 py-4 font-bold text-oly-ink">Eligibility for Indian Students</th>
                <th scope="col" className="px-5 py-4 font-bold text-oly-ink">Ideal For</th>
              </tr>
            </thead>
            <tbody>
              {physicsAbroadComparison.map((t) => (
                <tr key={t.id} className="border-b border-oly-line last:border-0 even:bg-oly-paper/60">
                  <th scope="row" className="px-5 py-4 font-bold text-oly-ink">{t.name}</th>
                  <td className="px-5 py-4 text-oly-ink/70">{t.region}</td>
                  <td className="px-5 py-4 text-oly-ink/70">{t.format}</td>
                  <td className="px-5 py-4 text-oly-ink/70">{t.eligibility}</td>
                  <td className="px-5 py-4 text-oly-ink/70">{t.idealFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-dashed border-oly-amber/50 bg-oly-amber/5 p-6">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-oly-amber/15 text-oly-amber-dark">
            <Sparkles size={18} />
          </span>
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-oly-amber-dark">Bonus · For the truly advanced</p>
            <h3 className="mt-1.5 text-[16px] font-bold text-oly-ink">{physicsCupBonus.name}</h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-oly-ink/60">{physicsCupBonus.blurb}</p>
            <p className="mt-1.5 text-[12px] font-semibold text-oly-ink/40">Organized by {physicsCupBonus.organizer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
