import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../components/Hero';
import { vi } from 'vitest';

describe('Hero Component', () => {
  it('renders the main title and gradient text', () => {
    render(<Hero onLogin={() => {}} />);
    
    expect(
      screen.getByText(/Kelola Inventory Bisnis Anda/i)
    ).toBeInTheDocument();
    
    expect(
      screen.getByText(/Mudah & Cerdas/i)
    ).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Hero onLogin={() => {}} />);
    
    expect(
      screen.getByText(/Sistem Dimas ERP terintegrasi/i)
    ).toBeInTheDocument();
  });

  it('calls onLogin when "Mulai Gratis" button is clicked', () => {
    const onLoginMock = vi.fn();
    render(<Hero onLogin={onLoginMock} />);

    const btn = screen.getByRole('button', { name: /Mulai Gratis/i });
    fireEvent.click(btn);

    expect(onLoginMock).toHaveBeenCalledTimes(1);
  });

  it('renders "Lihat Demo" button', () => {
    render(<Hero onLogin={() => {}} />);

    const btn = screen.getByRole('button', { name: /Lihat Demo/i });
    expect(btn).toBeInTheDocument();
  });
});