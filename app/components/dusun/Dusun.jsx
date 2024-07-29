"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Dusun = () => {
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
        Dusun Kami
      </motion.div>
      <div className="flex flex-col md:flex-row md:px-20 items-center justify-center mt-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
          className="order-1 md:order-2 md:w-1/2 lg:w-2/5"
        >
          <Image
            src="/desa/desa.png"
            alt="foto bareng"
            width={400}
            height={600}
            className="w-300 h-300 md:w-96 md:h-96 lg:w-[400px] lg:h-[500px] px-6 md:px-0"
          />
        </motion.div>
        <motion.div
          className="order-2 md:order-1 flex flex-row px-8 py-10 md:px-10 lg:px-20 text-xs md:text-sm rounded-xl shadow-lg md:shadow-none items-center justify-center md:w-1/2 lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromRight}
        >
          <div className="text-start md:text-left">
            <div className="font-semibold items-start justify-center text-center text-xl mb-3">
              Dusun Kliran X RT 04 / RW 23 Sendangagung, Minggir, Sleman,
              Yogyakarta
            </div>
            <div className="mb-2">
              Desa Kliran X terletak di kawasan Sendangagung, Kecamatan Minggir,
              Kabupaten Sleman, Yogyakarta. Desa ini menawarkan suasana pedesaan
              yang tenang dan asri, dengan pemandangan alam yang indah serta
              udara yang sejuk. Terkenal dengan keakraban dan gotong royong
              warganya, Kliran X merupakan contoh nyata dari kehidupan
              masyarakat desa yang harmonis dan penuh kebersamaan.
            </div>
            <br />
            <div className="mb-2">
              Desa ini dikelilingi oleh hamparan sawah yang hijau dan subur,
              mencerminkan kesuburan tanah dan kekayaan alam yang dimiliki.
              Warga Kliran X sebagian besar bermata pencaharian sebagai petani,
              yang masih menggunakan metode pertanian tradisional yang ramah
              lingkungan.
            </div>
            <br />
            Selain keindahan alam, Kliran X juga memiliki beberapa fasilitas
            umum yang mendukung kehidupan warganya, tempat ibadah, dan lapangan
            olahraga. Desa ini juga aktif dalam berbagai kegiatan sosial dan
            budaya, seperti acara gotong royong, perayaan hari besar keagamaan,
            dan kegiatan Karang Taruna Wira Bakti, yang menjadi wadah bagi
            generasi muda untuk berkumpul, belajar, dan berkontribusi bagi
            pembangunan desa.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dusun;
