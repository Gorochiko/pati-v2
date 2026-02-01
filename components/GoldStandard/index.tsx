"use client";
import { memo, useState } from "react";
import Container from "../ui/Container";
import {
  dailyProduct,
  dailyStandards,
  leadingProduct,
  leadingStandards,
} from "./data";
import RedCheck from "../../public/icons/red-check";
import GreyX from "../../public/icons/grey-x";
import GreenX from "../../public/icons/green-x";
import GreenCheck from "../../public/icons/green-check";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * GoldStandard Section Component
 * Displays comparison between IM8 Daily Ultimate and leading greens powder
 */
const GoldStandard = () => {
  const [isMore, setIsMore] = useState(false);
  
  const redData = isMore
    ? [...dailyStandards]
    : [...dailyStandards.slice(0, 10)];
  const greenData = isMore
    ? [...leadingStandards]
    : [...leadingStandards.slice(0, 10)];

  return (
    <section className="bg-[#eae0d2]" aria-labelledby="standard-heading">
      <Container id="standard" className="md:py-26 pt-14 pb-20" isLargeScreen>
        <div className="flex flex-col mx-auto">
          <h2 id="standard-heading" className="font-arizona md:text-[52px] text-[40px] mb-10 text-center text-[#50000B]">
            IM8: The New Gold Standard
          </h2>
          
          {/* Comparison Table */}
          <div className="w-full rounded-xl grid grid-cols-2 md:mt-14 mt-20 border border-main-dark-red overflow-visible" role="table" aria-label="Product comparison">
            {/* IM8 Daily Ultimate Column */}
            <div className="rounded-l-xl overflow-visible" role="columnheader">
              <div className="bg-main-dark-red p-4 pt-2.5 rounded-tl-xl md:h-14 h-20.5 relative overflow-visible">
                <div className="md:pl-10 pt-1 text-white font-bold max-md:text-sm">
                  Daily Ultimate Essentials
                </div>
                <div className="absolute -top-20 right-2 md:right-4 h-28 w-24 z-20">
                  <img
                    src={dailyProduct}
                    alt="Daily Ultimate Essentials product"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {redData.map((item, index) => (
                <div 
                  key={`daily-${index}`}
                  className={cn(
                    "flex items-center md:gap-5 gap-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 bg-[#f5eaea] border-main-dark-red not-last:border-b border-r",
                    isMore && "last:rounded-bl-xl"
                  )}
                  role="cell"
                >
                  <div aria-hidden="true">
                    {item.isTrue ? (
                      <RedCheck className="max-md:size-4" />
                    ) : (
                      <GreyX className="max-md:size-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold max-md:text-[13px] text-[#50000B]">{item.item}</p>
                    {item.description && (
                      <p className="text-xs max-md:text-[11px] text-[#50000B]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Leading Greens Powder Column */}
            <div className="rounded-r-xl overflow-visible" role="columnheader">
              <div className="bg-main-dark-red p-4 pt-2.5 rounded-tr-xl md:h-14 h-20.5 relative overflow-visible">
                <div className="md:pl-10 pt-1 text-white font-bold max-md:text-sm">
                  Leading Greens Powder
                </div>
                <div className="absolute -top-20 right-2 md:right-4 h-28 w-24 z-20">
                  <img
                    src={leadingProduct}
                    alt="Leading greens powder product"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {greenData.map((item, index) => (
                <div 
                  key={`leading-${index}`}
                  className={cn(
                    "flex items-center md:gap-5 gap-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 text-[#2d3b32] bg-[#b6c0b1] border-main-dark-red not-last:border-b border-l",
                    isMore && "last:rounded-br-xl"
                  )}
                  role="cell"
                >
                  <div aria-hidden="true">
                    {item.isTrue ? (
                      <GreenCheck className="max-md:size-4" />
                    ) : (
                      <GreenX className="max-md:size-4" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold max-md:text-[13px]">{item.item}</p>
                    {item.description && (
                      <p className="text-xs max-md:text-[11px]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* See More Button */}
            {!isMore && (
              <div
                className="col-span-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 border-t border-main-dark-red rounded-b-xl bg-[#f5eaea] flex items-center justify-center cursor-pointer hover:bg-[#efe5e5] transition-colors"
                onClick={() => setIsMore(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsMore(true);
                  }
                }}
                suppressHydrationWarning
              >
                <span className="font-bold text-[#50000B]">See more</span>
              </div>
            )}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center  mt-10">
          <Button className="uppercase bg-main-red hover:bg-main-dark-red rounded-full transition duration-300 font-bold pt-5 pb-5 px-8 text-base min-w-68" suppressHydrationWarning>
            View Supplement Facts
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default memo(GoldStandard);
