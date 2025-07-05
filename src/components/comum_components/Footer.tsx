import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 font-2 border-t border-[#505050]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg">
            Empowering businesses through automation and technology.
          </p>
        </div>

        <div className="flex justify-around w-full">
          <a
            href="https://www.linkedin.com/company/leveling-corporation/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-gray-400 flex gap-x-2 justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="var(--primaryxL)"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            <p className="text-primaryxL">Linkedin</p>
          </a>
          <a
            href="https://www.instagram.com/leveling.corp/"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-gray-400 flex gap-x-2 justify-center items-center"
          >
            <Instagram stroke="var(--primaryxL)" strokeWidth={2} size={32} />
            <p className="text-primaryxL">Instagram</p>
          </a>
        </div>

        <div className="text-center md:text-right text-sm space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
        <span className="text-sm w-full border-t border-white py-2">
          © 2025 Leveling Corporation
        </span>
      </div>
    </footer>
  );
};
