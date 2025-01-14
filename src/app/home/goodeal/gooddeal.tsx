"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const goodDeal = [
  {
    name: "Mr. Danny - California",
    feedback: "Nợ $18K giảm còn $4K",
    creditscore: "Credit Score từ 610 lên 680",
    avatar: "/images/SITETIMNGUYEN/GOODDEAL/dannyavatar.png",
    image: "/images/SITETIMNGUYEN/GOODDEAL/danny.png",
  },
  {
    name: " Mrs. Liên Trần - California",
    feedback: "Nợ $31K giảm còn $21K",
    creditscore: "Credit Score từ 650 lên 720",
    avatar: "/images/SITETIMNGUYEN/GOODDEAL/lientranavatar.png",
    image: "/images/SITETIMNGUYEN/GOODDEAL/lientran.png",
  },
  {
    name: "Mr. Sơn Lê - Florida",
    feedback: "Nợ $31K giảm còn $12K",
    creditscore: "Credit Score từ 650 lên 720",
    avatar: "/images/SITETIMNGUYEN/GOODDEAL/sonleavatar.png",
    image: "/images/SITETIMNGUYEN/GOODDEAL/sonle.png",
  },
  {
    name: "Mrs. Chloe Nguyen - Texas",
    feedback: "Nợ $21K giảm còn $9K5",
    creditscore: "Credit Score từ 650 lên 720",
    avatar: "/images/SITETIMNGUYEN/GOODDEAL/chloenguyenavatar.png",
    image: "/images/SITETIMNGUYEN/GOODDEAL/chloenguyen.png",
  },
];

export default function Review() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  return (
    <>
    <div className="w-full relative">
        {/* Text Section */}
  <div className="absolute top-[-80px] left-0 w-full h-[10%] flex flex-col justify-center items-center z-20">
    <h3 className="sm:text-3xl md:text-4xl xl:text-5xl font-bold text-black">
      CÁC GOOD DEAL
    </h3>
    <p className="sm:text-xl md:text-2xl xl:text-3xl font-medium py-3 text-[#ff9900] italic">
      Tim hỗ trợ giảm thành công
    </p>
  </div>
  <div
  className={`w-full xl:h-[100svh] 2xl:h-[75svh] relative my-10 overflow-hidden`}
>

  {/* Right Image */}
  <div className="absolute right-0 w-[35%] h-full">
    <Image
      className={`h-full w-fit`}
      loading="lazy"
      src={`/images/SITETIMNGUYEN/8.jpg`}
      fill
      style={{ objectFit: "cover" }}
      alt="main"
    ></Image>
  </div>

  {/* Carousel Section */}
  <div className="absolute left-0 w-[65%] h-full bg-[#3e547b] flex flex-col justify-around items-center py-16 z-10">
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[plugin.current]}
      className="w-[80%] h-[85%]"
    >
      <CarouselContent className="w-full h-full">
        {goodDeal.map((gd, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <Card className="flex bg-opacity-10 bg-white text-white w-full h-[500px] p-5 rounded-xl">
              <div className="w-2/5 h-full">
                <Image
                  className={`h-full w-full rounded-xl`}
                  loading="lazy"
                  src={gd.image}
                  width={900}
                  height={0}
                  alt="main"
                ></Image>
              </div>
              <div className="w-3/5 h-full flex flex-col items-center justify-center">
                <Image
                  className={`w-1/2 2xl:w-1/3 rounded-full`}
                  loading="lazy"
                  src={gd.avatar}
                  width={900}
                  height={0}
                  alt="main"
                ></Image>
                <div className="text-center sm:text-xl md:text-2xl xl:text-3xl font-medium my-5">
                  <h3>{gd.name}</h3>
                  <p className="my-5">{gd.feedback}</p>
                  <p>{gd.creditscore}0</p>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext
  className="absolute right-[-50px] top-[50%] transform -translate-y-1/2 bg-white text-[#3e547b] w-12 h-12 flex items-center justify-center rounded-full shadow-lg border border-gray-200 cursor-pointer hover:bg-[#ff9900] hover:text-white transition-all duration-300 ease-in-out"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</CarouselNext>

<CarouselPrevious
  className="absolute left-[-55px] top-[50%] transform -translate-y-1/2 bg-white text-[#3e547b] w-12 h-12 flex items-center justify-center rounded-full shadow-lg border border-gray-200 cursor-pointer hover:bg-[#ff9900] hover:text-white transition-all duration-300 ease-in-out"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</CarouselPrevious>
    </Carousel>
  </div>
</div>
    </div>
   
</>
  );
}

   
