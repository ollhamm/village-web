"use client";
import Image from "next/image";
import { FaWhatsapp, FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((prevBounce) => !prevBounce);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-slate-200">
      <div className="flex flex-col items-center mt-[-80px] opacity-60">
        <Image
          src={"/images/logo-amat.png"}
          alt="logo"
          height={200}
          width={200}
          className="mt-[-50px] opacity-90"
        />
      </div>
      <div className="text-3xl items-center justify-center font-bold text-neutral-500 mt-10">
        <Typewriter
          words={["Follow Us!"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </div>
      <div className="flex flex-col mt-10 items-center justify-center">
        <div
          className={`flex flex-row p-4 rounded-md cursor-pointer justify-center items-center gap-4 text-green-500 px-20 shadow-lg`}
        >
          <a
            href="https://www.instagram.com/kertaaji_v/?igsh=MW00dWM0dHk1aHRv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href=" https://wa.me/+6289672530402"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="mailto:karangtarunakertaaji5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://www.tiktok.com/@karangtarunakertaaji?_t=8oJL5ilx7pp&_r=1"
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
}
