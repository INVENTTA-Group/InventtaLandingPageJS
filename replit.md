# Inventta Group Website

## Overview

This is a modern, full-stack web application for Inventta Group, a healthcare and multi-industry conglomerate. The application is built with React frontend and Express.js backend, featuring a corporate website with contact form functionality and sophisticated UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations and interactions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful endpoints with Zod validation
- **Session Management**: Basic in-memory storage (development setup)

### Project Structure
- **client/**: Frontend React application
- **server/**: Backend Express.js application
- **shared/**: Shared TypeScript definitions and schemas
- **migrations/**: Database migration files

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Full-screen hero with parallax background effects
3. **Business Verticals**: Interactive grid showcasing 14 business areas
4. **Stats Section**: Animated counters displaying company metrics
5. **Leadership Message**: Executive messaging with professional imagery
6. **Mission Vision Values**: Company foundation and principles
7. **Contact Section**: Form with validation and API integration
8. **Footer**: Company links and social media integration

### UI Component Library
- Complete Shadcn/ui component suite (buttons, forms, dialogs, etc.)
- Custom Inventta brand colors and theming
- Responsive design system with mobile-first approach
- Consistent spacing and typography scales

### Backend Components
1. **Contact API**: POST /api/contact endpoint with form validation
2. **User Management**: Basic user schema and storage interface
3. **Request Logging**: Middleware for API request monitoring
4. **Error Handling**: Centralized error handling middleware

## Data Flow

### Contact Form Flow
1. User fills contact form in React frontend
2. Form data validated using Zod schemas
3. TanStack Query manages API request state
4. Express backend validates and processes form data
5. Success/error feedback displayed via toast notifications

### Database Flow
- Drizzle ORM handles database operations
- PostgreSQL database hosted on Neon
- Schema definitions in shared directory
- Migration system for database changes

## External Dependencies

### Frontend Dependencies
- **UI Libraries**: Radix UI primitives, Lucide icons
- **Animation**: Framer Motion
- **Forms**: React Hook Form with Zod resolvers
- **HTTP Client**: Built-in fetch with TanStack Query
- **Date Handling**: date-fns
- **Styling**: Tailwind CSS, class-variance-authority

### Backend Dependencies
- **Database**: @neondatabase/serverless, drizzle-orm
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple (PostgreSQL session store)
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across frontend/backend
- **ESBuild**: Backend bundling for production
- **Hot Reload**: Vite HMR for frontend, tsx for backend

## Deployment Strategy

### Development Environment
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations handled by Drizzle Kit
- Replit-specific plugins for development experience

### Production Build Process
1. Frontend built with Vite to `dist/public`
2. Backend bundled with ESBuild to `dist/index.js`
3. Static files served by Express in production
4. Database schema pushed via `db:push` command

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Node Environment**: Switches behavior based on `NODE_ENV`
- **Replit Integration**: Special handling for Replit environment

### Key Configuration Files
- **Vite**: Custom alias resolution for imports
- **TypeScript**: Shared configuration across client/server/shared
- **Tailwind**: Custom design tokens and component paths
- **Drizzle**: PostgreSQL connection and migration settings

The application is designed as a professional corporate website with room for expansion into additional business functionality, user authentication, and content management features.

## Recent Updates (January 2025)

### Modular Architecture Implementation
- **Component Refactoring**: Converted monolithic components into modular, reusable structures
- **Type Safety Enhancement**: Created comprehensive TypeScript interfaces in `client/src/types/business.ts`
- **Data Centralization**: Moved all business data to `client/src/data/businessVerticals.ts` and constants to `client/src/data/constants.ts`
- **Documentation Addition**: Added comprehensive component documentation in `docs/COMPONENT_DOCUMENTATION.md`

### Brand Consistency Updates
- **Exact Color Implementation**: Applied precise brand colors (#264f8f blue, #21c174 green) throughout the design
- **CSS Variable Updates**: Updated CSS custom properties to use exact HEX values
- **Consistent Styling**: Standardized color application across all components

### Component Modularity
- **BusinessVerticalCard**: Standalone component for business vertical display with featured/standard layouts
- **AnimatedCounter**: Reusable statistics counter with customizable animation
- **Centralized Constants**: All company information, navigation, and configuration centralized
- **Helper Functions**: Added utility functions for data filtering and retrieval

### Code Organization Improvements
- **Clear Separation**: Layout, section, and page components properly organized
- **Import Optimization**: Streamlined imports and dependencies
- **Documentation**: Added comprehensive JSDoc comments and inline documentation
- **Accessibility**: Enhanced ARIA support and keyboard navigation

The codebase is now highly modular, making it easy to edit, remove, or refactor individual components without affecting others. All business data is centralized and easily configurable for future updates.