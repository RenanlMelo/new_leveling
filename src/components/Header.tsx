import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div>
        <Image
          width={250}
          height={125}
          alt="Leveling logo"
          src="/logo_header.png"
        />
      </div>
    </header>
  );
};
