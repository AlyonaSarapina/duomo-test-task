import { lora, plus_jakarta } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import check from "../utils/check.svg";

const what_you_get_info = [
  {
    id: 1,
    title: "️You wake up feeling motivated and energized",
  },
  {
    id: 2,
    title: "You start your day in harmony with prayer",
  },
  {
    id: 3,
    title: "Your relationships are stronger than ever",
  },
  {
    id: 4,
    title: "You’re commited to spiritual growth and self-improvement",
  },
  {
    id: 5,
    title: "You grow closer to God through everyday Bible reading",
  },
];

const WhatYouGet = () => {
  return (
    <div className="flex flex-col align-middle w-full gap-6">
      <h2
        className={`${lora.className} text-center font-semibold text-black text-2xl`}
      >
        What you get
      </h2>
      <div className="border rounded-md min-w-[342px] self-center">
        {what_you_get_info.map((step) => (
          <div
            className="border-t border-[#DFE5EF] first:border-none px-5 py-4 flex gap-7"
            key={step.id}
          >
            <div className="w-5">
              <span>
                <Image src={check} alt="checked" />
              </span>
            </div>
            <h3 className={plus_jakarta.className}>{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;
