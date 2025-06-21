"use client";

import * as React from "react";
import MoonIcon from "./moon-icon";
import SunIcon from "./sun-icon";
import { useTheme } from "next-themes";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Toggle theme mode"
          className="relative"
          variant={"outline"}
          size={"icon"}
        >
          <SunIcon className="size-5 transform-gpu transform rotate-0 scale-100 transition-all will-change-transform duration-300 dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-5 transform-gpu transform rotate-90 scale-0 transition-all will-change-transform duration-300 dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon />
          <span>Светлая</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon />
          <span>Темная</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
