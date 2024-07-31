"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell } from "react-icons/fa";

const ComingSoon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationComplete = () => {
    if (isAtBottom) {
      setIsVisible(false);
    }
  };

  const containerVariants = {
    initial: { opacity: 1 },
    hidden: isMobile
      ? { opacity: 0, transition: { duration: 1 } }
      : {
          opacity: 0,
          x: ["0%", "3%", "-3%", "100%"],
          y: ["0%", "-3%", "3%", "-100%"],
          transition: { duration: 2 },
        },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex flex-1 flex-col items-center justify-center mt-20 h-screen mb-10 bg-gray-100"
          initial="initial"
          animate={isAtBottom ? "hidden" : "initial"}
          variants={containerVariants}
          onAnimationComplete={handleAnimationComplete}
        >
          <div className="flex flex-col items-center justify-center">
            <motion.div
              className="font-bold flex flex-row items-center justify-center text-lg md:text-2xl mb-10 text-neutral-400 underline"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/lomba2.png"
                height={600}
                width={600}
                alt="foto bareng"
                className="w-200 h-200 md:h-600 px-6 md:px-0 md:w-600"
              />
            </motion.div>
            <motion.div
              className="flex flex-row px-8 md:px-48 text-xl md:text-2xl font-semibold text-neutral-500 rounded-xl shadow-lg p-6 items-center justify-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s go <FaBell size={20} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoon;
