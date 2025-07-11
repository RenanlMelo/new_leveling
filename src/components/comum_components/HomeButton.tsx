"use client";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Home_Button = () => {
  const pathname = usePathname();
  const [previousPath, setPreviousPath] = useState<string | null>(null);

  useEffect(() => {
    const storedPrevious = sessionStorage.getItem("previousPath");
    if (storedPrevious && storedPrevious !== pathname) {
      setPreviousPath(storedPrevious);
    } else {
      setPreviousPath(null);
    }
  }, [pathname]); // <- roda sempre que a rota mudar

  const getBreadcrumbLabel = (path: string) => {
    if (path.includes("/services")) return "Services";
    if (path.includes("/about")) return "About";
    if (path.includes("/contact")) return "Contact";
    return "";
  };

  // Não mostrar nada se estiver na Home ("/")
  if (pathname === "/") return null;

  return (
    <div className="px-6 mb-4 text-white">
      <a
        href="/"
        className="text-lg underline underline-offset-4 decoration-transparent hover:decoration-white transition"
      >
        <ChevronLeft className="inline -translate-y-px" />
        Home
      </a>
      {previousPath && previousPath !== "/" && (
        <>
          <span className="mx-2">/</span>
          <a
            href={previousPath}
            className="text-lg underline underline-offset-4 decoration-transparent hover:decoration-white transition"
          >
            {getBreadcrumbLabel(previousPath)}
          </a>
        </>
      )}
    </div>
  );
};
