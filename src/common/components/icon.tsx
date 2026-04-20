import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  size?: number;
  className?: string;
}

function Icon({ name, size = 24, className = "" }: Props) {
  return (
    <div className={`inline-flex ${className}`}>
      <Image
        src={`/icons/${name}.svg`}
        alt={name}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
}

export default Icon;
