import Icons from "@/shared/icons/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { TemperatureRange } from "@/shared/ui/slider";
import { CalendarDaysIcon } from "lucide-react";
import React from "react";

type Props = {
  forecastWeather: {
    forecast: {
      date: string;
      description: string;
      tempMin: number;
      tempMax: number;
    }[];
  };
};

const Forecast = ({ forecastWeather }: Props) => {
  return (
    <Card className="flex flex-col max-w-lg w-full p-5 rounded-xl">
      <CardHeader>
        <CardTitle className="font-bold flex items-center gap-2 text-white/70">
          <CalendarDaysIcon className="size-5" /> Прогноз на 5 дней
        </CardTitle>
      </CardHeader>
      <CardContent>
        {forecastWeather.forecast.map((item, index) => (
          <div key={item.date}>
            <div className="flex items-center justify-between gap-4">
              <p className="text-white font-bold">
                {item.date.split("-").reverse().slice(0, 2).join(".")}
              </p>
              <Icons className="size-10" name={item.description} />
              <div className="flex w-full max-w-42 select-none flex-row items-center justify-between gap-2 pr-2 text-sm">
                <p>{item.tempMin}&deg;</p>
                <TemperatureRange
                  min={item.tempMin}
                  max={item.tempMax}
                  value={[item.tempMin, item.tempMax]}
                />
                <p>{item.tempMax}&deg;</p>
              </div>
            </div>
            {index !== forecastWeather.forecast.length - 1 && (
              <Separator className="mt-1" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Forecast;
