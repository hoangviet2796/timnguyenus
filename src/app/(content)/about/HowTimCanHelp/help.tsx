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
      <div className="h-full w-1/2 font-extrabold sm:text-3xl xl:text-4xl text-[#ff9000] text-center">
        <h2>Tim có thể giúp gì?</h2>
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
                style={{ objectFit: "cover" }}
                alt="main"
              ></Image>
            </div>

            <div className="transition ease-in-out rounded-3xl my-5 h-1/5 border-solid border-2 border-[#2d8bba] w-[80%] p-5 text-center text-[#2d8bba] sm:text-base xl:text-lg group-hover:scale-105 group-hover:border-[--text-primary-color] group-hover:text-[--text-primary-color] font-bold">
              {category.title}
            </div>
            <div className="flex items-center w-full">
              <div className="transition ease-in-out rounded-3xl border-solid border-2 bg-[#2d8bba] w-[50px] h-[50px] p-5 group-hover:bg-[--text-primary-color]" />
              <div className=" transition ease-in-out border-[1px] border-solid border-[#2d8bba] group-hover:border-[--text-primary-color] w-full h-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
