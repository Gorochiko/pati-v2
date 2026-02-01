import FiveStars from '../../public/icons/five-stars';

export const AmbassadorsSectionHeader = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4">
        <FiveStars aria-hidden="true" />
        <p className="font-nb text-sm uppercase text-[#50000B]">Feel The Difference</p>
      </div>
      <h2 id="ambassadors-heading" className="text-center font-arizona text-[40px] leading-11 text-[#50000B] md:text-[54px]">
        What Our IM8 Ambassadors Are Saying
      </h2>
    </header>
  );
};
