/**
 * Everything being built under Ship Ideas.
 *
 * To add a product, append one entry to `products` below. Nothing else in the
 * site needs to change — the listing, the heading order and the numbering all
 * derive from this array.
 */

/** Statuses a product can carry. Add a new one here before using it. */
export type ProductStatus = 'In development' | 'Available';

/** Optional badges shown next to the status, e.g. licensing. */
export type ProductTag = 'Open source';

export interface ProductLink {
  readonly label: string;
  readonly href: string;
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
   */
  readonly body: readonly string[];
  readonly status: ProductStatus;
  readonly tags?: readonly ProductTag[];
  /** Omit entirely when there is nothing real to link to yet. */
  readonly links?: readonly ProductLink[];
}

export const products: readonly Product[] = [
  {
    id: 'buddy',
    name: 'Buddy',
    summary: 'A household organizer that lives in the chat app you already use.',
    body: [
      'Send Buddy a voice note on the walk home, a photo of a school letter, a PDF from the plumber, or just type — in a normal chat, the way you would message anyone else. It turns them into lists, reminders and memories the household can come back to later.',
      'The scope is deliberate. Buddy organizes a household, and declines the things outside that boundary rather than trying to be useful at everything. It is in testing today, on WhatsApp first, with Telegram and iMessage to follow. Not open to the public yet.',
    ],
    status: 'In development',
  },
  {
    id: 'mdp',
    name: 'mdp',
    summary: 'A reader-first markdown viewer for the terminal.',
    body: [
      'A single Rust binary that renders markdown properly in a terminal, plus a thin Neovim plugin that makes it the default way to read .md files. Open a document and you get the rendered view; one keystroke swaps to the raw editable buffer at the same line, and one takes you back.',
      'It is built around fidelity on real documents, a cold open under 100ms, and refreshing itself while files change underneath you.',
    ],
    status: 'In development',
    tags: ['Open source'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/basitanwer/mdp' }],
  },
];
