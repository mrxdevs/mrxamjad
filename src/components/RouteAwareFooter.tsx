"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function RouteAwareFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/techs") || pathname.startsWith("/about")) return null;
  return <Footer />;
}

