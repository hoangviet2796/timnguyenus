'use client'
import Autoplay from "embla-carousel-autoplay"
import HomePage from "@/app/home/HomePage.module.css"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
  } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import React from "react"
import Image from "next/image"
import {Icons} from '@/components/icons'
import feedbackCSS from "./feedback.module.css"

const feedbacks = [
    {
        name: "Alex",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",
        avatar:"/images/employee-1.png"
    },
    {
        name: "David",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",
        avatar:"/images/employee-2.png"
    },
    {
        name: "James",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",
        avatar:"/images/employee-3.png"
    },
    {
        name: "Susan",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",
        avatar:"/images/employee-4.png"
    },
    {
        name: "Carl",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam.",
        avatar:"/images/employee-5.png"
    },
]

export default function feedback() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
      )
  return (
    <div className={`${HomePage.mainCover} flex flex-col items-center`}>
        <div className="w-full flex flex-col items-center my-16">
            <div className="max-w-screen-xl text-4xl font-bold text-center text-white mb-8">
                <h2 className={`${feedbackCSS.mainColor}`}>Những đánh giá từ những khách hàng hàng đầu của chúng tôi</h2>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                plugins={[plugin.current
                ]}
                className="w-full max-w-full"
                >
                <CarouselContent>
                    {feedbacks.map((fb,index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="shadow-lg flex flex-col items-center">
                                    <CardHeader className="flex items-center">
                                        <Image className="h-full w-auto ml-2 pt-2 pb-2 rounded-full" src= {fb.avatar} width= {70} height = {70} alt="logo" priority ></Image>
                                        <h3>{fb.name}</h3>
                                        <div className="flex">
                                            <Icons.stars/>
                                            <Icons.stars/>
                                            <Icons.stars/>
                                            <Icons.stars/>
                                            <Icons.stars/>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-center ">"{fb.feedback}"</CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div> 
    </div>
  )
}
