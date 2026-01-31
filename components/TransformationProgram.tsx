const experts = [
  {
    name: 'Dr. Dawn Mussallem',
    title: 'Cancer Survivor & Physician at Mayo Clinic',
    image: 'https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298&width=300',
  },
  {
    name: 'Bobby Rich',
    title: 'Trainer to David Beckham and World-class Athletes',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_3_68b5f4fc-fe48-466d-9d97-487fbdea1942.png?v=1764066245&width=300',
  },
  {
    name: 'Dr. Suzanne Devkota',
    title: 'Gut Health Expert & Prof at Cedars Sinai',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_4_9e90556f-68ae-405e-a707-89eff3d64066.png?v=1764066309&width=300',
  },
  {
    name: 'Tavi Castro',
    title: 'Breathwork Expert & Free-Diving World Record Holder',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_5.png?v=1764066392&width=300',
  },
  {
    name: 'Dr. Amy Shah',
    title: 'Double-Board Certified Physician',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_7.png?v=1764066430&width=300',
  },
  {
    name: 'Dr. Ara Suppiah',
    title: 'Performance & Longevity Physician at LIV Golf',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_6.png?v=1764066459&width=300',
  },
];

export const TransformationProgram = () => {
  return (
    <div className="bg-im8-cream rounded-2xl p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-500">🎓</span>
        <span className="text-xs font-bold text-primary tracking-wider">90-DAY MEMBERS ONLY</span>
      </div>

      <div>
        <h3 className="text-lg font-bold text-foreground">90-Day IM8 Transformation Program</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Exclusive access to quarterly masterclasses with our world-class Medical and Performance Experts
        </p>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {experts.map((expert) => (
          <div key={expert.name} className="text-center group cursor-pointer">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-[10px] font-semibold text-foreground leading-tight">{expert.name}</p>
            <p className="text-[9px] text-muted-foreground leading-tight mt-0.5 line-clamp-2">{expert.title}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Get personalized guidance, exclusive content, and direct access to leading experts in health optimization, performance, and longevity.
      </p>

      <a
        href="#"
        className="inline-block text-sm font-semibold text-primary hover:underline"
      >
        Learn More About the Program →
      </a>
    </div>
  );
};
