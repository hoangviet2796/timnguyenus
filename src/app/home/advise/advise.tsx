import Image from "next/image";

export default function Advise() {
  return (
    <div className={`flex items-center w-full text-white`}>
      <div className="w-1/2 flex flex-col justify-evenly items-center m-16 ">
        <h4 className="font-bold mb-16 sm:text-lg md:text-xl xl:text-3xl text-center">
          Các chuyên gia đàm phán với kinh nghiệm xử lý hàng ngàn hồ sơ giảm nợ
          mỗi tháng
        </h4>
        <ul className="flex flex-col justify-start h-[70%] italic list-disc sm:text-xs md:text-base xl:text-xl">
          <li className="mx-10 mb-20">
            Citizen Debt Services là đơn vị đối tác Tim chọn đồng hành để cung
            cấp các dịch vụ xử lý nợ tốt nhất với hệ thống hỗ trợ toàn diện nhất
            trong ngành. Sự hợp tác giữa Tim và CDS tạo nên đột phá mới giúp
            khách hàng của mình thoát khỏi khoản nợ ít hơn tổng số nợ vốn có.
          </li>
          <li className="mx-10">
            Với hơn một thập kỷ kinh nghiệm trong lĩnh vực đàm phán giảm nợ tiêu
            dùng, chúng tôi đảm bảo rằng khách hàng của chúng tôi sẽ được trải
            nghiệm một dịch vụ chuyên nghiệp để xóa nợ hoàn toàn.
          </li>
        </ul>
      </div>
      <div className="h-full w-1/2">
        <Image
          className={`h-fit w-full`}
          loading="lazy"
          src={`/images/SITETIMNGUYEN/20.PNG`}
          width={600}
          height={0}
          alt="main"
        ></Image>
      </div>
    </div>
  );
}
