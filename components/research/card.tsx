import React from "react";

type Props = {};

export default function ResearchCard({}: Props) {
  return (
    <div className="flex py-10 gap-10">
      {[...Array(4)].map((_, index) => {
        return (
          <div
            key={index}
            className="p-10 flex flex-col gap-2 border-2 border-[#F7F9F6] rounded-2xl bg-[#F9FDFA]"
            style={index === 0 ? {} : { marginTop: `${index * 3}rem` }}
          >
            <h1 className="text-3xl text-accent font-extrabold">{`0${
              index + 1
            }`}</h1>
            <p className="text-[15px]">
              <span className="font-extrabold">Research. </span>
              Lorom ipsum dolor sit amet consectetur. A a clementum amet
              macconas t Lorem ipsum dolor sit amet consectetur. A a
            </p>
          </div>
        );
      })}
    </div>
  );
}
