"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BackToTopButton() {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY; 
      const pageHeight = document.documentElement.scrollHeight; 
      const threshold = 150; 

      if (pageHeight - scrollPosition <= threshold) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isNearBottom && (
        <Link
          href="/topic"
          className="fixed bottom-[430px] right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-800 transition duration-300 z-50"
          aria-label="Quay lại"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
      )}
    </>
  );
}