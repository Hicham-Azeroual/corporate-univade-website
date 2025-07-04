import React, { useRef } from "react";
import styles from "./DefinitionSection.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const DefinitionSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 80, scale: 0.96 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.definitionSection}>
      <div className={styles.definitionContentWrap}>
        {/* Left: Image */}
        <div className={styles.definitionImgCol}>
          <img
            ref={imgRef}
            src="/images/heroSection4.png"
            alt="Low-Code Platform Illustration"
            className={styles.definitionImg}
            loading="lazy"
          />
        </div>
        {/* Right: Definition Text */}
        <div className={styles.definitionTextCol}>
          <h2 className="section-title">What is a Low-Code Platform?</h2>
          <p className="section-lead">
            A <span className={styles.highlight}>Low-Code Platform</span>{" "}
            enables developers and business users to build, customize, and
            deploy applications with minimal hand-coding. By combining visual
            development tools with the flexibility to add custom code, low-code
            platforms accelerate digital transformation, automate workflows, and
            empower teams to deliver solutions faster and more efficiently.
          </p>
          <a href="#start" className="btn-primary">
            Start Building Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DefinitionSection;
