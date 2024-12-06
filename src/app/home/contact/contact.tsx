import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      className={`flex justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#08244d] before:opacity-30`}
    >
      <Image
        className={`h-fit w-full `}
        loading="lazy"
        src={`/images/SITETIMNGUYEN/1.jpg`}
        width={900}
        height={0}
        alt="main"
      ></Image>
      <div className="absolute left-0 top-0 z-10 h-full w-full flex justify-around">
        <div className="w-1/2 text-[#ff9000] h-full text-end"></div>
        <Card className="relative bg-opacity-30 bg-white w-fit h-fit mt-[5%] mr-[5%]">
          <div className="flex flex-col font-bold sm:text-xl md:text-2xl xl:text-3xl 2xl:text-5xl m-10">
            <h4 className="py-5 text-center text-[#ff9000]">
              CONTACT INFORMATION
            </h4>
            <p className="my-2">949-569-9698</p>
            <p className="my-2">timnguyenus.finance@gmail.com</p>
            <p className="my-2">Irvine, CA, United States, California</p>
            <ul>
              <li className="my-2">
                <Link
                  href="https://www.facebook.com/LyThanhDuy11388"
                  target="_blank"
                  className=" flex justify-center items-center text-[#ff9000] fill-[#ff9000] hover:text-[#fe6601]"
                >
                  <Icons.facebook className="fill-[#ff9000] h-12 w-12 mr-5" />
                  <p>FACEBOOK</p>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="https://www.facebook.com/LyThanhDuy11388"
                  target="_blank"
                  className=" flex justify-center items-center text-[#ff9000] hover:text-[#fe6601]"
                >
                  <Icons.youtube className="fill-[#ff9000] h-12 w-12 mr-5" />
                  <p>YOUTUBE</p>
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="https://www.facebook.com/LyThanhDuy11388"
                  target="_blank"
                  className=" flex justify-center items-center text-[#ff9000] hover:text-[#fe6601]"
                >
                  <Icons.tiktok className="fill-[#ff9000] h-12 w-12 mr-5" />
                  <p>TIKTOK</p>
                </Link>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
