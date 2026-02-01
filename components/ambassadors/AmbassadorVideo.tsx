import React from 'react';

interface AmbassadorVideoProps {
  videoHref: string;
  thumbnailHref: string;
  name: string;
}

export const AmbassadorVideo = React.memo(({ videoHref, thumbnailHref, name }: AmbassadorVideoProps) => {
  return (
    <video autoPlay loop muted playsInline poster={thumbnailHref} className="w-full rounded-xl" aria-label={`Video testimonial from ${name}`}>
      <source src={videoHref} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
});

AmbassadorVideo.displayName = 'AmbassadorVideo';
