"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our comprehensive formula combines 92 nutrient-rich ingredients to fuel your body with everything it needs for optimal health. Packed with essential vitamins, minerals, antioxidants, superfoods, greens, pre-pro-post-biotics and clinical dosages of CoQ10 and MSM.*
        </p>
        <img
          src="https://im8health.com/cdn/shop/files/pdp_essentials_supp-mobile_202505.webp?v=1747046933"
          alt="Supplement Facts"
          className="w-full rounded-lg"
        />
        <button className="text-sm font-semibold text-primary hover:underline">
          View Supplement Facts →
        </button>
      </div>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-Party Tested',
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        Every ingredient and dosage in IM8 is third-party tested. This guarantees that what you see on the label is what you get, so you know exactly what you're putting into your body.
      </p>
    ),
  },
  {
    id: 'how-to-enjoy',
    title: 'How to Enjoy',
    content: (
      <ol className="text-sm text-muted-foreground leading-relaxed space-y-2">
        <li>1. Scoop out one serving (12 grams)</li>
        <li>2. Add 8-12 oz of cold water, juice, smoothie, or your favorite drink (Use less liquid for a stronger taste)</li>
        <li>3. Shake or blend well then enjoy</li>
      </ol>
    ),
  },
  {
    id: 'tasting-notes',
    title: 'Tasting Notes',
    content: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        Experience a delightful blend with earthy undertones, a subtle tartness, and a hint of chocolate, culminating in a smooth acai and mixed berries finish.
      </p>
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
    <div className="divide-y divide-border border-y border-border">
      {accordionItems.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => toggleItem(item.id)}
            className="flex items-center justify-between w-full py-4 text-left"
          >
            <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
            {openItems.includes(item.id) ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
          
          <AnimatePresence>
            {openItems.includes(item.id) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pb-4">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
