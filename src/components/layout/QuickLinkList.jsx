"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./QuickLinkList.module.css";
import Image from "next/image";
import { useLenis } from "@/hooks/useLenis";
import { gsap } from "gsap";

export default function QuickLinkList() {
  const [isMobile, setIsMobile] = useState(false);
  const [isQuickBarPcOpen, setIsQuickBarPcOpen] = useState(true);
  const [isQuickBarMobileOpen, setIsQuickBarMobileOpen] = useState(true);
  const [wasQuickBarPcScrolled, setWasQuickBarPcScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const quickBarPcRef = useRef(null);
  const quickBarMobileRef = useRef(null);
  const quickLinkListWrapRef = useRef(null);
  const quickBarPcToggleBtnRef = useRef(null);
  const quickBarMobileToggleBtnRef = useRef(null);
  const quickBarPcBtnOpenIconRef = useRef(null);
  const quickBarPcBtnCloseIconRef = useRef(null);

  const lenis = useLenis();

  // lenis 스크롤 이벤트 리스너 추가
  useEffect(() => {
    console.log("Lenis in QuickLinkList:", lenis);

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
    console.log("isScrolled", isScrolled);

    if (isScrolled) {
      if (isQuickBarPcOpen) {
        setIsQuickBarPcOpen(false);
      }
    } else {
      if (!isQuickBarPcOpen) {
        setIsQuickBarPcOpen(true);
      }
    }
  }, [isScrolled]);

  const closeQuickBarPc = () => {
    gsap.killTweensOf(quickLinkListWrapRef.current); // 기존 애니메이션 중단

    gsap.to(quickLinkListWrapRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power1.inOut",
      onComplete: () => {
        quickLinkListWrapRef.current.style.visibility = "hidden";
        quickLinkListWrapRef.current.style.pointerEvents = "none";
      },
    });
  };

  const openQuickBarPc = () => {
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
        quickLinkListWrapRef.current.style.height = "auto";
      },
    });
  };

  useEffect(() => {
    if (isQuickBarPcOpen) {
      console.log("열림");
      openQuickBarPc();
    } else {
      console.log("닫힘");
      closeQuickBarPc();
    }
  }, [isQuickBarPcOpen]);

  const handleClickPcToggleBtn = () => {
    setIsQuickBarPcOpen(!isQuickBarPcOpen);
  };

  // PC 버전 퀵바 (>768px)
  const PCQuickBar = () => (
    <div
      ref={quickBarPcRef}
      id="quickBarPc"
      className={`${styles.quickBarPc} ${
        isQuickBarPcOpen ? styles["is-open"] : ""
      } ${isScrolled ? styles["scrolled"] : ""}`}
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
                isQuickBarPcOpen ? styles["on"] : ""
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
                !isQuickBarPcOpen ? styles["on"] : ""
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

  // 모바일 버전 퀵바 (<=768px)
  const MobileQuickBar = () => (
    <div
      ref={quickBarMobileRef}
      id="quickBarMobile"
      className={`${styles.quickBarMobile} ${
        isQuickBarMobileOpen ? styles["is-open"] : ""
      }`}
    >
      <div className={styles["quick-bar-inner"]}>
        <div className={styles["quick-bar-btn-wrap"]}>
          <button
            ref={quickBarMobileToggleBtnRef}
            className={styles["btn-toggle__quick-bar"]}
            onClick={toggleQuickBarMobile}
          >
            <span
              className={`${styles["btn-icon"]} ${styles["btn-close-icon"]}`}
            >
              contact
            </span>
          </button>
        </div>
        <div className={styles["quick-link-list-wrap"]}>
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
      </div>
    </div>
  );

  return <>{isMobile ? <MobileQuickBar /> : <PCQuickBar />}</>;
}
