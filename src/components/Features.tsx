import React from "react";
import {
  Package,
  TrendingUp,
  BarChart3,
  Clock,
  FileSpreadsheet,
  Brain,
} from "lucide-react";
import styles from "../styles/Features.module.scss";

const Features: React.FC = () => {
  const features = [
    {
      icon: Package,
      title: "Manajemen Inventory",
      desc: "Catat dan pantau stok masuk-keluar secara real-time dengan sistem yang akurat dan mudah digunakan",
    },
    {
      icon: TrendingUp,
      title: "Analisis Keuntungan",
      desc: "Pantau profit harian, mingguan, dan bulanan dengan dashboard yang informatif",
    },
    {
      icon: BarChart3,
      title: "Visualisasi Data",
      desc: "Grafik dan chart interaktif untuk memahami tren penjualan dan performa bisnis",
    },
    {
      icon: Clock,
      title: "Support 24/7",
      desc: "Tim support yang siap membantu Anda kapan saja",
    },
    {
      icon: FileSpreadsheet,
      title: "Export Excel",
      desc: "Export semua data ke Excel untuk analisis lebih lanjut",
    },
    {
      icon: Brain,
      title: "AI Prediction",
      desc: "Teknologi AI untuk memprediksi tren penjualan dan rekomendasi bisnis",
    },
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2>Fitur Unggulan untuk Bisnis Anda</h2>
        <p>
          Dilengkapi teknologi terdepan untuk membantu mengoptimalkan operasional
          bisnis
        </p>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>
                <f.icon className={styles.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;