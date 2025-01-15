import Image from "next/image";
import { Button } from "@/components/ui/button";

import css from "./main.module.css";

export default function Main() {
  return (
    <Image
      className={`h-fit w-full`}
      priority
      src={`/images/SITETIMNGUYEN/Bannersite2.png`}
      width={5035}
      height={788}
      alt="main"
    ></Image>
  );
  // <div className={`relative h-[400px] w-full`}>

  {
    /* </div> */
  }
  // <div className={`${css.mainCover} flex justify-end relative w-full`}>
  {
    /* <div className={`max-w-screen-xl cursor-default`}> */
  }

  {
    /* <div className="absolute w-full h-full top-0 left-0 z-10 flex items-center justify-center">
        <div className="max-w-screen-xl top-1/4 text-white mx-10">
          <div>
            <h1 className="font-extrabold sm:text-3xl xl:text-5xl">
              <span className="text-[--text-primary-color]">GIẢM NỢ</span> ĐÚNG
              CÁCH
            </h1>
            <h2
              className={`w-fit relative h-fit font-extrabold sm:text-3xl xl:text-5xl my-4`}
            >
              TÌM LẠI TỰ DO TÀI CHÍNH
            </h2>
            <span className="font-extrabold sm:text-3xl xl:text-5xl ml-[10%] mt-4 text-[--text-primary-color]">
              VỚI TIM NGUYỄN
            </span>
          </div>
          <p className="sm:text-lg xl:text-xl italic mt-4 w-2/5">
            Tim Nguyen - Chuyên gia giảm nợ cá nhân đồng hành cùng nhiều hoàn
            cảnh vượt qua “góc khuất” tối tăm của nợ nần để làm lại một cuộc đời
            mới
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
      </div> */
  }
  // </div>
}
