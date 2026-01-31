
"use client";
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "The taste is so delicious and I'm excited to feel the difference. I have tried AG1 but had terrible stomach upset with it and had to discontinue. Fingers crossed this one is better.",
    author: "Trina Fautoux",
    verified: true,
  },
  {
    id: 2,
    rating: 5,
    text: "I'm on my second month of IM8, along with my significant other and we both feel more energy, more brain clarity and overall improved feeling of well-being. I talk about this product with all my golf friends.",
    author: "Jennifer Dunn",
    verified: true,
  },
  {
    id: 3,
    rating: 5,
    text: "Since I started this a month ago I have felt great, energetic, and sleeping better. I have taken a lot of vitamins and am hopeful this will replace most of them. Thank you.",
    author: "Lisa Tradewell",
    verified: true,
  },
  {
    id: 4,
    rating: 5,
    text: "I love it. I have a lot more energy. I am recommending it to all my friends. It is so nice to have almost everything I take in one drink.",
    author: "Bernae VeraKruse",
    verified: true,
  },
  {
    id: 5,
    rating: 5,
    text: "I absolutely love IM8. I see a difference with my gut health and immune system. I have been spreading the word about this great product. Thank you for reaching out!",
    author: "Erika Friesenhahn",
    verified: true,
  },
  {
    id: 6,
    rating: 5,
    text: "I am really feeling full of energy. After about 2 weeks of the IM8, my wife said 'What's got into you, would you slow down and just sit awhile' Thanks for your work!",
    author: "Charlie West",
    verified: true,
  },
];

export const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-background">
      <div className="im8-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            10,000+ 5 Star Reviews
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are actual IM8 verified customers that have seen successful health outcomes with the consistent use of IM8 Daily Ultimate Essentials.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * (100 / itemsPerView + 2) + '%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-card border border-border rounded-2xl p-6 h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-foreground leading-relaxed mb-4 text-sm lg:text-base">
                      "{review.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">— {review.author}.,</span>
                      {review.verified && (
                        <span className="text-success text-sm">Verified Customer</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-card hover:shadow-card-hover transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-card hover:shadow-card-hover transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            <span className="font-bold text-foreground">11,825 Reviews</span> | Average Rating: <span className="font-bold text-foreground">4.8/5</span>
          </p>
        </div>
      </div>
    </section>
  );
};
