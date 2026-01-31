import React from 'react';
import { CheckIcon, XIcon } from './icons';

interface FeatureRowProps {
  im8Content: string | { main: string; detail?: string };
  im8HasFeature: boolean;
  competitorContent: string | { main: string; detail?: string };
  competitorHasFeature: boolean;
  isVisible: boolean;
  isLast?: boolean;
}

export const FeatureRow: React.FC<FeatureRowProps> = ({
  im8Content,
  im8HasFeature,
  competitorContent,
  competitorHasFeature,
  isVisible,
  isLast = false,
}) => {
  if (!isVisible) return null;

  const renderContent = (content: string | { main: string; detail?: string }, hasFeature: boolean) => {
    const highlightClass = hasFeature ? 'font-bold text-[14px] lg:text-[16px]' : 'font-normal text-[12px] lg:text-[14px]';
    
    if (typeof content === 'string') {
      return (
        <span className={highlightClass}>
          {content}
        </span>
      );
    }

    return (
      <div>
        <span className={`font-bold text-[14px] lg:text-[16px]`}>
          {content.main}
        </span>
        {content.detail && (
          <>
            <br />
            <span className="text-[12px] font-normal">
              {content.detail}
            </span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flex border-t border-[#50000B]">
      {/* IM8 Feature */}
      <div className="w-1/2 px-[10px] py-[5px] lg:px-[48px] lg:py-[5px] h-14 flex items-center border-r border-[#50000B]">
        <div className="flex items-center justify-start gap-3 w-full text-[#50000B]">
          {im8HasFeature ? (
            <CheckIcon color="#A40011" />
          ) : (
            <XIcon opacity={0.44} />
          )}
          <div className="leading-[135%] flex-1 text-left">
            {renderContent(im8Content, im8HasFeature)}
          </div>
        </div>
      </div>

      {/* Competitor Feature */}
      <div className="w-1/2 px-[10px] py-[5px] lg:px-[48px] lg:py-[5px] h-14 flex items-center">
        <div className="flex items-center justify-start gap-3 w-full text-[#18332A]">
          {competitorHasFeature ? (
            <CheckIcon color="#18332A" />
          ) : (
            <XIcon opacity={0.44} />
          )}
          <div className="leading-[135%] flex-1 text-left">
            {renderContent(competitorContent, competitorHasFeature)}
          </div>
        </div>
      </div>
    </div>
  );
};
