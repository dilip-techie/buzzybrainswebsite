export const CONTACT = {
  phoneDisplay: '+91 98505 70525',
  phoneHref: 'tel:+919850570525',
  whatsappHref: 'https://wa.me/918983604478',
  email: 'hello@buzzybrainsacademy.com',
  hours: 'Monday to Saturday, 9:00 AM – 8:00 PM',
} as const;

export interface Location {
  tag: string;
  name: string;
  address: string;
  note: string;
  mapsHref: string;
  primary?: boolean;
}

export const LOCATIONS: Location[] = [
  {
    tag: 'Head Office',
    name: '212, Amanora Ascent Avenue',
    address: 'Amanora, Hadapsar, Pune',
    note: 'Admissions, counselling and program guidance.',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=BuzzyBrains+Academy+212+Amanora+Ascent+Avenue+Pune',
    primary: true,
  },
  {
    tag: 'Branch',
    name: 'Aspire Towers',
    address: 'Hadapsar, Pune',
    note: 'Focused coaching and personalised mentor support.',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=BuzzyBrains+Academy+Aspire+Towers+Pune',
  },
];

export const TOPICS = [
  { title: 'Admissions & scholarships', body: 'Entrance test, batch availability and scholarships up to 50%.', href: '/admissions' },
  { title: 'Foundation, JEE & NEET', body: 'Programs for Grades 6–12 with IITian mentors.', href: '/top-rankers-program' },
  { title: 'Board Exam Test Series', body: 'Hand-marked mock papers for CBSE, ICSE, State, IGCSE and IB.', href: '/test-series' },
  { title: 'Crash courses', body: 'MHT-CET and Class 10 / 12 board crash courses.', href: '/mht-cet-crash-course-pune' },
  { title: 'Olympiads', body: 'IOQM, AMC, NMTC, Kangaroo, SOF and more.', href: '/olympiads' },
  { title: 'One-on-one classes', body: 'Personal mentoring, online or offline.', href: '/one-on-one' },
];

export const CONTACT_FAQS = [
  {
    question: 'How can I enroll in a course?',
    answer:
      'Contact us via WhatsApp or phone to discuss your learning goals. Our admissions team will guide you through the enrollment process and help you choose the right program.',
  },
  {
    question: 'What are the available scholarship options?',
    answer:
      'We offer merit-based scholarships up to 50% for high-performing students. Visit our Admissions page for detailed information about our scholarship tiers.',
  },
  {
    question: 'Do you offer online classes?',
    answer:
      'Yes! We offer both online and offline coaching options. Our experienced mentors (IITian and IIM graduates) provide personalized guidance through multiple formats to suit your needs.',
  },
  {
    question: 'What is your response time?',
    answer:
      'We typically respond to WhatsApp messages within a few minutes during business hours. For the fastest response, please contact us via WhatsApp.',
  },
  {
    question: 'Can I schedule a free consultation?',
    answer:
      'Absolutely! Contact us to schedule a free consultation with our mentors. They will assess your current level and discuss the best learning path for your goals.',
  },
  {
    question: 'Where are your centers located?',
    answer:
      'Our Head Office is at 212, Amanora Ascent Avenue, Amanora, Hadapsar, Pune. Our Branch is at Aspire Towers, Hadapsar.',
  },
];
