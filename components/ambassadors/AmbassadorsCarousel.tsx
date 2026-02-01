import React, { useMemo } from 'react';
import { AMBASSADORS_DATA } from './data';
import { AmbassadorCard } from './AmbassadorCard';

const CAROUSEL_REPEAT_COUNT = 4;

export const AmbassadorsCarousel = React.memo(() => {
  const duplicatedReviews = useMemo(
    () => Array(CAROUSEL_REPEAT_COUNT).fill(AMBASSADORS_DATA).flat(),
    []
  );

  return (
    <div className="relative overflow-hidden" role="region" aria-label="Ambassador testimonials carousel">
      <div className="grid animate-scroll grid-flow-col gap-4">
        {duplicatedReviews.map((review, index) => (
          <div className="h-full" key={`${review.name}-${index}`}>
            <AmbassadorCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
});

AmbassadorsCarousel.displayName = 'AmbassadorsCarousel';
