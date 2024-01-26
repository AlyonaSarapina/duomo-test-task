import { lora, plus_jakarta } from "@/app/fonts";
import React from "react";

const data = [
  {
    percentage: "71%",
    text: "of users were able to feel the power of prayer after just 6 weeks",
  },
  {
    percentage: "65%",
    text: "of users started to have a meaningful daily routine and peaceful mind",
  },
  {
    percentage: "47%",
    text: "of users struggled with finding time for daily praying",
  },
];

export const WhatYouAchieved = () => {
  return (
    <div className="flex flex-col align-middle w-full gap-6">
      <h2
        className={`${lora.className} text-center font-semibold text-black text-2xl`}
      >
        People just like you achieved great results with App!
      </h2>
      <div className="border rounded-md min-w-[342px] self-center">
        {data.map((step, index) => (
          <div
            className="border-t border-[#DFE5EF] first:border-none px-5 py-4 flex gap-7"
            key={index}
          >
            <div className="flex align-middle justify-center">
              <p className="text-3xl font-semibold">{step.percentage}</p>
            </div>
            <h3 className={`${plus_jakarta.className} font-semibold text-sm`}>
              {step.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouAchieved;
