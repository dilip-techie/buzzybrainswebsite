'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface MarketingFaqItem {
  question: string;
  answer: string;
}

export default function MarketingFaq({
  items,
  title = 'Frequently asked questions',
  eyebrow = 'FAQ',
  className = '',
}: {
  items: MarketingFaqItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`py-20 px-4 bg-white ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-slate-500">
            <HelpCircle className="w-3.5 h-3.5" />
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-[15px] leading-relaxed text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
