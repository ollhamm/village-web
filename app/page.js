"use client";
import Image from "next/image";
import { FaWhatsapp, FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce((prevBounce) => !prevBounce);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col bg-slate-100">
      {/* Header Section */}
      <div className="flex flex-col flex-1 min-h-screen items-center justify-center h-screen">
        <div className="flex flex-col items-center mt-[80px] opacity-60">
          <Image
            src={"/images/logo-bg-white.png"}
            alt="logo"
            height={200}
            width={200}
            className="opacity-99"
          />
        </div>
        <div className="md:text-3xl text-lg items-center justify-center font-bold text-neutral-500 mt-10">
          <Typewriter
            words={["Karang Taruna Wirabhakti Kliran X"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="flex flex-col mt-10 items-center justify-center">
          <div
            className={`flex flex-row p-4 rounded-md cursor-pointer justify-center items-center gap-4 text-[#9dadb1] px-20 shadow-lg`}
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

      {/* About Us Section */}
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
              kebersamaan, kami, Wira Bakti, berupaya menciptakan lingkungan
              yang lebih baik dan memberdayakan pemuda untuk berperan aktif
              dalam pembangunan masyarakat. Kami percaya bahwa dengan bersatu
              dalam kebersamaan, kita dapat mencapai tujuan yang lebih besar dan
              memberikan dampak positif yang signifikan bagi lingkungan sekitar.
            </div>
          </motion.div>
        </div>
      </div>

      {/* struktur organisasi */}
      <div className="flex flex-1 flex-col items-center justify-center mt-20 h-screen mb-10 bg-gray-100">
        <div className="flex items-center justify-center">
          <motion.div
            className="font-bold text-lg md:text-2xl mb-10 text-neutral-400 underline"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
          >
            Struktur organisasi
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
                src={"/struktur/ketua.png"}
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
                src={"/struktur/ketua.png"}
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
                src={"/struktur/ketua.png"}
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
                src={"/struktur/ketua.png"}
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

      {/* keggiatan terdekat */}
      <div className="flex flex-1 flex-col items-center justify-center mt-20 h-screen mb-10 bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="font-bold text-lg md:text-2xl mb-10 text-neutral-400 underline"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
          >
            Kegiatan terdekat
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
              Agustus, melibatkan berbagai perlombaan yang menarik bagi
              anak-anak hingga orang tua. Selain itu, kami juga akan mengadakan
              malam tirakatan pada tanggal 16 Agustus 2024 untuk memperingati
              kemerdekaan dengan penuh khidmat dan kebersamaan. Ayo bergabung
              dan meriahkan acara ini bersama kami!
            </div>
          </motion.div>
        </div>
      </div>
      {/* comming soon */}
      <div className="flex flex-1 flex-col items-center justify-center mt-20 h-screen mb-10 bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="font-bold text-lg md:text-2xl mb-10 text-neutral-400 underline"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
          >
            coming soon
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromRight}
          >
            <Image
              src="/images/lomba2.png"
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
            {/* <div className=" text-center ">
              Kami akan mengadakan rangkaian acara untuk merayakan Hari
              Kemerdekaan Indonesia pada bulan Agustus. Kegiatan terdekat kami
              adalah acara lomba 17-an yang akan berlangsung sepanjang bulan
              Agustus, melibatkan berbagai perlombaan yang menarik bagi
              anak-anak hingga orang tua. Selain itu, kami juga akan mengadakan
              malam tirakatan pada tanggal 16 Agustus 2024 untuk memperingati
              kemerdekaan dengan penuh khidmat dan kebersamaan. Ayo bergabung
              dan meriahkan acara ini bersama kami!
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
