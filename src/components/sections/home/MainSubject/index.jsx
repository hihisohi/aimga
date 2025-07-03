import Image from "next/image";
import styles from "./MainSubject.module.css";
import homeStyles from "../home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MainSubject() {
  return (
    <section
      className={`${homeStyles["section"]} ${styles["sc__main-subject"]}`}
    >
      <div className={styles["bg"]}></div>
      <div className={`sc-inner pd df ${styles["sc-inner-custom"]}`}>
        <div className={styles["subject-txt-wrap"]}>
          <div
            className={`${homeStyles["main-sc-tit-wrap"]} ${styles["main-sc-tit-wrap-custom"]}`}
          >
            <div>
              <span className={homeStyles["main-sc-np"]}>
                Advanced Injury & DISC Center
              </span>
              <h3 className={homeStyles["main-sc-tit"]}>
                Our Approach <br className="none-960" />
                to Treatment
              </h3>
            </div>
            <div className={homeStyles["main-sc-desc"]}>
              <p>
                Our goal is to treat the root cause of your discomfort—not just
                the symptoms—while guiding you toward a healthier, pain-free
                life.
              </p>
            </div>
            <div className={homeStyles["go-page-link"]}>
              <a href="/pages/disease/disc.php">
                <div className={homeStyles["link-txt"]}>
                  <span>View More</span>
                </div>
                <span className={homeStyles["link-icon"]}></span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["subject-con-wrap"]}>
          <Swiper
            className={styles["main-subject-swiper"]}
            grabCursor={true}
            slidesPerView={1}
            speed={600}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            watchSlidesProgress={true}
            centeredSlides={true}
            breakpoints={{
              501: {
                slidesPerView: "auto",
                centeredSlides: false,
              },
            }}
          >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide className="blank-slide none-960"></SwiperSlide>
          </Swiper>
          <div className={"swiper main-subject-swiper"}>
            <div className="swiper-wrapper">
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className="swiper-slide"></div>
              <div className={"swiper-slide blank-slide none-960"}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
