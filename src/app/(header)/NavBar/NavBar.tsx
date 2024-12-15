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

import css from "./NavBar.module.css";

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const isDesktop = useMediaQuery("(min-width: 900px)");
  return isDesktop ? (
    <header
      className={`${css.myHeader} ${
        scrollDirection === "down" ? css.hide : "show"
      } z-50 block text-white w-full bg-[#08244d]`}
    >
      <div
        className={`min-w-2 h-15 flex justify-between mx-4 text-base items-center`}
      >
        <Link href="/" className="flex items-center">
          <Image
            className="h-full ml-2 pt-2 pb-2"
            src={`/images/logoTimtron1.png`}
            width={70}
            height={0}
            alt="logo"
            priority
          ></Image>
          <div className="ml-5">
            <h1 className="text-2xl font-bold">TIM NGUYEN</h1>
            <h4 className="text-xl font-medium text-[#fe6601]">GIẢM NỢ</h4>
          </div>
        </Link>
        <NavigationHeader />
        <div>
          <Button>Contact us</Button>
        </div>
      </div>
      <div className="absolute -bottom-1 bg-[#ff9000] w-full h-1"></div>
    </header>
  ) : (
    <header>
      <div className={`min-w-2 ml-auto mr-auto flex justify-center`}>
        <div className="flex">
          <Drawer direction="left">
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <NavigationHeaderMobile />
            </DrawerContent>
          </Drawer>
        </div>
        <Link href="/" className="m-auto h-full">
          <Image
            className="h-full ml-2 pt-2 pb-2"
            src="/images/logoTimtron1.png"
            width={60}
            height={80}
            alt="logo"
            priority
          ></Image>
        </Link>
        <div></div>
        <div />
      </div>
    </header>
  );
}
