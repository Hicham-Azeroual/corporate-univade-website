import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function useHeroSectionAnimation({
  sectionRef,
  descRef,
  btnsRef,
}) {
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
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
    const buttons = btnsRef.current.querySelectorAll("a");
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
  }, []);
}
