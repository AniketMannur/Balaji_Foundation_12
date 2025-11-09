# Shree Balaji Foundation Website

## Overview

This is a full-stack website for Shree Balaji Foundation, a non-profit organization focused on empowering communities through education, healthcare, women empowerment, and social welfare programs. The website serves as the foundation's digital presence, showcasing their mission, programs, impact stories, and providing ways for visitors to connect and support the cause.

The application is built as a modern single-page application (SPA) with a React frontend and Express backend, following a component-driven architecture with a focus on trust-building, impact visualization, and emotional connection with visitors.

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

**Component Structure**
- Page-level components in `client/src/pages/` (Home, About Us, Programs, Impact, Gallery, Contact, Sector pages)
- Reusable UI components in `client/src/components/` (Navigation, HeroCarousel, About, Programs, Gallery, Testimonials, CallToAction, Footer)
- Component examples in `client/src/components/examples/` for development and testing
- Shadcn UI components in `client/src/components/ui/`

**Key Design Patterns**
- Component composition pattern for building complex UIs from simple components
- Props-based component customization for flexibility
- Mobile-responsive hamburger menu with slide-in drawer pattern
- Carousel pattern with auto-rotation and manual navigation
- Card-based layouts for programs, testimonials, and impact metrics
- Modal/dialog patterns for image galleries and forms

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the HTTP server
- **ESM module system** (type: "module" in package.json)
- Custom Vite integration for serving the frontend in development

**Middleware Stack**
- JSON body parsing with raw body preservation for webhook integrations
- URL-encoded form data parsing
- Request logging middleware with timing and response capture
- CORS and security headers (implied for production use)

**Development Setup**
- Custom Vite middleware integration for HMR during development
- Separate build process: Vite for frontend, esbuild for backend bundling
- Development server runs on tsx with watch mode
- Production build creates bundled server in `dist/` and static assets in `dist/public/`

**API Structure**
- RESTful API pattern with `/api` prefix for all backend routes
- Modular route registration system in `server/routes.ts`
- Storage abstraction layer with interface-based design (`IStorage`)

### Data Storage Solutions

**Database**
- **PostgreSQL** as the primary database (via Neon serverless)
- **Drizzle ORM** for type-safe database queries and schema management
- Schema defined in `shared/schema.ts` for code sharing between client and server

**Current Schema**
- `users` table with id (UUID), username (unique), and password fields
- Schema validation using Drizzle-Zod for runtime type checking

**Storage Abstraction**
- In-memory storage implementation (`MemStorage`) for development/testing
- Interface-based design (`IStorage`) allows easy swapping to database implementation
- CRUD operations abstracted behind storage interface methods

**Migration Strategy**
- Drizzle Kit for schema migrations in `migrations/` directory
- Database URL configured via environment variable
- `db:push` script for pushing schema changes to database

### Authentication & Authorization

**Current State**
- User schema exists with username/password fields
- No active authentication implementation in the codebase yet
- Session management dependencies installed (connect-pg-simple for PostgreSQL session store)

**Anticipated Pattern**
- Session-based authentication (indicated by session store dependency)
- Credentials included in fetch requests (credentials: "include")
- 401 handling in query client with configurable behavior (returnNull or throw)

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
- **Neon Serverless PostgreSQL** (@neondatabase/serverless) - Serverless PostgreSQL with edge-compatible driver
- Connection via DATABASE_URL environment variable