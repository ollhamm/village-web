"use client";
import QRCode from "qrcode.react";
import { useRef } from "react";

export default function Home() {
  const qrValue = "https://karang-taruna-kertaaji.vercel.app/";
  const qrRef = useRef();

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

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
      <div ref={qrRef}>
        <QRCode
          value={qrValue}
          size={256}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin={true}
        />
      </div>
      <button
        onClick={downloadQRCode}
        style={{
          backgroundColor: "#9dc98a",
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        Download QR Code
      </button>
    </div>
  );
}
