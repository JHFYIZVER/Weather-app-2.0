import Image from "next/image";
import React from "react";

const Icons = ({ name, className }: { name: string; className?: string }) => {
  return (
    <Image
      className={className}
      src={`/weather-icons/${name}.svg`}
      alt={name}
      width={50}
      height={50}
    />
  );
};

export default Icons;
