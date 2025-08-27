import { render, screen } from '@testing-library/react';
import Stats from '../components/Stats';

describe('Stats Component', () => {
  beforeEach(() => {
    render(<Stats />);
  });

  it('renders all stat cards with values and labels', () => {
    const stats = [
      { value: "10,000+", label: "Pengguna Aktif" },
      { value: "99.9%", label: "Uptime Terjamin" },
      { value: "500+", label: "Bisnis Berkembang" },
    ];

    stats.forEach(stat => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it('renders correct number of cards', () => {
    const cards = screen.getAllByTestId('stat-card');
    expect(cards.length).toBe(3);
  });
});