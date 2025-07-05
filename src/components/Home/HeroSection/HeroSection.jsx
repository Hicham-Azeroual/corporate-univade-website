import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import useHeroSectionAnimation from "../../../hooks/useHeroSectionAnimation";

const HeroSection = () => {
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const headerRef = useRef(null);
  const sectionRef = useRef(null);

  useHeroSectionAnimation({
    sectionRef,
    descRef,
    btnsRef,
  });

  const descriptionText =
    "Empower your ideas with a low-code platform built for speed and innovation. From idea to deployment in minutes — automate workflows, connect data, and craft stunning apps without writing a line of code."
      .split(" ")
      .map((word, i) => (
        <span
          key={i}
          className="word"
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </span>
      ));

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div className={styles.heroContentWrap}>
        {/* Left: Text Content */}
        <div className={styles.heroTextCol}>
          <h1 ref={headerRef} className={styles.simpleHeroTitle}>
            Build Enterprise Apps. Visually. Instantly.
          </h1>
          <p ref={descRef} className={styles.heroDesc}>
            {descriptionText}
          </p>
          <div ref={btnsRef} className={styles.heroActions}>
            <Link to="/signup" className={styles.heroBtn}>
              Get Started Free
            </Link>
            <Link
              to="/signup"
              className={`${styles.heroBtn} ${styles.heroBtnOutline}`}
            >
              Book a Demo
            </Link>
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className={styles.heroImgCol}>
          <img
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
