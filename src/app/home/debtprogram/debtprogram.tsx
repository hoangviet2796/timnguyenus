import Image from "next/image";

export default function DebtProgram() {
  return (
    <div className="w-full bg-white py-10 px-5 flex flex-col items-center">
      {/* Tiêu đề */}
      <h2 className="w-full max-w-[960px] text-3xl lg:text-3xl font-bold text-[#05224a] mb-5 pl-3 text-left">
        Chương trình giảm nợ của TIM NGUYEN
      </h2>

      {/* Nội dung chính */}
      <div className="w-full max-w-[960px] bg-white flex flex-col md:flex-row items-start mt-5 gap-10">
        {/* Phần văn bản */}
        <div className="w-full md:w-[46%]">
          <h3 className="text-[#242424] mb-3 text-[15px] leading-8 pl-3">
            Tim Nguyen - Chuyên gia giảm nợ cá nhân đồng hành <br /> cùng nhiều
            hoàn cảnh vượt qua “góc khuất” tối tăm của<br /> nợ nần để làm lại một
            cuộc đời mới
          </h3>

          {/* Khối thông tin số liệu */}
          <div
            className="relative w-full md:w-[413px] h-[104px] overflow-hidden"
            style={{
              backgroundImage: "url('/images/ladicdn/9.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {/* Lớp phủ xanh mờ */}
            <div className="absolute inset-0 bg-[#051F4Dde] flex items-center justify-around p-3 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold">07</h3>
                <p className="text-sm">Năm</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-700">+200</h3>
                <p className="text-sm">Banks</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">+10,000</h3>
                <p className="text-sm">Khách hàng</p>
              </div>
            </div>
          </div>

          {/* Đoạn mô tả */}
          <div className="mt-6 text-[#242424] text-[15px] leading-9 pl-3">
            <p>
              Với hơn{" "}
              <span className="font-bold text-[20px] text-black">7 năm</span>{" "}
              kinh nghiệm giúp đỡ cộng đồng người Việt tại Mỹ giải quyết các vấn
              đề tài chính và tín dụng.
            </p>
            <p>
              Thương lượng đàm phán với hơn{" "}
              <span className="font-bold text-[20px] text-black">
                200 ngân hàng
              </span>{" "}
              đem về rất nhiều offer giảm nợ từ{" "}
              <span className="font-bold text-[20px] text-black">40-70%</span>{" "}
              nợ gốc.
            </p>
            <p>
              Hỗ trợ thành công hơn{" "}
              <span className="font-bold text-[20px] text-black">10,000</span>{" "}
              hoàn cảnh thoát khỏi nợ nần, bắt đầu cuộc sống mới.
            </p>
          </div>
        </div>

        {/* Phần hình ảnh và nút hành động */}
        <div className="w-full md:w-[54%] flex flex-col items-center relative">
        <div className="w-full flex justify-center overflow-hidden ">
            <Image
              src="/images/ladicdn/10.png"
              alt="Payroll"
                layout="intrinsic"
                width={960} /* Phóng to hình ảnh */
                height={720}/* Tăng kích thước hình ảnh */
              className="object-cover mb-4 "
            />
          </div>
          <button className="absolute top-100 bottom-[90px] bg-[#004AAD] text-white text-[14px] font-bold py-2 px-[70px] rounded-lg shadow-md hover:bg-[#082c54] transition duration-300">
              Nhận PAYMENT PLAN
            </button>
        </div>
      </div>
    </div>
  );
}
