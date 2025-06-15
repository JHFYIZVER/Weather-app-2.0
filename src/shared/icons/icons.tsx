import Image from "next/image";
import React from "react";

const Icons = ({
  name,
  className,
  ...props
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <Image
      style={props.style}
      className={className}
      src={`/weather-icons/${name}.svg`}
      alt={name}
      width={50}
      height={50}
    />
  );
};

export default Icons;
