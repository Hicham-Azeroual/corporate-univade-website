import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "primereact/button";
import styles from "./AISupportSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const AISupportSection = () => {
  const sectionRef = useRef();
  const imageRef = useRef();
  const contentRef = useRef();

  return (
    <section ref={sectionRef} className={`${styles.aiSection} p-4`}>
      <div className={styles.container}>
        {/* Image on the left */}
        <div ref={imageRef} className={styles.imageContainer}>
          <img
            src="images/robo.jpg"
            alt="AI Building Assistant"
            className={styles.aiImage}
          />
          <div className={styles.glowEffect}></div>
        </div>

        {/* Content on the right */}
        <div ref={contentRef} className={styles.content}>
          <span className={styles.subtitle}>AI-Powered Development</span>
          <h2 className="section-title">
            Build Smarter with Our{" "}
            <span className={styles.highlight}>AI Assistant</span>
          </h2>
          <p className="section-lead">
            Our platform integrates cutting-edge AI to help you create
            applications faster and smarter. The AI assistant suggests
            components, automates workflows, and even writes code snippets when
            you need them - all while keeping you in the no-code environment.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <i
                className="pi pi-bolt"
                style={{ color: "var(--color-brand)" }}
              ></i>
              <span>Smart Component Suggestions</span>
            </div>
            <div className={styles.featureItem}>
              <i
                className="pi pi-cog"
                style={{ color: "var(--color-accent)" }}
              ></i>
              <span>Automated Workflow Builder</span>
            </div>
            <div className={styles.featureItem}>
              <i
                className="pi pi-code"
                style={{ color: "var(--color-alt)" }}
              ></i>
              <span>Code Snippet Generation</span>
            </div>
          </div>

          <div className={styles.buttons}>
            <Button
              label="Try AI Builder"
              className="btn-primary p-button-rounded"
              icon="pi pi-robot"
            />
            <Button
              label="See Demo"
              className="btn-outline p-button-rounded p-button-outlined"
              icon="pi pi-play"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISupportSection;
