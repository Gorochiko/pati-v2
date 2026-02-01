"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const accordionItems: AccordionItem[] = [
  {
    id: 'ingredients',
    title: 'Ingredients',
    content: (
      <div className="space-y-3">
        <div className="text-[#50000b] text-base font-normal leading-[135%]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
          <p>Our comprehensive formula combines 92 nutrient-rich ingredients to fuel your body with everything it needs for optimal health. Packed with essential vitamins, minerals, antioxidants, superfoods, greens, pre-pro-post-biotics and clinical dosages of CoQ10 and MSM.*</p>
        </div>
        <div className="mt-3">
          <div 
            className="text-[#50000b] text-base font-normal leading-[135%] underline underline-offset-4 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Aeonik, sans-serif' }}
          >
            View Supplement Facts
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-Party Tested',
    content: (
      <div className="text-[#50000b] text-base font-normal leading-[135%]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
        <p>Every ingredient and dosage in IM8 is third-party tested. This guarantees that what you see on the label is what you get, so you know exactly what you're putting into your body.</p>
      </div>
    ),
  },
  {
    id: 'how-to-enjoy',
    title: 'How to Enjoy',
    content: (
      <div className="text-[#50000b] text-base font-normal leading-[135%]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Scoop out one serving (12 grams)</li>
          <li>Add 8-12 oz of cold water, juice, smoothie, or your favorite drink (Use less liquid for a stronger taste)</li>
          <li>Shake or blend well then enjoy</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'tasting-notes',
    title: 'Tasting Notes',
    content: (
      <div className="text-[#50000b] text-base font-normal leading-[135%]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
        <p>Experience a delightful blend with earthy undertones, a subtle tartness, and a hint of chocolate, culminating in a smooth acai and mixed berries finish.</p>
      </div>
    ),
  },
];

export const ProductAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>(['ingredients']);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="my-6 ">
      <ul className="m-0 p-0 list-none">
        {accordionItems.map((item, index) => (
          <li key={item.id} className={openItems.includes(item.id) ? 'open' : ''}>
            {/* Question/Header */}
            <div
              onClick={() => toggleItem(item.id)}
              className="cursor-pointer relative py-4 border-b border-[rgba(80,0,11,1)]
                         flex items-center justify-between group"
            >
              <h4 
                className="text-[18px] font-semibold text-[#50000b] m-0 pr-8"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
              >
                {item.title}
              </h4>
              <ChevronDown 
                className={`w-5 h-5 text-[#50000b] transition-transform duration-300 flex-shrink-0
                           ${openItems.includes(item.id) ? 'rotate-180' : ''}`}
              />
            </div>

            {/* Answer/Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                         ${openItems.includes(item.id) ? 'max-h-[2000px]' : 'max-h-0 opacity-0'}`}
            >
              <div className="pb-4 pt-2" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                {item.content}
              </div>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};