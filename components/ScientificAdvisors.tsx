const scientists = [
  {
    name: 'Prof. Suzanne Devkota',
    title: "Director of Cedars-Sinai Human Microbiome Research Institute",
    image: 'https://im8health.com/cdn/shop/files/Frame_1000004731.png?v=1727767462',
  },
  {
    name: 'Dr. James L. Green',
    title: 'Former Chief Scientist of NASA',
    image: 'https://im8health.com/cdn/shop/files/Frame_1000004729.png?v=1727767462',
  },
  {
    name: 'Dr. Dawn Mussallem',
    title: 'CMO of Fountain Life & Integrative Oncologist at Mayo Clinic',
    image: 'https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298',
  },
  {
    name: 'Dr. James DiNicolantonio',
    title: 'Cardiovascular Research Scientist and Doctor of Pharmacy',
    image: 'https://im8health.com/cdn/shop/files/Dr._James_D.png?v=1730708665',
  },
  {
    name: 'Dr. Jeremy London',
    title: 'Board Certified Cardiovascular Surgeon',
    image: 'https://im8health.com/cdn/shop/files/sab_London_headshot.jpg?v=1741755281',
  },
  {
    name: 'Dr. Amy Shah',
    title: 'Double-Board Certified Physician & Host of "Save Yourself" Podcast',
    image: 'https://im8health.com/cdn/shop/files/sab_Shah_headshot.jpg?v=1741754337',
  },
];

export const ScientificAdvisors = () => {
  return (
    <section className="py-16 bg-im8-cream">
      <div className="im8-container">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Driven by Science
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            Meet The Brilliant Minds Behind IM8
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            An unparalleled collaboration between academia, medicine, and space science.
          </p>
        </div>

        {/* Scientists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {scientists.map((scientist) => (
            <div
              key={scientist.name}
              className="group cursor-pointer text-center"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src={scientist.image}
                  alt={scientist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-sm text-foreground">{scientist.name}</h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{scientist.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
