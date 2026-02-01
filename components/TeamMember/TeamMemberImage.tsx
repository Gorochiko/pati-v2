import { memo } from "react";
import AddButton from "@/public/icons/add-button";
import type { MemberType } from "./types";

interface TeamMemberImageProps {
  member: MemberType;
}

/**
 * Team Member Image Component
 * Displays the member's photo with add button overlay
 */
const TeamMemberImage = ({ member }: TeamMemberImageProps) => {
  const { img, name } = member;

  return (
    <div className="h-full md:w-[46%] w-full relative">
      <img
        src={img}
        alt={name}
        className="size-full rounded-l-xl max-md:rounded-r-xl object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-4 right-4 md:hidden" aria-hidden="true">
        <AddButton className="size-12" />
      </div>
    </div>
  );
};

export default memo(TeamMemberImage);
