# shpideas.com

The website for Ship Ideas — a single static page: who Basit Anwer is, what is
being built under the studio, and how to get in touch.

Astro + Tailwind CSS, statically generated. No client-side JavaScript, no web
fonts, no analytics, no cookies.

## Local development

```sh
npm install
npm run dev        # http://localhost:4321
```

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve `dist/` locally, as deployed |
| `npm run check` | TypeScript + Astro diagnostics |

Requires Node 22.12 or newer.

## Deploying

Static output, no server, no environment variables.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 22.12+

That is all Cloudflare Pages, Vercel and Netlify need. On Cloudflare Pages,
choose "None" as the framework preset and set the two values above.

`sitemap-index.xml` and `robots.txt` both reference `https://shpideas.com`.
If the site is ever served from another origin, change `site.url` in
`src/data/site.ts` — it feeds `astro.config.ts`, the sitemap, the canonical
link and the Open Graph URLs.

## Where the content lives

No copy is hardcoded in markup. Everything editable is in `src/data/`:

| File | Holds |
| --- | --- |
| `src/data/site.ts` | Name, URL, page title, meta description, contact links |
| `src/data/products.ts` | The product listing |
| `src/data/copy.ts` | Hero, About and Contact prose |

### Adding a product

Append one entry to the `products` array in `src/data/products.ts`:

```ts
{
  id: 'thing',                       // used for the DOM id and anchor
  name: 'Thing',
  summary: 'One line, no marketing verbs.',
  body: ['First paragraph.', 'Second paragraph.'],
  status: 'In development',          // see ProductStatus
  tags: ['Open source'],             // optional
  links: [{ label: 'Source on GitHub', href: 'https://…' }], // optional
}
```

Nothing else changes — the listing, heading order and section numbering all
derive from that array. To introduce a status the type does not allow yet, add
it to the `ProductStatus` union in the same file first.

## Design tokens

Every colour, font stack and type size lives in one place:
`src/styles/global.css`.

Colours are declared twice — once for light, once inside the
`prefers-color-scheme: dark` block — and exposed to Tailwind via `@theme inline`.
That is what makes `text-ink`, `bg-bg` and friends follow the system theme with
no JavaScript and no theme toggle. Tailwind v4 has no `tailwind.config.js`; this
CSS file *is* the config.

The accent (`--c-accent`) is used only for links and status markers. Both themes
clear WCAG AA on text contrast; the ratios are noted in comments next to each
value.

## Room to grow

- **A `/writing` section** — add `src/pages/writing/index.astro` using
  `BaseLayout`, which already takes `title`, `description` and `ogImage` props.
  Nothing in the layout is specific to the home page. For posts themselves, an
  Astro content collection under `src/content/` is the natural next step.
- **Per-product pages** — `ProductEntry.astro` renders the product name as a
  heading; making it a link to `/products/[id]` is a local change to that one
  component.

## Regenerating the social card

`public/og.png` (1200×630) and `public/apple-touch-icon.png` are checked in.
They were rendered from HTML in a headless browser rather than by hand, so if
the wordmark or palette changes, re-render them at those exact dimensions rather
than scaling the existing files.
