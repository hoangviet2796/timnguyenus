'use client'
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image"
import css from './costliving.module.css'
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import data from "@/lib/state.json"
import PCIdata from "@/app/(content)/costliving/comparedata.json"
import { prefix } from "../../../../prefix";
import { useEffect, useState } from "react";
import {Icons} from "@/components/icons"

export default function CostLiving() {
  const [valueFromPlace,setValueFromPlace] = useState("")
  const [valueToPlace,setValueToPlace] = useState("")
  const [isFullInfo,setIsFullInfo] = useState(false)
  const [fromData,setFromData] = useState({})
  const [toData,setToData] = useState({})

  useEffect(() => {
    if(valueFromPlace != "" && valueToPlace != "") {
      setIsFullInfo(true)
    }
    else
      setIsFullInfo(false)
    
  },[valueFromPlace,valueToPlace])
  
  useEffect(() => {
    let fromPlace = {}, toPlace = {}
    if(isFullInfo)
    {
      const fetchData = async () => {
        fromPlace = PCIdata.stateData.find((place) => place.State == valueFromPlace)!
        toPlace = PCIdata.stateData.find((place) => place.State == valueToPlace)!
      }
      
      fetchData()
      .catch(console.error)

      setFromData(fromPlace)
      setToData(toPlace)
    }
    
  },[isFullInfo])

  const clearValue = (from: boolean) => {
    from?setValueFromPlace(""):setValueToPlace("");
  }
    return (
      <div className={`${css.cover} flex flex-col items-center text-center`}>
        <div className="max-w-screen-xl flex flex-col items-center my-20">
          <Image className={`h-full`} src= {`${prefix}/images/costliving/costliving1.png`} width= {300} height = {150} alt="logo"></Image>
          <h2 className="w-11/12 font-bold text-5xl mb-4">So sánh chi phí sinh hoạt, duy trì cuộc sống</h2>
          <p className="w-11/12 font-medium text-3xl">Nhập thông tin hai thành phố bạn muốn so sánh. Bạn có thể so sánh chi phí sinh hoạt ngay lập tức.</p>
        </div>
        <Card className="max-w-screen-xl w-full mb-12">
          <CardTitle className="my-4">
            <form>
              <div className=" w-full flex justify-around">
                <div className="flex flex-col items-center space-y-1.5 w-1/2">
                  <Label htmlFor="currentPlace" className="text-xl">Bạn đang sống ở đâu?</Label>
                  <Select onValueChange={(value) => setValueFromPlace(value)} value={valueFromPlace}>
                    <div className=" w-1/2 relative">
                      <SelectTrigger className="text-xl font-normal w-full shadow-md" id="city">
                        <SelectValue placeholder="Lựa chọn thành phố" />
                      </SelectTrigger>
                      {valueFromPlace?<Icons.cancel className="absolute top-1/2 -mt-3 right-7 cursor-pointer" onClick={() => clearValue(true)}/>:null}
                      <SelectContent position="popper">
                        {data.states.map((state) => (
                          <SelectItem key={state.name} value={state.name}>{state.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </div>
                  </Select>
                </div>
                <div className="flex flex-col items-center space-y-1.5 w-1/2">
                  <Label htmlFor="futurePlace" className="text-xl">Bạn muốn chuyển đến đâu?</Label>
                  <Select onValueChange={(value) => setValueToPlace(value)} value={valueToPlace}>
                  <div className=" w-1/2 relative">
                      <SelectTrigger className="text-xl font-normal w-full shadow-md" id="city">
                        <SelectValue placeholder="Lựa chọn thành phố" />
                      </SelectTrigger>
                      {valueToPlace?<Icons.cancel className="absolute top-1/2 -mt-3 right-7 cursor-pointer" onClick={() => clearValue(false)}/>:null}
                      <SelectContent position="popper">
                        {data.states.map((state) => (
                          <SelectItem key={state.name} value={state.name}>{state.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </div>
                  </Select>
                </div>
              </div>
            </form>
          </CardTitle>
          <CardContent>
            {isFullInfo?<p>{JSON.stringify(fromData)}</p>:null}
          </CardContent>
        </Card>
      </div>
    )
  }