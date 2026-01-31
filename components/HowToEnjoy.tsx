export const HowToEnjoy = () => {
  const steps = [
    {
      step: 1,
      title: 'Scoop out one serving of Daily Ultimate Essentials',
      image: 'https://im8health.com/cdn/shop/files/preview_images/ce78e2bd331f47f79ac745c7ae51f01f.thumbnail.0000000000.jpg?v=1730081912',
    },
    {
      step: 2,
      title: 'Add 8 to 12oz of Water or Your Favorite Smoothie',
      image: 'https://im8health.com/cdn/shop/files/preview_images/c204aec03aad4763993ff1eda15f0501.thumbnail.0000000000.jpg?v=1730081950',
    },
    {
      step: 3,
      title: 'Stir Well and Enjoy Daily',
      image: 'https://im8health.com/cdn/shop/files/preview_images/1f885d4f9245483d97e7efcfffb8a6be.thumbnail.0000000000.jpg?v=1729902934',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="im8-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            How to Enjoy
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.step} className="text-center group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-muted">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-medium text-foreground">
                <span className="text-primary mr-2">Step {step.step}:</span>
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
