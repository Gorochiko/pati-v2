import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BACKGROUND_IMAGE, EXPERTS_DATA } from "./data";
import { ExpertCard } from "./ExpertCard";
import { ExpertsSectionHeader } from "./ExpertsSectionHeader";
import type { ExpertType } from "./types";

const CAROUSEL_OPTIONS = {
  align: "start" as const,
  dragFree: true,
  loop: false,
};

const Experts = () => {
  return (
    <section id="experts" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full">
        <img
          src={BACKGROUND_IMAGE}
          alt="Experts section background"
          className="size-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="py-14 md:py-26">
        <ExpertsSectionHeader />

        {/* Experts Carousel */}
        <Carousel opts={CAROUSEL_OPTIONS} className="w-full rounded-3xl">
          <CarouselContent className="px-14">
            {EXPERTS_DATA.map((expert: ExpertType) => (
              <CarouselItem
                key={expert.alias}
                className="basis-[70%] rounded-3xl pl-3 md:basis-[24%]"
              >
                <ExpertCard expert={expert} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Experts;
