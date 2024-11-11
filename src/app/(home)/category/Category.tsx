'use client'
import {
    Card
  } from "@/components/ui/card"
import { useMediaQuery } from "@/hooks/use-media-query"




export default function Category() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return isDesktop?(
    <div className="flex justify-center">
        <Card className={`w-2/3 mt-4 mb-4 flex`}>sdfsd</Card>
    </div>
  ):(<div></div>)
}