"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { url: 'https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&width=1946', alt: 'Quarterly' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel01.jpg?v=1761040602&width=1946', alt: 'Forever Jar' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg?v=1761040602&width=1946', alt: 'Daily Ultimate Essentials: All-in-One Supplement', badge: 'Best Seller' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel02.jpg?v=1761042620&width=1946', alt: 'Daily Ultimate Essentials: All-in-One Supplement' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel03.jpg?v=1761040602&width=1946', alt: 'Daily Ultimate Essentials: All-in-One Supplement' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel04.jpg?v=1761040602&width=1946', alt: 'Daily Ultimate Essentials: All-in-One Supplement' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel05.jpg?v=1761040601&width=1946', alt: 'Daily Ultimate Essentials: All-in-One Supplement' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel06.jpg?v=1761040602&width=1946', alt: 'Daily Ultimate Essentials: All-in-One Supplement' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel07.jpg?v=1761040602&width=1946', alt: 'Daily Ultimate Essentials: All-in-One Supplement' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel02.jpg?v=1761040602&width=1946', alt: 'Forever Jar' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel03.jpg?v=1761040601&width=1946', alt: 'Forever Jar' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel04.jpg?v=1761040602&width=1946', alt: 'Forever Jar' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel05.jpg?v=1761040602&width=1946', alt: 'Forever Jar' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel06.jpg?v=1761040602&width=1946', alt: 'Forever Jar' },
  { url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel07.jpg?v=1761040602&width=1946', alt: 'Forever Jar' },
];

export const ProductGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const visibleThumbs = 7;

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollThumbsUp = () => {
    setThumbStart((prev) => Math.max(0, prev - 1));
  };

  const scrollThumbsDown = () => {
    setThumbStart((prev) => Math.min(images.length - visibleThumbs, prev + 1));
  };

  const visibleThumbnails = images.slice(thumbStart, thumbStart + visibleThumbs);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-stretch">
      {/* Thumbnails - Vertical on Desktop */}
      <div className="hidden lg:flex flex-col items-center justify-between gap-2 order-1 self-stretch">
        <button
          onClick={scrollThumbsUp}
          disabled={thumbStart === 0}
          className="p-1 hover:bg-muted rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
          aria-label="Scroll up"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col gap-1.5 flex-1 justify-between py-0">
          {visibleThumbnails.map((img, idx) => {
            const actualIndex = thumbStart + idx;
            return (
              <button
                key={actualIndex}
                onClick={() => setSelectedIndex(actualIndex)}
                className={`relative w-[72px] h-[72px] rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  selectedIndex === actualIndex
                    ? 'border-primary shadow-im8'
                    : 'border-transparent hover:border-muted-foreground/30'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                {img.badge && (
                  <span className="absolute bottom-1 left-1 bg-primary text-primary-foreground text-[8px] font-bold px-1 py-0.5 rounded">
                    {img.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={scrollThumbsDown}
          disabled={thumbStart >= images.length - visibleThumbs}
          className="p-1 hover:bg-muted rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image */}
      <div className="relative flex-1 order-2">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-im8-cream">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex].url}
              alt={images[selectedIndex].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Badge for main image */}
          {images[selectedIndex].badge && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded uppercase">
              {images[selectedIndex].badge}
            </span>
          )}

          {/* NSF Badge */}
          <div className="absolute top-4 right-4 flex gap-2">
            <img 
              src="https://im8health.com/cdn/shop/files/Vector_38d1c63f-d300-48b5-b6e6-084b0cf0086d.png?v=1764063546&width=100"
              alt="NSF Certified"
              className="w-10 h-10 object-contain"
            />
            <img 
              src="https://im8health.com/cdn/shop/files/NSF_CONTENTS_CERTIFIED_White_Vert_2.png?v=1764063546&width=100"
              alt="NSF Contents Certified"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card hover:bg-background transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-card hover:bg-background transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Thumbnails - Horizontal on Mobile */}
      <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 order-3 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              selectedIndex === idx
                ? 'border-primary'
                : 'border-transparent'
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
