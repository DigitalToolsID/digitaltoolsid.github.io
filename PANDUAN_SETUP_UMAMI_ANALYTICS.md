# Panduan Setup Real-Time Traffic Analytics (Umami Cloud)
**Digital Tools ID**

Dokumen ini berisi panduan lengkap untuk memasang dan mengonfigurasi analitik pemantau traffic pengguna secara **real-time** menggunakan **Umami Cloud** pada website Digital Tools ID.

---

## 1. Latar Belakang & Alasan Pemilihan Umami Cloud
- **Masalah Google Analytics (GA4)**: Pelaporan lambat (jeda 24–48 jam), antarmuka rumit, dan sulit memantau secara langsung: *kapan, siapa, dan tool spesifik apa yang sedang digunakan*.
- **Kondisi Aplikasi**: Digital Tools ID adalah website statis murni (HTML/JS/Tailwind CSS) yang di-host di GitHub Pages tanpa backend/database server.
- **Mengapa Umami Cloud?**:
  - **Real-Time (Zero-Latency)**: Kunjungan dan event langsung muncul detik itu juga.
  - **100% Berdiri Sendiri**: Tidak membutuhkan database atau server tambahan.
  - **Ringan & Ramah Privasi**: Ukuran skrip sangat kecil (< 3 KB) dan tanpa cookie pelacak yang mengganggu.
  - **Bisa di-Embed**: Menyediakan fitur *Share URL* sehingga dashboard statistik dapat ditampilkan langsung di dalam halaman internal aplikasi (misal: `/dashboard.html`).

---

## 2. Langkah Pendaftaran & Setup Akun (Untuk Pemilik / Pengelola)

### Langkah 1: Daftar Akun Gratis
1. Buka tautan: [https://cloud.umami.is/signup](https://cloud.umami.is/signup)
2. Buat akun menggunakan Email atau langsung login via **GitHub / Google**.

### Langkah 2: Daftarkan Website
1. Pada menu dashboard Umami, klik tombol **"Add website"**.
2. Masukkan data berikut:
   - **Name**: `Digital Tools ID`
   - **Domain**: `digitaltoolsid.github.io` *(atau custom domain jika sudah beralih)*
3. Klik **"Save"**.

### Langkah 3: Ambil Data yang Diperlukan Developer
Setelah disimpan, Umami akan memberikan satu baris script pelacak, contohnya:
```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"></script>
```
> **Data Kunci**: Yang dibutuhkan oleh developer hanyalah nilai dari **`data-website-id`** (kode UUID acak 36 karakter).

### Langkah 4: Aktifkan Dashboard Publik (Opsional untuk Akses Cepat)
1. Buka menu **Settings** (ikon gerigi) ➡️ **Websites** ➡️ klik tombol **Edit** pada website `Digital Tools ID`.
2. Aktifkan toggle **"Share URL"**.
3. Simpan tautan publik tersebut (misal: `https://cloud.umami.is/share/...`). Tautan ini bisa diakses langsung atau disematkan ke halaman web internal.

---

## 3. Instruksi Teknis untuk Developer Penerus

### Cara Memasang Skrip Pelacak ke Seluruh 40+ Tools Secara Otomatis:
Karena proyek ini menggunakan berkas komponen terpusat [`components.js`](components.js) di setiap halaman tool, developer **TIDAK PERLU** mengedit file HTML 40+ tool satu per satu secara manual.

Developer cukup melakukan:
1. **Tambahkan Skrip Dinamis di [`components.js`](components.js)**:
   ```javascript
   // Inject Umami Analytics Script secara otomatis ke semua tools
   (function initAnalytics() {
       const script = document.createElement('script');
       script.defer = true;
       script.src = 'https://cloud.umami.is/script.js';
       script.setAttribute('data-website-id', 'MASUKKAN_WEBSITE_ID_DISINI');
       document.head.appendChild(script);
   })();
   ```
2. **Tambahkan Skrip Statis di [`index.html`](index.html)**:
   Tambahkan tag `<script>` Umami di dalam `<head>` file `index.html` (katalog utama).

3. *(Opsional)* **Halaman Dashboard Internal**:
   Buat file `dashboard.html` di root direktori dengan memuat `<iframe>` yang mengarah ke tautan *Share URL* dari Umami Cloud dan diproteksi modal login/PIN sederhana.
