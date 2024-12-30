import Image from "next/image";
import React from "react";
import moduleStyle from "./more.module.css";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description?: string;
  subDescription?: string;
}

export default function More() {
  return (
    <div className="flex gap-10 max-w-screen-xl m-auto p-4 mb-20">
      {/* Left */}
      <div className="w-[35%]">
        <h1 className=" text-[40px]   font-bold text-[#ff6100] text-center mt-16">
          Điều kiện tham gia
        </h1>
        <InfoCard
          imageSrc="/images/program/program-more1.png"
          title="Total nợ trên $10.000"
        />
        <InfoCard
          imageSrc="/images/program/program-more2.png"
          title="Các khoản nợ không thế chấp"
          description="Credit cards, Personal Loan, Medical Bills"
        />
        <InfoCard
          imageSrc="/images/program/program-more3.png"
          title="Zipcode thuộc 49/50"
          subDescription="tiểu bang được cấp phép"
        />
      </div>

      {/* RIGHT */}
      <div className=" relative w-[65%] pl-10 ">
        <h1 className="text-[46px] font-bold text-[#ff6100] text-center">
          CAM KẾT KHI THAM GIA MDM
        </h1>
        <div className="ml-28 w-[60%]">
          <ul className="list-inside list-disc  font-thin">
            <li>Đảm bảo TRẢ ÍT HƠN hơn TỔNG NỢ (đã bao gồm phí)</li>
            <li>
              Được cung cấp đầy đủ contract, giấy xác nhận giảm nợ và bill hằng
              tháng
            </li>
            <li>Hỗ trợ build lại điểm tín dụng sau chương trình</li>
          </ul>
        </div>
        <div className="mt-28 flex flex-col items-end">
          <div className="flex flex-col items-end ">
            <span className="text-[35px]  leading-none italic text-[#613914] font-bold">
              Có Tim luôn đồng hành{" "}
            </span>
            <span className="text-[35px]  italic text-[#613914] font-bold">
              suốt chương trình
            </span>
          </div>
          <div className="w-[60%] mt-10">
            <ul className="list-inside list-disc font-medium ">
              <li>
                Mọit thắc mắc đều được Tim và đội ngũ tận tình hỗ trợ kịp thời
                TRƯỚC - TRONG - SAU chương trình
              </li>
              <li>Ưu tiên xử lý hồ sơ nhanh hơn so với các agent khác.</li>
              <li>
                Được chia sẻ và giải đáp thắc mắc trực tiếp với Tim Nguyen
              </li>
            </ul>
          </div>
        </div>
        {/* Round Right */}
        <div className={`${moduleStyle.iconWrapperLeft}`}>
          <div className={`${moduleStyle.iconContentLeft}`}>
            <Image
              width={500}
              height={0}
              src={"/images/program/program-more5.jpg"}
              alt="Icon"
              className={moduleStyle.iconLeft}
            />
          </div>
          <div className={`${moduleStyle.standing}`}></div>
        </div>
        {/*  */}
        {/* Round Left */}
        <div className={moduleStyle.iconWrapper}>
          <div className={moduleStyle.iconContent}>
            <Image
              width={500}
              height={0}
              src={"/images/program/program-more4.png"}
              alt="Icon"
              className={moduleStyle.icon}
            />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
const InfoCard: React.FC<InfoCardProps> = ({
  imageSrc,
  title,
  description,
  subDescription,
}) => (
  <div className="flex items-center gap-3 bg-gradient-to-r from-[#8b5e3c] to-[#3c1e0a] rounded-full p-1 mt-4">
    <div className={`${moduleStyle.rounded_container} w-[80px] h-[80px]`}>
      <div className="w-[50%]">
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={imageSrc}
          alt={title}
          width={500}
          height={0}
        />
      </div>
    </div>
    <div>
      <h3 className="text-[20px] leading-none font-bold text-white">{title}</h3>
      {description && (
        <span className="text-[16px] leading-none italic font-bold text-white">
          {description}
        </span>
      )}
      {subDescription && (
        <h3 className="text-[20px] font-bold text-white">{subDescription}</h3>
      )}
    </div>
  </div>
);
