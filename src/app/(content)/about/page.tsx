import React from "react";
import TimNguyen from "@/app/(content)/about/TimNguyenLaAi/Tim";
import Help from "@/app/(content)/about/HowTimCanHelp/help";
import Vision from "@/app/(content)/about/Vision/vision";
import VideoHome from "@/app/(content)/about/videoHome/videoHome";
import Certificates from "./certificates/chungchi";
import AboutBanner from "./AboutBanner/AboutBanner";
import Story from "./Story/Story";

export default function About() {
  return (
    <main className={`flex flex-col items-center cursor-default`}>
      <AboutBanner />
      <Story />
      <TimNguyen />
      <Help />
      {/* <Vision /> */}
      {/* <Certificates /> */}
      {/* <VideoHome /> */}
    </main>
  );
}
