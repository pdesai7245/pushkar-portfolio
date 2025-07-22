// src/components/CustomCursor.js
import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-6 h-6 bg-tan rounded-full fixed pointer-events-none z-[9999] transition-transform duration-75 ease-linear"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
}

export default CustomCursor;
