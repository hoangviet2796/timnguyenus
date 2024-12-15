import Image from "next/image";
import Carousel from "@/app/home/goodeal/caroussel";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";

export default function Review() {
  //   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className={`w-full h-[75svh] relative my-10`}>
      <div className="absolute right-0 w-fit h-full">
        <Image
          className={`h-full w-full`}
          loading="lazy"
          src={`/images/SITETIMNGUYEN/8.jpg`}
          width={900}
          height={0}
          alt="main"
        ></Image>
      </div>
      <div className="absolute left-0 w-[55%] h-full bg-[#3e547b] flex justify-around items-center z-10">
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
        </Card>
      </div>
    </div>
  );
}
