import Image from "next/image";
import React from "react";
import { Meteors } from "./meteors";

const ServicesCard = ({
  img,
  title,
  description,
  id,
}: {
  img: string;
  title: string;
  description: string;
  id: number;
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden">
      <div className="relative shadow-inner shadow-tertiary/20 bg-neutral-500/20 rounded-lg p-4 flex flex-col justify-center gap-3 text-white border border-gray-800">
        <div className="flex justify-between items-center">
          <Image src={img} alt="" height={35} width={35} className="" />
          <h1 className="text-base font-bold text-tertiary">{title}</h1>
        </div>

        <p className="text-pretty text-sm text-text_color italic">{description}</p>
        <p className="self-end text-3xl font-bold text-tertiary/30">{id}</p>

        <Meteors number={10} />
      </div>
    </div>
  );
};

export default ServicesCard;
