"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

function lerp(start, end, amount) {
  return (1 - amount) * start + amount * end;
}

export default function Cursor() {
  const cursorRef = useRef(null);
  const cursorBdRef = useRef(null);
  const animationFrameRef = useRef(null);

  let cursorX = 0;
  let cursorY = 0;
  let pageX = 0;
  let pageY = 0;
  let size = 1;
  let sizeBd = 60;
  let followSpeed = 0.16;

  let startY;
  let endY;
  let clicked = false;

  useEffect(() => {
    if ("ontouchstart" in window) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      if (cursorBdRef.current) cursorBdRef.current.style.display = "none";
      return;
    }

    if (!cursorRef.current || !cursorBdRef.current) return;

    cursorRef.current.style.setProperty("--size", size + "px");
    cursorBdRef.current.style.setProperty("--size", sizeBd + "px");

    const handleMouseMove = function (e) {
      pageX = e.clientX;
      pageY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - size / 2 + "px";
        cursorRef.current.style.top = e.clientY - size / 2 + "px";
      }
    };

    function loop() {
      cursorX = lerp(cursorX, pageX, followSpeed);
      cursorY = lerp(cursorY, pageY, followSpeed);
      if (cursorBdRef.current) {
        cursorBdRef.current.style.top = cursorY - sizeBd / 2 + "px";
        cursorBdRef.current.style.left = cursorX - sizeBd / 2 + "px";
      }
      animationFrameRef.current = requestAnimationFrame(loop);
    }

    function getCurrentScale(element) {
      if (!element) return 1;
      const transform = getComputedStyle(element).transform;
      if (transform === "none") return 1;
      const matrix = transform.match(/^matrix\((.+)\)$/);
      if (matrix) {
        const values = matrix[1].split(", ");
        return parseFloat(values[0]);
      }
      const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
      if (matrix3d) {
        const values = matrix3d[1].split(", ");
        return parseFloat(values[0]);
      }
      return 1;
    }

    function mousedown(e) {
      if (!cursorRef.current || !cursorBdRef.current) return;

      cursorRef.current.animate(
        [{ transform: "scale(1)" }, { transform: "scale(40)" }],
        {
          duration: 800,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
      cursorBdRef.current.animate(
        [{ transform: "scale(1)" }, { transform: "scale(0.4)" }],
        {
          duration: 800,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );

      clicked = true;
      startY =
        e.clientY || e.touches?.[0]?.clientY || e.targetTouches?.[0]?.clientY;
    }

    function mouseup(e) {
      if (!cursorRef.current || !cursorBdRef.current) return;

      const currentScaleCursor = getCurrentScale(cursorRef.current);
      const currentScaleCursorBd = getCurrentScale(cursorBdRef.current);

      cursorRef.current.animate(
        [
          { transform: `scale(${currentScaleCursor})` },
          { transform: "scale(1)" },
        ],
        {
          duration: 800,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
      cursorBdRef.current.animate(
        [
          { transform: `scale(${currentScaleCursorBd})` },
          { transform: "scale(1)" },
        ],
        {
          duration: 800,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );

      endY = e.clientY || endY;
      if (clicked && startY && Math.abs(startY - endY) >= 40) {
        clicked = false;
        startY = null;
        endY = null;
      }
    }

    function mouseEnterA(e) {
      if (!cursorRef.current || !cursorBdRef.current) return;

      cursorRef.current.animate(
        [{ transform: "scale(1)" }, { transform: "scale(30)" }],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
      cursorBdRef.current.animate(
        [{ transform: "scale(1)" }, { transform: "scale(0)" }],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
    }

    function mouseLeaveA(e) {
      if (!cursorRef.current || !cursorBdRef.current) return;

      const currentScaleCursor = getCurrentScale(cursorRef.current);
      const currentScaleCursorBd = getCurrentScale(cursorBdRef.current);

      cursorRef.current.animate(
        [
          { transform: `scale(${currentScaleCursor})` },
          { transform: "scale(1)" },
        ],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
      cursorBdRef.current.animate(
        [
          { transform: `scale(${currentScaleCursorBd})` },
          { transform: "scale(1)" },
        ],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
    }

    function mouseEnterOn(e) {
      if (!cursorRef.current || !cursorBdRef.current) return;

      cursorRef.current.animate(
        [{ transform: "scale(1)" }, { transform: "scale(0)" }],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
      cursorBdRef.current.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.6)" }],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
    }

    function mouseLeaveOn(e) {
      if (!cursorRef.current || !cursorBdRef.current) return;

      const currentScaleCursor = getCurrentScale(cursorRef.current);
      const currentScaleCursorBd = getCurrentScale(cursorBdRef.current);

      cursorRef.current.animate(
        [
          { transform: `scale(${currentScaleCursor})` },
          { transform: "scale(1)" },
        ],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
      cursorBdRef.current.animate(
        [
          { transform: `scale(${currentScaleCursorBd})` },
          { transform: "scale(1)" },
        ],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
    }

    function mouseEnterSwiper(e) {
      if (!cursorRef.current || !cursorBdRef.current) return;

      cursorRef.current.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1)" }],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
      cursorBdRef.current.animate(
        [
          { transform: "scale(1)" },
          {
            transform: "scale(1)",
            mixBlendMode: "initial",
            backgroundImage:
              "url(https://aimga.vercel.app/images/common/cursor_slide_hover_img.svg)",
          },
        ],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
    }

    function mouseLeaveSwiper(e) {
      if (!cursorRef.current || !cursorBdRef.current) return;

      const currentScaleCursor = getCurrentScale(cursorRef.current);
      const currentScaleCursorBd = getCurrentScale(cursorBdRef.current);

      cursorRef.current.animate(
        [
          { transform: `scale(${currentScaleCursor})` },
          { transform: "scale(1)" },
        ],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
      cursorBdRef.current.animate(
        [
          { transform: `scale(${currentScaleCursorBd})` },
          {
            transform: "scale(1)",
            mixBlendMode: "multiply",
            backgroundImage:
              "url(https://aimga.vercel.app/images/common/cursor_bd_img.svg)",
          },
        ],
        {
          duration: 400,
          iterations: 1,
          fill: "both",
          easing: `cubic-bezier(.07,.76,.39,1)`,
        }
      );
    }

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", mousedown, false);
    window.addEventListener("touchstart", mousedown, false);
    window.addEventListener(
      "touchmove",
      function (e) {
        if (clicked) {
          endY = e.touches?.[0]?.clientY || e.targetTouches?.[0]?.clientY;
        }
      },
      false
    );
    window.addEventListener("touchend", mouseup, false);
    window.addEventListener("mouseup", mouseup, false);

    // Add event listeners for interactive elements
    const eleA = document.querySelectorAll("a");
    const eleButton = document.querySelectorAll("button");
    const eleOn = document.querySelectorAll(".c-on");
    const eleSwiper = document.querySelectorAll(".swiper");
    const eleBtn = document.querySelectorAll(".c-btn");

    eleA.forEach(function (ele) {
      ele.addEventListener("mouseenter", mouseEnterA, false);
      ele.addEventListener("mouseleave", mouseLeaveA, false);
    });

    eleButton.forEach(function (ele) {
      ele.addEventListener("mouseenter", mouseEnterA, false);
      ele.addEventListener("mouseleave", mouseLeaveA, false);
    });

    eleOn.forEach(function (ele) {
      ele.addEventListener("mouseenter", mouseEnterOn, false);
      ele.addEventListener("mouseleave", mouseLeaveOn, false);
    });

    eleSwiper.forEach(function (ele) {
      ele.addEventListener("mouseenter", mouseEnterSwiper, false);
      ele.addEventListener("mouseleave", mouseLeaveSwiper, false);
    });

    eleBtn.forEach(function (ele) {
      ele.addEventListener("mouseenter", mouseEnterA, false);
      ele.addEventListener("mouseleave", mouseLeaveA, false);
    });

    // Start animation loop
    loop();

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", mousedown);
      window.removeEventListener("touchstart", mousedown);
      window.removeEventListener("touchmove", function (e) {
        if (clicked) {
          endY = e.touches?.[0]?.clientY || e.targetTouches?.[0]?.clientY;
        }
      });
      window.removeEventListener("touchend", mouseup);
      window.removeEventListener("mouseup", mouseup);

      // Remove event listeners from elements
      eleA.forEach(function (ele) {
        ele.removeEventListener("mouseenter", mouseEnterA);
        ele.removeEventListener("mouseleave", mouseLeaveA);
      });

      eleButton.forEach(function (ele) {
        ele.removeEventListener("mouseenter", mouseEnterA);
        ele.removeEventListener("mouseleave", mouseLeaveA);
      });

      eleOn.forEach(function (ele) {
        ele.removeEventListener("mouseenter", mouseEnterOn);
        ele.removeEventListener("mouseleave", mouseLeaveOn);
      });

      eleSwiper.forEach(function (ele) {
        ele.removeEventListener("mouseenter", mouseEnterSwiper);
        ele.removeEventListener("mouseleave", mouseLeaveSwiper);
      });

      eleBtn.forEach(function (ele) {
        ele.removeEventListener("mouseenter", mouseEnterA);
        ele.removeEventListener("mouseleave", mouseLeaveA);
      });
    };
  }, []);

  return (
    <div>
      <div className={styles.cursor} ref={cursorRef}></div>
      <div className={styles["cursor-bd"]} ref={cursorBdRef}></div>
    </div>
  );
}
