import React, { useRef, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./SuccessStoriesSection.module.css";

const stories = [
  {
    client: "TechCorp",
    quote:
      "We built a customer portal in days, not months, thanks to Univade's intuitive platform.",
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
    quote:
      "Our e-commerce app was live in under a week with Univade's low-code tools.",
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
        <div className={styles.quoteIcon}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17H10C11.654 17 13 15.654 13 14V11C13 9.346 11.654 8 10 8H8V10H10C10.552 10 11 10.449 11 11V14C11 14.551 10.552 15 10 15H7V17ZM14 17H17C18.654 17 20 15.654 20 14V11C20 9.346 18.654 8 17 8H15V10H17C17.553 10 18 10.449 18 11V14C18 14.551 17.553 15 17 15H14V17Z"
              fill="var(--color-accent)"
            />
          </svg>
        </div>
        <p className={`${styles.storyQuote} font-main text-light`}>
          {story.quote}
        </p>
        <div className={styles.storyFooter}>
          <p className={`${styles.storyMetric} font-main text-accent`}>
            {story.metric}
          </p>
          <p className={`${styles.storyClient} font-main text-light`}>
            — {story.client}
          </p>
        </div>
      </div>
    </div>
  );

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (carouselRef.current && carouselRef.current.navigateTo) {
      carouselRef.current.navigateTo(index);
    }
  };

  const thumbnailTemplate = (story, index) => (
    <div
      className={`${styles.thumbnailItem} ${
        index === activeIndex ? styles.thumbnailActive : ""
      }`}
      onClick={() => handleThumbnailClick(index)}
    >
      <span className={`${styles.thumbnailClient} font-main text-light`}>
        {story.client}
      </span>
      {index === activeIndex && (
        <div className={styles.thumbnailIndicator}></div>
      )}
    </div>
  );

  return (
    <section ref={sectionRef} className={`${styles.successSection} section-bg`}>
      <div className={styles.successContentWrap}>
        <div className={styles.sectionHeader}>
          <h2
            ref={titleRef}
            className={`${styles.successTitle} font-main text-brand`}
          >
            Trusted by Innovators Worldwide
          </h2>
          <p
            ref={leadRef}
            className={`${styles.successLead} font-main text-light`}
          >
            Discover how businesses are transforming with Univade's low-code
            platform.
          </p>
        </div>

        <div className={styles.carouselContainer}>
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
        </div>

        <div className={styles.thumbnailContainer}>
          {stories.map((story, index) => thumbnailTemplate(story, index))}
        </div>

        <Button
          label="View All Success Stories"
          className={`${styles.successBtn} font-main`}
          icon="pi pi-arrow-right"
          iconPos="right"
          rounded
        />
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
