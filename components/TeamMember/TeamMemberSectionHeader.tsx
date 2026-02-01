import { memo } from "react";

/**
 * Team Member Section Header Component
 * Displays the section title and description for the Team Members section
 */
const TeamMemberSectionHeader = () => {
  return (
    <header className="flex items-center justify-center w-full flex-col gap-1 text-center max-md:max-w-84 mx-auto">
      <p className="font-nb uppercase text-[#50000B] text-sm mb-4" aria-label="Section category">
        Driven by Science
      </p>
      <h2 id="team-heading" className="font-arizona text-[#50000B] md:text-[54px] text-[40px] leading-11">
        Meet The Brilliant Minds Behind IM8
      </h2>
      <p className="mt-4 text-base text-[#50000B]">
        An unparalled collaboration between academia, medicine, and space
        science.
      </p>
    </header>
  );
};

export default memo(TeamMemberSectionHeader);
