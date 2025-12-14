yarn dev
---
# AI Coding Agent Guidelines for BuzzyBrains Website

Welcome! This document provides concise, actionable instructions for AI coding agents working on the BuzzyBrains marketing website.

## Project Architecture & Big Picture
- **Single-page marketing site** built with [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing).
- All main content and logic is in `app/page.tsx` (the homepage). No API routes, backend, or state management libraries are present.
- **Key files:**
  - `app/page.tsx`: Main homepage component (all sections: hero, courses, founder, testimonials, CTA, footer).
  - `app/layout.tsx`: App-wide layout wrapper.
  - `app/globals.css`: Global Tailwind CSS styles.
  - `public/`: Static assets (images, fonts).

## Core Conventions & Patterns
- **File-based routing:** Add new pages by creating files in `app/` (e.g., `app/about.tsx` → `/about`).
- **Server components:** Use server components by default for performance.
- **Styling:**
  - Use Tailwind CSS utility classes for all styling (see `globals.css` for customizations).
  - Co-locate any component-specific styles in the same directory if needed.
- **Icons:** Use [Lucide React](https://lucide.dev/icons/) icons (imported in `page.tsx`).
- **Fonts:** Managed via `next/font` (Geist font for branding).

## Developer Workflows
- **Start dev server:**
  ```bash
  npm run dev # or yarn dev / pnpm dev / bun dev
  ```
  Visit [http://localhost:3000](http://localhost:3000)
- **Build for production:**
  ```bash
  npm run build
  ```
- **Debugging:** Use browser dev tools and Next.js error overlay.

## Project-Specific Examples
- **Add a navigation link:** Edit the `<nav>` in `app/page.tsx` and add an `<a>` tag with the appropriate href.
- **Update hero/CTA/testimonials:** All homepage sections are in `app/page.tsx` as React components/JSX blocks. Update or add to the relevant section.
- **Add a new course:** Extend the `courses` array in `app/page.tsx` and update the rendering logic if needed.
- **Modify the footer:** Edit the `<footer>` in `app/page.tsx` directly.
- **Update global styles:** Edit `app/globals.css`.

## Integration & External Dependencies
- **Lucide React** for icons (see imports in `app/page.tsx`).
- **Tailwind CSS** for all styling (configured in `postcss.config.mjs` and `globals.css`).
- **No custom data fetching, API routes, or client-side state management**—all data is static in the component files.

## Notes for AI Agents
- Follow Next.js and Tailwind conventions as used in this codebase.
- When adding dependencies, ensure they fit the current stack and document major changes in `README.md`.
- Reference the [README.md](../../README.md) for basic Next.js workflows, but use this file for project-specific patterns.

For more, see [Next.js Documentation](https://nextjs.org/docs).

### Adding a New Page
1. Create a new file in the `app/` directory, e.g., `app/new-page.tsx`.
2. Export a React component as the default export.
3. The file name will automatically map to the route `/new-page`.

### Updating Global Styles
Modify `globals.css` to apply styles globally across the application.

## Notes for AI Agents
- Always follow the Next.js conventions for file-based routing and component structure.
- When adding dependencies, ensure they align with the project's existing stack and are necessary for the task.
- Document any significant changes in the `README.md` file.

For further details, refer to the [Next.js Documentation](https://nextjs.org/docs).