"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EventUpdate = () => {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="flex flex-1 flex-col items-center justify-center mt-20 h-screen mb-10 bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="font-bold text-lg md:text-2xl mb-10 text-neutral-400 underline"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
        >
          Kegiatan Terdekat
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight}
        >
          <Image
            src="/images/lomba-logo.png"
            height={600}
            width={600}
            alt="foto bareng"
            className="w-200 h-200 md:h-600 px-6  md:px-0 md:w-600"
          />
        </motion.div>
        <motion.div
          className="flex flex-row px-8 md:px-48 text-xs md:text-sm rounded-xl shadow-lg p-6 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
        >
          <div className=" text-center ">
            Kami akan mengadakan rangkaian acara untuk merayakan Hari
            Kemerdekaan Indonesia pada bulan Agustus. Kegiatan terdekat kami
            adalah acara lomba 17-an yang akan berlangsung sepanjang bulan
            Agustus, melibatkan berbagai perlombaan yang menarik bagi anak-anak
            hingga orang tua. Selain itu, kami juga akan mengadakan malam
            tirakatan pada tanggal 16 Agustus 2024 untuk memperingati
            kemerdekaan dengan penuh khidmat dan kebersamaan. Ayo bergabung dan
            meriahkan acara ini bersama kami!
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventUpdate;
