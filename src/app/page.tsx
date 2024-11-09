import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import HomePage from "./HomePage.module.css"
export default function Home() {
  return (
    <main className={`max-w-screen-xl ${HomePage.cover}`}>
      <div className="flex justify-center">
        <Card className="w-2/3 mt-4 mb-4 flex">
          {/* <div className={`${HomePage.leftside}`}></div> */}
          <Image className={`${HomePage.leftside} h-full w-1/2`} src= '/images/tim.jpg' width= {300} height = {150} alt="logo"></Image>
          <div className="h-full w-1/2 p-2">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam culpa adipisci ea voluptatem unde sunt vitae quos, voluptate quod, nostrum autem quidem aut corporis cupiditate velit vero, excepturi quo?</p>
          </div>
          
        </Card>
      </div>
      
    </main>
  );
}
