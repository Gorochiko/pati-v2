import Container from "@/components/ui/Container";
import { advancedBenefitData, immediateBenefitData } from "./mock-data";
import { SectionHeader } from "./SectionHeader";
import { ComparisonTable } from "./ComparisonTable";

const BeckhamStack = () => {
  return (
    <section className="bg-[#fdf8f8]">
      <Container id="beckham-stack" className="py-15 md:py-20">
        <SectionHeader />
        <ComparisonTable 
          immediateBenefits={immediateBenefitData}
          advancedBenefits={advancedBenefitData}
        />
      </Container>
    </section>
  );
};

export default BeckhamStack;
