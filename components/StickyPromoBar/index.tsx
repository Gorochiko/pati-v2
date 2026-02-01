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
            <div className="im8-container px-3 md:px-4 lg:px-6">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 md:gap-4 lg:gap-6 py-2 md:py-3 lg:py-4">
                    {/* Left: Logo */}
                    <a href="/" className="flex-shrink-0" aria-label="Go to homepage">
                        <img
                            src="https://im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481&width=352"
                            alt="IM8"
                            className="h-6 md:h-8 lg:h-10 w-auto"
                            loading="lazy"
                        />
                    </a>

                    {/* Center: Text */}
                    <div
                        className="text-white text-[10px] md:text-xs lg:text-sm font-medium leading-tight text-center"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                    >
                        <strong className="font-bold block md:inline">2026 STARTS NOW:</strong>{' '}
                        <span className="hidden sm:inline">35% OFF — Feel Like Yourself Again</span>
                        <span className="sm:hidden">35% OFF</span>
                    </div>

                    {/* Right: CTA Button */}
                    <a
                        href="/pages/newyearoffer"
                        className="
                        min-w-[80px] md:min-w-[180px] lg:min-w-[272px] 
                        px-3 md:px-4 lg:px-[17px] 
                        py-2 md:py-2.5 lg:py-[13px] 
                        rounded-full bg-[#a40011]
                        text-white text-xs md:text-sm lg:text-base font-bold leading-tight tracking-wide uppercase
                        inline-flex items-center justify-center border-none cursor-pointer
                        transition-all duration-200 hover:brightness-110 active:scale-[0.98]
                        whitespace-nowrap"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                    >
                        <span className="hidden md:inline">Get Started</span>
                        <span className="md:hidden">Start</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
