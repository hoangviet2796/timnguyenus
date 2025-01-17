import { Card } from "@/components/ui/card";
import Image from "next/image";
import { object } from "zod";

const items = [
  {
    icon: "/images/SITETIMNGUYEN/about/icon1.png",
    title: "7 năm",
    desc: "Kinh nghiệm về giảm nợ và tài chính",
  },
  {
    icon: "/images/SITETIMNGUYEN/about/icon2.png",
    title: "30,000+ người",
    desc: "Đã hoàn tất hồ sơ và trả dứt nợ",
  },
  {
    icon: "/images/SITETIMNGUYEN/about/icon3.png",
    title: "80,000,000$",
    desc: "Tổng số nợ đã được duyệt thành công",
  },
];

export default function Story() {
  return (
    <div className="mt-24 max-w-screen-md text-justify font-semibold">
      <div className="h-fit w-full -ml-20">
        <Image
          className={`w-2/3 h-fit`}
          src="/images/SITETIMNGUYEN/about/story1.png"
          width={750}
          height={180}
          //   fill
          //   style={{ objectFit: "contain" }}
          alt="story2"
        ></Image>
      </div>
      <p>
        Tim lớn lên trong một gia đình không mấy khá giả, và mọi thứ càng trở
        nên khó khăn hơn khi ba mẹ ly hôn lúc Tim chỉ mới 13 tuổi. Là đứa con
        trai duy nhất, Tim phải gánh trên vai trách nhiệm mà ở độ tuổi đó chưa
        ai nên trải qua. Ngoài việc đi học, Tim còn phải làm nhiều công việc
        cùng lúc - từ bưng bê quán ăn, giao báo cho đến làm việc trong xưởng.
        Những ngày đó, thời gian ngủ chỉ vài tiếng vì Tim biết nếu không cố
        gắng, gia đình sẽ không vượt qua được gánh nặng nợ nần đang đè nặng.
        <br />
        <br />
        Nhưng dù làm ngày làm đêm, khoản nợ vẫn không vơi đi. Tim từng có lúc bế
        tắc, tự hỏi tại sao mình phải chịu đựng quá nhiều áp lực khi còn quá
        trẻ. Tim đã tìm kiếm sự giúp đỡ, nhưng không ai thực sự hiểu và cho Tim
        một lời khuyên đúng đắn. Cảm giác như đang chiến đấu một mình giữa một
        cuộc chiến không hồi kết.
      </p>
      <div className="h-fit w-full flex justify-end">
        <Image
          className={`w-2/3 h-fit`}
          src="/images/SITETIMNGUYEN/about/story2.png"
          width={850}
          height={319}
          //   fill
          //   style={{ objectFit: "contain" }}
          alt="story2"
        ></Image>
      </div>
      <p>
        Ngày hôm nay, Tim đã vượt qua tất cả. Nhưng thay vì chỉ tận hưởng thành
        quả của mình, Tim chọn quay lại giúp đỡ những người đang bế tắc giống
        như Tim ngày xưa. Tim hiểu rõ cảm giác tuyệt vọng, áp lực và cả sự cô
        đơn khi không biết phải bắt đầu từ đâu. Đó là lý do Tim trở thành chuyên
        gia tài chính và giảm nợ, để không ai phải đối mặt với những điều đó một
        mình.
      </p>
      <div className="relative h-[150px] w-[26%] overflow-hidden">
        <Image
          className={`w-1/2 h-fit`}
          src="/images/SITETIMNGUYEN/about/sign.png"
          fill
          sizes="25vw"
          style={{ objectFit: "cover" }}
          alt="story2"
        ></Image>
      </div>
    </div>
  );
}
