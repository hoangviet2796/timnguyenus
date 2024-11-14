'use client'
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import navigate from "./navigate.module.css"



export default function Navigate() {
    const router = useRouter()

    return (<div className="flex justify-center w-full">
        <Card className="max-w-screen-xl mx-auto flex justify-center flex-col my-16 shadow-none">
            <CardHeader className="space-y-1 ">
                <CardTitle className={`${navigate.mainColor} text-4xl font-bold text-center mb-3`}>Chúng tôi có thể giúp bạn</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="space-y-2 text-lg font-semibold text-center">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur at, provident cum architecto voluptate quo et maiores odio accusamus. Dolores a adipisci, soluta nostrum aperiam saepe illum earum fugit.</h4>
                    </div>
                    <Button type="button" onClick={() => router.push('/about')} className={`${navigate.mainBtn} w-1/3 rounded-full`}>
                        Hiểu hơn về chúng tôi
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>)
}