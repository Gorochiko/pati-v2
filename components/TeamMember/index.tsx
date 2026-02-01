import { memo } from "react";
import Container from "../ui/Container";
import { BACKGROUND_IMAGE, BACKGROUND_IMAGE_MOBILE, TEAM_MEMBERS } from "./data";
import TeamMemberCard from "./TeamMemberCard";
import TeamMemberSectionHeader from "./TeamMemberSectionHeader";

/**
 * TeamMember Section Component
 * Displays the scientific advisory board and team members
 */
const TeamMember = () => {
  return (
    <section 
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE})`,
      }}
      aria-labelledby="team-heading"
    >
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 -z-10 md:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE_MOBILE})`,
        }}
        aria-hidden="true"
      />

      <Container
        id="team"
        className="md:py-26 py-14 relative z-10"
        isLargeScreen
      >
        <div className="flex flex-col md:gap-14 gap-8">
          <TeamMemberSectionHeader />

          {/* Team Grid */}
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4" role="list">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(TeamMember);
