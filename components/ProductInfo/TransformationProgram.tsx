"use client";

const experts = [
  {
    name: 'Dr. Dawn Mussallem',
    title: 'Cancer Survivor & Physician at Mayo Clinic',
    image: 'https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298&width=300',
    link: '/pages/90-day-program#curriculum-dr-dawn-mussallem',
  },
  {
    name: 'Bobby Rich',
    title: 'Trainer to David Beckham and World-class Athletes',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_3_68b5f4fc-fe48-466d-9d97-487fbdea1942.png?v=1764066245&width=300',
    link: '/pages/90-day-program#curriculum-bobby-rich',
  },
  {
    name: 'Dr. Suzanne Devkota',
    title: 'Gut Health Expert & Prof at Cedars Sinai',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_4_9e90556f-68ae-405e-a707-89eff3d64066.png?v=1764066309&width=300',
    link: '/pages/90-day-program#curriculum-dr-suzanne-devkota',
  },
  {
    name: 'Tavi Castro',
    title: 'Breathwork Expert & Free-Diving World Record Holder',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_5.png?v=1764066392&width=300',
    link: '/pages/90-day-program#curriculum-tavi-castro',
  },
  {
    name: 'Dr. Amy Shah',
    title: 'Double-Board Certified Physician and Host of "Save Yourself" Podcast',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_7.png?v=1764066430&width=300',
    link: '/pages/90-day-program#curriculum-dr-amy-shah',
  },
  {
    name: 'Dr. Ara Suppiah',
    title: 'Performance & Longevity Physician at LIV Golf',
    image: 'https://im8health.com/cdn/shop/files/Rectangle_6.png?v=1764066459&width=300',
    link: '/pages/90-day-program#curriculum-dr-ara-suppiah',
  },
];

export const TransformationProgram = () => {
  return (
    <div
      className="border-2 border-[#BF9C74] rounded-[20px] px-6 py-7 my-4 shadow-[0_4px_12px_0_rgba(217,119,6,0.12)]
                 md:px-[18px] md:py-[22px] md:rounded-2xl md:my-3
                 sm:px-[14px] sm:py-[18px] sm:rounded-[14px] sm:my-[10px]
                 xs:px-3 xs:py-4 xs:rounded-xl"
      style={{
        background: 'linear-gradient(171deg, #FFEFD6 6.83%, rgba(255, 238, 219, 0.50) 135.82%)'
      }}
    >
      {/* Header */}
      <div className="text-center">
        {/* Pill Badge */}
        <div
          className="inline-flex items-center justify-center gap-[6px] rounded-[20px] px-4 py-2 mb-4 
                     md:px-[14px] md:py-[6px] md:gap-[5px] md:mb-[14px]
                     sm:px-3 sm:py-[5px] sm:gap-1 sm:mb-3 sm:rounded-2xl
                     xs:px-[10px] xs:py-1 xs:rounded-xl"
          style={{
            background: 'linear-gradient(90deg, #EEB87A 0%, #DFCE89 100%)'
          }}
        >
          <span className="text-[14px] md:text-[13px] sm:text-xs xs:text-[11px]">🎓</span>
          <span
            className="text-xs font-bold text-[#50000b] uppercase tracking-[0.5px]
                       md:text-[11px] sm:text-[10px] sm:tracking-[0.3px] xs:text-[9px]"
            style={{ fontFamily: 'Aeonik, sans-serif' }}
          >
            90-DAY MEMBERS ONLY
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[28px] font-medium text-[#50000B] leading-[1.2] mb-2
                     md:text-[22px] md:mb-[6px]
                     sm:text-[19px] sm:mb-[5px] sm:leading-[1.25] sm:px-1
                     xs:text-[17px] xs:leading-[1.3]"
          style={{ fontFamily: 'Aeonik, sans-serif' }}
        >
          90-Day IM8 Transformation Program
        </h3>

        {/* Subtitle */}
        <p
          className="text-[14px] font-medium text-[#50000B] leading-[1.5] mb-5
                     md:text-[13px] md:leading-[1.45] md:mb-4
                     sm:text-xs sm:leading-[1.4] sm:mb-[14px] sm:px-1
                     xs:text-[11px]"
          style={{ fontFamily: 'Aeonik, sans-serif' }}
        >
          Exclusive access to quarterly masterclasses with our world-class Medical and Performance Experts
        </p>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-3 gap-4 mb-5 md:gap-3 sm:gap-[10px] xs:gap-2">
        {experts.map((expert) => (
          <a
            key={expert.name}
            href={expert.link}
            className="flex flex-col items-center text-center no-underline rounded-xl p-2 -m-2
                       transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                       hover:-translate-y-[3px]
                       md:p-[6px] md:-m-[6px]
                       sm:p-1 sm:-m-1 sm:rounded-lg
                       xs:rounded-md"
          >
            <img
              src={expert.image}
              alt={expert.name}
              width="150"
              height="150"
              loading="lazy"
              className="w-full aspect-square rounded-xl object-cover mb-[10px] border-2 border-[#BF9C74]
                         shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]
                         transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                         hover:border-[#a57d52] hover:shadow-[0_6px_18px_-4px_rgba(165,125,82,0.4)]
                         md:mb-2 md:rounded-[10px]
                         sm:mb-[6px] sm:rounded-lg sm:border-[1.5px]
                         xs:rounded-md"
            />
            <p
              className="text-[13px] font-bold text-[#50000b] leading-[1.3] mb-1
                         transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                         hover:text-[#3d000a]
                         md:text-xs md:mb-[3px]
                         sm:text-[11px] sm:mb-[2px]
                         xs:text-[10px]"
              style={{ fontFamily: 'Aeonik, sans-serif' }}
            >
              {expert.name}
            </p>
            <p
              className="text-[11px] font-normal text-[#6b4c3a] leading-[1.4] m-0
                         md:text-[10px] md:leading-[1.35]
                         sm:text-[9px] sm:leading-[1.3]
                         xs:text-[8px]"
              style={{ fontFamily: 'Aeonik, sans-serif' }}
            >
              {expert.title}
            </p>
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p
        className="text-[13px] font-bold text-[#50000b] text-center leading-[1.5] m-0 pt-4 border-t border-[#bf9c74]/30"
        style={{ fontFamily: 'Aeonik, sans-serif' }}
      >
        Get personalized guidance, exclusive content, and direct access to leading experts in health optimization, performance, and longevity.
      </p>

      {/* Learn More Button */}
      <a
        href="/pages/90-day-program"
        className="/* Layout & Spacing */
  flex items-center justify-center gap-2 w-full mt-4 px-5 py-3
  
  /* Background & Border */
  bg-gradient-to-r from-[#EEB87A] to-[#DFCE89] border-none rounded-[12px]
  
  /* Typography */
  text-[13px] font-bold text-[#50000b] uppercase tracking-[0.5px] no-underline
  
  /* Effects & Performance */
  relative overflow-hidden isolate cursor-pointer
  
  /* Box Shadow: Kết hợp shadow ngoài và inset shadow bên trong */
  shadow-[0_2px_8px_-2px_rgba(191,156,116,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]
  
  /* Animation */
  transition-shadow duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)]
  
  /* Hover State */
  hover:shadow-[0_4px_12px_-2px_rgba(191,156,116,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]"
        style={{
          background: 'linear-gradient(90deg, #EEB87A 0%, #DFCE89 100%)',
          fontFamily: 'Aeonik, sans-serif'
        }}
      >
        <span className="relative z-20">Learn More About the Program</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 relative z-20"
          aria-hidden="true"
        >
          <path
            d="M6 12l4-4-4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};