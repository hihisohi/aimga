"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./QuickBarMobile.module.css";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function QuickBarMobile() {
  const [isOpen, setIsOpen] = useState(true);

  const quickBarMobileRef = useRef(null);
  const quickLinkListWrapRef = useRef(null);
  const quickBarMobileToggleBtnRef = useRef(null);

  const handleClickMobileToggleBtn = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(
    [quickBarMobileRef, quickBarMobileToggleBtnRef],
    () => setIsOpen(false),
    isOpen
  );

  return (
    <div
      ref={quickBarMobileRef}
      id="quickBarMobile"
      className={`${styles.quickBarMobile} ${isOpen ? styles["is-open"] : ""}`}
    >
      <div className={styles["quick-bar-inner"]}>
        <div className={styles["quick-bar-btn-wrap"]}>
          <button
            ref={quickBarMobileToggleBtnRef}
            className={styles["btn-toggle__quick-bar"]}
            onClick={handleClickMobileToggleBtn}
          >
            <span
              className={`${styles["btn-icon"]} ${styles["btn-close-icon"]}`}
            >
              contact
            </span>
          </button>
        </div>
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
              <a href="">
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
              <a href="">
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
}
