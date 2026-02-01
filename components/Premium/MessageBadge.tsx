import { cn } from "@/lib/utils";

interface MessageBadgeProps {
  message: string;
  isGradient?: boolean;
}

export const MessageBadge = ({ message, isGradient = false }: MessageBadgeProps) => {
  return (
    <strong
      className={cn(
        "w-fit rounded-full px-4 py-2 font-nb text-xs text-white",
        isGradient 
          ? "bg-gradient-to-r from-[#a40011] to-[#e78d2d]" 
          : "bg-[#960010]"
      )}
    >
      {message}
    </strong>
  );
};