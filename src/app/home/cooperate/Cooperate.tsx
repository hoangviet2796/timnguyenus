import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "@/components/icons";

export default function Cooperate() {
  return (
    <div className={`w-full h-[90svh] relative my-10`}>
      <div className="absolute left-0 w-[50%] h-full bg-[url('/images/SITETIMNGUYEN/19.jpg')] bg-auto bg-center">
        {/* <Image
          className={`h-full w-full`}
          loading="lazy"
          src={`/images/SITETIMNGUYEN/19.jpg`}
          width={900}
          height={0}
          alt="main"
        ></Image> */}
      </div>
      <div className="absolute right-0 top-[10%] w-[60%] h-[80%] bg-[#3e547b] flex justify-around items-center">
        <Card className="bg-opacity-0 bg-white shadow-none text-white w-[40%] font-bold h-[80%] text-center sm:text-xl md:text-2xl xl:text-3xl">
          <h4 className="py-5">CÁC ĐƠN VỊ HỢP TÁC</h4>
          <ul className="flex flex-col h-[70%] justify-between">
            <li className="flex">
              <Icons.arrow />
              <p className="ml-2 text-start">AADR</p>
            </li>
            <li className="flex">
              <Icons.arrow />
              <p className="ml-2 text-start">IPDPA</p>
            </li>
            <li className="flex">
              <Icons.arrow />
              <p className="ml-2 text-start">Impression Financials</p>
            </li>
            <li className="flex">
              <Icons.arrow />
              <p className="ml-2 text-start">Sean Le show</p>
            </li>
          </ul>
        </Card>
        <Card className="relative bg-opacity-10 bg-white text-white w-[50%] h-[80%]">
          <div className="flex items-center font-bold sm:text-xl md:text-2xl xl:text-3xl">
            <Image
              className={`h-fit w-1/4 `}
              loading="lazy"
              src={`/images/SITETIMNGUYEN/4.png`}
              width={500}
              height={0}
              alt="main"
            ></Image>
            <h4 className="py-5 text-center">
              <span className="italic">Citizen Debt Services</span> <br /> Đối
              tác chiến lược
            </h4>
          </div>
          <ul className="flex flex-col justify-start h-[70%] sm:text-xs md:text-base xl:text-xl list-disc">
            <li className="mx-10 mb-5">
              CDS có phạm vi hoạt động rộng khắp 49 tiểu bang, chuyên cung cấp
              các giải pháp tối ưu nhất cho những người đang phải vật lộn với nợ
              nần và khao khát làm lại cuộc đời một lần nữa.
            </li>
            <li className="mx-10">
              CDS là công ty giảm nợ của người Việt đầu tiên được cấp phép từ
              chính phủ, đã hỗ trợ hơn 5,000 người giải quyết khoản nợ lên đến
              150 triệu USD.
            </li>
          </ul>
          <div className="w-full flex justify-around absolute -bottom-7">
            <Button className="bg-gradient-to-t from-blue-100 to-blue-700 hover:bg-gradient-to-bl w-1/3 rounded-full px-7 py-7 sm:text-lg xl:text-xl">
              REVIEW
            </Button>
            <Button className="bg-gradient-to-tr from-blue-100 to-blue-700 hover:bg-gradient-to-bl w-1/3 rounded-full px-7 py-7 sm:text-lg xl:text-xl">
              LEARN MORE
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
