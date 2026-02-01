import Container from "@/components/ui/Container";
import { dealsData } from "./data";
import { SectionHeader } from "./SectionHeader";
import { ProductCard } from "./ProductCard";

const Premium = () => {
  return (
    <section className="py-20 text-[#50000b] md:py-32 lg:py-38 md:pb-10">
      <Container isLargeScreen>
        <SectionHeader />
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dealsData.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Premium;
