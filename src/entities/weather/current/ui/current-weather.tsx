import Icons from "@/shared/icons/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import React from "react";

type Props = {
  currentWeather: {
    cityName: string;
    currentTemperature: number;
    feelsLikeTemperature: number;
    date: string;
    icon: string;
    description: string;
    day: string;
  };
};

const CurrentWeather = ({ currentWeather }: Props) => {
  return (
    <Card className="max-w-lg w-full relative">
      <CardHeader>
        <CardTitle className="font-bold text-xl md:text-3xl lg:text-4xl">
          <span className="text-lg flex capitalize">{currentWeather.day}</span>
          <h1>{currentWeather.cityName}</h1>
        </CardTitle>
        <p className="text-sm font-medium">{currentWeather.date}</p>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-10 font-medium">
        <div className="w-1/2 flex items-center justify-start lg:justify-center">
          <Icons className="size-30 lg:size-40" name={currentWeather.icon} />
        </div>
        <div className="absolute max-w-32 top-1/2 -translate-y-1/3 right-2 lg:max-w-none lg:right-5">
          <p className="text-4xl font-bold lg:text-7xl mb-10">
            {currentWeather.currentTemperature}&deg;
          </p>
          <p className="text-lg first-letter:capitalize">
            {currentWeather.description}
          </p>
          <p>
            Ощущается как{" "}
            <span className="font-bold">
              {currentWeather.feelsLikeTemperature}&deg;
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
