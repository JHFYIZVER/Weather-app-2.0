import Icons from "@/shared/icons/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import React from "react";

const PressureInfo = ({ pressure }: { pressure: number }) => {
  const pressureName =
    pressure * 0.75006 < 765 ? "Low-pressure" : "High-pressure";
  return (
    <Card className="h-44 max-w-none w-full lg:p-2 lg:max-w-46 xl:p-6">
      <CardHeader className="lg:p-0">
        <CardTitle className="flex text-sm gap-2 items-center flex-wrap xl:flex-nowrap">
          <div className="size-6 flex items-center justify-center">
            <Icons className="size-8 object-cover" name="Barometer" />
          </div>
          Давление
        </CardTitle>
      </CardHeader>
      <CardContent className="lg:p-0">
        <CardDescription className=" text-xl font-bold flex  items-center">
          <div className="flex items-center flex-wrap">
            {Math.round(pressure * 0.75006)}{" "}
            <span className="ml-1 text-[10px]">мм рт. ст.</span>
          </div>
          <Icons className="size-10" name={pressureName} />
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PressureInfo;
