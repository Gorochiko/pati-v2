'use client';

import React, { useState } from 'react';
import { COMPARISON_DATA } from './data';
import { FeatureRow } from './FeatureRow';
import Image from 'next/image';

export default function ComparisonTable() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleFeatures = COMPARISON_DATA.features.filter(
    (feature) => feature.isInitiallyVisible || isExpanded
  );

  const hasHiddenFeatures = COMPARISON_DATA.features.some(
    (feature) => !feature.isInitiallyVisible
  );

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="w-full bg-[#EAE0D2] py-12 lg:py-20" id="gold-standard">
      <div className="max-w-[150rem] mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-[50px]">
          <h2 className="font-arizona text-[#50000B] text-[40px] lg:text-[52px] font-light leading-[110%] tracking-[-1px] m-0">
            IM8: The New Gold Standard
          </h2>
          <h3 className="hidden">
            Comparison: IM8 vs. AG1. Superior Clinical Doses and Ingredient Transparency
          </h3>
        </div>

        {/* Comparison Table */}
        <div className="mt-[88px]">
          <div className="flex gap-0">
            {/* IM8 Column */}
            <div className="w-1/2">
              {/* IM8 Header */}
              <div 
                className="h-14 px-4 lg:px-10 flex items-center rounded-tl-[12px]"
                style={{ backgroundColor: COMPARISON_DATA.im8.brandColor }}
              >
                <div className="flex items-center gap-4 lg:gap-10 flex-1 flex-row-reverse">
                  <div 
                    className="relative flex-shrink-0" 
                    style={{ 
                      width: `${COMPARISON_DATA.im8.imageWidth}px`,
                      height: `${COMPARISON_DATA.im8.imageHeight}px`,
                      marginTop: `-85px`
                    }}
                  >
                    <Image
                      src={COMPARISON_DATA.im8.image}
                      alt={COMPARISON_DATA.im8.name}
                      width={COMPARISON_DATA.im8.imageWidth}
                      height={COMPARISON_DATA.im8.imageHeight}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-white font-bold text-[14px] lg:text-[16px] leading-[135%] text-left lg:pl-10">
                    {COMPARISON_DATA.im8.name}
                  </div>
                </div>
              </div>
              
              {/* IM8 Content Background */}
              <div 
                className="border border-[#50000B] border-r-0 rounded-bl-[12px] min-h-[100px]"
                style={{ backgroundColor: COMPARISON_DATA.im8.backgroundColor }}
              />
            </div>

            {/* Competitor Column */}
            <div className="w-1/2">
              {/* Competitor Header */}
              <div 
                className="h-14 px-4 lg:px-10 flex items-center rounded-tr-[12px]"
                style={{ backgroundColor: COMPARISON_DATA.competitor.brandColor }}
              >
                <div className="flex items-center gap-4 lg:gap-10 flex-1">
                  <div 
                    className="relative flex-shrink-0" 
                    style={{ 
                      width: `${COMPARISON_DATA.competitor.imageWidth}px`,
                      height: `${COMPARISON_DATA.competitor.imageHeight}px`,
                      marginTop: `-85px`
                    }}
                  >
                    <Image
                      src={COMPARISON_DATA.competitor.image}
                      alt={COMPARISON_DATA.competitor.name}
                      width={COMPARISON_DATA.competitor.imageWidth}
                      height={COMPARISON_DATA.competitor.imageHeight}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-white font-bold text-[14px] lg:text-[16px] leading-[135%] text-left lg:pl-10">
                    {COMPARISON_DATA.competitor.name}
                  </div>
                </div>
              </div>
              
              {/* Competitor Content Background */}
              <div 
                className="border border-[#50000B] rounded-br-[12px] min-h-[100px]"
                style={{ backgroundColor: COMPARISON_DATA.competitor.backgroundColor }}
              />
            </div>
          </div>

          {/* Feature Rows (positioned over backgrounds) */}
          <div className="-mt-[calc(100px)] relative z-10">
            {visibleFeatures.map((feature, index) => (
              <FeatureRow
                key={feature.id}
                im8Content={feature.im8Content}
                im8HasFeature={feature.im8HasFeature}
                competitorContent={feature.competitorContent}
                competitorHasFeature={feature.competitorHasFeature}
                isVisible={true}
                isLast={index === visibleFeatures.length - 1}
              />
            ))}
          </div>

          {/* See More/Less Button */}
          {hasHiddenFeatures && (
            <button
              onClick={handleToggle}
              className="w-full h-14 flex items-center justify-center border border-[#50000B] border-t-0 rounded-b-[12px] mt-[30px] cursor-pointer transition-all duration-300 hover:bg-[#E5D5C7] font-aeonik text-[#50000B] text-[14px] lg:text-[16px] font-medium"
              style={{ backgroundColor: COMPARISON_DATA.im8.backgroundColor }}
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          )}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-[62px]">
          <button
            className="inline-flex items-center justify-center rounded-full bg-[#A40011] text-white font-bold text-[14px] lg:text-[16px] leading-[22px] tracking-[0.32px] uppercase px-[17px] py-[13px] min-w-[272px] transition-all duration-300 hover:bg-[#8A000E] hover:shadow-lg"
            id="homepage_comparison-chart_viewmore"
          >
            View Supplement Facts
          </button>
        </div>
      </div>
    </section>
  );
}
