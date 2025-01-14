"use client";
import React, { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [showVideo, setShowVideo] = useState(false);

  const handleNextClick = () => {
    setShowVideo(true);
  };

  const handlePreviousClick = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full pt-2 pb-4 bg-[#F1F3F4]">
      <h2 className="text-[35px] font-bold text-center text-black mb-4">
        Khách hàng nói gì về chương trình!
      </h2>
      <div className="w-[1280px] px-[160px] bg-white  py-4">
        {showVideo ? (
          <div className="items-center justify-center">
            <VideoFeedback />
            <button
              onClick={handlePreviousClick}
              className="absolute left-[10%] top-[50%] transform -translate-y-1/2 bg-white text-[#3e547b] w-12 h-12 flex items-center justify-center rounded-full shadow-lg border border-gray-200 cursor-pointer hover:bg-[#ff9900] hover:text-white transition-all duration-300 ease-in-out z-[9999]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        ) : (
          <>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
            >
              <CarouselContent className="flex">
                {feedbacks.map((fb) => (
                  <CarouselItem key={fb.id} className="lg:basis-1/4">
                    <div className="h-full shadow-lg overflow-hidden group  text-white flex flex-col items-center transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl">
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                        <Image
                          className="w-full h-[180px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                          src={fb.avatar}
                          width={200}
                          height={200}
                          alt={`${fb.name}'s avatar`}
                        />
                      </div>
                      <div
                        className={`p-2 flex-grow rounded-sm justify-between w-full transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg ${
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
                        <p className="text-[12px] group-hover:text-gray-100">
                          {fb.feedback}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <button
                onClick={handleNextClick}
                className="absolute right-[-9%] top-[50%] transform -translate-y-1/2 bg-white text-gray-700 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out z-[9999]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Carousel>
          </>
        )}
      </div>
      <div className="w-[1280px] px-[160px] bg-white pb-8">
        <Review />
      </div>
    </div>
  );
}
