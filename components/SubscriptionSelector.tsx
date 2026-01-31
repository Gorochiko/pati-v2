"use client";
import { useState } from 'react';

const plans = [
  {
    id: '90day',
    name: '90-Day Supply',
    discount: '(Save 30%)',
    discountColor: 'text-green-600', // Sử dụng class Tailwind
    price: '€91',
    period: '/mo',
    billing: 'Billed €273,00 EUR every 12 weeks',
    pricePerServing: '€3,03 EUR / serving',
    leftBadge: 'NEW YEAR OFFER',
    rightBadge: 'BEST VALUE',
    isQuarterly: true,
    features: [
      '🎓 Exclusive Access to 90 Day IM8 Transformation Program (see below)',
      '💰 Maximum savings - lowest price per serving',
      '👦 Share with family and friends',
      '🎁 Free Daily Ultimate Mixer (US$18)',
      '🚚 Free Shipping to US, UK, CA, and most of EU and APAC',
      '⏸️ Cancel or pause anytime',
      '🎁 Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)',
    ],
  },
  {
    id: '30day',
    name: '30-Day Supply',
    discount: '(Save 20%)',
    discountColor: 'text-[#50000b]',
    price: '€105',
    period: '/mo',
    billing: 'Billed €105,00 EUR every 4 weeks',
    pricePerServing: '€3,50 EUR / serving',
    features: [
      '30-day money back guarantee',
      'Cancel or pause anytime',
      'Free Shipping to US, UK, CA, and most of EU and APAC',
      'Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)',
    ],
  },
];

export const SubscriptionSelector = () => {
  const [selectedPlan, setSelectedPlan] = useState('90day');

  return (
    <fieldset className="border-none p-0 my-4">
      <legend className="p-0 mb-3">
        <div className="font-body text-[16px] font-bold text-[#50000b]">
          2. Subscribe &amp; Save:
        </div>
      </legend>
      
      <div className="flex flex-col gap-3">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className="relative"
          >
            <input
              type="radio"
              id={`plan-${plan.id}`}
              name="Plan"
              className="absolute opacity-0 pointer-events-none"
              checked={selectedPlan === plan.id}
              onChange={() => setSelectedPlan(plan.id)}
            />
            <label
              htmlFor={`plan-${plan.id}`}
              className={`
                block p-4 rounded-[16px] cursor-pointer transition-all shadow-im8 duration-200
                ${plan.leftBadge || plan.rightBadge ? 'pt-5' : 'p-4'}
                ${selectedPlan === plan.id 
                  ? 'border-[1px] border-[#A40011] bg-[#A40011]/[0.02]' 
                  : 'border border-[#50000b]/20 bg-transparent'}
              `}
            >
              {/* Checkbox Icon */}
              <div 
                className={`
                  inline-block w-6 h-6 min-w-[24px] mr-1 align-top shrink-0 transition-all
                  bg-contain bg-no-repeat bg-center
                `}
                style={{
                  backgroundImage: selectedPlan === plan.id 
                    ? 'url(https://im8health.com/cdn/shop/t/121/assets/radio_fill.svg)' 
                    : 'url(https://im8health.com/cdn/shop/t/121/assets/radio_blank.svg)'
                }}
              />
              
              <div className="inline-block w-[calc(100%-36px)] align-top">
                {/* Left Badge */}
                {plan.leftBadge && (
                  <div className="absolute left-4 -top-[9px] bg-[#FEC63F] text-[#50000b] text-[10px] font-bold px-[15px] py-[5px] rounded-full uppercase tracking-normal leading-[8px] font-architekt">
                    {plan.leftBadge}
                  </div>
                )}
                
                {/* Right Badge */}
                {plan.rightBadge && (
                  <div className="absolute right-4 -top-[9px] bg-[#a40011] text-white text-[10px] font-bold px-[15px] py-[5px] rounded-full uppercase tracking-normal leading-[8px] font-architekt">
                    {plan.rightBadge}
                  </div>
                )}
                
                {/* Top Row */}
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-body text-[15px] font-medium text-[#50000b]">
                    {plan.name}{' '}
                    <span className={plan.discountColor}>{plan.discount}</span>
                  </span>
                  
                  <span className="text-[#50000b]">
                    <span className="font-body text-[16px] font-medium">{plan.price}</span>
                    <span className="text-[13px] opacity-75">{plan.period}</span>
                  </span>
                </div>
                
                {/* Bottom Row */}
                <div className="flex justify-between items-center text-[13px] text-[#50000b] mb-3">
                  <span className="opacity-75">{plan.billing}</span>
                  <span className="font-medium whitespace-nowrap">{plan.pricePerServing}</span>
                </div>
                
                {/* Features List */}
                <ul className="list-none p-0 m-0">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="font-body text-[13px] text-[#50000b] leading-[1.6] mb-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </label>
          </div>
        ))}
        
        {/* One Time Purchase */}
        <div className="text-center m-0 p-0">
          <a 
            href="#" 
            className="inline-block font-body text-[14px] font-medium text-[#50000b] underline underline-offset-[3px] transition-opacity hover:opacity-80"
            onClick={(e) => e.preventDefault()}
          >
            One Time Purchase <span className="font-medium">€130</span>
          </a>
        </div>
      </div>
    </fieldset>
  );
};