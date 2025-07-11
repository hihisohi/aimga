"use client";

import MainVisual from "@/components/sections/home/MainVisual";
import MainIntro from "@/components/sections/home/MainIntro";
import MainSubject from "@/components/sections/home/MainSubject";
import MainEquipment from "@/components/sections/home/MainEquipment";
import MainTechnique from "@/components/sections/home/MainTechnique";
import MainNews from "@/components/sections/home/MainNews";
import MainVideo from "@/components/sections/home/MainVideo";

export default function Home() {
  return (
    <div id="wrap">
      <main id="main">
        <MainVisual />
        <MainIntro />
        <MainSubject />
        <MainEquipment />
        <MainTechnique />
        <MainNews />
        <MainVideo />
      </main>
    </div>
  );
}
