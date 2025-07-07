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

  // 화면 크기 감지
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 초기 체크
    checkScreenSize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", checkScreenSize);

    // 클린업 함수
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // PC 퀵바 열기
  const openQuickBarPc = useCallback(() => {
    setIsQuickBarPcOpen(true);

    // 기존 애니메이션 중단
    gsap.killTweensOf(quickLinkListWrapRef.current);

    // 초기 상태 설정
    quickLinkListWrapRef.current.style.visibility = "visible";
    quickLinkListWrapRef.current.style.pointerEvents = "auto";

    // 열린 시점에서 quick-bar 높이 재측정
    quickLinkListWrapRef.current.style.height = "auto";
    const currentHeight = quickLinkListWrapRef.current.scrollHeight;
    quickLinkListWrapRef.current.style.height = "0";

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
  }, []);

  // PC 퀵바 닫기
  const closeQuickBarPc = useCallback(() => {
    setIsQuickBarPcOpen(false);

    // 기존 애니메이션 중단
    gsap.killTweensOf(quickLinkListWrapRef.current);

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
  }, []);

  // PC 퀵바 토글
  const toggleQuickBarPc = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("PC 퀵바 토글 클릭됨", isQuickBarPcOpen);
      isQuickBarPcOpen ? closeQuickBarPc() : openQuickBarPc();
    },
    [isQuickBarPcOpen, openQuickBarPc, closeQuickBarPc]
  );

  // 모바일 퀵바 열기
  const openQuickBarMobile = useCallback(() => {
    setIsQuickBarMobileOpen(true);
    quickBarMobileRef.current?.classList.add(styles["is-open"]);
  }, []);

  // 모바일 퀵바 닫기
  const closeQuickBarMobile = useCallback(() => {
    setIsQuickBarMobileOpen(false);
    quickBarMobileRef.current?.classList.remove(styles["is-open"]);
  }, []);

  // 모바일 퀵바 토글
  const toggleQuickBarMobile = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("모바일 퀵바 토글 클릭됨", isQuickBarMobileOpen);
      isQuickBarMobileOpen ? closeQuickBarMobile() : openQuickBarMobile();
    },
    [isQuickBarMobileOpen, openQuickBarMobile, closeQuickBarMobile]
  );

  // 스크롤 이벤트 처리
  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => {
      const scrollY = lenis.scroll;
      const newIsScrolled = scrollY > 100;

      console.log("스크롤 이벤트:", {
        scrollY,
        newIsScrolled,
        isMobile,
        isQuickBarPcOpen,
      });

      setIsScrolled(newIsScrolled);

      // PC 퀵바 스크롤 처리
      if (!isMobile && quickBarPcRef.current) {
        if (newIsScrolled && !wasQuickBarPcScrolled) {
          console.log("PC 퀵바 스크롤 닫기");
          setWasQuickBarPcScrolled(true);
          quickBarPcRef.current.classList.add(styles.scrolled);

          if (isQuickBarPcOpen) {
            closeQuickBarPc();
          }
        } else if (!newIsScrolled && wasQuickBarPcScrolled) {
          console.log("PC 퀵바 스크롤 열기");
          setWasQuickBarPcScrolled(false);
          quickBarPcRef.current.classList.remove(styles.scrolled);

          if (!isQuickBarPcOpen) {
            openQuickBarPc();
          }
        }
      }
    };

    // 초기 스크롤 상태 확인
    handleScroll();

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis, isMobile]); // 의존성 배열 단순화

  // PC 퀵바 상태 변경 시 스크롤 상태 재확인
  useEffect(() => {
    if (!lenis || isMobile) return;

    const scrollY = lenis.scroll;
    const newIsScrolled = scrollY > 100;

    if (newIsScrolled && isQuickBarPcOpen) {
      console.log("초기 스크롤 상태에 따른 PC 퀵바 닫기");
      setWasQuickBarPcScrolled(true);
      closeQuickBarPc();
    }
  }, [lenis, isMobile, isQuickBarPcOpen, closeQuickBarPc]);

  // 모바일 외부 클릭 처리
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event) => {
      if (isQuickBarMobileOpen) {
        const targetElements = [
          quickBarMobileRef.current,
          quickBarMobileToggleBtnRef.current,
        ];
        const isInside = targetElements.some(
          (targetElement) =>
            targetElement && targetElement.contains(event.target)
        );

        if (!isInside) {
          closeQuickBarMobile();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobile, isQuickBarMobileOpen, closeQuickBarMobile]);

  // PC 버전 퀵바 (>768px)
  const PCQuickBar = () => (
    <div
      ref={quickBarPcRef}
      id="quickBarPc"
      className={`${styles.quickBarPc} ${
        isQuickBarPcOpen ? styles["is-open"] : ""
      } ${isScrolled ? styles.scrolled : ""}`}
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
            onClick={toggleQuickBarPc}
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
