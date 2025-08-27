import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('renders the main title', () => {
    const title = screen.getByText('Tentang Kami');
    expect(title).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    const subtitle = screen.getByText(/ERP kami membantu bisnis Anda/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the Perusahaan card', () => {
    const cardTitle = screen.getByText('Perusahaan');
    const cardDesc = screen.getByText(/Kami berdiri sejak 2020/i);
    expect(cardTitle).toBeInTheDocument();
    expect(cardDesc).toBeInTheDocument();
  });

  it('renders the Tim card', () => {
    const cardTitle = screen.getByText('Tim');
    const cardDesc = screen.getByText(/Tim kami terdiri dari profesional/i);
    expect(cardTitle).toBeInTheDocument();
    expect(cardDesc).toBeInTheDocument();
  });

  it('renders the Visi card', () => {
    const cardTitle = screen.getByText('Visi');
    const cardDesc = screen.getByText(/Menjadi penyedia solusi ERP/i);
    expect(cardTitle).toBeInTheDocument();
    expect(cardDesc).toBeInTheDocument();
  });
});