"use client";
import React, { FormEvent, useState } from "react";
import { inter, plus_jakarta } from "../fonts";
import * as EmailValidator from "email-validator";
import { useRouter } from "next/navigation";

const Form = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email can not be empty");

      setTimeout(() => {
        setError("");
      }, 4000);

      return;
    }

    const validation = EmailValidator.validate(email);

    if (!validation) {
      setError("Please enter a valid email");

      setTimeout(() => {
        setError("");
      }, 4000);

      return;
    }

    const submit = async () => {
      const data = {
        email,
      };

      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(data),
      });

      return response.json();
    };

    submit()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    router.push("/growth");
  };

  return (
    <div className="flex flex-col gap-4 h-[60vh] align-middle">
      <h2 className="font-semibold text-center text-wrap self-center">
        Enter your email <br /> to get your personalised <br /> Spiritual Growth
        Plan
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col align-middle min-w-[342px] justify-between h-[65vh] gap-10"
      >
        <div className="min-w-[342px] mx-auto">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`${inter.className} ${
              error && "border-red-700 border-[2px]"
            } w-full bg-[#F1F5FB] rounded-md placeholder:text-[#0062F5] px-3 py-1 min-h-20 placeholder:text-xs focus:outline-none focus:border-[2px] focus:border-black`}
          />
          {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
        </div>
        <button
          type="submit"
          className="border self-center min-w-[342px] py-4 rounded-lg font-semibold bg-[#0062F5] hover:border-gray-300 hover:bg-white hover:text-gray-400 text-white  transition .5s"
        >
          <p className={plus_jakarta.className}>Continue</p>
        </button>
      </form>
    </div>
  );
};

export default Form;
