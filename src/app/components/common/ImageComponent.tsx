import Image from "next/image";
import React from "react";

interface ImageComponentProps {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
  }

const ImageComponent: React.FC<ImageComponentProps> = ({src,width,height,alt,className}) => {
  return (
    <div>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </div>
  );
};

export default ImageComponent;
