# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ARYE RCC-1 gaming mouse landing page - a hi-tech, visually appealing wireframe project targeting premium gaming hardware audience.

**Current State:** HTML/CSS wireframe ready for conversion to modern web framework
**Target Functionality:**
- Hi-tech visually appealing landing page with magnesium-alloy-dark-silver gradients
- Contact form with backend integration
- Basic buy flow for single product (RCC-1 mouse at $399)
- Dark theme: white/light gray and dark/black color scheme

## Architecture & Structure

### Current Implementation
- **`arye-mockup.html`** - Complete wireframe with embedded CSS (~500 lines)
- **`arye-1.jpg`** - Product hero image (1200x675)
- **`arye-2.jpg`** - Secondary product image (4096x2896)

### Component Structure (from wireframe)
```
Header/Navigation → Fixed header with logo, nav links, CTA
Hero Section → Split layout: product specs + visual
Features Grid → 6 feature cards in 3-column layout
Contact Form → 3-field form (name, email, message)
Sticky Buy Bar → Bottom-fixed purchase CTA
```

### Design System
- **Primary Colors:** Dark backgrounds (#0a0a0a, #111), white text
- **Accent Color:** #4CAF50 (green for CTAs, specs, badges)
- **Typography:** Apple system fonts, bold weight for emphasis
- **Layout:** Max-width 1200px, responsive grid systems
- **Animations:** Hover transforms, backdrop blur effects

## Product Specifications

**ARYE RCC-1 Gaming Mouse:**
- Weight: 46g (ultra-light)
- Polling Rate: 8000Hz
- Sensor: PMW-3950, 30K DPI
- Battery: 300mAh
- Switches: Omron optical, 100M click rating
- Price: $399 USD
- Status: Pre-order, shipping January 2025

## Development Guidelines

### Framework Migration Path
When converting from wireframe to production:
1. **Next.js/React** recommended for landing page + buy flow
2. **Tailwind CSS** or **styled-components** for design system
3. **Framer Motion** for hi-tech animations and interactions
4. **Form handling:** React Hook Form + backend API integration

### Key Implementation Requirements
- **Performance:** Fast loading for premium brand perception
- **Mobile-first:** Responsive across all devices (current breakpoint: 768px)
- **SEO:** Meta tags, structured data for product
- **Accessibility:** Proper contrast ratios, keyboard navigation
- **Forms:** Validation, error states, success feedback

### Hi-Tech Visual Elements
- Gradient overlays on product images
- Subtle animations on hover/scroll
- Glass morphism effects (backdrop-filter: blur)
- Geometric shapes and lines for tech aesthetic
- Smooth transitions between sections

### Contact Form Integration
**Required Fields:** Name, Email, Message
**Backend Requirements:**
- Form validation and sanitization
- Email delivery system
- Success/error state handling
- Spam protection (reCAPTCHA recommended)

### Buy Flow Requirements
**Single Product Purchase:**
- Quantity selector (default: 1)
- Add to cart functionality
- Checkout process with shipping
- Payment integration (Stripe recommended)
- Order confirmation and tracking

### Asset Management
- **Product Images:** Optimize for web delivery (WebP format)
- **Responsive Images:** Multiple sizes for different viewports
- **Loading States:** Skeleton screens for product visuals
- **Fallbacks:** Graceful degradation if images fail to load

### Brand Consistency
- Maintain premium, minimalist aesthetic
- Use consistent spacing and typography scales
- Preserve magnesium-alloy color palette
- Ensure all interactions feel smooth and premium

## Common Development Tasks

### Local Development
```bash
pnpm run dev         # Start development server (Turbopack enabled)
pnpm run build       # Production build
pnpm run start       # Start production server
pnpm run lint        # Code linting and fixes
pnpm run type-check  # TypeScript validation
```

### Development Server
- **Local URL:** http://localhost:3000 (or next available port)
- **Features:** Hot reloading, Turbopack for faster builds
- **Port conflicts:** Server will auto-select next available port

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navigation
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and custom CSS
└── components/
    ├── Navigation.tsx     # Fixed header navigation
    ├── Hero.tsx          # Hero section with product specs
    ├── Features.tsx      # 6-feature grid layout
    ├── Contact.tsx       # Contact form with state management
    └── StickyBuyBar.tsx  # Bottom-fixed purchase CTA
```

### Asset Optimization
```bash
# Image optimization workflow
npx @squoosh/cli --webp arye-1.jpg arye-2.jpg
# Generate multiple sizes for responsive images
```

### Form Testing
- Test all validation states
- Verify email delivery
- Check mobile form interactions
- Test with screen readers

### Buy Flow Testing
- End-to-end purchase simulation
- Payment integration testing
- Mobile checkout experience
- Error state handling