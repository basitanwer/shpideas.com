/**
 * Everything being built under Ship Ideas.
 *
 * `lead` is the product closest to release and gets its own section at the top
 * of the page. `projects` is everything else. To add a project, append one
 * entry to `projects` below; the listing derives from the array.
 */
import type { ImageMetadata } from 'astro';

import tockReports from '../assets/tock-reports.png';
import mdpReader from '../assets/mdp-reader.png';

/** Statuses a product can carry. Add a new one here before using it. */
export type ProductStatus = 'Approaching launch' | 'In testing' | 'In development' | 'Available';

/** Optional badges shown next to the status, e.g. licensing. */
export type ProductTag = 'Open source';

export interface ProductLink {
  readonly label: string;
  readonly href: string;
}

/**
 * A picture of the product itself. Only real captures go here: a screenshot of
 * the running software, never a mockup.
 */
export interface ProductImage {
  readonly src: ImageMetadata;
  readonly alt: string;
  /** Says what the picture is and where its data came from. */
  readonly caption: string;
}

export interface Product {
  /** Stable key. Used for the DOM id and the section anchor. */
  readonly id: string;
  /** Product name as written, including its own capitalisation. */
  readonly name: string;
  /** One line under the name. No marketing verbs. */
  readonly summary: string;
  /**
   * Body copy. Each string renders as its own paragraph.
   *
   * Buddy's copy follows a framing rule set by the product itself: it is a
   * household organizer, never "an AI assistant" or "a bot". Keep it that way.
   * That it runs on Claude models is said once, in `howWeBuild` (copy.ts).
   */
  readonly body: readonly string[];
  readonly status: ProductStatus;
  readonly tags?: readonly ProductTag[];
  /** Omit entirely when there is nothing real to link to yet. */
  readonly links?: readonly ProductLink[];
  readonly image?: ProductImage;
}

/**
 * Every claim here is checked against the tock repository: concurrent timers
 * (ADR-0002), the billing types (BillingType.swift), the CLI (ADR-0005) and
 * agent time (ADR-0006). Claude Code is the one agent that reports today.
 */
export const lead: Product = {
  id: 'tock',
  name: 'Tock',
  summary: 'A menu bar time tracker for the Mac, for people who work for several clients.',
  body: [
    'Tock sits in the macOS menu bar and keeps track of what is being worked on right now, how long it has taken today, and what that time is worth. Several timers can run at once, and each project carries its own billing rule — hourly, capped, prepaid, a retainer or a fixed fee — so a report for a client adds up without a spreadsheet.',
    'A command line tool works on the same data as the app, and Claude Code can record the time of its own sessions, kept apart from yours unless you choose to count it.',
    'Tock is our first product. It is in daily use here and is being prepared for release; it is not available to download yet.',
  ],
  status: 'Approaching launch',
  links: [{ label: 'usetock.com', href: 'https://usetock.com' }],
  image: {
    src: tockReports,
    alt: 'Tock’s Reports window: 2 hours 10 minutes tracked today across three companies, a timeline with two timers running, and a table of time entries with the amount each one earned.',
    caption: 'Tock’s Reports window, running on the app’s sample data.',
  },
};

export const projects: readonly Product[] = [
  {
    id: 'buddy',
    name: 'Buddy',
    summary: 'A household organizer that lives in the chat app you already use.',
    body: [
      'Send Buddy a voice note on the walk home, a photo of a school letter, a PDF from the plumber, or just type — in a normal chat, the way you would message anyone else. It turns them into lists, reminders and memories the household can come back to later.',
      'The scope is deliberate. Buddy organizes a household, and declines the things outside that boundary rather than trying to be useful at everything. It is in private testing and not open to the public yet.',
    ],
    status: 'In testing',
  },
  {
    id: 'mdp',
    name: 'mdp',
    summary: 'A reader-first markdown viewer for the terminal.',
    body: [
      'A single Rust binary that renders markdown properly in a terminal, plus a thin Neovim plugin that makes it the default way to read .md files. Open a document and you get the rendered view; one keystroke swaps to the raw editable buffer at the same line, and one takes you back.',
      'It is built around fidelity on real documents, a cold open under 100ms, and refreshing itself while files change underneath you. The source is public and builds today; there is no packaged release yet.',
    ],
    status: 'In development',
    tags: ['Open source'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/basitanwer/mdp' }],
    image: {
      src: mdpReader,
      alt: 'mdp in a terminal, showing its own README rendered with highlighted code blocks, and an outline of the headings open on the right.',
      caption: 'mdp reading its own README, with the outline open.',
    },
  },
];
