import React from 'react';

interface ExpertHeaderProps {
  alias: string;
  avatar: string;
  name: string;
}

export const ExpertHeader = React.memo(({ alias, avatar, name }: ExpertHeaderProps) => {
  return (
    <div className="absolute top-0 z-10 flex w-full items-center gap-2 rounded-t-2xl bg-[#f5eaea]/60 px-4 py-3 max-md:absolute md:bg-[#f5eaea]">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="size-7 rounded-full object-cover"
        loading="lazy"
      />
      <span className="text-sm font-bold text-[#50000B]">{alias}</span>
    </div>
  );
});

ExpertHeader.displayName = 'ExpertHeader';
