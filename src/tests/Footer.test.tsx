import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders brand logo and title', () => {
    const title = screen.getByText('Dimas ERP');
    expect(title).toBeInTheDocument();

    // Icon Package dari lucide-react
    const icon = screen.getByTestId('package-icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    expect(
      screen.getByText(/© 2025 Dimas ERP. Semua hak dilindungi/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Solusi Dimas ERP terdepan untuk bisnis Indonesia/i)
    ).toBeInTheDocument();
  });
});