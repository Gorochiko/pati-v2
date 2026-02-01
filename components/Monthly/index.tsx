import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  checkIcon,
  ingredients,
  pillBg,
  pillBgSm,
  productImg,
} from "./data";

const MonthlyBreakdown = () => {
  return (
    <div className="bg-[#f5eaea] overflow-x-hidden">
      <Container isLargeScreen className="max-lg:px-0!">
        <div className="flex max-md:hidden overflow-hidden min-h-[600px] lg:min-h-[700px]">
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full md:w-[47%] lg:w-[45%] relative pt-10 md:pt-12 lg:pt-16 pl-5 md:pl-10 lg:pl-14 pb-10 md:pb-12 lg:pb-16">
            <div className="w-full h-full absolute top-0 left-0 opacity-25 overflow-hidden">
              <img
                src={pillBg}
                alt="background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h1 className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-arizona leading-tight md:leading-snug lg:leading-10 z-10 text-[#50000B]">
              Replaces 16
              <br />
              Supplements.
              <br />
              Saving You Money.
            </h1>
            <div className="z-10">
              <Button
                className="uppercase h-fit w-auto md:w-[45%] lg:w-[38%] xl:w-[32%] rounded-full bg-main-red hover:bg-main-dark-red duration-300 transition min-w-[200px] md:min-w-[220px] lg:min-w-68 font-bold pt-3.25 pb-2.75 px-5 md:px-6 lg:px-6.25 text-sm md:text-base cursor-pointer"
                suppressHydrationWarning
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative w-full md:w-[53%] lg:w-[55%] flex flex-col pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-12 lg:pb-16 pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-6 md:pr-10 lg:pr-16 xl:pr-20">
            <div className="absolute -left-[28%] md:-left-[32%] lg:-left-[35%] top-16 md:top-20 lg:top-24 w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[350px] z-10">
              <div className="w-full relative">
                <div className="absolute -left-18 md:-left-20 lg:-left-24 xl:-left-28 top-1/2 -translate-y-1/2 p-3 md:p-4 lg:p-5 xl:p-6 z-20 flex items-center justify-center flex-col gap-1 md:gap-1.5 lg:gap-2 text-center shadow-2xl rounded-full bg-[#50000B] text-white w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56">
                  <p className="uppercase text-[9px] md:text-[10px] lg:text-[11px] font-bold tracking-wide px-1">ANNUAL SAVINGS</p>
                  <div className="font-arizona leading-tight">
                    <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[28px] font-normal">$2,532 - $3,000</p>
                    <p className="text-xs md:text-sm lg:text-base mt-0.5 md:mt-1">per year</p>
                  </div>
                  <p className="text-[9px] md:text-[10px] lg:text-[11px] mt-0.5 md:mt-1 px-2">
                    when switching to IM8
                  </p>
                </div>
                <img src={productImg} alt="product" className="w-full h-auto relative z-10" />
              </div>
            </div>
            <div className="w-full relative z-20">
              <h1 className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-arizona leading-[1.2] text-center text-[#50000B] mb-6 md:mb-8 lg:mb-10">
                Monthly Breakdown
              </h1>
              <div className="flex flex-col gap-2.5 md:gap-3 lg:gap-3.5 text-[#50000B]">
                {ingredients.map((item) => (
                  <div key={item.item} className="flex items-center justify-between gap-2 md:gap-3 lg:gap-4">
                    <div className="flex items-center gap-2 md:gap-2.5">
                      <div className="flex items-center gap-1 md:gap-1.5">
                        <div className="h-[1.5px] w-8 md:w-10 lg:w-12 bg-[#50000B]"></div>
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#9b1b1f] rounded-full flex-shrink-0"></div>
                      </div>
                      <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-tight">{item.item}</p>
                    </div>
                    <s className="font-nb opacity-60 text-[13px] md:text-[14px] lg:text-[15px] flex-shrink-0">€{item.cost}</s>
                  </div>
                ))}
              </div>
              <div className="pt-6 md:pt-7 lg:pt-8">
                <div className="border-2 md:border-[1px] lg:border-[1px] border-[#50000B] rounded-xl md:rounded-2xl w-full overflow-hidden">
                  <div className="bg-[#f5eaea] py-2.5 md:py-3 lg:py-3.5 px-4 md:px-5 lg:px-6 flex items-center justify-between border-b-1 md:border-b-[1px] lg:border-b-[1px] border-[#50000B]">
                    <p className="text-[13px] md:text-[14px] lg:text-[15px] text-[#50000B]">Your Traditional Supplements</p>
                    <s className="font-nb opacity-60 text-[13px] md:text-[14px] lg:text-[15px]">€357</s>
                  </div>
                  <div className="py-2.5 md:py-3 lg:py-3.5 px-4 md:px-5 lg:px-6 flex items-center justify-between bg-white">
                    <p className="font-bold text-[13px] md:text-[14px] lg:text-[15px] text-[#50000B]">IM8 Daily Ultimate Essentials</p>
                    <p className="font-nb text-[13px] md:text-[14px] lg:text-[15px] text-[#50000B]">€185</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:hidden px-4 py-12 relative w-full">
          <div className="absolute inset-0 flex items-start justify-center pt-10 overflow-hidden pointer-events-none">
            <img src={pillBgSm} alt="background" className="object-contain w-full h-auto opacity-20" />
          </div>

          <div className="relative z-10 flex flex-col">
            <h1 className="text-center text-[28px] font-arizona leading-tight text-[#50000B] mb-8">
              Replaces 16 <br /> Supplements, <br /> Saving You Money.
            </h1>

            <div className="relative flex justify-center mb-10">
              <div className="absolute -left-4 top-0 z-30 flex flex-col items-center justify-center text-center rounded-full bg-[#50000B] text-white w-32 h-32 sm:w-40 sm:h-40 shadow-xl border-2 border-white/10">
                <p className="uppercase text-[8px] sm:text-[10px] font-bold tracking-tighter">ANNUAL SAVINGS</p>
                <div className="font-arizona leading-tight">
                  <p className="text-[14px] sm:text-[18px] font-normal">$2,532 - $3,000</p>
                  <p className="text-[10px] mt-0.5">per year</p>
                </div>
                <p className="text-[8px] sm:text-[9px] mt-1 opacity-80 leading-none">when switching to IM8</p>
              </div>

              <img src={productImg} alt="product" className="w-40 sm:w-52 h-auto relative z-20 drop-shadow-2xl" />
            </div>

            <div className="flex flex-col gap-3 border border-red-900/20 rounded-2xl w-full px-5 py-6 bg-[#f5eaea]/80 backdrop-blur-sm shadow-sm">
              {ingredients.map((item) => (
                <div key={item.item} className="flex items-center justify-between border-b border-[#50000B]/5 pb-2 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <img src={checkIcon} alt="check" className="w-4 h-4" />
                    <p className="text-[13px] text-[#50000B] font-medium">{item.item}</p>
                  </div>
                  <s className="font-nb opacity-50 text-[13px]">€{item.cost}</s>
                </div>
              ))}
            </div>

            <div className="mt-4 border-2 border-[#50000B] rounded-2xl overflow-hidden shadow-md">
              <div className="py-3.5 px-5 bg-[#f5eaea] flex items-center justify-between border-b-2 border-[#50000B]">
                <p className="text-[13px] text-[#50000B]">Your Traditional Supplements</p>
                <s className="font-nb opacity-60 text-[13px]">€357</s>
              </div>
              <div className="py-4 px-5 flex items-center justify-between bg-white">
                <p className="font-bold text-[14px] text-[#50000B]">IM8 Daily Ultimate Essentials</p>
                <p className="font-nb font-bold text-[15px] text-[#50000B]">€185</p>
              </div>
            </div>

            <Button className="mt-6 uppercase w-full py-6 rounded-full bg-[#9b1b1f] hover:bg-[#50000B] text-white font-bold text-base shadow-lg transition-all active:scale-95">
              Shop Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MonthlyBreakdown;
