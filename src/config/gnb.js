export const GNB_MENU = [
  //   { label: "Home", path: "/" },
  {
    label: "About the clinic",
    path: "/about",
    children: [
      { label: "About US", path: "/clinic" },
      { label: "Dr. Park", path: "/doctors" },
      { label: "Dr. Park Bio", path: "/location" },
      { label: "Integrated Medicine", path: "/integrative-medicine" },
    ],
  },
  {
    label: "Equipment",
    path: "/equipment",
    children: [
      { label: "DMX", path: "/dmx" },
      { label: "DRX 9000", path: "/drx9000" },
      { label: "LLLT(ML-830)", path: "/lllt" },
    ],
  },
  {
    label: "Conditions",
    path: "/conditions",
    children: [
      { label: "Disc Herniated", path: "/disc" },
      { label: "Neck pain", path: "/neck" },
      { label: "Shoulder pain", path: "/shoulder" },
      { label: "Sciatica", path: "/sciatica" },
      { label: "Low Back pain", path: "/back-pain" },
      { label: "Hip pain", path: "/hip-joint" },
      { label: "Knee pain", path: "/knee" },
    ],
  },
  {
    label: "Auto Injury",
    path: "/auto-injury",
    children: [{ label: "Auto Injury", path: "/auto-injury" }],
  },
  {
    label: "Spinal Decompression",
    path: "/spinal-decompression",
    children: [
      { label: "Spinal Decompression", path: "/spinal-decompression" },
    ],
  },
  {
    label: "Sports Injury",
    path: "/sports-injury",
    children: [{ label: "Sports Injury", path: "/sports-injury" }],
  },
  {
    label: "Chiropractic Care",
    path: "/chiropractic",
    children: [
      { label: "Why Chiropractic Care is Needed", path: "/need" },
      { label: "What is Chiropractic", path: "/intro" },
      { label: "Chiropractic Care", path: "/therapy" },
      { label: "Non-invasive Treatment", path: "/non-invasive" },
    ],
  },
  {
    label: "Care",
    path: "/care",
    children: [
      { label: "ESWT", path: "/eswt" },
      { label: "PT & Rehab", path: "/rehab" },
      { label: "Craniofacial Release", path: "/cfr" },
      { label: "Ring Dinger", path: "/ring-dinger" },
    ],
  },
  {
    label: "Community",
    path: "/community",
    children: [
      { label: "Contact", path: "/inquiry" },
      { label: "Notice", path: "/notice" },
      { label: "Ask Dr. Park", path: "/faq" },
    ],
  },
];
