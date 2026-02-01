"use client";
import React, { useState } from 'react';

const formats = [
  {
    id: 'forever-jar',
    name: 'Forever Jar',
    description: '(354g) €3,50 EUR / serving',
    image: 'https://im8health.com/cdn/shop/files/UX-Input_1.jpg?v=8068906590217553853',
    badge: 'MOST POPULAR',
  },
  {
    id: 'sachets',
    name: 'Single-Serve Sachets',
    description: '(354g) €3,90 EUR / serving',
    image: '//im8health.com/cdn/shop/files/UX-Input_2.jpg?v=4366596284312861834',
    badge: null,
  },
];

export const FormatSelector = () => {
  const [selected, setSelected] = useState('forever-jar');

  return (
    /* Giới hạn max-width nhỏ lại (khoảng 600px-700px) để phù hợp với sidebar hoặc form mua hàng */
    <div className="w-full max-w-[650px] bg-white">
      <h3 className="font-body text-[16px] font-bold text-[#50000b]">
        1. Select Format:
      </h3>

      <div className="flex flex-col sm:flex-row gap-3 items-start">
        {formats.map((format) => (
          <div key={format.id} className="relative pt-2.5 w-full sm:w-1/2">
            {/* Badge - Tinh chỉnh vị trí và font */}
            {format.badge && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-10 bg-[#e30000] text-white text-[9px] font-black px-3 py-1 rounded-full shadow-sm whitespace-nowrap leading-none tracking-tighter">
                {format.badge}
              </div>
            )}

            <button
              onClick={() => setSelected(format.id)}
              className={`
                relative w-full flex items-stretch rounded-[18px] overflow-hidden transition-all duration-200 text-left min-h-[90px]
                ${selected === format.id 
                  ? 'ring-1 ring-[#50000b] bg-[#fdfaf8]' 
                  : 'border border-gray-200 bg-white hover:border-[#50000b]/40'}
              `}
              suppressHydrationWarning
            >
              {/* Left Side: Giảm tỉ lệ từ 1/3 xuống 1/4 (25%) để dành chỗ cho text */}
              <div className="w-[28%] bg-gradient-to-b from-[#f5d9c5] to-[#f9be9a] flex items-center justify-center p-2">
                <img 
                  src={format.image} 
                  alt={format.name}
                  className="w-full h-full object-contain scale-110 drop-shadow-sm"
                />
              </div>

              {/* Right Side: Text Content - Chống xuống hàng */}
              <div className="w-[72%] flex flex-col justify-center px-3 py-2 overflow-hidden">
                <h3 
                  className="text-[#50000b] text-[16px] md:text-[18px] leading-tight mb-0.5 whitespace-nowrap" 
                  style={{ fontFamily: '"ABC Arizona Flare", serif', fontWeight: 500 }}
                >
                  {format.name}
                </h3>
                <p className="text-[#50000b] text-[11px] opacity-80 whitespace-nowrap overflow-hidden text-ellipsis">
                  {format.description}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};