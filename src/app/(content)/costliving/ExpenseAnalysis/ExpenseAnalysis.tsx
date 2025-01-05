import { Icons } from '@/components/icons';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import React, { useState } from 'react'
import { ExpenseOption } from '../page';
import CostChart from '../CostChart/CostChart';

type ExpenseAnalysisProps = {
    expenses: ExpenseOption[];
    toPlace: string,
    fromPlace: string
  };

export default function ExpenseAnalysis(props: ExpenseAnalysisProps) {

    const {expenses ,toPlace, fromPlace} = props

    const [arrowCollapsible, setArrowCollapsible] = useState<number[]>([]);

  return (
    <Card className="max-w-screen-xl w-full mb-12">
    <CardTitle>
      <h1 className="mt-3 text-xl">Bảng phân tích chi phí sinh hoạt</h1>
      <span className="block my-2 font-medium">
      Các thông số này được tính trung bình trong năm 2023 được xuất bản bởi <strong>Council for Community and Economic Research (C2ER)</strong>
      </span>
    </CardTitle>
    <CardContent>
      <div className="flex justify-between font-bold my-3">
        <span>Danh mục</span>
        <div className="flex">
          <div className="flex">
            <span>Tăng </span>
            <Icons.arrow_up />
          </div>
          /
          <div className="flex">
            <span>Giảm</span>
            <Icons.arrow_down />
          </div>
        </div>
      </div>
      {expenses.length > 0 &&
        expenses.map((item, index) => (
          <Collapsible
          key={index}
            onClick={() =>
              setArrowCollapsible((prev) =>
                prev.includes(index)
                  ? prev.filter((item) => item !== index)
                  : [...prev, index]
              )
            }
            className="w-full border-t border-[#e8ece] border-solid"
          >
            <CollapsibleTrigger className="w-full">
              <div className="w-full  py-3 px-2 hover:bg-[#ebf4fa] font-medium flex justify-between">
                <span>{item.title}</span>
                <div className="flex items-center gap-1 lg:gap-10">
                  <div>
                    {" "}
                    {item.difference < 0 ? (
                      <div className="inline-flex items-center">
                        <span className="text-green-600 text-xl">
                          {Math.abs(item.difference)}%
                        </span>
                        <Icons.arrow_down
                          width="1.5rem"
                          height="1.2rem"
                        />
                      </div>
                    ) : (
                      <div className="inline-flex items-center">
                        <span className="text-red-600 text-xl">
                          {item.difference}%
                        </span>
                        <Icons.arrow_up width="1.5rem" height="1.2rem" />
                      </div>
                    )}
                  </div>
                  {arrowCollapsible.includes(index) ? (
                    <Icons.arrow1 className="h-4 w-4 opacity-50 rotate-180" />
                  ) : (
                    <Icons.arrow1 className="h-4 w-4 opacity-50 " />
                  )}
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-[#f5f7f8]">
                  <CostChart
                  fromPlace={fromPlace}
                  toPlace={toPlace}
                  chartData={item.chartData}
                  index={index}/>
            </CollapsibleContent>
          </Collapsible>
        ))}
    </CardContent>
  </Card>
  )
}
