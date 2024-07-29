"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="flex flex-1 flex-col items-center mt-20 justify-center h-screen mb-10 bg-gray-100">
      <motion.div
        className="font-bold text-lg md:text-2xl text-neutral-400 underline"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
      >
        Tentang Kami
      </motion.div>
      <div className="flex flex-col md:flex-row md:px-20 items-center justify-center mt-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
          className="md:w-1/2 lg:w-2/5"
        >
          <Image
            src="/images/foto-bareng.png"
            alt="foto bareng"
            width={400}
            height={400}
            className="w-300 h-300 md:w-96 md:h-96 lg:w-[500px] lg:h-[400px] px-6 md:px-0"
          />
        </motion.div>
        <motion.div
          className="flex flex-row px-8 py-10 md:px-10 lg:px-20 text-xs md:text-sm rounded-xl shadow-lg md:shadow-none items-center justify-center md:w-1/2 lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight}
        >
          <div className="text-center md:text-left">
            Karang Taruna <b>Wirabhakti</b> adalah organisasi pemuda yang
            berlokasi di Kliran X, RT 04/RW 23, Sendangagung, Minggir, Sleman,
            Yogyakarta. Organisasi ini berdedikasi untuk mengembangkan potensi
            generasi muda di lingkungan sekitar melalui berbagai kegiatan
            sosial, budaya, dan ekonomi. Dengan semangat gotong royong dan
            kebersamaan, kami, Wirabhakti, berupaya menciptakan lingkungan yang
            lebih baik dan memberdayakan pemuda untuk berperan aktif dalam
            pembangunan masyarakat. Kami percaya bahwa dengan bersatu dalam
            kebersamaan, kita dapat mencapai tujuan yang lebih besar dan
            memberikan dampak positif yang signifikan bagi lingkungan sekitar.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
