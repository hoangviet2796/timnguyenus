"use client";
import React, { useState } from "react";
import Image from "next/image";

const videos = [
  {
    id: "1",
    title:
      "Được mời chia sẻ trên kênh Youtube NGƯỜI VIỆT HẢI NGOẠI cùng Sean Le",
    youtubeUrl: "https://www.youtube.com/embed/JbhCx-Qsxfs?autoplay=1&rel=0",
    thumbnail: "/images/ladicdn/12.jpg",
  },
  {
    id: "2",
    title: "Thúy Nga đến thăm office và tìm hiểu về CHƯƠNG TRÌNH GIẢM NỢ",
    youtubeUrl: "https://www.youtube.com/embed/ps1LbhE144I?autoplay=1&rel=0",
    thumbnail: "/images/ladicdn/11.jpg",
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState("");

  const handlePlayVideo = (id: string) => {
    setActiveVideo(id);
  };

  return (
    <div className="w-full py-10 bg-white flex flex-col items-center">
      {/* Tiêu đề */}
      <p className="text-center text-black italic text-lg max-w-[800px] px-2 mb-12">
        Những cá nhân mà Tim đã và đang bắt tay hợp tác nhằm đưa ngành giảm nợ
        gần hơn với công chúng. Từ những câu chuyện, những bài học thực tế Tim
        Nguyen và đối tác đã tạo ra cái nhìn khác tích cực hơn cho cộng đồng
        người Việt tại Mỹ nói chung và người đang mắc nợ nói riêng.
      </p>

      {/* Khung hiển thị video */}
      <div className="w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 gap-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-[#F1F3F4] shadow-md rounded-lg px-10 pt-3 pb-6 flex flex-col items-center h-[350px]"
            style={{
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handlePlayVideo(video.id)}
            >
              {activeVideo === video.id ? (
                <iframe
                  className="w-full h-full"
                  src={video.youtubeUrl}
                  title={`YouTube video ${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <Image
                    src={video.thumbnail}
                    alt={`Thumbnail for video ${video.id}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                  {/* Nút YouTube */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            <h3 className="text-center text-black mt-4 font-bold text-[16px] leading-7">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
