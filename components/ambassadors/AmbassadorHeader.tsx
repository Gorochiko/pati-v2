import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AmbassadorHeaderProps {
  avatar: string;
  name: string;
}

export const AmbassadorHeader = React.memo(({ avatar, name }: AmbassadorHeaderProps) => {
  return (
    <div className="flex items-center gap-5 py-4 pr-6">
      <Avatar>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <p className="text-sm font-bold text-[#50000B]">{name}</p>
    </div>
  );
});

AmbassadorHeader.displayName = 'AmbassadorHeader';
