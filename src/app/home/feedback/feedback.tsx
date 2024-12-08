import Image from "next/image";
import { Icons } from "@/components/icons";

export default function Feedback() {
  return (
    <div className={`flex w-full`}>
      <div className="w-1/2 flex flex-col justify-evenly items-center my-5">
        <h3 className="sm:text-3xl md:text-4xl xl:text-5xl mx-5 text-center font-semibold text-[--text-primary-color]">
          Đã hỗ trợ hơn 10.000 <br /> người giảm nợ thành công
        </h3>
        <Icons.america className={`h-[50%] w-[60%] hover:scale-105`} />
        {/* <Image
          className={`h-[50%] w-[60%] `}
          loading="lazy"
          src={`https://media-public.canva.com/iQ7Ds/MAFlaLiQ7Ds/1/s.svg`}
          width={800}
          height={0}
          alt="main"
        ></Image> */}
        <p className="italic sm:text-lg md:text-xl xl:text-2xl mx-5 text-center text-white">
          Tim đồng hành cùng nhiều hoàn cảnh vượt qua <br /> “góc khuất” tối tăm
          của nợ nần
        </p>
      </div>
      <div className="w-1/2">
        <Image
          className={`h-fit w-full `}
          loading="lazy"
          src={`/images/SITETIMNGUYEN/3.png`}
          width={800}
          height={0}
          alt="main"
        ></Image>
      </div>
    </div>
  );
}
