/**
 * Site-wide identity, metadata and contact details.
 *
 * This and `products.ts` are the only files holding copy that changes often.
 * Nothing here should be duplicated into markup.
 */

export interface ContactLink {
  /** Visible label, e.g. "Email" or "GitHub". */
  readonly label: string;
  /** What the user sees as the link text — an address, a handle, a domain. */
  readonly value: string;
  /** Fully-qualified href. Use a `TODO:` prefix for anything not yet confirmed. */
  readonly href: string;
  /** Set for links that leave the site, so the markup can add rel/target hints. */
  readonly external?: boolean;
}

export const site = {
  /** Brand name, used in the wordmark and page title. */
  name: 'Ship Ideas',
  /** Canonical origin. Drives sitemap.xml and absolute Open Graph URLs. */
  url: 'https://shpideas.com',
  /** Owner. Referenced in the hero, the About section and structured metadata. */
  author: 'Basit Anwer',
  /** <title> for the home page. */
  title: 'Ship Ideas — the software studio of Basit Anwer',
  /** <meta name="description">. Kept under ~160 characters. */
  description:
    'Ship Ideas is the one-person software studio of Basit Anwer. Currently building Buddy, a household organizer in WhatsApp, and mdp, a markdown viewer for the terminal.',
  /** Open Graph / Twitter card image, resolved against `url` at build time. */
  ogImage: '/og.png',
  /** Alt text for the card image. */
  ogImageAlt: 'Ship Ideas — the software studio of Basit Anwer',
} as const;

export const contact: readonly ContactLink[] = [
  {
    label: 'Email',
    value: 'hello@shpideas.com',
    href: 'mailto:hello@shpideas.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/basitanwer',
    href: 'https://github.com/basitanwer',
    external: true,
  },
];
