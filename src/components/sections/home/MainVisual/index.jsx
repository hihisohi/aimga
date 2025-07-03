import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useEffect, useRef } from "react";

import styles from "./MainVisual.module.css";
import homeStyles from "../home.module.css";

export default function MainVisual() {
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
    <section className={homeStyles["sc__main-visual"]}>
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
                      Our goal is to treat the root cause of your discomfort—not{" "}
                      <br />
                      just the symptoms—while guiding you toward a healthier,
                      pain-free life
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
                        Most innovative chiropractic technologies and techniques
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
                      marathon runners, and individuals seeking long-term pain
                      relief.
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
  );
}
