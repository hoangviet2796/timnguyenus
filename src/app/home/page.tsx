import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Category from "./category/Category"
import HomePage from "./HomePage.module.css"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
export default function home() {
  return (
    <main className={`flex justify-center`}>
      <div className={` max-w-screen-xl`}>
        <div className={`${HomePage.mainCover} flex justify-center`}>
          <Card className={`${HomePage.present} w-2/3 mt-4 mb-4 flex`}>
            {/* <div className={`${HomePage.leftside}`}></div> */}
            <Image className={`${HomePage.leftside} h-full w-1/2`} src= '/images/tim.jpg' width= {300} height = {150} alt="logo"></Image>
            <div className={`${HomePage.rightside} h-full w-1/2 p-2`}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam culpa adipisci ea voluptatem unde sunt vitae quos, voluptate quod, nostrum autem quidem aut corporis cupiditate velit vero, excepturi quo?</p>
            </div>
          </Card>
        </div>
        {/* <Category/> */}
        <div className="flex justify-center">
          <Card className="mx-auto max-w-sm flex justify-center flex-col mt-4 mb-4">
            <CardHeader className="space-y-1 ">
                <CardTitle className="text-2xl font-bold text-center">Nhận tư vấn vay nợ và giảm nợ miễn phí</CardTitle>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}