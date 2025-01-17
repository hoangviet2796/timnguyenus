import Image from "next/image";

const list = [
  {
    image: "/images/SITETIMNGUYEN/10(1).jpg",
    title: "Tư vấn giải đáp vấn đề tài chính",
  },
  {
    image: "/images/SITETIMNGUYEN/10(2).jpg",
    title: "Hỗ trợ lập PAYMENT",
  },
  {
    image: "/images/SITETIMNGUYEN/10(3).jpg",
    title: "Đàm phán giảm nợ",
  },
  {
    image: "/images/SITETIMNGUYEN/10(4).jpg",
    title: "Kết nối xây dựng cộng đồng",
  },
];

export default function Help() {
  return (
    <div className={`flex flex-col items-center max-w-screen-xl my-10`}>
      <div className="flex h-[80px] w-full font-black sm:text-3xl xl:text-4xl justify-center items-center">
        <Image
          src="/images/logoTimtron1.png"
          width={63}
          height={63}
          alt="Logo"
          priority
          className="rounded-full"
        />
        <div className="relative h-full w-[30%]">
          <Image
            className={`h-fit w-full`}
            loading="lazy"
            src={"/images/SITETIMNGUYEN/TimHelp.png"}
            fill
            sizes="90vw"
            style={{ objectFit: "cover" }}
            alt="Help"
          ></Image>
        </div>
        <h2>GIÚP GÌ ĐƯỢC CHO BẠN?</h2>
      </div>
      <div className="h-[400px] w-full m-20 flex">
        {list.map((category) => (
          <div className="group flex flex-col items-center w-1/4">
            <div className="relative h-3/5 w-[80%] rounded-3xl">
              <Image
                className={`h-fit w-full rounded-3xl transition ease-in-out group-hover:scale-105`}
                loading="lazy"
                src={category.image}
                fill
                sizes="25vw"
                style={{ objectFit: "cover" }}
                alt="main"
              ></Image>
            </div>

            <div className="transition ease-in-out rounded-3xl my-5 h-1/5 border-solid border-2 border-[#2d8bba] w-[80%] p-3 text-center text-[#2d8bba] sm:text-base xl:text-lg group-hover:scale-105 group-hover:border-[--text-primary-color] group-hover:text-[--text-primary-color] font-bold">
              {category.title}
            </div>
            {/* <div className="flex items-center w-full">
              <div className="transition ease-in-out rounded-3xl border-solid border-2 bg-[#2d8bba] w-[50px] h-[50px] p-5 group-hover:bg-[--text-primary-color]" />
              <div className=" transition ease-in-out border-[1px] border-solid border-[#2d8bba] group-hover:border-[--text-primary-color] w-full h-0" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
