"use client";

export const ProductSubmitButton = ({ selectedPlan = '90day' }) => {
  const isQuarterly = selectedPlan === '90day';
  
  const buttonText = isQuarterly 
    ? "START MY 90-DAY TRANSFORMATION PROGRAM" 
    : "ADD TO CART";
    
  const priceText = isQuarterly ? "€91,00 EUR/mo" : "€105,00 EUR/mo";

  return (
    <div className="w-full max-w-[650px] px-4">
      <button
        type="submit"
        className={`
          /* Cấu trúc Flexbox & Kích thước */
          flex items-center justify-center w-full min-h-[48px] min-w-[272px] p-[5px]
          
          /* Màu sắc & Background (Khớp --color-foreground: 80,0,11) */
          bg-[#50000b] text-white
          
          /* Typography (Khớp font-size: 16px, weight: 700, letter-spacing: .32px) */
          font-['Aeonik',sans-serif] text-[16px] font-bold uppercase leading-[22px] tracking-[0.32px]
          
          /* Border & Radius (Khớp border-radius: 100px) */
          border-0 rounded-[100px]
          
          /* Hiệu ứng & Cursor */
          cursor-pointer appearance-none transition-all duration-300 linear
          hover:opacity-90 active:scale-[0.98]
          
          /* Định vị */
          relative overflow-hidden
        `}
      >
        {/* Button Text Section */}
        <span className="button-text">
          {buttonText}
        </span>

        {/* Dash Separator (Khớp span.dash_new) */}
        <span className="mx-1 opacity-100"> – </span>

        {/* Price Section (Khớp span.product_price_new) */}
        <span className="product_price_new font-bold">
          {priceText}
        </span>

        {/* Loading Spinner (Ẩn mặc định giống class hidden) */}
        <div className="hidden absolute right-4">
          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
      </button>
    </div>
  );
};