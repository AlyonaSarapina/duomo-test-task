"use client";

import { lora, plus_jakarta } from "@/app/fonts";
import { MonthPlanData } from "@/app/month_plan_data";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

const PlanOptions = () => {
  const [value, setValue] = useState<string>("0");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(String(event.target.value));
  };

  return (
    <div className="flex flex-col align-middle gap-6 justify-between">
      <FormControl className="flex flex-col min-w-[342px] mx-auto">
        <div
          className={`${lora.className} text-center font-semibold text-black text-2xl`}
        >
          Choose your plan
        </div>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          className="flex flex-col gap-4 mt-4"
        >
          {MonthPlanData.map((plan) => (
            <div key={plan.id} className={`${plus_jakarta.className} relative`}>
              {plan.isMostPopular && (
                <div
                  className={classNames(
                    "text-center  absolute top-[-5px] right-0 left-0 rounded-t-md text-white font-bold uppercase text-sm",
                    {
                      "bg-[#0062F5]": value === "2",
                      "bg-[#222B38]": value !== "2",
                    }
                  )}
                >
                  Most Popular
                </div>
              )}
              <div className="bg-gray-100 flex justify-between px-3 py-5 rounded-md">
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "18",
                      fontWeight: "700",
                    },
                  }}
                  value={plan.id}
                  control={<Radio />}
                  label={plan.planTitle}
                />
                <div className="self-center flex gap-1 bg-gray-200 px-1 py-1 rounded-sm">
                  <p className="font-bold">$</p>
                  <p className="text-5xl font-extrabold">{plan.price}</p>
                </div>
              </div>
            </div>
          ))}
        </RadioGroup>
        <Link
          href="https://awesomeapp.com/subscription"
          className={`${plus_jakarta.className} border self-center min-w-[342px] py-4 rounded-lg bg-[#0062F5] font-semibold hover:border-gray-300 hover:bg-white hover:text-gray-400 text-white  transition .5s mt-10`}
        >
          <p className="text-center">Get my plan</p>
        </Link>
      </FormControl>
      <div className="max-w-[342px] mx-auto text-gray-400 text-[10px]">
        <p className="text-center">
          You are enrolling in a 3-monthly subscription to{" "}
          <a href="https://awesomeapp.com/subscription" className="text-black">
            https://awesomeapp.com/subscription
          </a>{" "}
          with the discount price $29.99.You agree that the plan you selected
          will automatically be extended at the full price for successive
          renewal periods and you will be charged $99.99 every 3 months until
          you cancel the subscription. Payments will be charged from the card
          you specified here. You can cancel your subscription by contacting our
          customer support team via email at support@awesomeapp.com Subscription
          Policy. The charge will appear on your bill as &quot;awesomeapp&quot;
        </p>
      </div>
    </div>
  );
};

export default PlanOptions;
