'use client';

import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Dimensional Grid Background - Desktop Only */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0 organ-systems__dimension-bg opacity-100 transition-opacity duration-600 ease-out">
        {/* Perspective Grid Container */}
        <div className="absolute inset-0 [perspective:800px] [perspective-origin:50%_30%]">
          {/* Horizontal Grid Lines */}
          <div className="organ-systems__grid-plane organ-systems__grid-plane--horizontal absolute top-0 -left-1/2 w-[200%] h-[200%] min-h-screen [transform:rotateX(70deg)_translateZ(-100px)] [transform-origin:center_top] animate-gridScrollVertical opacity-100 [filter:blur(0.5px)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [perspective:1000px]" />
          
          {/* Vertical Grid Lines */}
          <div className="organ-systems__grid-plane organ-systems__grid-plane--vertical absolute top-0 -left-1/2 w-[200%] h-[200%] min-h-screen [transform:rotateX(70deg)_translateZ(-100px)] [transform-origin:center_top] animate-gridScrollHorizontal opacity-100 [filter:blur(0.5px)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [perspective:1000px]" />
        </div>
        
        {/* Distributed Glow Effect */}
        <div className="organ-systems__grid-glow absolute inset-0 [filter:blur(100px)] animate-gridGlowPulse opacity-100 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)]" />
        
        {/* Top Fade Overlay */}
        <div className="organ-systems__grid-overlay absolute inset-0 opacity-100" />
      </div>

      {/* Ambient Glow Orbs - Desktop Only */}
      <div className="hidden md:block organ-systems__glow-orb organ-systems__glow-orb--red absolute rounded-full [filter:blur(80px)] pointer-events-none opacity-100 animate-orbPulse z-[1] w-[600px] h-[600px] top-[10%] -left-[15%] [animation-delay:0s] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)]" 
        aria-hidden="true" 
      />
      <div className="hidden md:block organ-systems__glow-orb organ-systems__glow-orb--pink absolute rounded-full [filter:blur(80px)] pointer-events-none opacity-100 animate-orbPulse z-[1] w-[550px] h-[550px] bottom-0 -right-[15%] [animation-delay:-5s] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)]" 
        aria-hidden="true" 
      />
    </>
  );
};
