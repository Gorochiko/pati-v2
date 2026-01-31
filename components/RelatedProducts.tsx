const products = [
  {
    name: 'Daily Ultimate Longevity',
    badge: null,
    description: "The World's first supplement scientifically formulated to support all 12 hallmarks of aging.",
    price: '$119',
    image: 'https://im8health.com/cdn/shop/files/longevity-primary-drawer-1.jpg?v=1759900880&width=940',
    hoverImage: 'https://im8health.com/cdn/shop/files/pdp_carousel_BSK01_grid-hover.jpg?v=1759900880&width=940',
  },
  {
    name: 'The Beckham Stack: Essentials + Longevity Set',
    badge: 'Best Value',
    description: 'Daily Ultimate Essentials and Daily Ultimate Longevity.',
    price: '$196',
    image: 'https://im8health.com/cdn/shop/files/20250922_DB_IM8_S10_102_1X1_2_1.jpg?v=1762225129&width=940',
    hoverImage: 'https://im8health.com/cdn/shop/files/20250922_DB_IM8_S10_102_16X9_1.png?v=1762225057&width=940',
  },
];

export const RelatedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="im8-container">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-success text-success-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <p className="text-xs text-muted-foreground mb-1">The Ultimate Daily Ritual</p>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">From {product.price}</span>
                </div>
                <button className="mt-4 w-full py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold transition-all duration-200">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
