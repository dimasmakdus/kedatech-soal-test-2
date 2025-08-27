import React, { useEffect, useState } from "react";
import { Package, X } from "lucide-react";
import styles from "../styles/LoginModal.module.scss";

interface Props {
  onClose: () => void;
}

const LoginModal: React.FC<Props> = ({ onClose }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    // lock scroll while modal open
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const handleLogin = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    alert("Login functionality akan diimplementasikan dengan backend");
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X className={styles.closeIcon} />
        </button>

        <div className={styles.header}>
          <div className={styles.logo}>
            <Package className={styles.logoIcon} />
          </div>
          <h3>Masuk ke Dimas ERP</h3>
          <p>Kelola bisnis Anda dengan mudah</p>
        </div>

        <form onSubmit={handleLogin} className={styles.form}>
          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="nama@email.com"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Password</span>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
            />
          </label>

          <div className={styles.row}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>Ingat saya</span>
            </label>
            <button type="button" className={styles.forgot}>Lupa password?</button>
          </div>

          <button type="submit" className={styles.submitBtn}>Masuk</button>
        </form>

        <div className={styles.footer}>
          <p>Belum punya akun? <button className={styles.signup}>Daftar sekarang</button></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;