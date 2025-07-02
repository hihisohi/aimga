"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function Home() {
  return (
    <div id="wrap">
      <main id="main">
        <section className={styles["sc__main-visual"]}>
          <div className={styles["sc-inner"]}>
            <Swiper
              grabCursor={true}
              loop={true}
              speed={500}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              onInit={(swiper) => {
                const currentSlide = swiper.slides[swiper.realIndex];
                const cover = currentSlide.querySelector(".main-visual-cover");
                if (cover) {
                  cover.style.opacity = 0;
                }

                // 메인 비주얼 인디케이터
                const progressCircle = document.querySelector(".progress");
                if (progressCircle) {
                  resetProgress(progressCircle);
                  startProgress(progressCircle);
                }
              }}
              onSlideChangeTransitionStart={(swiper) => {
                const progressCircle = document.querySelector(".progress");
                progressCircle && resetProgress(progressCircle);

                const indicatorNum = document.querySelector(".indicator-num");
                const currentSpan = indicatorNum.querySelector(".current");
                const nextSpan = indicatorNum.querySelector(".next");

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
              }}
              onSlideChangeTransitionEnd={(swiper) => {
                const progressCircle = document.querySelector(".progress");
                progressCircle && startProgress(progressCircle);
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className={styles["container-1360"]}>
                  <div className={styles["main-visual-tit"]}>
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
                        just the symptoms—while guiding you toward a healthier,
                        pain-free life
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles["main-visual-cover"]}></div>
              </SwiperSlide>
            </Swiper>

            <div className={styles["main-visual-swiper"]}>
              <div className={styles["swiper-wrapper"]}>
                <div
                  className={styles["swiper-slide"] + " " + styles["slide-1"]}
                ></div>
                <div
                  className={styles["swiper-slide"] + " " + styles["slide-2"]}
                >
                  <div className={styles["container-1360"]}>
                    <div className={styles["main-visual-tit"]}>
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
                  <div className={styles["main-visual-cover"]}></div>
                </div>
                <div
                  className={styles["swiper-slide"] + " " + styles["slide-3"]}
                >
                  <div className={styles["container-1360"]}>
                    <div className={styles["main-visual-tit"]}>
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
                  <div className={styles["main-visual-cover"]}></div>
                </div>
              </div>
            </div>
            <div className={styles["main-visual-indicator"]}>
              <div className={styles["indicator-circle"]}>
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <circle className={styles["track"]} cx="60" cy="60" r="54" />
                  <circle
                    className={styles["progress"]}
                    cx="60"
                    cy="60"
                    r="54"
                  />
                </svg>
              </div>
              <div className={styles["indicator-num"]}>
                <span className={styles["current"]}>01</span>
                <span className={styles["next"]}>02</span>
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
          <div className={styles["sc-inner"]}>
            <div className={styles["container-1360"] + " " + styles["df"]}>
              <div className={styles["intro-img-wrap"]}>
                <div className={styles["intro-img-inner"]}></div>
              </div>
              <div className={styles["intro-txt-wrap"]}>
                <div className={styles["main-sc-tit-wrap"]}>
                  <div>
                    <span className={styles["np"]}>
                      Advanced Injury & DISC Center
                    </span>
                    <h3 className={styles["tit"]}>Meet the Doctor</h3>
                  </div>
                  <div className={styles["desc"]}>
                    <p className={styles["bold"]}>Dr.Park</p>
                    <p>
                      At{" "}
                      <span className={styles["bold"]}>
                        Advanced Injury & DISC Center
                      </span>
                      , we are committed to helping patients recover from pain
                      and injury through chiropractic care,{" "}
                      <span className={styles["bold"]}>
                        auto injury rehabilitation
                      </span>
                      , non-surgical spinal decompression, and advanced soft
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
          <div
            className={
              styles["sc-inner"] + " " + styles["pd"] + " " + styles["df"]
            }
          >
            <div className={styles["subject-txt-wrap"]}>
              <div className={styles["main-sc-tit-wrap"]}>
                <div>
                  <span className={styles["np"]}>
                    Advanced Injury & DISC Center
                  </span>
                  <h3 className={styles["tit"]}>
                    Our Approach <br className={styles["none-960"]} />
                    to Treatment
                  </h3>
                </div>
                <div className={styles["desc"]}>
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
              <div
                className={
                  styles["swiper"] + " " + styles["main-subject-swiper"]
                }
              >
                <div className={styles["swiper-wrapper"]}>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Auto Injury</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Disc Herniated</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Sports Injury</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Neck Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Knee Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Low Back Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Sciatica</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Shoulder Pain</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["swiper-slide"]}>
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
                        <span className={styles["bold"]}>Hip Pain</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      styles["swiper-slide"] +
                      " " +
                      styles["blank-slide"] +
                      " " +
                      styles["none-960"]
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={styles["section"] + " " + styles["sc__main-equipment"]}
        >
          <div className={styles["sc-inner"] + " " + styles["pd"]}>
            <div className={styles["container-1360"]}>
              <div className={styles["equip-txt-wrap"]}>
                <div
                  className={styles["main-sc-tit-wrap"] + " " + styles["g-0"]}
                >
                  <span className={styles["np"]}>
                    Advanced Injury & DISC Center
                  </span>
                  <div className={styles["df"]}>
                    <div className={styles["df-item"]}>
                      <h3 className={styles["tit"]}>Specialized Equipment</h3>
                      <div className={styles["desc"]}>
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
          <div className={styles["sc-inner"] + " " + styles["pd"]}>
            <div className={styles["container-1360"]}>
              <div className={styles["technique-txt-wrap"]}>
                <div
                  className={styles["main-sc-tit-wrap"] + " " + styles["g-0"]}
                >
                  <h3 className={styles["tit"]}>Special treatment technique</h3>
                </div>
              </div>
              <div className={styles["technique-con-wrap"]}>
                <div className={styles["main-technique-btn-wrap"]}>
                  <button className={styles["main-technique-btn"]}>
                    Ring Dinger&reg;
                  </button>
                  <button className={styles["main-technique-btn"]}>CFR</button>
                </div>
                <div
                  className={
                    styles["swiper"] + " " + styles["main-technique-swiper"]
                  }
                >
                  <div className={styles["swiper-wrapper"]}>
                    <div className={styles["swiper-slide"]}>
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
                            src="/assets/img/pages/main/technique_video_01.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                          ></video>
                        </div>
                      </div>
                    </div>
                    <div className={styles["swiper-slide"]}>
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
                            src="/assets/img/pages/main/technique_video_02.mp4"
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
          <div className={styles["sc-inner"] + " " + styles["pd"]}>
            <div className={styles["container-1360"]}>
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
                  <h3 className={styles["tit"]}>Community</h3>
                </div>
              </div>
              <div className={styles["news-con-wrap"]}>
                <div
                  className={
                    styles["swiper"] + " " + styles["main-news-swiper"]
                  }
                >
                  <div className={styles["swiper-wrapper"]}>
                    <div className={styles["swiper-slide"]}>
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
                            2025 TOP DOCTORS,{" "}
                            <br className={styles["block-500"]} /> JANURY 2025
                          </strong>
                          <p>DR. HYUNG JOON PARK, DC</p>
                          <div className={styles["download-btn-wrap"]}>
                            <button
                              className={
                                styles["download-btn"] +
                                " " +
                                styles["img-dl-btn"]
                              }
                            >
                              <span className={styles["btn-txt"]}>
                                Image Viewer
                              </span>
                              <span className={styles["btn-icon"]}>
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
                              className={styles["download-btn"]}
                            >
                              <span className={styles["btn-txt"]}>
                                Download
                              </span>
                              <span className={styles["btn-icon"]}>
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
                    <div className={styles["swiper-slide"]}>
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
                            <button
                              className={
                                styles["download-btn"] +
                                " " +
                                styles["img-dl-btn"]
                              }
                            >
                              <span className={styles["btn-txt"]}>
                                Image Viewer
                              </span>
                              <span className={styles["btn-icon"]}>
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
                              className={styles["download-btn"]}
                            >
                              <span className={styles["btn-txt"]}>
                                Download
                              </span>
                              <span className={styles["btn-icon"]}>
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
                    <div className={styles["swiper-slide"]}>
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
                            <button
                              className={
                                styles["download-btn"] +
                                " " +
                                styles["img-dl-btn"]
                              }
                            >
                              <span className={styles["btn-txt"]}>
                                Image Viewer
                              </span>
                              <span className={styles["btn-icon"]}>
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
                              className={styles["download-btn"]}
                            >
                              <span className={styles["btn-txt"]}>
                                Download
                              </span>
                              <span className={styles["btn-icon"]}>
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
                    <div
                      className={
                        styles["news-swiper-btn-prev"] + " " + styles["c-btn"]
                      }
                    ></div>
                    <div
                      className={
                        styles["news-swiper-btn-next"] + " " + styles["c-btn"]
                      }
                    ></div>
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
