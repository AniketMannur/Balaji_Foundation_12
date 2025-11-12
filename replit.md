# Shree Balaji Foundation Website

## Overview

This is a frontend-only website for Shree Balaji Foundation, a non-profit organization focused on empowering communities through education, healthcare, women empowerment, and social welfare programs. The website serves as the foundation's digital presence, showcasing their mission, programs, impact stories, and providing ways for visitors to connect and support the cause.

The application is built as a modern single-page application (SPA) with a React frontend served by an Express/Vite development server, following a component-driven architecture with a focus on trust-building, impact visualization, and emotional connection with visitors.

## Recent Changes (November 12, 2025)

- **Hero Animation**: Added smooth floating animation to hero image for dynamic visual appeal
- **Footer Enhancement**: Redesigned footer with single-line foundation text, larger logo (48px), and centered copyright
- **Navigation Improvement**: Added "Share Feedback" as dropdown under "Contact" in navigation menu
- **Programs Page Fix**: Fixed all "Learn More" button links to work correctly with proper sector routing
- **Feedback Page Refactor**: Converted feedback page to use PageLayout component, eliminating duplicate navigation/footer
- **Code Simplification**: Removed unused backend schemas and storage logic, maintaining frontend-only architecture
- **Mobile Responsiveness**: Maintained all mobile menu functionality including collapsible navigation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **TanStack Query** (React Query) for server state management and data fetching

**UI Component System**
- **Shadcn/ui** component library based on Radix UI primitives for accessible, composable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for managing component variants
- Design system follows the "new-york" style from Shadcn with custom theming

**Styling Approach**
- Custom CSS variables defined for light mode theming (primary colors, backgrounds, borders)
- Typography system uses Inter for body text, Poppins for headings, and Noto Serif Devanagari for Sanskrit text
- Spacing primitives based on Tailwind's scale (4, 6, 8, 12, 16, 20)
- Responsive design with mobile-first breakpoints
- Custom animations including `float-hero` for smooth floating effects

**Component Structure**
- Page-level components in `client/src/pages/` (Home, About Us, Programs, Impact, Gallery, Contact, Feedback, Sector pages)
- Reusable UI components in `client/src/components/` (ModernNavigation, ModernHero, About, Programs, Gallery, Testimonials, CallToAction, Footer, PageLayout)
- Component examples in `client/src/components/examples/` for development and testing
- Shadcn UI components in `client/src/components/ui/`
- Consistent use of PageLayout wrapper for all pages to avoid duplicate navigation/footer

**Key Design Patterns**
- Component composition pattern for building complex UIs from simple components
- Props-based component customization for flexibility
- Mobile-responsive hamburger menu with slide-in drawer pattern
- Carousel pattern with auto-rotation and manual navigation
- Card-based layouts for programs, testimonials, and impact metrics
- Modal/dialog patterns for image galleries and forms

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript serving as Vite development server
- **ESM module system** (type: "module" in package.json)
- Custom Vite integration for serving the frontend in development
- **Frontend-only architecture** - no API endpoints or database operations

**Middleware Stack**
- JSON body parsing (maintained for future extensibility)
- URL-encoded form data parsing
- Request logging middleware with timing and response capture

**Development Setup**
- Custom Vite middleware integration for HMR during development
- Separate build process: Vite for frontend, esbuild for backend bundling
- Development server runs on tsx with watch mode
- Production build creates bundled server in `dist/` and static assets in `dist/public/`

**API Structure**
- Minimal route registration system in `server/routes.ts` (prepared for future endpoints)
- Empty storage interface in `server/storage.ts` (ready for backend expansion)
- No active API endpoints - all content is static/frontend-only

### Data Storage Solutions

**Current State**
- Frontend-only application with no backend database
- All content is hardcoded in React components
- `shared/schema.ts` and `server/storage.ts` maintained as minimal stubs for future extensibility

**Future Expansion**
- Database dependencies (Drizzle ORM, Neon PostgreSQL) installed but not configured
- Ready for backend API implementation when needed
- Storage interface pattern prepared for easy CRUD operation addition

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** - Comprehensive set of accessible component primitives (@radix-ui/react-*)
- **Lucide React** - Icon library for UI elements
- **Embla Carousel** - Carousel/slider functionality for hero section
- **CMDK** - Command menu component
- **React Day Picker** - Calendar/date picker component (implied by calendar component)

**Utility Libraries**
- **clsx** and **tailwind-merge** - Class name manipulation and merging
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation
- **zod** - Runtime type validation and schema definition

**Build & Development Tools**
- **TypeScript** - Static type checking
- **PostCSS** with Autoprefixer - CSS processing
- **esbuild** - Fast server bundling for production
- **tsx** - TypeScript execution for development server
- **Drizzle Kit** - Database migration and schema management tools

**Replit Integration**
- @replit/vite-plugin-runtime-error-modal - Error overlay
- @replit/vite-plugin-cartographer - Code navigation
- @replit/vite-plugin-dev-banner - Development banner

**Asset Management**
- Images stored in `attached_assets/` directory
- Vite alias `@assets` for easy asset imports
- Generated images for programs, testimonials, gallery sections

**Database Service**
- **Neon Serverless PostgreSQL** (@neondatabase/serverless) - Installed for future use
- Not currently configured or used (frontend-only architecture)

## Key Features

**Navigation System**
- Responsive top navigation with dropdown menus
- Contact dropdown includes "Contact Us" and "Share Feedback" options
- Mobile hamburger menu with smooth transitions
- Active page highlighting

**Program Sections**
- Quality Education
- Women Empowerment
- Health and Wellness
- Community Development
- Skill Development and Training
- Environmental Initiatives
- All "Learn More" buttons properly linked to dedicated sector pages

**User Engagement**
- Animated hero section with floating image effect
- Gallery with modern card layouts
- Testimonials section
- Feedback form with toast notifications
- Call-to-action sections throughout the site

**Design Elements**
- Consistent use of primary orange (#FF6B35) and accent teal (#4ECDC4) colors
- Clean, modern UI with card-based layouts
- Smooth animations and transitions
- Fully responsive design for all screen sizes