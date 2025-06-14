import { Button } from "@/app/shared/ui/button";
import { GithubIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header>
      <Button className="px-4 py-2">
        Github
        <GithubIcon />
      </Button>
    </header>
  );
};

export default Header;
