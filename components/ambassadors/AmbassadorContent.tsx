import React from 'react';
import Rating from './Rating';

interface AmbassadorContentProps {
  content: string;
}

export const AmbassadorContent = React.memo(({ content }: AmbassadorContentProps) => {
  return (
    <div className="pt-6">
      <Rating className="h-3" />
      <p className="pt-4 font-arizona text-xl font-medium leading-relaxed text-[#50000B]">{content}</p>
    </div>
  );
});

AmbassadorContent.displayName = 'AmbassadorContent';
