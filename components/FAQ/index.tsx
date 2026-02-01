import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bgImg, bgImgSm, faqData, minusIcon, plusIcon } from "./data";
import { cn } from "@/lib/utils";

const Faqs = () => {
  return (
    <section id="faqs" className="bg-[oklch(0.4522_0.184068_26.5694)]">
      <div className="flex flex-col md:flex-row md:min-h-screen">
        <div className="flex items-center justify-center md:w-1/2">
          <div className="ml-auto px-5 pb-14 pt-10 md:w-[80%] md:pb-10 md:pl-14 md:pr-30">
            <h1 className="font-arizona text-[56px] text-white md:text-[52px] md:text-[#ff9693]">
              FAQs
            </h1>
            
            <div className="mt-2 text-white">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((section) => {
                  const { title, description } = section;
                  return (
                    <AccordionItem
                      key={title}
                      value={title}
                      className="border-b-white last:border-b"
                    >
                      <AccordionTrigger
                        className={cn(
                          "flex w-full items-center justify-between font-sans text-base font-bold hover:cursor-pointer hover:no-underline",
                          "[&>svg]:hidden [&[data-state=open]>svg]:hidden"
                        )}
                      >
                        <span>{title}</span>
                        <div className="flex items-center">
                          <img
                            src={plusIcon}
                            alt="Expand"
                            className="size-4 shrink-0 pointer-events-none group-aria-expanded/accordion-trigger:hidden"
                          />
                          <img
                            src={minusIcon}
                            alt="Collapse"
                            className="size-4 shrink-0 pointer-events-none hidden group-aria-expanded/accordion-trigger:inline"
                          />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-base pb-4">
                        {description.map((item) => {
                          return <p key={item}>{item}</p>;
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
            
            <div className="mt-6">
              <Button 
                className="h-auto w-[40%] cursor-pointer rounded-full bg-[oklch(0.2723_0.109753_22.2781)] px-4.25 py-4 text-base font-bold uppercase transition duration-500 hover:bg-[oklch(0.2723_0.109753_22.2781)] md:min-w-57.5 max-md:hover:bg-[oklch(0.4522_0.184068_26.5694)]"
                suppressHydrationWarning
              >
                Explore All FAQs
              </Button>
            </div>
          </div>
        </div>
        
        <div className="order-first overflow-hidden md:order-last md:w-1/2">
          <img
            src={bgImg}
            alt="FAQ Customer"
            loading="lazy"
            className="hidden size-full object-cover md:block"
          />
          <img
            src={bgImgSm}
            alt="FAQ Customer"
            loading="lazy"
            className="aspect-4/3 w-full object-cover md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;