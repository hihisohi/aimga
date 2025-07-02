"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef } from "react";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const progressRef = useRef(null);
  const indicatorNumRef = useRef(null);
  const currentSpanRef = useRef(null);
  const nextSpanRef = useRef(null);

  // Progress 관련 함수들
  const resetProgress = (progressElement) => {
    if (progressElement) {
      progressElement.style.strokeDashoffset = "339.29";
      progressElement.style.transition = "none";
    }
  };

  const startProgress = (progressElement) => {
    if (progressElement) {
      // 약간의 지연 후 애니메이션 시작
      setTimeout(() => {
        progressElement.style.transition = "stroke-dashoffset 4s linear";
        progressElement.style.strokeDashoffset = "0";
      }, 100);
    }
  };

  useEffect(() => {
    // 초기 progress 시작
    if (progressRef.current) {
      startProgress(progressRef.current);
    }
  }, []);

  return (
    <div id="wrap">
      <main id="main">
        <section className={styles["sc__main-visual"]}>
          <div className="sc-inner">
            <Swiper
              grabCursor={true}
              loop={true}
              speed={500}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className={styles["main-visual-swiper"]}
              onInit={(swiper) => {
                const currentSlide = swiper.slides[swiper.realIndex];
                const cover = currentSlide.querySelector(
                  `.${styles["main-visual-cover"]}`
                );
                if (cover) {
                  cover.style.opacity = 0;
                }

                // 메인 비주얼 인디케이터
                if (progressRef.current) {
                  resetProgress(progressRef.current);
                  startProgress(progressRef.current);
                }
              }}
              onSlideChangeTransitionStart={(swiper) => {
                if (progressRef.current) {
                  resetProgress(progressRef.current);
                }

                if (indicatorNumRef.current) {
                  const currentSpan = currentSpanRef.current;
                  const nextSpan = nextSpanRef.current;

                  if (currentSpan && nextSpan) {
                    const nextNumber = `0${swiper.realIndex + 1}`;
                    nextSpan.textContent = nextNumber;

                    // 애니메이션 트리거
                    currentSpan.style.transition = "all 0.4s ease";
                    nextSpan.style.transition = "all 0.4s ease";
                    currentSpan.style.transform = "translate(-50%, 100%)";
                    currentSpan.style.opacity = "0";
                    nextSpan.style.transform = "translate(-50%, 0%)";
                    nextSpan.style.opacity = "1";

                    // 애니메이션 완료 후 클래스 역할 교체
                    setTimeout(() => {
                      currentSpan.textContent = nextNumber;

                      // reset
                      currentSpan.style.transition = "none";
                      nextSpan.style.transition = "none";
                      currentSpan.style.transform = "translate(-50%, 0%)";
                      currentSpan.style.opacity = "1";
                      nextSpan.style.transform = "translate(-50%, -50%)";
                      nextSpan.style.opacity = "0";
                    }, 400); // CSS transition 시간과 맞춤
                  }
                }
              }}
              onSlideChangeTransitionEnd={(swiper) => {
                if (progressRef.current) {
                  startProgress(progressRef.current);
                }
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide className={styles["slide-1"]}>
                <div className="container-1360">
                  <div className={styles["main-visual-tit"]}>
                    <div>
                      <h3>
                        <span>
                          <span className={styles["text-en"]}>
                            26 Years of Excellence
                          </span>
                        </span>
                        <span
                          className={
                            styles["bold"] + " " + styles["slide-up-wrapper"]
                          }
                        >
                          <span>
                            Advanced Injury & <br /> DISC Center
                          </span>
                        </span>
                      </h3>
                      <p>
                        <span>
                          Our goal is to treat the root cause of your
                          discomfort—not <br />
                          just the symptoms—while guiding you toward a
                          healthier, pain-free life
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles["main-visual-cover"]}></div>
              </SwiperSlide>
              <SwiperSlide className={styles["slide-2"]}>
                <div className="container-1360">
                  <div className={styles["main-visual-tit"]}>
                    <div>
                      <h3>
                        <span>
                          <span className={styles["text-en"]}>
                            Reviving Your Disc, <br />
                            Renewing Your Life.
                          </span>
                        </span>
                        <span
                          className={
                            styles["bold"] + " " + styles["slide-up-wrapper"]
                          }
                        >
                          <span>
                            Most innovative chiropractic technologies and
                            techniques
                          </span>
                        </span>
                      </h3>
                      <p>
                        <span>
                          available to create highly personalized care plans
                          tailored <br />
                          to each individual&apos;s needs
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles["main-visual-cover"]}></div>
              </SwiperSlide>
              <SwiperSlide className={styles["slide-3"]}>
                <div className="container-1360">
                  <div className={styles["main-visual-tit"]}>
                    <div>
                      <h3>
                        <span>
                          <span className={styles["text-en"]}>
                            Expert Care for Every Injury, <br />
                            Every DISC, & Every Time.
                          </span>
                        </span>
                        <span
                          className={
                            styles["bold"] + " " + styles["slide-up-wrapper"]
                          }
                        >
                          <span>
                            We provide <br />
                            customized treatments.
                          </span>
                        </span>
                      </h3>
                      <p>
                        <span>
                          from those needing post-auto injury care to weekend
                          warriors, <br />
                          marathon runners, and individuals seeking long-term
                          pain relief.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles["main-visual-cover"]}></div>
              </SwiperSlide>
            </Swiper>
            <div className={styles["main-visual-indicator"]}>
              <div className={styles["indicator-circle"]}>
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <circle className={styles["track"]} cx="60" cy="60" r="54" />
                  <circle
                    ref={progressRef}
                    className={styles["progress"]}
                    cx="60"
                    cy="60"
                    r="54"
                  />
                </svg>
              </div>
              <div ref={indicatorNumRef} className={styles["indicator-num"]}>
                <span ref={currentSpanRef} className={styles["current"]}>
                  01
                </span>
                <span ref={nextSpanRef} className={styles["next"]}>
                  02
                </span>
              </div>
            </div>
            <div className={styles["scroll-hint"]}>
              <div>Scroll Down</div>
              <div className={styles["scroll-hint-bar"]}>
                <span></span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["section"] + " " + styles["sc__main-intro"]}>
          <div className="sc-inner">
            <div className="container-1360 df">
              <div className={styles["intro-img-wrap"]}>
                <div className={styles["intro-img-inner"]}></div>
              </div>
              <div className={styles["intro-txt-wrap"]}>
                <div className={styles["main-sc-tit-wrap"]}>
                  <div>
                    <span className="np">Advanced Injury & DISC Center</span>
                    <h3 className="tit">Meet the Doctor</h3>
                  </div>
                  <div className="desc">
                    <p className="bold">Dr.Park</p>
                    <p>
                      At{" "}
                      <span className="bold">
                        Advanced Injury & DISC Center
                      </span>
                      , we are committed to helping patients recover from pain
                      and injury through chiropractic care,{" "}
                      <span className="bold">auto injury rehabilitation</span>,
                      non-surgical spinal decompression, and advanced soft
                      tissue therapy.
                    </p>
                    <p>
                      Whether you&apos;re recovering from a car accident,
                      dealing with chronic spinal issues, or seeking preventive
                      care, we offer gentle, non-invasive solutions, including
                      DRX9000 spinal decompression therapy, to support your
                      healing process.
                    </p>
                  </div>
                  <div className={styles["go-page-link"]}>
                    <a href="/pages/about/clinic.php">
                      <div className={styles["link-txt"]}>
                        <span>About US</span>
                      </div>
                      <span className={styles["link-icon"]}></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={styles["section"] + " " + styles["sc__main-subject"]}
        >
          <span className={styles["bg"]}></span>
          <div className="sc-inner pd df">
            <div className={styles["subject-txt-wrap"]}>
              <div className={styles["main-sc-tit-wrap"]}>
                <div>
                  <span className="np">Advanced Injury & DISC Center</span>
                  <h3 className="tit">
                    Our Approach <br className="none-960" />
                    to Treatment
                  </h3>
                </div>
                <div className="desc">
                  <p>
                    Our goal is to treat the root cause of your discomfort—not
                    just the symptoms—while guiding you toward a healthier,
                    pain-free life.
                  </p>
                </div>
                <div className={styles["go-page-link"]}>
                  <a href="/pages/disease/disc.php">
                    <div className={styles["link-txt"]}>
                      <span>View More</span>
                    </div>
                    <span className={styles["link-icon"]}></span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles["subject-con-wrap"]}>
              <div className={"swiper main-subject-swiper"}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_01.png"
                          alt="Auto Injury"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Auto Injury</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_02.png"
                          alt="Disc Herniated"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Disc Herniated</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_03.png"
                          alt="Sports Injury"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Sports Injury</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_04.png"
                          alt="Neck Pain"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Neck Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_05.png"
                          alt="Knee Pain"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Knee Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_06.png"
                          alt="Low Back Pain"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Low Back Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_07.png"
                          alt="Sciatica"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Sciatica</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_08.png"
                          alt="Shoulder Pain"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Shoulder Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={styles["subject-item-inner"]}>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/subject_img_09.png"
                          alt="Hip Pain"
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className={styles["text"]}>
                        <span className="bold">Hip Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className={"swiper-slide blank-slide none-960"}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={styles["section"] + " " + styles["sc__main-equipment"]}
        >
          <div className="sc-inner pd">
            <div className="container-1360">
              <div className={styles["equip-txt-wrap"]}>
                <div
                  className={styles["main-sc-tit-wrap"] + " " + styles["g-0"]}
                >
                  <span className="np">Advanced Injury & DISC Center</span>
                  <div className="df">
                    <div className="df-item">
                      <h3>Specialized Equipment</h3>
                      <div className="desc">
                        <p>
                          To ensure the highest standard of care, we utilize
                          state-of-the-art equipment and provide personalized
                          treatment tailored to each patient.
                        </p>
                      </div>
                    </div>
                    <div className={styles["go-page-link"]}>
                      <a href="/pages/equipment/dmx.php">
                        <div className={styles["link-txt"]}>
                          <span>View More</span>
                        </div>
                        <span className={styles["link-icon"]}></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["equip-con-wrap"]}>
                <ul className={styles["equip-list"]}>
                  <li
                    className={
                      styles["equip-item"] + " " + styles["equip-drx9000"]
                    }
                  >
                    <a href="/pages/equipment/drx9000.php">
                      <div className={styles["text"]}>
                        <strong>DRX9000</strong>
                        <p>
                          Non-Surgical Spinal Decompression with the DRX-9000
                        </p>
                      </div>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/equip_img_01.png"
                          alt="DRX9000 Equipment"
                          width={400}
                          height={300}
                        />
                      </div>
                    </a>
                  </li>
                  <li
                    className={styles["equip-item"] + " " + styles["equip-dmx"]}
                  >
                    <a href="/pages/equipment/dmx.php">
                      <div className={styles["text"]}>
                        <strong>DMX</strong>
                        <p>
                          This cutting-edge imaging technology is primarily used
                          to evaluate spinal instability
                        </p>
                      </div>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/equip_img_02.png"
                          alt="DMX Equipment"
                          width={400}
                          height={300}
                        />
                      </div>
                    </a>
                  </li>
                  <li
                    className={
                      styles["equip-item"] + " " + styles["equip-lllt"]
                    }
                  >
                    <a href="/pages/equipment/lllt.php">
                      <div className={styles["text"]}>
                        <strong>LLLT(ML-830)</strong>
                        <p>
                          cutting-edge technology that is gaining popularity for
                          its ability to promote healing, reduce pain and
                          inflammation, and restore function in the body.
                        </p>
                      </div>
                      <div className={styles["image"]}>
                        <Image
                          src="/images/pages/main/equip_img_03.png"
                          alt="LLLT Equipment"
                          width={400}
                          height={300}
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className={styles["section"] + " " + styles["sc__main-technique"]}
        >
          <div className={styles["side-text"]}>
            <span>Advanced Injury & DISC Center</span>
            <span>Advanced Injury & DISC Center</span>
            <span>Advanced Injury & DISC Center</span>
            <span>Advanced Injury & DISC Center</span>
            <span>Advanced Injury & DISC Center</span>
          </div>
          <div className="sc-inner pd">
            <div className="container-1360">
              <div className={styles["technique-txt-wrap"]}>
                <div
                  className={styles["main-sc-tit-wrap"] + " " + styles["g-0"]}
                >
                  <h3>Special treatment technique</h3>
                </div>
              </div>
              <div className={styles["technique-con-wrap"]}>
                <div className={styles["main-technique-btn-wrap"]}>
                  <button className={styles["main-technique-btn"]}>
                    Ring Dinger&reg;
                  </button>
                  <button className={styles["main-technique-btn"]}>CFR</button>
                </div>
                <div className={"swiper main-technique-swiper"}>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className={styles["technique-cnt-inner"]}>
                        <div className={styles["text"]}>
                          <strong>Ring Dinger&reg;</strong>
                          <div>
                            <p>
                              A powerful, registered technique designed to
                              decompress the entire spinal column in one
                              controlled motion—ideal for severe nerve
                              compression and herniated discs.
                            </p>
                            <div className={styles["go-page-link"]}>
                              <a href="/pages/treatment/ring-dinger.php">
                                <div className={styles["link-txt"]}>
                                  <span>View More</span>
                                </div>
                                <span className={styles["link-icon"]}></span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={styles["image"]}>
                          <video
                            src="/images/pages/main/technique_video_01.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                          ></video>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={styles["technique-cnt-inner"]}>
                        <div className={styles["text"]}>
                          <strong>
                            CFR <br />
                            <span>(Cranial Facial Release)</span>
                          </strong>
                          <div>
                            <p>
                              A specialized cranial adjustment technique using
                              gentle nasal balloon inflation—designed to restore
                              balance, relieve nerve tension, and support
                              full-body wellness.
                            </p>
                            <div className={styles["go-page-link"]}>
                              <a href="/pages/treatment/cfr.php">
                                <div className={styles["link-txt"]}>
                                  <span>View More</span>
                                </div>
                                <span className={styles["link-icon"]}></span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={styles["image"]}>
                          <video
                            src="/images/pages/main/technique_video_02.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                          ></video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["section"] + " " + styles["sc__main-news"]}>
          <div className="sc-inner pd">
            <div className="container-1360">
              <div className={styles["news-txt-wrap"]}>
                <div
                  className={
                    styles["main-sc-tit-wrap"] +
                    " " +
                    styles["center"] +
                    " " +
                    styles["tac"] +
                    " " +
                    styles["g-0"]
                  }
                >
                  <h3>Community</h3>
                </div>
              </div>
              <div className={styles["news-con-wrap"]}>
                <div className={"swiper main-news-swiper"}>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className={styles["news-item-inner"]}>
                        <div className={styles["image"]}>
                          <Image
                            src="/images/pages/main/news_img_01.png"
                            alt="2025 TOP DOCTORS"
                            width={400}
                            height={300}
                          />
                        </div>
                        <div className={styles["text"]}>
                          <strong>
                            2025 TOP DOCTORS, <br className="block-500" />{" "}
                            JANURY 2025
                          </strong>
                          <p>DR. HYUNG JOON PARK, DC</p>
                          <div className={styles["download-btn-wrap"]}>
                            <button className={"download-btn img-dl-btn"}>
                              <span className="btn-txt">Image Viewer</span>
                              <span className="btn-icon">
                                <Image
                                  src="/images/common/icon/download-image.svg"
                                  alt="Download Image Icon"
                                  width={20}
                                  height={20}
                                />
                              </span>
                            </button>
                            <a
                              href="/images/pages/main/news_detail_img01.png"
                              download="2025 TOP DOCTORS, JANURY 2025.png"
                              className="download-btn"
                            >
                              <span className="btn-txt">Download</span>
                              <span className="btn-icon">
                                <Image
                                  src="/images/common/icon/download.svg"
                                  alt="Download Icon"
                                  width={20}
                                  height={20}
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={styles["news-item-inner"]}>
                        <div className={styles["image"]}>
                          <Image
                            src="/images/pages/main/news_img_02.png"
                            alt="2022's BEST SPINAL DECOMPTESSION DOCTORS"
                            width={400}
                            height={300}
                          />
                        </div>
                        <div className={styles["text"]}>
                          <strong>
                            2022&apos;s BEST SPINAL <br />
                            DECOMPTESSION DOCTORS <br />
                            IN AMERICA
                          </strong>
                          <p>DR. HYUNG JOON PARK, DC</p>
                          <div className={styles["download-btn-wrap"]}>
                            <button className={"download-btn img-dl-btn"}>
                              <span className="btn-txt">Image Viewer</span>
                              <span className="btn-icon">
                                <Image
                                  src="/images/common/icon/download-image.svg"
                                  alt="Download Image Icon"
                                  width={20}
                                  height={20}
                                />
                              </span>
                            </button>
                            <a
                              href="/images/pages/main/news_detail_img02.png"
                              download="2022's BEST SPINAL DECOMPTECTION DOCTORS IN AMERICA.png"
                              className="download-btn"
                            >
                              <span className="btn-txt">Download</span>
                              <span className="btn-icon">
                                <Image
                                  src="/images/common/icon/download.svg"
                                  alt="Download Icon"
                                  width={20}
                                  height={20}
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className={styles["news-item-inner"]}>
                        <div className={styles["image"]}>
                          <Image
                            src="/images/pages/main/news_img_03.png"
                            alt="2022's BEST NEUROPATHY PHYSICIANS"
                            width={400}
                            height={300}
                          />
                        </div>
                        <div className={styles["text"]}>
                          <strong>
                            2022&apos;s BEST NEUROPATHY <br />
                            PHYSICIANS IN AMERICA
                          </strong>
                          <p>DR. HYUNG JOON PARK, DC</p>
                          <div className={styles["download-btn-wrap"]}>
                            <button className={"download-btn img-dl-btn"}>
                              <span className="btn-txt">Image Viewer</span>
                              <span className="btn-icon">
                                <Image
                                  src="/images/common/icon/download-image.svg"
                                  alt="Download Image Icon"
                                  width={20}
                                  height={20}
                                />
                              </span>
                            </button>
                            <a
                              href="/images/pages/main/news_detail_img03.png"
                              download="2022's BEST NEUROPATHY PHYSICIANS IN AMERICA.png"
                              className="download-btn"
                            >
                              <span className="btn-txt">Download</span>
                              <span className="btn-icon">
                                <Image
                                  src="/images/common/icon/download.svg"
                                  alt="Download Icon"
                                  width={20}
                                  height={20}
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["news-swiper-btns"]}>
                    <div className={"news-swiper-btn-prev c-btn"}></div>
                    <div className={"news-swiper-btn-next c-btn"}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
