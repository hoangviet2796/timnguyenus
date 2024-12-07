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
      className={`bg-gradient-to-t from-gray-200 to-gray-600 flex flex-col items-center h-[600px]`}
    >
      <div className="w-full flex flex-col items-center my-16">
        <div className="max-w-screen-xl text-4xl font-bold text-center text-white mb-8">
          <h2 className={``}>REVIEW VỀ DỊCH VỤ</h2>
        </div>
        <div className="flex h-2/3">
          {reviews.map((fb, index) => (
            <Card className="shadow-lg bg-blue-700 text-white flex flex-col items-center h-full w-1/3 mx-3">
              <div className={`flex flex-col items-center overflow-hidden`}>
                <Image
                  className="w-1/2 pb-2 rounded-tl-lg rounded-tr-lg"
                  loading="lazy"
                  src={fb.avatar}
                  width={500}
                  height={70}
                  alt="logo"
                ></Image>
              </div>
              <div className="flex flex-col mx-2 h-2/3 justify-center items-center">
                <h3 className="text-center text-2xl italic">{fb.review}</h3>
                <CardDescription className="text-center font-bold text-2xl text-white">
                  {fb.point}
                </CardDescription>
                <div className="flex">
                  <Icons.stars className="w-10 h-10" />
                  <Icons.stars className="w-10 h-10" />
                  <Icons.stars className="w-10 h-10" />
                  <Icons.stars className="w-10 h-10" />
                  <Icons.stars className="w-10 h-10" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
