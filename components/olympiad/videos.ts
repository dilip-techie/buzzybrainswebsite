// YouTube Shorts shown in the "watch" section on olympiad pages.
// Edit the ids here to change the video everywhere at once.

export interface ShortVideo {
  /** YouTube video id (the part after /shorts/). */
  id: string;
  /** Accessible title for the iframe. */
  title: string;
  /** Section heading shown next to the video. */
  heading: string;
  /** One-line supporting copy. */
  description: string;
}

/** Used on every olympiad page except Physics Olympiad. */
export const OLYMPIAD_SHORT: ShortVideo = {
  id: '4pr80wzXN0Q',
  title: 'IMO? NSO? IOQM? AMC? Confused about which Olympiad is right for your child? - BuzzyBrains Academy',
  heading: 'Confused about which Olympiad is right for your child?',
  description: 'Watch our short guide to IMO, NSO, IOQM and AMC, and how to choose the right path.',
};

/** Used on the Maths Olympiad page (/olympiad-math). */
export const MATHS_SHORT: ShortVideo = {
  id: 'ujkqAMoa2XE',
  title: 'Stop Running Between Tuition Classes! All-in-One Coaching by IITians - BuzzyBrains Academy',
  heading: 'Stop running between tuition classes!',
  description: 'Watch how all-in-one coaching by IITians works at BuzzyBrains Academy.',
};

/** Used on the Physics Olympiad pages. */
export const PHYSICS_SHORT: ShortVideo = {
  id: 'HPMJ6PxwD2s',
  title: 'One Olympiad. Multiple subjects. One expert team. - BuzzyBrains Academy',
  heading: 'One Olympiad. Multiple subjects. One expert team.',
  description: 'Watch how BuzzyBrains Academy supports students across olympiad subjects, including Physics.',
};
