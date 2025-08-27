import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders the main title', () => {
    expect(screen.getByText('Hubungi Kami')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    expect(
      screen.getByText(/Punya pertanyaan tentang Dimas ERP/i)
    ).toBeInTheDocument();
  });

  it('renders contact info', () => {
    // Email
    expect(screen.getByText('support@dimaserp.com')).toBeInTheDocument();
    // Phone
    expect(screen.getByText('+62 812-3456-7890')).toBeInTheDocument();
    // Location
    expect(screen.getByText('Jakarta, Indonesia')).toBeInTheDocument();
  });

  it('renders the contact form fields', () => {
    expect(screen.getByPlaceholderText('Nama Lengkap')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pesan Anda')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Kirim/i })).toBeInTheDocument();
  });
});