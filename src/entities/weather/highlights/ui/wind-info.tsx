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
    <Card className="max-w-46 relative">
      <CardHeader className="relative -top-3">
        <CardTitle className="flex gap-4 items-center">
          <div className="size-6 flex items-center justify-center">
            <Icons className="size-8 object-cover" name={name!} />
          </div>
          Ветер
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="items-center flex flex-col">
          <p className="text-xl size-10 w-full flex items-center justify-center relative z-10 -bottom-6 text-white font-bold">
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
