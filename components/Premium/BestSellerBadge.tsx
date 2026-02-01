import { badgeBg } from "./data";

export const BestSellerBadge = () => {
  return (
    <div className="absolute right-4 top-4 z-10 size-12 font-nb uppercase lg:size-16">
      <img
        src={badgeBg}
        alt="Best Seller"
        className="size-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-center text-[10px] leading-tight text-white">
          <span className="block">Best</span>
          <span className="block">Seller</span>
        </p>
      </div>
    </div>
  );
};