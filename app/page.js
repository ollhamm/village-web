"use client";
import CardsContainer from "./components/card/Card";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Organisasi from "./components/organisasi/Organisasi";
import Dusun from "./components/dusun/Dusun";
import EventUpdate from "./components/event-update/EventUpdate";
import ComingSoon from "./components/coming-soon/ComingSoon";

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-100">
      <Header />
      <About />
      <Organisasi />
      <Dusun />
      <CardsContainer />
      <EventUpdate />
      <ComingSoon />
    </div>
  );
}
