"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useState } from "react";

export function ScrollToTop({ children }) {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  return (
    <>
      {children}
      <ScrollToTopButton />
    </>
  );
}

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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
          color: "white",
          padding: "5px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
      </span>
    </>
  );
};
