"use client";
import React, { useState } from "react";
import Image from "next/image";

const Card = ({ imgSrc, onClick }) => (
  <div className="relative w-48 h-60 m-2 cursor-pointer" onClick={onClick}>
    <Image
      src={imgSrc}
      alt="Poster"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  </div>
);

const Modal = ({ imgSrc, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div className="relative w-full h-full md:w-auto md:h-auto">
      <Image src={imgSrc} alt="Poster" layout="fill" objectFit="contain" />
    </div>
  </div>
);

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image
            src="/images/lomba2.png"
            height={600}
            width={600}
            alt="foto bareng"
            className="w-200 h-200 md:h-600 px-6 md:px-0 md:w-600"
          />
        </div>
        <div className="flex flex-row px-8 md:px-48 text-xs md:text-sm rounded-xl shadow-lg p-6 items-center justify-center">
          <Image
            src="/images/logo-hut-ri.png"
            alt="logo 79"
            height={100}
            width={200}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center h-screen">
        <div className="font-bold text-lg md:text-2xl mb-10 mt-36 text-neutral-400 underline">
          Ayo Ikuti dan Meriahkan!
        </div>
        <div className="flex flex-row items-center justify-center gap-4 flex-wrap mb-36">
          <Card
            imgSrc="/images/lomba2.png"
            onClick={() => handleCardClick("/images/lomba2.png")}
          />
          <Card
            imgSrc="/images/lomba2.png"
            onClick={() => handleCardClick("/images/lomba2.png")}
          />
          <Card
            imgSrc="/images/lomba2.png"
            onClick={() => handleCardClick("/images/lomba2.png")}
          />
        </div>
      </div>
      {selectedImage && (
        <Modal imgSrc={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Events;
