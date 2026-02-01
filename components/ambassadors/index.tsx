import React from 'react';
import { BACKGROUND_IMAGE, BACKGROUND_IMAGE_MOBILE } from './data';
import { AmbassadorsCarousel } from './AmbassadorsCarousel';
import { AmbassadorsSectionHeader } from './AmbassadorsSectionHeader';

/**
 * Ambassadors Section Component
 * Displays ambassador testimonials with video carousel
 */
const Ambassadors = () => {
  return (
    <section
      id="ambassadors"
      className="relative w-full bg-cover bg-center bg-no-repeat py-14 md:py-26"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE})`,
      }}
      aria-labelledby="ambassadors-heading"
    >
      {/* Mobile Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE_MOBILE})`,
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-14">
        {/* Section Header */}
        <AmbassadorsSectionHeader />

        {/* Carousel */}
        <AmbassadorsCarousel />
      </div>
    </section>
  );
};

export default React.memo(Ambassadors);
