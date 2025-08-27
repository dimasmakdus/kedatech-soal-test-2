import React from "react";
import { Users, Shield, Zap } from "lucide-react";
import styles from "../styles/Stats.module.scss";

const stats = [
  { icon: Users, value: "10,000+", label: "Pengguna Aktif" },
  { icon: Shield, value: "99.9%", label: "Uptime Terjamin" },
  { icon: Zap, value: "500+", label: "Bisnis Berkembang" },
];

const Stats: React.FC = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap}>
                <s.icon className={styles.icon} />
              </div>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;