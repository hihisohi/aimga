import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className={styles["header"] + " " + styles["type5"]}>
        <div className={styles["header_inner"]}>
          <div className={styles["flex-container"]}>
            <h1 className={styles["header-logo"]}>
              <a href="">
                <span className={styles["header-logo-img"]}>
                  <Image
                    className={styles["default-logo"]}
                    src="/images/common/logo/logo-en-wh.svg"
                    alt="Advanced Injury &amp; DISC Center"
                    width={200}
                    height={50}
                  />
                  <Image
                    className={styles["hover-logo"]}
                    src="/images/common/logo/logo-en.svg"
                    alt="Advanced Injury &amp; DISC Center"
                    width={200}
                    height={50}
                  />
                </span>
                <span className="blind">Advanced Injury &amp; DISC Center</span>
              </a>
            </h1>
            <nav className={styles["gnb"]}>
              <h2 className="blind">Menu</h2>
              <div className={styles["gnb_wrapper"]}>
                <div className={styles["gnb_inner"]}>
                  <div className={styles["depth1_area"]}>
                    <ul className={styles["depth1_list"]}>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          About the clinic
                        </a>
                      </li>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          Equipment
                        </a>
                      </li>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          Conditions
                        </a>
                      </li>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          Auto Injury
                        </a>
                      </li>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          Spinal Decompression
                        </a>
                      </li>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          Sports Injury
                        </a>
                      </li>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          Chiropractic Care
                        </a>
                      </li>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          Care
                        </a>
                      </li>
                      <li className={styles["depth1_item"]}>
                        <a href="" className={styles["depth1_link"]}>
                          Community
                        </a>
                      </li>
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
                className={styles["gnb-toggle-btn"] + " " + styles["close"]}
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
        <div className={styles["gnb_overlay_bg"]}>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>About the clinic</div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  About US
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Dr. Park
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Hours&amp;Direction
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Integrated Medicine
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>Equipment</div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  DMX
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  DRX 9000
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  LLLT(ML-830)
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>Conditions</div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Disc Herniated
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Knee pain
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Neck pain
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Shoulder pain
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Sciatica
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Low Back pain
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Hip pain
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>Auto Injury</div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Auto Injury
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>
              Spinal Decompression
            </div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Spinal Decompression
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>Sports Injury</div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Sports Injury
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>Chiropractic Care</div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Why Chiropractic Care is Needed
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  What is Chiropractic
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Chiropractic Care
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Non-invasive Treatment
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>Care</div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  ESWT
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  PT &amp; Rehab
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Craniofacial Release
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Ring Dinger
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["depth2_area"]}>
            <div className={styles["depth2_area-title"]}>Community</div>
            <ul className={styles["depth2_list"]}>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Contact
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Notice
                </a>
              </li>
              <li>
                <a href="" className={styles["depth2_link"]}>
                  Ask Dr. Park
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["mobile-menu"]}>
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
