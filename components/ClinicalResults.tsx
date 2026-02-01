"use client";
import { useState } from 'react';

const stats = [
  { emoji: '⚡', value: '95%', label: 'More energy' },
  { emoji: '🦠', value: '85%', label: 'Better gut health' },
  { emoji: '😴', value: '80%', label: 'Better sleep quality' },
  { emoji: '🧠', value: '70%', label: 'Sharper focus' },
];

export const ClinicalResults = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="rounded-[16px] p-6 mt-0 mb-4"
      style={{
        background: 'linear-gradient(135deg, #f0f9f4 0%, #e8f5ec 100%)',
        border: '1.5px solid #16A34A',
      }}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-3 mb-5">
        <h3 
          className="text-[18px] lg:text-[22px] font-semibold text-[#50000b] m-0 leading-[1.2]"
          style={{ fontFamily: '"ABC Arizona Flare", serif' }}
        >
          Clinically Proven Results
        </h3>
        <span 
          className="inline-flex items-center justify-center h-[25.891px] px-[15.178px] py-[4.464px_15.178px_3.427px] bg-[#16A34A] rounded-[17.856px] text-white text-[11px] font-bold uppercase tracking-[0.5px] whitespace-nowrap flex-shrink-0"
        >
          90-DAY CLINICAL STUDY
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-start">
            <div className="flex flex-row items-baseline gap-[3px] mb-1">
              <span className="text-[28px] leading-[1]">{stat.emoji}</span>
              <span 
                className="text-[#16A34A] text-[26px] leading-[26px]"
                style={{ fontFamily: '"ABC Arizona Flare", Georgia, serif', fontWeight: 400 }}
              >
                {stat.value}
              </span>
            </div>
            <span className="text-[13px] font-medium text-[#50000b] leading-[1.3]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-[11px] text-[#666] mb-4 italic">
        *Based on 12-week randomized controlled trial by San Francisco Research Institute
      </p>

      {/* Footer */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
        {/* Expandable Section */}
        <div className="flex-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-transparent border-none p-0 cursor-pointer text-[14px] font-semibold text-[#50000b] underline decoration-1 underline-offset-[3px] flex items-center gap-[6px] transition-opacity duration-200 hover:opacity-70"
            style={{ fontFamily: '"ABC Arizona Flare", serif' }}
            aria-expanded={isExpanded}
            suppressHydrationWarning
          >
            Why These Results Matter?
            <svg 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path 
                d="M2 4L6 8L10 4" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-400 ${
              isExpanded ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <p className="text-[13px] leading-[1.6] text-[#50000b] max-w-[480px]">
              Unlike most supplements with unverified claims, IM8 is backed by a 12-week randomized 
              controlled clinical trial. Every ingredient is NSF Certified for Sport, verifying 
              exact dosages and testing for 280+ banned substances - the same certification trusted 
              by world-class athletes like Aryna Sabalenka, World No. 1 tennis player.
            </p>
          </div>
        </div>

        {/* Certification Logos */}
        <div className="flex items-center gap-2 flex-shrink-0 self-end lg:self-auto">
          <img 
            src="https://im8health.com/cdn/shop/files/Vector_38d1c63f-d300-48b5-b6e6-084b0cf0086d.png?v=1764063546&width=100"
            alt="NSF Certified"
            className="h-[40px] lg:h-[50px] w-auto object-contain"
            loading="lazy"
          />
          <img 
            src="https://im8health.com/cdn/shop/files/NSF_CONTENTS_CERTIFIED_White_Vert_2.png?v=1764063546&width=100"
            alt="NSF Contents Certified"
            className="h-[40px] lg:h-[50px] w-auto object-contain"
            loading="lazy"
          />
          <img 
            src="https://im8health.com/cdn/shop/files/b9a15702-8e60-441d-b1fd-ce12f6742dcb_svg.png?v=1764063545&width=100"
            alt="Certification"
            className="h-[40px] lg:h-[50px] w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
