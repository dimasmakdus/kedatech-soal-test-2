import { render, screen, fireEvent } from '@testing-library/react';
import LoginModal from '../components/LoginModal';
import { vi } from 'vitest';

describe('LoginModal Component', () => {
  beforeEach(() => {
    // mock alert agar tidak muncul saat test
    vi.stubGlobal('alert', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the modal dialog', () => {
    render(<LoginModal onClose={() => {}} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = vi.fn();
    render(<LoginModal onClose={onCloseMock} />);
    const closeBtn = screen.getByLabelText('Close');
    fireEvent.click(closeBtn);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('renders title and subtitle', () => {
    render(<LoginModal onClose={() => {}} />);
    expect(screen.getByText('Masuk ke Dimas ERP')).toBeInTheDocument();
    expect(screen.getByText('Kelola bisnis Anda dengan mudah')).toBeInTheDocument();
  });

  it('updates email and password fields', () => {
    render(<LoginModal onClose={() => {}} />);
    
    const emailInput = screen.getByPlaceholderText('nama@email.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('calls alert when submit button is clicked', () => {
    const alertMock = vi.fn();
    vi.stubGlobal('alert', alertMock);

    render(<LoginModal onClose={() => {}} />);
    const submitBtn = screen.getByRole('button', { name: 'Masuk' });
    fireEvent.click(submitBtn);

    expect(alertMock).toHaveBeenCalledWith('Login functionality akan diimplementasikan dengan backend');
  });
});