"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initScrollAnimations() {
  // 모든 페이지에서 사용할 스크롤 진행 시 요소가 페이드 효과 주는 코드
  gsap.utils.toArray("[data-fade]").forEach((el) => {
    const direction = el.dataset.fade;
    const delay = parseFloat(el.dataset.fadeDelay) || 0;
    const distance = parseFloat(el.dataset.fadeDistance) || 20;
    const duration = parseFloat(el.dataset.fadeDuration) || 0.5;

    // 방향 설정
    let x = 0,
      y = 0;

    switch (direction) {
      case "":
        x = 0;
        y = 0;
        break;
      case "up":
        y = distance;
        break;
      case "down":
        y = -distance;
        break;
      case "left":
        x = distance;
        break;
      case "right":
        x = -distance;
        break;
    }

    // 애니메이션 생성
    const anim = gsap.fromTo(
      el,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        ease: "power1.out",
        paused: true, // 일단 자동 재생하지 않음
      }
    );

    const triggerParent = el.closest("[data-fade-trigger]");

    // ScrollTrigger
    ScrollTrigger.create({
      trigger: triggerParent ? triggerParent : el,
      start: "20% 90%",
      onEnter: () => gsap.delayedCall(delay, () => anim.play()),
      onLeaveBack: () => anim.reverse(),
    });
  });
}

export function cleanupScrollAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
