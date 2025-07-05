import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./License.module.css";

const licenseText = `
END USER LICENSE AGREEMENT (EULA)

1. Acceptance: By using Univade, you agree to be bound by this license.
2. Grant: You are granted a non-exclusive, non-transferable license to use the platform for business or personal use.
3. Restrictions: You may not reverse engineer, redistribute, or resell the platform or its components.
4. Data: You retain ownership of your data. We do not claim rights to your content.
5. Warranty: The platform is provided "as is" without warranty of any kind.
6. Liability: Univade is not liable for any damages arising from use or inability to use the platform.
7. Updates: We may update this agreement. Continued use constitutes acceptance of changes.
`;

const License = () => {
  const titleRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className={styles.licenseSection}>
      <div className={styles.licenseContainer}>
        <h2 ref={titleRef} className={styles.licenseTitle}>
          License Agreement
        </h2>
        <div className={styles.licenseTextBox}>
          <pre className={styles.licenseText}>{licenseText}</pre>
        </div>
        <Link to="/signup">
          <Button
            label="Back to Signup"
            className={styles.backButton}
            icon="pi pi-arrow-left"
          />
        </Link>
      </div>
    </section>
  );
};

export default License;
