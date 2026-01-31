"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const StickyAddToCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-50 lg:hidden shadow-lg">
      <div className="flex items-center gap-3">
        {/* Product Thumbnail */}
        <div className="w-14 h-14 rounded-lg overflow-hidden bg-im8-cream flex-shrink-0">
          <img
            src="https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel01.jpg?v=1761040602&width=200"
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            Daily Ultimate Essentials: All-in-One Supplement
          </p>
          <p className="text-xs text-muted-foreground">(Forever Jar)</p>
          <p className="text-xs text-muted-foreground">$2.61 USD / serving</p>
        </div>

        {/* Dropdown & CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 px-3 py-2 border border-border rounded-lg text-sm"
          >
            <span className="font-medium">90-Day Supply (Save 30%)</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full mt-3 py-3 px-6 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold text-sm transition-all duration-200">
        ADD TO CART - $78.33 USD/MO
      </button>
    </div>
  );
};
