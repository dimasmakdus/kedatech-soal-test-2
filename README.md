# 📘 Dokumentasi Teknologi ERP Landing Page

## 1. **React (TypeScript)**

-   **Kenapa React?**
    -   React adalah library modern dan populer untuk membangun UI
        berbasis komponen.
    -   TypeScript dipilih agar code lebih terstruktur, mudah
        dimaintain, serta memiliki **type safety** sehingga mengurangi
        bug.
    -   Ekosistem luas, banyak library tambahan (routing, state
        management, dsb).
-   **Fungsi di Project Ini**
    -   Membangun landing page dengan **komponen reusable** (Hero,
        Features, Pricing, Stats, About, Contact, CTA, Footer,
        LoginModal).
    -   Memanfaatkan **state** dan **props** untuk kontrol tema
        (dark/light) serta navigasi smooth scroll.

------------------------------------------------------------------------

## 2. **SCSS (Sass)**

-   **Kenapa SCSS?**
    -   Lebih powerful dibanding CSS biasa (mendukung nesting, variabel,
        mixin).
    -   Mudah dipakai untuk styling modular dengan `*.module.scss`.
    -   Lebih fleksibel untuk **theme management** (dark/light mode).
-   **Fungsi di Project Ini**
    -   Menyediakan styling yang konsisten antar-komponen.
    -   Memanfaatkan `variables.scss` untuk palet warna global (slate,
        blue, purple).
    -   Mendukung **responsive design** melalui media query langsung di
        SCSS.

------------------------------------------------------------------------

## 3. **Vite**

-   **Kenapa Vite?**
    -   Lebih cepat dibanding `create-react-app`.
    -   Hot Module Replacement (HMR) instan, sehingga dev experience
        lebih cepat.
    -   Native support untuk **TypeScript** dan **SCSS**.
-   **Fungsi di Project Ini**
    -   Sebagai bundler & dev server.
    -   Build cepat dan ringan untuk deployment.

------------------------------------------------------------------------

## 4. **Lucide-React / React-Icons**

-   **Kenapa Ikon Library?**
    -   Ikon SVG modern, ringan, dan mudah digunakan di React.
    -   Mudah disesuaikan ukurannya dan warnanya dengan SCSS/theme.
    -   `react-icons` dipakai agar lebih **universal** (banyak pilihan
        ikon dari berbagai set).
-   **Fungsi di Project Ini**
    -   Ikon menu (hamburger, close).
    -   Ikon toggle dark/light mode (☀️ 🌙).
    -   Ikon branding (Package).

------------------------------------------------------------------------

## 5. **LocalStorage**

-   **Kenapa LocalStorage?**
    -   Menyimpan preferensi user (dark/light mode).
    -   Mudah digunakan tanpa perlu database atau backend.
-   **Fungsi di Project Ini**
    -   Persistensi tema agar user tidak perlu set ulang saat refresh
        page.

------------------------------------------------------------------------

## 6. **Responsive Design**

-   **Kenapa Harus Responsive?**
    -   Landing page ERP ditujukan untuk berbagai device (desktop,
        tablet, mobile).
    -   User experience tetap optimal di layar kecil maupun besar.
-   **Fungsi di Project Ini**
    -   Header berubah menjadi **mobile menu (hamburger)** di layar
        kecil.
    -   Section otomatis **stacked layout** di layar mobile.

------------------------------------------------------------------------

## ⚙️ Cara Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/dimasmakdus/kedatech-soal-test-2.git
cd kedatech-soal-test-2
```

### 2. Install Dependencies
Pastikan kamu sudah install **Node.js ≥ 18** dan **Yarn**.  
```bash
yarn install
```

### 3. Jalankan Development Server
```bash
yarn dev
```
Lalu buka [http://localhost:5173](http://localhost:5173) di browser.

### 4. Build untuk Production
```bash
yarn build
```

### 5. Preview Hasil Build
```bash
yarn preview
```

### 5. Menjalankan Test
```bash
yarn test
```

---

## 📂 Struktur Folder
```
src/
 ├─ components/        # Semua komponen UI
 ├─ styles/            # SCSS modules + global styles
 ├─ tests/             # Unit Test
 ├─ App.tsx            # Root component
 └─ main.tsx           # Entry point aplikasi
```

---

## 🌗 Fitur
- Toggle **Dark / Light Mode**
- Responsive Header dengan menu mobile
- Section Hero, Features, Pricing, Stats, CTA, Footer
- Login Modal siap pakai

---

## 📝 Lisensi
[MIT](LICENSE)