import { memo } from "react";
import type { AmbassadorReview } from "../../types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "../rating";

interface CardProps {
  review: AmbassadorReview;
}

/**
 * Ambassador Review Card Component
 * Displays a single ambassador testimonial with video and rating
 */
const Card = ({ review }: CardProps) => {
  const { avatar, content, name, thumbnailHref, videoHref } = review;
  
  return (
    <article className="bg-white md:w-[400px] w-[340px] md:px-8 md:pb-10 px-6 pb-6 rounded-xl h-full cursor-pointer transition-transform hover:scale-[1.02]">
      {/* Ambassador Info */}
      <div className="py-4 pr-6 flex items-center gap-5">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="font-bold text-sm text-[#50000B]">{name}</p>
      </div>
      
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={thumbnailHref}
        className="w-full rounded-xl"
        aria-label={`Video testimonial from ${name}`}
      >
        <source src={videoHref} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Review Content */}
      <div className="pt-6">
        <Rating className="h-3" />
        <p className="pt-4 font-arizona font-medium text-xl text-[#50000B] leading-relaxed">
          {content}
        </p>
      </div>
    </article>
  );
};

export default memo(Card);
