import Image from "next/image";

export interface IconProps {
  size?: number;
  width?: number;
  height?: number;
  name: string;
  id?: string;
  className?: string;
  fluid?: boolean;
  containerClassName?: string;
}

function Icon({
  size = 24,
  width: widthFromProps,
  height: heightFromProps,
  name,
  className,
  fluid = false,
  containerClassName,
  ...imageProps
}: IconProps) {
  const width = widthFromProps || size;
  const height = heightFromProps || size;

  const containerStyle = fluid ? undefined : { width, height };

  return (
    <div
      className={`relative ${containerClassName ?? ""}`}
      style={containerStyle}
    >
      <Image
        fill
        alt={name}
        src={`/icons/${name}.svg`}
        {...imageProps}
        className={`${className ?? ""}`}
      />
    </div>
  );
}

export default Icon;
