"use client";
import React, { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import VideoFeedback from "../videofeedback/videofeedback";
import Review from "../review/review";

const feedbacks = [
  {
    id: "1",
    name: "Andy Nguyen",
    feedback:
      "Đợt dịch tôi nợ hơn $32k may mắn biết đến Tim hỗ trợ giảm còn $18k trả hơn 2 năm đã giờ tôi đã hết nợ. Tim nhiệt tình hướng dẫn tôi đủ thứ. Cảm ơn Tim và đồng đội nhiều.",
    avatar: "/images/SITETIMNGUYEN/feedback/1.jpg",
  },
  {
    id: "2",
    name: "Linda Le",
    feedback:
      "Cám ơn Tim và đối tác đã giúp đỡ mình tham gia vào chương trình giảm nợ. Nhờ giải quyết được các khoản nợ thẻ tôi đã có cuộc sống thoải mái hơn.",
    avatar: "/images/SITETIMNGUYEN/feedback/2.jpg",
  },
  {
    id: "3",
    name: "Ngo Ngoc Nga",
    feedback:
      "Chỉ trong vòng 1 năm 10 tháng tham gia chương trình, tôi đã giải quyết được số nợ $20K. Nhờ sự giúp đỡ này, tôi đã tiết kiệm được một khoản tiền lớn.",
    avatar: "/images/SITETIMNGUYEN/feedback/3.jpg",
  },
  {
    id: "4",
    name: "Tuấn Sang",
    feedback:
      "Cảm ơn Tim Nguyễn và công ty CDS đã hỗ trợ tôi thoát nợ nhanh chóng.",
    avatar: "/images/SITETIMNGUYEN/feedback/4.jpg",
  },
];

export default function Feedback() {
  //const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full pt-2 pb-4 bg-[#F1F3F4]">
      <h2 className="text-[35px] font-bold text-center text-black mb-4">
        Khách hàng nói gì về chương trình!
      </h2>
      <div className="w-[1280px] bg-white py-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            watchFocus: false,
          }}
        >
          <CarouselContent className="flex items-center">
            <CarouselItem className="">
              <div className="grid grid-cols-4 gap-5 mx-5">
                {feedbacks.map((fb, index) => (
                  <div
                    key={index}
                    className="shadow-lg overflow-hidden group  text-white flex flex-col items-center transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl rounded-md"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        className="w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        src={fb.avatar}
                        width={200}
                        height={200}
                        alt={`${fb.name}'s avatar`}
                      />
                    </div>
                    <div
                      className={`p-2 flex-grow justify-between w-full transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg ${
                        fb.id === "1" || fb.id === "3"
                          ? "bg-gradient-to-r from-[#182D4B] to-[#1C3A5E] group-hover:from-[#FF6600] group-hover:to-[#FF9900]"
                          : "bg-gradient-to-r from-[#00132e] to-[#001F40] group-hover:from-[#FF4500] group-hover:to-[#FF7F50]"
                      }`}
                      style={{
                        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)", // Bóng nhẹ cho trạng thái bình thường
                      }}
                    >
                      <h3 className="text-lg font-bold mb-2 text-center group-hover:text-white">
                        {fb.name}
                      </h3>
                      <p className="text-base group-hover:text-gray-100">
                        {fb.feedback}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
            {/* <CarouselItem className="">
              <div className="items-center justify-center">
                <VideoFeedback />
              </div>
            </CarouselItem> */}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
      <div className="w-[1280px] bg-white pb-8">
        <Review />
      </div>
    </div>
  );
}
