'use client'
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image"
import css from './costliving.module.css'
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import data from "@/lib/state.json"
import { prefix } from "../../../../prefix";
import { useState } from "react";
import {Icons} from "@/components/icons"

export default function CostLiving() {
  const [valueFromPlace,setValueFromPlace] = useState(false)
  const [valueToPlace,setValueToPlace] = useState(false)
    return (
      <div className={`${css.cover} flex flex-col items-center text-center`}>
        <div className="max-w-screen-xl flex flex-col items-center my-8">
          <Image className={`h-full`} src= {`${prefix}/images/costliving/costliving1.png`} width= {300} height = {150} alt="logo"></Image>
          <h2 className="w-11/12 font-bold text-5xl mb-4">So sánh chi phí sinh hoạt, duy trì cuộc sống</h2>
          <p className="w-11/12 font-medium text-3xl">Nhập thông tin hai thành phố bạn muốn so sánh. Bạn có thể so sánh chi phí sinh hoạt ngay lập tức.</p>
        </div>
        <Card className="max-w-screen-xl w-full my-8">
          <CardTitle className="my-4">
            <form>
              <div className=" w-full flex justify-around">
                <div className="flex flex-col items-center space-y-1.5 w-1/2">
                  <Label htmlFor="currentPlace" className="text-xl">Bạn đang sống ở đâu?</Label>
                  <Select>
                    <SelectTrigger className="text-xl font-normal w-1/2 shadow-md" id="city">
                      <SelectValue placeholder="Lựa chọn thành phố" />
                      <Icons.cancel/>
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {data.states.map((state) => (
                        <SelectItem key={state.name} value={state.abbreviation}>{state.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col items-center space-y-1.5 w-1/2">
                  <Label htmlFor="futurePlace" className="text-xl">Bạn muốn chuyển đến đâu?</Label>
                  <Select >
                    <SelectTrigger className="text-xl font-normal w-1/2 shadow-md" id="city">
                      <SelectValue placeholder="Lựa chọn thành phố" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {data.states.map((state) => (
                          <SelectItem key={state.name} value={state.abbreviation}>{state.name}</SelectItem>
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