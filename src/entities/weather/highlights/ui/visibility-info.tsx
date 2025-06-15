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
    <Card className="max-w-46 h-44">
      <CardHeader>
        <CardTitle className="flex gap-4 items-center">
          <EyeIcon className="size-6 animate-pulse" /> Видимость
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white text-xl font-bold">
          {visibility / 1000} км
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default VisibilityInfo;
