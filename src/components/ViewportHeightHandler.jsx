"use client";

import { useEffect } from "react";

const ViewportHeightHandler = () => {
  useEffect(() => {
    // 브라우저 UI(주소창 등)로 인해 변동되는 뷰포트 높이 문제를 해결
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // 초기 설정
    setVH();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", setVH);

    // 모바일 브라우저에서 주소창 숨김/표시 시에도 대응
    window.addEventListener("orientationchange", setVH);

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default ViewportHeightHandler;
