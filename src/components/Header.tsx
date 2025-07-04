import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div>
        <Image
          width={225}
          height={223}
          alt="Leveling logo"
          src="/logo_header.png"
          className="w-10 aspect-square m-4"
        />
      </div>
    </header>
  );
};
