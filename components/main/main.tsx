import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button";
import Slide from "./slide";
import Overlay from "./overlay";

export default function Main() {
  return (
    <div className="flex flex-col gap-15 overflow-hidden">
      <div className="flex items-center justify-between text-center custom-shadow overflowx-hidden">
      <div className="bg-main rounded-2xl w-200 h-50 shadow-main -rotate-12 relative -left-30 top-30"></div>
      <div className="w-full flex flex-col items-center justify-center gap-5 pt-20">
        <div className="flex items-center justify-center">
          {[...Array(5)].map((star, index) => {
            return (
              <FontAwesomeIcon
                key={index}
                name="star"
                className="text-[#FDB859] size-5 flex items-center justify-center px-0.5"
                icon={faStar}
              ></FontAwesomeIcon>
            );
          })}
          <p className="flex items-center justify-center self-center font-extrabold opacity-40 text-sm pl-1">
            5.0 (200+ reviews)
          </p>
        </div>
        <h1 className="text-5xl font-extrabold">
          An idea-driven company <br /> powered by
          <span className="text-violet-700"> visionaries</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-7 w-full">
          <p className="opacity-60 font-bold text-l w-[60%]">
            Lorem ipsum dolor sit amet consectetur. A a elementum amet maecenas
            tortor amet
          </p>
          <div className="flex items-center flex-auto justify-center gap-5 px-20">
            <Button
              text="Contact Us"
              background="bg-accent"
              color="text-white"
              paddingx="px-12"
              paddingy="py-3"
              className="whitespace-nowrap rounded-[10px]"
            />
            <Button
              text="Case Studies"
              background="bg-gray-basic"
              color="text-black"
              paddingx="px-12"
              paddingy="py-3"
              className="whitespace-nowrap rounded-[10px]"
            />
          </div>
          <p className="opacity-60 font-extrabold text-xs">Start by booking a free <span className="border-b-2 text-accent">consultation</span></p>
        </div>
      </div>
      <div className="bg-main rounded-2xl w-200 h-70 shadow-main rotate-3 relative -right-45 top-15"></div>
    </div>
    <Slide />
    <Overlay />
    </div>
  );
}
