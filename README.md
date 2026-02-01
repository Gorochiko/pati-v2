# PATI v2 - Health & Wellness E-Commerce Platform

A modern, high-performance e-commerce landing page built with Next.js 16, TypeScript, and Tailwind CSS. This project delivers a premium user experience for health and wellness products with advanced UI components, animations, and responsive design.

## 🚀 Tech Stack

### Core Framework
- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.3** - Latest React with React Server Components
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 3.4** - Utility-first CSS framework

### UI & Animation Libraries
- **Radix UI** - Accessible component primitives
  - Accordion
  - Avatar
  - Dialog
  - Scroll Area
  - Slot
- **Framer Motion 12.29** - Advanced animations and transitions
- **Embla Carousel 8.6** - Smooth carousel implementation
- **Swiper 12.1** - Touch-enabled slider
- **Lucide React** - Beautiful icon library

### Utilities
- **clsx** - Conditional className utilities
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Smart Tailwind class merging
- **tw-animate-css** - Extended Tailwind animations

## 📁 Project Structure

```
pati-v2/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Home page composition
│
├── components/                   # Feature components
│   ├── ambassadors/             # Ambassador testimonials section
│   │   ├── AmbassadorCard.tsx
│   │   ├── AmbassadorVideo.tsx
│   │   ├── AmbassadorsCarousel.tsx
│   │   └── types.ts
│   │
│   ├── BeckhamStack/            # Product stack comparison
│   ├── ClinicalStudiesSection/  # Clinical evidence display
│   ├── Content/                 # Content marketing section
│   ├── DailyUltimate/          # Daily nutrition information
│   ├── Expert/                  # Expert endorsements
│   ├── FAQ/                     # Frequently asked questions
│   ├── FivePillars/            # Product pillars with context
│   ├── Footer/                  # Site footer with links
│   ├── GoldStandard/           # Quality standards
│   ├── Header/                  # Navigation header
│   ├── Monthly/                 # Monthly breakdown
│   ├── OrganSystems/           # Health benefits by organ
│   ├── Premium/                 # Premium products showcase
│   ├── Prepare/                 # Preparation guidelines
│   ├── ProductAccordion/       # Product details accordion
│   ├── ProductGallery/         # Product image gallery
│   ├── ProductInfo/            # Main product information
│   │   ├── FormatSelector.tsx
│   │   ├── SubscriptionSelector.tsx
│   │   └── ProductSubmitButton.tsx
│   ├── StaticReviewsSection/   # Customer reviews
│   ├── StickyProductBar/       # Sticky add-to-cart bar
│   ├── StickyPromoBar/         # Promotional banner
│   ├── TeamMember/             # Team section
│   └── ui/                      # Reusable UI components
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── carousel.tsx
│       ├── Container.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       └── scroll-area.tsx
│
├── hooks/                       # Custom React hooks
│   ├── use-header-visibility.ts
│   └── use-mobile.tsx
│
├── lib/                         # Utility functions
│   └── utils.ts
│
└── public/                      # Static assets
    ├── css/
    └── icons/
```

## 🎨 Key Features

### Component Architecture
- **Modular Design**: Each feature is self-contained with its own data, types, and subcomponents
- **Type Safety**: Full TypeScript coverage with strict mode enabled
- **Responsive**: Mobile-first design with adaptive layouts
- **Accessible**: Built on Radix UI primitives for WCAG compliance

### UI/UX Features
- Sticky promotional bar and product bar
- Interactive product gallery with zoom
- Format and subscription selectors
- Animated carousel components
- Clinical study visualizations
- Expert video testimonials
- Accordion-based FAQs
- Organ system health benefits
- Premium product showcase

### Performance Optimizations
- Server Components by default
- Optimized font loading (Geist font family)
- Image optimization with Next.js Image
- Code splitting per route
- CSS-in-JS with zero runtime overhead

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+ (LTS recommended)
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd pati-v2

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev

# Access the application
# Open http://localhost:3000 in your browser
```

The development server supports:
- Hot Module Replacement (HMR)
- Fast Refresh for instant updates
- TypeScript error reporting
- ESLint integration

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

### Code Quality

```bash
# Run ESLint
npm run lint
```

## 📝 Configuration Files

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2017
- **Module System**: ESNext with bundler resolution
- **Strict Mode**: Enabled for maximum type safety
- **Path Aliases**: `@/*` maps to project root

### Tailwind Configuration (`tailwind.config.ts`)
- Custom color system with CSS variables
- Extended theme for brand colors
- Dark mode support (class-based)
- Custom animations and utilities

### Next.js Configuration (`next.config.ts`)
- App Router enabled
- Optimized for production builds
- Image optimization configured

## 🎯 Component Patterns

### Data-Driven Components
Components follow a consistent pattern:
```
ComponentName/
  ├── index.tsx       # Main component logic
  ├── data.ts         # Static data and content
  ├── types.ts        # TypeScript interfaces
  └── SubComponent.tsx # Subcomponents
```

### Custom Hooks
- `use-header-visibility`: Manages header show/hide on scroll
- `use-mobile`: Responsive breakpoint detection

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Deploy with Vercel CLI
vercel

# Or connect your GitHub repository to Vercel Dashboard
# for automatic deployments on push
```

### Other Platforms
The app can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Docker containers

## 📦 Build Output

```bash
npm run build
```

Generates:
- Optimized JavaScript bundles
- Pre-rendered static pages
- Server-side routes
- Static assets in `.next/` directory

## 🔧 Environment Variables

Create `.env.local` for environment-specific configuration:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

## 🧪 Development Best Practices

1. **Component Organization**: Keep components small and focused
2. **Type Safety**: Define TypeScript interfaces for all props and data
3. **Responsive Design**: Use Tailwind breakpoints (sm, md, lg, xl, 2xl)
4. **Performance**: Lazy load components when appropriate
5. **Accessibility**: Use semantic HTML and ARIA attributes
6. **Code Style**: Follow ESLint configuration

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Framer Motion API](https://www.framer.com/motion)

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes with descriptive commits
3. Ensure `npm run lint` passes
4. Test thoroughly across devices
5. Submit a pull request

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
