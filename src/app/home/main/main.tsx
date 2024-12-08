import Image from "next/image";
import { Button } from "@/components/ui/button";

import css from "./main.module.css";

export default function Main() {
  return (
    <div
      className={`${css.mainCover} flex justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#08244d] before:opacity-50`}
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
          <h1 className="font-extrabold sm:text-5xl xl:text-7xl">YOUR</h1>
          <h2
            className={`${css.homeTitle} w-fit relative h-fit font-extrabold sm:text-5xl xl:text-7xl`}
          >
            DEBT-FREE LIFE
          </h2>
          <h2 className="font-extrabold sm:text-5xl xl:text-7xl ml-[10%] mt-4 text-[--text-primary-color]">
            START HERE
          </h2>
        </div>
        <p className="sm:text-lg xl:text-xl italic mt-4 w-2/5">
          Tim Nguyen - Chuyên gia giảm nợ cá nhân đồng hành cùng nhiều hoàn cảnh
          vượt qua “góc khuất” tối tăm của nợ nần để làm lại một cuộc đời mới
        </p>
        <div className="mt-20 w-2/5 flex justify-around">
          <Button className="bg-[--text-primary-color] hover:bg-[#fe6601] px-7 py-7 sm:text-lg xl:text-xl">
            GIẢM NỢ
          </Button>
          <Button
            variant="outline"
            className="bg-white text-accent-foreground px-7 py-7 sm:text-lg xl:text-xl"
          >
            CÔNG CỤ
          </Button>
        </div>
      </div>
    </div>
  );
}
