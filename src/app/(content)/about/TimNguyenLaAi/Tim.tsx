import Image from "next/image";
import timcss from "./Tim.module.css";

export default function TimNguyen() {
  return (
    // <div className="w-full flex justify-center bg-[rgb(241,243,244)] py-5">
    //   <div className={`flex items-center max-w-screen-xl `}>
    //     <div className="relative h-full w-1/2 ml-[20%]">
    //       <Image
    //         className={`h-fit w-4/5`}
    //         loading="lazy"
    //         src={`/images/SITETIMNGUYEN/9.jpg`}
    //         width={600}
    //         height={0}
    //         alt="main"
    //       ></Image>
    //       <div className="absolute bottom-[10%] -left-[30%] bg-[#023681] flex justify-center items-center w-fit py-5 px-10 bg-opacity-70">
    //         <Image
    //           className={`h-fit w-[30%]`}
    //           loading="lazy"
    //           src={`/images/SITETIMNGUYEN/so1.png`}
    //           width={500}
    //           height={0}
    //           alt="main"
    //         ></Image>
    //         <div className="font-extrabold sm:text-3xl xl:text-4xl text-white">
    //           <h4 className="leading-tight">
    //             cuộc gọi mới <br /> cuộc đời mới
    //           </h4>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-full w-1/2 mr-[5%] flex flex-col">
    //       <div
    //         className={` text-[#023681] w-fit relative h-fit font-extrabold sm:text-3xl xl:text-4xl`}
    //       >
    //         <h2 className="z-[1] relative">Tim Nguyen là ai?</h2>
    //         <div className={`${timcss.title}`}></div>
    //       </div>

    //       <p className=" ml-10 font-bold sm:text-xl my-10">
    //         Founder Nguoi Viet Socal
    //         <br />
    //         Founder Mastering Debt Management
    //         <br />
    //         Owner Việt Socal Chanel
    //         <br />
    //         Main representative of CDS Company
    //         <br />
    //         <span className="font-normal">
    //           7 năm kinh nghiệm hỗ trợ cộng đồng người Việt các vấn đề về tài
    //           chính - tín dụng. Trong thời gian ngắn đã trở thành người bạn đồng
    //           hành đáng tin cậy của rất nhiều anh/chị từ khắp các bang trên nước
    //           Mỹ khi gặp các vấn đề trong cuộc sống
    //         </span>
    //       </p>
    //       <div className="relative mt-10 mb-10 flex items-center">
    //         <Image
    //           className={`relative h-fit w-[20%] z-10`}
    //           loading="lazy"
    //           src={`/images/SITETIMNGUYEN/computericon.png`}
    //           width={500}
    //           height={0}
    //           alt="main"
    //         ></Image>
    //         <div className="absolute w-[15%] h-[90%] rounded-full bg-[--text-primary-color] -top-[50%] -left-[5%]"></div>
    //         <p className="font-extrabold sm:text-xl xl:text-2xl ml-5">
    //           Achieving The Main Goal of a Trustworthy Customer
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-fit">
      <div className="max-w-screen-lg bg-[#f1f3f4] h-8 flex mx-auto"></div>
      <Image
        className={`h-fit w-full`}
        priority
        src={`/images/SITETIMNGUYEN/about2.png`}
        width={5275}
        height={1650}
        alt="about2"
      ></Image>
      <div className="max-w-screen-lg bg-[#f1f3f4] h-8 flex mx-auto"></div>
    </div>
  );
}
