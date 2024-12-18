import Image from "next/image";
import { Icons } from "@/components/icons";
import data from "../../(header)/data.json";

export default function Tool() {
  return (
    <div
      className={`flex flex-col w-full max-w-screen-xl justify-center mx-auto my-10`}
    >
      <div className="flex justify-evenly items-center my-10">
        <h3 className="sm:text-3xl md:text-4xl xl:text-5xl mx-5 text-left font-semibold w-1/2 text-[--text-primary-color]">
          Tương lai tươi sáng hơn khi bạn đã chuẩn bị sẵn sàng.
        </h3>
        <span className="sm:text-lg md:text-xl xl:text-2xl text-left font-thin w-1/2">
          Nhận lời khuyên của chuyên gia, các công cụ miễn phí và kế hoạch được
          cá nhân hóa để giúp bạn đạt được mục tiêu mong muốn bằng số tiền của
          mình.
          <div className="border-[1px] border-solid w-full h-0 mt-3" />
        </span>
      </div>
      <div className="">
        <ul className="grid grid-cols-4">
          <li className="group m-5">
            {/* filter: invert(63%) sepia(30%) saturate(5334%) hue-rotate(0deg) brightness(102%) contrast(109%) */}
            <div className="transition ease-in-out duration-300 relative border-[1px] border-solid flex flex-col items-center justify-between p-10 group-hover:-translate-y-2">
              <Icons.cost className="" />
              <h4 className="transition ease-in-out duration-300 text-xl font-bold my-5 group-hover:text-[--text-primary-color]">
                Chi phí duy trì cuộc sống
              </h4>
              <div className="transition ease-in-out duration-300 absolute border-[1px] border-solid w-full h-0 bottom-0 group-hover:border-[--text-primary-color]" />
            </div>
          </li>
          <li className="group m-5">
            {/* filter: invert(63%) sepia(30%) saturate(5334%) hue-rotate(0deg) brightness(102%) contrast(109%) */}
            <div className="transition ease-in-out duration-300 relative border-[1px] border-solid flex flex-col items-center justify-between p-10 group-hover:-translate-y-2">
              <Icons.loan className="" />
              <h4 className="transition ease-in-out duration-300 text-xl font-bold my-5 group-hover:text-[--text-primary-color]">
                Kiểm tra điều kiện vay
              </h4>
              <div className="transition ease-in-out duration-300 absolute border-[1px] border-solid w-full h-0 bottom-0 group-hover:border-[--text-primary-color]" />
            </div>
          </li>
          <li className="group m-5">
            {/* filter: invert(63%) sepia(30%) saturate(5334%) hue-rotate(0deg) brightness(102%) contrast(109%) */}
            <div className="transition ease-in-out duration-300 relative border-[1px] border-solid flex flex-col items-center justify-between p-10 group-hover:-translate-y-2">
              <Icons.tax className="" />
              <h4 className="transition ease-in-out duration-300 text-xl font-bold my-5 group-hover:text-[--text-primary-color]">
                Công cụ tính toán thuế
              </h4>
              <div className="transition ease-in-out duration-300 absolute border-[1px] border-solid w-full h-0 bottom-0 group-hover:border-[--text-primary-color]" />
            </div>
          </li>
          <li className="group m-5">
            {/* filter: invert(63%) sepia(30%) saturate(5334%) hue-rotate(0deg) brightness(102%) contrast(109%) */}
            <div className="transition ease-in-out duration-300 relative border-[1px] border-solid flex flex-col items-center justify-between p-10 group-hover:-translate-y-2">
              <Icons.credit className="" />
              <h4 className="transition ease-in-out duration-300 text-xl font-bold my-5 group-hover:text-[--text-primary-color]">
                Thanh toán thẻ tín dụng
              </h4>
              <div className="transition ease-in-out duration-300 absolute border-[1px] border-solid w-full h-0 bottom-0 group-hover:border-[--text-primary-color]" />
            </div>
          </li>
        </ul>
        <ul className="grid grid-cols-3">
          <li className="group m-5">
            {/* filter: invert(63%) sepia(30%) saturate(5334%) hue-rotate(0deg) brightness(102%) contrast(109%) */}
            <div className="transition ease-in-out duration-300 relative border-[1px] border-solid flex flex-col items-center justify-between p-10 group-hover:-translate-y-2">
              <Icons.saving className="" />
              <h4 className="transition ease-in-out duration-300 text-xl font-bold my-5 group-hover:text-[--text-primary-color]">
                Tiết kiệm hưu trí
              </h4>
              <div className="transition ease-in-out duration-300 absolute border-[1px] border-solid w-full h-0 bottom-0 group-hover:border-[--text-primary-color]" />
            </div>
          </li>
          <li className="group m-5">
            {/* filter: invert(63%) sepia(30%) saturate(5334%) hue-rotate(0deg) brightness(102%) contrast(109%) */}
            <div className="transition ease-in-out duration-300 relative border-[1px] border-solid flex flex-col items-center justify-between p-10 group-hover:-translate-y-2">
              <Icons.debt className="" />
              <h4 className="transition ease-in-out duration-300 text-xl font-bold my-5 group-hover:text-[--text-primary-color]">
                Kiểm tra tín dụng
              </h4>
              <div className="transition ease-in-out duration-300 absolute border-[1px] border-solid w-full h-0 bottom-0 group-hover:border-[--text-primary-color]" />
            </div>
          </li>
          <li className="group m-5">
            {/* filter: invert(63%) sepia(30%) saturate(5334%) hue-rotate(0deg) brightness(102%) contrast(109%) */}
            <div className="transition ease-in-out duration-300 relative border-[1px] border-solid flex flex-col items-center justify-between p-10 group-hover:-translate-y-2">
              <Icons.payoff className="" />
              <h4 className="transition ease-in-out duration-300 text-xl font-bold my-5 group-hover:text-[--text-primary-color]">
                Giải quyết nợ
              </h4>
              <div className="transition ease-in-out duration-300 absolute border-[1px] border-solid w-full h-0 bottom-0 group-hover:border-[--text-primary-color]" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
