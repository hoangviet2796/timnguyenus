import React, { useRef } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";

export default function Referral() {
  //   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className={`flex flex-col items-center mb-10`}>
      <div className="max-w-screen-xl flex flex-col items-center my-16">
        <div className="w-full mb-8">
          {/* <h2 className="text-4xl font-semibold text-center text-[--text-primary-color]">
            Referral
          </h2> */}
          <p className="text-2xl italic text-center m-5">
            Những cá nhân mà Tim đã và đang bắt tay hợp tác nhằm đưa ngành giảm
            nợ gần hơn với công chúng. Từ những câu chuyện, những bài học thực
            tế Tim Nguyen và đối tác đã tạo ra cái nhìn khác tích cực hơn cho
            cộng đồng người Việt tại Mỹ nói chung và người đang mắc nợ nói
            riêng.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          <div className="group relative h-[400px]">
            <div className={`w-full h-full relative`}>
              <Image
                className={`transition rounded-xl`}
                loading="lazy"
                src={"/images/SITETIMNGUYEN/sean.png"}
                fill
                style={{ objectFit: "cover" }}
                alt="main"
              ></Image>
            </div>
            <div className="absolute rounded-xl transition ease-in duration-500 w-2/3 h-[20%] bg-white group-hover:bg-[--text-primary-color] -bottom-[10%] left-[16.5%] shadow-xl flex items-center justify-center">
              <h2 className="transition ease-in duration-500 group-hover:text-white text-2xl font-medium">
                Sean Le
              </h2>
            </div>
          </div>
          <div className="group relative h-[400px]">
            <div className={`w-full h-full relative`}>
              <Image
                className={`transition rounded-xl`}
                loading="lazy"
                src={"/images/SITETIMNGUYEN/thuynga.png"}
                fill
                style={{ objectFit: "cover" }}
                alt="main"
              ></Image>
            </div>
            <div className="absolute rounded-xl transition ease-in duration-500 w-2/3 h-[20%] bg-white group-hover:bg-[--text-primary-color] -bottom-[10%] left-[16.5%] shadow-xl flex items-center justify-center">
              <h2 className="transition ease-in duration-500 group-hover:text-white text-2xl font-medium">
                Thuy Nga
              </h2>
            </div>
          </div>
          <div className="group relative h-[400px]">
            <div
              className={`w-full h-full bg-slate-400 bg-center bg-cover rounded-xl`}
            >
              {/* <Image
                className={`transition z-10`}
                loading="lazy"
                src={""}
                fill
                style={{ objectFit: "cover" }}
                alt="main"
              ></Image> */}
            </div>
            <div className="absolute rounded-xl transition ease-in duration-500 w-2/3 h-[20%] bg-white group-hover:bg-[--text-primary-color] -bottom-[10%] left-[16.5%] shadow-xl flex items-center justify-center">
              <h2 className="transition ease-in duration-500 group-hover:text-white text-2xl font-medium">
                Phong Le
              </h2>
            </div>
          </div>
          <div className="group relative h-[400px]">
            <div className={`w-full h-full relative `}>
              <Image
                className={`transition rounded-xl`}
                loading="lazy"
                src={"/images/SITETIMNGUYEN/Nick.jpg"}
                fill
                style={{ objectFit: "cover" }}
                alt="main"
              ></Image>
            </div>
            <div className="absolute rounded-xl transition ease-in duration-500 w-2/3 h-[20%] bg-white group-hover:bg-[--text-primary-color] -bottom-[10%] left-[16.5%] shadow-xl flex items-center justify-center">
              <h2 className="transition ease-in duration-500 group-hover:text-white text-2xl font-medium">
                Nick
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
