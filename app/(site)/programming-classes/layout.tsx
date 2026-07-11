import { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Programming Classes Grades 6-12 | IIT Kanpur Expert | Python, Java, Web Dev',
  description: 'Master coding with IIT Kanpur expert mentor. Programming classes for Grades 6-12 aligned with CBSE, ICSE, IGCSE, IB & international boards. Learn Python, Java, Web Development & more.',
  keywords: 'programming classes, coding classes, Python, Java, CBSE, ICSE, IGCSE, IB, computer science coaching, grades 6-12',
  alternates: { canonical: 'https://buzzybrainsacademy.com/programming-classes' },
  openGraph: {
    title: 'Programming Classes | Master Coding with IIT Kanpur Expert',
    description: 'Learn programming from an IIT Kanpur graduate. Complete curriculum for all boards, small batches, hands-on projects.',
    url: 'https://buzzybrainsacademy.com/programming-classes',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ProgrammingClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Programming Classes (Grades 6-12)"
        description="Master coding with IIT Kanpur expert mentor. Programming classes for Grades 6-12 aligned with CBSE, ICSE, IGCSE, IB & international boards. Learn Python, Java, Web Development & more."
        path="/programming-classes"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Which programming language will my child learn?',
            answer:
              "We teach based on your child's board: Python for CBSE/IGCSE/IB, Java for ICSE/ISC, and C++ for advanced students. The curriculum is tailored to match board requirements while adding industry-relevant skills.",
          },
          {
            question: 'Is prior programming experience required?',
            answer:
              'No! We start from absolute basics for all beginners. Whether your child has never coded before or has some experience, our curriculum accommodates different learning levels.',
          },
          {
            question: 'How are classes conducted?',
            answer:
              'We offer both online live interactive sessions and offline classes. Each format includes real-time coding demonstrations, hands-on practice, and personalized feedback from our IIT Kanpur mentor.',
          },
          {
            question: 'What is the batch size?',
            answer:
              'We maintain small batch sizes of maximum 12 students to ensure personalized attention, individual code reviews, and adequate doubt-clearing time for each student.',
          },
          {
            question: 'Do you provide study materials?',
            answer:
              'Yes! We provide comprehensive study materials including detailed notes, code examples, practice problems, previous year board questions, and curated resources for each topic.',
          },
          {
            question: 'How do you ensure board exam preparation?',
            answer:
              'Our curriculum is specifically aligned with board syllabus. We include board-specific topics, solve previous year questions, conduct mock tests, and provide exam-focused revision sessions in the final months.',
          },
          {
            question: 'Can students from international boards join?',
            answer:
              'Absolutely! We have dedicated tracks for IGCSE, IB, Cambridge, and AP curricula. Our IIT mentor has experience teaching all major international boards.',
          },
          {
            question: 'How often will my child have classes?',
            answer:
              'Frequency varies by grade and batch type: Foundation (Grades 6-8): 2 classes/week, Intermediate (9-10): 2-3 classes/week, Advanced (11-12): 3 classes/week. Flexible scheduling is available for 1-on-1 classes.',
          },
        ]}
      />
      {children}
    </>
  );
}
