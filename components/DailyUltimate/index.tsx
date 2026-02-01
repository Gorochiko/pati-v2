import { memo } from "react";
import Container from "../ui/Container";
import { bgImg, checkIcon, productImg } from "./data";
import { Button } from "@/components/ui/button";

/**
 * DailyUltimate Welcome Kit Section Component
 * Displays the welcome kit offer with pricing breakdown
 */
const DailyUltimate = () => {
  return (
    <section 
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      aria-labelledby="daily-ultimate-heading"
    >
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 -z-10 md:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
        aria-hidden="true"
      />
      
      <Container id="get-started" className="pt-7.5" isLargeScreen>
        {/* Mobile Heading */}
        <h2 id="daily-ultimate-heading" className="font-arizona text-[28px] leading-8 uppercase tracking-wider md:hidden text-center max-md:mb-7.5 text-[#50000B]">
          Get Started with IM8 for Daily Ultimate Nutrition
        </h2>
        
        <div className="md:py-10 pb-0 grid md:grid-cols-2">
          {/* Pricing Section */}
          <div>
            {/* Desktop Heading */}
            <h2 className="pb-7.5 font-arizona text-[40px] leading-12 uppercase tracking-wider max-md:hidden text-[#50000B]">
              Get Started with IM8 for Daily Ultimate Nutrition
            </h2>
            
            {/* Price Breakdown */}
            <div className="flex flex-col text-lg text-[#50000B]">
              <div className="flex items-center justify-between font-bold">
                <p>Daily Ultimate Essentials</p>
                <p>$162</p>
              </div>
              <hr className="bg-[#160505] my-2.5 h-0.5" />
              
              <p className="uppercase text-[#7e7e7e] text-xs font-bold mb-1.25">
                FIRST TIME PURCHASE:
              </p>
              
              {/* Free Items List */}
              <div className="flex items-start justify-between mb-1.25">
                <p className="w-[65%] font-medium py-1.25 max-md:font-bold">
                  Signature Red Cup
                </p>
                <div className="flex items-center gap-2">
                  <s className="text-[#7e7e7e] font-medium text-base">$52</s>
                  <p className="font-bold w-22.5 text-right">Free</p>
                </div>
              </div>
              
              <div className="flex items-start justify-between mb-1.25">
                <p className="w-[65%] font-medium py-1.25 max-md:font-bold">
                  Daily Ultimate Essentials Single-Serve Storage Box
                </p>
                <div className="flex items-center gap-2">
                  <s className="text-[#7e7e7e] font-medium text-base">$14</s>
                  <p className="font-bold w-22.5 text-right">Free</p>
                </div>
              </div>
              
              <div className="flex items-start justify-between mb-1.25">
                <p className="w-[65%] font-medium py-1.25 max-md:font-bold">
                  5x Bonus Daily Ultimate Essentials Single-Serve Sachets
                </p>
                <div className="flex items-center gap-2">
                  <s className="text-[#7e7e7e] font-medium text-base">$34</s>
                  <p className="font-bold w-22.5 text-right">Free</p>
                </div>
              </div>
              
              <hr className="bg-[#160505] my-2.5 h-0.5" />
              
              {/* Total */}
              <div className="flex items-start justify-between mb-1.25">
                <p className="font-bold">Total</p>
                <div className="flex items-center">
                  <p className="text-[#7e7e7e] font-medium text-base">
                    Save $100
                  </p>
                  <p className="font-bold w-22.5 text-right">$162</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button className="w-full rounded-full text-white bg-main-red hover:bg-main-dark-red transition duration-300 md:uppercase text-base font-bold h-fit md:mb-2.5 md:mt-7.5 mt-10 pb-3.25 pt-3.75 px-4.25 cursor-pointer" suppressHydrationWarning>
              Get your Free IM8 Welcome Kit Now**
            </Button>
            
            {/* Guarantees */}
            <div className="flex max-md:flex-col items-center md:gap-4 gap-0 w-full justify-center my-4 text-[#50000B]">
              <div className="flex items-center gap-2">
                <img src={checkIcon} alt="" className="mb-px" aria-hidden="true" />
                <span>
                  <strong>30-Day</strong> money back guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={checkIcon} alt="" className="mb-px" aria-hidden="true" />
                <span>
                  <strong>Update</strong> or <strong>cancel</strong> anytime
                </span>
              </div>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="max-md:order-first">
            <img 
              src={productImg} 
              alt="Daily Ultimate Essentials welcome kit with products" 
              loading="lazy" 
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(DailyUltimate);
