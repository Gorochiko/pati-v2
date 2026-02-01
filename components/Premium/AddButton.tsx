import { Button } from "@/components/ui/button";

export const AddButton = () => {
  return (
    <Button
      className="mt-2 h-auto w-full rounded-full bg-im8-red px-4 py-3 text-base font-bold uppercase text-white transition duration-300 hover:bg-[oklch(0.2723_0.109753_22.2781)] md:hidden"
      suppressHydrationWarning
    >
      Add to Cart
    </Button>
  );
};