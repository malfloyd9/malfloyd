# Personal Site Build Plan

> Jeff Floyd | Data Center Hardware Planner | Portfolio + Lab + Resume
> Stack: React 18 + Vite + Tailwind CSS + React Router
> Design: Dark, material-driven workspace. Calm, professional, intentional.

---

## Design Tokens

Paste these into `src/index.css` as CSS custom properties. Every component references these, never raw hex values.

```css
:root {
  /* Base Layer (Foundation) */
  --color-base: #1A1A1A;
  --color-surface-1: #22231F;
  --color-surface-2: #2C2F29;

  /* Text */
  --color-text-primary: #F3EEE4;
  --color-text-secondary: #DDD6C9;

  /* Natural Accent (Dried Thyme) */
  --color-accent-green: #6F7B63;
  --color-accent-green-dark: #59644F;
  --color-accent-green-light: #87927B;

  /* Material Layer (Oak Wood) */
  --color-oak: #9A7451;
  --color-oak-dark: #7B5A3D;
  --color-oak-light: #B8926B;

  /* Interaction Accent (Champagne Bronze) */
  --color-bronze: #C2A06D;
  --color-bronze-dark: #9E7F52;
  --color-bronze-light: #D8BC8C;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-default: 250ms ease;

  /* Elevation (layered surfaces, never pure black behind content) */
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-elevated: 0 4px 16px rgba(0, 0, 0, 0.4);

  /* Border */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

### Tailwind Extension

In `tailwind.config.js`, extend the theme to use these tokens:

```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        'surface-1': 'var(--color-surface-1)',
        'surface-2': 'var(--color-surface-2)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        thyme: {
          DEFAULT: 'var(--color-accent-green)',
          dark: 'var(--color-accent-green-dark)',
          light: 'var(--color-accent-green-light)',
        },
        oak: {
          DEFAULT: 'var(--color-oak)',
          dark: 'var(--color-oak-dark)',
          light: 'var(--color-oak-light)',
        },
        bronze: {
          DEFAULT: 'var(--color-bronze)',
          dark: 'var(--color-bronze-dark)',
          light: 'var(--color-bronze-light)',
        },
      },
    },
  },
  plugins: [],
}
```

---

## File Structure

```
src/
  main.jsx                  # React entry point
  App.jsx                   # Router + layout shell
  index.css                 # Design tokens + base styles + Tailwind directives

  components/
    Layout.jsx              # Top nav + page wrapper (shared across all routes)
    Nav.jsx                 # Top navigation bar
    Hero.jsx                # Landing hero section
    ProjectCard.jsx         # Reusable card for Systems, Workshop, Lab
    ProjectDetail.jsx       # Expanded project view (own route)
    StatusBadge.jsx         # Active / In Progress / Archived / Experimental
    ResumeTimeline.jsx      # Clickable experience timeline
    SkillMap.jsx            # Grouped capability badges
    NowSection.jsx          # "Current State" living section
    Footer.jsx              # Minimal footer

  pages/
    Home.jsx                # Hero + optional featured projects
    Systems.jsx             # Grid of Systems project cards
    Workshop.jsx            # Grid of Workshop project cards
    Lab.jsx                 # Grid of Lab project cards
    Resume.jsx              # Interactive resume dashboard
    Project.jsx             # Single project detail page (dynamic route)

  data/
    projects.js             # All project content lives here (see below)
    resume.js               # Work history, skills, education
    now.js                  # Current state content
```

---

## Routing

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Systems from './pages/Systems'
import Workshop from './pages/Workshop'
import Lab from './pages/Lab'
import Resume from './pages/Resume'
import Project from './pages/Project'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="systems" element={<Systems />} />
          <Route path="systems/:slug" element={<Project />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="workshop/:slug" element={<Project />} />
          <Route path="lab" element={<Lab />} />
          <Route path="lab/:slug" element={<Project />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

Each project gets its own URL (`/systems/dc-inventory`, `/lab/night-studio`).
No expand-on-click complexity. Clean routes. Back button works. Shareable links.

---

## Project Data

This is the content layer. Each project follows the template from your planning docs.
All content lives in one file so it's easy to update.

**IMPORTANT: Fill in every `"TODO:"` field below with your own words before building.
Cursor will use these entries to populate the actual site. If a field says TODO, the site
will render with placeholder text. Write 2-3 sentences per field. Be direct. Focus on
what improved, not just what you built.**

```js
// src/data/projects.js

export const projects = [

  // ============================================================
  // SYSTEMS (Professional credibility, real-world problem solving)
  // ============================================================

  {
    slug: 'dc-inventory',
    title: 'Data Center Inventory Manager',
    category: 'systems',
    status: 'active',                    // active | in-progress | archived | experimental
    problem: 'TODO: What tracking gap or pain point existed before this? What was being done manually or getting missed?',
    purpose: 'TODO: Why did you build this? What outcome were you after?',
    solution: 'TODO: What did you actually build? Be specific: what does it do, how does someone use it?',
    tools: ['Python'],                   // Add frameworks, libraries, platforms used
    outcome: 'TODO: What improved? Reduced manual effort? Better visibility? Fewer errors? Estimates are fine if you do not have exact numbers.',
    image: null,                         // Optional: path to screenshot or demo image in /public/images/
    link: null,                          // Optional: link to live demo or GitHub repo
    featured: true,                      // Show on home page
  },

  {
    slug: 'asset-tracking',
    title: 'TODO: Name this project',
    category: 'systems',
    status: 'active',
    problem: 'TODO: What asset management challenge were you solving? What was falling through the cracks with installs, decommissions, or lifecycle tracking?',
    purpose: 'TODO: Why this tool instead of what already existed?',
    solution: 'TODO: What did you build? Dashboard? Automation? Reporting layer?',
    tools: [],                           // e.g. ['Python', 'Excel/VBA', 'ServiceNow', 'Visio']
    outcome: 'TODO: What changed after this existed? Think: time saved, errors prevented, visibility gained.',
    image: null,
    link: null,
    featured: true,
  },

  {
    slug: 'capacity-planning',
    title: 'TODO: Name this project (or delete this entry if N/A)',
    category: 'systems',
    status: 'active',
    problem: 'TODO: What capacity or planning challenge did this address?',
    purpose: 'TODO: Why was this needed?',
    solution: 'TODO: What did you build?',
    tools: [],
    outcome: 'TODO: What improved?',
    image: null,
    link: null,
    featured: false,
  },

  // ============================================================
  // WORKSHOP (Craftsmanship, hands-on creativity)
  // ============================================================

  {
    slug: 'terrain-builds',
    title: 'D&D Terrain Builds',
    category: 'workshop',
    status: 'active',
    problem: 'TODO: What got you started building terrain? What were you solving for your table?',
    purpose: 'TODO: What do these builds add to the game experience?',
    solution: 'TODO: Describe your builds. Materials, techniques, scale. What have you made?',
    tools: [],                           // e.g. ['XPS Foam', 'Hot Wire Cutter', '3D Printer', 'Acrylic Paint']
    outcome: 'TODO: How do people react? What has this taught you about design and fabrication?',
    image: null,                         // Put your best terrain photo in /public/images/
    link: null,
    featured: true,
  },

  {
    slug: 'realms-keep',
    title: 'Realms Keep',
    category: 'workshop',
    status: 'in-progress',
    problem: 'TODO: What gap in the D&D / TTRPG product space are you filling?',
    purpose: 'TODO: What is Realms Keep and why does it exist?',
    solution: 'TODO: What have you built so far? Products, site, brand.',
    tools: ['Astro'],                    // Add other tools/platforms
    outcome: 'TODO: Where is this headed? What response have you gotten?',
    image: null,
    link: null,
    featured: false,
  },

  {
    slug: 'woodworking',
    title: 'TODO: Name your woodworking section (or delete if not ready)',
    category: 'workshop',
    status: 'active',
    problem: 'TODO: What do you make and why?',
    purpose: 'TODO: What drives the craft?',
    solution: 'TODO: Describe key pieces or projects.',
    tools: [],
    outcome: 'TODO: What has this work taught you or produced?',
    image: null,
    link: null,
    featured: false,
  },

  // ============================================================
  // LAB (Experiments, active exploration, forward thinking)
  // ============================================================

  {
    slug: 'night-studio',
    title: 'Night Studio',
    category: 'lab',
    status: 'active',
    problem: 'TODO: What itch does Night Studio scratch? What existing tools were not cutting it for your workflow?',
    purpose: 'TODO: Why build a personal productivity app from scratch?',
    solution: 'A lo-fi desktop productivity environment with ambient visuals (rain, lava lamp, analog clock) and audio. Built to feel like a calm workspace.',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Howler.js'],
    outcome: 'TODO: Do you actually use it? What have you learned building it? What is next?',
    image: null,
    link: 'https://github.com/malfloyd9/night-studio-v1',
    featured: true,
  },

  {
    slug: 'flizzlr',
    title: 'Flizzlr',
    category: 'lab',
    status: 'experimental',
    problem: 'TODO: What is Flizzlr? What problem or idea sparked it?',
    purpose: 'TODO: What are you exploring with this project?',
    solution: 'TODO: What exists so far?',
    tools: [],
    outcome: 'TODO: Where is this going?',
    image: null,
    link: null,
    featured: false,
  },

]

// Helper to filter by category
export const getProjects = (category) =>
  projects.filter(p => p.category === category)

// Helper to find by slug (used by Project detail page)
export const getProject = (slug) =>
  projects.find(p => p.slug === slug)

// Helper to get featured projects (used by Home page)
export const getFeatured = () =>
  projects.filter(p => p.featured)
```

---

## Resume Data

```js
// src/data/resume.js

export const resume = {
  name: 'Jeff Floyd',
  title: 'Data Center Hardware Planner',
  summary: 'TODO: 2-3 sentences. Who you are professionally, what you are known for, what you bring to a team. Write it like you would say it, not like a job posting.',

  experience: [
    {
      company: 'Accenture',
      role: 'Data Center Hardware Planner',
      period: 'Jun 2025 - Present',
      description: 'TODO: What do you do in this role? What is your scope? What have you improved since stepping into it?',
      linkedProjects: ['dc-inventory', 'asset-tracking'],  // slugs from projects.js
    },
    {
      company: 'Accenture',
      role: 'Data Center Analyst',
      period: 'Jun 2016 - Jun 2025',
      description: 'TODO: 9 years. What did you own? What did you build? What did people come to you for?',
      linkedProjects: [],
    },
    {
      company: 'Black Box Network Services',
      role: 'Lead Technician',
      period: 'TODO: dates',
      description: 'TODO: What did you lead? What scale?',
      linkedProjects: [],
    },
    {
      company: 'The Home Depot',
      role: 'Senior Data Center Technician',
      period: 'TODO: dates',
      description: 'TODO: What was this role? What did you handle?',
      linkedProjects: [],
    },
    {
      company: 'BryComm, LLC',
      role: 'Installation Technician',
      period: 'TODO: dates',
      description: 'TODO: What projects? What type of infrastructure?',
      linkedProjects: [],
    },
  ],

  skills: {
    infrastructure: ['Data Center Operations', 'Hardware Planning', 'Capacity Management', 'Asset Lifecycle'],
    networking: ['Cisco Technologies', 'Fiber Optic Cable', 'Network Infrastructure'],
    tools: ['Microsoft Visio', 'TODO: add your tools (ServiceNow? Excel? Python? SQL?)'],
    building: ['React', 'Vite', 'Tailwind CSS', 'Astro', 'Python', 'JavaScript'],
    craft: ['D&D Terrain', 'Woodworking', 'TODO: other hands-on skills'],
  },

  education: [
    {
      institution: 'ITT Technical Institute - Austin',
      field: 'Computer Engineering',
      period: 'TODO: years',
    },
  ],

  // Optional: link to downloadable PDF resume
  pdfUrl: null,  // e.g. '/resume-jeff-floyd.pdf' (put file in /public/)
}
```

---

## Now / Current State Data

```js
// src/data/now.js

// Update this whenever something meaningful changes. No schedule required.
export const now = {
  lastUpdated: 'TODO: date',
  building: [
    'TODO: What are you actively building right now?',
    'TODO: Another thing?',
  ],
  learning: [
    'TODO: What are you learning? New tech, new skill, new domain?',
  ],
  focus: 'TODO: One sentence. What is your primary focus area right now?',
}
```

---

## Component Specs

### Nav.jsx
- Fixed top bar, background `surface-1`
- Links: Systems, Workshop, Lab, Resume
- Logo/name on left, clicks to home
- Active route gets `bronze` underline
- Mobile: hamburger menu, slide-in panel

### Hero.jsx (Home page only)
- Name: large, `text-primary`, clean sans-serif
- Role: `text-secondary`, smaller
- Positioning statement: one line, `text-secondary`
- Three CTA buttons: "View Systems" (primary, `bronze` background), "Enter Lab" (outline), "Resume" (outline)
- Background: `base` color. Optional: subtle grain texture at 3% opacity
- No heavy animation. A quiet, confident landing.

### ProjectCard.jsx
- Used on Systems, Workshop, Lab grid pages
- Background: `surface-2`
- Image area (top, optional, 16:9 ratio, placeholder gradient if no image)
- Title: `text-primary`
- Category badge: colored by section (thyme for Lab, oak for Workshop, bronze for Systems)
- StatusBadge component
- 1-2 line excerpt from `problem` or `purpose` field
- Hover: subtle lift + `shadow-elevated` + faint bronze border glow
- Click: navigates to `/category/slug`

### ProjectDetail.jsx (Project.jsx page)
- Full-width content panel on `surface-1`
- Title, StatusBadge, category breadcrumb
- Sections rendered in order: Problem, Purpose, Solution, Tools, Outcome
- Tools rendered as pill badges (oak-tinted)
- Image displayed large if present
- Link to repo/demo if present
- Back link to category page

### StatusBadge.jsx
- `active`: thyme green background, light text
- `in-progress`: bronze background
- `archived`: `surface-2` with muted text
- `experimental`: thyme-dark border, no fill

### ResumeTimeline.jsx
- Vertical timeline, left-aligned
- Each role: company, title, dates, description
- `linkedProjects` rendered as clickable links to `/systems/slug`
- Active role gets thyme-green dot, past roles get muted dots

### SkillMap.jsx
- Groups from `resume.skills` rendered as labeled sections
- Each skill is a pill badge
- Groups: Infrastructure, Networking, Tools, Building, Craft

### NowSection.jsx
- Rendered on Home page below hero (or as its own small section)
- Background: `surface-1` with oak-dark left border
- Shows: building list, learning list, focus statement
- `lastUpdated` shown as subtle timestamp

---

## Build Phases

### Phase 1: Shell (get something on screen)
1. `npm create vite@latest personal-site -- --template react`
2. Install deps: `npm install react-router-dom`
3. Install Tailwind: follow Vite + Tailwind docs
4. Paste design tokens into `index.css`
5. Set up `tailwind.config.js` with extended colors
6. Build `Layout.jsx` + `Nav.jsx` (top nav with working routes)
7. Build `Hero.jsx` (home page, your name, your role, three buttons)
8. Build `ProjectCard.jsx` + `StatusBadge.jsx`
9. Build `Systems.jsx`, `Workshop.jsx`, `Lab.jsx` pages (grid of cards, pulling from `projects.js`)
10. Build `Project.jsx` page (detail view for a single project)
11. Verify: every route works, cards link to detail pages, back button works

**At this point the site is navigable with placeholder content. Ship it to localhost, take a screenshot, feel good.**

### Phase 2: Content (make it real)
1. Fill in every `TODO:` field in `projects.js` (this is the hard part, do it)
2. Fill in every `TODO:` field in `resume.js`
3. Fill in `now.js`
4. Add images to `/public/images/` for your best projects
5. Review each project detail page. Read it out loud. If it sounds like a job posting, rewrite it.

### Phase 3: Resume + Polish
1. Build `ResumeTimeline.jsx` + `SkillMap.jsx`
2. Build `Resume.jsx` page
3. Build `NowSection.jsx`, add to Home page
4. Add `Footer.jsx`
5. Mobile pass: test at 375px and 768px, fix anything that breaks
6. Performance: convert images to WebP, add `loading="lazy"` to images

### Phase 4: Deploy
1. Pick a host (Cloudflare Pages, Vercel, or Netlify all work with Vite)
2. Connect your GitHub repo
3. Build command: `npm run build`
4. Output directory: `dist`
5. Point your domain to the host
6. Verify live URL loads, all routes work (add `_redirects` or equivalent for SPA routing)

---

## Design Rules (from your palette doc, enforced here)

- Never place content directly on `--color-base`. Always use `surface-1` or `surface-2` as the content background.
- Bronze is for interactive elements only. Buttons, links, focus rings, hover states. Not decoration.
- Oak is for warmth and structure. Card borders, section dividers, the Workshop section's visual tone.
- Thyme green is for "alive" indicators. Status badges, the Now section, active states.
- No bright or saturated colors. If you add anything to the palette, keep it muted.
- Optional: add a subtle noise/grain texture (2-5% opacity) on `surface-1` panels for tactile feel.
- Transitions: 150-250ms ease. Nothing slower unless it is a page-level transition.

---

## Mobile Rules

- No hover-dependent interactions. Everything must be tap-accessible.
- Nav collapses to hamburger at 768px.
- Project cards stack to single column at 640px.
- Reduce motion: respect `prefers-reduced-motion` media query.
- Touch targets: minimum 44x44px.

---

## SEO Basics

- Each page gets a unique `<title>` and `<meta name="description">`.
- Use semantic HTML: `<main>`, `<nav>`, `<section>`, `<article>` for project details.
- Clean URLs: `/systems/dc-inventory` not `/project?id=3`.
- Add an OG image (1200x630) for link previews. Even a simple dark card with your name and title.

---

## What is NOT in V1

These are good ideas from your planning docs, saved for later:

- **Private/shareable URLs** (hidden randomized paths for WIP projects). Add when you have content worth hiding.
- **Cloudflare Access authentication**. Add when private content exists.
- **Expand-on-click panels** (no page reload). The route-based approach is simpler and works better for SEO, sharing, and back-button behavior. Revisit if you want a more app-like feel later.
- **Subtle grain texture on panels**. Nice touch, add after the layout is solid.
- **Ambient motion on hero**. Get the static version right first.
