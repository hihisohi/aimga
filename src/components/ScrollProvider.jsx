"use client";

import { createContext, useEffect, useRef } from "react";
import Lenis from "lenis";

// 하위 컴포넌트에서 lenis 인스턴스 사용하기 위해 전역으로 저장
export const LenisContext = createContext({});

export function ScrollProvider({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.11,
      smooth: true,
    });

    const animate = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}
