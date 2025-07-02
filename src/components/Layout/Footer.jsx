import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer id="footer" className={styles.footer}>
        <div className="footer-inner">
          <div className={styles["footer-top"]}>
            <div className="container-1360">
              <div className={styles["footer-sc-tit-wrap"]}>
                <h3 className={styles.tit}>Clinic Information & Directions</h3>
                <span className={styles.np}>
                  Advanced Injury & DISC Center Hours&Direction
                </span>
              </div>
              <div className={styles["footer-map-container"]}>
                <div className={styles["map-wrap"]}>
                  <div className={styles["map-top"]}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2803381772483!2d-84.1634826!3d33.9853324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a322c962e83b%3A0x30ed105228b01546!2zQWR2YW5jZWQgSW50ZWdyYXRlZCBNZWRpY2luZSBvZiBHQSwgTExDLiDsmrDrpqzrk6Qg7LKZ7LaU7Iug6rK97JuQ!5e0!3m2!1sko!2skr!4v1749428378820!5m2!1sko!2skr"
                      width="980"
                      height="360"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className={styles["map-botom"]}>
                    <p>
                      Advanced Integrated Medicine of Georgia LLC <br />
                      3296 Summit Ridge Pkwy #310, Duluth, GA 30096
                    </p>
                    <a
                      href="https://maps.app.goo.gl/irKzbU7386ttXvBe9"
                      target="_blank"
                      className={styles["map-gg-link"]}
                    >
                      <span>
                        <Image
                          src="/images/common/icon/google-map.svg"
                          alt="Google Map"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span>Google Map</span>
                    </a>
                  </div>
                </div>
                <div className={`${styles["footer-transport-wrap"]} block-960`}>
                  <div className={styles["transport-list"]}>
                    <div className={`${styles["transport-item"]} car`}>
                      <div className={styles["tp-case"]}>
                        <div className={styles["case-icon"]}>
                          <Image
                            src="/images/common/icon/transport-car.svg"
                            alt="Car transport"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className={styles["case-text"]}>
                          <strong>If You Are Driving</strong>
                          <p>
                            You can easily find us using your navigation system.
                          </p>
                        </div>
                      </div>
                      <div className={styles["tp-info"]}>
                        <ul>
                          <li>
                            <div
                              className={`${styles.dest} ${styles["dest-walmart"]}`}
                            >
                              Walmart
                            </div>
                            <div className={styles["dest-text"]}>
                              5 minutes (1.6 miles) by car from Duluth Walmart
                            </div>
                          </li>
                          <li>
                            <div
                              className={`${styles.dest} ${styles["dest-hmart"]}`}
                            >
                              Hmart
                            </div>
                            <div className={styles["dest-text"]}>
                              6 minutes (1.9 miles) by car from Duluth H Mart
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["timetable-wrap"]}>
                  <div className={styles["tt-caption"]}>Clinic Hours</div>
                  <div className={styles["tt-table"]}>
                    <div className={styles.tr}>
                      <div className={styles.th}>Monday</div>
                      <div className={styles.td}>09 AM - 05 PM</div>
                    </div>
                    <div className={styles.tr}>
                      <div className={styles.th}>Tuesday</div>
                      <div className={styles.td}>09 AM - 05 PM</div>
                    </div>
                    <div className={`${styles.tr} ${styles.off}`}>
                      <div className={styles.th}>Wednesday</div>
                      <div className={styles.td}>Closed</div>
                    </div>
                    <div className={styles.tr}>
                      <div className={styles.th}>Thursday</div>
                      <div className={styles.td}>09 AM - 05 PM</div>
                    </div>
                    <div className={styles.tr}>
                      <div className={styles.th}>Friday</div>
                      <div className={styles.td}>09 AM - 05 PM</div>
                    </div>
                    <div className={styles.tr}>
                      <div className={styles.th}>Saturday</div>
                      <div className={styles.td}>09 AM - 05 PM</div>
                    </div>
                    <div className={`${styles.tr} ${styles.off}`}>
                      <div className={styles.th}>Sunday</div>
                      <div className={styles.td}>Closed</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["footer-transport-wrap"]} none-960`}>
                <div className={styles["transport-list"]}>
                  <div className={`${styles["transport-item"]} car`}>
                    <div className={styles["tp-case"]}>
                      <div className={styles["case-icon"]}>
                        <Image
                          src="/images/common/icon/transport-car.svg"
                          alt="If You Are Driving"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className={styles["case-text"]}>
                        <strong>If You Are Driving</strong>
                        <p>
                          You can easily find us using your navigation system.
                        </p>
                      </div>
                    </div>
                    <div className={styles["tp-info"]}>
                      <ul>
                        <li>
                          <div
                            className={`${styles.dest} ${styles["dest-walmart"]}`}
                          >
                            Walmart
                          </div>
                          <div className={styles["dest-text"]}>
                            5 minutes (1.6 miles) by car from Duluth Walmart
                          </div>
                        </li>
                        <li>
                          <div
                            className={`${styles.dest} ${styles["dest-hmart"]}`}
                          >
                            Hmart
                          </div>
                          <div className={styles["dest-text"]}>
                            6 minutes (1.9 miles) by car from Duluth H Mart
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["footer-bottom"]}>
            <div className="container-1360">
              <div className={styles["footer-info-container"]}>
                <div>
                  <span className="bold">
                    Advanced Integrated Medicine of GA, LLC.
                  </span>{" "}
                  <br className="block-500" />
                  Advanced Injury & DISC Center <br />
                  3296 Summit Ridge Pkwy, Suite 310 <br />
                  Duluth, GA, 30096
                </div>
                <div>770-734-5460</div>
              </div>
              <div className={styles["footer-logo"]}>
                <a href="/">
                  <span className="footer-logo-img">
                    <Image
                      src="/images/common/logo/logo-en-wh.svg"
                      alt="Advanced Injury & DISC Center"
                      width={200}
                      height={60}
                    />
                  </span>
                  <span className="blind">Advanced Injury & DISC Center</span>
                </a>
              </div>
              <div className={styles["design-by"]}>
                <Image
                  src="/images/layout/designed_by_wacus.svg"
                  alt="Designed by Wacus"
                  width={100}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
