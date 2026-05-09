# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About this project

Gai Savoir is a French-language platform for intellectual, artistic and civic content (https://www.gai-savoir.fr). This is the Next.js 13 App Router frontend. Content is managed via a Strapi CMS backend (separate repo: `gai-savoir-strapi-api`).

## Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:3000
npm run build      # production build
npm run start      # start production server
npm run lint       # ESLint
```

There is no test suite.

## Environment setup

Copy `.env.example` to `.env.development`. The default values for `NEXT_PUBLIC_STRAPI_API_URL` and `NEXT_PUBLIC_WEBSITE_URL` work locally. `CLIENT_PREVIEW_SECRET` and `REVALIDATE_SECRET` must match the values configured in the Strapi backend.

## Architecture

### Data layer: `services/strapi.ts`

Single integration point for all Strapi API calls. Two Strapi collections are consumed:
- **`ideas`** — written articles (the internal name for articles in the API)
- **`audiovisual-productions`** — video/audio content

Both share the same shape: `{ id, attributes: { title, slug, excerpt, author, published, card_image, subcategory, content_components } }`. Types are in `types/Idea.ts` and `types/AudiovisualProduction.ts`.

Events are **not** fetched from Strapi — they are hardcoded in `data/event.ts`.

### Content taxonomy

Two top-level categories, each with subcategories mapped in `utils/constants.ts`:

| Route prefix | Strapi collection | Subcategories |
|---|---|---|
| `/articles` | `ideas` | actualites, culture, idees, numerique, societe, sommes-nous-tous-fous |
| `/production-audiovisuelle` | `audiovisual-productions` | interviews, portraits-de-francais, contributions-externes |

`SUBCATEGORIES` holds the Strapi filter names; `FORMATTED_SUBCATEGORY_NAME` holds the URL slugs. Always use these constants when building URLs or API filter parameters.

### Rendering strategy

- **Listing pages** (`/articles`, `/articles/culture`, etc.) — async Server Components that call Strapi at request time.
- **Detail pages** (`/articles/culture/[slug]`) — statically pre-rendered via `generateStaticParams`, which fetches all slugs from Strapi at build time. They support **Draft Mode**: `draftMode()` is checked at request time to optionally fetch unpublished content.
- The homepage fetches both `ideas` and `audiovisual-productions` in parallel with `Promise.all`.

### Article content rendering

Article bodies use Strapi **dynamic zones** (`content_components` array). Each component has a `__component` discriminator:
- `content.text` — rendered with `react-markdown`
- `content.image` — rendered with `next/image`
- `content.carousel` — rendered with Swiper

The rendering switch is in `components/common/Article.tsx`. The same pattern applies to `AudiovisualProduction.tsx`.

### CMS integration routes

- **`/api/preview`** — enables Next.js Draft Mode so editors can preview unpublished Strapi content. Strapi calls this with `?secret=&post-slug=&category-slug=&subcategory-slug=`.
- **`/api/revalidate`** — triggers `revalidatePath()` for on-demand ISR when Strapi publishes or updates content. Strapi calls this with `?secret=&slug=&category=&subcategory=`.

### Device detection

`DeviceContext` (`context/DeviceContext.tsx`) provides `isMobile / isTablet / isDesktop` booleans derived from `useMediaQuery`. It wraps the whole app and is the canonical way to branch on viewport in client components. Breakpoints are defined in `utils/breakpoints.ts`.

### Styling

SCSS Modules for component styles, global tokens in `styles/variables.scss`, responsive mixins in `styles/mixins.scss`. Custom fonts (Akrobat, Vercetti) are loaded via `utils/fontModule.ts`.
