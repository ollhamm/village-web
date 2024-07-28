"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="w-full flex flex-row items-center justify-between p-4 px-20 bg-[#9dadb1] z-50 fixed top-0"
    >
      <div className="flex cursor-pointer flex-row items-center text-xs md:text-xl justify-start text-neutral-600 md:justify-center gap-6 font-semibold">
        <Image
          src={"/images/nama-karangtaruna.png"}
          alt="logo"
          height={150}
          width={150}
        />
      </div>
      <div className="flex items-center justify-end text-white">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaBell size={20} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
