import { useEffect, useState } from "react";

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      window.setTimeout(() => setIsClicked(false), 400);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div
      className={`splash-cursor${isClicked ? " clicked" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      <div className="splash-ring" />
      <div className="splash-dot" />
    </div>
  );
}
