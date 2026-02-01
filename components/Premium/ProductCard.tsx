import type { DealType } from "./type";
import { BestSellerBadge } from "./BestSellerBadge";
import { MessageBadge } from "./MessageBadge";
import { ImageAddButton } from "./ImageAddButton";
import { AddButton } from "./AddButton";

interface ProductCardProps {
  item: DealType;
}

export const ProductCard = ({ item }: ProductCardProps) => {
  const {
    isBestSeller,
    message,
    isGradient,
    description,
    firstImg,
    name,
    price,
    secondImg,
    imgSm,
    href,
  } = item;

  return (
    <a 
      href={href} 
      className="group flex flex-col transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl lg:aspect-square">
        {isBestSeller && <BestSellerBadge />}
        
        {/* Desktop First Image */}
        <img
          src={firstImg}
          alt={`${name} - First view`}
          loading="lazy"
          className="absolute inset-0 hidden size-full rounded-xl object-cover transition-opacity duration-500 ease-in-out md:block lg:group-hover:opacity-0"
        />
        
        {/* Desktop Hover Image */}
        <img
          src={secondImg}
          alt={`${name} - Hover view`}
          loading="lazy"
          className="absolute inset-0 hidden size-full scale-110 rounded-xl object-cover opacity-0 transition-all duration-500 ease-in-out lg:block lg:group-hover:scale-100 lg:group-hover:opacity-100"
        />
        
        {/* Mobile Image */}
        <img
          src={imgSm}
          alt={`${name} - Mobile view`}
          loading="lazy"
          className="absolute inset-0 size-full rounded-xl object-cover object-top md:hidden"
        />
        
        <ImageAddButton />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 py-4">
        <MessageBadge message={message} isGradient={isGradient} />
        
        <h3 className="w-[60%] font-arizona text-[20px] font-medium md:text-2xl">
          {name}
        </h3>
        
        <div className="flex flex-col gap-1 text-xs md:text-sm">
          <p className="text-[#50000b]">{description}</p>
          <p className="font-bold">From ${price}</p>
        </div>
        
        <AddButton />
      </div>
    </a>
  );
};
