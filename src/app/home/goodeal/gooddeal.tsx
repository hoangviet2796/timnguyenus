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
      className={`w-full xl:h-[100svh] 2xl:h-[75svh] relative my-10 overflow-hidden`}
    >
      <div className="absolute right-0 w-[35%] h-full bg-[url('/images/SITETIMNGUYEN/8.jpg')] bg-cover bg-center">
        {/* <Image
          className={`h-full w-fit`}
          loading="lazy"
          src={`/images/SITETIMNGUYEN/8.jpg`}
          width={900}
          height={0}
          alt="main"
        ></Image> */}
      </div>
      <div className="absolute left-0 w-[65%] h-full bg-[#3e547b] flex flex-col justify-around items-center py-10 z-10">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="w-[80%] h-[70%]"
        >
          <CarouselContent className="w-full h-full">
            {goodDeal.map((gd, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <Card className="flex bg-opacity-10 bg-white text-white w-full h-full p-5 rounded-xl">
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
          <CarouselNext className="bg-white" />
          <CarouselPrevious className="bg-white" />
        </Carousel>

        <div className="w-full text-start h-[30%] flex flex-col justify-center">
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
