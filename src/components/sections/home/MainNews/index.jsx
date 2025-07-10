import Image from "next/image";
import styles from "./MainNews.module.css";
import homeStyles from "../home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { useRef, useEffect, useState } from "react";
import ModalPortal from "@/components/modal/modalPortal";
import NewsModal from "@/components/modal/newsModal";

const newsList = [
  {
    title: "2025 TOP DOCTORS,<br>JANURY 2025",
    image: "/images/pages/main/news_img_01.png",
    description: "DR. HYUNG JOON PARK, DC",
  },
  {
    title: "2022's BEST SPINAL<br>DECOMPTECTION DOCTORS<br>IN AMERICA",
    image: "/images/pages/main/news_img_02.png",
    description: "DR. HYUNG JOON PARK, DC",
  },
  {
    title: "2022's BEST NEUROPATHY<br>PHYSICIANS IN AMERICA",
    image: "/images/pages/main/news_img_03.png",
    description: "DR. HYUNG JOON PARK, DC",
  },
];

// title 문자열에 포함된 <br> 태그를 JSX 요소로 변환하는 함수
const renderTitle = (title) => {
  return title.split("<br>").map((text, index, array) => (
    <span key={index}>
      {text}
      {index < array.length - 1 && <br />}
    </span>
  ));
};

export default function MainNews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [clickedNewsId, setClickedNewsId] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      console.log("Navigation set:", swiperInstance.navigation);
    }
  }, [swiperInstance]);

  return (
    <section
      className={homeStyles["section"] + " " + styles["sc__main-news"]}
      data-fade-trigger
    >
      <div className="sc-inner pd">
        <div className="container-1360">
          <div
            className={styles["news-txt-wrap"]}
            data-fade="down"
            data-fade-distance="40"
            data-fade-duration="0.6"
          >
            <div
              className={`${homeStyles["main-sc-tit-wrap"]} ${homeStyles["center"]} ${homeStyles["tac"]} ${homeStyles["g-0"]}`}
            >
              <h3 className={homeStyles["main-sc-tit"]}>Community</h3>
            </div>
          </div>
          <div
            className={styles["news-con-wrap"]}
            data-fade="up"
            data-fade-distance="60"
            data-fade-duration="0.6"
          >
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
              modules={[EffectCreative, Navigation]}
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
              }}
            >
              {newsList.map((news, index) => (
                <SwiperSlide key={index}>
                  <div className={styles["news-item-inner"]}>
                    <div className={styles["image"]}>
                      <Image
                        src={news.image}
                        alt={news.title}
                        width={400}
                        height={300}
                      />
                    </div>
                    <div className={styles["text"]}>
                      <strong>{renderTitle(news.title)}</strong>
                      <p>{news.description}</p>
                      <div className={styles["download-btn-wrap"]}>
                        <button
                          className={`${styles["download-btn"]} ${styles["img-dl-btn"]}`}
                          onClick={() => {
                            setShowModal(true);
                            setClickedNewsId(index + 1);
                          }}
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
                          <span className={styles["btn-txt"]}>Download</span>
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
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles["news-swiper-btns"]}>
              <div
                className={`${styles["news-swiper-btn-prev"]} c-btn`}
                ref={prevRef}
              ></div>
              <div
                className={`${styles["news-swiper-btn-next"]} c-btn`}
                ref={nextRef}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <ModalPortal>
        {showModal && (
          <NewsModal
            onClose={() => setShowModal(false)}
            imageId={clickedNewsId}
          />
        )}
      </ModalPortal>
    </section>
  );
}
