import { Check, X } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  im8: string | boolean;
  competitor: string | boolean;
  im8Advantage?: string;
}

const comparisonData: ComparisonRow[] = [
  { feature: 'Superfoods, Greens, Fruits, Herbs', im8: true, competitor: true },
  { feature: 'Clinical Dosed B Vitamins', im8: true, competitor: true },
  { feature: 'Vitamin D3', im8: '30mcg Clinical Dosed', competitor: 'No Vitamin D3' },
  { feature: 'Vitamin K2', im8: '40mcg Clinical Dosed', competitor: 'Dosage not disclosed' },
  { feature: 'CoQ10', im8: '100mg Clinical Dosed', competitor: 'Dosage not disclosed' },
  { feature: 'MSM', im8: '1000mg Clinical Dosed', competitor: 'No MSM' },
  { feature: 'Prebiotic fiber', im8: '3g', competitor: '2g', im8Advantage: '50% more' },
  { feature: 'Vitamin C', im8: '900mg', competitor: '420mg', im8Advantage: '114% more' },
  { feature: 'Magnesium', im8: '65mg', competitor: '26mg', im8Advantage: '150% more' },
  { feature: 'Selenium', im8: '70mcg', competitor: '20mcg', im8Advantage: '250% more' },
  { feature: 'Probiotics', im8: '10b CFU', competitor: '7.2b CFU' },
  { feature: 'Postbiotics', im8: 'FloraSMART® (25mg)', competitor: 'No Postbiotics' },
  { feature: 'Cell Rejuvenation Technology 8®', im8: true, competitor: false },
  { feature: 'Stevia-free', im8: true, competitor: false },
  { feature: 'No Refrigeration Needed', im8: true, competitor: false },
];

export const ComparisonTable = () => {
  return (
    <section className="py-16 bg-im8-cream">
      <div className="im8-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-2">
            IM8: The New Gold Standard
          </h2>
          <p className="text-muted-foreground">
            Comparison: IM8 vs. AG1. Superior Clinical Doses and Ingredient Transparency
          </p>
        </div>

        {/* Table */}
        <div className="bg-background rounded-2xl shadow-card overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted border-b border-border">
            <div className="font-semibold text-foreground">Feature</div>
            <div className="text-center">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://im8health.com/cdn/shop/files/sachet-thumb.png?v=1761040601"
                  alt="IM8"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <span className="font-bold text-primary">Daily Ultimate Essentials</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-muted-foreground/20" />
                <span className="font-semibold text-muted-foreground">Leading Greens Powder</span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border">
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 items-center">
                <div className="text-sm text-foreground font-medium">{row.feature}</div>
                
                {/* IM8 Column */}
                <div className="text-center">
                  {typeof row.im8 === 'boolean' ? (
                    row.im8 ? (
                      <Check className="w-5 h-5 text-success mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium text-primary">{row.im8}</span>
                      {row.im8Advantage && (
                        <span className="text-xs text-success font-medium">({row.im8Advantage})</span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Competitor Column */}
                <div className="text-center">
                  {typeof row.competitor === 'boolean' ? (
                    row.competitor ? (
                      <Check className="w-5 h-5 text-success mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )
                  ) : (
                    <span className="text-sm text-muted-foreground">{row.competitor}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="text-primary font-semibold hover:underline">
            View Supplement Facts →
          </button>
        </div>
      </div>
    </section>
  );
};
