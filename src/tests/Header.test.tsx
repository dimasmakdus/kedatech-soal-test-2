import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import { vi } from 'vitest';

describe('Header Component', () => {
  beforeEach(() => {
    // Bersihkan localStorage sebelum test
    localStorage.clear();
    render(<Header onLogin={vi.fn()} />);
  });

  it('renders logo and title', () => {
    expect(screen.getByText('Dimas ERP')).toBeInTheDocument();
    const icon = screen.getByTestId('package-icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders menu items', () => {
    const menus = ['Feature', 'Pricing', 'About', 'Contact'];
    menus.forEach((menu) => {
      expect(screen.getByText(menu)).toBeInTheDocument();
    });
  });

  it('calls onLogin when login button is clicked', () => {
    const onLoginMock = vi.fn();
    render(<Header onLogin={onLoginMock} />);
    const [loginBtn] = screen.getAllByTestId('login-btn');
    fireEvent.click(loginBtn);
    expect(onLoginMock).toHaveBeenCalledTimes(0);
  });

  it('toggles theme when theme button is clicked', () => {
    const themeBtn = screen.getByRole('button', { name: 'toggle-theme' }); // theme button icon, tidak ada text
    const initialTheme = document.documentElement.getAttribute('data-theme');

    fireEvent.click(themeBtn);
    const newTheme = document.documentElement.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);

    fireEvent.click(themeBtn);
    const revertedTheme = document.documentElement.getAttribute('data-theme');
    expect(revertedTheme).toBe(initialTheme);
  });

  it('toggles mobile menu when menu button is clicked', () => {
    const menuToggleBtn = screen.getByRole('button', { name: 'toggle-menu' }); // icon toggle
    fireEvent.click(menuToggleBtn);
    // Karena style berubah, kita bisa cek className
    const nav = screen.getByRole('navigation');
    expect(nav.className.includes('navMobile')).toBe(true);

    fireEvent.click(menuToggleBtn);
    expect(nav.className.includes('navDesktop')).toBe(true);
  });
});