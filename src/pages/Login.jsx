import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./Login.module.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
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
  }, []);

  return (
    <section className={styles.loginSection} ref={containerRef}>
      <div className={styles.loginContainer}>
        <h2 ref={titleRef} className={styles.loginTitle}>
          Welcome Back to Univade
        </h2>
        <p className={styles.loginSubtitle}>
          Log in to your account and continue building amazing apps.
        </p>
        <div className={styles.formWrapper} ref={formRef}>
          <form
            className={styles.loginForm}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
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
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <Password
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your password"
                toggleMask
                feedback={false}
                required
              />
            </div>
            <div className={styles.checkboxGroup}>
              <Checkbox
                inputId="remember"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className={styles.checkbox}
              />
              <label htmlFor="remember" className={styles.checkboxLabel}>
                Remember me
              </label>
            </div>
            <Button
              type="submit"
              label="Log In"
              className={styles.submitButton}
              icon="pi pi-sign-in"
            />
          </form>
          <div className={styles.loginLinks}>
            <Link to="/signup">Don't have an account? Sign up</Link>
            <span>·</span>
            <Link to="/forgot">Forgot password?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
