import { LenisContext } from "@/components/ScrollProvider";
import { useContext } from "react";

export function useLenis() {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenis must be used within ScrollProvider");
  }
  return context.lenis;
}
