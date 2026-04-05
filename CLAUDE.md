# Kiran Nair - Academic Portfolio Website

## Project Overview
Minimalist academic portfolio website for **Kiran Nair**, a PhD student in Data Science and Engineering at the University of South Dakota. Single-page React app with a clean, text-focused design (no flashy effects, cards, or tiles). Inspired by academic sites like George Stoica's.

## Tech Stack
- **React 18 + TypeScript** (Vite)
- **Tailwind CSS v3** (PostCSS, NOT v4 — v4 has issues with the oxide engine)
- **Framer Motion** — used minimally (navbar mobile menu animation, theme toggle)
- **React Icons** (`react-icons/fi` for Feather icons, `react-icons/si` for brand icons)

## How to Run
```bash
npm run dev    # Dev server on port 5173
npm run build  # Production build to dist/
```

## File Structure

```
src/
├── main.tsx                      # Entry point, wraps App in ThemeProvider
├── App.tsx                       # Composes Navbar + all sections + Footer in order
├── index.css                     # Tailwind directives + global styles
│
├── data/
│   └── cv.ts                     # *** SINGLE SOURCE OF TRUTH FOR ALL CONTENT ***
│                                 #     Edit THIS file to update any website content.
│                                 #     All sections read from this file.
│
├── context/
│   └── ThemeContext.tsx           # Dark/light mode context + useTheme hook
│
├── hooks/
│   ├── useActiveSection.ts       # IntersectionObserver for navbar active link highlighting
│   ├── useScrollDirection.ts     # Detects scroll up/down (available but not actively used)
│   └── useAnimateInView.ts       # Custom IntersectionObserver hook (available but not actively used)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Fixed top nav with border-bottom, mobile hamburger menu
│   │   ├── Footer.tsx            # Copyright + social icon links (GitHub, Scholar, LinkedIn, Email)
│   │   ├── ScrollProgress.tsx    # (Unused — scroll progress bar, kept for future use)
│   │   └── ThemeToggle.tsx       # Sun/moon icon button for dark/light mode
│   │
│   ├── sections/                 # Each section = one page section, separated by border-top
│   │   ├── Hero.tsx              # Name header, tagline, research areas, social icons, CV link
│   │   ├── About.tsx             # Bio text (left) + photo (right) side-by-side, then education
│   │   ├── Publications.tsx      # Published papers + in-preparation, separated by bottom borders
│   │   ├── Research.tsx          # Research positions as plain text + research interests (dot-separated)
│   │   ├── Experience.tsx        # Teaching, industry, invited talks, presentations (two-column)
│   │   ├── Awards.tsx            # Awards as plain text entries
│   │   ├── Skills.tsx            # Skills as dot-separated plain text by category
│   │   └── Contact.tsx           # Contact info as label: link pairs
│   │
│   └── ui/                       # Reusable presentational components
│       ├── AnimatedSection.tsx   # Simple <section> wrapper (no animation currently)
│       ├── SectionHeading.tsx    # Section title + optional subtitle, left-aligned
│       ├── PublicationCard.tsx   # Single publication: authors, title, venue, year, status
│       ├── TimelineItem.tsx      # Simple entry with title, subtitle, date
│       └── SkillBadge.tsx        # (Unused — pill badge, kept for future use)
│
public/
├── KnairCV.pdf                   # Downloadable CV (linked from Hero "CV" link)
├── profile.jpg                   # Kiran's headshot photo (shown in About section)
└── favicon.svg                   # Blue "KN" favicon
```

## How to Update Content

### Adding/editing publications, awards, experience, etc.
Edit **`src/data/cv.ts`** — this is the ONLY file you need to touch for content changes. All components read from this file. Key sections:

- `personal` — Name, email, GitHub username, LinkedIn URL, Google Scholar URL, tagline, profile image path
- `bioParagraphs` — Bio text with `{Link Text}` syntax for hyperlinks (matched to `links` object)
- `education` — Education entries (shown in About section)
- `publications` — Papers with status: `'published'`, `'in-revision'`, `'in-preparation'`
- `research` — Research positions with bullet points
- `teaching` — Teaching positions
- `experience` — Industry experience
- `talks` — Invited talks
- `presentations` — Conference presentations (posters/oral)
- `awards` — Awards and honors
- `skills` — Categorized skill arrays (rendered as dot-separated text)
- `certifications` — Certification strings (rendered as dot-separated text)
- `researchInterests` — Keywords (rendered as dot-separated text)

### Updating the bio with hyperlinks
In `bioParagraphs`, use `{text}` syntax to mark links. The `links` object maps the text to URLs:
```ts
{
  text: 'I work at {University of South Dakota} with {KC Santosh}.',
  links: {
    'University of South Dakota': 'https://www.usd.edu',
    'KC Santosh': 'https://kc-santosh.org',
  },
}
```

### Updating the hero subtitle/research areas
The tagline is in `personal.tagline` in cv.ts. The research area keywords below it are hardcoded in `Hero.tsx` (line with "Brain-Inspired Computing · Energy-Efficient AI · Security & Privacy in AI").

### Updating profile photo
Replace `public/profile.jpg` with a new image. Keep the filename the same, or update `personal.profileImage` in `cv.ts`.

### Updating the CV PDF
Replace `public/KnairCV.pdf` with the new version.

## Design Philosophy
This is a **minimalist academic site** — no fancy cards, colored tiles, gradient effects, or heavy animations. The design follows these principles:
- **Plain text over styled components** — skills, research interests, and contact info are plain text, not badges or cards
- **Blue links only** — hyperlinks use `text-blue-600` (light) / `text-blue-400` (dark), no other accent colors
- **Border separators** — sections separated by subtle `border-t border-gray-100`
- **Publication status** — shown as plain gray italic text, not colored badges
- **Side-by-side layout** — bio text on left, photo on right (inspired by George Stoica's site)
- **No hero page** — simple header with name, tagline, research areas, and social links

### Colors
- **Links:** Blue (`text-blue-600` / `text-blue-400` in dark mode)
- **Light mode:** White bg, dark gray text
- **Dark mode:** Near-black bg (`gray-950`), light gray text
- **Accent color** in Tailwind config is blue (used in `accent-*` classes) — maps to Tailwind's blue palette
- Toggle via `dark` class on `<html>` element (Tailwind `darkMode: 'class'`)

### Fonts
- **Headings:** Playfair Display (serif) — loaded from Google Fonts
- **Body:** Inter (sans-serif) — loaded from Google Fonts

### Layout
- Header: Name (bold serif) → tagline → research areas (lighter) → social icons + CV link
- About: Bio paragraphs (left) + photo (right) → Education below
- All other sections: Left-aligned heading → plain text content
- Two-column layout for Experience (teaching/industry on left, talks on right)

### Section Order (in App.tsx)
1. Hero → 2. About → 3. Publications → 4. Research → 5. Experience → 6. Awards → 7. Skills → 8. Contact

## Important Notes
- **Do NOT upgrade to Tailwind v4** — it has compatibility issues. Stick with v3 + PostCSS.
- **Do NOT add colored tiles, cards, or badges** — the owner wants a plain academic style.
- Publications are ordered **latest first** (2026 before 2025).
- "Kiran Nair" is auto-bolded in publication author lists (see `PublicationCard.tsx` `highlightAuthor` function).
- The year is highlighted in blue in publication venue lines.
- Dark mode preference persists in `localStorage`.
- The navbar tracks the active section via `IntersectionObserver` (`useActiveSection` hook).
- The navbar shows "Kiran Nair" (full name) on the left, not initials.

## Deployment
Build with `npm run build`, deploy `dist/` folder to:
- **Vercel** (zero-config, auto-detects Vite)
- **GitHub Pages** (set `base` in `vite.config.ts` if using a repo subpath)
