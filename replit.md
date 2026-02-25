# Kindex Website (kindex.tools)

## Overview
Marketing and landing page website for the Kindex project — a persistent knowledge graph for AI-assisted workflows. The site showcases features, use cases, installation instructions, and technical details.

## Architecture
- **Frontend-only marketing site** built with React + TypeScript + Tailwind CSS
- No database or backend API needed (static content)
- Express server serves the frontend via Vite dev server

## Tech Stack
- React with TypeScript
- Tailwind CSS with shadcn/ui components
- Framer Motion for scroll-triggered animations
- Wouter for routing (single page currently)
- Dark mode first with theme toggle (localStorage persisted)

## Key Files
- `client/src/pages/landing.tsx` — Main landing page with all sections (Hero, Features, Context Tiers, Comparison, Use Cases, Installation, Commands, Architecture, CTA, Footer)
- `client/src/components/navigation.tsx` — Sticky top navigation with mobile menu
- `client/src/components/theme-provider.tsx` — Dark/light theme toggle
- `client/src/components/terminal-block.tsx` — Reusable terminal/code display component
- `client/src/App.tsx` — App root with routing and providers
- `client/index.html` — HTML with SEO meta tags, Inter + JetBrains Mono fonts

## Design System
- **Fonts**: Inter (sans), JetBrains Mono (mono)
- **Primary color**: Blue (217 91% 60%)
- **Dark mode**: Deep navy backgrounds (222 47% 5%)
- **Light mode**: Clean light gray/white backgrounds
- Custom utility classes: `.gradient-text`, `.glow-blue`, `.glow-blue-sm`

## Project Info
- Domain: kindex.tools
- GitHub: https://github.com/jmcentire/kindex
- PyPI: https://pypi.org/project/kindex/
