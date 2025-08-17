# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern developer portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components. It's a static site that showcases personal projects, experience, skills, and contact information through data-driven pages.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint for code quality

Alternative using Bun (recommended):
- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## Architecture & Key Technologies

### Framework Stack
- **Next.js 15** with App Router for routing and SSG
- **TypeScript** for type safety throughout the application
- **Tailwind CSS** for styling with custom design system
- **shadcn/ui** component library with "new-york" style variant
- **Bun** as the recommended package manager

### Data Management
All content is managed through static TypeScript files in `/data/`:
- `personalInfo.ts` - Personal details, contact info, social links
- `skills.ts` - Technical skills organized by categories  
- `experience.ts` - Work experience and career timeline
- `projects.ts` - Portfolio projects with details and links

### Project Structure
```
app/
├── (site)/          # Route group for main site pages
│   ├── page.tsx     # Home page
│   ├── about/       # About page
│   ├── skills/      # Skills overview and categories
│   ├── experience/  # Experience timeline and yearly views
│   ├── projects/    # Projects overview and detail pages
│   └── contact/     # Contact information
├── globals.css      # Global styles and CSS variables
└── layout.tsx       # Root layout with SEO and styling

components/
├── ui/              # shadcn/ui components
├── navigation.tsx   # Main site navigation
└── footer.tsx       # Site footer

data/               # Static content files
lib/               # Utility functions (cn helper)
public/images/     # Static assets and project images
```

### Component System
- Uses shadcn/ui with Tailwind CSS for consistent design
- Custom CSS variables for theming in `globals.css`
- Responsive design with mobile-first approach
- Dark mode support with green accent color scheme

### Routing Patterns
- Dynamic routes: `[id]` for project details, `[category]` for skills, `[year]` for experience
- Route groups: `(site)` to organize main pages without affecting URL structure
- App Router conventions with `page.tsx` files

## Configuration Files

- `components.json` - shadcn/ui configuration with path aliases
- `tailwind.config.ts` - Tailwind configuration with custom animations and color system
- `next.config.ts` - Next.js configuration with image optimization and build settings
- `tsconfig.json` - TypeScript configuration with path mapping (`@/*`)
- `eslint.config.mjs` - ESLint configuration for Next.js and TypeScript

## Development Guidelines

### Content Updates
To update portfolio content, modify the TypeScript files in `/data/`:
- Update personal information in `personalInfo.ts`
- Add/modify skills in `skills.ts` with categories and proficiency levels
- Update work experience in `experience.ts`
- Add new projects in `projects.ts` with descriptions, tech stacks, and links

### Adding shadcn/ui Components
Use the CLI to add new components:
```bash
bunx shadcn@latest add [component-name]
```

### Image Management
- Profile images: `public/images/profile-hero.jpg`, `profile-about.jpg`
- Project images: `public/images/projects/`
- Follow the image requirements in `public/images/IMAGE_REQUIREMENTS.md`

### Styling Approach
- Use Tailwind CSS classes for styling
- Leverage CSS variables defined in `globals.css` for theming
- Follow the established color scheme with green accents
- Use responsive design patterns throughout

### Type Safety
- All data files are fully typed with TypeScript
- Component props should be properly typed
- Use the `@/*` path alias for imports
- Maintain strict TypeScript configuration

This portfolio emphasizes clean code, type safety, and maintainable architecture while providing a professional showcase for technical skills and projects.