import React, { useState, useRef, useEffect } from "react";
import { Menu } from "primereact/menu";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./Header.module.css";
import navMenus from "../../../constants-data/navMenus";

const Header = () => {
	const menuRefs = useRef([]);
	const [sidebarVisible, setSidebarVisible] = useState(false);
	const [selectedMenu, setSelectedMenu] = useState(null);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleMenuToggle = (label) => {
		setSelectedMenu(selectedMenu === label ? null : label);
	};

	// Close sidebar when clicking on menu items
	const handleMenuItemClick = () => {
		setSidebarVisible(false);
		setSelectedMenu(null);
	};

	// Use CSS variable for colors
	const colorBrand = "var(--color-brand)";
	const colorAccent = "var(--color-accent)";
	const colorAlt = "var(--color-alt)";

	return (
		<header
			className={`${
				scrolled ? styles.headerMainScrolled : ""
			} ${styles.headerMain}`}
		>
			{/* Logo */}
			<div className={styles.headerLogoWrap}>
				<span className={`${styles.headerLogo} ${styles.logoAnimate}`}>
					<span className={styles.logoLetter} style={{ color: colorBrand }}>
						U
					</span>
					<span className={styles.logoLetter} style={{ color: colorAccent }}>
						n
					</span>
					<span className={styles.logoLetter} style={{ color: colorAlt }}>
						i
					</span>
					<span className={styles.logoLetter} style={{ color: colorAccent }}>
						v
					</span>
					<span className={styles.logoLetter} style={{ color: colorBrand }}>
						a
					</span>
					<span className={styles.logoLetter} style={{ color: colorAccent }}>
						d
					</span>
					<span className={styles.logoLetter} style={{ color: colorBrand }}>
						e
					</span>
				</span>
			</div>

			{/* Desktop Navigation */}
			<nav className={styles.headerNav}>
				{navMenus.map((nav, idx) => (
					<div key={nav.label} className={styles.headerNavItem}>
						<button
							className={styles.navLink}
							onClick={(e) => menuRefs.current[idx]?.toggle(e)}
							type="button"
						>
							<i className={`${nav.icon} ${styles.navLinkIcon}`}></i>
							<span>{nav.label}</span>
							<i className={`pi pi-angle-down ${styles.navLinkCaret}`}></i>
						</button>
						<Menu
							model={nav.items}
							popup
							ref={(el) => (menuRefs.current[idx] = el)}
							className={styles.headerMenuPopup}
						/>
					</div>
				))}
			</nav>

			{/* Desktop Action Buttons */}
			<div className={styles.headerActions}>
				<a href="#demo" className="btn-main">
					Book Demo
				</a>
				<a
					href="#start"
					className="btn-main"
					style={{
						background: "transparent",
						color: colorAccent,
						border: `2px solid ${colorAccent}`,
					}}
				>
					Start Free
				</a>
			</div>

			{/* Mobile Hamburger Icon */}
			<button
				className={styles.headerHamburger}
				onClick={() => setSidebarVisible(true)}
				type="button"
				aria-label="Open menu"
			>
				<i className="pi pi-bars"></i>
			</button>

			{/* Mobile Sidebar */}
			<Sidebar
				visible={sidebarVisible}
				onHide={() => {
					setSidebarVisible(false);
					setSelectedMenu(null);
				}}
				position="right"
				className={styles.headerSidebar}
				style={{ width: "280px" }}
				showCloseIcon={false} // <-- Add this line
			>
				<div className={styles.headerSidebarContentInner}>
					{/* Close Button at Top */}
					<div className={styles.headerSidebarTopRow}>
						<span className={styles.headerSidebarMenuTitle}>Menu</span>
						<button
							className={styles.headerSidebarClose}
							onClick={() => setSidebarVisible(false)}
							aria-label="Close menu"
						>
							<i className="pi pi-times"></i>
						</button>
					</div>

					{/* Navigation Menu */}
					{navMenus.map((nav) => (
						<div key={nav.label} className={styles.headerSidebarMenu}>
							<button
								className={styles.headerSidebarMenuBtn}
								onClick={() => handleMenuToggle(nav.label)}
								type="button"
							>
								<i
									className={`${nav.icon} ${styles.headerSidebarMenuIcon}`}
									style={{ color: colorBrand }}
								></i>
								<span className={styles.headerSidebarMenuLabel}>
									{nav.label}
								</span>
								<i
									className={`pi ${
										selectedMenu === nav.label
											? "pi-angle-up"
											: "pi-angle-down"
									} ${styles.headerSidebarMenuCaret}`}
									style={{ color: colorBrand }}
								></i>
							</button>
							{selectedMenu === nav.label && (
								<div className={styles.headerSidebarSubmenu}>
									{nav.items.map((item, index) => (
										<a
											key={index}
											href={item.url}
											className={styles.headerSidebarSubmenuItem}
											onClick={handleMenuItemClick}
										>
											{item.label}
										</a>
									))}
								</div>
							)}
						</div>
					))}

					{/* Action Buttons in Sidebar */}
					<div className={styles.headerSidebarActions}>
						<a
							href="#demo"
							className={`btn-main ${styles.headerSidebarActionDemo}`}
							onClick={handleMenuItemClick}
						>
							Book Demo
						</a>
						<a
							href="#start"
							className={`btn-main ${styles.headerSidebarActionStart}`}
							onClick={handleMenuItemClick}
						>
							Start Free
						</a>
					</div>
				</div>
			</Sidebar>
		</header>
	);
};

export default Header;
