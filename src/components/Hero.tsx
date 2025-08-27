import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "../styles/Hero.module.scss";

interface Props {
  onLogin: () => void;
}

const Hero: React.FC<Props> = ({ onLogin }) => {
  return (
    <section id="heros" className={styles.hero}>
      <div className={styles.container}>
        <h1>
          Kelola Inventory Bisnis Anda dengan{" "}
          <span className={styles.gradient}>Mudah & Cerdas</span>
        </h1>
        <p>
          Sistem Dimas ERP terintegrasi untuk mencatat stok masuk-keluar, analisis
          keuntungan real-time, dan prediksi AI untuk bisnis yang lebih
          menguntungkan
        </p>
        <div className={styles.actions}>
          <button onClick={onLogin} className={styles.btnPrimary}>
            Mulai Gratis <ArrowRight className={styles.icon} />
          </button>
          <button className={styles.btnOutline}>Lihat Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;