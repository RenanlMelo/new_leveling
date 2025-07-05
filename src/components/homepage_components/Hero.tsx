"use client";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <main className="px-6 lg:pl-48 relative flex flex-col lg:flex-row">
      <div className="pt-10 lg:pt-32">
        <h1 className="uppercase font-bold text-4xl lg:text-5xl bg-gradient-to-r from-white to-[#737373] bg-clip-text text-transparent w-fit">
          Improving and optimizing
          <br />
          your company processes
        </h1>
        <div className="flex justify-between items-center gap-x-2 py-8">
          <div className="flex gap-x-2">
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white rounded-full" />
          </div>
          <hr className="bg-gradient-to-r from-white to-[#737373] h-[2px] w-full" />
        </div>

        <div className="gap-y-6 flex flex-col">
          <Link
            href="/services"
            className="text-center font-2 text-xl rounded-full py-3 bg-primaryL text-white w-[calc(30vw+50px)] cursor-pointer shadow-[]"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-center font-2 text-xl rounded-full py-3 border-2 border-[#fff] text-white w-[calc(30vw+50px)] cursor-pointer"
          >
            See More
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Image
            width={899}
            height={892}
            alt="Introduction logo"
            src="/introducao.png"
            className="w-full lg:w-[899px] lg:max-w-[60vw] aspect-square"
          />
        </div>
      </div>
    </main>
  );
};
