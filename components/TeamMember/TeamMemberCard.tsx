"use client";
import { memo, useCallback, useState } from "react";
import type { MemberType } from "./types";
import TeamMemberImage from "./TeamMemberImage";
import TeamMemberInfo from "./TeamMemberInfo";
import TeamMemberModal from "./TeamMemberModal";

interface TeamMemberCardProps {
  member: MemberType;
}

/**
 * Team Member Card Component
 * Displays a team member's basic information with click-to-expand functionality
 */
const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOpenModal();
      }
    },
    [handleOpenModal]
  );

  return (
    <>
      <article
        className="rounded-xl flex max-md:flex-col md:bg-[#f5eaea] cursor-pointer relative h-full max-md:h-fit transition-transform hover:scale-[1.02] focus-within:ring-2 focus-within:ring-main-red"
        onClick={handleOpenModal}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View details about ${member.name}, ${member.role}`}
      >
        <TeamMemberImage member={member} />
        <TeamMemberInfo member={member} />
      </article>

      <TeamMemberModal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        member={member}
      />
    </>
  );
};

export default memo(TeamMemberCard);
