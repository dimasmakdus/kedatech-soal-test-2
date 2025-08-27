import React from "react";
import { Star, Check } from "lucide-react";
import styles from "../styles/Pricing.module.scss";

interface Tier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  color?: string;
}

const tiers: Tier[] = [
  {
    name: "Basic",
    price: "Rp 299.000",
    color: "blue",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
      "Dashboard sederhana",
      "Laporan bulanan",
    ],
  },
  {
    name: "Business",
    price: "Rp 599.000",
    color: "purple",
    popular: true,
    features: [
      "Semua fitur Basic",
      "Analisa penjualan dengan chart",
      "Support 7x24 jam",
      "Dashboard advanced",
      "Laporan real-time",
      "Multi-user access",
    ],
  },
  {
    name: "Entrepreneur",
    price: "Rp 999.000",
    color: "orange",
    features: [
      "Semua fitur Business",
      "Export data ke Excel",
      "AI prediksi penghasilan",
      "Analitik mendalam",
      "API integration",
      "Custom reports",
      "Priority support",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Pilih Paket yang Sesuai</h2>
          <p>Mulai dari basic hingga entrepreneur, kami punya solusi untuk setiap skala bisnis</p>
        </div>

        <div className={styles.grid}>
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`${styles.card} ${tier.popular ? styles.popular : ""}`}
            >
              {tier.popular && (
                <div className={styles.badge}>
                  <Star className={styles.badgeIcon} />
                  <span>Paling Populer</span>
                </div>
              )}

              <div className={styles.tierHeader}>
                <div className={styles.tierIndex}>TIER {i + 1}</div>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{tier.price}</span>
                  <span className={styles.perMonth}>/bulan</span>
                </div>
              </div>

              <ul className={styles.featuresList}>
                {tier.features.map((f, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <Check className={styles.checkIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.selectBtn} ${
                  tier.popular ? styles.selectBtnPrimary : styles.selectBtnAlt
                }`}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;