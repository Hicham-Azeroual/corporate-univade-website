import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const AppLoader = ({ onFinish }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const progressBarRef = useRef(null);
  const particleContainerRef = useRef(null);

  useGSAP(() => {
    // Animate logo with a bounce and glow effect
    gsap.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0, rotate: -45 },
      {
        scale: 1.1,
        opacity: 1,
        rotate: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          gsap.to(logoRef.current, {
            scale: 1,
            boxShadow: "0 0 20px #00f0ff, 0 0 40px #00ff94",
            duration: 0.8,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
          });
        },
      }
    );

    // Animate progress bar with a smooth fill
    const progress = { value: 0 };
    gsap.to(progress, {
      value: 100,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        progressBarRef.current.style.width = `${progress.value}%`;
      },
    });

    // Particle animation for a "wow" effect
    const particles = particleContainerRef.current.children;
    gsap.fromTo(
      particles,
      { opacity: 0, scale: 0, x: "-=50", y: "-=50" },
      {
        opacity: 0.8,
        scale: 1,
        x: "+=100",
        y: "+=100",
        duration: 2,
        stagger: 0.15,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
      }
    );

    // Animate loader out after 2.5s
    const timeout = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        y: -120,
        duration: 0.9,
        ease: "power3.inOut",
        onComplete: onFinish,
      });
      gsap.to([logoRef.current, progressBarRef.current, particleContainerRef.current], {
        opacity: 0,
        duration: 0.7,
        ease: "power2.in",
      });
    }, 2500);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#181A2A] transition-all"
      style={{ transition: "opacity 0.7s" }}
    >
      <div
        ref={logoRef}
        className="flex flex-col items-center gap-6 relative"
      >
        <img
          src="/images/heroSection.png"
          alt="Loading Logo"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            boxShadow: "0 4px 24px rgba(0, 240, 255, 0.4)",
          }}
        />
        <span
          style={{
            fontFamily: "'Brevis', sans-serif",
            fontSize: 36,
            background: "linear-gradient(90deg, #00f0ff 0%, #1e90ff 60%, #00ff94 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 800,
            letterSpacing: 2.5,
            textShadow: "0 2px 16px rgba(0, 240, 255, 0.6)",
          }}
        >
          Igniting Low-Code Innovation...
        </span>
      </div>
      <div className="w-48 h-3 mt-10 bg-[#222b3a] rounded-full overflow-hidden relative">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#00f0ff] to-[#00ff94] rounded-full"
          style={{ width: "0%" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            style={{
              color: "#00ff94",
              fontSize: "0.75rem",
              fontWeight: 600,
              textShadow: "0 1px 4px rgba(0, 255, 148, 0.5)",
            }}
          >
            {Math.round((progressBarRef.current?.style.width || "0%").slice(0, -1))}%
          </span>
        </div>
      </div>
      {/* Particle effect container */}
      <div
        ref={particleContainerRef}
        className="absolute inset-0 z-[-1] pointer-events-none"
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#00f0ff] to-[#00ff94] rounded-full"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AppLoader;