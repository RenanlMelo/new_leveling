import React from "react";
import Image from "next/image";
import { About_Hero } from "@/components/about_components/about_hero";
import { About_Team } from "@/components/about_components/about_team";
import { About_Values } from "@/components/about_components/about_values";
import { Home_Button } from "@/components/comum_components/HomeButton";

export default function AboutUs() {
  return (
    <main className="mt-4 mb-10">
      <Home_Button />

      <About_Hero />

      <About_Team />

      <About_Values />
    </main>
  );
}
