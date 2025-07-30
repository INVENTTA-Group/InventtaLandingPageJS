# Inventta Group Corporate Website

A modern, premium corporate landing page built for Inventta Group - India's leading healthcare and multi-industry conglomerate.

## 🏢 About Inventta Group

Inventta Group is a healthcare-focused conglomerate operating across 14 business verticals, from pharmaceuticals and medical technology to education, hospitality, and green energy. This website showcases their comprehensive portfolio while emphasizing their leadership in healthcare innovation.

## 🎨 Brand Identity

- **Primary Blue**: `#264f8f` - Represents trust, professionalism, and medical excellence
- **Primary Green**: `#21c174` - Symbolizes growth, health, and sustainability
- **Typography**: Inter font family for modern, professional appearance

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern UI library with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Shadcn/ui** - High-quality component library
- **TanStack Query** - Server state management
- **Wouter** - Lightweight client-side routing

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type-safe server development
- **Zod** - Schema validation
- **PostgreSQL** - Database (via Neon)
- **Drizzle ORM** - Type-safe database operations

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Base UI components (shadcn)
│   │   │   ├── sections/  # Page sections
│   │   │   └── layout/    # Layout components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   ├── pages/         # Page components
│   │   └── types/         # TypeScript type definitions
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database interface
│   ├── index.ts          # Server entry point
│   └── vite.ts           # Vite integration
├── shared/                # Shared type definitions
│   └── schema.ts         # Database schemas
└── docs/                 # Documentation
```

## 🎯 Key Features

### 1. Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### 2. Performance Optimized
- Fast loading times
- Optimized images
- Efficient bundling with Vite

### 3. Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support

### 4. SEO Optimized
- Meta tags and Open Graph
- Structured data
- Search engine friendly URLs

### 5. Interactive Elements
- Smooth scroll navigation
- Animated statistics counters
- Form validation and submission
- Hover effects and transitions

## 🧩 Component Architecture

### Core Layout Components
- `Navigation` - Fixed header with smooth scroll navigation
- `Footer` - Company information and links
- `HeroSection` - Main landing section with call-to-action

### Content Sections
- `StatsSection` - Animated statistics display
- `BusinessVerticals` - Interactive business showcase
- `LeadershipMessage` - Executive messaging
- `MissionVisionValues` - Company foundation
- `ContactSection` - Contact form and information

### Business Verticals
The website showcases 14 distinct business verticals:

1. **Healthcare Services** (Featured) - Core medical services
2. **Pharmaceuticals** (Featured) - Drug manufacturing and distribution
3. **ZyraRx HealthTech** - AI-powered health technology
4. **Education** - K-12 schools and professional training
5. **Hospitality** - Hotels, resorts, and event management
6. **Automobiles** - Vehicle sales and services
7. **Consulting** - Business and IT advisory services
8. **Consumer Goods** - Retail and e-commerce
9. **Insurance** - Health, life, and general insurance
10. **Real Estate** - Property development and advisory
11. **Electronics** - Consumer electronics and smart devices
12. **Green Energy** - Solar and renewable energy solutions
13. **Fashion & Lifestyle** - Apparel and lifestyle products
14. **Media & Entertainment** - Publishing and content creation

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--inventta-blue: #264f8f;    /* Primary brand blue */
--inventta-green: #21c174;   /* Primary brand green */

/* Supporting Colors */
--background: #ffffff;        /* Main background */
--foreground: #0f172a;       /* Primary text */
--muted: #f8fafc;            /* Secondary background */
--border: #e2e8f0;           /* Border color */
```

### Typography Scale
- **Headings**: 32px - 72px (responsive)
- **Body**: 16px - 20px
- **Small text**: 14px
- **Font weights**: 300, 400, 500, 600, 700, 800

### Spacing System
- Base unit: 4px (0.25rem)
- Common spacings: 8px, 16px, 24px, 32px, 48px, 64px

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1280px) { }
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Build project for production: `npm run build`
4. Start development server: `npm run dev`
5. Open http://localhost:5000

### Environment Variables
```env
DATABASE_URL=your_postgresql_url
NODE_ENV=development
```

## 📝 API Documentation

### Contact Form Endpoint
```typescript
POST /api/contact
Content-Type: application/json

{
  "firstName": string,
  "lastName": string,
  "email": string,
  "businessVertical": string (optional),
  "message": string
}
```

## 🔧 Development Guidelines

### Component Development
1. Use TypeScript for all components
2. Follow the component structure pattern
3. Add prop validation with TypeScript interfaces
4. Include JSDoc comments for complex functions

### Styling Guidelines
1. Use Tailwind CSS classes
2. Follow the design system colors
3. Ensure responsive design
4. Test on multiple screen sizes

### Code Quality
1. Run TypeScript checks: `npm run type-check`
2. Format code: `npm run format`
3. Follow naming conventions
4. Write self-documenting code

## 🚢 Deployment

The application is configured for Replit deployment:

1. Push changes to the repository
2. Use Replit's automatic deployment
3. Environment variables are configured in Replit

## 📞 Support

For technical support or questions about the codebase:
- Review the component documentation
- Check the TypeScript interfaces
- Refer to the design system guidelines
- Contact the development team

## 📄 License

© 2024 Inventta Group. All rights reserved.
