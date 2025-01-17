import { Card } from "@/components/ui/card";
import Image from "next/image";

const items = [
  {
    icon: "/images/SITETIMNGUYEN/about/icon1.png",
    title: "7 năm",
    desc: "Kinh nghiệm về giảm nợ và tài chính",
  },
  {
    icon: "/images/SITETIMNGUYEN/about/icon2.png",
    title: "30,000+ người",
    desc: "Đã hoàn tất hồ sơ và trả dứt nợ",
  },
  {
    icon: "/images/SITETIMNGUYEN/about/icon3.png",
    title: "80,000,000$",
    desc: "Tổng số nợ đã được duyệt thành công",
  },
];

export default function AboutBanner() {
  return (
    <div className="relative w-full h-full">
      <Image
        className={`h-fit w-full`}
        priority
        src={`/images/SITETIMNGUYEN/about1.png`}
        width={5275}
        height={1650}
        alt="main"
      ></Image>
      <div className="absolute w-full -bottom-[75px] flex justify-center">
        <div className="max-w-screen-xl flex justify-center">
          {items.map((item, index) => (
            <Card
              key={index}
              className="w-1/3 h-[150px] mx-14 flex flex-col items-center pb-1 font-bold"
            >
              <Image
                className={`h-fit w-1/4`}
                priority
                src={item.icon}
                width={5275}
                height={1650}
                alt="main"
              ></Image>
              <h4 className="my-1">{item.title}</h4>
              <span>{item.desc}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
