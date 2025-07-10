"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import QuickBarDesktop from "./QuickBarDesktop";
import QuickBarMobile from "./QuickBarMobile";

export default function QuickBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <QuickBarMobile /> : <QuickBarDesktop />;
}
