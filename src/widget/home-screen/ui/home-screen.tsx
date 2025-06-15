"use client";
import { memo } from "react";
import SearchCity from "@/features/search-city/search-city";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const HomeScreen = memo(() => {
  return (
    <section className="flex px-5 items-center justify-center h-svh">
      <Card className="flex max-w-4xl w-full items-center flex-col p-5 bg-white/2 lg:p-10 lg:gap-10">
        <CardHeader className="w-full">
          <CardTitle className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Добро пожаловать, введите название города
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <SearchCity />
        </CardContent>
      </Card>
    </section>
  );
});

export default HomeScreen;
