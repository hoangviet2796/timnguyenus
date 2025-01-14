"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "./navigationmenu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { NavigationHeaderMobile } from "./navigationMenuMobile";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <header
    // className={`${
    //   scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
    // } fixed top-0 z-50 w-full bg-white transition-transform duration-300`}
    >
      {isDesktop ? (
        <>
          {/* Thanh màu cam */}
          <div className="w-full text-base bg-[#FD6D14] text-black text-center leading-[20px] py-2 ">
            <h3 className="font-bold italic">
              Website này, Tim muốn cung cấp những tools miễn phí giúp mọi người
              check để cải thiện sức khoẻ tài chính hơn và đồng thời muốn mọi
              người hiểu hơn về giảm nợ!
            </h3>
          </div>
          {/* Top Section: Logo and Search Bar */}
          <div className="container mx-auto flex justify-center items-center py-2 max-w-[1280px]">
            {/* Logo Section */}
            <Link href="/" className="flex">
              <Image
                src="/images/logoTimtron1.png"
                width={63}
                height={63}
                alt="Logo"
                priority
                className="rounded-full"
              />
            </Link>

            {/* Search Bar */}
            <div className="w-1/3 flex mx-10">
              <div className="flex items-center w-full relative">
                {/* Thanh tìm kiếm */}
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-[43px] px-4 border-[2px] border-gray-400 rounded-[3px] border-solid  bg-white appearance-none focus:outline-none focus:shadow-none "
                />
                {/* Nút Xóa */}
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[22px] font-bold text-gray-400 hover:text-gray-700">
                  X
                </button>
              </div>
              {/* Nút Kính Lúp */}
              <button className="p-2 rounded-full border-2 border-gray-400 text-black-900 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3a7.5 7.5 0 105.255 12.755l4.742 4.742a.75.75 0 101.06-1.06l-4.742-4.743A7.5 7.5 0 0010.5 3zm0 1.5a6 6 0 100 12 6 6 0 000-12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <Button
              variant={"outline"}
              className="rounded-full border-[#FD6D14] border-solid text-[#FD6D14] font-bold text-base"
            >
              Contact us
            </Button>
          </div>

          {/* Bottom Section: Navigation Menu */}
          <div className="bg-white ">
            <NavigationHeader />
          </div>
        </>
      ) : (
        <div className="flex justify-between items-center px-4 py-2">
          {/* Mobile Menu Trigger */}
          <Drawer direction="left">
            <DrawerTrigger>
              <MenuIcon className="w-6 h-6 text-gray-800" />
            </DrawerTrigger>
            <DrawerContent>
              <NavigationHeaderMobile />
            </DrawerContent>
          </Drawer>

          {/* Logo Section */}
          <Link href="/" className="mx-auto">
            <Image
              src="/images/logoTimtron1.png"
              alt="logo"
              width={60}
              height={60}
              className="h-auto"
              priority
            />
          </Link>
        </div>
      )}
    </header>
  );
}
