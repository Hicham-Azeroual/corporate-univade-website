import React, { useRef, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./SuccessStoriesSection.module.css";

const stories = [
  {
    client: "TechCorp",
    quote: "We built a customer portal in days, not months, thanks to Univade’s intuitive platform.",
    metric: "60% faster development",
    bgImage: "/images/person.jpg",
  },
  {
    client: "HealthPlus",
    quote: "Univade helped us automate patient workflows, saving hours daily.",
    metric: "30% increase in efficiency",
    bgImage: "/images/person.jpg",
  },
  {
    client: "RetailX",
    quote: "Our e-commerce app was live in under a week with Univade’s low-code tools.",
    metric: "50% reduction in launch time",
    bgImage: "/images/person1.jpg",
  },
];

const SuccessStoriesSection = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const titleRef = useRef(null);
  const leadRef = useRef(null);
  const progressRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    // Section animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
    // Lead text animation
    gsap.fromTo(
      leadRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );
    // Carousel item animation
    gsap.fromTo(
      `.${styles.carouselItem}`,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.7 }
    );
    // Progress bar animation (reset on slide change)
    gsap.fromTo(
      progressRef.current,
      { width: "0%" },
      { width: "100%", duration: 5, ease: "linear", repeat: -1 }
    );
  }, [activeIndex]);

  const carouselTemplate = (story) => (
    <div
      className={styles.carouselItem}
      style={{ backgroundImage: `url(${story.bgImage})` }}
    >
      <div className={styles.carouselOverlay}></div>
      <div className={styles.carouselContent}>
        <p className={`${styles.storyQuote} font-main text-light`}>
          "{story.quote}"
        </p>
        <p className={`${styles.storyMetric} font-main text-accent`}>
          {story.metric}
        </p>
        <p className={`${styles.storyClient} font-main text-light`}>
          — {story.client}
        </p>
      </div>
    </div>
  );

  const thumbnailTemplate = (story, index) => (
    <div
      className={`${styles.thumbnailItem} ${
        index === activeIndex ? styles.thumbnailActive : ""
      }`}
      onClick={() => carouselRef.current.navigateTo(index)}
    >
      <span className={`${styles.thumbnailClient} font-main text-light`}>
        {story.client}
      </span>
    </div>
  );

  return (
    <section ref={sectionRef} className={`${styles.successSection} section-bg`}>
      <div className={styles.successContentWrap}>
        <h2
          ref={titleRef}
          className={`${styles.successTitle} font-main text-brand glitch-text`}
          data-text="Trusted by Innovators Worldwide"
        >
          Trusted by Innovators Worldwide
        </h2>
        <p ref={leadRef} className={`${styles.successLead} font-main text-light`}>
          Discover how businesses are transforming with Univade’s low-code platform.
        </p>
        <Carousel
          ref={carouselRef}
          value={stories}
          itemTemplate={carouselTemplate}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={5000}
          className={styles.carousel}
          showIndicators={false}
          showNavigators
          onPageChange={(e) => setActiveIndex(e.page)}
          pt={{
            root: { className: styles.carouselRoot },
            content: { className: styles.carouselContentWrap },
            previousButton: { className: `${styles.carouselNav} text-brand` },
            nextButton: { className: `${styles.carouselNav} text-brand` },
          }}
        />
        <div className={styles.progressBar}>
          <div ref={progressRef} className={styles.progressFill}></div>
        </div>
        <div className={styles.thumbnailContainer}>
          {stories.map((story, index) => thumbnailTemplate(story, index))}
        </div>
        <Button
          label="View All Success Stories"
          className={`${styles.successBtn} btn-main font-main animate-gradient-x`}
          icon="pi pi-arrow-right"
          iconPos="right"
        />
      </div>
    </section>
  );
};

export default SuccessStoriesSection;