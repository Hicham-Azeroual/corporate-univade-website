import React from "react";
import { Button } from "primereact/button";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const colorBrand = "var(--color-brand)";
  const colorAccent = "var(--color-accent)";

  const quickLinks = [
    { label: "Accueil", url: "#" },
    { label: "Fonctionnalités", url: "#features" },
    { label: "Tarifs", url: "#pricing" },
    { label: "Templates", url: "#templates" },
    { label: "Blog", url: "#blog" }
  ];

  const resources = [
    { label: "Documentation", url: "#docs" },
    { label: "Tutoriels", url: "#tutorials" },
    { label: "API", url: "#api" },
    { label: "Statut", url: "#status" },
    { label: "Support", url: "#support" }
  ];

  const socialLinks = [
    { icon: "pi pi-twitter", url: "#", label: "Twitter" },
    { icon: "pi pi-linkedin", url: "#", label: "LinkedIn" },
    { icon: "pi pi-github", url: "#", label: "GitHub" },
    { icon: "pi pi-youtube", url: "#", label: "YouTube" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className={styles.logoPart1} style={{ color: colorBrand }}>NO</span>
              <span className={styles.logoPart2} style={{ color: colorAccent }}>CODE</span>
            </div>
            <p className={styles.footerDescription}>
              La plateforme qui transforme vos idées en applications sans écrire une seule ligne de code.
            </p>
            <div className={styles.footerSocial}>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  icon={social.icon}
                  className={styles.socialIcon}
                  text
                  aria-label={social.label}
                  onClick={() => window.open(social.url, "_blank")}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerLinks}>
            <h3 className={styles.footerTitle}>Liens Rapides</h3>
            <ul className={styles.footerList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    label={link.label}
                    link
                    className={styles.footerLink}
                    onClick={() => window.location.href = link.url}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.footerLinks}>
            <h3 className={styles.footerTitle}>Ressources</h3>
            <ul className={styles.footerList}>
              {resources.map((resource, index) => (
                <li key={index}>
                  <Button
                    label={resource.label}
                    link
                    className={styles.footerLink}
                    onClick={() => window.location.href = resource.url}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.footerNewsletter}>
            <h3 className={styles.footerTitle}>Newsletter</h3>
            <p className={styles.footerText}>
              Abonnez-vous pour recevoir les dernières actualités et offres spéciales.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Votre email"
                className={styles.newsletterInput}
              />
              <Button
                label="S'abonner"
                className={styles.newsletterButton}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            &copy; {currentYear} NoCode Platform. Tous droits réservés.
          </div>
          <div className={styles.footerLegal}>
            <Button
              label="Conditions d'utilisation"
              link
              className={styles.legalLink}
            />
            <Button
              label="Politique de confidentialité"
              link
              className={styles.legalLink}
            />
            <Button
              label="Cookies"
              link
              className={styles.legalLink}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;