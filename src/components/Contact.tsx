import React from "react";
import styles from "../styles/Contact.module.scss";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hubungi Kami</h2>
        <p className={styles.subtitle}>
          Punya pertanyaan tentang Dimas ERP? Silakan isi form atau hubungi kami langsung.
        </p>

        <div className={styles.content}>
          {/* Info Kontak */}
          <div className={styles.info}>
            <h2>Contact</h2>
            <div className={styles.item}>
              <Mail /> <span>support@dimaserp.com</span>
            </div>
            <div className={styles.item}>
              <Phone /> <span>+62 812-3456-7890</span>
            </div>
            <div className={styles.item}>
              <MapPin /> <span>Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Pesan Anda" rows={4} required />
            <button type="submit">Kirim</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;