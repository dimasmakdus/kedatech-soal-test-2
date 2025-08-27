import { render, screen } from '@testing-library/react';
import Pricing from '../components/Pricing';

describe('Pricing Component', () => {
  beforeEach(() => {
    render(<Pricing />);
  });

  it('renders main title and subtitle', () => {
    expect(screen.getByText('Pilih Paket yang Sesuai')).toBeInTheDocument();
    expect(
      screen.getByText(/Mulai dari basic hingga entrepreneur/i)
    ).toBeInTheDocument();
  });

  it('renders all tier cards with names and prices', () => {
    const tiers = [
      { name: 'Basic', price: 'Rp 299.000' },
      { name: 'Business', price: 'Rp 599.000' },
      { name: 'Entrepreneur', price: 'Rp 999.000' },
    ];

    tiers.forEach(tier => {
      expect(screen.getByText(tier.name)).toBeInTheDocument();
      expect(screen.getByText(tier.price)).toBeInTheDocument();
    });
  });

  it('renders features for each tier', () => {
    const features = [
      [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan",
        "Dashboard sederhana",
        "Laporan bulanan",
      ],
      [
        "Semua fitur Basic",
        "Analisa penjualan dengan chart",
        "Support 7x24 jam",
        "Dashboard advanced",
        "Laporan real-time",
        "Multi-user access",
      ],
      [
        "Semua fitur Business",
        "Export data ke Excel",
        "AI prediksi penghasilan",
        "Analitik mendalam",
        "API integration",
        "Custom reports",
        "Priority support",
      ],
    ];

    features.flat().forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders "Paling Populer" badge for the popular tier', () => {
    const badge = screen.getByText('Paling Populer');
    expect(badge).toBeInTheDocument();
  });

  it('renders select buttons for each tier', () => {
    const buttons = screen.getAllByRole('button', { name: /Pilih Paket/i });
    expect(buttons.length).toBe(3);
  });
});