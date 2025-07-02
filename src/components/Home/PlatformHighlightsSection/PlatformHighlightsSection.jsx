import React, { useRef } from "react";
import styles from "./PlatformHighlightsSection.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const cards = [
  {
    icon: "pi pi-bolt",
    title: "AI-Driven Automation",
    subtitle: "Let Intelligence Power Your Apps.",
    points: [
      "Automate complex workflows and repetitive tasks with built-in AI.",
      "Accelerate business processes and boost productivity effortlessly.",
    ],
  },
  {
    icon: "pi pi-th-large",
    title: "Visual App Creation",
    subtitle: "Drag, Drop, Build—No Limits.",
    points: [
      "Design custom business apps with an intuitive visual editor.",
      "Empower teams to innovate without deep technical skills.",
    ],
  },
  {
    icon: "pi pi-code",
    title: "Low-Code Flexibility",
    subtitle: "For Developers & Power Users.",
    points: [
      "Extend and customize with code when you need advanced logic.",
      "Seamlessly integrate APIs, databases, and external services.",
    ],
  },
];

const PlatformHighlightsSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 60, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.highlightsSection}>
      <div className={styles.highlightsIntro}>
        <h2 className={styles.highlightsMainTitle}>
          The Future of Low-Code App Development—Fast, Smart & Limitless
        </h2>
        <p className={styles.highlightsLead}>
          Univade empowers everyone to build enterprise-grade applications faster, smarter, and without boundaries. Whether you’re a business user or a developer, Univade is your all-in-one platform for digital innovation.
        </p>
      </div>
      <div className={styles.highlightsCardsWrap}>
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className={styles.highlightsCard}
            ref={el => (cardRefs.current[idx] = el)}
          >
            <div className={styles.highlightsCardIcon}>
              <i className={card.icon}></i>
            </div>
            <div className={styles.highlightsCardTitle}>{card.title}</div>
            <div className={styles.highlightsCardSubtitle}>{card.subtitle}</div>
            <ul className={styles.highlightsCardList}>
              {card.points.map((pt, i) => (
                <li key={i} className={styles.highlightsCardPoint}>
                  <i className="pi pi-check" /> {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.highlightsActionWrap}>
        <a href="#start" className={styles.highlightsBtn}>
          Start Building Smarter Apps
        </a>
      </div>
    </section>
  );
};

export default PlatformHighlightsSection;