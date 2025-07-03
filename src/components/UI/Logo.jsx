import Image from "next/image";

export default function Logo({
  type = "ko", // 'ko', 'en', 'ko-wh', 'en-wh'
  width = 120,
  height = 40,
  className = "",
  responsive = false, // 반응형 사용 여부
  responsiveWidth = "15vw", // 반응형 너비 (vw, vh, rem, em 등)
  responsiveHeight = "auto", // 반응형 높이 (auto는 비율 유지)
}) {
  const getLogoPath = (logoType) => {
    const logoMap = {
      ko: "/images/common/logo/logo-ko.svg",
      en: "/images/common/logo/logo-en.svg",
      "ko-wh": "/images/common/logo/logo-ko-wh.svg",
      "en-wh": "/images/common/logo/logo-en-wh.svg",
    };

    return logoMap[logoType] || logoMap["ko"];
  };

  const containerStyle = {
    width: responsive ? responsiveWidth : `${width}px`,
    height: responsive ? responsiveHeight : `${height}px`,
    position: "relative",
  };

  return (
    <div className={className} style={containerStyle}>
      <Image
        src={getLogoPath(type)}
        alt={`Logo ${type}`}
        fill={responsive}
        width={responsive ? undefined : width}
        height={responsive ? undefined : height}
        style={responsive ? { objectFit: "contain" } : {}}
        priority
      />
    </div>
  );
}
