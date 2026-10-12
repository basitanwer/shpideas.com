/**
 * Prose that is not a product entry: the hero, the section headings, how the
 * software is built, the company section and the standing line above the
 * contact links.
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

/** One line of the company's particulars: a label and what it is. */
export interface Fact {
  readonly label: string;
  readonly value: string;
}

export const hero = {
  /** Sits directly under the wordmark. Deliberately one sentence. */
  lede: 'An independent software company.',
  /** The ten-second job: what the company makes. Rendered as its own line. */
  intro: 'We design, build and maintain our own focused software products. The first, Tock, is approaching launch.',
} as const;

export const firstProduct: Pick<Section, 'id' | 'heading'> = {
  id: 'tock',
  heading: 'Our first product',
};

export const otherProjects: Pick<Section, 'id' | 'heading'> = {
  id: 'projects',
  heading: 'Other projects',
};

/**
 * How Claude is used. Two different things, kept apart on purpose: Claude as a
 * development tool (everything here is built that way) and Claude as a part of
 * a running product (Buddy only; `@ai-sdk/anthropic` in the buddy repository).
 * Tock has no model in it: the tock repository's only dependencies are GRDB
 * and swift-argument-parser.
 *
 * Ship Ideas is a customer of Anthropic and nothing more. Do not add wording
 * that suggests a partnership or an endorsement.
 */
export const howWeBuild: Section = {
  id: 'how-we-build',
  heading: 'How we build',
  body: [
    'Ship Ideas is one person’s company, and Claude, Anthropic’s AI model, is part of how the work gets done. We use it every day, mostly through Claude Code, to plan changes, write and review code, write tests and check documentation against what the code really does. What gets built is decided by a person, and so is what ships.',
    'Using Claude to build software is not the same as putting it inside the software. Tock has no AI model in it; it only lets a tool such as Claude Code write down the time of its own sessions. Buddy is the one product here that uses a model while it runs: Claude, through Anthropic’s API, is how it reads the messages a household sends.',
  ],
};

/**
 * Deliberately free of unverifiable claims — no team, no customers, no offices,
 * no numbers. If you add any, they should be things you can point at.
 */
export const about: Section = {
  id: 'company',
  heading: 'Company',
  body: [
    'Ship Ideas designs, develops, and maintains software with a clear purpose. Our approach is simple: solve a specific problem well, keep the experience straightforward, and build products people can depend on.',
    'Software that does one thing and says no to the rest is easier to trust than software that tries to do everything, so a good deal of the work is deciding what to leave out. The aim is software that starts fast, stays out of the way, and does not need to be learned twice.',
    'Ship Ideas is the name SHP Ideas, LLC works under. The company is owned and run by its founder, Basit Anwer, and pays its own way: it has taken no outside funding.',
  ],
};

/** The particulars, set as a short list under the Company prose. */
export const companyFacts: readonly Fact[] = [
  { label: 'Legal name', value: 'SHP Ideas, LLC' },
  { label: 'Formed', value: '2026, in Delaware, USA' },
  { label: 'Founder', value: 'Basit Anwer' },
  { label: 'Funding', value: 'Bootstrapped' },
];

export const contactSection: Section = {
  id: 'contact',
  heading: 'Contact',
  body: ['Email is the best way to get in touch.'],
};
