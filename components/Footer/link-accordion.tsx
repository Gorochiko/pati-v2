import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { minusIcon, navLinksSm, plusIcon } from "./data";
import { cn } from "@/lib/utils";

const LinkAccordion = () => {
  return (
    <Accordion type="multiple" className="w-full">
      {navLinksSm.map((section) => {
        const { children, title } = section;
        return (
          <AccordionItem
            key={title}
            value={title}
            className="border-b-[rgba(255,150,147,.5)] last:border-b"
          >
            <AccordionTrigger
              className={cn(
                "hover:no-underline uppercase font-sans font-semibold flex items-center justify-between w-full text-2xl",
                "[&>svg]:hidden [&[data-state=open]>svg]:hidden",
              )}
            >
              <span>{title}</span>
              <img
                src={plusIcon}
                alt=""
                className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden size-6"
              />
              <img
                src={minusIcon}
                alt=""
                className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline size-6"
              />
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-2 pb-0 no-underline [&_a]:no-underline [&_a]:hover:text-main-light-red">
              {children.map((item: { href: string; label: string }) => {
                const { href, label } = item;
                return (
                  <a key={label} href={href} className=" pb-4 text-sm">
                    {label}
                  </a>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default LinkAccordion;