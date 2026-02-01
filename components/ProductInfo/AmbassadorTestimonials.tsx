"use client";
import { useState, useRef, useEffect } from 'react';

interface VideoTestimonial {
  id: string;
  name: string;
  thumbnail: string;
  videoUrl: string;
}

const testimonials: VideoTestimonial[] = [
  {
    id: 'popup_video_1',
    name: 'Robin B',
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-expert_robinB2.jpg?v=1731999065',
    videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/12eb3b01fd54404d81ef22a20d415f15/12eb3b01fd54404d81ef22a20d415f15.HD-1080p-2.5Mbps-38313438.mp4?v=0',
  },
  {
    id: 'popup_video_2',
    name: 'Bobby Rich',
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/influe-carou_bobbyRich2.jpg?v=1731863977',
    videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/e83246a2555949139036fce9bc1359a2/e83246a2555949139036fce9bc1359a2.HD-1080p-3.3Mbps-38232086.mp4?v=0',
  },
  {
    id: 'popup_video_3',
    name: 'Amy Shah',
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-expert_amyShah2.jpg?v=1731864964',
    videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/f7f68153342f4566ad00f411e2fb407b/f7f68153342f4566ad00f411e2fb407b.HD-1080p-7.2Mbps-38222859.mp4?v=0',
  },
  {
    id: 'popup_video_4',
    name: 'Dustin Poirier',
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-influ_dustinPoirier.jpg?v=1731833492',
    videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/064b8beaa0b04a4fad25676155936d3a/064b8beaa0b04a4fad25676155936d3a.HD-1080p-2.5Mbps-38221672.mp4?v=0',
  },
  {
    id: 'popup_video_5',
    name: 'Testimonial 5',
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/image_54.png?v=1731863088',
    videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/809d17a1684d40058d499ecd9afe9e21/809d17a1684d40058d499ecd9afe9e21.HD-1080p-4.8Mbps-38222820.mp4?v=0',
  },
  {
    id: 'popup_video_6',
    name: 'Testimonial 6',
    thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/1f4b2af008104c92a29f9d78814f1aa0.thumbnail.0000000000.jpg?v=1731860287',
    videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/1f4b2af008104c92a29f9d78814f1aa0/1f4b2af008104c92a29f9d78814f1aa0.HD-1080p-3.3Mbps-38232121.mp4?v=0',
  },
];

export const AmbassadorTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = (video: VideoTestimonial) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsMuted(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video play interrupted:', error);
        });
      }
    }
        return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [selectedVideo]);

  return (
    <div className="my-6 overflow-hidden">
      {/* Title */}
      <h3 
        className="text-[20px] font-medium text-[#50000b] leading-[120%] tracking-[-0.4px] mb-4 text-center"
        style={{ fontFamily: 'ABC Arizona Flare, serif' }}
      >
        What our IM8 Ambassadors are saying
      </h3>

      {/* Video Carousel - Horizontal Scroll */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-2 justify-between pt-4">
          {testimonials.slice(1).map((video) => (
            <div
              key={video.id}
              onClick={() => openVideo(video)}
              className="relative flex-shrink-0 w-[18%] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={video.thumbnail}
                alt={video.name}
                className="w-full h-full object-cover"
              />
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <svg 
                  className="w-16 h-16 transition-transform group-hover:scale-110" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.75" cy="12.25" r="9.25" fill="#50000B" />
                  <g clipPath="url(#clip0_779_10354)">
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M20.4865 3.51351L12 0L3.51351 3.51351L0 12L3.51351 20.4865L12 24L20.4865 20.4865L24 12L20.4865 3.51351ZM9.75 15.8971L16.5 12L9.75 8.10289V15.8971Z" 
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_779_10354">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup */}
      {selectedVideo && (
        <>
          {/* Overlay */}
          <div
            onClick={closeVideo}
            className="fixed left-0 top-0 w-full h-full bg-[rgba(242,224,221,0.5)] backdrop-blur-[8px] z-50"
          />

          {/* Popup */}
          <div className="fixed left-0 top-0 w-full h-full z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-[9/16] md:aspect-video">
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2974_31845)">
                    <g filter="url(#filter0_b_2974_31845)">
                      <path d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z" fill="white" fillOpacity="0.8" />
                      <path d="M7.40974 7.40974L24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974Z" stroke="#50000B" />
                    </g>
                    <path d="M30.3633 30.3646L17.6354 17.6367" stroke="#50000B" strokeWidth="2" strokeLinecap="square" />
                    <path d="M30.3633 17.6367L17.6354 30.3646" stroke="#50000B" strokeWidth="2" strokeLinecap="square" />
                  </g>
                  <defs>
                    <filter id="filter0_b_2974_31845" x="-12" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2974_31845" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2974_31845" result="shape" />
                    </filter>
                    <clipPath id="clip0_2974_31845">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute left-6 bottom-6 w-12 h-12 z-10 cursor-pointer rounded-full hover:opacity-80 transition-opacity"
              >
                {isMuted ? (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z" fill="white" fillOpacity="0.8" />
                    <path d="M29.5498 26.8C30.3315 26.0202 30.8319 25.0028 30.9723 23.9076C31.1127 22.8125 30.8851 21.7017 30.3253 20.75" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="square" />
                    <path d="M32.3496 29.6C33.8136 28.1262 34.7254 26.1933 34.9317 24.1262C35.1381 22.0592 34.6264 19.9841 33.4826 18.25" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="square" />
                    <path d="M19.5 27.75H15C14.4696 27.75 13.9609 27.5393 13.5858 27.1642C13.2107 26.7891 13 26.2804 13 25.75V20.75C13 20.2196 13.2107 19.7109 13.5858 19.3358C13.9609 18.9607 14.4696 18.75 15 18.75H19.5L27 13.25V20.25" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" />
                    <path d="M27 24.25V33.25L22 29.5835" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="square" />
                    <path d="M13.5 33.75L34.5 12.75" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                ) : (
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0L54.6306 9.36937L64 32L54.6306 54.6306L32 64L9.36937 54.6306L0 32L9.36937 9.36937L32 0Z" fill="white" />
                    <path d="M41.333 32H46.6663" stroke="#50000B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
                    <path d="M39.5332 25.3332L44.1332 22.6665" stroke="#50000B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
                    <path d="M39.5332 38.6665L44.1332 41.3332" stroke="#50000B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
                    <path d="M35.9997 45.3332L25.9997 37.9998H19.9997C19.2924 37.9998 18.6142 37.7189 18.1141 37.2188C17.614 36.7187 17.333 36.0404 17.333 35.3332V28.6665C17.333 27.9593 17.614 27.281 18.1141 26.7809C18.6142 26.2808 19.2924 25.9998 19.9997 25.9998H25.9997L35.9997 18.6665V45.3332Z" stroke="#50000B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                )}
              </button>

              {/* Video */}
              <video
                ref={videoRef}
                src={selectedVideo.videoUrl}
                poster={selectedVideo.thumbnail}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover rounded-2xl absolute top-0 left-0 right-0 bottom-0"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
