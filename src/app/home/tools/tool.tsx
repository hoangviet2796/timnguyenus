import Image from "next/image";

const tools = [
  { id: 1, icon: "/images/ladicdn/1.png", title: "Phí duy trì cuộc sống" },
  { id: 2, icon: "/images/ladicdn/2.png", title: "Kiểm tra điều kiện vay" },
  { id: 3, icon: "/images/ladicdn/3.png", title: "Tính toán thuế" },
  { id: 4, icon: "/images/ladicdn/3.png", title: "Phí duy trì cuộc sống" },
  { id: 5, icon: "/images/ladicdn/5.png", title: "Giải Quyết Nợ" },
  { id: 6, icon: "/images/ladicdn/6.png", title: "Tiết kiệm, hưu trí" },
  {
    id: 7,
    icon: "/images/ladicdn/7.png",
    title: "Tính toán thời gian trả nợ theo lãi",
  },
  { id: 8, icon: "/images/ladicdn/8.png", title: "Payment Plan" },
];
interface ToolItem {
  icon: string;
  title: string;
}
const ToolItem: React.FC<ToolItem> = ({ icon, title }) => (
  <li className="group bg-white flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-[0_6px_10px_-2px_rgba(0,0,0,0.6)] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_10px_-2px_rgba(0,0,0,0.4)] w-[202px] h-[151px]">
    <Image src={icon} alt={title} width={65} height={65} className="mb-4" />
    <h3 className="text-center text-[18px] font-bold text-black group-hover:text-[--text-primary-color] leading-snug break-words w-[186px]">
      {title === "Kiểm tra điều kiện vay" ? (
        <>
          Kiểm tra <br /> điều kiện vay
        </>
      ) : (
        title
      )}
    </h3>
  </li>
);

export default function Tool() {
  return (
    <div className="w-full h-full bg-[rgb(241,243,244)]  flex flex-col items-center mt-[150px] px-3">
    <div className="bg-[rgb(241,243,244)] w-full max-w-[1280px] h-auto mt-[80px] mb-[50px] flex flex-col items-center justify-center  ">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <ToolItem key={tool.id} icon={tool.icon} title={tool.title} />
          ))}
        </ul>
        <div className="mt-[60px] text-center">
          <p className="text-[16px] font-bold text-black">
            Nếu bạn gặp bất cứ khó khăn nào khi sử dụng các công
            <br /> cụ hỗ trợ bạn có thể liên hệ trực tiếp với Tim Nguyen!
          </p>
        </div>
      </div>
    </div>
  );
}
