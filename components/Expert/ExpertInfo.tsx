import React from 'react';

interface ExpertInfoProps {
  name: string;
  role: string;
}

export const ExpertInfo = React.memo(({ name, role }: ExpertInfoProps) => {
  return (
    <div className="flex h-full min-h-24 flex-col justify-center rounded-xl bg-[#f5eaea] px-4 py-2 font-arizona text-base font-medium leading-5 md:min-h-20">
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
});

ExpertInfo.displayName = 'ExpertInfo';
