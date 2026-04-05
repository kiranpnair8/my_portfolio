# Kiran Nair | Academic Portfolio

A minimalist, text-focused academic portfolio website for **Kiran Nair**, PhD student in Data Science and Engineering at the University of South Dakota.

## Features

- Clean academic design — no flashy effects, cards, or tiles
- Dark/light mode with system preference detection
- Responsive layout (mobile, tablet, desktop)
- Bio with hyperlinked institutions and advisors
- Publications listed latest-first with status indicators
- Downloadable CV
- Active section highlighting in navigation

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Minimal animations (menu, theme toggle) |
| React Icons | Icon library |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/kiranpnair8/kiran-portfolio.git
cd kiran-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Output is in the `dist/` directory.

## Project Structure

```
src/
├── data/cv.ts              # All website content (single source of truth)
├── components/
│   ├── layout/             # Navbar, Footer, ThemeToggle
│   ├── sections/           # Hero, About, Publications, Research,
│   │                       # Experience, Awards, Skills, Contact
│   └── ui/                 # Reusable components (headings, publication entries, timeline)
├── context/                # Dark/light theme context
├── hooks/                  # Active section tracking
├── App.tsx                 # Main app composition
└── index.css               # Tailwind directives & global styles

public/
├── profile.jpg             # Headshot photo
├── KnairCV.pdf             # Downloadable CV
└── favicon.svg             # Blue "KN" favicon
```

## Updating Content

All website content lives in **`src/data/cv.ts`**. Edit this single file to update:

- Personal info, social links, and tagline
- Bio paragraphs (supports hyperlinks via `{Link Text}` syntax)
- Publications, research positions, and presentations
- Teaching and industry experience
- Awards, skills, and certifications

### Adding a hyperlink in the bio

```ts
{
  text: 'I work at {University of South Dakota} with {KC Santosh}.',
  links: {
    'University of South Dakota': 'https://www.usd.edu',
    'KC Santosh': 'https://kc-santosh.org',
  },
}
```

### Updating the photo or CV

Replace `public/profile.jpg` or `public/KnairCV.pdf` with new files (keep the same filenames).

## Sections

| Section | Description |
|---|---|
| Hero | Name, tagline, research areas, social links, CV download |
| About | Bio with hyperlinks (left) + photo (right), then education |
| Publications | Papers with status (Published, In Revision, In Preparation) |
| Research | Lab positions with bullet points + research interests |
| Experience | Teaching, industry, invited talks, selected presentations |
| Awards | Honors and scholarships |
| Skills | Categorized skills + certifications |
| Contact | Email, GitHub, LinkedIn, Google Scholar, location |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — zero configuration needed

### GitHub Pages

1. Set `base: '/kiran-portfolio/'` in `vite.config.ts` (if using a project repo)
2. Run `npm run build`
3. Deploy the `dist/` folder

## License

This project is for personal use by Kiran Nair.
