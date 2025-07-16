import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import homeStyles from "../home.module.css";
import styles from "./MainVideo.module.css";
import ModalPortal from "@/components/modal/modalPortal";
import VideoModal from "@/components/modal/VideoModal";

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function MainVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    // ScrollTrigger 설정
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%", // 섹션이 뷰포트의 80% 지점에서 시작
      end: "bottom 20%", // 섹션이 뷰포트의 20% 지점에서 끝
      onEnter: () => {
        // 섹션이 화면에 들어올 때 비디오 재생
        video.play();
        setIsPlaying(true);
      },
      onLeave: () => {
        // 섹션이 화면에서 나갈 때 비디오 정지
        video.pause();
        setIsPlaying(false);
      },
      onEnterBack: () => {
        // 스크롤을 다시 위로 올려서 섹션에 다시 들어올 때 비디오 재생
        video.play();
        setIsPlaying(true);
      },
      onLeaveBack: () => {
        // 스크롤을 위로 올려서 섹션에서 나갈 때 비디오 정지
        video.pause();
        setIsPlaying(false);
      },
    });

    // 컴포넌트 언마운트 시 ScrollTrigger 정리
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  useEffect(() => {
    if (isPlaying === null) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [showModal]);

  return (
    <section
      ref={sectionRef}
      className={`${styles["section"]} ${styles["sc__main-video"]}`}
    >
      <div className="sc-inner pd">
        <div className="container-1360">
          <div className={styles["flex-container"]}>
            <div
              className={styles["video-txt-wrap"]}
              data-fade="left"
              data-fade-distance="40"
              data-fade-duration="0.6"
            >
              <div
                className={`${homeStyles["main-sc-tit-wrap"]} ${homeStyles["g-sm"]}`}
              >
                <span className={styles["tit-deco"]}>
                  Advanced Injury <br />& DISC Center
                </span>
                <h3 className={`${homeStyles["main-sc-tit"]} ${styles["tit"]}`}>
                  LOOK <br />
                  <span className="color-primary">AROUND</span>
                </h3>
                <div className={homeStyles["main-sc-desc"]}>
                  <p>우리들 척추 신경원 스케치영상</p>
                </div>
              </div>
            </div>
            <div
              className={styles["video-con-wrap"]}
              data-fade="right"
              data-fade-distance="40"
              data-fade-duration="0.6"
            >
              <div
                className={styles["video-item-inner"]}
                data-modal-toggle
                data-target-modal="mainVideoModal"
              >
                <video
                  ref={videoRef}
                  id="mainVideo"
                  src="/videos/main_video.mp4"
                  muted
                  loop
                  playsInline
                  onClick={() => setShowModal(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalPortal>
        {showModal && (
          <VideoModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            currentTime={currentTime}
            onTimeUpdate={setCurrentTime}
          />
        )}
      </ModalPortal>
    </section>
  );
}
