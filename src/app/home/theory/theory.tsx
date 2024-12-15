import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Theory() {
  return (
    <div className="w-full h-fit">
      <div
        className={`flex justify-center relative w-full h-[500px] bg-[#3e547b]`}
      >
        <div className="overflow-hidden w-full">
          <Image
            className={`h-fit w-full `}
            loading="lazy"
            src={`/images/SITETIMNGUYEN/shapebg.png`}
            width={900}
            height={0}
            alt="main"
          ></Image>
        </div>
      </div>
      <div className={`relative flex justify-center w-full h-[400px] bg-white`}>
        <div className="absolute bg-white bottom-0 max-w-screen-xl h-[150%] flex shadow-lg rounded-xl">
          <div className="w-1/2 p-10">
            <h2 className="sm:text-3xl md:text-4xl xl:text-5xl my-5 font-semibold text-[--text-primary-color]">
              Tim Nguyen
            </h2>
            <p className="sm:text-lg md:text-xl xl:text-2xl my-5 font-light">
              Chuyên gia giảm nợ với hơn 7 năm kinh nghiệm giúp đỡ cộng đồng
              người Việt tại Mỹ giải quyết các vấn đề tài chính và tín dụng.
            </p>
            <p className="sm:text-lg md:text-xl xl:text-2xl my-5 font-light">
              Chính Tim là người đã từng đối mặt với những khó khăn tài chính,
              rơi vào vòng xoáy nợ nần, vay để trả, trả để vay. Nhưng chính
              trong thử thách ấy, Tim đã tìm ra phương pháp hiệu quả để thoát
              khỏi bế tắc nợ nần. Và giờ đây, Tim muốn chia sẻ điều đó với tất
              cả mọi người.
            </p>
          </div>
          <div className="h-full w-1/2">
            <Image
              className={`absolute h-fit w-1/2 bottom-0`}
              loading="lazy"
              src={`/images/SITETIMNGUYEN/20.PNG`}
              width={900}
              height={0}
              alt="main"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
