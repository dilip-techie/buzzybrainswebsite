import type { Metadata } from "next";
import { ProgramJsonLd, FaqJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "1-on-1 Personalized Coaching | Expert IITian & IIM Mentor | BuzzyBrains Academy",
  description: "IITian Mentorship. Gateway to Top IITs and AIIMS. Personalized 1-on-1 coaching sessions with expert IITian mentor (IIT Kanpur & IIM Ahmedabad). Custom learning plans for IIT-JEE, NEET, Board Exams, and any academic goal with flexible online/offline options.",
  alternates: { canonical: "https://buzzybrainsacademy.com/one-on-one" },
  openGraph: {
    title: "1-on-1 Personalized Coaching | Expert IITian & IIM Mentor",
    description: "Custom learning plans for IIT-JEE, NEET, Board Exams and more, with flexible online/offline 1-on-1 sessions.",
    url: "https://buzzybrainsacademy.com/one-on-one",
    siteName: "BuzzyBrains Academy",
    images: [
      {
        url: "https://buzzybrainsacademy.com/images/buzzybrains_social.jpg",
        width: 1200,
        height: 630,
        alt: "1-on-1 Personalized Coaching - BuzzyBrains Academy",
      },
    ],
    type: "website",
  },
};

export default function OneOnOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgramJsonLd
        type="Service"
        name="1-on-1 Personalized Coaching"
        description="Personalized 1-on-1 coaching sessions with expert IITian mentor (IIT Kanpur & IIM Ahmedabad). Custom learning plans for IIT-JEE, NEET, Board Exams, and any academic goal with flexible online/offline options."
        path="/one-on-one"
      />
      <FaqJsonLd
        items={[
          {
            question: 'How flexible are the timings?',
            answer: 'Very flexible! Pick any time slot that works for you. Morning, afternoon, evening, weekends - we adapt to your schedule.',
          },
          {
            question: 'Can I choose online or offline?',
            answer: "Yes! Classes can be conducted online (video call) or offline at our Amanora center. You decide what's best.",
          },
          {
            question: 'How often should my child attend?',
            answer: "Frequency depends on your child's needs. Some students prefer 2-3 sessions/week, others prefer 1 session/week. We'll recommend based on assessment.",
          },
          {
            question: "What if my child doesn't like the mentor?",
            answer: "We'll match you with a different mentor. Your child's comfort and learning is our priority.",
          },
          {
            question: 'Can classes cover both board and competitive exams?',
            answer: 'Absolutely! We design sessions to cover board syllabus while also preparing for JEE/NEET or international board exams.',
          },
          {
            question: 'How is progress tracked?',
            answer: 'Weekly assessments, performance reports, monthly parent meetings, and continuous feedback to ensure measurable progress.',
          },
        ]}
      />
      {children}
    </>
  );
}
