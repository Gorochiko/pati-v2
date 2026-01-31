"use client";
import { useState } from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { ClinicalResults } from './ClinicalResults';
import { FormatSelector } from './FormatSelector';
import { SubscriptionSelector } from './SubscriptionSelector';
import { TransformationProgram } from './TransformationProgram';

export const ProductInfo = () => {
  const [selectedFormat, setSelectedFormat] = useState<'jar' | 'sachet'>('jar');
  const [selectedPlan, setSelectedPlan] = useState<'30day' | '60day' | '90day'>('90day');

  const planPrices = {
    '30day': { total: '$89.00', monthly: '$89' },
    '60day': { total: '$168.00', monthly: '$84' },
    '90day': { total: '$235.00', monthly: '$78.33' },
  };

  return (
    <div className="space-y-6">
      {/* Reviews & Stats */}
      <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-0 lg:gap-2 text-[14px] font-semibold text-[#50000b] my-0 lg:my-[10px_0_14px_0]">
        <div className="inline-flex items-center gap-[6px] lg:gap-[6px]">
          {/* Stars with gradient */}
          <span className="inline-flex items-center gap-[2px]">
            <svg width="0" height="0" className="absolute pointer-events-none">
              <defs>
                <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#c41a2a' }} />
                  <stop offset="50%" style={{ stopColor: '#a40011' }} />
                  <stop offset="100%" style={{ stopColor: '#8a000e' }} />
                </linearGradient>
              </defs>
            </svg>
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px]" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(164, 0, 17, 0.3))' }}
              >
                <path 
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="url(#star-gradient)"
                />
              </svg>
            ))}
          </span>
          <span className="font-bold text-[15px] lg:text-[15px] text-[#3d0008] tracking-[-0.02em]">4.8</span>
          <span className="text-[14px] lg:text-[14px] text-[#50000b] font-semibold">from 11,825 Reviews</span>
        </div>
        
        <div className="inline-flex items-center gap-[4px] lg:gap-[6px] flex-wrap text-[13px] lg:text-[14px]">
          <span className="text-[#d4c4b8] mx-[2px] font-light hidden lg:inline">|</span>
          <span className="text-[#6b4c3a] font-medium">622k+ customer purchases</span>
          <span className="text-[#d4c4b8] font-light inline">|</span>
          <span className="text-[#6b4c3a] font-medium">19M+ servings</span>
        </div>
      </div>

      {/* Title */}
      <div className="mb-4">
        <h1 className="text-[26px] lg:text-[32px] font-normal leading-[1.3] text-[#50000b] break-words m-0" style={{ fontFamily: '"ABC Arizona Flare", serif' }}>
          Daily Ultimate Essentials:<br />
          All-in-One Supplement
        </h1>
      </div>

      {/* Description */}
      <div className="text-[#50000b] text-[16px] font-normal leading-[135%]" style={{ fontFamily: '"Aeonik", sans-serif' }}>
        <p className="mb-4">
          Engineered for peak absorption, this comprehensive formula replaces the need for 16 daily supplements with 92 nutrient-rich ingredients in one delicious drink.*
        </p>
        
        {/* Benefits */}
        {/* <ul className="list-none space-y-2 pl-0">
          <li>
            <strong>Energy:</strong> Unleash your natural energy
          </li>
          <li>
            <strong>Immunity:</strong> Fortify your body's defence
          </li>
          <li>
            <strong>Digest:</strong> Optimize your body's digestive health
          </li>
        </ul> */}
      </div>

      {/* Clinical Results */}
      <ClinicalResults />

      {/* Format Selector */}
      <FormatSelector />

      {/* Subscription Selector */}
      <SubscriptionSelector />

      {/* CTA Button */}
      <button className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold text-base transition-all duration-200 shadow-im8 hover:shadow-im8-lg">
        START MY 90-DAY TRANSFORMATION PROGRAM – {planPrices[selectedPlan].monthly} USD/mo
      </button>

      {/* Discount Note */}
      <p className="text-center text-sm text-muted-foreground">
        ✨ New Year discount automatically applied at checkout
      </p>

      {/* Transformation Program */}
      <TransformationProgram />

      {/* Guarantee */}
      <div className="flex items-start gap-3 p-4 bg-success/10 rounded-xl">
        <ShieldCheck className="w-8 h-8 text-success flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-foreground">30-Day 100% Money Back Guarantee</h4>
          <p className="text-sm text-muted-foreground mt-0.5">
            We're so confident you'll love it, take a full 30 days to decide
          </p>
        </div>
      </div>

      {/* HSA/FSA */}
      <div className="text-center text-sm">
        <span className="font-medium">Pay with HSA/FSA</span>
        <span className="text-muted-foreground"> – Save an average of 30% </span>
        <a href="#" className="text-primary hover:underline">Learn more</a>
      </div>
    </div>
  );
};
