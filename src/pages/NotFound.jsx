import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => (
  <div className={styles.notFoundContainer}>
    <img
      src="/images/notFound.jpg"
      alt="404 Not Found"
      className={styles.notFoundImage}
    />
    <h1 className="section-title">Page Not Found</h1>
    <p className="section-lead">
      Oops! The page you are looking for does not exist or has been moved.
      <br />
      Let's get you back to safety.
    </p>
    <Link to="/" className="btn-primary">
      Go to Home
    </Link>
  </div>
);

export default NotFound;
