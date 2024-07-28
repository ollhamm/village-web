"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const leftToRightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const rightToLeftVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const Card = ({ imgSrc, title, variants }) => (
  <motion.div
    className="flex flex-col items-center rounded-lg shadow-lg p-4 md:w-1/4 m-2"
    initial="hidden"
    whileInView="visible"
    variants={variants}
    transition={{ duration: 0.5 }}
  >
    <Image src={imgSrc} alt={title} width={200} height={200} />
  </motion.div>
);

const CardsContainer = () => (
  <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
    <Card
      imgSrc="/desa/lap-voli.png"
      title="Title 1"
      variants={leftToRightVariants}
    />
    <Card
      imgSrc="/desa/tirakatan.png"
      title="Title 2"
      variants={rightToLeftVariants}
    />
    <Card
      imgSrc="/desa/masjid.png"
      title="Title 2"
      variants={leftToRightVariants}
    />
  </div>
);

export default CardsContainer;
