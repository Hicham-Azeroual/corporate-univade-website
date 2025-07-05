import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./Signup.module.css";

const features = [
  {
    icon: "pi pi-bolt",
    title: "Build Better",
    desc: "Create apps with AI-powered tools and pre-built integrations.",
  },
  {
    icon: "pi pi-forward",
    title: "Ship Faster",
    desc: "Launch 10x quicker with reusable UI and code modules.",
  },
  {
    icon: "pi pi-cog",
    title: "Manage Easily",
    desc: "Automate testing, security, and monitoring effortlessly.",
  },
  {
    icon: "pi pi-sync",
    title: "Evolve Freely",
    desc: "Adapt apps to new needs with minimal rework.",
  },
];

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    license: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add validation and API call here
  };

  // GSAP animations for entrance
  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(
      `.${styles.featureItem}`,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", stagger: 0.2, delay: 0.5 }
    );
  }, []);

  return (
    <section className={styles.signupSection} ref={containerRef}>
      <div className={styles.signupContainer}>
        <h2 ref={titleRef} className={styles.signupTitle}>
          Join Univade's Low-Code Revolution
        </h2>
        <p className={styles.signupSubtitle}>
          Start your free trial and transform how you build apps today.
        </p>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <i className={`pi ${feature.icon} ${styles.featureIcon}`} />
              <div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.formWrapper} ref={formRef}>
          <form className={styles.signupForm} onSubmit={handleSubmit} autoComplete="off">
            <div className={styles.inputGroup}>
              <InputText
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your email"
                required
                autoFocus
              />
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <InputText
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="First name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <InputText
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <Password
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={styles.input}
                placeholder="Create a password"
                toggleMask
                feedback={false}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <Password
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className={styles.input}
                placeholder="Confirm password"
                toggleMask
                feedback={false}
                required
              />
            </div>
            <div className={styles.checkboxGroup}>
              <Checkbox
                inputId="licenseesine"
                name="license"
                checked={form.license}
                onChange={handleChange}
                required
                className={styles.checkbox}
              />
              <label htmlFor="license" className={styles.checkboxLabel}>
                I agree to the{" "}
                <Link to="/license" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </Link>
              </label>
            </div>
            <Button
              type="submit"
              label="Start Free Trial"
              className={styles.submitButton}
              icon="pi pi-rocket"
              disabled={!form.license}
            />
          </form>
          <p className={styles.loginPrompt}>
            Already a member? <Link to="/login">Log in here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;