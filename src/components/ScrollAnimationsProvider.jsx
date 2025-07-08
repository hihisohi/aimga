"use client";

import { useEffect } from "react";

export default function ScrollAnimationsProvider({ children }) {
  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === "undefined") return;

    // 동적 import로 GSAP 로드
    const loadScrollAnimations = async () => {
      try {
        const { initScrollFadeAnimations, cleanupScrollFadeAnimations } =
          await import("@/utils/scrollAnimations");
        initScrollFadeAnimations();

        // cleanup 함수를 전역에 저장
        window.cleanupScrollFadeAnimations = cleanupScrollFadeAnimations;
      } catch (error) {
        console.error("Failed to load scroll animations:", error);
      }
    };

    loadScrollAnimations();

    return () => {
      // cleanup 함수가 있으면 실행
      if (typeof window !== "undefined" && window.cleanupScrollFadeAnimations) {
        window.cleanupScrollFadeAnimations();
      }
    };
  }, []);

  return <>{children}</>;
}
