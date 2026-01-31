"use client";
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const navItems = [
  { label: 'Shop', hasDropdown: true },
  { label: 'Science', hasDropdown: false },
  { label: 'The Beckham Stack', hasDropdown: false },
  { label: 'Welcome from David', hasDropdown: false },
];

const rightNavItems = [
  { label: 'Reviews', hasDropdown: false },
  { label: 'Ingredients', hasDropdown: false },
  { label: 'Discover', hasDropdown: true },
];

const announcementSlides = [
  {
    id: 1,
    text: (
      <>
        <strong>2026 STARTS NOW:</strong>
        <span className="mobile-break">35% OFF — Feel Like Yourself Again</span>
      </>
    ),
  },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <a
        href="/pages/newyearoffer"
        className="relative block text-white no-underline cursor-pointer"
        style={{ 
          background: '#a40011',
          textDecoration: 'none',
        }}
      >
        {/* Currency Selector - Absolute positioned on left */}
        <div 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block"
        >
          <button 
            className="flex items-center gap-1 text-white text-xs font-bold uppercase hover:opacity-90 transition-opacity"
            style={{
              background: '#8B0013',
              padding: '4px 8px',
              borderRadius: '2px',
              letterSpacing: '0.5px',
            }}
          >
            EUR
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="max-w-[150rem] mx-auto">
          <div className="px-4 sm:px-6">
            <div className="py-2.5">
              <Swiper
                modules={[Autoplay, EffectFade]}
                loop={true}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                watchSlidesProgress={true}
                effect="fade"
                fadeEffect={{
                  crossFade: true
                }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                className="w-full"
              >
                {announcementSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="text-center">
                      <div 
                        className="uppercase"
                        style={{
                          fontFamily: '"NB Architekt", sans-serif',
                          fontSize: '14px',
                          fontWeight: '700',
                          lineHeight: '19px',
                          letterSpacing: '0.28px',
                          textAlign: 'center',
                          color: 'inherit',
                        }}
                      >
                        {slide.text}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </a>

      <style jsx>{`
        @media screen and (max-width: 768px) {
          .mobile-break {
            display: block;
          }
        }

        /* Even smaller screens */
        @media screen and (max-width: 380px) {
          :global(.announcement-text) {
            font-size: 10px !important;
            line-height: 1.25 !important;
          }
        }
      `}</style>

      {/* Main Header */}
      <header 
        className="bg-white border-b sticky top-0 z-50"
        style={{
          height: 'var(--header-height)',
          borderBottomColor: 'rgba(80, 0, 11, 0.1)',
          fontFamily: '"Aeonik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div className="max-w-[150rem] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-1 text-[14px] font-normal hover:opacity-85 transition-opacity"
                  style={{ 
                    color: 'rgb(80, 0, 11)',
                    letterSpacing: '0',
                  }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              style={{ color: 'rgb(80, 0, 11)' }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
              <a href="/" className="flex items-center">
                <span 
                  className="text-2xl lg:text-3xl font-medium tracking-[0.3em]"
                  style={{ 
                    color: 'rgb(164, 0, 17)',
                    fontWeight: '500',
                  }}
                >
                  I·M·8
                </span>
              </a>
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {rightNavItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-1 text-[14px] font-normal hover:opacity-85 transition-opacity"
                  style={{ 
                    color: 'rgb(80, 0, 11)',
                    letterSpacing: '0',
                  }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              <button 
                className="p-2 hover:opacity-85 transition-opacity" 
                aria-label="Account"
                style={{ color: 'rgb(80, 0, 11)' }}
              >
                <User className="w-5 h-5" />
              </button>
              <button 
                className="p-2 hover:opacity-85 transition-opacity" 
                aria-label="Search"
                style={{ color: 'rgb(80, 0, 11)' }}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Right Icons */}
            <div className="flex lg:hidden items-center gap-2">
              <button 
                className="p-2" 
                aria-label="Search"
                style={{ color: 'rgb(80, 0, 11)' }}
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className="p-2" 
                aria-label="Account"
                style={{ color: 'rgb(80, 0, 11)' }}
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white"
              style={{
                borderTop: '1px solid rgba(80, 0, 11, 0.1)',
              }}
            >
              <nav className="max-w-[150rem] mx-auto px-4 sm:px-6 py-4 space-y-1">
                {[...navItems, ...rightNavItems].map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center justify-between w-full py-3 text-base font-normal hover:opacity-85 transition-opacity"
                    style={{ color: 'rgb(80, 0, 11)' }}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-5 h-5" />}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
