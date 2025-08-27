import React from "react";
import styles from "../styles/About.module.scss";
import { Building2, Users, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tentang Kami</h2>
        <p className={styles.subtitle}>
          ERP kami membantu bisnis Anda tumbuh dengan sistem yang terintegrasi, 
          efisien, dan mudah digunakan.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <Building2 className={styles.icon} />
            <h3>Perusahaan</h3>
            <p>
              Kami berdiri sejak 2020 dan fokus pada pengembangan solusi ERP modern.
            </p>
          </div>

          <div className={styles.card}>
            <Users className={styles.icon} />
            <h3>Tim</h3>
            <p>
              Tim kami terdiri dari profesional berpengalaman di bidang teknologi dan bisnis.
            </p>
          </div>

          <div className={styles.card}>
            <Award className={styles.icon} />
            <h3>Visi</h3>
            <p>
              Menjadi penyedia solusi ERP terdepan untuk perusahaan skala kecil hingga besar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;