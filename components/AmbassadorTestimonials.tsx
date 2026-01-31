const testimonials = [
  {
    id: 1,
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-expert_robinB2.jpg?v=1731999065',
  },
  {
    id: 2,
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/influe-carou_bobbyRich2.jpg?v=1731863977',
  },
  {
    id: 3,
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-expert_amyShah2.jpg?v=1731864964',
  },
  {
    id: 4,
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-influ_dustinPoirier.jpg?v=1731833492',
  },
  {
    id: 5,
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/image_54.png?v=1731863088',
  },
  {
    id: 6,
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/1f4b2af008104c92a29f9d78814f1aa0.thumbnail.0000000000.jpg?v=1731860287',
  },
];

export const AmbassadorTestimonials = () => {
  return (
    <section className="py-12">
      <div className="im8-container">
        <h2 className="text-xl lg:text-2xl font-bold text-center text-foreground mb-8">
          What our IM8 Ambassadors are saying
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-48 lg:w-56 aspect-[9/16] rounded-xl overflow-hidden bg-muted cursor-pointer group relative"
            >
              <img
                src={testimonial.thumbnail}
                alt="Ambassador testimonial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
