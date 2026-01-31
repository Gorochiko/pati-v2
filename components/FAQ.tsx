"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is IM8?',
    answer: 'IM8 is the pinnacle of premium core nutrition, born from a collaboration between Prenetics (NASDAQ:PRE), David Beckham as a co-founding partner, and an elite team of scientists spanning space exploration, medical professionals, and academic excellence. Combining cutting-edge science with nature\'s most potent ingredients, IM8 delivers a holistic, science-backed approach to health, empowering you to live your most vibrant life.',
  },
  {
    question: "What is David Beckham's involvement in IM8?",
    answer: "David Beckham is a co-founding partner of IM8, driven by his commitment to simplifying wellness. After years of working with top medical professionals and nutrition experts, David wanted to make core nutrition more accessible. In collaboration with the Prenetics team and world-class scientists, IM8 was developed to deliver essential nutrients in a simple and effective way.",
  },
  {
    question: 'Who is on the IM8 Scientific Advisory Board?',
    answer: 'The IM8 Scientific Advisory Board comprises distinguished professionals including Dr. Dawn Mussallem (Mayo Clinic oncologist), Dr. James L. Green (former NASA Chief Scientist), Dr. David Katz (preventive medicine specialist), Prof. Suzanne Devkota (Cedars-Sinai), Prof. Stephen Anton (University of Florida), Dr. James DiNicolantonio (cardiovascular scientist), and Prof. Ock Chun (nutritional sciences expert).',
  },
  {
    question: 'What are the main benefits of IM8 Daily Essentials + Hydration?',
    answer: 'IM8 Daily Essentials is your all-in-one solution, replacing the need for 16 supplements, targeting eight key areas of health: Energy, Immunity, Cognitive Function, Digestion, Cardiovascular Health, Hydration, Nourishment, and Cellular Renewal. With 92 carefully selected premium ingredients, including CoQ10 (100mg) for heart health and MSM (1,000mg) for joint support.',
  },
  {
    question: 'What does IM8 Daily Ultimate Essentials taste like?',
    answer: 'Experience a delightful blend of flavors with earthy undertones, complemented by a subtle tartness and a hint of chocolate. The flavor then culminates in a smooth finish of acai and mixed berries. For a more robust flavor, use less water, or add more water for a delicate, lighter taste.',
  },
  {
    question: 'What countries do you currently ship to?',
    answer: 'IM8 currently ships to 31 countries (with free shipping for all subscriptions to the United States, United Kingdom, Canada, Singapore and Hong Kong), including the United States, Canada, United Kingdom, Australia, and many countries across Europe, Asia, and South America.',
  },
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="im8-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            FAQs
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleItem(index)}
                className="flex items-center justify-between w-full py-5 text-left"
              >
                <h4 className="text-base lg:text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h4>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Explore All */}
        <div className="text-center mt-8">
          <a href="#" className="text-primary font-semibold hover:underline">
            Explore All FAQs →
          </a>
        </div>
      </div>
    </section>
  );
};
