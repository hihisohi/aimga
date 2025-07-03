import Image from "next/image";
import styles from "./MainNews.module.css";
import homeStyles from "../home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

export default function MainNews() {
  return (
    <section className={homeStyles["section"] + " " + styles["sc__main-news"]}>
      <div className="sc-inner pd">
        <div className="container-1360">
          <div className={styles["news-txt-wrap"]}>
            <div
              className={`${homeStyles["main-sc-tit-wrap"]} ${homeStyles["center"]} ${homeStyles["tac"]} ${homeStyles["g-0"]}`}
            >
              <h3 className={homeStyles["main-sc-tit"]}>Community</h3>
            </div>
          </div>
          <div className={styles["news-con-wrap"]}>
            <Swiper
              className={styles["main-news-swiper"]}
              grabCursor={true}
              slidesPerView={1}
              speed={600}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: false,
                  translate: [0, 0, -400],
                  opacity: 0,
                },
                next: {
                  translate: ["100%", 0, 0],
                  opacity: 1,
                },
              }}
              navigation={{
                nextEl: ".news-swiper-btn-next",
                prevEl: ".news-swiper-btn-prev",
              }}
              modules={[EffectCreative]}
            >
              <SwiperSlide>
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
                      2025 TOP DOCTORS, <br className="block-500" /> JANURY 2025
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <div className={styles["news-swiper-btns"]}>
                <div className={"news-swiper-btn-prev c-btn"}></div>
                <div className={"news-swiper-btn-next c-btn"}></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
