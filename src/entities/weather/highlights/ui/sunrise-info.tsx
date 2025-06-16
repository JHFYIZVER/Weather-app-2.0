"use client";

import Icons from "@/shared/icons/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import React from "react";
import formatTime from "../lib/format-time";

const SunriseInfo = ({ sunrise, timezone }: { sunrise: number, timezone: number }) => {
   const sunriseTime = formatTime(sunrise, timezone);
  return (
    <Card className="flex max-w-lg h-44 flex-row-reverse justify-between">
      <CardHeader className="w-1/5 items-center justify-center mr-5">
        <CardTitle className="text-white/70 flex gap-4 items-center text-lg lg:text-xl">
          Рассвет
        </CardTitle>
        <CardDescription className="text-white text-2xl font-bold">
          {sunriseTime}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-1/2 max-h-35 flex items-center justify-center">
        <Icons className="size-40 object-cover animate-pulse" name="Sunrise" />
      </CardContent>
    </Card>
  );
};

export default SunriseInfo;
