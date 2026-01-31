# ComparisonTable Component

A responsive product comparison component migrated from Shopify to Next.js with Tailwind CSS.

## Overview

Displays a side-by-side comparison between IM8's Daily Ultimate Essentials and a leading competitor's greens powder with 22 comparable features, expandable content, and visual indicators.

## Quick Start

```tsx
import ComparisonTable from '@/components/ComparisonTable';

export default function Page() {
  return <ComparisonTable />;
}
```

## Component Structure

```
ComparisonTable/
├── index.tsx           # Main component with state
├── types.ts            # TypeScript interfaces
├── data.ts             # Product and feature data (22 features)
├── icons.tsx           # CheckIcon and XIcon components
├── FeatureRow.tsx      # Individual comparison row
├── example-usage.tsx   # Usage examples
└── README.md           # Documentation
```

## Features

✅ **Side-by-side comparison** - Two products with color-coded branding  
✅ **Visual indicators** - Checkmarks (✓) and X marks for features  
✅ **Expandable content** - "See More/Less" toggle (10 → 22 features)  
✅ **Responsive design** - Mobile and desktop optimized  
✅ **TypeScript** - Fully typed with interfaces  
✅ **Accessible** - Semantic HTML with proper structure

## Data Structure

Edit [data.ts](data.ts) to customize:

```typescript
export const COMPARISON_DATA = {
  im8: {
    name: 'Daily Ultimate Essentials',
    image: '//im8health.com/cdn/shop/files/sachet-thumb.png',
    imageWidth: 170,
    imageHeight: 225,
    brandColor: '#50000B',      // Burgundy
    backgroundColor: '#F5EAEA',  // Light pink
  },
  competitor: {
    // Competitor data...
  },
  features: [
    {
      id: 1,
      im8Content: '30mcg Clinical Dosed Vitamin D3',
      im8HasFeature: true,
      competitorContent: 'No Vitamin D3',
      competitorHasFeature: false,
      isInitiallyVisible: true,
    },
    // 21 more features...
  ],
};
```

### Content Types

**Simple string:**
```typescript
im8Content: 'Clinical Dosed B Vitamins'
```

**With details:**
```typescript
im8Content: { 
  main: '3g Prebiotic fiber', 
  detail: '(50% more)' 
}
```

## Styling

### Colors
- **IM8**: `#50000B` (burgundy), `#A40011` (red), `#F5EAEA` (light pink)
- **Competitor**: `#18332A` (dark green), transparent green background
- **Section**: `#EAE0D2` (beige)

### Fonts
- **Headings**: `font-arizona` (ABC Arizona Flare)
- **Body**: `font-aeonik` (Aeonik)

Ensure fonts are configured in [tailwind.config.ts](../../tailwind.config.ts).

## State Management

```typescript
const [isExpanded, setIsExpanded] = useState(false);

// Filter features based on visibility
const visibleFeatures = COMPARISON_DATA.features.filter(
  (feature) => feature.isInitiallyVisible || isExpanded
);
```

## Key Props & Interfaces

```typescript
interface ComparisonFeature {
  id: number;
  im8Content: string | { main: string; detail?: string };
  im8HasFeature: boolean;
  competitorContent: string | { main: string; detail?: string };
  competitorHasFeature: boolean;
  isInitiallyVisible: boolean;
}

interface ProductInfo {
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  brandColor: string;
  backgroundColor: string;
}
```

## Usage Examples

See [example-usage.tsx](example-usage.tsx) for:
- Basic implementation
- Within product page
- Scroll-to-section navigation
- Analytics tracking
- Custom CTA handlers

## Accessibility

- Semantic HTML (`<section>`, proper heading hierarchy)
- Hidden subtitle for SEO
- Button with clear action text
- Deep linking support (`id="gold-standard"`)
- Analytics tracking ID (`id="homepage_comparison-chart_viewmore"`)

## Browser Support

Modern browsers with JavaScript enabled (Chrome, Firefox, Safari, Edge, mobile browsers)

## Dependencies

- Next.js 14+ (App Router)
- React 18+
- Tailwind CSS 3+
- TypeScript 5+

## Notes

- Uses `'use client'` directive for interactivity
- Product images use external URLs (consider hosting locally)
- Initially shows 10 features, expands to 22
- All colors match original Shopify design
