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
      className={`${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } fixed top-0 z-50 w-full bg-white transition-transform duration-300`}
    >
      {isDesktop ? (
        <>
          {/* Thanh màu cam */}
          <div className="w-full text-base bg-[#FD6D14] text-black text-center leading-[20px] py-2 ">
            <h3 className="font-medium italic">
              Website này, Tim muốn cung cấp những tools miễn phí giúp mọi người
              dùng để cải thiện sức khoẻ tài chính hơn và đồng thời muốn mọi
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

            {/* Bottom Section: Navigation Menu */}

            <NavigationHeader />

            <Button
              variant={"outline"}
              className="rounded-full border-[#FD6D14] border-solid text-[#FD6D14] font-bold text-base hover:text-[#FD6D14]"
            >
              949-569-9698
            </Button>
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
