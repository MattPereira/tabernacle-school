import FurtherAction from "./FurtherAction";
import Information from "./Information";

const Footer = () => {
  return (
    <>
      <FurtherAction />
      <Information />
      <div className="text-center py-3 bg-secondary">
        <a
          href="https://mattpereira.github.io/personal-portfolio/"
          className="text-decoration-none link-light"
        >
          Website by Matt Pereira
        </a>
      </div>
    </>
  );
};

export default Footer;
