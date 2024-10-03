
import Image from "next/image"
import NavBar from './NavBar.module.css'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import NavigationMenuDemo from "./navigationmenu"


export default function Navbar() {
  return (
    <header className={`${NavBar.header}`}>
      <div className={`min-w-2 ml-4 mr-4 flex`}>
        <Image src= '/images/logo.png' width= {150} height = {400} alt="logo"></Image>
        <NavigationMenuDemo/>
      </div>
    </header>
  )
}
