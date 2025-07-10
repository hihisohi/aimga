import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const ModalPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const el = document.getElementById("modal-root");

  if (!el) {
    return null;
  }

  return createPortal(children, el);
};

export default ModalPortal;
