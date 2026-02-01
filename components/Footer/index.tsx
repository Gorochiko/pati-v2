import Container  from "@/components/ui/Container";
import { logo, navLinks } from "./data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LinkAccordion from "./link-accordion";
import EmailJoinSm from "./email-join";

const Footer = () => {
  return (
    <div className="bg-main-dark-red text-main-light-red">
      <EmailJoinSm />
      <Container
        id="footer"
        className="pt-10 pb-6 md:pt-12.5 lg:pt-18 sm:pb-8.5 flex flex-col gap-10 sm:gap-10 lg:gap-12.5"
        isLargeScreen
      >
        <div className="flex flex-col-reverse lg:flex-row gap-12.5 lg:gap-0 items-start md:mb-7.5">
          <div className="w-full">
            <div className="hidden md:grid grid-cols-5 gap-5">
              {navLinks.map((section) => {
                const { children, title } = section;
                return (
                  <div key={title}>
                    <div className="uppercase font-sans font-bold text-base tracking-wide pb-2">
                      {title}
                    </div>
                    {children.map((item: { href: string; label: string }) => {
                      const { label, href } = item;
                      return (
                        <div className="py-2 text-sm" key={label}>
                          <a href={href}>{label}</a>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="md:hidden w-full">
              <LinkAccordion />
            </div>
          </div>
          <div className=" hidden md:flex flex-col gap-5 mx-auto w-1/2 pl-11.25 lg:w-[32.5%] lg:mx-0 lg:border-l border-main-light-red/30">
            <p className="text-center text-base font-sans font-bold uppercase tracking-wide lg:text-left">
              Join the community for exclusive wellness insights
            </p>
            
            <div className="flex flex-col gap-3">
              <Input
                placeholder="EMAIL ADDRESS"
                className="min-h-12 rounded-full bg-white px-7.5 pr-3.75 font-nb uppercase text-main-dark-red placeholder:text-main-dark-red focus-visible:ring-0"
                suppressHydrationWarning
              />
              <Button 
                className="h-auto rounded-full bg-im8-red px-3.25 py-3.25 font-bold uppercase text-white hover:bg-im8-red"
                suppressHydrationWarning
              >
                Join Now
              </Button>
            </div>
            
            <p className="max-w-70 text-center text-xs lg:text-left">
              *By joining, you'll receive our wellness insights and can unsubscribe anytime.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:items-start items-center">
          <img src={logo} alt="IM8 Logo" className="w-full shrink-0" />
          <div className="flex items-center gap-1 pt-2.5 sm:pt-7.5 text-xs md:text-white/50">
            <span>© 2026 IM8®</span>
            <a href="https://im8health.com/pages/privacy-policy">
              • Privacy Policy
            </a>
            <a href="https://im8health.com/pages/terms-of-service">
              • Terms of Service
            </a>
          </div>
          <div className="mx-auto max-w-[1000px] flex flex-col gap-2.5 my-3.5 sm:my-12.5 text-center">
            <div className="p-6 border border-main-light-red">
              <p className="my-3.75 font-normal sm:font-bold">
                *These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure or prevent any disease.
              </p>
            </div>
            <p className="text-xs">
              **Free Welcome Kit available for new subscribers only.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;