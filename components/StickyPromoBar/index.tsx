"use client";
import { useHeaderVisibility } from '@/hooks/use-header-visibility';

export const StickyPromoBar = () => {
    const isVisible = useHeaderVisibility(100);

    return (
        <div
            className={`fixed w-full z-[12] top-0 left-0 transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            style={{
                background: '#50000b',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div className="im8-container">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6 py-3 md:py-4">
                    {/* Left: Logo */}
                    <a href="/" className="flex-shrink-0" aria-label="Go to homepage">
                        <img
                            src="https://im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481&width=352"
                            alt="IM8"
                            className="h-8 md:h-10 w-auto"
                            loading="lazy"
                        />
                    </a>

                    {/* Center: Text */}
                    <div
                        className="text-white text-xs md:text-sm lg:text-base font-medium leading-tight text-center"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                    >
                        <strong className="font-bold">2026 STARTS NOW:</strong> 35% OFF — Feel Like Yourself Again
                    </div>

                    {/* Right: CTA Button */}
                    <a
                        href="/pages/newyearoffer"
                        className="
                        min-w-[272px] px-[17px] py-[13px] 
                        rounded-[100px] bg-[#a40011]
                        text-white text-[16px] font-bold leading-[22px] tracking-[0.32px] uppercase
                        inline-flex items-center justify-center border-none cursor-pointer
                        transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};
