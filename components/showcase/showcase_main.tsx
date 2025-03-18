import React from "react";
import Card from "./card";
import {
  faEnvelope,
  faGear,
  faHeadset,
  faMessage,
  faRobot,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SlidesMain from "../slideshow/SlidesMain";

export default function ShowcaseMain() {
  return (
    <div className="flex flex-col items-center justify-start p-15 gap-10 bg-main rounded-t-[4rem] shadow-[0_-50px_40px_5px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center justify-start gap-5">
        <div className="flex flex-row items-center">
          <div className="h-6 w-6 rounded-full bg-[#D8DAD3] mr-2"></div>
          <h1 className="text-black font-extrabold text-l">Delyxa</h1>
        </div>
        <h1 className="text-4xl font-extrabold text-center">
          From beginning to end,
          <br /> we handle it all
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 w-[80%]">
        <Card
          title="Frontend Solutions"
          icon={faGear}
          text="Lorem iosum dolor sit amet consectetur.
          A a elementum amet maecenas t"
        />
        <Card
          title="Backend Solutions"
          icon={faWrench}
          text="Lorem iosum dolor sit amet consectetur.
          A a elementum amet maecenas t"
        />
        <div className="w-[75%] self-center h-full ml-10 inset-shadow-[0_0_400px_100px_rgb(123,_77,_250,_0.9)] p-5 flex flex-col items-start justify-between row-span-2 rounded-2xl">
          <div className="h-full flex flex-col items-start justify-between text-white">
            <FontAwesomeIcon icon={faMessage} className="size-5" />
            <h1 className="py-2 text-3xl font-extrabold">Don't be shy, let's chat!</h1>
            <p className="pb-2 opacity-70 font-extrabold text-xs">
              Lorem ipsum dolor sit amet consectetur. A a elementum amet
              maccenas t
            </p>
            <Button
              text="Book a call"
              color="text-black"
              background="bg-main"
              paddingx="px-7"
              paddingy="py-2"
              className="w-full rounded-xl"
            />
          </div>
          <div className="w-full flex items-center justify-between text-white py-2 mt-5 border-t-[0.25px] border-main">
            <FontAwesomeIcon icon={faEnvelope} className="size-6" />
            <div>
              <h4 className="text-xs">Prefer to email?</h4>
              <p className="text-xs opacity-70">delyxa@company.com</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 text-accent rounded-full bg-main p-4 size-3" />
          </div>
        </div>
        <Card
          title="Automation Solutions"
          icon={faRobot}
          text="Lorem iosum dolor sit amet consectetur.
          A a elementum amet maecenas t"
        />
        <Card
          title="Support Solutions"
          icon={faHeadset}
          text="Lorem iosum dolor sit amet consectetur.
          A a elementum amet maecenas t"
        />
      </div>
    </div>
  );
}
