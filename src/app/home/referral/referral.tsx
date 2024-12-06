import React, { useRef } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";

export default function Referral() {
  //   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className={`bg-white flex flex-col items-center`}>
      <div className="w-full flex flex-col items-center my-16">
        <div className="max-w-screen-xl mb-8">
          <h2 className="text-5xl font-semibold text-center text-[#492709]">
            Referral
          </h2>
          <p className="text-3xl italic text-justify text-[#492709] mt-5">
            Những cá nhân mà Tim đã và đang bắt tay hợp tác nhằm đưa ngành giảm
            nợ gần hơn với công chúng. Từ những câu chuyện, những bài học thực
            tế Tim Nguyen và đối tác đã tạo ra cái nhìn khác tích cực hơn cho
            cộng đồng người Việt tại Mỹ nói chung và người đang mắc nợ nói
            riêng.
          </p>
        </div>
        <div className="flex justify-evenly w-full">
          <div className="relative">
            <Icons.bg className="w-full rounded-full" />
            <Image
              className={`absolute top-[5%] left-[5%] h-fit w-[90%] z-10 bottom-0 right-0 rounded-full`}
              loading="lazy"
              src={`/images/SITETIMNGUYEN/sean.png`}
              width={800}
              height={0}
              alt="main"
            ></Image>
            <h2 className="text-center text-[#492709] text-3xl font-bold mt-5">
              Sean Le
            </h2>
          </div>
          <div className="relative">
            <Icons.bg className="w-full rounded-full" />
            <Image
              className={`absolute top-[5%] left-[5%] h-fit w-[90%] z-10 bottom-0 right-0 rounded-full`}
              loading="lazy"
              src={`/images/SITETIMNGUYEN/thuynga.png`}
              width={800}
              height={0}
              alt="main"
            ></Image>
            <h2 className="text-center text-[#492709] text-3xl font-bold mt-5">
              Thuy Nga
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
