import styles from "./MainTechnique.module.css";
import homeStyles from "../home.module.css";
import { useRef, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import { useLenis } from "@/hooks/useLenis";

export default function MainTechnique() {
  const movingTextRef = useRef(null);
  const movingTextParentRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const buttonRefs = useRef([]);

  let sectionTop, sectionHeight, sectionWidth, isWidth960;

  const lenis = useLenis();

  // lenis 스크롤 이벤트 리스너 추가
  useEffect(() => {
    if (lenis) {
      sectionTop = movingTextParentRef.current.offsetTop;
      sectionHeight = movingTextParentRef.current.offsetHeight;
      sectionWidth = movingTextParentRef.current.offsetWidth;
      isWidth960 = window.innerWidth <= 960;

      lenis.on("scroll", () =>
        handleScroll(sectionTop, sectionHeight, sectionWidth)
      );

      return () => {
        lenis.off("scroll", () =>
          handleScroll(sectionTop, sectionHeight, sectionWidth)
        );
      };
    } else {
      console.log("Lenis is not available yet");
    }
  }, [lenis]);

  const handleScroll = (sectionTop, sectionHeight, sectionWidth) => {
    const progress = Math.min(
      Math.max(
        (lenis.scroll - sectionTop + window.innerHeight) /
          (sectionHeight + window.innerHeight),
        0
      ),
      1
    );

    if (!isWidth960) {
      const rightY = progress * -sectionHeight * 0.6;
      setTransform(`translateY(${rightY}px) rotate(90deg)`);
    } else {
      const leftY = progress * -sectionWidth * 0.8;
      setTransform(`translateX(${leftY}px)`);
    }
  };

  const handleButtonClick = (index, swiper) => {
    setActiveButtonIndex(index);
    swiper.slideTo(index);
  };

  return (
    <section
      className={`${homeStyles["section"]} ${styles["sc__main-technique"]}`}
      data-fade-trigger
      ref={movingTextParentRef}
    >
      <div
        ref={movingTextRef}
        className={styles["side-text"]}
        style={{ transform }}
      >
        <span>Advanced Injury & DISC Center</span>
        <span>Advanced Injury & DISC Center</span>
        <span>Advanced Injury & DISC Center</span>
        <span>Advanced Injury & DISC Center</span>
        <span>Advanced Injury & DISC Center</span>
      </div>
      <div className="sc-inner pd">
        <div className="container-1360">
          <div
            className={styles["technique-txt-wrap"]}
            data-fade="right"
            data-fade-distance="60"
            data-fade-duration="0.6"
          >
            <div
              className={`${homeStyles["main-sc-tit-wrap"]} ${homeStyles["g-0"]}`}
            >
              <h3
                className={`${homeStyles["main-sc-tit"]} ${homeStyles["color-wh"]} mb20`}
              >
                Special treatment technique
              </h3>
            </div>
          </div>
          <div
            className={styles["technique-con-wrap"]}
            data-fade="left"
            data-fade-distance="60"
            data-fade-duration="0.6"
          >
            <div className={styles["main-technique-btn-wrap"]}>
              <button
                ref={(el) => (buttonRefs.current[0] = el)}
                className={`${styles["main-technique-btn"]} ${
                  activeButtonIndex === 0 ? styles["active"] : ""
                }`}
              >
                Ring Dinger&reg;
              </button>
              <button
                ref={(el) => (buttonRefs.current[1] = el)}
                className={`${styles["main-technique-btn"]} ${
                  activeButtonIndex === 1 ? styles["active"] : ""
                }`}
              >
                CFR
              </button>
            </div>
            <Swiper
              className={styles["main-technique-swiper"]}
              grabCursor={true}
              effect={"creative"}
              speed={500}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              creativeEffect={{
                prev: {
                  shadow: false,
                  scale: 0.96,
                  translate: [0, 20, 0],
                  opacity: 0,
                },
                next: {
                  shadow: false,
                  scale: 0.96,
                  translate: [0, -20, 0],
                  opacity: 0.8,
                },
              }}
              modules={[EffectCreative]}
              onInit={(swiper) => {
                // Swiper 초기화 시 첫 번째 버튼을 활성화
                setActiveButtonIndex(0);

                // 버튼 클릭 핸들러에 swiper 인스턴스 전달
                buttonRefs.current.forEach((btn, index) => {
                  if (btn) {
                    btn.onclick = () => handleButtonClick(index, swiper);
                  }
                });
              }}
              onRealIndexChange={(swiper) => {
                setActiveButtonIndex(swiper.activeIndex);
              }}
            >
              <SwiperSlide>
                <div className={styles["technique-cnt-inner"]}>
                  <div className={styles["technique-cnt-text"]}>
                    <strong>Ring Dinger&reg;</strong>
                    <div>
                      <p>
                        A powerful, registered technique designed to decompress
                        the entire spinal column in one controlled motion—ideal
                        for severe nerve compression and herniated discs.
                      </p>
                      <div className={homeStyles["go-page-link"]}>
                        <a href="">
                          <div className={homeStyles["link-txt"]}>
                            <span>View More</span>
                          </div>
                          <span className={homeStyles["link-icon"]}></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles["technique-cnt-image"]}>
                    <video
                      src="/images/pages/main/technique_video_01.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles["technique-cnt-inner"]}>
                  <div className={styles["technique-cnt-text"]}>
                    <strong>
                      CFR <br />
                      <span>(Cranial Facial Release)</span>
                    </strong>
                    <div>
                      <p>
                        A specialized cranial adjustment technique using gentle
                        nasal balloon inflation—designed to restore balance,
                        relieve nerve tension, and support full-body wellness.
                      </p>
                      <div className={homeStyles["go-page-link"]}>
                        <a href="/pages/treatment/cfr.php">
                          <div className={homeStyles["link-txt"]}>
                            <span>View More</span>
                          </div>
                          <span className={homeStyles["link-icon"]}></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles["technique-cnt-image"]}>
                    <video
                      src="/images/pages/main/technique_video_02.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
