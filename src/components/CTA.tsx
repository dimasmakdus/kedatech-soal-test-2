import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "../styles/CTA.module.scss";

interface Props {
  onLogin: () => void;
}

const CTA: React.FC<Props> = ({ onLogin }) => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Siap Mengoptimalkan Bisnis Anda?</h2>
        <p>Bergabung dengan ribuan pengusaha yang telah merasakan kemudahan mengelola inventory dan meningkatkan profit dengan Dimas ERP</p>
        <button onClick={onLogin} className={styles.ctaBtn}>
          Mulai Sekarang <ArrowRight className={styles.icon} />
        </button>
      </div>
    </section>
  );
};

export default CTA;