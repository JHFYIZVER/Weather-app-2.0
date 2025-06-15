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

const SunsetInfo = ({
  sunset,
  timezone,
}: {
  sunset: number;
  timezone: number;
}) => {
  const sunsetTime = formatTime(sunset, timezone);

  return (
    <Card className="flex max-w-2xl w-full h-44 flex-row-reverse justify-between">
      <CardHeader className="w-1/5 items-center justify-center mr-5">
        <CardTitle className="text-white/70 flex gap-4 items-center text-lg lg:text-xl">
          Закат
        </CardTitle>
        <CardDescription className="text-white text-2xl font-bold">
          {sunsetTime}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-1/2 max-h-35 flex items-center justify-center">
        <Icons className="size-40 object-cover animate-pulse" name="Sunset" />
      </CardContent>
    </Card>
  );
};

export default SunsetInfo;
