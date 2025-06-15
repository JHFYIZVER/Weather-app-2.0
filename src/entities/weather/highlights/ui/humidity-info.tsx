import Icons from "@/shared/icons/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import React from "react";

const HumidityInfo = ({ humidity }: { humidity: number }) => {
  return (
    <Card className="max-w-46 h-44">
      <CardHeader>
        <CardTitle className="flex gap-4 items-center">
          <div className="size-6 flex items-center justify-center">
            <Icons
              className="size-12 object-cover animate-pulse"
              name="Humidity"
            />
          </div>
          Влажность
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white text-xl font-bold">
          {humidity}%
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default HumidityInfo;
