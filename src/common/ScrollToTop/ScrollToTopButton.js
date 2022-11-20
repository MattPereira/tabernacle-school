import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { useState } from "react";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", scrollHandler);

  function scrollHandler() {
    if (window.scrollY >= 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <>
      {/* 👇️ scroll to top on button click */}
      <span
        // className={show ? "scroll-to-top" : "scroll-to-top d-none"}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          fontSize: "20px",
          bottom: "20px",
          right: "20px",
          textAlign: "center",
          cursor: "pointer",
          background: "#c0ac15",
          borderRadius: "50%",
          border: "3px solid #c0ac15",
          display: show ? "flex" : "none",
        }}
      >
        <ArrowUpwardIcon sx={{ fontSize: "2.5rem", color: "white" }} />
      </span>
    </>
  );
};

export default ScrollToTopButton;
