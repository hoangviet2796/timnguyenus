import Image from "next/image";
import { Icons } from "@/components/icons";

export default function Vision() {
  return (
    <div className={`flex bg-white w-full`}>
      <div className="w-1/2">
        <Image
          className={`h-fit w-full `}
          loading="lazy"
          src={`/images/SITETIMNGUYEN/11.jpg`}
          width={800}
          height={0}
          alt="main"
        ></Image>
      </div>
      <div className="w-1/2 flex flex-col justify-evenly items-center my-5">
        <div>
          <h4>Tầm nhìn, sứ mệnh</h4>
        </div>
      </div>
    </div>
  );
}
