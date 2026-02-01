import React from 'react';
import type { AmbassadorReview } from './types';
import { AmbassadorHeader } from './AmbassadorHeader';
import { AmbassadorVideo } from './AmbassadorVideo';
import { AmbassadorContent } from './AmbassadorContent';

interface AmbassadorCardProps {
  review: AmbassadorReview;
}

export const AmbassadorCard = React.memo(({ review }: AmbassadorCardProps) => {
  const { avatar, content, name, thumbnailHref, videoHref } = review;

  return (
    <article className="h-full w-[340px] cursor-pointer rounded-xl bg-white px-6 pb-6 transition-transform hover:scale-[1.02] md:w-[400px] md:px-8 md:pb-10">
      <AmbassadorHeader avatar={avatar} name={name} />
      <AmbassadorVideo videoHref={videoHref} thumbnailHref={thumbnailHref} name={name} />
      <AmbassadorContent content={content} />
    </article>
  );
});

AmbassadorCard.displayName = 'AmbassadorCard';
