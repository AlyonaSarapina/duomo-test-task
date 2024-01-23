"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/joy";
import MenuBtn from "./menu";

const Header = () => {
  const router = useRouter();
  return (
    <header className="sticky z-20 top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md min-h-15 mb-4">
      <nav className="flex justify-between">
        <span className="cursor-pointer" onClick={() => router.back()}>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </span>
        <div
          className="flex flex-col justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <h1 className="font-bold">App</h1>
        </div>
        <div className="flex flex-col justify-center">
          <span className="cursor-pointer">
            <MenuBtn />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
