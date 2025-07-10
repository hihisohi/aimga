"use client";

import { useEffect } from "react";

/**
 * useClickOutside
 *
 * @param refs - 클릭 아웃SIDE를 감지할 타겟 요소들의 ref 배열
 * @param handler - 외부 클릭 시 호출할 콜백 함수
 * @param enabled - 훅 활성화 여부 (옵션)
 */
export function useClickOutside(refs, handler, enabled) {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event) => {
      const target = event.target;
      const isInside = refs.some(
        (ref) => ref.current && ref.current.contains(target)
      );

      if (!isInside) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler, enabled]);
}
