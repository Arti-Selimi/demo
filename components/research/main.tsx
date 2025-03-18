import React from "react";
import ResearchCard from "./card";

type Props = {};

export default function ResearchMain({}: Props) {
  return (
    <div className="p-30 flex items-center flex-col">
      <div className="flex items-center">
        <div className="flex-1/2">
          <h1 className="text-4xl font-extrabold">
            Where should you start with
            <br /> custom software development?
          </h1>
        </div>
        <div className="flex-1/2 px-10">
          <p className="text-xl">
            Lorom ipsum dolor sit amet consectetur. A a clementum amet macconas
            t Lorem ipsum dolor sit amet consectetur. a elementum amet maeceras
            tLorem ipsum dolor sit amet consectetur. A a elementum amet maecenas
            t
          </p>
        </div>
      </div>
      <ResearchCard />
    </div>
  );
}
