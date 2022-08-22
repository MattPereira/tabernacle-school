import FurtherAction from "./FurtherAction";
import Information from "./Information";
import { BsArrowUpShort } from "react-icons/bs";

import { useState } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
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
      {/* 👇️ scroll to top on button click */}
      <span
        className={show ? "scroll-to-top" : "scroll-to-top d-none"}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          fontSize: "20px",
          bottom: "40px",
          right: "20px",
          textAlign: "center",
          cursor: "pointer",
          background: "white",
          borderRadius: "50%",
          border: "3px solid #0984e3",
        }}
      >
        <BsArrowUpShort className="display-4 text-primary" />
      </span>
    </>
  );
};

export default Footer;
