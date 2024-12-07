"use client";
import { useEffect, useState } from "react";
import "./scrollToTop.css";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTopPage() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative flex-col items-center justify-center bg-stone-900 text-3xl text-white">
      <button
        className={`fixed bottom-0 right-0 bg-black rounded-full px-4 py-2 mr-6 mb-[71px] z-50 items-center text-xs flex gap-2 scrollToTopButton ${
          isVisible ? "visible" : ""
        }`}
        onClick={scrollToTop}
      >
        BACK TO TOP
      </button>
    </div>
  );
}
