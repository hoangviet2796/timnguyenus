import React from "react";
import Image from "next/image";
const content = {
  title:
    "CÁC CHUYÊN GIA ĐÀM PHÁN VỚI KINH NGHIỆM XỬ LÝ HÀNG NGÀN HỒ SƠ GIẢM NỢ MỖI THÁNG",
  paragraphs: [
    "Citizen Debt Services là đơn vị đối tác Tim chọn đồng hành để cung cấp các dịch vụ xử lý nợ tốt nhất với hệ thống hỗ trợ toàn diện nhất trong ngành. Sự hợp tác giữa Tim và CDS tạo nên đột phá mới giúp khách hàng của mình thoát khỏi khoản nợ ít hơn tổng số nợ vốn có.",
    "Với hơn một thập kỷ kinh nghiệm trong lĩnh vực đàm phán giảm nợ tiêu dùng, chúng tôi đảm bảo rằng khách hàng của chúng tôi sẽ được trải nghiệm một dịch vụ chuyên nghiệp để xóa nợ hoàn toàn.",
  ],
};

export default function Expertdebat() {
  return (
    <div className="relative w-full h-[900px] flex items-center bg-gradient-to-b from-[#1c1c1e] via-[#79797b] to-[#0b0b0c] text-white overflow-hidden px-14 mb-8">
      {/* Nội dung văn bản */}
      <div className="relative z-20 lg:w-1/2  flex-col justify-between h-[550px] left-[100px]">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-8">
          {content.title}
        </h2>
        <ul className="space-y-6 text-xl leading-loose max-w-[589px] tracking-wider">
          {content.paragraphs.map((paragraph, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-white text-3xl mt-0">•</span>
              <span>{paragraph}</span>
            </li>
          ))}
        </ul>
      </div>
      {/*khối ảnh và nền họa tiết */}
      <div className="relative lg:w-[50%] h-full flex justify-center items-center left-[120px]">
        <div className="absolute inset-0 ">
          <Image
            src="/images/SITETIMNGUYEN/social/nen.png"
            alt="Nền họa tiết"
            layout="fill"
            objectFit="cover"
            className="opacity-70 -scale-x-100 pt-10"
            priority
          />
        </div>
        {/* khối anh Tim */}
        <div className="relative z-30">
          <Image
            src="/images/SITETIMNGUYEN/chuyengiadampham.png"
            alt="Chuyên gia đàm phán"
            width={650}
            height={600}
            className=" max-w-lg md:max-w-xl lg:max-w-2xl pt-[70px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
