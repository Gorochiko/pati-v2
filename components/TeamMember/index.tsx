import { memo } from "react";
import Container from "../ui/Container";
import { bgImg, bgImgSm, teamMembers } from "./data";
import Card from "./card";

/**
 * TeamMember Section Component
 * Displays the scientific advisory board and team members
 */
const TeamMember = () => {
  return (
    <section 
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      aria-labelledby="team-heading"
    >
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 -z-10 md:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImgSm})`,
        }}
      />

      <Container
        id="team"
        className="md:py-26 py-14 relative z-10"
        isLargeScreen
      >
        <div className="flex flex-col md:gap-14 gap-8">
          {/* Section Header */}
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

          {/* Team Grid */}
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4" role="list">
            {teamMembers.map((member) => (
              <Card key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(TeamMember);
