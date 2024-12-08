"use client";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useRef } from "react";
import Image from "next/image";

const feedbacks = [
  {
    name: "Andy Nguyen",
    feedback:
      "Đợt dịch tôi nợ hơn $32k may mắn biết đến Tim hỗ trợ giảm còn $18k trả hơn 2 năm đã giờ tôi đã hết nợ. Tim nhiệt tình hướng dẫn tôi đủ thứ. Cảm ơn Tim và đồng đội nhiều. ",
    avatar: "/images/SITETIMNGUYEN/client/1.png",
  },
  {
    name: "Linda Le",
    feedback:
      "Cám ơn Tim và đối tác đã giúp đỡ mình tham gia vào chương trình giảm nợ. Nhờ giải quyết được các khoản nợ thẻ tôi đã có cuộc sống thoải mái hơn",
    avatar: "/images/SITETIMNGUYEN/client/2.png",
  },
  {
    name: "Ngo Ngoc Nga",
    feedback:
      "Chỉ trong vòng 1 năm 10 tháng tham gia chương trình, tôi đã giải quyết được số nợ $20K. Nhờ sự giúp đỡ này, tôi đã tiết kiệm được 1 khoảng tiền lớn. ",
    avatar: "/images/SITETIMNGUYEN/client/3.png",
  },
  {
    name: "Tuấn Sang",
    feedback:
      "Cảm ơn Tim Nguyễn và công ty CDS đã hỗ trợ tôi thoát nợ nhanh chóng.",
    avatar: "/images/SITETIMNGUYEN/client/4.png",
  },
];

export default function Feedback() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  return (
    <div
      className={`bg-gradient-to-t from-gray-600 to-gray-200 flex flex-col items-center`}
    >
      <div className="w-full flex flex-col items-center my-16">
        <div className="max-w-screen-xl text-4xl font-bold text-center text-white mb-8">
          <h2 className={``}>Khách hàng nói gì về chúng tôi?</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="lg:h-[400px] xl:h-[500px] w-4/5"
        >
          <CarouselContent className="lg:h-[400px] xl:h-[500px]">
            {feedbacks.map((fb, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/2 h-full mx-5"
              >
                <div className="h-full w-fit">
                  <Card className="shadow-lg flex flex-col items-center h-full w-4/5 cursor-pointer select-none">
                    <div
                      className={`flex flex-col items-center h-1/2 overflow-hidden`}
                    >
                      <Image
                        className="w-full pb-2 rounded-tl-lg rounded-tr-lg"
                        loading="lazy"
                        src={fb.avatar}
                        width={700}
                        height={70}
                        alt="logo"
                      ></Image>
                    </div>
                    <div className="flex flex-col mx-2 h-1/3">
                      <h3 className="text-center text-xl font-bold">
                        {fb.name}
                      </h3>
                      <CardDescription className="text-center lg:text-base xl:text-xl">
                        "{fb.feedback}"
                      </CardDescription>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
