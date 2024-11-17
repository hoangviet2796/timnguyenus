'use client'

import Image from "next/image"
import NavBar from './NavBar.module.css'
import Link from "next/link"
import NavigationHeader from "./navigationmenu"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { MenuIcon } from "lucide-react"
import { NavigationHeaderMobile } from "./navigationMenuMobile"


export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return isDesktop?(
    <header className={`${NavBar.header} sticky top-0`}>
      <div className={`max-w-screen-xl min-w-2 h-15 flex justify-between ml-auto mr-auto text-lg`}>
        <Link href="/">
          <Image className="h-full w-auto ml-2 pt-2 pb-2" src= '/timnguyenus/public/images/logoTimtron1.png' width= {60} height = {0} alt="logo" priority ></Image>
        </Link>
        <NavigationHeader/>
        <div/>
      </div>
    </header>
  ):(<header className={`${NavBar.header}`}>
    <div className={`min-w-2 ml-auto mr-auto flex justify-center`}>
        <div className="flex">
          <Drawer direction="left" >
            <DrawerTrigger>
              <MenuIcon/>
            </DrawerTrigger>
            <DrawerContent>
              <NavigationHeaderMobile/>
            </DrawerContent>
          </Drawer>
        </div>
        <Link href="/" className="m-auto h-full">
          <Image className="h-full ml-2 pt-2 pb-2" src= '/timnguyenus/public/images/logoTimtron1.png' width= {60} height = {80} alt="logo" priority ></Image>
        </Link>
        <div></div>
      <div/>
    </div>
  </header>)
}
