import { img, imgSm } from "./data";

const Content = () => {
  return (
    <section id="content">
      <img
        src={img}
        alt="content"
        className="max-md:hidden size-full object-cover"
        loading="lazy"
      />
      <img
        src={imgSm}
        alt="content"
        className="md:hidden size-full object-cover"
        loading="lazy"
      />
    </section>
  );
};

export default Content;
