import React from "react";
import TimNguyen from "@/app/(content)/about/TimNguyenLaAi/Tim";
import Help from "@/app/(content)/about/HowTimCanHelp/help";
import Vision from "@/app/(content)/about/Vision/vision";

export default function About() {
  return (
    <main
      className={`flex flex-col items-center mainBG text-white cursor-default`}
    >
      <div className={`max-w-screen-xl`}>
        <TimNguyen />
        <Help />
        <Vision />
      </div>
    </main>
  );
}
