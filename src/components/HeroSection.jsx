import  { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const imgRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const headerRef = useRef(null);
  const lettersRef = useRef([]);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const waveRef = useRef(null);
  const particleRef = useRef(null);

  useGSAP(() => {
    // Animate the whole section with a professional slide-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animate header letters with a smooth, staggered reveal
    gsap.fromTo(
      lettersRef.current,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    // Animate description words with a professional fade and slide
    const descWords = descRef.current.querySelectorAll(".word");
    gsap.fromTo(
      descWords,
      { opacity: 0, y: 30, rotateX: 20 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.6,
      }
    );

    // Animate buttons with a subtle bounce effect (move up from bottom)
    const buttons = btnsRef.current.querySelectorAll(".btn");
    gsap.fromTo(
      buttons,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)",
        delay: 1,
      }
    );

    // Animate image with a professional entrance and floating effect
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 120, scale: 0.92, rotate: 8 },
      {
        opacity: 1,
        x: 0,
        scale: 1.08,
        rotate: 0,
        duration: 1.6,
        ease: "power3.out",
        delay: 0.8,
        onComplete: () => {
          gsap.to(imgRef.current, {
            y: "+=24",
            scale: 1.12,
            rotate: 2,
            duration: 2.8,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        },
      }
    );

    // Background animation: Parallax and wave effect
    gsap.fromTo(
      bgRef.current,
      { backgroundPosition: "0% 0%", scale: 1.1 },
      {
        backgroundPosition: "20% 20%",
        scale: 1.3,
        duration: 30,
        ease: "none",
        yoyo: true,
        repeat: -1,
      }
    );

    // Wave animation (gradient overlay)
    gsap.fromTo(
      waveRef.current,
      { backgroundPosition: "0% 0%" },
      {
        backgroundPosition: "100% 100%",
        duration: 8,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      }
    );

    // Particle animation (creative touch)
    const particles = particleRef.current.children;
    gsap.fromTo(
      particles,
      { opacity: 0, y: 100, scale: 0.5 },
      {
        opacity: 1,
        y: -100,
        scale: 1,
        duration: 6,
        stagger: 0.2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  // New header text for low-code platform
  const headerText = "Unleash Creativity with Low-Code Power!";
  const splitHeader = headerText.split("").map((char, i) => (
    <span
      key={i}
      ref={(el) => (lettersRef.current[i] = el)}
      className="letter inline-block"
      style={{
        background: "linear-gradient(90deg, #00f0ff 0%, #1e90ff 50%, #00ff94 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        textFillColor: "transparent",
        filter: "drop-shadow(0 2px 10px rgba(0, 240, 255, 0.5))",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const descriptionText =
    "Empower your ideas with a low-code platform built for speed and innovation. From idea to deployment in minutes — automate workflows, connect data, and craft stunning apps without writing a line of code."
      .split(" ")
      .map((word, i) => (
        <span key={i} className="word inline-block mr-1">
          {word}
        </span>
      ));

  return (
    <section
      ref={sectionRef}
      className="pt-10 pb-10 md:pt-30 md:pb-24 bg-[#181A2A] relative overflow-hidden"
      style={{
        marginTop: "0px",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        backgroundImage: "url('/images/bg10.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background with parallax and wave overlay */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        ref={waveRef}
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(0, 240, 255, 0.2), rgba(0, 255, 148, 0.2), rgba(30, 144, 255, 0.2))",
          backgroundSize: "200% 200%",
        }}
      />
      {/* Particle effect */}
      <div
        ref={particleRef}
        className="absolute inset-0 z-2 pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#00f0ff] to-[#00ff94] rounded-full"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-16 gap-16 w-full">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1
            ref={headerRef}
            className="font-brevis text-4xl md:text-5xl font-bold mb-8 leading-tight drop-shadow-lg"
          >
            {splitHeader}
          </h1>
          <p
            ref={descRef}
            className="text-xl md:text-2xl text-cyan-100 mb-10 max-w-2xl mx-auto md:mx-0"
          >
            {descriptionText}
          </p>
          <div
            ref={btnsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
          >
            <a
              href="#start"
              className="btn btn-gradient px-10 py-4 rounded-full text-[#181A2A] font-bold text-xl shadow-lg transition-transform duration-200 hover:scale-105"
            >
              Get Started Free
            </a>
            <a
              href="#demo"
              className="btn border-2 border-[#00ff94] text-[#00ff94] px-10 py-4 rounded-full font-bold text-xl bg-transparent hover:bg-gradient-to-r hover:from-[#00f0ff] hover:to-[#00ff94] hover:text-[#181A2A] hover:border-[#00ff94] transition-all duration-200 shadow-lg"
            >
              Book a Demo
            </a>
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <img
            ref={imgRef}
            src="/images/heroSection.png"
            alt="Platform Hero"
            className="w-full max-w-2xl md:max-w-3xl object-cover scale-3d"
            style={{ minWidth: "220px" }}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;