import Image from "next/image";
import HomePage from "./HomePage.module.css";
import VideoHome from "@/app/home/videoHome/videoHome";
import FeedBack from "@/app/home/feedback/feedback";
import Cooporate from "@/app/home/cooperate/Cooperate";
import Advice from "@/app/home/advise/advise";
import FeedbackClient from "@/app/home/feedbackClient/feedbackClient";
import Review from "@/app/home/review/review";
import GoodDeal from "@/app/home/goodeal/gooddeal";
import Referral from "@/app/home/referral/referral";
import Contact from "@/app/home/contact/contact";
import ToTop from "@/components/ui/scrollToTop";

import { Button } from "@/components/ui/button";

export default function home() {
  return (
    <main className={`flex justify-center flex-col`}>
      {/* <div className={` max-w-screen-xl`}> */}
      <div
        className={`${HomePage.mainCover} flex justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#08244d] before:opacity-50`}
      >
        <Image
          className={`h-fit w-full `}
          loading="lazy"
          src={`/images/width_1600.jpg`}
          width={900}
          height={0}
          alt="main"
        ></Image>
        <div className="absolute left-[5%] top-1/4 text-white z-10">
          <div>
            <h1 className="font-extrabold sm:text-5xl xl:text-7xl 2xl:text-8xl">
              YOUR
            </h1>
            <h2
              className={`${HomePage.homeTitle} w-fit relative h-fit font-extrabold sm:text-5xl xl:text-7xl 2xl:text-8xl`}
            >
              DEBT-FREE LIFE
            </h2>
            <h2 className="font-extrabold sm:text-5xl xl:text-7xl 2xl:text-8xl ml-[10%] mt-4 text-[#ff9000]">
              START HERE
            </h2>
          </div>
          <p className="sm:text-lg xl:text-xl 2xl:text-2xl italic mt-4 w-2/5">
            Tim Nguyen - Chuyên gia giảm nợ cá nhân đồng hành cùng nhiều hoàn
            cảnh vượt qua “góc khuất” tối tăm của nợ nần để làm lại một cuộc đời
            mới
          </p>
          <div className="mt-20 w-2/5 flex justify-around">
            <Button className="bg-[#ff9000] hover:bg-[#fe6601] px-7 py-7 sm:text-lg xl:text-xl 2xl:text-2xl">
              GIẢM NỢ
            </Button>
            <Button
              variant="outline"
              className="bg-white text-accent-foreground px-7 py-7 sm:text-lg xl:text-xl 2xl:text-2xl"
            >
              CÔNG CỤ
            </Button>
          </div>
        </div>
      </div>
      <VideoHome />
      <FeedBack />
      <Cooporate />
      <Advice />
      <FeedbackClient />
      <Review />
      <GoodDeal />
      <Referral />
      <Contact />
      <ToTop />

      {/* </div> */}
    </main>
  );
}
