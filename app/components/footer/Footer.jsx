import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-row items-center p-8 py-8 px-6 bg-[#9dadb1]/50 backdrop-blur-xl shadow-md z-50  bottom-0 justify-between">
      <div className="text-neutral-600 text-xs md:text-base font-light ml-4 md:ml-0">
        &copy; {new Date().getFullYear()} Karang Taruna Wirabhakti. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
