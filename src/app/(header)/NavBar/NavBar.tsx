'use client'

import Image from "next/image"
import NavBar from './NavBar.module.css'
import Link from "next/link"
import NavigationHeader from "./navigationmenu"
import { useMediaQuery } from "@/hooks/use-media-query"
import { inherits } from "util"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { MenuIcon } from "lucide-react"


export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return isDesktop?(
    <header className={`${NavBar.header}`}>
      <div className={`min-w-2 h-14 ml-auto mr-auto flex justify-between max-w-screen-xl`}>
        <Link href="/">
          <Image src= '/images/logo.png' width= {130} height = {100} alt="logo"></Image>
        </Link>
        <NavigationHeader/>
        <div/>
      </div>
    </header>
  ):(<header className={`${NavBar.header}`}>
    <div className={`min-w-2 h-14 ml-auto mr-auto flex justify-center`}>
        <div>
          <Drawer direction="left" >
            <DrawerTrigger>
              <MenuIcon/>
            </DrawerTrigger>
            <DrawerContent>
              <NavigationHeader/>
            </DrawerContent>
          </Drawer>
        </div>
        <Link href="/" className="m-auto">
          <Image src= '/images/logo.png' width= {130} height = {100} alt="logo"></Image>
        </Link>
        <div></div>
      <div/>
    </div>
  </header>)
}
