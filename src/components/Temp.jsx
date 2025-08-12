import React, { useEffect, useState, useRef } from "react";
import meditation from "@/assets/meditation.png";
import shadow from "@/assets/shadow.png";

const ovalStyles = `
@keyframes rotate-cw {
  to { transform: rotate(360deg); }
}
@keyframes rotate-ccw {
  to { transform: rotate(-360deg); }
}
.oval-cw {
  animation: rotate-cw 6s linear infinite;
}
.oval-ccw {
  animation: rotate-ccw 8s linear infinite;
}
.oval-cw2 {
  animation: rotate-cw 10s linear infinite;
}
`;

const TEMP_SIZE = 400; // Size of roaming area container
const NUM_CIRCLES = 8;
const MIN_SIZE = 8;
const MAX_SIZE = 24;
const MAX_SPEED = 0.9;

const Temp = () => {
  // Initialize circles with random position, velocity, and size
  const [circles, setCircles] = useState(() =>
    Array.from({ length: NUM_CIRCLES }, () => {
      // Random angle for initial velocity direction
      const angle = Math.random() * 2 * Math.PI;
      // Random speed with max speed limit
      const speed = Math.random() * MAX_SPEED * 0.5 + 0.05;
      return {
        x: Math.random() * TEMP_SIZE,
        y: Math.random() * TEMP_SIZE,
        size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
        vx: speed * Math.cos(angle),
        vy: speed * Math.sin(angle),
      };
    })
  );

  const circlesRef = useRef(circles);
  circlesRef.current = circles;

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setCircles((prev) =>
        prev.map(({ x, y, vx, vy, size }) => {
          // Update position by velocity
          let newX = x + vx;
          let newY = y + vy;

          // Bounce off edges of container to keep circles visible
          if (newX < 0) {
            newX = 0;
            vx = -vx;
          } else if (newX > TEMP_SIZE - size) {
            newX = TEMP_SIZE - size;
            vx = -vx;
          }
          if (newY < 0) {
            newY = 0;
            vy = -vy;
          } else if (newY > TEMP_SIZE - size) {
            newY = TEMP_SIZE - size;
            vy = -vy;
          }

          // Slightly rotate the velocity vector direction for natural random roaming
          const angleChange = (Math.random() - 0.5) * 0.1; // small angle adjustment
          let speed = Math.sqrt(vx * vx + vy * vy);
          let angle = Math.atan2(vy, vx);
          angle += angleChange;
          vx = speed * Math.cos(angle);
          vy = speed * Math.sin(angle);

          // Clamp speed to MAX_SPEED for consistent movement
          if (speed > MAX_SPEED) {
            speed = MAX_SPEED;
            vx = speed * Math.cos(angle);
            vy = speed * Math.sin(angle);
          }

          return { x: newX, y: newY, vx, vy, size };
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center py-20 bg-teal-50 relative"
      style={{ overflow: "visible" }}
    >
      {/* Inject rotating ovals CSS */}
      <style>{ovalStyles}</style>

      <div className="relative w-64 h-64 flex justify-center flex-col gap-16">
        {/* Rotating Ovals */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="oval-cw absolute"
            style={{
              width: "280px",
              height: "140px",
              borderRadius: "50% / 50%",
              border: "3px solid #81e6d9",
              opacity: 0.5,
            }}
          />
          <div
            className="oval-ccw absolute"
            style={{
              width: "280px",
              height: "140px",
              borderRadius: "50% / 50%",
              border: "3px dashed #4fd1c5",
              opacity: 0.5,
            }}
          />
          <div
            className="oval-cw2 absolute"
            style={{
              width: "280px",
              height: "140px",
              borderRadius: "50% / 50%",
              border: "3px solid #4fd1c5",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Widely spread, smoothly and steadily roaming circles */}
        <div
          className="absolute top-[-70px] left-[-70px] pointer-events-none"
          style={{ width: TEMP_SIZE, height: TEMP_SIZE }}
        >
          {circles.map(({ x, y, size }, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: "#81e6d9",
                opacity: 0.75,
                transform: `translate(${x}px, ${y}px)`,
                transition: "transform 0.05s linear",
              }}
            />
          ))}
        </div>

        {/* Meditation Image */}
        <img
          src={meditation}
          alt="Meditation"
          className="w-48 mx-auto z-10 animate-float"
          style={{ position: "relative" }}
        />
        {/* Shadow Image */}
        <img
          src={shadow}
          alt="Shadow"
          className="bottom-0 w-32 mx-auto animate-shadow"
          style={{ position: "relative" }}
        />
      </div>
    </section>
  );
};

export default Temp;
