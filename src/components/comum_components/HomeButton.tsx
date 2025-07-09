import { ChevronLeft } from "lucide-react";
import React from "react";

export const Home_Button = () => {
  return (
    <a
      href="/"
      className="px-6 flex items-center text-lg py-2 pl-2 pr-4 w-fit rounded-full mb-4 text-white underline decoration underline-offset-4 decoration-transparent hover:decoration-white transition"
    >
      <ChevronLeft className="inline" stroke="#aaa" /> Home
    </a>
  );
};
