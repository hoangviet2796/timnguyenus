"use client";
import { useState } from "react";
import Image from "next/image";
export default function FeedbackClient() {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const feedbacks = [
    {
      videoSrc: "/videos/feedback.mp4", 
      text: "Cảm ơn công ty đã giúp tôi trả hết khoản nợ $60K. Nhất là cảm ơn 3 cháu, cháu Tim, cháu Tommy và cháu Nga.",
    },
    
  ];

  const currentFeedback = feedbacks[currentFeedbackIndex];

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black mt-4">
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
      <div
        className="justify-start max-w-[600px] ml-16 flex flex-col"
        style={{ marginTop: "-150px" }}
      >
        <h2 className="text-[38px] font-bold mb-6 font-sans">
          Khách hàng nói gì về chúng tôi?
        </h2>
        <div className="text-center">
          
          <div className="relative w-16 h-16 mx-auto mb-3">
            <Image
              src="/images/daunhay.png" 
              alt="Dấu nháy"
              width={64} 
              height={64}
              objectFit="contain" 
              priority 
            />
          </div>
          <p className="text-[20px] text-gray-800 leading-relaxed tracking-wide text-left pl-16">
            {currentFeedback.text}
          </p>
        </div>
      </div>
    </div>
  );
}
