import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Icons } from "@/components/icons";
import footer from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`bg-[#08244d] text-white`}>
      <div className="min-w-2 flex justify-between items-center mx-10">
        <Link href="/" className="h-full flex flex-col items-center">
          <Image
            className="h-50"
            src={`/images/LogoTimfooter.png`}
            width={150}
            height={150}
            alt="logo"
            priority
          ></Image>
        </Link>
        <p className="m-auto italic select-none">
          ©2024 TimNguyenUS. All rights reserved.
        </p>
        <div className="h-full flex mr-8 items-center">
          <Link
            href="https://www.facebook.com/LyThanhDuy11388"
            target="_blank"
            className="pl-1"
          >
            <Icons.facebook className="text-white" />
          </Link>
          <Link
            href="https://web.telegram.org/"
            target="_blank"
            className="pl-1"
          >
            <Icons.telegram className="text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
