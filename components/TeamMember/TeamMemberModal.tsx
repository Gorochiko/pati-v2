import { memo, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import RedX from "@/public/icons/red-x";
import type { MemberType } from "./types";

interface TeamMemberModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  member: MemberType;
}

/**
 * Team Member Info Modal
 * Displays detailed information about a team member
 */
const TeamMemberModal = ({ member, isModalOpen, onClose }: TeamMemberModalProps) => {
  const { modalImg, name, role, description, href } = member;

  const handleLearnMore = useCallback(() => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }, [href]);

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-[rgba(242,224,221,.5)] blur-sm">
        <DialogContent
          className="pt-16 pb-10.5 px-8 max-w-2xl"
          showCloseButton={false}
          aria-describedby="member-description"
        >
          <DialogClose
            className="absolute top-6 right-6 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Close modal"
          >
            <RedX className="size-8" />
          </DialogClose>
          <div className="flex flex-col gap-7.5">
            <div className="h-45">
              <img
                src={modalImg}
                alt={`${name} - ${role}`}
                className="w-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <ScrollArea className="max-h-[40vh] pr-4" style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#8b4444 transparent'
            }}>
              <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #8b4444;
                  border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #50000b;
                }
              `}</style>
              <div className="custom-scrollbar text-[#50000B]">
                <DialogHeader className="gap-0 mb-5">
                  <DialogTitle className="text-[32px] font-arizona text-[#50000B]">
                    {name}
                  </DialogTitle>
                  <p className="text-base font-bold text-[#50000B]">{role}</p>
                </DialogHeader>
                <div id="member-description" className="space-y-3">
                  {description.map((paragraph, index) => (
                    <p key={index} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollArea>
            {href && (
              <Button
                onClick={handleLearnMore}
                className="rounded-full uppercase bg-main-red transition duration-300 hover:bg-main-dark-red font-bold text-base h-fit py-3.25 px-4.25"
                aria-label={`Learn more about ${name}`}
              >
                Learn More
              </Button>
            )}
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default memo(TeamMemberModal);
