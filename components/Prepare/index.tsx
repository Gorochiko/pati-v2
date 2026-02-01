import Container from "../ui/Container";
import { steps } from "./data";
import Card from "./card";

const Preparation = () => {
  return (
    <Container id="preparation" isLargeScreen className="md:py-26 py-14">
      <div className="flex flex-col md:gap-14 gap-8">
        <h1 className="font-arizona md:text-[52px] text-[#50000b] text-[40px] leading-11 text-center">
          How to Enjoy
        </h1>
        <div className="grid md:grid-cols-3 text-[#50000b] md:gap-4 gap-8">
          {steps.map((step) => (
            <Card step={step} key={step.title} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Preparation;
