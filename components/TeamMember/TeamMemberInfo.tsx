import { memo } from "react";
import AddButton from "@/public/icons/add-button";
import type { MemberType } from "./types";

interface TeamMemberInfoProps {
  member: MemberType;
}

/**
 * Team Member Info Component
 * Displays the member's name and role with desktop add button
 */
const TeamMemberInfo = ({ member }: TeamMemberInfoProps) => {
  const { name, role } = member;

  return (
    <div className="md:py-6 md:pr-8 md:pl-4 pt-3 flex flex-col gap-1 text-base md:w-[54%]">
      <p className="font-bold text-[#50000B]">{name}</p>
      <p className="max-xl:text-xs max-md:text-base text-[#50000B]">{role}</p>
      
      {/* Desktop Add Button */}
      <div className="absolute bottom-4 right-4 max-xl:bottom-3 max-xl:right-3 max-md:hidden" aria-hidden="true">
        <AddButton className="size-12 max-xl:size-8" />
      </div>
    </div>
  );
};

export default memo(TeamMemberInfo);
