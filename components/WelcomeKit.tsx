export const WelcomeKit = () => {
  return (
    <section className="py-16 bg-im8-cream">
      <div className="im8-container">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            Get Started with IM8 for Daily Ultimate Nutrition
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div>
              <img
                src="https://im8health.com/cdn/shop/files/welcome-kit-sach.png?v=1761040602&width=1200"
                alt="Welcome Kit"
                className="w-full rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="bg-background rounded-2xl p-6 shadow-card">
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="text-xl font-bold text-foreground">Daily Ultimate Essentials</h3>
                <span className="text-2xl font-bold text-primary">$89</span>
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  First Time Purchase:
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Signature Red Cup</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">$28</span>
                      <span className="text-sm font-bold text-success">Free</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Daily Ultimate Essentials Single-Serve Storage Box</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">$8</span>
                      <span className="text-sm font-bold text-success">Free</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">5x Bonus Daily Ultimate Essentials Single-Serve Sachets</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">$18</span>
                      <span className="text-sm font-bold text-success">Free</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <div className="flex items-center gap-2">
                    <span className="text-success font-medium">Save $54</span>
                    <span className="text-2xl font-bold text-primary">$89</span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg font-semibold transition-all duration-200">
                Get your Free IM8 Welcome Kit Now**
              </button>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span><strong>30-Day</strong> money back guarantee</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span><strong>Update</strong> or <strong>cancel</strong> anytime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
