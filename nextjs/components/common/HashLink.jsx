"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const HashLink = ({ href, children, className }) => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView();
    }
  }, [router.asPath]); // Trigger the effect when the path changes

  return (
    <Link href={href} scroll={false} className={className}>
      {" "}
      {/* Disable automatic scrolling */}
      {children}
    </Link>
  );
};
