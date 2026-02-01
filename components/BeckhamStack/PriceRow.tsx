import { cn } from "@/lib/utils";

interface PriceRowProps {
  label: string;
  essentialsPrice: string;
  stackPrice: string;
  isLast?: boolean;
  highlightStack?: boolean;
}

export const PriceRow = ({ 
  label, 
  essentialsPrice, 
  stackPrice, 
  isLast = false,
  highlightStack = false 
}: PriceRowProps) => {
  return (
    <div className={cn(
      "grid grid-cols-3 gap-6 border-t border-[#E5E5E5] px-6 py-3.5 text-center text-base font-bold md:text-sm lg:text-[15px]",
      isLast && "rounded-b-2xl"
    )}>
      <div className="text-left text-sm">{label}</div>
      <div className="self-center">{essentialsPrice}</div>
      <div className={cn(
        "self-center",
        highlightStack && "text-im8-red"
      )}>
        {stackPrice}
      </div>
    </div>
  );
};
