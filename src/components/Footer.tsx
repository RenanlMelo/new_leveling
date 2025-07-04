import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 font-2">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg">
            Empowering businesses through automation and technology.
          </p>
        </div>

        <div className="flex justify-around w-full">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            Instagram
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
