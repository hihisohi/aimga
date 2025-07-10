"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./QuickBarDesktop.module.css";
import { useLenis } from "@/hooks/useLenis";
import { gsap } from "gsap";

const QuickBarDesktop = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const quickLinkListWrapRef = useRef(null);
  const quickBarPcToggleBtnRef = useRef(null);
  const quickBarPcBtnOpenIconRef = useRef(null);
  const quickBarPcBtnCloseIconRef = useRef(null);

  const lenis = useLenis();

  // lenis 스크롤 이벤트 리스너 추가
  useEffect(() => {
    console.log("Lenis in QuickBarDesktop:", lenis);

    if (lenis) {
      console.log("Adding scroll event listener to Lenis");
      lenis.on("scroll", handleScrollWithLenis);

      return () => {
        console.log("Removing scroll event listener from Lenis");
        lenis.off("scroll", handleScrollWithLenis);
      };
    } else {
      console.log("Lenis is not available yet");
    }
  }, [lenis]);

  // 컴포넌트 언마운트 시 cleanup
  useEffect(() => {
    return () => {
      // 실행 중인 GSAP 애니메이션 정리
      if (quickLinkListWrapRef.current) {
        gsap.killTweensOf(quickLinkListWrapRef.current);
      }
    };
  }, []);

  const handleScrollWithLenis = (e) => {
    // console.log("Lenis scroll event triggered", e);
    // console.log("Scroll position:", e.scroll);
    // console.log("Scroll direction:", e.direction);

    if (e.scroll > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (isScrolled) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isScrolled]);

  const closeQuickBarPc = () => {
    if (!quickLinkListWrapRef.current) return;

    gsap.killTweensOf(quickLinkListWrapRef.current); // 기존 애니메이션 중단

    gsap.to(quickLinkListWrapRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power1.inOut",
      onComplete: () => {
        if (quickLinkListWrapRef.current) {
          quickLinkListWrapRef.current.style.visibility = "hidden";
          quickLinkListWrapRef.current.style.pointerEvents = "none";
        }
      },
    });
  };

  const openQuickBarPc = () => {
    if (!quickLinkListWrapRef.current) return;

    gsap.killTweensOf(quickLinkListWrapRef.current); // 기존 애니메이션 중단

    quickLinkListWrapRef.current.style.visibility = "visible";
    quickLinkListWrapRef.current.style.pointerEvents = "auto";

    // 열린 시점에서 quick-bar 높이 재측정
    quickLinkListWrapRef.current.style.height = "auto";
    const currentHeight = quickLinkListWrapRef.current.scrollHeight;
    quickLinkListWrapRef.current.style.height = "0px";

    gsap.to(quickLinkListWrapRef.current, {
      height: currentHeight,
      opacity: 1,
      duration: 0.6,
      ease: "power1.inOut",
      onComplete: () => {
        if (quickLinkListWrapRef.current) {
          quickLinkListWrapRef.current.style.height = "auto";
        }
      },
    });
  };

  useEffect(() => {
    isOpen ? openQuickBarPc() : closeQuickBarPc();
  }, [isOpen]);

  const handleClickPcToggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="quickBarPc"
      className={`${styles.quickBarPc} ${isOpen ? styles["is-open"] : ""} ${
        isScrolled ? styles["scrolled"] : ""
      }`}
    >
      <div className={styles["quick-bar-inner"]}>
        <div
          ref={quickLinkListWrapRef}
          className={styles["quick-link-list-wrap"]}
        >
          <ul className={styles["quick-link-list"]}>
            <li
              className={`${styles["quick-link-item"]} ${styles["quick-link-call"]}`}
            >
              <a href="tel:02-1234-5678">
                <div className={styles["link-icon"]}>
                  <Image
                    src="/images/common/icon/quick-call.svg"
                    alt="Call Reservation"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles["link-text"]}>Call Reservation</div>
              </a>
            </li>
            <li
              className={`${styles["quick-link-item"]} ${styles["quick-link-email"]}`}
            >
              <a href="/contact">
                <div className={styles["link-icon"]}>
                  <Image
                    src="/images/common/icon/quick-email.svg"
                    alt="Online Reservation"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles["link-text"]}>Online Reservation</div>
              </a>
            </li>
            <li
              className={`${styles["quick-link-item"]} ${styles["quick-link-location"]}`}
            >
              <a href="/location">
                <div className={styles["link-icon"]}>
                  <Image
                    src="/images/common/icon/quick-location.svg"
                    alt="Directions"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles["link-text"]}>Directions</div>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["quick-bar-btn-wrap"]}>
          <button
            ref={quickBarPcToggleBtnRef}
            className={styles["btn-toggle__quick-bar"]}
            onClick={handleClickPcToggleBtn}
          >
            <div
              ref={quickBarPcBtnCloseIconRef}
              className={`${styles["btn-icon"]} ${styles["btn-close-icon"]} ${
                isOpen ? styles["on"] : ""
              }`}
            >
              <Image
                src="/images/common/icon/btn-close-quickbar.svg"
                alt="닫기"
                width={50}
                height={50}
              />
            </div>
            <div
              ref={quickBarPcBtnOpenIconRef}
              className={`${styles["btn-icon"]} ${styles["btn-open-icon"]} ${
                !isOpen ? styles["on"] : ""
              }`}
            >
              <Image
                src="/images/common/icon/btn-open-quickbar01.svg"
                alt="열기1"
                width={50}
                height={50}
              />
              <Image
                src="/images/common/icon/btn-open-quickbar02.svg"
                alt="열기2"
                width={50}
                height={50}
              />
              <Image
                src="/images/common/icon/btn-open-quickbar03.svg"
                alt="열기3"
                width={50}
                height={50}
              />
              <Image
                src="/images/common/icon/btn-open-quickbar04.svg"
                alt="열기4"
                width={50}
                height={50}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickBarDesktop;
