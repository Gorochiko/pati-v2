'use client';

import React, { useState, useEffect } from 'react';
import { ProductDropdown } from './ProductDropdown';
import type { StickyProductBarProps, DropdownOption } from './types';

export const StickyProductBar = React.memo(({ 
  productImage,
  productTitle,
  productVariant,
  options,
  defaultOptionId,
  isPreorder = false,
  buttonPrice = '€91 EUR/mo'
}: StickyProductBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options.find(opt => opt.id === defaultOptionId) || options[0]
  );

  // Show sticky bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectionChange = (option: DropdownOption) => {
    setSelectedOption(option);
  };

  const handleAddToCart = () => {
    // Handle add to cart logic here
    console.log('Adding to cart:', selectedOption);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 z-[9999] flex h-[90px] w-full items-center justify-center border-t border-[rgba(80,0,11,0.12)] bg-gradient-to-br from-[rgba(245,234,234,0.95)] to-[rgba(255,255,255,0.98)] backdrop-blur-[20px] transition-all duration-500 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 visible' 
          : 'translate-y-full opacity-0 invisible'
      }`}
      style={{
        contain: 'layout style',
        overflow: 'visible'
      }}
    >
      <div className="mx-auto flex w-full max-w-[var(--page-width,150rem)] items-center justify-between overflow-visible px-6 md:px-20">
        {/* Product Details */}
        <div className="flex items-center gap-[18px] overflow-visible opacity-100 translate-y-0">
          {/* Product Image */}
          <div className="relative flex overflow-hidden rounded-xl bg-gradient-to-br from-white to-[#f8f8f8] shadow-[0_4px_16px_rgba(80,0,11,0.08),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-400">
            <img
              src={productImage}
              alt={productTitle}
              width={60}
              height={60}
              className="h-[60px] w-[60px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 pointer-events-none" />
          </div>

          {/* Product Title */}
          <div className="text-[#50000b] font-semibold text-base leading-[1.3] antialiased max-w-[200px] md:max-w-none">
            {productTitle}
            {productVariant && (
              <div className="font-medium min-h-[1em] visible">
                ({productVariant})
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Dropdown + Button */}
        <div className="flex items-center gap-4">
          {/* Dropdown */}
          <div className="max-md:hidden">
            <ProductDropdown 
              options={options}
              defaultOptionId={defaultOptionId}
              onSelectionChange={handleSelectionChange}
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            data-preorder={isPreorder}
            className="rounded-full bg-[#50000b] px-8 py-3 text-white font-bold hover:bg-[#3a0008] transition-colors duration-200 whitespace-nowrap"
          >
            <span className="max-md:hidden">
              Add to cart <span className="font-normal">- {buttonPrice}</span>
            </span>
            <span className="md:hidden">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
});

StickyProductBar.displayName = 'StickyProductBar';
