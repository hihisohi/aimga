import styles from "./MainTechnique.module.css";
import homeStyles from "../home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

export default function MainTechnique() {
  return (
    <section
      className={`${homeStyles["section"]} ${styles["sc__main-technique"]}`}
      data-fade-trigger
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
              <button className={styles["main-technique-btn"]}>
                Ring Dinger&reg;
              </button>
              <button className={styles["main-technique-btn"]}>CFR</button>
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
                const mainTechniqueButtons = document.querySelectorAll(
                  ".main-technique-btn"
                );

                if (mainTechniqueButtons.length > 0) {
                  mainTechniqueButtons.forEach((btn) => {
                    if (btn.dataset.index === swiper.activeIndex.toString()) {
                      btn.classList.add("active");
                    }

                    btn.addEventListener("click", () => {
                      const btnIndex = btn.getAttribute("data-index");
                      swiper.slideTo(btnIndex);

                      mainTechniqueButtons.forEach((btn) => {
                        btn.classList.remove("active");
                      });

                      btn.classList.add("active");
                    });
                  });
                }
              }}
              onRealIndexChange={(swiper) => {
                const mainTechniqueButtons = document.querySelectorAll(
                  ".main-technique-btn"
                );

                mainTechniqueButtons.forEach((btn) => {
                  btn.classList.remove("active");

                  if (btn.dataset.index === swiper.activeIndex.toString()) {
                    btn.classList.add("active");
                  }
                });
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
                        <a href="/pages/treatment/ring-dinger.php">
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
