"use client";
import { Button } from "@/shared/ui/button";
import { GithubIcon, Moon } from "lucide-react";
import React from "react";
import SearchCity from "@/features/search-city/ui/search-city";
import Link from "next/link";
import ThemeSwitcher from "@/features/theme-switcher/ui/theme-switcher";

const Header = () => {
  return (
    <header className="max-w-[1110px] w-full mx-auto flex items-center gap-4 px-5 py-5">
      <Button className="relative">
        <Link
          target="_blank"
          className="flex items-center gap-2 before:absolute before:inset-0 before:z-0"
          href="https://github.com/JHFYIZVER"
        >
          Github
          <GithubIcon />
        </Link>
      </Button>
      <SearchCity className="max-w-60" />
      <ThemeSwitcher/>
    </header>
  );
};

export default Header;
