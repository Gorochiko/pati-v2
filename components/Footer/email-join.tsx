import { Input } from "@/components/ui/input";
import { videoBg, videoBgThumbnail } from "../Footer/data";
import { Button } from "@/components/ui/button";

const EmailJoinSm = () => {
  return (
    <div className="md:hidden relative flex flex-1 flex-col items-center gap-7.5">
      <div className="w-full h-full absolute bg-main-skin/75 z-1"></div>
      <div className="w-full h-full absolute">
        <video
          autoPlay
          loop
          muted
          preload="metadata"
          poster={videoBgThumbnail}
          className="w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col justify-center py-14 px-5 z-2 max-w-92.5 text-main-dark-red">
        <h2 className="text-center text-[46px] font-arizona font-medium leading-10">
          Join the community for exclusive wellness insights
        </h2>
        <div className="flex flex-col gap-3 mt-6">
          <Input
            placeholder="EMAIL ADDRESS"
            className="uppercase font-nb rounded-full bg-white text-main-dark-red border border-main-dark-red placeholder:text-main-dark-red pr-3.75 pl-7.5 focus-visible:ring-0 outline-0 leading-5 min-h-12"
            suppressHydrationWarning
          />
          <Button className="uppercase text-white bg-main-red hover:bg-main-red rounded-full p-3.25 leading-5.5 font-bold h-fit" suppressHydrationWarning>
            <div>Join Now</div>
          </Button>
        </div>
        <p className="text-xs font-medium max-lg:text-center mt-4">
          *By joining, you'll receive our wellness insights and can unsubscribe
          anytime.
        </p>
      </div>
    </div>
  );
};

export default EmailJoinSm;