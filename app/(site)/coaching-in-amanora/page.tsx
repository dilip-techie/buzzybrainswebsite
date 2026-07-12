import { LocationPage } from '../../components/LocationPage';

export default function AmanoraLocationPage() {
  return (
    <LocationPage
      locality="Amanora"
      h1={<>Coaching Classes in Amanora, Pune</>}
      lede="Amanora, Hadapsar is home to our flagship center — every BuzzyBrains Academy program runs from here, in person and online."
      programLinks={[
        { href: '/foundation', label: 'Foundation Program' },
        { href: '/12th-board-pcm', label: 'IIT-JEE' },
        { href: '/12th-board-pcb', label: 'NEET' },
        { href: '/olympiads', label: 'Olympiads' },
        { href: '/one-on-one', label: 'One-on-One Coaching' },
      ]}
      pillarLinks={[
        { href: '/foundation-classes-pune', label: 'Foundation Classes Pune — Guide' },
        { href: '/iit-jee-coaching-pune', label: 'IIT JEE Coaching Pune — Guide' },
      ]}
      nearbyLocalities={[
        { href: '/coaching-in-kharadi', label: 'Coaching in Kharadi' },
      ]}
      body={[
        {
          kind: 'p',
          text: 'Amanora is where BuzzyBrains Academy started, and it remains our flagship center today — at 201, Pallazo, near Wisdom World School, in the heart of the Amanora township in Hadapsar. If you live in or around Amanora, this is the closest and most direct way to reach us for any program.',
        },
        { kind: 'h2', text: 'Why families in Amanora choose BuzzyBrains Academy' },
        {
          kind: 'ul',
          items: [
            'Every batch is capped at 12 students — the same small-batch mentoring model across every program, from Foundation through JEE and NEET.',
            'Faculty led by founder Dilip Sir (IIT Kanpur, IIM Ahmedabad) and a team of IIT/IIM alumni educators.',
            'A short, local commute for Amanora and Hadapsar families — no crossing the city for quality coaching.',
            'Both offline classes at the Amanora center and online options for families who prefer to learn from home.',
          ],
        },
        { kind: 'h2', text: 'Programs available at the Amanora center' },
        {
          kind: 'p',
          text: 'Every BuzzyBrains Academy program runs out of Amanora — Foundation coaching for Grades 6-10, IIT-JEE and NEET for Grades 11-12 and droppers, Olympiad training across Maths, Science and Coding, and One-on-One personalized mentoring for students who need a custom pace.',
        },
      ]}
      faq={[
        {
          question: 'Where exactly is the Amanora center located?',
          answer: 'At 201, Pallazo, near Wisdom World School, in the Amanora locality of Hadapsar, Pune.',
        },
        {
          question: 'Which programs run out of the Amanora center?',
          answer: 'Foundation, IIT-JEE, NEET, Olympiads, Maths Excellence and One-on-One coaching all run from Amanora, both online and offline.',
        },
        {
          question: 'Do you offer online classes for Amanora students who prefer not to commute?',
          answer: 'Yes — every program offers an online option in addition to in-person classes at the Amanora center.',
        },
      ]}
    />
  );
}
