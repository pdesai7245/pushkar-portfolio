import { useEffect, useState } from "react";

function CursorHint() {
  const [showHint, setShowHint] = useState(true);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // ✅ Exit early if screen is small (mobile)
    if (window.innerWidth < 768) return;

    const handleMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const timer = setTimeout(() => setShowHint(false), 6000);

    window.addEventListener("mousemove", handleMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  // 🧼 Also skip rendering completely on mobile
  if (window.innerWidth < 768) return null;

  return (
    showHint && (
      <div
        className="fixed text-sm text-cream bg-darkmaroon/90 px-3 py-1 rounded-full shadow-md pointer-events-none transition-opacity duration-500 z-[100]"
        style={{
          top: coords.y + 20,
          left: coords.x + 20,
        }}
      >
          👆 Custom Cursor Enabled 
      </div>
    )
  );
}

export default CursorHint;
