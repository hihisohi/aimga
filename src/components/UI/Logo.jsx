import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo({
  type = "en-wh", // 'ko', 'en', 'ko-wh', 'en-wh'
  variant = "default", // 'default', 'header', 'footer', 'main', 'hero', 'sidebar'
  className = "",
  href = "/",
  alt = "Advanced Injury & DISC Center",
}) {
  const getLogoPath = (logoType) => {
    const logoMap = {
      ko: "/images/common/logo/logo-ko.svg",
      en: "/images/common/logo/logo-en.svg",
      "ko-wh": "/images/common/logo/logo-ko-wh.svg",
      "en-wh": "/images/common/logo/logo-en-wh.svg",
    };

    return logoMap[logoType] || logoMap["en"];
  };

  const logoImage = (
    <Image
      src={getLogoPath(type)}
      alt={alt}
      width={200}
      height={50}
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  );

  if (href) {
    return (
      <a href={href} className={`${styles.logoContainer} ${className}`}>
        {logoImage}
        <span className="blind">{alt}</span>
      </a>
    );
  }

  return (
    <div className={`${styles.logoContainer} ${className}`}>
      {logoImage}
      <span className="blind">{alt}</span>
    </div>
  );
}
