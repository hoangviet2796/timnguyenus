import Image from "next/image"
import {
  Card
} from "@/components/ui/card"
import HomePage from "./HomePage.module.css"
import Advise from "@/app/home/advise/advise"
import Feedback from "@/app/home/feedback/feedback"
import Navigate from "@/app/home/navigate/navigate"


export default function home() {
  return (
    <main className={`flex justify-center flex-col`}>
      {/* <div className={` max-w-screen-xl`}> */}
        <div className={`${HomePage.mainCover} flex justify-center`}>
          <Card className={`${HomePage.present} w-full my-8 flex rounded-none`}>
            {/* <div className={`${HomePage.leftside}`}></div> */}
            <Image className={`${HomePage.leftside} h-full w-1/2`} src= '/timnguyenus/public/images/tim.jpg' width= {300} height = {150} alt="logo"></Image>
            <div className={`${HomePage.rightside} h-full w-1/2 p-2`}>
              <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam culpa adipisci ea voluptatem unde sunt vitae quos, voluptate quod, nostrum autem quidem aut corporis cupiditate velit vero, excepturi quo?</p>
            </div>
          </Card>
        </div>
        {/* <Category/> */}
        <Advise/>
        <Feedback/>
        <Navigate/>
      {/* </div> */}
    </main>
  );
}