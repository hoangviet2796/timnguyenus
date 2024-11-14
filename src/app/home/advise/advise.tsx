import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Icons} from '@/components/icons'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"

import advise from "./advise.module.css"



export default function Category() {
return (<div className="flex justify-center w-full">
    <Card className="w-3/5 mx-auto max-w-lg flex justify-center flex-col my-16">
      <CardHeader className="space-y-1 ">
          <CardTitle className={`${advise.mainColor} text-4xl font-bold text-center mb-3`}>Nhận tư vấn vay miễn phí</CardTitle>
          <CardDescription className="flex items-center font-medium">
            <Icons.check/>
            <p className="ml-1">Nhận tư vấn ước tính tiết kiệm ngay trong ngày</p>
          </CardDescription>
          <CardDescription className="flex items-center font-medium"><Icons.check/><p className="ml-1">Xem thời gian trả nợ ước tính</p></CardDescription>
          <CardDescription className="flex items-center font-medium"><Icons.check/><p className="ml-1">Không tốn bất kỳ chi phí nào</p></CardDescription>
      </CardHeader>
      <CardContent>
          <div className="space-y-4">
          <div className="space-y-2">
              <Select>
                <SelectTrigger className="w-full h-[50px] border-black">
                  <SelectValue placeholder="Chọn khoảng vay của bạn" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Fruits</SelectLabel> */}
                    <SelectItem value="apple">$0 - $1000</SelectItem>
                    <SelectItem value="banana">$1000 - $2000</SelectItem>
                    <SelectItem value="blueberry">$2000 - $3000</SelectItem>
                    <SelectItem value="grapes">$3000 - $4000</SelectItem>
                    <SelectItem value="pineapple">$4000 - $5000</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
          </div>
          <Button type="submit" className={`${advise.mainBtn} w-full`}>
              Nhận tư vấn ngay
          </Button>
          </div>
      </CardContent>
    </Card>
  </div>)
}