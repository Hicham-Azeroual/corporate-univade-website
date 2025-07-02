import { useRef } from "react";
import styles from "./HeroSection.module.css";
import useHeroSectionAnimation from "../../../hooks/useHeroSectionAnimation";

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

  useHeroSectionAnimation({
    sectionRef,
    lettersRef,
    descRef,
    btnsRef,
    imgRef,
    bgRef,
    waveRef,
    particleRef,
  });

  const headerText = "Unleash Creativity with Low-Code Power!";
  const splitHeader = headerText.split("").map((char, i) => (
    <span
      key={i}
      ref={(el) => (lettersRef.current[i] = el)}
      className={styles.heroLetter}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const descriptionText =
    "Empower your ideas with a low-code platform built for speed and innovation. From idea to deployment in minutes — automate workflows, connect data, and craft stunning apps without writing a line of code."
      .split(" ")
      .map((word, i) => (
        <span key={i} className="word" style={{ display: "inline-block", marginRight: "0.25em" }}>
          {word}
        </span>
      ));

  return (
    <section
      ref={sectionRef}
      className={styles.heroSection}

    >
      {/* Background with parallax and wave overlay */}
      <div ref={bgRef} className={styles.heroBg} />
      <div ref={waveRef} className={styles.heroWave} />
      {/* Particle effect */}
      <div ref={particleRef} className={styles.heroParticles}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: "0.5rem",
              height: "0.5rem",
              background: "linear-gradient(135deg, #00f0ff, #00ff94)",
              borderRadius: "9999px",
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
          />
        ))}
      </div>

      <div className={styles.heroContentWrap}>
        {/* Left: Text Content */}
        <div className={styles.heroTextCol}>
          <h1 ref={headerRef} className={styles.heroTitle}>
            {splitHeader}
          </h1>
          <p ref={descRef} className={styles.heroDesc}>
            {descriptionText}
          </p>
          <div ref={btnsRef} className={styles.heroActions}>
            <a
              href="#start"
              className={styles.heroBtn}
            >
              Get Started Free
            </a>
            <a
              href="#demo"
              className={`${styles.heroBtn} ${styles.heroBtnOutline}`}
            >
              Book a Demo
            </a>
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className={styles.heroImgCol}>
          <img
            ref={imgRef}
            src="/images/heroSection.png"
            alt="Platform Hero"
            className={styles.heroImg}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;