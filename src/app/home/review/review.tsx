import { Card, CardDescription } from "@/components/ui/card";
import React, { useRef } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";

const reviews = [
  {
    name: "Google",
    review: "2000+ reviews",
    avatar: "/images/SITETIMNGUYEN/social/gg.png",
    point: 4.5,
  },
  {
    name: "Consumer",
    review: "1500+ reviews",
    avatar: "/images/SITETIMNGUYEN/social/consumer.png",
    point: 4.7,
  },
  {
    name: "trustpilot",
    review: "2500+ reviews",
    avatar: "/images/SITETIMNGUYEN/social/trust.png",
    point: 4.9,
  },
];

export default function Review() {
  //   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div
      className={`flex flex-col items-center max-w-screen-xl bg-white h-[200px] `}
    >
      <div className="w-full flex flex-col items-center my-6 ">
        <div className="flex h-2/3">
          {reviews.map((fb, index) => (
            <Card
              key={index}
              className="shadow-lg bg-[#5376db] text-white flex flex-col items-center h-full w-1/3 mx-2 mt-4 mb-3 transition ease-in-out hover:scale-105"
            >
              <div className={`flex flex-col items-center overflow-hidden`}>
                <Image
                  className="w-1/2 pb-4 rounded-tl-lg rounded-tr-lg"
                  loading="lazy"
                  src={fb.avatar}
                  width={500}
                  height={70}
                  alt="logo"
                ></Image>
              </div>
              <div className="flex flex-col mx-2 h-2/3 justify-center items-center">
                <h3 className="text-center text-[16px] italic">{fb.review}</h3>
                <CardDescription className="text-center font-bold text-[16px] text-white">
                  {fb.point}
                </CardDescription>
                <div className="flex">
                  <Icons.stars className="w-6 h-6" />
                  <Icons.stars className="w-6 h-6" />
                  <Icons.stars className="w-6 h-6" />
                  <Icons.stars className="w-6 h-6" />
                  <Icons.stars className="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
