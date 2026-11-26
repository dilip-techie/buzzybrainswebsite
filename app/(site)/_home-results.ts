/** Six featured results for the home page. Kept as a small standalone file so
 * the (client) home page does not pull in the full test-series data modules.
 * Names, results and quotes mirror the approved testimonials on each
 * test-series page; update both places together. */
export interface HomeResult {
  name: string;
  photo: string;
  board: string;
  result: string;
  quote: string;
}

export const HOME_RESULTS: HomeResult[] = [
  { name: 'Priya Gupta', photo: '/images/students/priya-gupta.webp', board: 'Class 10 · CBSE', result: '99.0% · 2026', quote: 'I liked the variety of questions in the sample papers. There were assertion-reason, case-based and competency-based questions too. It helped me get comfortable with different question types.' },
  { name: 'Riya Malhotra', photo: '/images/students/riya-malhotra.webp', board: 'Class 10 · ICSE', result: '98.4% · 2026', quote: 'ICSE papers can be quite lengthy, so I wanted to improve my writing speed. The full-length mock tests helped me manage time better and get used to writing answers within the exam duration.' },
  { name: 'Aditya Khanna', photo: '/images/students/aditya-khanna.webp', board: 'Class 12 · ISC · Science', result: '96.2% · 2026', quote: 'Physics numericals were something I struggled with initially. The chapter-wise tests gave me enough practice and helped me understand where I was going wrong. The solutions were quite helpful.' },
  { name: 'Emma Wilson', photo: '/images/students/emma-wilson.webp', board: 'Cambridge IGCSE', result: '9 A* Grades · 2026', quote: "The practice tests helped me understand how Cambridge questions are structured. I used to lose marks even when I knew the topic, mainly because my answers weren't detailed enough. The solutions and mark schemes helped me improve that." },
  { name: 'Rohan Kapoor', photo: '/images/students/rohan-kapoor.webp', board: 'IB Diploma Programme', result: '42/45 Points · 2026', quote: 'IB exams require more than just memorising concepts. I found the application-based questions particularly useful. The regular practice helped me develop better analytical and problem-solving skills.' },
  { name: 'Sakshi Patil', photo: '/images/students/sakshi-patil.webp', board: 'Class 12 · Maharashtra HSC · Science', result: '98.2% · 2026', quote: 'I was looking for more practice before my HSC exams, especially in Physics and Chemistry. The chapter-wise tests helped me revise regularly, and the full-length papers gave me a better idea of the actual exam pattern.' },
];
