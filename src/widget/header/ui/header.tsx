"use client";
import { Button } from "@/shared/ui/button";
import { GithubIcon } from "lucide-react";
import React from "react";
import SearchCity from "@/features/search-city/search-city";
import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-7xl w-full mx-auto flex items-center gap-4 px-3 py-5 mb-5">
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
    </header>
  );
};

export default Header;
