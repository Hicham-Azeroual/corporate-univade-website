import React, { useRef } from "react";
import styles from "./PlatformCoreSection.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const points = [
  {
    title: "Cloud-Native Architecture",
    desc: "Univade is built for the cloud from the ground up, ensuring seamless scalability, high availability, and robust security for all your business apps.",
    icon: "pi pi-cloud",
  },
  {
    title: "Deep Integrations",
    desc: "Effortlessly connect with your favorite tools, databases, and APIs. Univade’s platform makes integrating third-party services and internal systems simple and reliable.",
    icon: "pi pi-cog",
  },
  {
    title: "High Performance",
    desc: "Experience lightning-fast load times and real-time responsiveness. Our optimized engine ensures your apps run smoothly, even at scale.",
    icon: "pi pi-bolt",
  },
  {
    title: "Scalability",
    desc: "Grow without limits. Univade’s microservices-based architecture allows your applications to scale with your business, handling increased demand with ease.",
    icon: "pi pi-chart-line",
  },
];

const PlatformCoreSection = () => {
  const sectionRef = useRef(null);
  const pointRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      pointRefs.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.coreSection}>
      <div className={styles.coreContentWrap}>
        {/* Left: Points/Descriptions */}
        <div className={styles.corePointsCol}>
          {points.map((pt, idx) => (
            <div className={styles.corePointWrapper} key={pt.title}>
              <div
                className={styles.corePoint}
                ref={el => (pointRefs.current[idx] = el)}
              >
                <div className={styles.corePointIcon}>
                  <i className={pt.icon}></i>
                </div>
                <div>
                  <div className={styles.corePointTitle}>{pt.title}</div>
                  <div className={styles.corePointDesc}>{pt.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right: Image */}
        <div className={styles.coreImgCol}>
          <div className={styles.coreImgWrapper}>
            <img
              src="/images/img1.png"
              alt="Platform Core Features"
              className={styles.coreImg}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCoreSection;