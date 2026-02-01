import { memo } from "react";
import FiveStars from "../../public/icons/five-stars";
import { bgImg, bgImgSm } from "./data";
import Carousel from "./carousel";

/**
 * Ambassadors Section Component
 * Displays ambassador testimonials with video carousel
 */
const Ambassadors = () => {
  return (
    <section 
      id="ambassadors" 
      className="relative md:py-26 py-14 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      aria-labelledby="ambassadors-heading"
    >
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 -z-10 md:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImgSm})`,
        }}
        aria-hidden="true"
      />
      
      <div className="flex flex-col gap-14">
        {/* Section Header */}
        <header className="flex flex-col gap-6 items-center justify-center">
          <div className="flex items-center gap-4">
            <FiveStars aria-hidden="true" />
            <p className="uppercase text-sm text-[#50000B] font-nb">Feel The Difference</p>
          </div>
          <h2 id="ambassadors-heading" className="font-arizona md:text-[54px] text-[40px] leading-11 text-center text-[#50000B]">
            What Our IM8 Ambassadors Are Saying
          </h2>
        </header>
        
        {/* Carousel */}
        <Carousel />
      </div>
    </section>
  );
};

export default memo(Ambassadors);
