// src/hooks/useMediaQuery.ts
import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  // 1) SSR 시에도 클라이언트와 일치하도록 false로 초기화
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 2) window가 있을 때만 동작
    const mediaQueryList = window.matchMedia(query);

    // 3) 마운트 직후 실제 결과로 동기화
    setMatches(mediaQueryList.matches);

    // 4) 변화 감지
    const handler = (e) => setMatches(e.matches);
    mediaQueryList.addEventListener("change", handler);

    // 5) 정리
    return () => mediaQueryList.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
