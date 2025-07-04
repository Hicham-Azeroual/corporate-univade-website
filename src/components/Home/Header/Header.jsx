import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Accordion, AccordionTab } from "primereact/accordion";
import styles from "./Header.module.css";
import navMenus from "../../../constants-data/navMenus";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuItemClick = () => {
    setSidebarVisible(false);
    setActiveIndex(null);
  };

  const colorBrand = "var(--color-brand)";
  const colorAccent = "var(--color-accent)";
  const colorAlt = "var(--color-alt)";

  return (
    <header className={`${styles.headerMain} ${scrolled ? styles.headerScrolled : ''}`}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <a href="/" className={styles.logoLink}>
          <span className={styles.logoText}>
            {['U', 'n', 'i', 'v', 'a', 'd', 'e'].map((letter, index) => (
              <span 
                key={index}
                className={styles.logoLetter}
                style={{
                  color: index % 2 === 0 ? colorBrand : index % 3 === 1 ? colorAccent : colorAlt,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navList}>
          {navMenus.map((menu, index) => (
            <li key={index} className={styles.navItem}>
              {menu.items ? (
                <div className={styles.dropdown}>
                  <Button 
                    label={menu.label} 
                    text 
                    className={styles.navLink}
                    icon={menu.icon}
                    iconPos="left"
                  />
                  <div className={styles.dropdownContent}>
                    {menu.items.map((item, idx) => (
                      <a 
                        key={idx} 
                        href={item.url} 
                        className={styles.dropdownLink}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href={menu.url} className={styles.navLink}>
                  {menu.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Action Buttons */}
      <div className={styles.actionButtons}>
        <Button 
          label="Book Demo" 
          className={`${styles.actionButton} ${styles.primaryButton}`}
          href="#demo"
        />
        <Button 
          label="Start Free" 
          className={`${styles.actionButton} ${styles.secondaryButton}`}
          href="#start"
        />
      </div>

      {/* Mobile Menu Button */}
      <Button 
        icon="pi pi-bars" 
        className={styles.mobileMenuButton}
        onClick={() => setSidebarVisible(true)}
        text
        aria-label="Menu"
      />

      {/* Mobile Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        position="right"
        className={styles.mobileSidebar}
        showCloseIcon={false}
        blockScroll
      >
        <div className={styles.sidebarHeader}>
          <h3 className={styles.sidebarTitle}>Menu</h3>
          <Button 
            icon="pi pi-times" 
            className={styles.sidebarCloseButton}
            onClick={() => setSidebarVisible(false)}
            text
            aria-label="Close"
          />
        </div>

        <Accordion
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
          className={styles.sidebarAccordion}
        >
          {navMenus.map((menu, index) => (
            <AccordionTab
              key={index}
              header={
                <div className={styles.accordionHeader}>
                  <i className={`pi ${menu.icon} ${styles.accordionIcon}`} />
                  <span>{menu.label}</span>
                </div>
              }
              className={styles.accordionTab}
            >
              {menu.items && menu.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className={styles.accordionLink}
                  onClick={handleMenuItemClick}
                >
                  {item.label}
                </a>
              ))}
            </AccordionTab>
          ))}
        </Accordion>

        <div className={styles.sidebarActions}>
          <Button 
            label="Book Demo" 
            className={`${styles.sidebarButton} ${styles.primaryButton}`}
            onClick={handleMenuItemClick}
            href="#demo"
          />
          <Button 
            label="Start Free" 
            className={`${styles.sidebarButton} ${styles.secondaryButton}`}
            onClick={handleMenuItemClick}
            href="#start"
          />
        </div>
      </Sidebar>
    </header>
  );
};

export default Header;