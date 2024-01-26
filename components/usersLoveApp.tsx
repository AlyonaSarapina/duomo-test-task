"use client";
import { lora, plus_jakarta } from "@/app/fonts";
import React from "react";
import Image from "next/image";
import star from "../utils/star.svg";

const testimonials = [
  {
    name: "Guadalupe Hudson",
    rate: 5,
    date: "2 January 2024",
    text: "All I want to know if you are working on another agent A game or chapters. Loved this game!",
  },
  {
    name: "Bobby Winthriser",
    rate: 5,
    date: "27 December 2023",
    text: "I’ve played this over and over and I love it!",
  },
  {
    name: "Colleen Beahan",
    rate: 5,
    date: "19 January 2023",
    text: "Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn’t it would...",
  },
];

const UsersLoveApp = () => {
  return (
    <div className="flex flex-col align-middle w-full gap-6">
      <h2
        className={`${lora.className} text-center font-semibold text-black text-2xl`}
      >
        Users love App!
      </h2>
      <div
        className={`${plus_jakarta.className} border rounded-md min-w-[342px] self-center`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className="border-t border-[#DFE5EF] first:border-none px-5 py-4 flex flex-col"
            key={index}
          >
            <div className="flex justify-between">
              <h3 className="text-sm font-semibold">{testimonial.name}</h3>
              <div className="flex">
                {[...Array(testimonial.rate)].map((_, index) => (
                  <Image key={index} src={star} alt="checked" />
                ))}
              </div>
            </div>
            <div className="text-gray-300 text-xs mt-1">{testimonial.date}</div>
            <h4 className="text-sm mt-2">{testimonial.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersLoveApp;
