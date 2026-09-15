# CHIKI TRAVEL Sanity Studio

Sanity Studio for managing CHIKI TRAVEL content without editing the Next.js frontend directly.

## Setup

Sanity's current Studio tooling requires Node.js 22.12 or later.

1. Copy `.env.example` to `.env.local`.
2. Create/select the Sanity project and dataset.
3. Set `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.
4. Install dependencies:

```bash
npm install
```

5. Start the Studio:

```bash
npm run dev
```

The local Studio runs at `http://localhost:3333` by default.

## Content types

- Site Settings
- Routes
- Tour Packages
- Fleet
- Destinations
- Promotions
- Testimonials
- FAQ
- Gallery

The Next.js site does not depend on Studio content yet, so an empty Sanity dataset will not block the existing frontend.
