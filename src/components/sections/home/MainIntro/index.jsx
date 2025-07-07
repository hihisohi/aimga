import styles from "./MainIntro.module.css";
import homeStyles from "../home.module.css";

export default function MainIntro() {
  return (
    <section
      className={`${homeStyles["section"]} ${styles["sc__main-intro"]}`}
      data-fade-trigger
      data-fade
      data-fade-duration="1.4"
    >
      <div className="sc-inner">
        <div className={`container-1360 ${styles["container-1360-custom"]}`}>
          <div
            className={styles["intro-img-wrap"]}
            data-fade="down"
            data-fade-distance="40"
            data-fade-duration="0.7"
          >
            <div className={styles["intro-img-inner"]}></div>
          </div>
          <div
            className={styles["intro-txt-wrap"]}
            data-fade="up"
            data-fade-distance="40"
            data-fade-duration="0.7"
          >
            <div className={homeStyles["main-sc-tit-wrap"]}>
              <div>
                <span className={homeStyles["main-sc-np"]}>
                  Advanced Injury & DISC Center
                </span>
                <h3 className={homeStyles["main-sc-tit"]}>Meet the Doctor</h3>
              </div>
              <div className={homeStyles["main-sc-desc"]}>
                <p className="bold">Dr.Park</p>
                <p>
                  At <span className="bold">Advanced Injury & DISC Center</span>
                  , we are committed to helping patients recover from pain and
                  injury through chiropractic care,
                  <span className="bold">auto injury rehabilitation</span>,
                  non-surgical spinal decompression, and advanced soft tissue
                  therapy.
                </p>
                <p>
                  Whether you&apos;re recovering from a car accident, dealing
                  with chronic spinal issues, or seeking preventive care, we
                  offer gentle, non-invasive solutions, including DRX9000 spinal
                  decompression therapy, to support your healing process.
                </p>
              </div>
              <div className={homeStyles["go-page-link"]}>
                <a href="/pages/about/clinic.php">
                  <div className={homeStyles["link-txt"]}>
                    <span>About US</span>
                  </div>
                  <span className={homeStyles["link-icon"]}></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
