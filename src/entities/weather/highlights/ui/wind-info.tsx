import Icons from "@/shared/icons/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import React from "react";

type Props = {
  wind: {
    speed: number;
    deg: number;
    gust: any;
  };
};

const WindInfo = ({ wind }: Props) => {
  let name;

  if (wind.gust < 6) name = "Low-wind";
  if (wind.gust > 5 && wind.gust < 15) name = "Medium-wind";
  if (wind.gust > 14) name = "High-wind";

  return (
    <Card className="relative max-w-none w-full lg:p-2 lg:max-w-46 xl:p-6">
      <CardHeader className="lg:p-0">
        <CardTitle className="flex text-sm gap-2 items-center flex-wrap xl:flex-nowrap">
          <div className="size-6 flex items-center justify-center">
            <Icons className="size-8 object-cover" name={name || "Wind"} />
          </div>
          <h3>Ветер</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="lg:p-0">
        <CardDescription className="items-center flex flex-col">
          <p className="text-lg size-10 w-full flex items-center justify-center relative z-10 -bottom-7 font-bold">
            {wind.speed}м/с
          </p>
          <Icons
            className={`size-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            style={{ transform: `rotate(${wind.deg}deg)` }}
            name="Compass"
          />
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default WindInfo;
