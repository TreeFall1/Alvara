"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type AnimatedLogoProps = {
  className?: string;
};

export function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const motion = motionRef.current;
      if (!motion) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(motion, { clearProps: "transform" });
        return;
      }

      gsap.fromTo(
        motion,
        { y: -5, rotation: -0.45, scale: 1.006 },
        {
          y: 5,
          rotation: 0.45,
          scale: 1.014,
          duration: 3.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className={`animated-logo ${className}`.trim()}>
      <div ref={motionRef} className="animated-logo__motion">
        <Image
          className="animated-logo__image"
          src="/media/logo.jpg"
          alt="Alvara"
          width={1254}
          height={1254}
          sizes="(max-width: 820px) 120vw, 58vw"
          preload
          unoptimized
        />
      </div>
    </div>
  );
}
