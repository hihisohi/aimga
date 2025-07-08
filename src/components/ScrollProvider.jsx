"use client";

import { createContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

// 하위 컴포넌트에서 lenis 인스턴스 사용하기 위해 전역으로 저장
export const LenisContext = createContext({});

export function ScrollProvider({ children }) {
  const lenisRef = useRef();
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.11,
      smooth: true,
    });

    setLenis(lenisRef.current);

    const animate = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
  );
}
