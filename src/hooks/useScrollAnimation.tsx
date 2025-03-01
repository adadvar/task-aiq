"use client";

import { useEffect, useRef } from "react";

function useScrollAnimation(
  maxRotation: number = 30,
  rotationSpeed: number = 20,
  maxYTranslation: number = -235,
  translationSpeed: number = 3
): React.RefObject<HTMLDivElement> {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrollY = window.scrollY;

        // Calculate rotation
        let rotation = scrollY / rotationSpeed;
        rotation = Math.min(rotation, maxRotation);
        rotation = Math.max(rotation, 0);

        // Calculate Y translation
        let translationY = maxYTranslation + scrollY / translationSpeed;
        translationY = Math.min(translationY, 0);
        translationY = Math.max(translationY, maxYTranslation);
        console.log(translationY);

        // Apply transformation to the element
        elementRef.current.style.transform = `rotateX(${
          maxRotation - rotation
        }deg) translateY(${translationY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxRotation, rotationSpeed, maxYTranslation, translationSpeed]);

  return elementRef as React.RefObject<HTMLDivElement>;
}

export default useScrollAnimation;
