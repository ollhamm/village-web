"use client";
import QRCode from "qrcode.react";

export default function Home() {
  const qrValue = "https://porto-me-nine.vercel.app/"; // Ganti dengan URL atau teks yang ingin Anda enkode dalam barcode

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Scan this QR Code</h1>
      <QRCode
        value={qrValue}
        size={256} // Ukuran QR Code dalam piksel
        bgColor="#ffffff"
        fgColor="#000000"
        level="H" // Tingkat koreksi kesalahan
        includeMargin={true}
      />
    </div>
  );
}
