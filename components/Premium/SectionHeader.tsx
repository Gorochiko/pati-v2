import { checkIcon } from "./data";

interface FeatureItemProps {
  children: React.ReactNode;
}

const FeatureItem = ({ children }: FeatureItemProps) => (
  <div className="flex items-center gap-2">
    <img src={checkIcon} alt="" className="mb-px size-4 shrink-0" />
    <span className="text-sm md:text-base">{children}</span>
  </div>
);

export const SectionHeader = () => {
  return (
    <header className="mb-10 flex flex-col gap-4">
      <h1 className="font-arizona text-[28px] md:text-4xl lg:text-[52px]">
        Premium Core Nutrition
      </h1>
      
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <FeatureItem>
          <strong>30-Day</strong> money back guarantee
        </FeatureItem>
        <FeatureItem>
          <strong>Update</strong> or <strong>cancel</strong> anytime
        </FeatureItem>
        <FeatureItem>
          <strong>Free shipping</strong> for all subscriptions
        </FeatureItem>
      </div>
    </header>
  );
};
