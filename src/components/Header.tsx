import React, { useState, useEffect } from "react";
import { Package, Menu, X, Sun, Moon } from "lucide-react";
import styles from "../styles/Header.module.scss";

interface Props {
  onLogin: () => void;
}

const Header: React.FC<Props> = ({ onLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "light");

  const publicMenus = [
    { id: "features", name: "Feature" },
    { id: "pricing", name: "Pricing" },
    { id: "about", name: "About" },
    { id: "contact", name: "Contact" },
  ]

  useEffect(() => {
    setScrolled(window.scrollY > 50);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 60; // offset
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = sectionTop - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Package className={styles.icon} />
          </div>
          <span className={styles.logoText}>Dimas ERP</span>
        </div>

        {/* Desktop & Mobile Menu */}
        <nav className={isMenuOpen ? styles.navMobile : styles.navDesktop}>
          {publicMenus.map((menu: any) =>
            <a onClick={() => handleScrollTo(menu.id)}>{menu.name}</a>
          )}
          <button onClick={onLogin} className={styles.loginBtn}>
            Masuk
          </button>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;