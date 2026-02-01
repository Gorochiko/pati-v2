import { memo, useMemo } from "react";
import { ambassadorReviews } from "../data";
import Card from "./card";

/**
 * Carousel Component
 * Displays scrolling ambassador review cards
 */
const Carousel = () => {
  // Duplicate reviews for infinite scroll effect
  const reviews = useMemo(
    () => [
      ...ambassadorReviews,
      ...ambassadorReviews,
      ...ambassadorReviews,
      ...ambassadorReviews,
    ],
    []
  );

  return (
    <div className="relative overflow-hidden" role="region" aria-label="Ambassador testimonials carousel">
      <div className="grid grid-flow-col gap-4 animate-scroll">
        {reviews.map((review, index) => (
          <div className="h-full" key={`${review.name}-${index}`}>
            <Card review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Carousel);
