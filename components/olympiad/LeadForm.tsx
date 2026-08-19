'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Send } from 'lucide-react';

const schema = z.object({
  studentName: z.string().min(2, "Enter the student's full name"),
  parentName: z.string().min(2, "Enter the parent's full name"),
  grade: z.string().min(1, 'Select a grade'),
  school: z.string().min(2, 'Enter the school name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email address'),
  program: z.string().min(1, 'Select a program'),
});

type FormValues = z.infer<typeof schema>;

export default function LeadForm({
  heading = 'Sit a real timed mock before you commit.',
  demoSubject = 'IOQM / AMC',
  programs = ['IOQM', 'AMC 8', 'AMC 10', 'Not sure yet — need guidance'],
}: {
  heading?: string;
  demoSubject?: string;
  programs?: string[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const message = [
      `Hello! I would like to book a free ${demoSubject} demo class.`,
      '',
      `Student Name: ${data.studentName}`,
      `Parent Name: ${data.parentName}`,
      `Grade: ${data.grade}`,
      `School: ${data.school}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Program: ${data.program}`,
    ].join('\n');
    window.open(`https://wa.me/919850570525?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    reset();
  };

  return (
    <section id="oly-lead-form" className="oly-section">
      <div className="oly-container">
        <div className="grid overflow-hidden rounded-oly-4xl border border-oly-line shadow-oly-card-lg lg:grid-cols-2">
          <div className="relative flex flex-col justify-between bg-gradient-to-br from-oly-brand-600 to-oly-brand-900 p-9 text-white sm:p-12">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                Free Demo Class
              </span>
              <h2 className="mt-6 text-balance text-[30px] font-extrabold leading-tight sm:text-[36px]">
                {heading}
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/70">
                Fill this in and our academic counsellor will call within 24 hours
                to schedule your child&apos;s free diagnostic bubble test.
              </p>
            </div>

            <ul className="mt-10 space-y-3.5">
              {['No cost, no obligation', 'Diagnostic scored the same day', 'Personal prep plan shared with parents'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] font-medium text-white/85">
                  <CheckCircle2 size={17} className="shrink-0 text-oly-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-9 sm:p-12">
            {submitted ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-oly-success/10 text-oly-success">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="mt-5 text-[19px] font-bold text-oly-ink">Request sent!</h3>
                <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-oly-ink/60">
                  We&apos;ve opened WhatsApp with your details — send the message and our
                  counsellor will call you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-[13.5px] font-bold text-oly-brand-500 hover:underline">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 sm:grid-cols-2">
                <Field label="Student Name" error={errors.studentName?.message}>
                  <input {...register('studentName')} className="oly-field-input" placeholder="e.g. Aarav Mehta" />
                </Field>
                <Field label="Parent Name" error={errors.parentName?.message}>
                  <input {...register('parentName')} className="oly-field-input" placeholder="e.g. Priya Mehta" />
                </Field>

                <Field label="Grade" error={errors.grade?.message}>
                  <select {...register('grade')} className="oly-field-input" defaultValue="">
                    <option value="" disabled>Select grade</option>
                    {['6', '7', '8', '9', '10', '11', '12'].map((g) => (
                      <option key={g} value={g}>Grade {g}</option>
                    ))}
                  </select>
                </Field>
                <Field label="School" error={errors.school?.message}>
                  <input {...register('school')} className="oly-field-input" placeholder="e.g. DAV Public School" />
                </Field>

                <Field label="Phone Number" error={errors.phone?.message}>
                  <input {...register('phone')} className="oly-field-input" placeholder="98xxxxxxxx" inputMode="numeric" />
                </Field>
                <Field label="Email Address" error={errors.email?.message}>
                  <input {...register('email')} type="email" className="oly-field-input" placeholder="you@email.com" />
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Program Interested In" error={errors.program?.message}>
                    <select {...register('program')} className="oly-field-input" defaultValue="">
                      <option value="" disabled>Select a program</option>
                      {programs.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <button type="submit" disabled={isSubmitting} className="oly-btn-primary sm:col-span-2 mt-2 w-full">
                  {isSubmitting ? 'Sending...' : 'Book Your FREE Demo Class'} <Send size={16} />
                </button>
                <p className="text-center text-[11.5px] text-oly-ink/40 sm:col-span-2">
                  By submitting, you agree to be contacted by BuzzyBrains Academy about this program.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-bold text-oly-ink/70">{label}</span>
      {children}
      {error && <span className="mt-1 block text-[11.5px] font-medium text-red-500">{error}</span>}
    </label>
  );
}
