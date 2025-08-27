import React from "react";
import { Package } from "lucide-react";
import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Package className={styles.icon} data-testid="package-icon" />
            </div>
            <span className={styles.title}>Dimas ERP</span>
          </div>
        </div>

        <div className={styles.right}>
          <p>© 2025 Dimas ERP. Semua hak dilindungi. <br/> Solusi Dimas ERP terdepan untuk bisnis Indonesia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;