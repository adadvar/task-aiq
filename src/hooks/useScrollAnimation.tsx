"use client";

import { useEffect, useRef } from "react";

function useScrollAnimation(
  maxRotation: number = 30,
  rotationSpeed: number = 20
): React.RefObject<HTMLDivElement> {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrollY = window.scrollY;
        let rotation = scrollY / rotationSpeed;
        rotation = Math.min(rotation, maxRotation);
        rotation = Math.max(rotation, 0);
        elementRef.current.style.transform = `rotateX(${
          maxRotation - rotation
        }deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxRotation, rotationSpeed]);

  return elementRef as React.RefObject<HTMLDivElement>;
}

export default useScrollAnimation;
