import { Button } from "@/components/ui/button";

export const ImageAddButton = () => {
  return (
    <Button
      className="absolute bottom-4 right-4 hidden h-auto rounded-full border border-[#50000b] bg-[#fffc] px-8 pb-2.5 pt-3 text-[13px] font-bold uppercase leading-[1.4] text-[#50000b] opacity-0 transition-all duration-400 ease-in-out hover:bg-[#50000b] hover:text-white md:block lg:translate-y-full lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
      suppressHydrationWarning
    >
      Add to Cart
    </Button>
  );
};