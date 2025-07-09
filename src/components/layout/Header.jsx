"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "../ui/Logo";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { GNB_MENU } from "@/config/gnb";
import gsap from "gsap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileHeader, setIsMobileHeader] = useState(false);
  const [isPcMenuOpen, setIsPcMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerInnerHeight, setHeaderInnerHeight] = useState(0);
  const [bgOverlayHeight, setBgOverlayHeight] = useState(0);

  const headerRef = useRef(null);
  const headerInnerRef = useRef(null);
  const depth1ListRef = useRef(null);
  const bgOverlayRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const lenis = useLenis();

  const handleMouseEnterDepth1List = (e) => {
    if (isMobileHeader) return;

    setIsPcMenuOpen(true);
    setIsHovered(true);
    animateHeaderHeight(bgOverlayRef.current, bgOverlayHeight);
    animateHeaderHeight(headerRef.current, headerHeight);
  };

  const handleMouseLeaveHeader = (e) => {
    if (isMobileHeader) return;

    setIsPcMenuOpen(false);
    setIsHovered(false);
    animateHeaderHeight(bgOverlayRef.current, 0);
    animateHeaderHeight(headerRef.current, headerInnerHeight);
  };

  const handleClickGnbToggleBtn = () => {
    if (isMobileHeader) {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsHovered(false);

        gsap.to(mobileMenuRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            mobileMenuRef.current.classList.remove("active");

            // mobileDepth1Items.forEach((item) => {
            //   const submenu = item.querySelector(".depth2");
            //   item.classList.remove("active");
            //   submenu.style.display = "none";
            //   submenu.style.height = 0;
            // });
          },
        });
      } else {
        setIsMobileMenuOpen(true);
        setIsHovered(true);

        gsap.to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          ease: "ease",
        });
      }
    } else {
      if (isPcMenuOpen) {
        setIsPcMenuOpen(false);
        setIsHovered(false);
        animateHeaderHeight(bgOverlayRef.current, 0);
        animateHeaderHeight(headerRef.current, headerInnerHeight);
      } else {
        setIsPcMenuOpen(true);
        setIsHovered(true);
        animateHeaderHeight(bgOverlayRef.current, bgOverlayHeight);
        animateHeaderHeight(headerRef.current, headerHeight);
      }
    }
  };

  const animateHeaderHeight = (el, to, duration = 300) => {
    const startHeight = el.getBoundingClientRect().height;
    const startTime = performance.now();

    function frame(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const height = startHeight + (to - startHeight) * progress;

      el.style.height = height + "px";

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  };

  useEffect(() => {
    if (lenis) {
      lenis.on("scroll", handleScrollWithLenis);

      setHeaderHeight(headerRef.current.scrollHeight);
      setHeaderInnerHeight(headerInnerRef.current.scrollHeight);
      setBgOverlayHeight(bgOverlayRef.current.scrollHeight);

      setIsMobileHeader(window.innerWidth <= 1280);

      return () => {
        lenis.off("scroll", handleScrollWithLenis);
      };
    } else {
      console.log("Lenis is not available yet");
    }
  }, [lenis]);

  const handleScrollWithLenis = (e) => {
    if (e.direction === 1) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }

    if (e.scroll > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div>
      <header
        ref={headerRef}
        className={`${styles["header"]} ${styles["type5"]} ${
          !isMobileHeader && isScrolledDown ? styles["scroll-down"] : ""
        } ${isScrolled ? styles["scrolled"] : ""} ${
          isHovered ? styles["hovered"] : ""
        }`}
        onMouseLeave={handleMouseLeaveHeader}
      >
        <div ref={headerInnerRef} className={styles["header_inner"]}>
          <div className={styles["flex-container"]}>
            <div className={styles["header-logo"]}>
              <Logo type={isHovered || isScrolled ? "en" : "en-wh"} href="/" />
            </div>
            <nav className={styles["gnb"]}>
              <h2 className="blind">Menu</h2>
              <div className={styles["gnb_wrapper"]}>
                <div className={styles["gnb_inner"]}>
                  <div className={styles["depth1_area"]}>
                    <ul
                      className={styles["depth1_list"]}
                      ref={depth1ListRef}
                      onMouseEnter={handleMouseEnterDepth1List}
                    >
                      {GNB_MENU.map((item) => (
                        <li className={styles["depth1_item"]} key={item.label}>
                          <a href={item.path} className={styles["depth1_link"]}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <div className={styles["header-utils"]}>
              <div className={styles["header-util-lang"]}>
                <a className={styles["lang-link"]} href="">
                  <span>
                    <Image
                      src="/images/common/icon/flag-ko.svg"
                      alt="한국어"
                      width={20}
                      height={15}
                    />
                  </span>
                  <span className={styles["none-500"]}>한국어</span>
                </a>
                <a
                  className={styles["lang-link"] + " " + styles["active"]}
                  href=""
                >
                  <span>
                    <Image
                      src="/images/common/icon/flag-en.svg"
                      alt="English"
                      width={20}
                      height={15}
                    />
                  </span>
                  <span className={styles["none-500"]}>English</span>
                </a>
              </div>
              <div className={styles["header-util-tel"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0_20_1907)">
                    <path d="M15.0667 16.5971C13.2148 16.5971 11.3852 16.1934 9.57778 15.386C7.77037 14.5786 6.12593 13.4341 4.64444 11.9527C3.16296 10.4712 2.01852 8.82674 1.21111 7.01933C0.403704 5.21192 0 3.38229 0 1.53044C0 1.26377 0.0888889 1.04155 0.266667 0.863774C0.444444 0.685996 0.666667 0.597107 0.933333 0.597107H4.53333C4.74074 0.597107 4.92593 0.667477 5.08889 0.808218C5.25185 0.948959 5.34815 1.11563 5.37778 1.30822L5.95556 4.41933C5.98519 4.65637 5.97778 4.85637 5.93333 5.01933C5.88889 5.18229 5.80741 5.32303 5.68889 5.44155L3.53333 7.61933C3.82963 8.16748 4.18148 8.69711 4.58889 9.20822C4.9963 9.71933 5.44444 10.2119 5.93333 10.686C6.39259 11.1453 6.87407 11.5712 7.37778 11.9638C7.88148 12.3564 8.41481 12.7156 8.97778 13.0416L11.0667 10.9527C11.2 10.8193 11.3741 10.7193 11.5889 10.6527C11.8037 10.586 12.0148 10.5675 12.2222 10.5971L15.2889 11.2193C15.4963 11.2786 15.6667 11.386 15.8 11.5416C15.9333 11.6971 16 11.8712 16 12.0638V15.6638C16 15.9304 15.9111 16.1527 15.7333 16.3304C15.5556 16.5082 15.3333 16.5971 15.0667 16.5971Z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_20_1907">
                      <rect
                        width="16"
                        height="16.8889"
                        fill="white"
                        transform="translate(0 0.317444)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <a href="">Reservation 770-734-5460</a>
              </div>
              <button
                className={`${styles["gnb-toggle-btn"]} ${
                  isPcMenuOpen ? styles["open"] : styles["close"]
                }`}
                onClick={handleClickGnbToggleBtn}
              >
                <span className="blind">메뉴 열기</span>
                <div className={styles["gnb-toggle-btn-inner"]}>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div ref={bgOverlayRef} className={styles["gnb_overlay_bg"]}>
          {GNB_MENU.map((item) => (
            <div className={styles["depth2_area"]} key={item.label}>
              <div className={styles["depth2_area-title"]}>{item.label}</div>
              <ul className={styles["depth2_list"]}>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <a
                      href={item.path + child.path}
                      className={styles["depth2_link"]}
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles["mobile-menu"]} ref={mobileMenuRef}>
          <nav className={styles["main_nav_mobile"]} aria-label="메인 메뉴">
            <ul className={styles["m-gnb"]}>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  About the clinic{" "}
                </a>

                <ul
                  className={styles["depth2"]}
                  aria-label="About the clinic 서브메뉴"
                >
                  <li className={styles["depth2_item"]}>
                    <a href="">About US </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Dr. Park </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Hours&amp;Direction </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Integrated Medicine </a>
                  </li>
                </ul>
              </li>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  Equipment{" "}
                </a>

                <ul
                  className={styles["depth2"]}
                  aria-label="Equipment 서브메뉴"
                >
                  <li className={styles["depth2_item"]}>
                    <a href="">DMX </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">DRX 9000 </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">LLLT(ML-830) </a>
                  </li>
                </ul>
              </li>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  Conditions{" "}
                </a>

                <ul
                  className={styles["depth2"]}
                  aria-label="Conditions 서브메뉴"
                >
                  <li className={styles["depth2_item"]}>
                    <a href="">Disc Herniated </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Knee pain </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Neck pain </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Shoulder pain </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Sciatica </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Low Back pain </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Hip pain </a>
                  </li>
                </ul>
              </li>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  Auto Injury{" "}
                </a>

                <ul
                  className={styles["depth2"]}
                  aria-label="Auto Injury 서브메뉴"
                >
                  <li className={styles["depth2_item"]}>
                    <a href="">Auto Injury </a>
                  </li>
                </ul>
              </li>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  Spinal Decompression{" "}
                </a>

                <ul
                  className={styles["depth2"]}
                  aria-label="Spinal Decompression 서브메뉴"
                >
                  <li className={styles["depth2_item"]}>
                    <a href="">Spinal Decompression </a>
                  </li>
                </ul>
              </li>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  Sports Injury{" "}
                </a>

                <ul
                  className={styles["depth2"]}
                  aria-label="Sports Injury 서브메뉴"
                >
                  <li className={styles["depth2_item"]}>
                    <a href="">Sports Injury </a>
                  </li>
                </ul>
              </li>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  Chiropractic Care{" "}
                </a>

                <ul
                  className={styles["depth2"]}
                  aria-label="Chiropractic Care 서브메뉴"
                >
                  <li className={styles["depth2_item"]}>
                    <a href="">Why Chiropractic Care is Needed </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">What is Chiropractic </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Chiropractic Care </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Non-invasive Treatment </a>
                  </li>
                </ul>
              </li>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  Care{" "}
                </a>

                <ul className={styles["depth2"]} aria-label="Care 서브메뉴">
                  <li className={styles["depth2_item"]}>
                    <a href="">ESWT </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">PT &amp; Rehab </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Craniofacial Release </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Ring Dinger </a>
                  </li>
                </ul>
              </li>
              <li className={styles["depth1_item"]}>
                <a href="" className={styles["depth1_link"]}>
                  Community{" "}
                </a>

                <ul
                  className={styles["depth2"]}
                  aria-label="Community 서브메뉴"
                >
                  <li className={styles["depth2_item"]}>
                    <a href="">Contact </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Notice </a>
                  </li>
                  <li className={styles["depth2_item"]}>
                    <a href="">Ask Dr. Park </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={styles["mobile-menu-overlay"]}></div>
    </div>
  );
}
