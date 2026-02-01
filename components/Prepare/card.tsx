import type { StepType } from "./types";

type Props = {
  step: StepType;
};

const Card = ({ step }: Props) => {
  const { title, thumbnailHref, videoHref } = step;
  return (
    <div className="flex flex-col gap-4">
      <video
        autoPlay
        loop
        muted
        poster={thumbnailHref}
        className="w-full  rounded-xl"
      >
        <source src={videoHref} type="video/mp4" />
      </video>
      <p className="font-arizona text-2xl font-medium ">{title}</p>
    </div>
  );
};

export default Card;
