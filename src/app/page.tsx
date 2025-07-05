import { Footer } from "@/components/comum_components/Footer";
import { Header } from "@/components/comum_components/Header";
import { Hero } from "@/components/homepage_components/Hero";
import { Objectives } from "@/components/homepage_components/Objectives";
import { Services } from "@/components/homepage_components/Services";
import { Unlock } from "@/components/homepage_components/Unlock";

export default function Home() {
  return (
    <>
      <Hero />
      <Objectives />
      <Unlock />
      <Services />
      <Footer />
    </>
  );
}
