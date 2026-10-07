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
  lede: 'An independent software company.',
  /** The ten-second job: what the company makes. Rendered as its own line. */
  intro: 'Building focused applications for everyday life and work.',
} as const;

/**
 * Rewritten in the company's voice; not yet reviewed by Basit.
 *
 * Deliberately free of unverifiable claims — no team, no customers, no offices,
 * no numbers. If you add any, they should be things you can point at.
 */
export const about: Section = {
  id: 'about',
  heading: 'About',
  body: [
    'Ship Ideas designs, develops, and maintains software with a clear purpose. Our approach is simple: solve a specific problem well, keep the experience straightforward, and build products people can depend on.',
    'Software that does one thing and says no to the rest is easier to trust than software that tries to do everything, so a good deal of the work is deciding what to leave out. The aim is software that starts fast, stays out of the way, and does not need to be learned twice.',
    'Founded by Basit Anwer, the company develops its own applications for individuals, households, and developers.',
  ],
};

export const building: Pick<Section, 'id' | 'heading'> = {
  id: 'building',
  heading: "What we're building",
};

export const contactSection: Section = {
  id: 'contact',
  heading: 'Contact',
  body: ['Email is the best way to get in touch.'],
};
