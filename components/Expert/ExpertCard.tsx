import React from 'react';
import type { ExpertType } from './types';
import { ExpertVideo } from './ExpertVideo';
import { ExpertHeader } from './ExpertHeader';
import { ExpertInfo } from './ExpertInfo';

interface ExpertCardProps {
  expert: ExpertType;
}

export const ExpertCard = React.memo(({ expert }: ExpertCardProps) => {
  const { alias, avatar, name, role, thumbnailHref, videoHref } = expert;

  return (
    <article className="flex h-full rounded-3xl flex-col gap-2 overflow-hidden">
      {/* Video Container */}
      <div className="relative rounded-xl">
        <ExpertHeader alias={alias} avatar={avatar} name={name} />
        <ExpertVideo
          videoHref={videoHref}
          thumbnailHref={thumbnailHref}
          name={name}
        />
      </div>

      {/* Expert Info */}
      <ExpertInfo name={name} role={role} />
    </article>
  );
});

ExpertCard.displayName = 'ExpertCard';
