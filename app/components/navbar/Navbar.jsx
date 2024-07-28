"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="w-full flex flex-row items-start p-8 py-3 px-6  bg-[#9dc98a]"
    >
      <div className="flex cursor-pointer flex-row items-center text-xs md:text-xl justify-start text-neutral-600 md:justify-center gap-6 font-semibold ml-4 md:ml-0">
        <Image
          src={"/images/logo-amat.png"}
          alt="logo"
          height={40}
          width={40}
        />
        Keluarga Taruna Muda Jitar Dukuh
      </div>
    </div>
  );
};

export default Navbar;
