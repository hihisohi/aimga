import { LenisContext } from "@/components/ScrollProvider";
import { useContext } from "react";

export function useLenis() {
  const context = useContext(LenisContext);

  if (!context) {
    console.warn("useLenis must be used within ScrollProvider");
    return null;
  }

  return context.lenis;
}
