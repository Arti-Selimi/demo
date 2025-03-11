import React from "react";
import Image from "next/image";

type Props = { image: string; className?: string };

export default function Slide({ image, className }: Props) {
  return (
    <div>
      <Image
        src={image}
        alt="background"
        layout="fill"
        objectFit="cover"
        className={`h-full w-full rounded-2xl ${className}`}
      />
    </div>
  );
}
