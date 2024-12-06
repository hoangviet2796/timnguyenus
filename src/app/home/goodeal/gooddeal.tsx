import Image from "next/image";
import Carousel from "@/app/home/goodeal/caroussel";

export default function Review() {
  //   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div
      className={`flex justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#272621] before:opacity-70`}
    >
      <Image
        className={`h-fit w-full rotate-180`}
        loading="lazy"
        src={`/images/SITETIMNGUYEN/bg-social.jpg`}
        width={900}
        height={0}
        alt="main"
      ></Image>
      <div className="absolute z-10 w-full h-full left-0 flex justify-between">
        <Carousel />
        <div className="text-white italic w-1/3 pt-[10%] mr-10 lg:text-xl xl:text-3xl 2xl:text-5xl text-right">
          <p className="text-center">
            “Hành trình giúp cộng đồng thoát nợ và tìm lại cuộc sống mới chưa
            bao giờ là dễ dàng, nhưng Tim chưa từng dừng bước...”
          </p>
          <span className="w-full"> - Tim Nguyen -</span>
        </div>
      </div>
      <div className="absolute z-10 bottom-0 flex justify-between w-full">
        <div className="ml-12 mb-12">
          <h1 className="text-white font-bold lg:text-3xl xl:text-5xl 2xl:text-8xl">
            CÁC GOOD DEAL
          </h1>
          <h3 className="text-[#ff9000] lg:text-3xl xl:text-5xl 2xl:text-8xl">
            Tim hỗ trợ giảm thành công
          </h3>
        </div>
        <Image
          className={`h-fit w-1/2 absolute z-10 bottom-0 right-0`}
          loading="lazy"
          src={`/images/SITETIMNGUYEN/21.png`}
          width={800}
          height={0}
          alt="main"
        ></Image>
      </div>
    </div>
  );
}
