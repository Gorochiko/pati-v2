import RedCheck from "../../public/icons/red-check";
import GreyX from "../../public/icons/grey-x";
import type { BenefitType } from "./types";

interface BenefitRowProps {
  benefit: BenefitType;
}

export const BenefitRow = ({ benefit }: BenefitRowProps) => {
  const { type, isEssensial, isInStack } = benefit;

  return (
    <div className="not-first:border-t grid grid-cols-3 gap-3.5 border-[#E5E5E5] bg-white px-4 py-2 text-[13px] font-medium leading-[1.3] text-[#333] md:gap-5 md:px-5 md:py-2.5 md:text-sm lg:gap-6 lg:px-6 lg:py-3 lg:text-[15px]">
      <div>{type}</div>
      <div className="flex justify-center self-center">
        {isEssensial ? (
          <RedCheck className="size-4 md:size-4.5 lg:size-5" />
        ) : (
          <GreyX className="size-4 md:size-4.5 lg:size-5" />
        )}
      </div>
      <div className="flex justify-center self-center">
        {isInStack ? (
          <RedCheck className="size-4 md:size-4.5 lg:size-5" />
        ) : (
          <GreyX className="size-4 md:size-4.5 lg:size-5" />
        )}
      </div>
    </div>
  );
};
