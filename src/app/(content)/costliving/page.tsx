"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import css from "./costliving.module.css";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import data from "@/lib/state.json";
import PCIdata from "@/app/(content)/costliving/comparedata.json";
import { prefix } from "../../../../prefix";
import { useCallback, useEffect, useState } from "react";
import { Icons } from "@/components/icons";
import ExpenseAnalysis from "./ExpenseAnalysis/ExpenseAnalysis";

type NestedObject = {
  [key: string]: number | NestedObject;
};

export type ChartDataItem = {
  key: string;
  [key: string]: number | string;
};

export type ExpenseOption = {
  title: string;
  chartData: ChartDataItem[];
  difference: number;
};

export default function CostLiving() {
  const [valueFromPlace, setValueFromPlace] = useState<string>("");

  const [valueToPlace, setValueToPlace] = useState<string>("");

  const [isFullInfo, setIsFullInfo] = useState<boolean>(false);

  // const [fromData, setFromData] = useState(null);
  // const [toData, setToData] = useState(null);

  const [difference, setDifference] = useState<number>(0);

  const [expenses, setExpenses] = useState<ExpenseOption[]>([]);

  useEffect(() => {
    if (valueFromPlace != "" && valueToPlace != "") {
      setIsFullInfo(true);
    } else setIsFullInfo(false);
  }, [valueFromPlace, valueToPlace]);

  useEffect(() => {
    fetchDataAndCalculate().catch(console.error);
  }, [isFullInfo, valueFromPlace, valueToPlace]);

  const fetchDataAndCalculate = async () => {
    if (isFullInfo) {
      const fromPlace = PCIdata.stateData.find(
        (place) => place.State === valueFromPlace
      );
      const toPlace = PCIdata.stateData.find(
        (place) => place.State === valueToPlace
      );

      // setFromData(fromPlace || null);
      // setToData(toPlace || null);

      if (fromPlace && toPlace) {
        const _fromPlace = fromPlace["Chi tiêu tiêu dùng cá nhân"] || {};
        const _toPlace = toPlace["Chi tiêu tiêu dùng cá nhân"] || {};

        const fixedAssetFrom =
          _fromPlace?.["Tài sản"]?.["Tài sản cố định"] || {};
        const fixedAssetTo = _toPlace?.["Tài sản"]?.["Tài sản cố định"] || {};

        const assetFrom =
          _fromPlace?.["Tài sản"]?.["Tài sản không cố định"] || {};
        const assetTo = _toPlace?.["Tài sản"]?.["Tài sản không cố định"] || {};

        const serviceFrom = _fromPlace?.["Dịch vụ"] || {};
        const serviceTo = _toPlace?.["Dịch vụ"] || {};

        //total all expensive
        const totalPercentageChange = calculateDifference(_fromPlace, _toPlace);
        //total expensive fixed asset
        const fixedAssetPercentageChange = calculateDifference(
          fixedAssetFrom,
          fixedAssetTo
        );
        //total expensive asset
        const assetPercentageChange = calculateDifference(assetFrom, assetTo);
        //total expensive service
        const servicePercentChange = calculateDifference(
          serviceFrom,
          serviceTo
        );

        //format data chart
        const expenseOptions = generateExpenseOptions(fromPlace, toPlace, {
          fixedAssetPercentageChange,
          assetPercentageChange,
          servicePercentChange,
        });

        setExpenses(expenseOptions);
        setDifference(totalPercentageChange);
      }
    }
  };
  const clearValue = (from: boolean) => {
    from ? setValueFromPlace("") : setValueToPlace("");
  };

  //fn format data chart
  const generateExpenseOptions = (
    fromPlace: Record<string, any>,
    toPlace: Record<string, any>,
    percentageChanges: Record<string, number>
  ) => {
    const categories = [
      {
        title: "Tài sản cố định",
        path: ["Chi tiêu tiêu dùng cá nhân", "Tài sản", "Tài sản cố định"],
        keys: [
          "Chi phí xe cộ và phụ tùng",
          "Đồ nội thất và thiết bị gia dụng",
          "Chi phí mua mới thiết bị, phương tiện",
          "Chi phí cố định khác",
        ],
        differenceKey: "fixedAssetPercentageChange",
      },
      {
        title: "Tài sản không cố định",
        path: [
          "Chi tiêu tiêu dùng cá nhân",
          "Tài sản",
          "Tài sản không cố định",
        ],
        keys: [
          "Chi phí đồ ăn, thức uống",
          "Chi phí quần áo",
          "Chi phí xăng, điện và các nguồn năng lượng khác",
          "Chi phí không cố định khác",
        ],
        differenceKey: "assetPercentageChange",
      },
      {
        title: "Dịch vụ",
        path: ["Chi tiêu tiêu dùng cá nhân", "Dịch vụ"],
        keys: [
          "Chi phí nhà ở và tiện ích",
          "Phí chăm sóc sức khỏe",
          "Phí phương tiện đi lại",
          "Phí dịch vụ giải trí",
          "Phí dịch vụ ăn uống và lưu trú",
          "Phí dịch vụ tài chính và bảo hiểm",
          "Các dịch vụ khác",
        ],
        differenceKey: "servicePercentChange",
      },
    ];
    return categories.map((category) => ({
      title: category.title,
      chartData: category.keys.map((key) => ({
        key,
        [valueFromPlace]: category.path.reduce(
          (acc, cur) => acc[cur],
          fromPlace
        )[key],
        [valueToPlace]: category.path.reduce((acc, cur) => acc[cur], toPlace)[
          key
        ],
      })),
      difference: percentageChanges[category.differenceKey],
    }));
  };

  //Tính tổng chi phí
  function sumValues(obj: NestedObject): number {
    let total = 0;
    for (const key in obj) {
      if (typeof obj[key] === "number") {
        total += obj[key];
      } else if (typeof obj[key] === "object") {
        total += sumValues(obj[key]);
      }
    }
    return total;
  }
  //Tính % chênh lệch
  function calculateDifference(
    fromPlace: NestedObject,
    toPlace: NestedObject
  ): number {
    const totalFrom = sumValues(fromPlace);
    const totalTo = sumValues(toPlace);
    if (totalFrom === 0) return 0;
    const total = ((totalTo - totalFrom) / totalFrom) * 100;
    return Number(total.toFixed(1));
  }

  return (
    <div className={`${css.cover} flex flex-col items-center text-center`}>
      <div className="max-w-screen-xl flex flex-col items-center my-20">
        <Image
          className={`h-full`}
          src={`${prefix}/images/costliving/costliving1.png`}
          width={300}
          height={150}
          alt="logo"
        ></Image>
        <h2 className="w-11/12 font-bold text-5xl mb-4">
          So sánh chi phí sinh hoạt, duy trì cuộc sống
        </h2>
        <p className="w-11/12 font-medium text-3xl">
          Nhập thông tin hai thành phố bạn muốn so sánh. Bạn có thể so sánh chi
          phí sinh hoạt ngay lập tức.
        </p>
      </div>
      <Card className="max-w-screen-xl w-full mb-12">
        <CardTitle className="my-4">
          <form>
            <div className=" w-full flex justify-around">
              <div className="flex flex-col items-center space-y-1.5 w-1/2">
                <Label htmlFor="currentPlace" className="text-xl">
                  Bạn đang sống ở đâu?
                </Label>
                <Select
                  onValueChange={(value) => setValueFromPlace(value)}
                  value={valueFromPlace}
                >
                  <div className=" w-1/2 relative">
                    <SelectTrigger
                      className="text-xl font-normal w-full shadow-md"
                      id="city"
                    >
                      <SelectValue placeholder="Lựa chọn thành phố" />
                    </SelectTrigger>
                    {valueFromPlace ? (
                      <Icons.cancel
                        className="absolute top-1/2 -mt-3 right-7 cursor-pointer"
                        onClick={() => clearValue(true)}
                      />
                    ) : null}
                    <SelectContent position="popper">
                      {data.states.map((state) => (
                        <SelectItem key={state.name} value={state.name}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </div>
                </Select>
              </div>
              <div className="flex flex-col items-center space-y-1.5 w-1/2">
                <Label htmlFor="futurePlace" className="text-xl">
                  Bạn muốn chuyển đến đâu?
                </Label>
                <Select
                  onValueChange={(value) => setValueToPlace(value)}
                  value={valueToPlace}
                >
                  <div className=" w-1/2 relative">
                    <SelectTrigger
                      className="text-xl font-normal w-full shadow-md"
                      id="city"
                    >
                      <SelectValue placeholder="Lựa chọn thành phố" />
                    </SelectTrigger>
                    {valueToPlace ? (
                      <Icons.cancel
                        className="absolute top-1/2 -mt-3 right-7 cursor-pointer"
                        onClick={() => clearValue(false)}
                      />
                    ) : null}
                    <SelectContent position="popper">
                      {data.states.map((state) => (
                        <SelectItem key={state.name} value={state.name}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </div>
                </Select>
              </div>
            </div>
          </form>
        </CardTitle>
        <CardContent>
          {isFullInfo ? (
            <p className="px-0 lg:px-16 ">
              Chi phí sinh hoạt duy trì cuộc sống sinh hoạt của bạn từ
              <span className="font-bold"> {valueFromPlace}</span> sang
              <span className="font-bold"> {valueToPlace}</span> sẽ{" "}
              {difference < 0 ? (
                <div className="inline-flex items-center">
                  <span className="text-green-600 font-bold text-xl">
                    {" "}
                    giảm {Math.abs(difference)}%
                  </span>
                  <Icons.arrow_down />
                </div>
              ) : (
                <div className="inline-flex items-center">
                  <span className="text-red-600 font-bold text-xl">
                    {" "}
                    tăng {difference}%
                  </span>
                  <Icons.arrow_up />
                </div>
              )}
            </p>
          ) : null}
          {/* {isFullInfo?<p>{JSON.stringify(fromData)}</p>:null} */}
        </CardContent>
      </Card>
      {isFullInfo && (
        <ExpenseAnalysis
          expenses={expenses}
          toPlace={valueToPlace}
          fromPlace={valueFromPlace}
        />
      )}
    </div>
  );
}
/**
  * Note 1: sự chênh lệch khác nhau
Nguyên nhân khi đảo bang từ cột A sang cột B và B sang A
tỉ lệ chênh lệch khác nhau do

TH1 : Tỷ lệ dươi 100% gọi chi phí chênh lệch là C , lấy C / A x 100 nhận được kết quả dưới 100% là do A nhỏ hơn B
TH2 : Tỷ lệ trên 100% gọi chi phí chênh lệch là C , lấy C / A x 100 nhận được kết quả trên 100% là do A lớn hơn B
===> khác nhau phụ thuộc vào A

  *Note 2
 theo e nghĩ Header và Footer chỉ render 1 lần ở 1 layout duy nhất, và chỉ thay đổi nội dung vào children tức là những trang khác không phải tải lại header và footer

  */
