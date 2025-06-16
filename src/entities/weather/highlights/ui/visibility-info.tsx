import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { EyeIcon } from "lucide-react";
import React from "react";

const VisibilityInfo = ({ visibility }: { visibility: number }) => {
  return (
    <Card className="h-44 max-w-none w-full lg:p-2 lg:max-w-46 xl:p-6">
      <CardHeader className="lg:p-0">
        <CardTitle className="flex text-sm gap-2 items-center flex-wrap xl:flex-nowrap">
          <EyeIcon className="size-6 animate-pulse" /> Видимость
        </CardTitle>
      </CardHeader>
      <CardContent className="lg:p-0">
        <CardDescription className="text-xl font-bold">
          {visibility / 1000} км
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default VisibilityInfo;
