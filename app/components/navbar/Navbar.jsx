"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBell } from "react-icons/fa";
import Spinner from "../Spiner";

const Navbar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleIconClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/events");
    }, 1000);
  };

  return (
    <div className="w-full flex flex-row items-center justify-between p-4 px-6 md:px-10 bg-[#9dadb1] z-50 fixed top-0">
      <div
        onClick={() => router.push("/")}
        className="flex cursor-pointer flex-row items-center text-xs md:text-xl justify-start text-neutral-600 md:justify-center gap-6 font-semibold"
      >
        <Image
          src={"/images/nama-karangtaruna.png"}
          alt="logo"
          height={150}
          width={150}
        />
      </div>
      <div className="relative flex items-center justify-end gap-2 text-white">
        {loading ? (
          <Spinner />
        ) : (
          <div
            onClick={handleIconClick}
            className="relative flex items-center gap-2 cursor-pointer animate-shake"
          >
            <FaBell size={20} />
            <span className="absolute top-[-5px] right-[-5px] flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              !
            </span>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          50% {
            transform: translateX(2px);
          }
          75% {
            transform: translateX(-2px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-shake {
          animation: shake 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
