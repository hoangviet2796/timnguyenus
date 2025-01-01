import Image from "next/image";
import { Icons } from "@/components/icons";

export default function Feedback() {
  return (
    <div className="relative w-full h-fit flex flex-col items-center">
      <div
        className={`flex w-full max-w-screen-xl justify-center items-center my-10 shadow-xl rounded-xl p-5 bg-white z-10 border border-gray-200 border-solid`}
      >
        <div className="flex flex-col justify-evenly items-center my-5 w-1/2">
          <h3 className="sm:text-3xl md:text-4xl xl:text-5xl mx-5 text-center font-semibold text-[--text-primary-color] xl:leading-tight">
            Đã hỗ trợ hơn 10.000 <br /> người giảm nợ thành công
          </h3>
          <Icons.america
            className={`h-[50%] w-[60%] transition ease-in-out hover:scale-105`}
          />
          <p className="italic sm:text-lg md:text-xl xl:text-2xl mx-5 text-center">
            Tim đồng hành cùng nhiều hoàn cảnh vượt qua <br /> “góc khuất” tối
            tăm của nợ nần
          </p>
        </div>
        <div className="w-1/2">
          <Image
            className={`h-fit w-full rounded-xl`}
            loading="lazy"
            src={`/images/SITETIMNGUYEN/coporate.jpg`}
            width={800}
            height={0}
            alt="main"
          ></Image>
        </div>
      </div>
      <div
        className={`absolute -bottom-10 w-full h-[500px] bg-gradient-to-t from-black from-25%`}
      />
    </div>
  );
}
