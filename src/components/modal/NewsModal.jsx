import Image from "next/image";
import styles from "./NewsModal.module.css";

export default function NewsModal({ onClose, imageId }) {
  if (!imageId) {
    return null;
  }

  return (
    <div className={`${styles.modal} ${styles["new-modal"]}`}>
      <div className={styles.modal_centered}>
        <div className={styles.modal_box}>
          <button className={styles.btn_modal_close} onClick={onClose}>
            닫기버튼
          </button>
          <div className={styles["modal-content"]}>
            <Image
              src={`/images/pages/main/news_detail_img${imageId
                .toString()
                .padStart(2, "0")}.png`}
              alt={`News Detail Image ${imageId}`}
              width={1280}
              height={720}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
