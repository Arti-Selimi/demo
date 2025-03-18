import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = { image: StaticImageData; className?: string };

export default function Slide({ image, className }: Props) {
  return (
    <div className={`relative w-full h-80 overflow-hidden rounded-[5px] ${className}`}>
      <Image 
        src={image} 
        alt="slide" 
        objectFit="cover" 
        className="w-full h-full"
      />
    </div>
  );
}
