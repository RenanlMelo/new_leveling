import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Objectives } from "@/components/Objectives";
import { Services } from "@/components/Services";
import { Unlock } from "@/components/Unlock";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Objectives />
      <Unlock />
      <Services />
      <Footer />
    </>
  );
}
