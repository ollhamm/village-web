"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="w-full flex flex-row items-center p-4 bg-[#9dadb1] z-50 fixed top-0"
    >
      <div className="flex cursor-pointer flex-row items-center text-xs md:text-xl justify-start text-neutral-600 md:justify-center gap-6 font-semibold">
        <Image
          src={"/images/nama-karangtaruna.png"}
          alt="logo"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
};

export default Navbar;
