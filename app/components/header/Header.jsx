"use client";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp, FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 min-h-screen items-center justify-center h-screen">
      <div className="flex flex-col items-center mt-[80px] opacity-80">
        <Image
          src={"/images/logo-bg-white.png"}
          alt="logo"
          height={200}
          width={200}
        />
      </div>
      <div className="md:text-3xl text-lg items-center justify-center font-bold text-neutral-500 mt-10">
        <Typewriter
          words={["Karang Taruna Wirabhakti Kliran X"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className="flex flex-col mt-10 items-center justify-center">
        <div
          className={`flex flex-row p-4 rounded-md cursor-pointer justify-center bg-transparent backdrop-blur-sm shadow-md z-40 items-center gap-4 text-[#9dadb1] transition-transform duration-1000 ease-in-out transform ${
            isScrolled ? "fixed left-2 top-1/4 flex-col px-4 py-6" : ""
          }`}
        >
          <a
            href="https://www.instagram.com/kliransepuluh?igsh=MXc3M2sxY2x3ZGdiag=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaTiktok size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
