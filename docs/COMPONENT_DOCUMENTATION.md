# Component Documentation

This document provides detailed information about the modular components in the Inventta Group website.

## Component Architecture

The application follows a modular component architecture with clear separation of concerns:

### Layout Components (`client/src/components/layout/`)
- **Navigation.tsx** - Fixed header navigation with smooth scrolling
- **Footer.tsx** - Company footer with links and social media

### Section Components (`client/src/components/sections/`)
- **BusinessVerticalCard.tsx** - Reusable business vertical display card
- **AnimatedCounter.tsx** - Animated statistics counter component

### Page-Level Components (`client/src/components/`)
- **hero-section.tsx** - Main landing section
- **business-verticals.tsx** - Business showcase section
- **stats-section.tsx** - Statistics display section
- **leadership-message.tsx** - Executive messaging section
- **mission-vision-values.tsx** - Company values section
- **contact-section.tsx** - Contact form and information

## Component Structure

### BusinessVerticalCard

**Purpose**: Displays individual business vertical information with consistent styling.

**Props**:
```typescript
interface BusinessVerticalCardProps {
  vertical: BusinessVertical;    // Business vertical data
  index: number;                 // Animation index
  onClick?: (vertical: BusinessVertical) => void;  // Click handler
  className?: string;            // Custom styling
  featured?: boolean;            // Featured card layout
  animationDelay?: number;       // Animation timing
}
```

**Usage**:
```jsx
<BusinessVerticalCard
  vertical={vertical}
  index={0}
  featured={true}
  onClick={handleClick}
/>
```

**Features**:
- Responsive design (mobile/desktop layouts)
- Hover animations and interactions
- Featured vs. standard layouts
- Accessibility support (ARIA labels, keyboard navigation)
- Lazy image loading

### AnimatedCounter

**Purpose**: Displays animated statistics that count up when in viewport.

**Props**:
```typescript
interface AnimatedCounterProps extends StatItem {
  duration?: number;        // Animation duration
  easing?: string;         // CSS easing function
  textColor?: string;      // Counter text color
  labelColor?: string;     // Label text color
}
```

**Usage**:
```jsx
<AnimatedCounter
  end={14}
  suffix="+"
  label="Business Verticals"
  delay={0}
  textColor="text-inventta-blue"
/>
```

**Features**:
- Intersection Observer for viewport detection
- Customizable animation timing
- Number formatting (K, M suffixes)
- Accessible labeling

## Data Management

### Constants (`client/src/data/constants.ts`)
Centralized configuration for:
- Company information
- Navigation menu items
- Statistics data
- Contact information
- Footer links
- Brand colors
- Animation settings

### Business Verticals (`client/src/data/businessVerticals.ts`)
Complete business vertical data including:
- 14 business verticals with services
- Featured vertical identification
- Category grouping
- Helper functions for data filtering

### Type Definitions (`client/src/types/business.ts`)
TypeScript interfaces for:
- BusinessVertical structure
- Component props
- Form data types
- Navigation items
- Statistics items

## Styling System

### Brand Colors
```css
/* Primary Brand Colors */
--inventta-blue: #264f8f;    /* Primary blue */
--inventta-green: #21c174;   /* Primary green */
```

### Utility Classes
```css
.text-inventta-blue { color: #264f8f; }
.text-inventta-green { color: #21c174; }
.bg-inventta-blue { background-color: #264f8f; }
.bg-inventta-green { background-color: #21c174; }
.bg-gradient-inventta { /* Blue to green gradient */ }
```

### Component Styling
- Tailwind CSS utility classes
- Consistent spacing system (4px base unit)
- Responsive breakpoints
- Hover and focus states
- Animation classes

## Animation System

### Framer Motion Integration
All components use Framer Motion for:
- Enter/exit animations
- Scroll-triggered animations
- Hover interactions
- Page transitions

### Animation Patterns
```jsx
// Standard scroll animation
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
```

### Stagger Effects
Components support staggered animations with configurable delays:
```typescript
animationDelay={0.1} // 100ms between items
```

## Accessibility Features

### ARIA Support
- Semantic HTML structure
- ARIA labels and roles
- Screen reader friendly content
- Keyboard navigation support

### Focus Management
- Visible focus indicators
- Logical tab order
- Skip links where appropriate

### Image Accessibility
- Descriptive alt text
- Lazy loading
- Responsive images

## Performance Optimizations

### Code Splitting
- Component-level imports
- Dynamic imports for large components
- Tree shaking optimization

### Image Optimization
- WebP format support
- Responsive image sizing
- Lazy loading
- Optimized dimensions

### Animation Performance
- CSS transforms for smooth animations
- Intersection Observer for scroll detection
- RAF-based counter animations

## Responsive Design

### Breakpoint System
```css
/* Mobile-first approach */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Small desktops */
xl: 1280px   /* Large desktops */
```

### Component Responsiveness
- Mobile-first design approach
- Flexible grid systems
- Responsive typography
- Touch-friendly interactions

## Error Handling

### Form Validation
- Zod schema validation
- Real-time error display
- Accessibility-compliant error messages

### API Error Handling
- TanStack Query error boundaries
- User-friendly error messages
- Retry mechanisms
- Loading states

## Future Enhancements

### Planned Features
1. **Component Library Export** - NPM package for reusable components
2. **Theme System** - Dynamic color theming
3. **Internationalization** - Multi-language support
4. **Advanced Analytics** - Component usage tracking
5. **Testing Suite** - Comprehensive test coverage

### Extension Points
- Custom business vertical templates
- Plugin system for additional features
- API integration for dynamic content
- Content management system integration

## Development Guidelines

### Adding New Components
1. Create component in appropriate directory
2. Follow naming conventions (PascalCase)
3. Add TypeScript interfaces
4. Include JSDoc comments
5. Add to this documentation

### Modifying Existing Components
1. Maintain backward compatibility
2. Update TypeScript types
3. Test responsive behavior
4. Update documentation
5. Consider accessibility impact

### Best Practices
- Use semantic HTML elements
- Follow WCAG accessibility guidelines
- Optimize for performance
- Maintain consistent styling
- Write self-documenting code