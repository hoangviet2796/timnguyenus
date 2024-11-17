import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image"
import css from './costliving.module.css'
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import data from "@/lib/state.json"

export default function CostLiving() {
    return (
      <div className={`${css.cover} flex flex-col items-center text-center`}>
        <div className="max-w-screen-xl flex flex-col items-center my-8">
          <Image className={`h-full`} src= '/timnguyenus/images/costliving/costliving1.png' width= {300} height = {150} alt="logo"></Image>
          <h2 className="w-11/12 font-bold text-5xl mb-4">So sánh chi phí sinh hoạt, duy trì cuộc sống</h2>
          <p className="w-11/12 font-medium text-3xl">Nhập thông tin hai thành phố bạn muốn so sánh. Bạn có thể so sánh chi phí sinh hoạt ngay lập tức.</p>
        </div>
        <Card className="max-w-screen-xl w-full text-2xl my-8">
          <CardTitle className="my-4">
            <form>
              <div className=" w-full flex justify-center">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Bạn đang sống ở đâu?</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Lựa chọn thành phố" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {data.states.map((state) => (
                        <SelectItem value={state.abbreviation}>{state.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Bạn muốn chuyển đến đâu?</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Lựa chọn thành phố" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {data.states.map((state) => (
                          <SelectItem value={state.abbreviation}>{state.name}</SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardTitle>
          <CardContent>
            
          </CardContent>
        </Card>
      </div>
    )
  }