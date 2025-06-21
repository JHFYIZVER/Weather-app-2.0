"use client";
import { GithubIcon } from "lucide-react";
import React from "react";
import SearchCity from "@/features/search-city/ui/search-city";
import Link from "next/link";
import ThemeSwitcher from "@/features/theme-switcher/ui/theme-switcher";

const Header = () => {
  return (
    <header className="max-w-[1110px] w-full mx-auto flex items-center gap-4 px-5 py-5">
      <Link
        target="_blank"
        className="gap-2 before:absolute before:inset-0 before:z-0 relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary-foreground border text-primary hover:bg-primary-foreground/30 h-9 px-4 py-2 has-[>svg]:px-3"
        href="https://github.com/JHFYIZVER"
      >
        Github
        <GithubIcon />
      </Link>

      <SearchCity className="max-w-60" />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
