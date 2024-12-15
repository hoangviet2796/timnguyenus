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
    <div
      className={`w-full h-[70svh] 2xl:h-[75svh] relative my-10 overflow-hidden`}
    >
      <div className="absolute -right-40 w-fit h-full">
        <Image
          className={`h-full w-fit`}
          loading="lazy"
          src={`/images/SITETIMNGUYEN/8.jpg`}
          width={900}
          height={0}
          alt="main"
        ></Image>
      </div>
      <div className="absolute left-0 w-[55%] h-full bg-[#3e547b] flex flex-col justify-around items-center py-10 z-10">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="w-[90%] h-full"
        >
          <CarouselContent className="w-full h-full">
            {goodDeal.map((gd, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <Card className="flex bg-opacity-10 bg-white text-white w-full h-[70%] p-5 rounded-xl">
                  <div className="w-1/2 h-full">
                    <Image
                      className={`h-full w-full rounded-xl`}
                      loading="lazy"
                      src={gd.image}
                      width={900}
                      height={0}
                      alt="main"
                    ></Image>
                  </div>
                  <div className="w-1/2 h-full flex flex-col items-center justify-center">
                    <Image
                      className={`w-1/2 rounded-full`}
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
          <CarouselNext className="bg-white" />
          <CarouselPrevious className="bg-white" />
        </Carousel>

        <div className="w-full text-start ml-10">
          <h3 className="sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-5 text-white">
            CÁC GOOD DEAL
          </h3>
          <p className="sm:text-xl md:text-2xl xl:text-3xl font-medium text-[--text-primary-color] italic">
            Tim hỗ trợ thành công
          </p>
        </div>
      </div>
    </div>
  );
}
