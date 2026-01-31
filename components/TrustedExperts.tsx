const experts = [
  {
    name: 'Dr. James DiNicolantonio',
    title: 'Cardiovascular Scientist & Best-Selling Author',
    handle: '@drjamesdinic',
    followers: '3.2M',
    image: 'https://im8health.com/cdn/shop/files/Ellipse_62.png?v=1727768801',
    video: 'https://im8health.com/cdn/shop/files/preview_images/18ce63f7f6154e888f2a48c2a478e480.thumbnail.0000000000.jpg?v=1731647937',
  },
  {
    name: 'Dr. Amy Shah',
    title: 'Double-Board Certified Physician & Host of "Save Yourself" Podcast',
    handle: '@dramyshah',
    followers: '1.4M',
    image: 'https://im8health.com/cdn/shop/files/influencer_drshah_profile.png?v=1730184660',
    video: 'https://im8health.com/cdn/shop/files/preview_images/ec95f3f8f55f4c1eb679982d43bf091d.thumbnail.0000000000.jpg?v=1731865199',
  },
  {
    name: 'Mona Sharma',
    title: 'Celebrity Nutritionist',
    handle: '@monasharma',
    followers: '183K',
    image: 'https://im8health.com/cdn/shop/files/Monasharma.png?v=1730806896',
    video: 'https://im8health.com/cdn/shop/files/preview_images/936fe1ac73a046a98e1ff7e701676228.thumbnail.0000000000.jpg?v=1731647963',
  },
  {
    name: 'Elissa Goodman',
    title: 'Holistic Nutritionist',
    handle: '@elissagoodman',
    followers: '189K',
    image: 'https://im8health.com/cdn/shop/files/Ellipse_63.png?v=1727768801',
    video: 'https://im8health.com/cdn/shop/files/preview_images/17fb74b0dd5d46e8ac4d1668b46b2134.thumbnail.0000000000.jpg?v=1731647958',
  },
  {
    name: 'Dr. Bertha Baum',
    title: 'Board-Certified Dermatologist',
    handle: '@drberthabaum',
    followers: '229K',
    image: 'https://im8health.com/cdn/shop/files/bertha_baum.png?v=1730806825',
    video: 'https://im8health.com/cdn/shop/files/preview_images/db58a8d3630b47a597fb148aba8a1790.thumbnail.0000000000.jpg?v=1731860106',
  },
  {
    name: 'Dr. Jennifer Tsai',
    title: 'Board-Certified Optometrist & Nutrition Specialist',
    handle: '@drjenandjuice',
    followers: '284K',
    image: 'https://im8health.com/cdn/shop/files/Jen.png?v=1730806923',
    video: 'https://im8health.com/cdn/shop/files/preview_images/9d07478703af48a2903deb8e3fbd5076.thumbnail.0000000000.jpg?v=1731751112',
  },
  {
    name: 'Tim Biohacker',
    title: "UK's Leading Bio-hacker",
    handle: '@timbiohacker',
    followers: '484K',
    image: 'https://im8health.com/cdn/shop/files/timbiohacker.png?v=1730889002',
    video: 'https://im8health.com/cdn/shop/files/preview_images/1cfa80d2973d44619564e370d8fb9a5a.thumbnail.0000000000.jpg?v=1731772919',
  },
  {
    name: 'Dr. Robin Barrett',
    title: 'Doctor of Pharmacy & Wellness Coach',
    handle: '@dr.robinb',
    followers: '1.4M',
    image: 'https://im8health.com/cdn/shop/files/Ellipse_64.png?v=1727768801',
    video: 'https://im8health.com/cdn/shop/files/preview_images/0cdc39d7dda145e29a333ee5f43ed507.thumbnail.0000000000.jpg?v=1732006454',
  },
];

export const TrustedExperts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="im8-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            Trusted by Physicians and Nutrition Experts
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="group cursor-pointer"
            >
              {/* Profile & Handle */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-medium text-foreground">{expert.handle}</p>
                  <p className="text-[10px] text-muted-foreground">({expert.followers})</p>
                </div>
              </div>

              {/* Video Thumbnail */}
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-muted mb-3">
                <img
                  src={expert.video}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <h4 className="font-semibold text-sm text-foreground">{expert.name}</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">{expert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
