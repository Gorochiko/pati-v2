'use client';

import { usePillarsContext } from './PillarsContext';

export const BackgroundLayer = () => {
  const { isEssentials } = usePillarsContext();

  // Xác định màu nền phẳng dựa trên context để làm lớp lót chắc chắn
  const bgColor = isEssentials ? '#f5eaea' : '#faf7ee';

  return (
    <>
      <div 
        className="absolute inset-0 z-0 transition-colors duration-700" 
        style={{ backgroundColor: bgColor }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <img  
          src={isEssentials 
            ? "https://im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.44.31_PM.png?v=1766404140&width=1200"
            : "//im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.45.28_PM.png?v=1766404140&width=1200"
          }
          alt="Background"
          loading="eager"
          className="w-full h-full object-cover object-[center_top] transform scale-105 -translate-y-2 transition-all duration-700"
        />
      </div>


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </>
  );
};

export default BackgroundLayer;