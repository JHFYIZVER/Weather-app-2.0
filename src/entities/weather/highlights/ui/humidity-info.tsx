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
    <Card className="h-44 max-w-none w-full lg:p-2 lg:max-w-46 xl:p-6">
      <CardHeader className="lg:p-0">
        <CardTitle className="flex gap-2 text-sm items-center flex-wrap xl:flex-nowrap">
          <div className="size-6 flex items-center justify-center">
            <Icons
              className="size-12 object-cover animate-pulse"
              name="Humidity"
            />
          </div>
          <h3>Влажность</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="lg:p-0">
        <CardDescription className="text-xl font-bold">
          {humidity}%
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default HumidityInfo;
