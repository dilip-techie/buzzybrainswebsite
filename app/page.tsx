'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';

const PROGRAMS = [
  {
    grade: 'Grades 6–10',
    title: 'Foundation Program',
    description: 'Build rock-solid concepts early and get a head start on competitive exams.',
    highlights: ['Mathematics & Science mastery', 'Logical reasoning skills', 'Olympiad & NTSE preparation', 'Runway to future IIT-JEE'],
    href: '/foundation',
    accent: '#7C3AED',
    pc: 'linear-gradient(90deg,#7C3AED,#2563EB)',
    pcbg: 'rgba(124,58,237,.1)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20" /><path d="M5 20V9l7-5 7 5v11" /><path d="M9 20v-6h6v6" /></svg>
    ),
  },
  {
    grade: 'Grades 11–12 · Droppers',
    title: 'IIT-JEE',
    description: 'Deep conceptual learning in PCM with rigorous problem solving.',
    highlights: ['Physics · Chemistry · Maths', 'Concept-first teaching', 'Advanced problem solving', 'JEE Main + Advanced test series'],
    href: '/12th-board-pcm',
    accent: '#2563EB',
    pc: 'linear-gradient(90deg,#2563EB,#0EA5E9)',
    pcbg: 'var(--blue-050)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 6.2L21 9l-5 4.4L17.5 20 12 16.5 6.5 20 8 13.4 3 9l6.6-.8z" /></svg>
    ),
  },
  {
    grade: 'Grades 11–12 · Droppers',
    title: 'NEET',
    description: 'Complete medical entrance preparation with NCERT at the core.',
    highlights: ['Physics · Chemistry · Biology', 'Line-by-line NCERT mastery', 'High-yield revision systems', 'NEET-pattern mock tests'],
    href: '/12th-board-pcb',
    accent: '#10B981',
    pc: 'linear-gradient(90deg,#10B981,#0D9488)',
    pcbg: 'rgba(16,185,129,.1)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M5 8c3 0 5 2 7 2s4-2 7-2M5 16c3 0 5-2 7-2s4 2 7 2" /><circle cx="12" cy="12" r="9" /></svg>
    ),
  },
  {
    grade: 'National & International',
    title: 'Olympiads',
    description: "Train for the world's most prestigious math & science competitions.",
    highlights: ['IMO · NSO · IOQM', 'PRMO · NMTC training', 'Olympiad-level problem sets', 'Path to international rounds'],
    href: '/olympiad-math',
    accent: '#F59E0B',
    pc: 'linear-gradient(90deg,#F59E0B,#EA580C)',
    pcbg: 'rgba(245,158,11,.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4" /><path d="M7 4h10v6a5 5 0 0 1-10 0z" /><path d="M7 6H4a2 2 0 0 0 2 4h1M17 6h3a2 2 0 0 1-2 4h-1" /></svg>
    ),
  },
  {
    grade: 'Maths · Problem Solving',
    title: 'Maths Excellence Program',
    description: 'A focused program for students who want deeper mathematical thinking, faster problem solving and exam confidence.',
    highlights: ['Advanced maths practice', 'Olympiad-style reasoning', 'Board + entrance readiness', 'Concept-driven mentoring'],
    href: '/olympiad-math',
    accent: '#0EA5E9',
    pc: 'linear-gradient(90deg,#0EA5E9,#2563EB)',
    pcbg: 'rgba(14,165,233,.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M7 16V8" /><path d="M12 16V4" /><path d="M17 16v-6" /></svg>
    ),
  },
  {
    grade: 'International Boards',
    title: 'IGCSE Program',
    description: 'Structured coaching for Cambridge-style assessments with strong conceptual pacing and exam strategy.',
    highlights: ['Cambridge/Edexcel preparation', 'Core + extended modules', 'Exam-style practice', 'Personalized support'],
    href: '/international-boards',
    accent: '#6366F1',
    pc: 'linear-gradient(90deg,#6366F1,#8B5CF6)',
    pcbg: 'rgba(99,102,241,.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18" /><path d="M7 3v18" /><path d="M17 3v18" /><path d="M3 17h18" /></svg>
    ),
  },
  {
    grade: 'International Boards',
    title: 'IB Program',
    description: 'Premium coaching for IB MYP and DP students with expert support for internal assessments and exam performance.',
    highlights: ['IB HL/SL guidance', 'IA/EE/TOK support', 'Concept-heavy teaching', 'Score 7 strategies'],
    href: '/international-boards',
    accent: '#10B981',
    pc: 'linear-gradient(90deg,#10B981,#059669)',
    pcbg: 'rgba(16,185,129,.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16" /><path d="M7 5v14" /><path d="M17 5v14" /><path d="M4 19h16" /></svg>
    ),
  },
  {
    grade: 'International Boards',
    title: 'AP Exams',
    description: 'Focused preparation for AP subjects with clear frameworks, timed practice and college-credit readiness.',
    highlights: ['AP Calculus · Physics · Chem', 'Exam pattern mastery', 'High-scoring practice sets', 'College-ready preparation'],
    href: '/international-boards',
    accent: '#EC4899',
    pc: 'linear-gradient(90deg,#EC4899,#8B5CF6)',
    pcbg: 'rgba(236,72,153,.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7z" /><path d="M9 12l2 2 4-4" /></svg>
    ),
  },
];

const TRUST_CARDS = [
  { title: '25+ Years of Excellence', desc: 'Over two decades of guiding students to top ranks in JEE, NEET and Olympiads.', gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M9 13l-1.5 8L12 18l4.5 3L15 13" /></svg> },
  { title: 'IITian Faculty', desc: 'Learn directly from IIT alumni and subject experts who love teaching.', gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg> },
  { title: 'Small Batches — Max 15', desc: 'Every child is seen, heard and mentored. No one gets lost in the crowd.', gradient: 'linear-gradient(135deg,#F59E0B,#D97706)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" /></svg> },
  { title: 'Personalized Mentoring', desc: 'Individual learning plans, one-on-one doubt sessions and constant guidance.', gradient: 'linear-gradient(135deg,#10B981,#059669)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg> },
  { title: 'Weekly Tests', desc: 'Regular assessments that build exam temperament and track true progress.', gradient: 'linear-gradient(135deg,#EF4444,#DC2626)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3 8-8" /><path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" /></svg> },
  { title: 'Parent Progress Reports', desc: 'Transparent updates so parents always know exactly how their child is doing.', gradient: 'linear-gradient(135deg,#0EA5E9,#0284C7)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg> },
  { title: 'AI-Powered Learning', desc: "Smart practice engines that adapt to every student's pace and weak areas.", gradient: 'linear-gradient(135deg,#8B5CF6,#7C3AED)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9z" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></svg> },
  { title: 'Digital Notes', desc: 'Beautifully designed digital notes and revision material, always accessible.', gradient: 'linear-gradient(135deg,#F59E0B,#EA580C)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> },
  { title: 'Interactive Classes', desc: 'Digital boards, simulations and animations that make every concept click.', gradient: 'linear-gradient(135deg,#10B981,#0D9488)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" /><path d="M7 10l3 3 5-5" /></svg> },
];

const METHOD_STEPS = [
  { label: 'Discover', desc: 'Every topic opens with a hook — a story, demo or real-world puzzle that makes students ask "why?"', gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M11 8v6M8 11h6" /></svg> },
  { label: 'Understand', desc: 'Visual explanations, animations and first-principles teaching turn "how?" into deep intuition.', gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 1 6 6c0 2-1 3.6-2.4 4.8L15 15h-6l-.6-1.2A6 6 0 0 1 12 3z" /><path d="M9 18h6M10 21h4" /></svg> },
  { label: 'Practice', desc: 'AI-graded problem sets adapt to each student, from basics to Olympiad-level challenges.', gradient: 'linear-gradient(135deg,#F59E0B,#D97706)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" /></svg> },
  { label: 'Excel', desc: 'Weekly tests, analytics and mentoring translate mastery into ranks, medals and confidence.', gradient: 'linear-gradient(135deg,#10B981,#059669)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4" /><path d="M7 4h10v6a5 5 0 0 1-10 0z" /><path d="M7 6H4a2 2 0 0 0 2 4h1M17 6h3a2 2 0 0 1-2 4h-1" /></svg> },
];

const JOURNEY_STEPS = [
  { badge: 'Step 1', title: 'Admission', desc: "Meet our counsellors, tour the campus, and pick the program that fits your child's goals.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg> },
  { badge: 'Step 2', title: 'Diagnostic Test', desc: 'A friendly assessment maps current strengths, gaps and learning style — no marks, just insight.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v3l2 2" /></svg> },
  { badge: 'Step 3', title: 'Personal Learning Plan', desc: "Mentors design a custom roadmap with milestones tailored to your child's pace and targets.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg> },
  { badge: 'Step 4', title: 'Weekly Coaching', desc: 'Interactive classes, doubt sessions and adaptive practice — a steady weekly rhythm of growth.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4M16 2v4M3 10h18M9 15l2 2 4-4" /></svg> },
  { badge: 'Step 5', title: 'Performance Tracking', desc: 'Weekly tests plus progress analytics; parents get transparent updates every step of the way.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg> },
  { badge: 'Step 6', title: 'Success', desc: 'Olympiad medals, NTSE scholarships, JEE and NEET ranks — and the confidence to keep going.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M9 13l-1.5 8L12 18l4.5 3L15 13" /></svg>, success: true },
];

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    course: 'IIT-JEE Program',
    text: 'The visual explanations and patient mentoring helped me build long-term confidence and secure an excellent rank.',
    avatar: 'RS',
    gradient: 'linear-gradient(135deg,#2563EB,#7C3AED)',
  },
  {
    name: 'Priya Patel',
    course: 'NEET Program',
    text: 'The classes felt premium, focused, and encouraging. My biology and chemistry concepts became much clearer.',
    avatar: 'PP',
    gradient: 'linear-gradient(135deg,#F59E0B,#EA580C)',
  },
  {
    name: 'Arjun Singh',
    course: 'Foundation Program',
    text: 'The foundation program made problem-solving feel exciting and gave me a strong base for competitive exams.',
    avatar: 'AS',
    gradient: 'linear-gradient(135deg,#10B981,#0D9488)',
  },
];

const REVIEWS = [
  {
    name: 'Kavita Khurana',
    text: 'My son is taking coaching for his 10th standard. Both the teachers of Maths & Science are amazing. They are very supportive & provide professional guidance. I highly recommend BuzzyBrains Academy.',
  },
  {
    name: 'Pinky Singhal',
    text: 'I highly recommend Dilip Sir for his clear and simple teaching methods. He explains complex topics in a way that is perfect for students, and my daughter is very happy with her progress. Thank you!',
  },
  {
    name: 'Rishi Raj',
    text: 'Dilip sir is extremely talented and efficient. We had very good experience with our kids. Will highly recommend him.',
  },
  {
    name: 'Manish Bajpai',
    text: 'Dilip Sir - Thank you for your dedication and clear explanation of concepts. My child has gained more confidence for her CBSE board preparation in Mathematics.',
  },
  {
    name: 'Krishnan Duraisamy',
    text: 'My son has been attending Further Mathematics (AS level) and has absolutely benefitted from the structured and in-depth learning experience.',
  },
  {
    name: 'Ekku Anish',
    text: 'We truly feel blessed to have you in Arohi’s learning journey, Dilip sir. The dedication, patience, and sincere support have made a lasting difference.',
  },
];

const FACULTY = [
  { name: 'Dilip Sir', subject: 'Mathematics', qualification: 'IIT Kanpur · IIM Ahmedabad · JEE AIR 400', expertise: '25+ years of teaching excellence with a love for concept-first learning.', initials: 'DS', gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)' },
  { name: 'Sourav Sir', subject: 'Physics', qualification: 'IIT Bombay', expertise: 'Renowned for turning complex topics into simple, visual explanations.', initials: 'SS', gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)' },
  { name: 'Agarwal Sir', subject: 'Chemistry', qualification: 'PhD in Education Psychology · IIT Bombay · BTech Chemical Engineering · ICT Mumbai', expertise: '13+ years of experience teaching chemistry to JEE & NEET aspirants with proven results.', initials: 'AS', gradient: 'linear-gradient(135deg,#10B981,#0D9488)' },
  { name: 'Dr. Todkar', subject: 'Biology', qualification: 'NEET Biology Expert', expertise: '25+ years of experience in teaching NEET candidates with a strong focus on conceptual clarity and exam readiness.', initials: 'DT', gradient: 'linear-gradient(135deg,#F59E0B,#D97706)' },
  { name: 'Deepti Maam', subject: 'Chemistry', qualification: 'IIT Delhi', expertise: 'Focused on strong fundamentals, fast revision, and deep exam readiness.', initials: 'DM', gradient: 'linear-gradient(135deg,#0EA5E9,#0284C7)' },
  { name: 'Dr. Aditi', subject: 'Biology', qualification: 'AIIMS · Medical Expert', expertise: 'Brings scientific depth, clarity, and confidence for all medical aspirants.', initials: 'DA', gradient: 'linear-gradient(135deg,#EF4444,#DC2626)' },
];

const STATS = [
  { count: 25, suffix: '+', label: 'Years of Teaching Excellence' },
  { count: 150, suffix: '+', label: 'Students Mentored' },
  { count: 15, suffix: '', label: 'Max Students per Batch' },
  { count: 100, suffix: '%', label: 'Personalized Mentoring' },
];

type FormState = {
  studentName: string;
  parentName: string;
  grade: string;
  school: string;
  phone: string;
  email: string;
  program: string;
};

const INITIAL_FORM: FormState = {
  studentName: '',
  parentName: '',
  grade: '',
  school: '',
  phone: '',
  email: '',
  program: '',
};

const VALIDATORS: Partial<Record<keyof FormState, (v: string) => boolean>> = {
  studentName: (v) => v.trim().length >= 2,
  parentName: (v) => v.trim().length >= 2,
  grade: (v) => v !== '',
  phone: (v) => /^[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  program: (v) => v !== '',
};

const FIELD_ERRORS: Partial<Record<keyof FormState, string>> = {
  studentName: "Please enter the student's name",
  parentName: "Please enter the parent's name",
  grade: 'Please select a grade',
  phone: 'Enter a valid 10-digit mobile number',
  email: 'Enter a valid email address',
  program: 'Please select a program',
};

export default function HomePage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [invalidFields, setInvalidFields] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          counterIo.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          const dur = 1600;
          const t0 = performance.now();
          const fmt = (n: number) => (n >= 1000 ? n.toLocaleString('en-IN') : String(n));
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = fmt(Math.round(target * ease));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.count').forEach((el) => counterIo.observe(el));

    return () => {
      io.disconnect();
      counterIo.disconnect();
    };
  }, []);

  const scrollCarousel = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.tcard') as HTMLElement | null;
    const step = (card?.offsetWidth ?? 360) + 22;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const validateField = (name: keyof FormState, value: string) => {
    const validator = VALIDATORS[name];
    const ok = validator ? validator(value) : true;
    setInvalidFields((prev) => ({ ...prev, [name]: !ok }));
    return ok;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (invalidFields[name as keyof FormState]) {
      validateField(name as keyof FormState, value);
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    validateField(e.target.name as keyof FormState, e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.keys(formData) as (keyof FormState)[];
    let allOk = true;
    let firstBad: keyof FormState | null = null;
    fields.forEach((field) => {
      const ok = validateField(field, formData[field]);
      if (!ok && !firstBad) firstBad = field;
      allOk = allOk && ok;
    });
    if (!allOk) {
      const el = document.getElementById(firstBad!);
      el?.focus();
      return;
    }

    const message = [
      'Hello! I would like to book a free demo class.',
      '',
      `Student Name: ${formData.studentName}`,
      `Parent Name: ${formData.parentName}`,
      `Grade: ${formData.grade}`,
      `School: ${formData.school}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Program: ${formData.program}`,
    ].join('\n');
    window.open(`https://wa.me/919850570525?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <main className="bb-landing" id="top">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="eq-field" aria-hidden="true">
          <span className="eq" style={{ top: '14%', left: '5%', fontSize: 26, ['--rot' as string]: '-8deg' }}>E = mc²</span>
          <span className="eq amber" style={{ top: '26%', left: '44%', fontSize: 20, ['--rot' as string]: '6deg', animationDelay: '2s' }}>∫ f(x) dx</span>
          <span className="eq" style={{ top: '64%', left: '3%', fontSize: 22, ['--rot' as string]: '4deg', animationDelay: '4s' }}>a² + b² = c²</span>
          <span className="eq green" style={{ top: '8%', left: '70%', fontSize: 24, ['--rot' as string]: '-5deg', animationDelay: '1s' }}>π ≈ 3.14159</span>
          <span className="eq" style={{ top: '80%', left: '56%', fontSize: 20, ['--rot' as string]: '7deg', animationDelay: '3s' }}>F = ma</span>
          <span className="eq amber" style={{ top: '48%', left: '90%', fontSize: 22, ['--rot' as string]: '-6deg', animationDelay: '5s' }}>H₂O</span>
          <span className="eq green" style={{ top: '88%', left: '24%', fontSize: 19, ['--rot' as string]: '5deg', animationDelay: '2.5s' }}>Δx · Δp ≥ ħ/2</span>
          <span className="eq" style={{ top: '38%', left: '26%', fontSize: 18, ['--rot' as string]: '-4deg', animationDelay: '6s' }}>√(x² + y²)</span>
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal">Pune&apos;s Premium Coaching Institute</span>
            <h1 className="reveal" data-delay="1">Learn Smarter.<br />Dream Bigger.<br /><span className="grad">Achieve More.</span></h1>
            <p className="lede reveal" data-delay="2">Premium coaching where curiosity meets technology and academic excellence — built for young minds who want to go far.</p>
            <div className="hero-chips reveal" data-delay="2">
              <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> IIT-JEE</span>
              <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> NEET</span>
              <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> Olympiads</span>
              <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> Foundation · Grades 6–10</span>
            </div>
            <div className="hero-ctas reveal" data-delay="3">
              <Link href="/#contact" className="btn btn-primary">Book Free Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <Link href="/#programs" className="btn btn-ghost">Explore Programs</Link>
            </div>
            <div className="hero-proof reveal" data-delay="4">
              <div className="avatars" aria-hidden="true">
                <span style={{ background: '#2563EB' }}>A</span><span style={{ background: '#7C3AED' }}>S</span><span style={{ background: '#F59E0B' }}>R</span><span style={{ background: '#10B981' }}>K</span>
              </div>
              <div>
                <span className="stars" aria-label="Rated highly by parents">★★★★★</span><br />
                Trusted by <strong>150+ families</strong> across Pune
              </div>
            </div>

            <div className="stats-shell reveal" data-delay="4">
              <div className="stats-copy">
                <span className="eyebrow">Trusted Outcomes</span>
                <h3>Premium guidance, measurable growth, and real student confidence.</h3>
                <p>Every number reflects the care, consistency and personal attention that define our classrooms.</p>
              </div>
              <div className="stats-grid">
                {STATS.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <b><span className="count" data-count={stat.count}>0</span>{stat.suffix}</b>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual reveal" data-delay="2">
            <div className="hero-visual-flex">
              <div className="board" role="img" aria-label="Illustration of a digital classroom with a teacher, smart board, and students learning with tablets, AI, science and coding">
                <div className="board-top">
                  <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
                  <span className="board-tag">Live · Smart Class</span>
                </div>
                <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
                    </linearGradient>
                    <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#1D4ED8" /><stop offset="1" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <rect width="520" height="340" rx="16" fill="url(#bgGrad)" />
                  <rect x="40" y="34" width="290" height="170" rx="14" fill="url(#screenGrad)" opacity="0.92" />
                  <rect x="40" y="34" width="290" height="170" rx="14" fill="none" stroke="#93C5FD" strokeOpacity="0.35" strokeWidth="1.5" />
                  <polyline points="66,176 110,132 150,150 196,96 240,116 292,64" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="292" cy="64" r="7" fill="#FBBF24" />
                  <text x="66" y="70" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="17" fill="#E0EAFF">y = f(x)</text>
                  <text x="234" y="188" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="13" fill="#BBD3FF" opacity="0.85">score →</text>
                  <circle cx="415" cy="72" r="30" fill="#1E3A8A" />
                  <ellipse cx="415" cy="72" rx="46" ry="12" fill="none" stroke="#F59E0B" strokeWidth="3" transform="rotate(-18 415 72)" />
                  <circle cx="404" cy="64" r="5" fill="#93C5FD" opacity="0.8" />
                  <path d="M468 132 l14 -26 14 26 -8 4 v14 h-12 v-14 z" fill="#F8FAFC" transform="rotate(24 482 122)" />
                  <path d="M480 152 q4 12 -2 20 q-2 -10 -8 -14 z" fill="#F59E0B" transform="rotate(24 476 158)" />
                  <g transform="translate(392 178)">
                    <ellipse rx="34" ry="13" fill="none" stroke="#34D399" strokeWidth="2.5" />
                    <ellipse rx="34" ry="13" fill="none" stroke="#34D399" strokeWidth="2.5" transform="rotate(60)" />
                    <ellipse rx="34" ry="13" fill="none" stroke="#34D399" strokeWidth="2.5" transform="rotate(120)" />
                    <circle r="6" fill="#34D399" />
                  </g>
                  <circle cx="72" cy="242" r="17" fill="#FBBF24" />
                  <path d="M48 302 q0 -38 24 -38 q24 0 24 38 z" fill="#2563EB" />
                  <rect x="90" y="252" width="5" height="42" rx="2.5" fill="#94A3B8" />
                  <g>
                    <circle cx="190" cy="258" r="14" fill="#F8B4B4" />
                    <path d="M170 306 q0 -30 20 -30 q20 0 20 30 z" fill="#10B981" />
                    <rect x="176" y="284" width="28" height="18" rx="3" fill="#0EA5E9" stroke="#E0F2FE" strokeWidth="1.5" />
                  </g>
                  <g>
                    <circle cx="268" cy="258" r="14" fill="#FDE68A" />
                    <path d="M248 306 q0 -30 20 -30 q20 0 20 30 z" fill="#7C3AED" />
                    <rect x="254" y="284" width="28" height="18" rx="3" fill="#F59E0B" stroke="#FEF3C7" strokeWidth="1.5" />
                  </g>
                  <g>
                    <circle cx="346" cy="258" r="14" fill="#FCA5A5" />
                    <path d="M326 306 q0 -30 20 -30 q20 0 20 30 z" fill="#2563EB" />
                    <rect x="332" y="284" width="28" height="18" rx="3" fill="#34D399" stroke="#D1FAE5" strokeWidth="1.5" />
                  </g>
                  <rect x="404" y="222" width="94" height="70" rx="10" fill="#0B1120" stroke="#334155" strokeWidth="1.5" />
                  <rect x="414" y="236" width="52" height="6" rx="3" fill="#60A5FA" />
                  <rect x="414" y="250" width="70" height="6" rx="3" fill="#F59E0B" />
                  <rect x="414" y="264" width="40" height="6" rx="3" fill="#34D399" />
                  <text x="418" y="286" fontFamily="monospace" fontSize="10" fill="#64748B">&lt;/&gt; code</text>
                </svg>
              </div>

              <div className="phone-container">
                {!playVideo ? (
                  <div className="video-thumbnail-wrapper" onClick={() => setPlayVideo(true)} role="button" aria-label="Play video">
                    <img src="/images/oardefault.avif" alt="Video Thumbnail" className="video-thumbnail" />
                    <div className="custom-play-btn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/oDdeTp54_7M?autoplay=1&rel=0&modestbranding=1"
                    title="BuzzyBrains Video Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            <div className="float-card fc-1">
              <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#7C3AED,#2563EB)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 1 6 6c0 2-1 3.6-2.4 4.8L15 15h-6l-.6-1.2A6 6 0 0 1 12 3z" /><path d="M9 18h6M10 21h4" /></svg>
              </span>
              <div><b>AI Tutor Active</b><small>Adapting to each student</small></div>
            </div>
            <div className="float-card fc-2">
              <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#10B981,#059669)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
              </span>
              <div><b>Steady Score Growth</b><small>Tracked every month</small></div>
            </div>
            <div className="float-card fc-3">
              <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#F59E0B,#D97706)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M9 13l-1.5 8L12 18l4.5 3L15 13" /></svg>
              </span>
              <div><b>Max 15 / Batch</b><small>Truly personal mentoring</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARENT REVIEWS ============ */}
      <section className="bb-section" id="reviews" aria-labelledby="reviews-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Parents Love Us</span>
            <h2 className="section-title reveal" id="reviews-title">Trusted by families who value clarity, care and results</h2>
            <p className="section-sub reveal">A few of the heartfelt reviews parents have shared about their experience with BuzzyBrains Academy.</p>
          </div>
          <div className="review-grid">
            {REVIEWS.map((review, i) => (
              <article className="review-card reveal" data-delay={String((i % 3) + 1)} key={review.name}>
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>&quot;{review.text}&quot;</p>
                <strong>{review.name}</strong>
                <small>Parent Review</small>
              </article>
            ))}
          </div>
          <div className="center" style={{ marginTop: 24 }}>
            <a href="https://www.google.com/search?q=BuzzyBrains+Academy+Google+Reviews" target="_blank" rel="noopener noreferrer" className="review-link">
              Read more reviews on Google
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============ TRUST ============ */}
      <section className="bb-section" id="trust" aria-labelledby="trust-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Why Parents Trust Us</span>
            <h2 className="section-title reveal" id="trust-title">Built on excellence, powered by technology</h2>
            <p className="section-sub reveal">Everything we do is designed around one goal — helping every student master concepts deeply and perform at their best.</p>
          </div>
          <div className="trust-grid">
            {TRUST_CARDS.map((card, i) => (
              <div className="trust-card reveal" data-delay={String((i % 3) + 1)} key={card.title}>
                <div className="trust-icon" style={{ background: card.gradient }}>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section className="programs bb-section" id="programs" aria-labelledby="prog-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Programs</span>
            <h2 className="section-title reveal" id="prog-title">A program for every ambition</h2>
            <p className="section-sub reveal">From strong foundations in middle school to cracking India&apos;s toughest entrance exams — we&apos;ve built the full journey.</p>
          </div>
          <div className="prog-grid">
            {PROGRAMS.map((program, i) => (
              <article className="prog-card reveal" data-delay={String(i)} style={{ ['--pc' as string]: program.pc, ['--pcbg' as string]: program.pcbg }} key={program.title}>
                <div className="prog-icon">{program.icon}</div>
                <div className="grade">{program.grade}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <ul>
                  {program.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <Link href={program.href} className="prog-link" style={{ color: program.accent }}>Learn more
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="bb-section" id="why" aria-labelledby="why-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Why BuzzyBrains</span>
            <h2 className="section-title reveal" id="why-title">Learning that actually sticks</h2>
            <p className="section-sub reveal">We replaced rote learning with stories, visuals, technology and mentorship — and the results speak for themselves.</p>
          </div>

          <div className="why-row">
            <div className="why-copy reveal">
              <h3>Concepts through stories &amp; real life</h3>
              <p>Newton&apos;s laws through cricket. Chemistry through cooking. Geometry through architecture. When learning connects to the real world, students never forget it.</p>
              <ul className="why-list">
                {['Learning through stories and real-life examples', 'Visual learning with animations and simulations', 'Concept-based teaching, never rote memorization'].map((item) => (
                  <li key={item}><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="why-visual reveal" data-delay="1">
              <div className="illus">
                <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of visual storytelling in learning">
                  <rect width="480" height="300" fill="var(--bg-alt)" />
                  <rect x="40" y="40" width="250" height="160" rx="14" fill="var(--card)" stroke="var(--line)" />
                  <circle cx="90" cy="90" r="22" fill="#F59E0B" opacity="0.9" />
                  <path d="M90 68 v-10 M90 122 v-10 M68 90 h-10 M122 90 h-10 M74 74 l-7 -7 M113 113 l-7 -7 M106 74 l7 -7 M74 106 l-7 7" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M140 150 Q170 80 220 120 T270 90" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 9" />
                  <circle cx="270" cy="90" r="9" fill="#2563EB" />
                  <text x="60" y="180" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="15" fill="var(--text-2)">The sun → energy → life</text>
                  <rect x="310" y="70" width="130" height="180" rx="14" fill="var(--card)" stroke="var(--line)" />
                  <circle cx="375" cy="115" r="20" fill="#FDE68A" />
                  <path d="M355 190 q0 -40 20 -40 q20 0 20 40 z" fill="#2563EB" />
                  <path d="M340 218 q35 22 70 0" stroke="#10B981" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <text x="336" y="240" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="13" fill="var(--text-2)">&quot;Now I get it!&quot;</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="why-row reverse">
            <div className="why-copy reveal">
              <h3>AI-powered, digital-first classrooms</h3>
              <p>Our digital platform tracks every question a student attempts, spots weak areas early, and adapts practice automatically — so no gap goes unnoticed.</p>
              <ul className="why-list">
                {['AI-powered adaptive practice and analytics', 'Digital classrooms with smart boards', 'Performance updates for parents'].map((item) => (
                  <li key={item}><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="why-visual reveal" data-delay="1">
              <div className="illus">
                <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of an AI analytics dashboard">
                  <rect width="480" height="300" fill="var(--bg-alt)" />
                  <rect x="50" y="36" width="380" height="228" rx="16" fill="var(--card)" stroke="var(--line)" />
                  <rect x="74" y="60" width="150" height="10" rx="5" fill="var(--line)" />
                  <rect x="74" y="90" width="160" height="120" rx="10" fill="rgba(37,99,235,.08)" />
                  <polyline points="88,190 116,158 142,170 168,132 196,146 220,108" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="252" y="90" width="154" height="26" rx="8" fill="rgba(16,185,129,.12)" />
                  <rect x="252" y="126" width="154" height="26" rx="8" fill="rgba(245,158,11,.14)" />
                  <rect x="252" y="162" width="154" height="26" rx="8" fill="rgba(124,58,237,.12)" />
                  <rect x="260" y="98" width="96" height="10" rx="5" fill="#10B981" />
                  <rect x="260" y="134" width="66" height="10" rx="5" fill="#F59E0B" />
                  <rect x="260" y="170" width="120" height="10" rx="5" fill="#7C3AED" />
                  <circle cx="404" cy="60" r="14" fill="none" stroke="#2563EB" strokeWidth="2.5" />
                  <rect x="398" y="54" width="12" height="12" rx="3" fill="#2563EB" />
                  <text x="76" y="242" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="14" fill="var(--text-2)">Insight: revise thermodynamics before Friday&apos;s test</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="why-row">
            <div className="why-copy reveal">
              <h3>Mentorship, not mass coaching</h3>
              <p>With a maximum of 15 students per batch and experienced faculty, every doubt gets solved, every strength gets sharpened, and every child gets a mentor who knows them by name.</p>
              <ul className="why-list">
                {['Personal mentorship in small batches', 'Dedicated doubt-solving sessions', 'Regular assessments with detailed feedback'].map((item) => (
                  <li key={item}><span className="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="why-visual reveal" data-delay="1">
              <div className="illus">
                <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a mentor guiding a small group of students">
                  <rect width="480" height="300" fill="var(--bg-alt)" />
                  <circle cx="240" cy="110" r="26" fill="#FBBF24" />
                  <path d="M204 190 q0 -52 36 -52 q36 0 36 52 z" fill="#2563EB" />
                  <g opacity="0.95">
                    <circle cx="120" cy="200" r="17" fill="#F8B4B4" /><path d="M96 250 q0 -34 24 -34 q24 0 24 34 z" fill="#10B981" />
                    <circle cx="200" cy="216" r="17" fill="#FDE68A" /><path d="M176 266 q0 -34 24 -34 q24 0 24 34 z" fill="#7C3AED" />
                    <circle cx="280" cy="216" r="17" fill="#FCA5A5" /><path d="M256 266 q0 -34 24 -34 q24 0 24 34 z" fill="#F59E0B" />
                    <circle cx="360" cy="200" r="17" fill="#BFDBFE" /><path d="M336 250 q0 -34 24 -34 q24 0 24 34 z" fill="#0EA5E9" />
                  </g>
                  <path d="M150 120 q90 -70 180 0" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3 8" strokeLinecap="round" />
                  <circle cx="150" cy="120" r="5" fill="#F59E0B" /><circle cx="330" cy="120" r="5" fill="#F59E0B" />
                  <text x="176" y="56" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="16" fill="var(--text-2)">1 mentor · 10 minds</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="method bb-section" id="method" aria-labelledby="method-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Methodology</span>
            <h2 className="section-title reveal" id="method-title">Four steps from curiosity to mastery</h2>
            <p className="section-sub reveal">Every topic at BuzzyBrains follows the same proven rhythm — spark curiosity, build understanding, drill deep, then perform.</p>
          </div>
          <div className="method-steps">
            {METHOD_STEPS.map((step, i) => (
              <div className="step reveal" data-delay={String(i)} key={step.label}>
                <span className="num">{i + 1}</span>
                <div className="step-orb" style={{ background: step.gradient }}>{step.icon}</div>
                <h3>{step.label}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STUDENT JOURNEY ============ */}
      <section className="bb-section" id="journey" aria-labelledby="journey-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Student Journey</span>
            <h2 className="section-title reveal" id="journey-title">From first visit to first rank</h2>
            <p className="section-sub reveal">A clear, structured path so students and parents always know what comes next.</p>
          </div>
          <div className="journey-track">
            {JOURNEY_STEPS.map((step) => (
              <div className="jstep reveal" data-delay="1" key={step.badge}>
                <div className="jstep-dot" style={step.success ? { borderColor: 'var(--green)' } : undefined}>{step.icon}</div>
                <div className="jstep-body">
                  <span className="badge" style={step.success ? { color: 'var(--green)' } : undefined}>{step.badge}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testis bb-section" id="testimonials" aria-labelledby="testi-title">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="center">
            <span className="eyebrow reveal">Success Stories</span>
            <h2 className="section-title reveal" id="testi-title" style={{ color: '#fff' }}>Students shine. Parents smile.</h2>
            <p className="section-sub reveal" style={{ marginInline: 'auto' }}>Real results from real families across Pune.</p>
          </div>
          <div className="carousel">
            <div className="carousel-track" id="carTrack" ref={trackRef} tabIndex={0} aria-label="Testimonials carousel, scroll horizontally">
              {TESTIMONIALS.map((t) => (
                <article className="tcard" key={t.name}>
                  <span className="tach">{t.course}</span>
                  <p className="quote">&quot;{t.text}&quot;</p>
                  <div className="rating" aria-label="5 out of 5 stars">★★★★★</div>
                  <div className="tperson">
                    <span className="tavatar" style={{ background: t.gradient }}>{t.avatar}</span>
                    <div><b>{t.name}</b><small>{t.course}</small></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="car-nav">
              <button className="car-btn" aria-label="Previous testimonial" onClick={() => scrollCarousel(-1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
              </button>
              <button className="car-btn" aria-label="Next testimonial" onClick={() => scrollCarousel(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FACULTY ============ */}
      <section className="bb-section" id="faculty" aria-labelledby="fac-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Meet the Mentors</span>
            <h2 className="section-title reveal" id="fac-title">Taught by people who&apos;ve been there</h2>
            <p className="section-sub reveal">IIT alumni and passionate educators with 25+ years of combined excellence.</p>
          </div>
          <div className="fac-grid">
            {FACULTY.map((member, i) => (
              <article className="fac-card reveal" data-delay={String(i)} key={member.name}>
                <div className="fac-photo" style={{ background: member.gradient }}>{member.initials}</div>
                <h3>{member.name}</h3>
                <div className="role">{member.subject}</div>
                <p>{member.qualification}</p>
                <p style={{ color: 'var(--text-3)', fontSize: 13 }}>{member.expertise}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAMPUS ============ */}
      <section className="campus bb-section" id="campus" aria-labelledby="campus-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Campus Experience</span>
            <h2 className="section-title reveal" id="campus-title">A space designed for deep learning</h2>
            <p className="section-sub reveal">Smart classrooms, digital boards and comfortable spaces where students love to spend time.</p>
          </div>
          <div className="gal">
            <div className="gal-item w2 h2 reveal">
              <div className="gal-bg" style={{ background: 'linear-gradient(140deg,#1E3A8A,#2563EB 55%,#7C3AED)' }}>
                <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', opacity: 0.55 }} preserveAspectRatio="xMidYMid slice"><rect x="60" y="70" width="280" height="150" rx="12" fill="#0F172A" opacity=".55" /><polyline points="90,190 140,140 180,160 230,110 280,130 320,90" fill="none" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round" /><circle cx="120" cy="290" r="16" fill="#FDE68A" /><path d="M96 348 q0 -36 24 -36 q24 0 24 36z" fill="#10B981" /><circle cx="210" cy="290" r="16" fill="#F8B4B4" /><path d="M186 348 q0 -36 24 -36 q24 0 24 36z" fill="#F59E0B" /><circle cx="300" cy="290" r="16" fill="#BFDBFE" /><path d="M276 348 q0 -36 24 -36 q24 0 24 36z" fill="#0EA5E9" /></svg>
              </div>
              <span className="gal-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></svg> Smart Classrooms</span>
            </div>
            <div className="gal-item w2 reveal" data-delay="1">
              <div className="gal-bg" style={{ background: 'linear-gradient(135deg,#0F172A,#334155)' }}>
                <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', opacity: 0.6 }} preserveAspectRatio="xMidYMid slice"><rect x="40" y="26" width="320" height="120" rx="10" fill="#1D4ED8" opacity=".8" /><text x="64" y="80" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="26" fill="#E0EAFF">∫ x² = ?</text><path d="M220 110 q30 -50 80 -20" stroke="#FBBF24" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
              </div>
              <span className="gal-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M12 17v4M8 21h8" /></svg> Digital Boards</span>
            </div>
            <div className="gal-item reveal" data-delay="2">
              <div className="gal-bg" style={{ background: 'linear-gradient(135deg,#059669,#10B981)' }}>
                <svg viewBox="0 0 200 180" style={{ width: '100%', height: '100%', opacity: 0.5 }} preserveAspectRatio="xMidYMid slice"><circle cx="70" cy="70" r="14" fill="#ECFDF5" /><circle cx="130" cy="70" r="14" fill="#FDE68A" /><path d="M46 130 q0 -32 24 -32t24 32zM106 130 q0 -32 24 -32t24 32z" fill="#065F46" /><path d="M84 96 h32" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 7" /></svg>
              </div>
              <span className="gal-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /></svg> Collaborative Learning</span>
            </div>
            <div className="gal-item reveal" data-delay="3">
              <div className="gal-bg" style={{ background: 'linear-gradient(135deg,#D97706,#F59E0B)' }}>
                <svg viewBox="0 0 200 180" style={{ width: '100%', height: '100%', opacity: 0.5 }} preserveAspectRatio="xMidYMid slice"><rect x="36" y="90" width="130" height="50" rx="12" fill="#78350F" /><rect x="46" y="60" width="110" height="36" rx="10" fill="#FEF3C7" /><circle cx="160" cy="46" r="16" fill="#FDE68A" /></svg>
              </div>
              <span className="gal-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg> Comfortable Environment</span>
            </div>
            <div className="gal-item w2 reveal" data-delay="2">
              <div className="gal-bg" style={{ background: 'linear-gradient(135deg,#4C1D95,#7C3AED)' }}>
                <svg viewBox="0 0 400 180" style={{ width: '100%', height: '100%', opacity: 0.5 }} preserveAspectRatio="xMidYMid slice"><rect x="50" y="40" width="90" height="110" rx="10" fill="#2E1065" /><rect x="160" y="40" width="90" height="110" rx="10" fill="#2E1065" /><rect x="270" y="40" width="90" height="110" rx="10" fill="#2E1065" /><rect x="64" y="56" width="62" height="8" rx="4" fill="#A78BFA" /><rect x="174" y="56" width="62" height="8" rx="4" fill="#A78BFA" /><rect x="284" y="56" width="62" height="8" rx="4" fill="#A78BFA" /><rect x="64" y="74" width="42" height="8" rx="4" fill="#C4B5FD" /><rect x="174" y="74" width="42" height="8" rx="4" fill="#C4B5FD" /><rect x="284" y="74" width="42" height="8" rx="4" fill="#C4B5FD" /></svg>
              </div>
              <span className="gal-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 6.2L21 9l-5 4.4L17.5 20 12 16.5 6.5 20 8 13.4 3 9l6.6-.8z" /></svg> Premium Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA + LEAD FORM ============ */}
      <section className="cta bb-section" id="contact" aria-labelledby="cta-title">
        <div className="container cta-grid">
          <div className="reveal">
            <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Max 15 per Batch</span>
            <h2 id="cta-title">Ready to unlock your child&apos;s potential?</h2>
            <p className="lede">Book a FREE demo class today. Experience our teaching style, meet the mentors, and see the difference — no commitment needed.</p>
            <div className="cta-btns">
              <a href="#leadForm" className="btn btn-amber">Book Free Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="tel:+919850570525" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2z" /></svg>
                Call Now
              </a>
              <a href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" className="btn btn-green">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.4.9-.9 1-.7 1.4.9 1.5 2 2.5 3.4 3.1.4.2.6.2.8-.1.2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2l2 1c.3.1.5.2.6.3 0 .2 0 .8-.2 1.5z" /></svg>
                WhatsApp
              </a>
            </div>
            <ul className="cta-points">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Free diagnostic assessment included</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Meet IITian faculty face-to-face</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> Personalized program recommendation</li>
            </ul>
          </div>

          <form className="lead-form reveal" data-delay="1" id="leadForm" noValidate onSubmit={handleSubmit}>
            {!submitted ? (
              <div id="formFields">
                <h3>Book Your FREE Demo Class</h3>
                <p className="fsub">Fill in the details below — our team will call you within 24 hours.</p>
                <div className="f-row">
                  <div className={`f-field${invalidFields.studentName ? ' invalid' : ''}`}>
                    <label htmlFor="studentName">Student Name *</label>
                    <input type="text" id="studentName" name="studentName" placeholder="Aarav Sharma" autoComplete="name" required value={formData.studentName} onChange={handleChange} onBlur={handleBlur} />
                    <span className="err">{FIELD_ERRORS.studentName}</span>
                  </div>
                  <div className={`f-field${invalidFields.parentName ? ' invalid' : ''}`}>
                    <label htmlFor="parentName">Parent Name *</label>
                    <input type="text" id="parentName" name="parentName" placeholder="Rajesh Sharma" required value={formData.parentName} onChange={handleChange} onBlur={handleBlur} />
                    <span className="err">{FIELD_ERRORS.parentName}</span>
                  </div>
                </div>
                <div className="f-row">
                  <div className={`f-field${invalidFields.grade ? ' invalid' : ''}`}>
                    <label htmlFor="grade">Grade *</label>
                    <select id="grade" name="grade" required value={formData.grade} onChange={handleChange} onBlur={handleBlur}>
                      <option value="">Select grade</option>
                      <option>Grade 6</option><option>Grade 7</option><option>Grade 8</option>
                      <option>Grade 9</option><option>Grade 10</option><option>Grade 11</option>
                      <option>Grade 12</option><option>Dropper / Repeater</option>
                    </select>
                    <span className="err">{FIELD_ERRORS.grade}</span>
                  </div>
                  <div className="f-field">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school" placeholder="Your school name" value={formData.school} onChange={handleChange} />
                    <span className="err" />
                  </div>
                </div>
                <div className="f-row">
                  <div className={`f-field${invalidFields.phone ? ' invalid' : ''}`}>
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" placeholder="98XXXXXXXX" autoComplete="tel" required value={formData.phone} onChange={handleChange} onBlur={handleBlur} />
                    <span className="err">{FIELD_ERRORS.phone}</span>
                  </div>
                  <div className={`f-field${invalidFields.email ? ' invalid' : ''}`}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" required value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                    <span className="err">{FIELD_ERRORS.email}</span>
                  </div>
                </div>
                <div className="f-row">
                  <div className={`f-field full${invalidFields.program ? ' invalid' : ''}`}>
                    <label htmlFor="program">Program Interested In *</label>
                    <select id="program" name="program" required value={formData.program} onChange={handleChange} onBlur={handleBlur}>
                      <option value="">Select a program</option>
                      <option>Foundation (Grades 6–10)</option>
                      <option>IIT-JEE</option>
                      <option>NEET</option>
                      <option>Olympiads (IMO / NSO / IOQM / PRMO / NMTC)</option>
                      <option>Not sure — help me choose</option>
                    </select>
                    <span className="err">{FIELD_ERRORS.program}</span>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>Book Your FREE Demo Class
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
                <p style={{ fontSize: 12.5, color: 'var(--text-3)', textAlign: 'center', marginTop: 14 }}>No spam, ever. We&apos;ll only contact you about your demo class.</p>
              </div>
            ) : (
              <div className="form-success show" role="status">
                <div className="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></div>
                <h3 style={{ color: 'var(--text)' }}>You&apos;re all set! 🎉</h3>
                <p style={{ color: 'var(--text-2)', fontSize: 15, marginTop: 8 }}>Thanks for booking a free demo. Our team will call you within 24 hours to confirm your slot.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
