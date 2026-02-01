"use client";
import { memo, useCallback, useState } from "react";
import AddButton from "@/public/icons/add-button";
import type { MemberType } from "../types";
import InfoModal from "../info-modal";

interface CardProps {
  member: MemberType;
}

/**
 * Team Member Card Component
 * Displays a team member's basic information with click-to-expand functionality
 */
const Card = ({ member }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { role, img, name } = member;

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <article
        className="rounded-xl flex max-md:flex-col md:bg-[#f5eaea] cursor-pointer relative h-full max-md:h-fit transition-transform hover:scale-[1.02] focus-within:ring-2 focus-within:ring-main-red"
        onClick={handleOpenModal}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpenModal();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View details about ${name}, ${role}`}
      >
        {/* Member Image */}
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

        {/* Member Info */}
        <div className="md:py-6 md:pr-8 md:pl-4 pt-3 flex flex-col gap-1 text-base md:w-[54%]">
          <p className="font-bold text-[#50000B]">{name}</p>
          <p className="max-xl:text-xs max-md:text-base text-[#50000B]">{role}</p>
        </div>

        {/* Desktop Add Button */}
        <div className="absolute bottom-4 right-4 max-xl:bottom-3 max-xl:right-3 max-md:hidden" aria-hidden="true">
          <AddButton className="size-12 max-xl:size-8" />
        </div>
      </article>

      <InfoModal
        isModalOpen={isModalOpen}
        setIsModalOpen={handleCloseModal}
        member={member}
      />
    </>
  );
};

export default memo(Card);
