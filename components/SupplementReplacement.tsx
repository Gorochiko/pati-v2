const supplements = [
  { name: 'Multivitamins, Minerals & Antioxidants', price: '$35' },
  { name: 'Superfoods, Greens & Fruits', price: '$50' },
  { name: 'Immunity', price: '$20' },
  { name: 'Electrolytes', price: '$40' },
  { name: 'Adaptogens & Super Mushrooms', price: '$30' },
  { name: 'Prebiotics, Probiotics & Postbiotics', price: '$40' },
  { name: 'CoQ10 (Heart Vitality)', price: '$30' },
  { name: 'MSM (Joint & Muscle Vitality)', price: '$25' },
  { name: 'Essential Amino Acids', price: '$20' },
];

export const SupplementReplacement = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="im8-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              Replaces 16 Supplements.<br />
              <span className="text-primary">Saving You Money.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              All-in-One Formula Simplifies Your Routine. Save Money and Time with IM8.
            </p>

            {/* Annual Savings */}
            <div className="bg-success/10 rounded-2xl p-6 inline-block">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Annual Savings</p>
              <p className="text-3xl lg:text-4xl font-bold text-success">$2,532 - $3,000</p>
              <p className="text-muted-foreground">per year when switching to IM8</p>
            </div>

            <button className="mt-6 block w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold transition-all duration-200">
              Shop Now
            </button>
          </div>

          {/* Right - Price Comparison */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Breakdown</h3>
            
            <div className="space-y-3">
              {supplements.map((supplement) => (
                <div
                  key={supplement.name}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted-foreground">{supplement.name}</span>
                  <span className="text-sm text-muted-foreground line-through">{supplement.price}</span>
                </div>
              ))}
              
              {/* Total Traditional */}
              <div className="flex items-center justify-between py-3 border-t-2 border-border">
                <span className="font-semibold text-foreground">Your Traditional Supplements</span>
                <span className="font-semibold text-muted-foreground line-through">$290</span>
              </div>
              
              {/* IM8 Price */}
              <div className="flex items-center justify-between py-3 bg-primary/10 rounded-xl px-4 -mx-2">
                <span className="font-bold text-primary">IM8 Daily Ultimate Essentials</span>
                <span className="text-2xl font-bold text-primary">$89</span>
              </div>
            </div>

            <button className="mt-6 w-full py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="mt-12 flex justify-center">
          <img
            src="https://im8health.com/cdn/shop/files/sachet-box.png?v=1761040602&width=838"
            alt="IM8 Product Box"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};
