import Image from "next/image";
import styles from "./MainEquipment.module.css";
import homeStyles from "../home.module.css";

export default function MainEquipment() {
  return (
    <section
      className={`${homeStyles["section"]} ${styles["sc__main-equipment"]}`}
      data-fade-trigger
    >
      <div className="sc-inner pd">
        <div className="container-1360">
          <div className={styles["equip-txt-wrap"]}>
            <div
              className={`${homeStyles["main-sc-tit-wrap"]} ${homeStyles["g-0"]}`}
              data-fade="up"
              data-fade-distance="40"
              data-fade-duration="0.6"
            >
              <span className={homeStyles["main-sc-np"]}>
                Advanced Injury & DISC Center
              </span>
              <div className={styles["flex-container"]}>
                <div className={styles["flex-item"]}>
                  <h3 className={homeStyles["main-sc-tit"]}>
                    Specialized Equipment
                  </h3>
                  <div className={homeStyles["main-sc-desc"]}>
                    <p>
                      To ensure the highest standard of care, we utilize
                      state-of-the-art equipment and provide personalized
                      treatment tailored to each patient.
                    </p>
                  </div>
                </div>
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
          </div>
          <div
            className={styles["equip-con-wrap"]}
            data-fade="down"
            data-fade-distance="40"
            data-fade-duration="0.6"
            data-fade-delay="0.4"
          >
            <ul className={styles["equip-list"]}>
              <li
                className={styles["equip-item"] + " " + styles["equip-drx9000"]}
              >
                <a href="">
                  <div className={styles["text"]}>
                    <strong>DRX9000</strong>
                    <p>Non-Surgical Spinal Decompression with the DRX-9000</p>
                  </div>
                  <div className={styles["image"]}>
                    <Image
                      src="/images/pages/main/equip_img_01.png"
                      alt="DRX9000 Equipment"
                      width={400}
                      height={300}
                    />
                  </div>
                </a>
              </li>
              <li className={styles["equip-item"] + " " + styles["equip-dmx"]}>
                <a href="">
                  <div className={styles["text"]}>
                    <strong>DMX</strong>
                    <p>
                      This cutting-edge imaging technology is primarily used to
                      evaluate spinal instability
                    </p>
                  </div>
                  <div className={styles["image"]}>
                    <Image
                      src="/images/pages/main/equip_img_02.png"
                      alt="DMX Equipment"
                      width={400}
                      height={300}
                    />
                  </div>
                </a>
              </li>
              <li className={styles["equip-item"] + " " + styles["equip-lllt"]}>
                <a href="">
                  <div className={styles["text"]}>
                    <strong>LLLT(ML-830)</strong>
                    <p>
                      cutting-edge technology that is gaining popularity for its
                      ability to promote healing, reduce pain and inflammation,
                      and restore function in the body.
                    </p>
                  </div>
                  <div className={styles["image"]}>
                    <Image
                      src="/images/pages/main/equip_img_03.png"
                      alt="LLLT Equipment"
                      width={400}
                      height={300}
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
