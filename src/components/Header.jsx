import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu } from "primereact/menu";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../index.css";

const navMenus = [
	{
		label: "Platform",
		icon: "pi pi-th-large",
		items: [
			{ label: "Overview", url: "#overview" },
			{ label: "Drag-and-Drop Editor", url: "#drag-drop-editor" },
			{ label: "Data Modeling", url: "#data-modeling" },
			{ label: "Cross-Platform Deployment", url: "#cross-platform" },
			{ label: "Integrations", url: "#integrations" },
		],
	},
	{
		label: "Solutions",
		icon: "pi pi-briefcase",
		items: [
			{ label: "Business Apps", url: "#business-apps" },
			{ label: "Customer Portals", url: "#customer-portals" },
			{ label: "Internal Tools", url: "#internal-tools" },
			{ label: "E-Commerce", url: "#e-commerce" },
			{ label: "Custom Workflows", url: "#custom-workflows" },
		],
	},
	{
		label: "Pricing",
		icon: "pi pi-dollar",
		items: [
			{ label: "Free Plan", url: "#free-plan" },
			{ label: "Basic Plan", url: "#basic-plan" },
			{ label: "Pro Plan", url: "#pro-plan" },
			{ label: "Enterprise Plan", url: "#enterprise-plan" },
			{ label: "Compare Plans", url: "#compare-plans" },
		],
	},
	{
		label: "Developers",
		icon: "pi pi-code",
		items: [
			{ label: "Developer Tools", url: "#developer-tools" },
			{ label: "API Documentation", url: "#api-docs" },
			{ label: "Support", url: "#support" },
		],
	},
	{
		label: "Resources",
		icon: "pi pi-book",
		items: [
			{ label: "Tutorials", url: "#tutorials" },
			{ label: "Documentation", url: "#documentation" },
			{ label: "Webinars", url: "#webinars" },
			{ label: "Community Forum", url: "#community-forum" },
			{ label: "FAQ", url: "#faq" },
		],
	},
];

const Header = () => {
	const menuRefs = useRef([]);
	const [sidebarVisible, setSidebarVisible] = useState(false);
	const [selectedMenu, setSelectedMenu] = useState(null);
	const [searchOpen, setSearchOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleMenuToggle = (label) => {
		setSelectedMenu(selectedMenu === label ? null : label);
	};

	return (
		<header
			className={`bg-[#1A1A2A] h-20 flex items-center justify-between px-6 md:px-10 shadow-lg z-30 w-full fixed top-0 left-0 transition-all duration-300 ${
				scrolled
					? "backdrop-blur-md bg-[#1A1A2A]/90 shadow-2xl scale-[1.01]"
					: ""
			}`}
		>
			{/* Logo */}
			<div className="flex items-center">
				<span className="font-bitcount font-bold text-3xl md:text-4xl tracking-wide flex gap-0.5 logo-animate">
					<span className="logo-letter" style={{ color: "#00f0ff" }}>
						U
					</span>
					<span className="logo-letter" style={{ color: "#00ff94" }}>
						n
					</span>
					<span className="logo-letter" style={{ color: "#00eeff" }}>
						i
					</span>
					<span className="logo-letter" style={{ color: "#00ff94" }}>
						v
					</span>
					<span className="logo-letter" style={{ color: "#00f0ff" }}>
						a
					</span>
					<span className="logo-letter" style={{ color: "#00ff94" }}>
						d
					</span>
					<span className="logo-letter" style={{ color: "#00f0ff" }}>
						e
					</span>
				</span>
			</div>

			{/* Desktop Navigation */}
			<nav className="hidden md:flex items-center gap-6">
				{navMenus.map((nav, idx) => (
					<div key={nav.label} className="relative">
						<button
							className="nav-link flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#232346] transition-colors duration-200"
							onClick={(e) => menuRefs.current[idx]?.toggle(e)}
							type="button"
						>
							<i className={`${nav.icon} text-cyan-300`}></i>
							<span>{nav.label}</span>
							<i className="pi pi-angle-down text-xs text-cyan-300"></i>
						</button>
						<Menu
							model={nav.items}
							popup
							ref={(el) => (menuRefs.current[idx] = el)}
							className="bg-[#232346] border-none min-w-[200px] text-white"
							pt={{
								root: { className: "bg-[#232346] border-none" },
								menu: { className: "bg-[#232346]" },
								menuitem: {
									className: "group transition-all duration-200",
								},
								action: {
									className:
										"text-white group-hover:bg-gradient-to-r group-hover:from-[#00f0ff] group-hover:to-[#00ff94] group-hover:!text-[#181A2A] transition-all duration-200",
								},
							}}
						/>
					</div>
				))}
			</nav>

			{/* Mobile Hamburger Icon */}
			<button
				className="md:hidden text-cyan-300 text-2xl"
				onClick={() => setSidebarVisible(true)}
				type="button"
			>
				<i className="pi pi-bars"></i>
			</button>

			{/* Mobile Sidebar */}
			<Sidebar
				visible={sidebarVisible}
				onHide={() => {
					setSidebarVisible(false);
					setSelectedMenu(null); // Reset selected menu when sidebar closes
				}}
				position="right"
				className="bg-[#232346] w-64"
				pt={{
					root: { className: "bg-[#232346]" },
					header: { className: "bg-[#232346] border-none" },
					content: { className: "bg-[#232346] p-0" },
				}}
			>
				<div className="flex flex-col gap-2 p-4">
					{navMenus.map((nav) => (
						<div key={nav.label} className="border-b border-[#2a2a3b]">
							<button
								className="flex items-center gap-2 px-4 py-3 text-white w-full text-left hover:bg-[#2a2a3b] transition-colors duration-200"
								onClick={() => handleMenuToggle(nav.label)}
							>
								<i className={`${nav.icon} text-cyan-300`}></i>
								<span className="font-medium">{nav.label}</span>
								<i
									className={`pi ${
										selectedMenu === nav.label
											? "pi-angle-up"
											: "pi-angle-down"
									} text-cyan-300 ml-auto`}
								></i>
							</button>
							{selectedMenu === nav.label && (
								<Menu
									model={nav.items}
									className="bg-[#232346] border-none w-full"
									pt={{
										root: { className: "bg-[#232346] border-none" },
										menu: { className: "bg-[#232346]" },
										menuitem: {
											className: "group transition-all duration-200",
										},
										action: {
											className:
												"text-white group-hover:bg-gradient-to-r group-hover:from-[#00f0ff] group-hover:to-[#00ff94] group-hover:!text-[#181A2A] transition-all duration-200",
										},
									}}
								/>
							)}
						</div>
					))}
					{/* Action Buttons in Sidebar */}
					<div className="flex flex-col gap-3 mt-4">
						<a
							href="#demo"
							className="btn-gradient font-bold px-6 py-2 rounded-full text-[#1A1A2A] shadow-md text-base transition-transform duration-200 hover:scale-105 text-center"
						>
							Book Demo
						</a>
						<a
							href="#start"
							className="bg-white border-2 border-[#00f0ff] text-cyan-600 font-bold px-6 py-2 rounded-full text-base transition-all duration-200 hover:bg-gradient-to-r hover:from-[#00f0ff] hover:to-[#00ff94] hover:text-[#181A2A] hover:border-[#00ff94] hover:shadow-lg text-center"
						>
							Start Free
						</a>
					</div>
				</div>
			</Sidebar>

			{/* Action Buttons (Hidden on Mobile) */}
			<div className="hidden md:flex items-center gap-4">
				<a
					href="#demo"
					className="btn-gradient font-bold px-6 py-2 rounded-full text-[#1A1A2A] shadow-md text-base transition-transform duration-200 hover:scale-105"
				>
					Book Demo
				</a>
				<a
					href="#start"
					className="bg-white border-2 border-[#00f0ff] text-cyan-600 font-bold px-6 py-2 rounded-full text-base transition-all duration-200 hover:bg-gradient-to-r hover:from-[#00f0ff] hover:to-[#00ff94] hover:text-[#1A1A2A] hover:border-[#00ff94] hover:shadow-lg"
				>
					Start Free
				</a>
			</div>

			{/* Search Portal */}
			<SearchPortal open={searchOpen} onClose={() => setSearchOpen(false)} />
		</header>
	);
};

function SearchPortal({ open, onClose }) {
	if (!open) return null;
	return createPortal(
		<div
			className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/40"
			onClick={onClose}
		>
			<div
				className="mt-32 bg-[#232346] rounded-xl shadow-xl p-6 flex items-center gap-2"
				onClick={(e) => e.stopPropagation()}
			>
				<input
					autoFocus
					type="text"
					placeholder="Search…"
					className="w-72 px-4 py-2 rounded-lg bg-[#181A2A] text-white border border-[#00f0ff] focus:outline-none focus:ring-2 focus:ring-[#00ff94] transition"
				/>
				<button
					className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#00ff94] text-[#181A2A] font-bold"
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>,
		document.getElementById("input")
	);
}

export default Header;
