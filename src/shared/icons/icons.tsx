import Image from "next/image";
import { CSSProperties } from "react";

const Icons = ({
  name,
  className,
  ...props
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <Image
      quality={60}
      rel="preload"
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
