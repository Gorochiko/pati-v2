import { beckhamProductImg, dailyProductImg } from "./mock-data";
import { ProductHeader } from "./ProductHeader";
import { BenefitRow } from "./BenefitRow";
import { PriceRow } from "./PriceRow";
import type { BenefitType } from "./types";

interface ComparisonTableProps {
  immediateBenefits: BenefitType[];
  advancedBenefits: BenefitType[];
}

export const ComparisonTable = ({ immediateBenefits, advancedBenefits }: ComparisonTableProps) => {
  return (
    <div className="mx-auto w-full max-w-245 overflow-visible rounded-2xl border border-[#E5E5E5]">
      {/* Table Header */}
      <div className="relative grid grid-cols-3 items-center overflow-visible rounded-t-2xl bg-[oklch(0.2723_0.109753_22.2781)] font-arizona text-white">
        <div className="p-4 pl-7.5 text-left text-sm tracking-wider md:text-base lg:text-lg max-md:p-2.5 max-md:py-3.5">
          Feature
        </div>
        <ProductHeader
          productImg={dailyProductImg}
          title="Daily Ultimate Essentials"
        />
        <ProductHeader
          productImg={beckhamProductImg}
          title="The Beckham Stack (Essentials + Longevity)"
        />
      </div>

      {/* Immediate Benefits Section */}
      <div className="grid grid-cols-3 gap-3.5 border-y border-[#E5E5E5] bg-[#fdf8f8] px-4 py-2 text-xs font-medium md:gap-5 md:px-5 md:py-2.5 md:text-sm lg:gap-6 lg:px-6 lg:py-3 lg:text-[13px]">
        <div className="uppercase">Immediate Essentials Benefit</div>
        <div className="self-center text-center">Essentials</div>
        <div className="self-center text-center">Beckham Stack</div>
      </div>
      
      <div>
        {immediateBenefits.map((benefit) => (
          <BenefitRow key={benefit.type} benefit={benefit} />
        ))}
      </div>

      {/* Advanced Benefits Section */}
      <div className="w-full border-y border-[#E5E5E5] bg-[#fdf1ea] px-4 py-2 text-xs font-medium uppercase md:px-5 md:py-2.5 md:text-sm lg:px-6 lg:py-3 lg:text-[13px]">
        Advanced Longevity Benefit
      </div>
      
      <div>
        {advancedBenefits.map((benefit) => (
          <BenefitRow key={benefit.type} benefit={benefit} />
        ))}
      </div>

      {/* Pricing Rows */}
      <PriceRow 
        label="Monthly Subscription" 
        essentialsPrice="$178" 
        stackPrice="$336" 
      />
      <PriceRow 
        label="Cost per Daily Serving" 
        essentialsPrice="$5.93" 
        stackPrice="$11.20" 
      />
      <PriceRow 
        label="Savings vs. Buying Separately" 
        essentialsPrice="-" 
        stackPrice="$37/month"
        isLast
        highlightStack
      />
    </div>
  );
};
