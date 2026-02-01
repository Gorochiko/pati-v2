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

const GoldStandard = () => {
  const [isMore, setIsMore] = useState(false);
  const rowCount = isMore ? dailyStandards.length : 10;

  return (
    <section className="bg-[#eae0d2]" aria-labelledby="standard-heading">
      <Container id="standard" className="md:py-26 pt-14 pb-20" isLargeScreen>
        <div className="flex flex-col mx-auto">
          <h2 id="standard-heading" className="font-arizona md:text-[52px] text-[40px] mb-10 text-center text-[#50000B]">
            IM8: The New Gold Standard
          </h2>

          <div className="w-full md:max-w-[850px] mx-auto rounded-xl border border-main-dark-red overflow-visible md:mt-14 mt-20 relative" role="table">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-2 relative z-10">
              <div className="bg-main-dark-red p-4 pt-2.5 md:h-14 h-24 relative flex items-center border-r border-white/10 rounded-tl-[10px]">
                <div className="md:pl-8 text-white font-bold text-sm md:text-base leading-tight">
                  Daily Ultimate Essentials
                </div>
                <div className="absolute -top-16 right-1 md:right-2 h-24 w-20 md:h-32 md:w-28 z-30">
                  <img src={dailyProduct} alt="IM8" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
              </div>
              
              <div className="bg-main-dark-red p-4 pt-2.5 md:h-14 h-24 relative flex items-center rounded-tr-[10px]">
                <div className="md:pl-8 text-white font-bold text-sm md:text-base leading-tight">
                  Leading Greens Powder
                </div>
                <div className="absolute -top-16 right-1 md:right-2 h-24 w-20 md:h-32 md:w-28 z-30">
                  <img src={leadingProduct} alt="Leading" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="relative z-0">
              {Array.from({ length: rowCount }).map((_, index) => {
                const daily = dailyStandards[index];
                const leading = leadingStandards[index];
                const isLastRow = !isMore && index === rowCount - 1;

                return (
                  <div key={`row-${index}`} className="grid grid-cols-2 border-t border-main-dark-red min-h-[70px] md:min-h-0">
                    <div className={cn(
                      "flex items-center gap-2 md:gap-4 p-3 md:pl-8 md:h-14 bg-[#f5eaea] border-r border-main-dark-red",
                      isLastRow && "rounded-bl-[10px]"
                    )}>
                      <div className="shrink-0">
                        {daily.isTrue ? <RedCheck className="size-4 md:size-5" /> : <GreyX className="size-4 md:size-5" />}
                      </div>
                      <div>
                        <p className="font-bold text-[12px] md:text-[13px] text-[#50000B]">{daily.item}</p>
                        {daily.description && <p className="text-[10px] md:text-[11px] text-[#50000B] opacity-70 leading-none">{daily.description}</p>}
                      </div>
                    </div>

                    <div className={cn(
                      "flex items-center gap-2 md:gap-4 p-3 md:pl-8 md:h-14 bg-[#b6c0b1] text-[#2d3b32]",
                      isLastRow && "rounded-br-[10px]"
                    )}>
                      <div className="shrink-0">
                        {leading.isTrue ? <GreenCheck className="size-4 md:size-5" /> : <GreenX className="size-4 md:size-5" />}
                      </div>
                      <div>
                        <p className="font-bold text-[12px] md:text-[13px]">{leading.item}</p>
                        {leading.description && <p className="text-[10px] md:text-[11px] opacity-70 leading-none">{leading.description}</p>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* See More Row */}
            {!isMore && (
              <div
                className="w-full border-t border-main-dark-red bg-[#f5eaea] flex items-center justify-center p-4 cursor-pointer hover:bg-[#efe5e5] transition-colors rounded-b-[10px] relative z-10"
                onClick={() => setIsMore(true)}
              >
                <span className="font-bold text-[#50000B] text-sm">See more</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="uppercase bg-main-red hover:bg-main-dark-red rounded-full font-bold py-6 px-10 text-base" suppressHydrationWarning>
            View Supplement Facts
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default memo(GoldStandard);