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

const ImageComponent = ({ imgSrc, variants }) => (
  <motion.div
    className="relative w-64 h-80 m-2"
    initial="hidden"
    whileInView="visible"
    variants={variants}
    transition={{ duration: 0.5 }}
  >
    <Image
      src={imgSrc}
      alt="Image"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </motion.div>
);

const ImagesContainer = () => (
  <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
    <ImageComponent
      imgSrc="/desa/lap-voli.png"
      variants={leftToRightVariants}
    />
    <ImageComponent
      imgSrc="/desa/tirakatan.png"
      variants={rightToLeftVariants}
    />
    <ImageComponent imgSrc="/desa/kirab.png" variants={leftToRightVariants} />
  </div>
);

export default ImagesContainer;
