"use client";
import React, { useContext } from "react";
import { inter, plus_jakarta } from "../fonts";
import vector from "../../utils/Vector 1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProgressPage = () => {
  const router = useRouter();
  const line = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="flex flex-col align-middle w-full gap-6 justify-between h-[60vh]">
      <div className="flex flex-col gap-14">
        <h2 className="font-semibold text-center text-wrap self-center">
          See your Spiritual Growth <br /> progress by Sep 17, 2024
        </h2>
        <div className="flex flex-col h-32 min-w-[342px] mx-auto gap-8 relative">
          <div
            className={`${inter.className} absolute top-[-55px] right-2 bg-gradient-to-r from-[#ff9600] to-[#ff4d78] rounded-md text-xs py-2 px-2 text-white font-bold`}
          >
            Sep 17 <br /> 2024
          </div>
          <Image
            src={vector}
            alt="vector"
            className="absolute left-16 w-52 top-[-5px]"
          />
          {line.map((_, i) => (
            <div key={i} className="border-gray-200 border-[1px]" />
          ))}
          <div
            className={`${inter.className} absolute bottom-[-75px] left-4 text-xs border rounded-md px-2 py-1`}
          >
            Now
          </div>
        </div>
      </div>
      <button
        className="border self-center min-w-[342px] py-4 rounded-md bg-[#0062F5] hover:border-gray-300 hover:bg-white hover:text-gray-400 text-white  transition .5s mt-10"
        onClick={() => router.push("/subscription")}
      >
        <p className={plus_jakarta.className}>Continue</p>
      </button>
    </div>
  );
};

export default ProgressPage;
