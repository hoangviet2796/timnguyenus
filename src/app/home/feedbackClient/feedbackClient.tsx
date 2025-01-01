"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useRef } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";

import fbCss from "./feedbackClient.module.css";

const feedbacks = [
  {
    name: "Andy Nguyen",
    feedback:
      "Đợt dịch tôi nợ hơn $32k may mắn biết đến Tim hỗ trợ giảm còn $18k trả hơn 2 năm đã giờ tôi đã hết nợ. Tim nhiệt tình hướng dẫn tôi đủ thứ. Cảm ơn Tim và đồng đội nhiều. ",
    avatar: "/images/SITETIMNGUYEN/feedback/1.jpg",
  },
  {
    name: "Linda Le",
    feedback:
      "Cám ơn Tim và đối tác đã giúp đỡ mình tham gia vào chương trình giảm nợ. Nhờ giải quyết được các khoản nợ thẻ tôi đã có cuộc sống thoải mái hơn",
    avatar: "/images/SITETIMNGUYEN/feedback/2.jpg",
  },
  {
    name: "Ngo Ngoc Nga",
    feedback:
      "Chỉ trong vòng 1 năm 10 tháng tham gia chương trình, tôi đã giải quyết được số nợ $20K. Nhờ sự giúp đỡ này, tôi đã tiết kiệm được 1 khoảng tiền lớn. ",
    avatar: "/images/SITETIMNGUYEN/feedback/3.jpg",
  },
  {
    name: "Tuấn Sang",
    feedback:
      "Cảm ơn Tim Nguyễn và công ty CDS đã hỗ trợ tôi thoát nợ nhanh chóng.",
    avatar: "/images/SITETIMNGUYEN/feedback/4.jpg",
  },
];

export default function Feedback() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  return (
    <div className={`flex flex-col items-center max-w-screen-xl`}>
      <div className="flex flex-col items-center m-10">
        <div className="text-4xl font-bold text-center mb-8 text-[--text-primary-color]">
          <h2 className={``}>Khách hàng nói gì về chúng tôi?</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[plugin.current]}
          className="h-[400px]"
        >
          <CarouselContent className="">
            {feedbacks.map((fb, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/2 h-[400px]"
              >
                <div className="w-full h-full">
                  <div
                    className={`${fbCss.feedback} bg-[#f5f5f5] relative p-[28px] h-1/2`}
                  >
                    <h6 className="text-left lg:text-base xl:text-xl">
                      "{fb.feedback}"
                    </h6>
                    <Icons.quote className="absolute bottom-0 right-1" />
                  </div>
                  <div className="h-1/2 flex items-center justify-start">
                    <Image
                      className="rounded-full"
                      loading="lazy"
                      src={fb.avatar}
                      width={90}
                      height={90}
                      alt="logo"
                    ></Image>
                    <h3 className="ml-5 text-center text-xl font-bold">
                      {fb.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
}
