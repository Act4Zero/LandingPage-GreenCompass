# Green Compass

The Green Compass marketing site presents practical sustainability guidance and the product roadmap with an editorial eco-tech visual system.

## Local development

Install dependencies and start the Pages Router application:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and configure only the integrations needed in your environment. Newsletter and contact provider credentials are server-only:

```text
KIT_FORM_ID=
KIT_API_KEY=
SHEETS_ENDPOINT=
SHEETS_TAB_ID=
```

Public analytics and chat identifiers remain optional. Do not prefix provider secrets with `NEXT_PUBLIC_`.

## Quality checks

```bash
pnpm lint
pnpm test
pnpm build
```

The production build runs `next-sitemap` after Next.js compilation.

## Stack

- Next.js Pages Router and React
- Tailwind CSS
- Vitest and React Testing Library
- Kit newsletter integration via `/api/newsletter`
- Google Sheets-compatible contact integration via `/api/contact`
