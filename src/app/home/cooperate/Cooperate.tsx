import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "@/components/icons";

export default function Cooperate() {
  return (
    <div
      className={`flex justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#272621] before:opacity-50`}
    >
      <Image
        className={`h-fit w-full `}
        loading="lazy"
        src={`/images/SITETIMNGUYEN/19.jpg`}
        width={900}
        height={0}
        alt="main"
      ></Image>
      <div className="absolute left-[5%] top-1/4 z-10">
        <Card className="bg-opacity-10 bg-white text-white w-[30%] text-2xl font-bold h-[80%]">
          <h4>CÁC ĐƠN VỊ HỢP TÁC</h4>
          <ul>
            <li className="flex">
              <Icons.arrow />
              <p className="ml-2">AADR</p>
            </li>
            <li className="flex">
              <Icons.arrow />
              <p className="ml-2">IPDPA</p>
            </li>
            <li className="flex">
              <Icons.arrow />
              <p className="ml-2">Impression Financials</p>
            </li>
            <li className="flex">
              <Icons.arrow />
              <p className="ml-2">Sean Le show</p>
            </li>
          </ul>
        </Card>
        <p className="sm:text-lg xl:text-xl 2xl:text-2xl italic mt-4 w-2/5">
          Tim Nguyen - Chuyên gia giảm nợ cá nhân đồng hành cùng nhiều hoàn cảnh
          vượt qua “góc khuất” tối tăm của nợ nần để làm lại một cuộc đời mới
        </p>
        <div className="mt-20 w-2/5 flex justify-around">
          <Button className="bg-[#ff9000] hover:bg-[#fe6601] px-7 py-7 sm:text-lg xl:text-xl 2xl:text-2xl">
            GIẢM NỢ
          </Button>
          <Button
            variant="outline"
            className="bg-white text-accent-foreground px-7 py-7 sm:text-lg xl:text-xl 2xl:text-2xl"
          >
            CÔNG CỤ
          </Button>
        </div>
      </div>
    </div>
  );
}
