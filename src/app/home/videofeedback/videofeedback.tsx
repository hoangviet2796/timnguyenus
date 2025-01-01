"use client";
import { useState } from "react";
import Image from "next/image";
export default function VideoFeedback() {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const feedbacks = [
    {
      videoSrc: "/videos/feedback.mp4",
      text: "Cảm ơn công ty đã giúp tôi trả hết khoản nợ $60K. Nhất là cảm ơn 3 cháu, cháu Tim, cháu Tommy và cháu Nga.",
    },
  ];

  const currentFeedback = feedbacks[currentFeedbackIndex];

  return (
    <div className="flex items-center justify-center min-h-screen  bg-white text-black">
      {/* phần điện thoại */}
      <div className="relative flex items-center justify-center rounded-[46px] p-1.5 bg-[#FCE9D8] ">
        <div className="relative w-[350px] h-[700px] bg-black rounded-[40px] shadow-xl ">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[190px] h-[40px] bg-black rounded-[100px] z-10"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 z-20">
            <div className="w-14 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <div className="absolute top-20 -left-2 w-1 h-8 bg-[#EBCEB5] rounded-full"></div>
          <div className="absolute top-36 -left-2 w-1 h-12 bg-[#EBCEB5] rounded-full"></div>
          <div className="absolute top-52 -left-2 w-1 h-12 bg-[#EBCEB5] rounded-full"></div>
          <div className="absolute top-28 -right-2 w-1 h-14 bg-[#EBCEB5] rounded-full"></div>
          <div className="absolute inset-0 p-3 rounded-[30px] overflow-hidden ">
            <video
              src={currentFeedback.videoSrc}
              controls
              className="w-full h-full rounded-[30px] object-cover"
            ></video>
          </div>
        </div>
      </div>
      {/* phần text */}
      <div
        className="justify-start max-w-[600px] ml-16 flex flex-col"
        style={{ marginTop: "-150px" }}
      >
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-2">
            <Image
              src="/images/daunhay.png"
              alt="Dấu nháy"
              width={64}
              height={64}
              objectFit="contain"
              priority
            />
          </div>
          <div className="relative max-w-xl mx-auto bg-gray-100 rounded-lg shadow-md p-4">
            <p className="text-xl font-light text-gray-800 leading-relaxed tracking-wide text-left pl-8">
              {currentFeedback.text}
            </p>
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 28 28"
                className="text-gray-100"
              >
                <path d="M0 14L18 0L18 28L0 14Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
