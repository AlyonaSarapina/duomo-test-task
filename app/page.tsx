"use client";
import React, { useContext, useEffect, useState } from "react";
import info from "./data";
import { plus_jakarta } from "./fonts";
import CircularProgression from "../components/circle";
import { useRouter } from "next/navigation";
import circleCheck from "../utils/circle_check.svg";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 100 : v + 10));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  setTimeout(() => {
    if (value === 100) {
      router.push("/form");
    }
  }, 1000);

  return (
    <div className="flex flex-col align-middle w-full gap-6">
      <h2 className="font-semibold self-center text-base">{info.title}</h2>
      <div className="flex justify-center">
        <CircularProgression value={value} sm={false} />
      </div>
      <div className="border rounded-md min-w-[342px] self-center">
        {info.steps.map((step) => (
          <div
            className="border-t border-[#DFE5EF] first:border-none px-5 py-4 flex gap-7"
            key={step.id}
          >
            <div className="w-5">
              {value < 100 && <CircularProgression value={value} sm={true} />}
              {value === 100 && (
                <span>
                  <Image src={circleCheck} alt="checked" />
                </span>
              )}
            </div>
            <h3 className={plus_jakarta.className}>{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
