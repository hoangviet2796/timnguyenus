'use client'
import {
    Card,
    CardContent
  } from "@/components/ui/card"
import { useMediaQuery } from "@/hooks/use-media-query"
import data from "@/app/(header)/data.json"

export default function Category() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return isDesktop?(
    <div className="grid grid-cols-3">
        {data.tools.map((tool) => (
          <Card className={`w-2/3 m-4 flex justify-center`} key={tool.title}>
            <></>
            <CardContent>{tool.title}</CardContent>
            </Card>
      ))}
    </div>
  ):(<div></div>)
}