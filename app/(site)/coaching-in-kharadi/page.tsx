import { LocationPage } from '../../components/LocationPage';

export default function KharadiLocationPage() {
  return (
    <LocationPage
      locality="Kharadi"
      h1={<>Coaching Classes for Kharadi Students</>}
      lede="We have real students commuting from Kharadi and the IT-corridor area today — with an online option for the days a commute doesn't make sense."
      programLinks={[
        { href: '/foundation', label: 'Foundation Program' },
        { href: '/12th-board-pcm', label: 'IIT-JEE' },
        { href: '/12th-board-pcb', label: 'NEET' },
        { href: '/one-on-one', label: 'One-on-One Coaching' },
      ]}
      pillarLinks={[
        { href: '/maths-tuition-pune', label: 'Maths Tuition Pune — Guide' },
        { href: '/neet-coaching-pune', label: 'NEET Coaching Pune — Guide' },
      ]}
      nearbyLocalities={[
        { href: '/coaching-in-amanora', label: 'Coaching in Amanora' },
      ]}
      body={[
        {
          kind: 'p',
          text: 'Kharadi — home to the EON IT Park and World Trade Center corridor along Nagar Road — has a growing number of families juggling long IT-sector work hours with their children\'s coaching schedules. We already have students making the trip from Kharadi to our Amanora and Aspire Towers centers, and we\'ve built our scheduling around exactly that kind of family.',
        },
        { kind: 'h2', text: 'How Kharadi families make the commute work' },
        {
          kind: 'p',
          text: 'Drive time from Kharadi to our centers varies with Pune traffic, so most Kharadi families combine offline sessions — often on weekends, when the roads are calmer — with online classes on weekdays. Every program is built to work in this hybrid format from day one, not as an afterthought.',
        },
        { kind: 'h2', text: 'Why small batches matter even more for a commuting student' },
        {
          kind: 'p',
          text: 'A student who\'s giving up travel time to attend class needs that time to count. In a batch capped at 12, a mentor can address a Kharadi student\'s specific doubt directly rather than that student waiting for a large-batch session to circle back to their question — which is exactly the kind of wasted time a long commute can\'t afford.',
        },
        { kind: 'h2', text: 'Programs that work especially well for Kharadi students' },
        {
          kind: 'ul',
          items: [
            'Foundation Program — mostly online-friendly for Grades 6-10, with periodic in-person sessions.',
            'One-on-One Coaching — fully flexible scheduling, including evening and weekend slots that suit an IT-corridor family\'s routine.',
            'IIT-JEE and NEET — a hybrid mix of offline mock tests (for real exam-condition practice) and online concept classes.',
          ],
        },
      ]}
      faq={[
        {
          question: 'Do you have a center in Kharadi?',
          answer: 'Our physical centers are in Amanora and at Aspire Towers, both a manageable drive from Kharadi. We also offer online classes for Kharadi students who prefer not to commute.',
        },
        {
          question: 'How long is the commute from Kharadi?',
          answer: 'It varies with traffic, but it\'s a manageable, commonly-traveled route for our current Kharadi students — most combine offline weekend sessions with online classes on weekdays.',
        },
        {
          question: 'Which programs are popular with Kharadi families?',
          answer: 'Foundation and One-on-One coaching are especially popular with Kharadi families, since both offer flexible, partly-online formats that reduce how often a commute is needed.',
        },
      ]}
    />
  );
}
