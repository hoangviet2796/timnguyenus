import Link from "next/link";
import Image from "next/image";
import React from "react";
import footer from "./footer.module.css";

export default function Footer() {
  return (
    <footer
      className={`${footer.footer} text-white flex flex-col items-center`}
    >
      <div className="max-w-screen-xl grid grid-cols-3 my-auto p-10">
        <div className="px-10">
          <Link href="/" className="h-full items-center">
            <Image
              className="h-50"
              src={`/images/LogoTimfooter.png`}
              width={150}
              height={150}
              alt="logo"
              priority
            ></Image>
          </Link>
          <p className="italic mb-10">
            “Hành trình giúp cộng đồng thoát nợ và tìm lại cuộc sống mới chưa
            bao giờ là dễ dàng, nhưng Tim chưa từng dừng bước...”
          </p>
          <div className="flex w-full justify-start">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="h-full flex flex-col items-center"
            >
              <Image
                className={`w-[45px] h-fit ${footer.primaryFilter}`}
                src={`/images/SITETIMNGUYEN/social/fb.png`}
                width={150}
                height={150}
                alt="logo"
                priority
              ></Image>
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="h-full flex flex-col items-center mx-10"
            >
              <Image
                className={`w-[45px] h-fit ${footer.primaryFilter}`}
                src={`/images/SITETIMNGUYEN/social/youtube.png`}
                width={150}
                height={150}
                alt="logo"
                priority
              ></Image>
            </Link>
            <Link
              href="https://www.tiktok.com/"
              target="_blank"
              className="h-full flex flex-col items-center"
            >
              <Image
                className={`w-[45px] h-fit ${footer.primaryFilter} p-[5px]`}
                src={`/images/SITETIMNGUYEN/social/tiktok.png`}
                width={150}
                height={150}
                alt="logo"
                priority
              ></Image>
            </Link>
          </div>
        </div>
        <div className="px-10">
          <h4 className="text-2xl font-bold my-5">Quick Link</h4>
          <ul className="flex flex-col items-start text-xl">
            <li>
              <Link
                href="/"
                className="transition-all ease-in-out duration-150 h-full flex flex-col items-center hover:text-[--text-primary-color] hover:translate-x-1 mb-3"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-all ease-in-out duration-150 h-full flex flex-col items-center hover:text-[--text-primary-color] hover:translate-x-1 mb-3"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/program"
                className="transition-all ease-in-out duration-150 h-full flex flex-col items-center hover:text-[--text-primary-color] hover:translate-x-1 mb-3"
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                href="/freetools"
                className="transition-all ease-in-out duration-150 h-full flex flex-col items-center hover:text-[--text-primary-color] hover:translate-x-1 mb-3"
              >
                Free tools
              </Link>
            </li>
            <li>
              <Link
                href="/topic"
                className="transition-all ease-in-out duration-150 h-full flex flex-col items-center hover:text-[--text-primary-color] hover:translate-x-1 mb-3"
              >
                Topic
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xl my-5">
          <h4>
            <span className="font-bold">Email:</span>{" "}
            timnguyenus.finance@gmail.com
          </h4>
          <h4>
            <span className="font-bold">Phone:</span> 949-569-9698
          </h4>
          <h4>
            <span className="font-bold">Address:</span> Irvine, CA, United
            States, California
          </h4>
        </div>
      </div>
      <p className="m-auto italic select-none text-center">
        ©2024 TimNguyenUS. All rights reserved.
      </p>
    </footer>
  );
}
