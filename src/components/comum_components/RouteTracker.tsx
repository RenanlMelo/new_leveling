"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Route_Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    const previousPath = sessionStorage.getItem("currentPath");
    if (previousPath && previousPath !== pathname) {
      sessionStorage.setItem("previousPath", previousPath);
    }
    sessionStorage.setItem("currentPath", pathname);
  }, [pathname]);

  return null;
}
