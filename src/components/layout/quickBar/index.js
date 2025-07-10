"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import QuickBarDesktop from "./QuickBarDesktop";
import QuickBarMobile from "./QuickBarMobile";

export default function QuickBar() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  // 클라이언트에서 마운트되기 전까지는 아무것도 렌더링하지 않음
  if (!mounted) {
    return null;
  }

  return isMobile ? <QuickBarMobile /> : <QuickBarDesktop />;
}
