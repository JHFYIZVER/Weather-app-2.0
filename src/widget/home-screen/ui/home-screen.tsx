"use client";
import { memo } from "react";
import AnimatedText from "@/shared/ui/animated-text";
import SearchCity from "@/features/search-city/search-city";

const HomeScreen = memo(() => {
  return (
    <section className="flex items-center justify-center h-svh">
      <div className="flex items-center flex-col p-5 bg-white/2 lg:p-10 lg:gap-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Добро пожаловать, введите название города
          <AnimatedText />
        </h1>
        <SearchCity />
      </div>
    </section>
  );
});

export default HomeScreen;
