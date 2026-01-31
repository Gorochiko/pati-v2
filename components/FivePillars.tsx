"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pillars = [
  {
    id: 1,
    title: 'Comprehensive Nutritional Foundation',
    subtitle: 'Complete Vitamin & Mineral Profile',
    ingredients: [
      'All essential vitamins (A, C, D, E, K1, K2, B-complex)',
      'Full mineral spectrum (12 essential)',
      'Vitamin C: 900mg (1000% DV) - Antioxidant Support',
      'Vitamin D3: 1200 IU - From Vegan Lichen',
      'Vitamin B12: 24mcg - Bioactive Methylcobalamin',
      'Bioactive Forms: Quatrefolic®️ & Methylcobalamin for Superior Absorption',
    ],
  },
  {
    id: 2,
    title: 'Superior Digestive Health Support',
    subtitle: '4-Tier Digestive System (Unique Advantage)',
    ingredients: [
      'PREBIOTICS: Guar Fiber & Agave Inulin (Feeds beneficial bacteria)',
      'PROBIOTICS: 10 Billion CFU (Bacillus subtilis DE111® & Bacillus coagulans BC99®)',
      'POSTBIOTICS: Lactobacillus casei 327 (FloraSMART®) - Clinically Proven for Regularity',
      'DIGESTIVE ENZYMES: Complete Enzyme Complex (Amylase, Protease, Lipase, Cellulase)',
    ],
  },
  {
    id: 3,
    title: 'Powerful Superfood & Antioxidant Complex',
    subtitle: '4,100mg Raw Superfoods Blend',
    ingredients: [
      'Organic Greens: Spinach, Beet Root, Carrot Root',
      'Antioxidant Fruits: Blueberry, Pomegranate, Cranberry, Acai',
      'Functional Herbs: Milk Thistle, Turmeric, Ginger, Elderberry',
      'Specialty: Sea Moss, Grape Seed Extract, Green Tea',
    ],
  },
  {
    id: 4,
    title: 'Specialized Health Complexes',
    subtitle: 'Targeted Support for Performance',
    ingredients: [
      'Advanced Hydration & Electrolyte (2,500mg): Hydra Electrolytes Complex',
      'Essential Amino Acid & Recovery (1,165mg): Amino & Renew Complex',
      'Joint & Muscle Health (1,000mg): MSM, Supports Collagen',
      'Adaptogenic & Mushroom Support (200mg): Ashwagandha, Reishi, Lion\'s Mane',
      'Heart Health Support (100mg): CoQ10, Cellular',
    ],
  },
  {
    id: 5,
    title: 'Cell Rejuvenation Technology 8™',
    subtitle: 'Proprietary Longevity Complex (25mg)',
    ingredients: [
      'Spermidine',
      'Astaxanthin',
      'Trans-resveratrol',
      'Berberine',
      'Urolithin A',
      'Seaweed Extracts',
    ],
    additional: [
      { label: 'Superior Ingredient Forms', desc: 'Bioactive Vitamins & Organic Minerals for maximum absorption.' },
      { label: 'Clean Formulation', desc: 'No Stevia (Uses Reb M), Allergen-Free, Non-GMO, Vegan-Friendly.' },
      { label: 'Branded Ingredients', desc: 'Quatrefolic®, VegD3®, FloraSMART®, AstaPure®.' },
    ],
  },
];

export const FivePillars = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-background">
      <div className="im8-container">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {pillars.map((pillar, index) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
              }`}
            >
              <span className="text-xs font-bold">{String(pillar.id).padStart(2, '0')}</span>
              <span className="hidden sm:inline">Pillar {pillar.id}</span>
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
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold text-primary">
                  {String(pillars[activeTab].id).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Pillar {pillars[activeTab].id}</p>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    {pillars[activeTab].title}
                  </h3>
                </div>
              </div>

              <p className="text-primary font-medium mb-6">{pillars[activeTab].subtitle}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Ingredients</h4>
                <ul className="space-y-2">
                  {pillars[activeTab].ingredients.map((ingredient, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pillars[activeTab].additional && (
                <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                  {pillars[activeTab].additional.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <h5 className="font-semibold text-foreground text-sm mb-1">{item.label}</h5>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
