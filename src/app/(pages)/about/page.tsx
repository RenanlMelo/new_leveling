import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="mt-10 px-6">
        <a
          href="/"
          className="flex items-center text-lg py-2 pl-2 pr-4 border-2 border-[#aaa] w-fit rounded-full mb-10 text-white"
        >
          <ChevronLeft className="inline" stroke="#aaa" /> Home
        </a>
        <h1 className="uppercase font-bold text-4xl lg:text-5xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent w-fit">
          About Us
        </h1>
        <Image
          width={1200}
          height={900}
          alt="About main image"
          src="/about.png"
          className="absolute left-0"
        />
      </main>
    </>
  );
}
