/**
 * Prose that is not a product entry: the hero, the About section and the
 * standing line above the contact links.
 *
 * Each string in a `body` array renders as one paragraph.
 */

export interface Section {
  /** Anchor id, also used by the skip link and the section heading. */
  readonly id: string;
  /** Section heading text. */
  readonly heading: string;
  readonly body: readonly string[];
}

export const hero = {
  /** Sits directly under the wordmark. Deliberately one sentence. */
  lede: 'A one-person software studio.',
  /**
   * The ten-second job: whose studio this is. Rendered as a separate line so
   * `author` can carry emphasis without the surrounding text being one blob.
   */
  intro: {
    before: "I'm ",
    author: 'Basit Anwer',
    after: ' — I design and build everything listed below.',
  },
} as const;

/**
 * REVIEW: draft copy, written to be replaced by Basit.
 *
 * Deliberately free of unverifiable claims — no years of experience, no former
 * employers, no numbers. If you add any, they should be things you can point at.
 */
export const about: Section = {
  id: 'about',
  heading: 'About',
  body: [
    "I'm Basit Anwer. I build software on my own, end to end — the idea, the thing itself, and the unglamorous part where it has to keep working for people who did not build it.",
    'I like tools with a clear edge to them. Something that does one thing and says no to the rest is easier to trust than something that tries to do everything, so a good deal of the work is deciding what to leave out. I care about software that starts fast, stays out of the way, and does not need to be learned twice.',
    'Ship Ideas is the name I ship under.',
  ],
};

export const building: Pick<Section, 'id' | 'heading'> = {
  id: 'building',
  heading: "What we're building",
};

export const contactSection: Section = {
  id: 'contact',
  heading: 'Contact',
  body: ['Email is the best way to reach me.'],
};
