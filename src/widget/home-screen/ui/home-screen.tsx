"use client";
import { memo } from "react";
import SearchCity from "@/features/search-city/ui/search-city";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import ThemeSwitcher from "@/features/theme-switcher/ui/theme-switcher";

const HomeScreen = memo(() => {
  return (
    <main className="w-full">
      <section className="max-w-[1110px] w-full mx-auto flex px-5 items-center justify-center h-svh">
        <Card className="flex max-w-4xl w-full items-center flex-col p-5 bg-white/2 lg:p-10 lg:gap-10">
          <CardHeader className="w-full">
            <CardTitle className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
              Добро пожаловать, введите название города <ThemeSwitcher />
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <SearchCity />
          </CardContent>
        </Card>
      </section>
    </main>
  );
});

export default HomeScreen;
