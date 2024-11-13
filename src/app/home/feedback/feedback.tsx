'use client'
import Autoplay from "embla-carousel-autoplay"
import HomePage from "@/app/home/HomePage.module.css"
import {
    Card,
    CardContent
  } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from "react"

const feedbacks = [
    {
        name: "Alex",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam."
    },
    {
        name: "David",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam."
    },
    {
        name: "James",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam."
    },
    {
        name: "Susan",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam."
    },
    {
        name: "Carl",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse sit perspiciatis explicabo, quasi temporibus? Mollitia nulla nemo a nesciunt est, minus ipsam! Odio nihil commodi vitae, cupiditate distinctio ullam."
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
                <h2>Những đánh giá từ những khách hàng hàng đầu của chúng tôi</h2>
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
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                <span className="text-3xl font-semibold">{index + 1}</span>
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
