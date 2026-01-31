"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const systems = [
  {
    id: 1,
    name: 'Digestive',
    title: 'Digestive Support',
    subtitle: 'Prebiotics, Probiotics, Postbiotics, Enzymes',
    description: 'A complete 4-tier digestive support system featuring 10 Billion CFU of probiotics and clinically proven enzymes to optimize nutrient absorption and gut health.',
    badge: 'Clinically Dosed Ingredients',
  },
  {
    id: 2,
    name: 'Immune',
    title: 'Immune Support',
    subtitle: 'Vit C, D, Zinc, Mushrooms',
    description: "Fortifies your body's natural defenses with high-potency Vitamin C (1000% DV), Zinc, and a specialized mushroom complex including Reishi and Chaga.",
    badge: 'Clinically Dosed Ingredients',
  },
  {
    id: 3,
    name: 'Cardiovascular',
    title: 'Cardiovascular Support',
    subtitle: 'COQ10, NITRATES, POTASSIUM',
    description: 'Supports heart health and circulation with natural nitrates from beetroot, CoQ10 for cellular energy, and potassium for healthy blood pressure levels.',
    badge: 'Clinically Dosed Ingredients',
  },
  {
    id: 4,
    name: 'Muscular',
    title: 'Muscular Support',
    subtitle: 'Aminos, MSM, Electrolytes',
    description: 'Accelerates recovery and maintains muscle function with a full spectrum of amino acids, MSM for joint comfort, and essential electrolytes.',
    badge: 'Clinically Dosed Ingredients',
  },
  {
    id: 5,
    name: 'Skeletal',
    title: 'Skeletal Support',
    subtitle: 'Calcium, Vit D, K2, Boron',
    description: "Builds and maintains strong bones with bioavailable Calcium, Vitamin D3 from vegan lichen, and Vitamin K2 to direct calcium to where it's needed.",
    badge: 'Clinically Dosed Ingredients',
  },
  {
    id: 6,
    name: 'Integumentary',
    title: 'Skin, Hair & Nail Support',
    subtitle: 'MSM, Vit C, E, Biotin, Silica',
    description: 'Promotes radiant skin, hair, and nails through collagen-supporting Vitamin C, Biotin, and MSM to combat oxidative stress.',
    badge: 'Clinically Dosed Ingredients',
  },
  {
    id: 7,
    name: 'Nervous',
    title: 'Nervous System Support',
    subtitle: 'B-Vitamins, Magnesium, Adaptogens',
    description: 'Calms the mind and supports cognitive function with a complete B-Complex (including Methylcobalamin) and stress-adapting herbs like Reishi & Ashwagandha.',
    badge: 'Clinically Dosed Ingredients',
  },
  {
    id: 8,
    name: 'Endocrine',
    title: 'Endocrine Support',
    subtitle: 'Adaptogens, Vit D, Chromium',
    description: 'Balances hormones and metabolism with targeted adaptogens and Chromium to support healthy blood sugar levels already within normal range.',
    badge: 'Clinically Dosed Ingredients',
  },
  {
    id: 9,
    name: 'Urinary',
    title: 'Urinary Support',
    subtitle: 'Hydra Electrolytes Complex',
    description: 'Optimizes fluid balance and kidney function with a precision hydration complex featuring Potassium Citrate and Magnesium Glycinate.',
    badge: 'Clinically Dosed Ingredients',
  },
];

export const BodySystemsSupport = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-im8-cream">
      <div className="im8-container">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {systems.map((system, index) => (
            <button
              key={system.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <span className="mr-2 text-xs">{String(system.id).padStart(2, '0')}</span>
              {system.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">
                  {String(systems[activeTab].id).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {systems[activeTab].title}
              </h3>
              
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {systems[activeTab].subtitle}
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {systems[activeTab].description}
              </p>
              
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
                {systems[activeTab].badge}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
