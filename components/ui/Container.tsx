import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  isLargeScreen?: boolean;
} & Omit<React.ComponentProps<"section">, "className">;

const Container = ({
  children,
  className,
  isLargeScreen = false,
  ...props
}: Props) => {
  return (
    <section
      className={cn(
        "container mx-auto md:px-10 px-5 max-w-7xl ",
        isLargeScreen && "max-w-375 md:px-12.5",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Container;