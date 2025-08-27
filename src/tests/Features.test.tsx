import { render, screen } from '@testing-library/react';
import Features from '../components/Features';

describe('Features Component', () => {
  beforeEach(() => {
    render(<Features />);
  });

  it('renders main title and description', () => {
    expect(
      screen.getByText('Fitur Unggulan untuk Bisnis Anda')
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Dilengkapi teknologi terdepan/i)
    ).toBeInTheDocument();
  });

  it('renders all feature titles and descriptions', () => {
    const features = [
      {
        title: "Manajemen Inventory",
        desc: "Catat dan pantau stok masuk-keluar secara real-time dengan sistem yang akurat dan mudah digunakan",
      },
      {
        title: "Analisis Keuntungan",
        desc: "Pantau profit harian, mingguan, dan bulanan dengan dashboard yang informatif",
      },
      {
        title: "Visualisasi Data",
        desc: "Grafik dan chart interaktif untuk memahami tren penjualan dan performa bisnis",
      },
      {
        title: "Support 24/7",
        desc: "Tim support yang siap membantu Anda kapan saja",
      },
      {
        title: "Export Excel",
        desc: "Export semua data ke Excel untuk analisis lebih lanjut",
      },
      {
        title: "AI Prediction",
        desc: "Teknologi AI untuk memprediksi tren penjualan dan rekomendasi bisnis",
      },
    ];

    features.forEach(f => {
      expect(screen.getByText(f.title)).toBeInTheDocument();
      expect(screen.getByText(f.desc)).toBeInTheDocument();
    });
  });
});