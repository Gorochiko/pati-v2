interface ProductHeaderProps {
  productImg: string;
  title: string;
}

export const ProductHeader = ({ productImg, title }: ProductHeaderProps) => {
  return (
    <div className="flex items-center max-md:flex-col">
      <div className="relative h-20 w-28 shrink-0 lg:h-28 lg:w-36 max-md:h-16 max-md:w-24">
        <img
          src={productImg}
          alt={title}
          className="absolute -top-4 left-0 h-full w-[120%] object-contain object-center lg:-top-8 max-md:-top-3"
        />
      </div>
      <p className="text-base leading-[1.3] max-md:text-center max-md:text-xs lg:text-sm">
        {title}
      </p>
    </div>
  );
};
