"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Organisasi = () => {
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
      <div className="flex items-center justify-center">
        <motion.div
          className="font-bold text-lg md:text-2xl mb-10 text-neutral-400 underline"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
        >
          Struktur Organisasi
        </motion.div>
      </div>
      <div className="p-6 rounded-lg w-3/4">
        <motion.div
          className="flex mb-6 space-x-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight}
        >
          <div className="flex flex-col items-center text-neutral-500 gap-3 p-4 rounded flex-1 text-center">
            <Image
              src={"/struktur/wahyu.png"}
              height={500}
              width={500}
              alt="Ketua Karangtaruna"
              className="w-48 h-48 rounded-full mb-2"
            />
            <div>Wahyu</div>
            <div className="font-bold items-center text-xl justify-center">
              Ketua Karangtaruna
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex mb-6 space-x-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
        >
          <div className="flex flex-col items-center gap-3 text-neutral-500 p-4 rounded flex-1 text-center">
            <Image
              src={"/struktur/mhmdcrp.png"}
              height={400}
              width={400}
              alt="wakil Ketua"
              className="w-48 h-48 rounded-full mb-2"
            />
            <div>Mahmud</div>
            <div className="font-bold items-center text-xl justify-center">
              Wakil Ketua
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight}
        >
          <div className="flex flex-col items-center gap-3 text-neutral-500 p-4 rounded flex-1 text-center">
            <Image
              src={"/struktur/lpx.png"}
              height={400}
              width={400}
              alt="Sekretaris"
              className="w-48 h-48 rounded-full mb-2"
            />
            <div>Luthfi</div>
            <div className="font-bold items-center text-xl justify-center">
              Sekretaris 1
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-neutral-500 p-4 rounded flex-1 text-center">
            <Image
              src={"/struktur/arya.png"}
              height={400}
              width={400}
              alt="Sekretaris"
              className="w-48 h-48 rounded-full mb-2"
            />
            <div>Arya</div>
            <div className="font-bold items-center text-xl justify-center">
              Sekretaris 2
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-neutral-500 p-4 rounded flex-1 text-center">
            <Image
              src={"/struktur/evi.png"}
              height={400}
              width={400}
              alt="Bendahara"
              className="w-48 h-48 rounded-full mb-2"
            />
            <div>Evi</div>
            <div className="font-bold items-center text-xl justify-center">
              Bendahara
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Organisasi;
