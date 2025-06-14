"use client";
import { Input } from "@/app/shared/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const HomeScreen = () => {
  return (
    <section className="flex items-center justify-center h-svh">
      <div className="flex items-center flex-col p-5 bg-white/2 lg:p-10 lg:gap-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Добро пожаловать, введите название города
        </h1>
        <label className="relative max-w-xl w-full">
          <Input placeholder="Название города" />
          <SearchIcon className="absolute right-5 top-1/2 -translate-y-1/2" />
        </label>
      </div>
    </section>
  );
};

export default HomeScreen;
