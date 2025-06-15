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
    <Card className="max-w-46 h-44">
      <CardHeader>
        <CardTitle className="flex gap-4 items-center">
          <div className="size-6 flex items-center justify-center">
            <Icons className="size-8 object-cover" name="Barometer" />
          </div>
          Давление
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white text-xl font-bold flex items-center">
          {Math.round(pressure * 0.75006)}{" "}
          <span className="ml-1 text-xs">мм рт. ст.</span>
          <Icons className="size-10" name={pressureName} />
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PressureInfo;
