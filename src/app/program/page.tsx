import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Program() {
  const content = [
    {
      icon: "/images/program/program1.png",
      title: "Lên Payment Plan cụ thể và theo dõi khoản nợ của bạn",
    },
    {
      icon: "/images/program/program2.png",
      title: "Lên Payment Plan để tiến hành đàm phán với các lender",
    },
    {
      icon: "/images/program/program3.png",
      title:
        "Hỗ trợ miễn phí mọi vấn đề phát sinh trong suốt quá trình tham gia vào chương trình.",
    },
    {
      icon: "/images/program/program3.png",
      title:
        "Cung cấp công cụ để theo dõi dòng tiền và quá trình thanh toán nợ rõ ràng, minh bạch",
    },
  ];
  return (
    <div className="block lg:flex gap-14 max-w-screen-xl  m-auto p-7 mt-24">
      <div className="w-full lg:w-[50%]">
        {content.map((item, i) => (
          <div key={i} className="flex items-start mt-11">
            <div className="relative w-fit flex-shrink-0">
              <Image
                className="w-10"
                loading="lazy"
                src={item.icon}
                width={500}
                height={0}
                alt="icon"
              />
              <div className="absolute -top-3 -left-3 w-[30px] h-[30px] bg-[#ff9000] rounded-full -z-10"></div>
            </div>
            <div className="ml-5">
              <p className="font-extrabold text-xl lg:text-2xl leading-tight min-h-[72px]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-[50%] lg:mt-0 mt-5">
        <div className="relative h-[200px] pl-14">
          <div className=" h-full">
            <Image
              width={500}
              height={0}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="/images/SITETIMNGUYEN/bg-program1.jpg"
              alt="background"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[50%] h-1/5 bg-orange-500"></div>
        </div>

        {/* Title Section */}
        <div className="relative flex items-center pl-12 mt-5">
          <div className="absolute left-0 top-5 bg-[#ff9000] w-1 h-1/2"></div>
          <div className="absolute left-0 bottom-0 bg-[#083fa5] w-1 h-1/2"></div>
          <span className="text-[80px] md:text-[140px] lg:text-[150px] leading-none font-bold text-[#083fa5]">
            M
          </span>
          <div className="flex flex-col gap-7 md:gap-14">
            <span className="block font-bold italic leading-[0] text-[#ff9000] text-[25px]  md:text-[40px] lg:50px">
              astering Debt
            </span>
            <span className="block  font-bold italic leading-[0] text-[#ff9000] text-[25px] md:text-[40px] lg:50px ">
              anagement
            </span>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex mt-5">
          <Button className="m-auto text-2xl md:text-4xl px-6 py-7 font-bold text-white italic bg-gradient-to-r from-blue-500 to-blue-700 rounded-full hover:opacity-90">
            <Link href={"/program/more"}> Learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
