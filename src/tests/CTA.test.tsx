import { render, screen, fireEvent } from '@testing-library/react';
import CTA from '../components/CTA';
import { vi } from 'vitest';

describe('CTA Component', () => {
  it('renders title and description', () => {
    render(<CTA onLogin={() => {}} />);
    
    expect(screen.getByText('Siap Mengoptimalkan Bisnis Anda?')).toBeInTheDocument();
    expect(
      screen.getByText(/Bergabung dengan ribuan pengusaha/i)
    ).toBeInTheDocument();
  });

  it('renders the button', () => {
    render(<CTA onLogin={() => {}} />);
    const button = screen.getByRole('button', { name: /Mulai Sekarang/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onLogin when button is clicked', () => {
    const onLoginMock = vi.fn(); // vi.fn() adalah Vitest mock function
    render(<CTA onLogin={onLoginMock} />);
    
    const button = screen.getByRole('button', { name: /Mulai Sekarang/i });
    fireEvent.click(button);
    
    expect(onLoginMock).toHaveBeenCalledTimes(1);
  });
});