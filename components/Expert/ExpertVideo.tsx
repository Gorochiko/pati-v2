import React from 'react';

interface ExpertVideoProps {
  videoHref: string;
  thumbnailHref: string;
  name: string;
}

export const ExpertVideo = React.memo(({ videoHref, thumbnailHref, name }: ExpertVideoProps) => {
  return (
    <div className="relative rounded-b-xl  max-md:rounded-t-xl">
      <video
        className="aspect-2/3 w-full rounded-b-xl object-cover max-md:rounded-t-xl"
        poster={thumbnailHref}
        muted
        loop
        playsInline
        autoPlay
        aria-label={`${name}'s testimonial video`}
      >
        <source src={videoHref} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

ExpertVideo.displayName = 'ExpertVideo';
