import { useEffect, useRef } from "react";
import styles from "./VideoModal.module.css";

export default function VideoModal({
  isOpen,
  onClose,
  currentTime,
  onTimeUpdate,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      videoRef.current.currentTime = currentTime;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      onTimeUpdate(videoRef.current.currentTime);
    }

    console.log("모달 비디오 현재 시간 : " + videoRef.current.currentTime);
  }, [isOpen]);

  return (
    <div
      className={`${styles.wrapper} ${styles["video-modal"]}`}
      onClick={onClose}
    >
      <div className={styles.container}>
        <div className={styles.inner}>
          <button className={styles.BtnClose} onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M7.00001 8.05376L1.92701 13.127C1.78851 13.2653 1.61443 13.3362 1.40476 13.3395C1.19526 13.3427 1.01801 13.2718 0.873012 13.127C0.728178 12.982 0.655762 12.8063 0.655762 12.6C0.655762 12.3937 0.728178 12.218 0.873012 12.073L5.94626 7.00001L0.873012 1.92701C0.734678 1.78851 0.663845 1.61443 0.660512 1.40476C0.657345 1.19526 0.728178 1.01801 0.873012 0.873012C1.01801 0.728178 1.19368 0.655762 1.40001 0.655762C1.60635 0.655762 1.78201 0.728178 1.92701 0.873012L7.00001 5.94626L12.073 0.873012C12.2115 0.734678 12.3856 0.663845 12.5953 0.660512C12.8048 0.657345 12.982 0.728178 13.127 0.873012C13.2718 1.01801 13.3443 1.19368 13.3443 1.40001C13.3443 1.60635 13.2718 1.78201 13.127 1.92701L8.05376 7.00001L13.127 12.073C13.2653 12.2115 13.3362 12.3856 13.3395 12.5953C13.3427 12.8048 13.2718 12.982 13.127 13.127C12.982 13.2718 12.8063 13.3443 12.6 13.3443C12.3937 13.3443 12.218 13.2718 12.073 13.127L7.00001 8.05376Z"
                fill="white"
              />
            </svg>
          </button>
          <div className={styles.content}>
            <video
              ref={videoRef}
              src="/videos/main_video.mp4"
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}
