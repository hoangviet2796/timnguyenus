"use client";
import React, { useEffect } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./caroussel.css";

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

export default function Carroussel() {
  useEffect(() => {
    for (let i = 1; i <= 33; i++) {}
  }, []);
  return (
    <div className="w-2/3">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        className="mySwiper py-[50px]"
      >
        {Array.from({ length: 33 }, (_, i) => i + 1).map((x, i) => (
          <SwiperSlide className={`bg-center bg-contain`} key={i}>
            <Image
              alt="gooddeal"
              className="block w-full h-full hover:scale-150"
              src={`/images/SITETIMNGUYEN/GOODDEAL/${x}.png`}
              loading="lazy"
              width={900}
              height={0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
