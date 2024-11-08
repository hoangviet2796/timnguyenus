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
        <Card className="w-2/3 mt-4 mb-4">
          <Image className="h-full ml-2 pt-2 pb-2" src= '/images/tim.jpg' width= {300} height = {150} alt="logo"></Image>
          
        </Card>
      </div>
      
    </main>
  );
}
