const ambassadors = [
  {
    name: 'Tavi Castro',
    handle: '@tavicastro',
    followers: '4.8M',
    image: 'https://im8health.com/cdn/shop/files/Tavi_Castro_e1d9b739-631c-464a-a763-c188f10709eb.png?v=1731573850',
    video: 'https://im8health.com/cdn/shop/files/preview_images/4a3a9f0122d24d6988bbf5b9ed6a38bb.thumbnail.0000000000.jpg?v=1733712779',
    quote: "As a professional freediver, I'm extremely careful with what I put into my body. With IM8, I know I'm fueling my body with only the best, helping me stay resilient both in and out of the water.",
  },
  {
    name: 'Dustin Poirier',
    handle: '@dustinpoirier',
    followers: '5.3M',
    image: 'https://im8health.com/cdn/shop/files/dustinpoirier.jpg?v=1731307218',
    video: 'https://im8health.com/cdn/shop/files/preview_images/a7917aeeef894fc7af8d86db3acafef5.thumbnail.0000000000.jpg?v=1733711989',
    quote: "As a fighter, I've tried it all—endless pills and powders just to keep up. But after my team checked out the science, partnering with IM8 was a no-brainer.",
  },
  {
    name: 'Tim Biohacker',
    handle: '@timbiohacker',
    followers: '484K',
    image: 'https://im8health.com/cdn/shop/files/timbiohacker.jpg?v=1731306875',
    video: 'https://im8health.com/cdn/shop/files/preview_images/90135e85a8eb49659fc3e2cbb43896e5.thumbnail.0000000000.jpg?v=1733712963',
    quote: "I'm all about calling out products that fall short of their claims. IM8, though, delivers exactly what it promises—pure, effective ingredients.",
  },
  {
    name: 'Fikshun',
    handle: '@dance10fikshun',
    followers: '2.6M',
    image: 'https://im8health.com/cdn/shop/files/dance10fikshun.jpg?v=1731307005',
    video: 'https://im8health.com/cdn/shop/files/preview_images/4d801fb0e5524d5a9c43dc987966df6a.thumbnail.0000000000.jpg?v=1733712831',
    quote: 'My life is all about movement, balance, and expression. IM8 keeps me energized and feeling great.',
  },
  {
    name: 'David Nurse',
    handle: '@davidnursenba',
    followers: '162K',
    image: 'https://im8health.com/cdn/shop/files/influ-carou_davidnurse.png?v=1731575099',
    video: 'https://im8health.com/cdn/shop/files/preview_images/01fc5e8bd9934532b9120f5277539ccc.thumbnail.0000000000.jpg?v=1733712123',
    quote: "As a performance coach, I'm always seeking ways to stay sharp and energized. IM8 is hands down the best all-in-one supplement.",
  },
  {
    name: 'Joseph Abell',
    handle: '@thejosephabell',
    followers: '2M',
    image: 'https://im8health.com/cdn/shop/files/Joseph_Abell_10732562-f935-4c47-b403-7f9e062cd921.png?v=1731574411',
    video: 'https://im8health.com/cdn/shop/files/preview_images/cb2b8daf5bbe45299c834c593e147522.thumbnail.0000000000.jpg?v=1733712233',
    quote: 'Nutrition should be as exciting as it is nourishing. IM8 redefines nutrition for me.',
  },
  {
    name: 'TJ DeFalco',
    handle: '@tjdefalco',
    followers: '274K',
    image: 'https://im8health.com/cdn/shop/files/tjdefalco.jpg?v=1731306362',
    video: 'https://im8health.com/cdn/shop/files/preview_images/e2c97673de604d8d9395afdda954e1d8.thumbnail.0000000000.jpg?v=1733712921',
    quote: 'On the court, peak performance is non-negotiable. IM8 fuels my energy and mental clarity.',
  },
  {
    name: 'Bobby Rich',
    handle: '@mrbobbyrich',
    followers: '105K',
    image: 'https://im8health.com/cdn/shop/files/Bobby_Rich_aca1a6fc-96f2-448e-8f8c-17f07a91fad6.png?v=1731574045',
    video: 'https://im8health.com/cdn/shop/files/preview_images/277ed49454544ca4a856e0e3faf4730c.thumbnail.0000000000.jpg?v=1733712043',
    quote: 'As a former athlete and trainer to high performers, including David and Victoria Beckham, IM8 helps me to stay on top of my game.',
  },
];

export const InfluencerTestimonials = () => {
  return (
    <section className="py-16 bg-im8-cream">
      <div className="im8-container">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground mb-2">Feel The Difference</p>
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            What Our <span className="text-primary">IM8 Ambassadors</span> Are Saying
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ambassadors.map((ambassador) => (
            <div key={ambassador.name} className="group cursor-pointer">
              {/* Profile */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={ambassador.image}
                  alt={ambassador.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-medium text-foreground">{ambassador.handle}</p>
                  <p className="text-[10px] text-muted-foreground">({ambassador.followers})</p>
                </div>
              </div>

              {/* Video Thumbnail */}
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-muted mb-3">
                <img
                  src={ambassador.video}
                  alt={ambassador.name}
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

              {/* Quote */}
              <p className="text-xs text-muted-foreground line-clamp-3">{ambassador.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
