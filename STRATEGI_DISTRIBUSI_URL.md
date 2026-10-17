# Strategi Distribusi URL & Segmentasi Kategori Tools
**Digital Tools ID**

Dokumen ini berisi rangkuman panduan arsitektur dan strategi untuk memisahkan/mendistribusikan URL tools berdasarkan topik (Keuangan, Kesehatan, dll.) agar relevan dengan target komunitas tanpa mengaburkan fokus pengguna.

---

## 1. Latar Belakang & Masalah
- **Kondisi Saat Ini**: Aplikasi memiliki 40+ micro-tools (kalkulator & utilitas) yang tergabung dalam satu URL katalog utama (`index.html`).
- **Tantangan**: Pengguna dari komunitas spesifik (misalnya komunitas keuangan/investasi) dapat terdistraksi oleh tools lain yang tidak relevan (seperti kesehatan atau kalkulator tubuh), sehingga link terasa kurang profesional dan kurang tersegmentasi saat dibagikan.

---

## 2. Perbandingan Pilihan Solusi

| Pendekatan | Format URL | Tingkat Kesulitan | Biaya | Kekuatan SEO & AdSense |
| :--- | :--- | :--- | :--- | :--- |
| **Opsi 1: Dedicated Category Landing Page** *(Direkomendasikan)* | `digitaltoolsid.github.io/keuangan/`<br>`digitaltoolsid.github.io/kesehatan/` | Rendah | Gratis | **Sangat Baik** (Semua reputasi domain & traffic tetap terpusat) |
| **Opsi 2: Dynamic View via URL Parameter** *(Quick Win)* | `digitaltoolsid.github.io/?topik=keuangan` | Sangat Rendah | Gratis | Cukup (Mudah diimplementasikan dalam hitungan menit) |
| **Opsi 3: Subdomain Khusus** | `keuangan.digitaltools.id`<br>`kesehatan.digitaltools.id` | Menengah | Gratis (butuh 1 custom domain) | Baik (Memberikan impresi portal mandiri) |
| **Opsi 4: Multi-Domain Terpisah** | `kalkulatorkeuangan.id`<br>`kalkulatorkesehatan.id` | Tinggi | Berbayar per domain | Butuh membangun SEO, traffic, dan approval AdSense dari nol |

---

## 3. Rincian Strategi Pelaksanaan

### Opsi 1: Dedicated Category Landing Page (Sangat Direkomendasikan)
Membuat folder dan file `index.html` khusus untuk setiap kategori di dalam repositori yang sama:
- `/keuangan/index.html`
- `/kesehatan/index.html`

**Karakteristik & Keuntungan:**
- **Fokus Komunitas**: Komunitas keuangan disajikan halaman bertajuk *"Kalkulator Finansial & Investasi"* dengan nuansa tema hijau/navy dan daftar alat finansial saja (KPR, PPh, Bunga Majemuk, Saham, dll.).
- **Tanpa Distraksi**: Pengunjung tidak akan melihat tools kesehatan di halaman tersebut, namun tetap ada link kecil di footer untuk melihat kategori lainnya.
- **Efisiensi Teknis**: File styling (`output.css`) dan aset bersama tetap menggunakan file yang sudah ada tanpa duplikasi dependensi.
- **AdSense & Otoritas Domain**: Menguntungkan secara SEO karena seluruh backlink dari komunitas tetap memperkuat domain induk (`digitaltoolsid.github.io` atau domain utama).

---

### Opsi 2: Dynamic View via URL Parameter (Solusi Instan)
Memanfaatkan query URL pada `index.html` yang ada saat ini:
- `https://digitaltoolsid.github.io/?topik=finance`
- `https://digitaltoolsid.github.io/?topik=health`

**Cara Kerja:**
- Skrip membaca query string `window.location.search`.
- Jika terdeteksi `topik=finance`, otomatis memfilter daftar tools, mengubah teks judul header (H1) menjadi "Koleksi Alat & Kalkulator Finansial", dan menyembunyikan tools kategori lain.
- Sangat cepat diterapkan tanpa membuat file/folder baru.

---

### Opsi 3: Subdomain Khusus (Jika sudah menggunakan Custom Domain)
Jika nantinya beralih dari `.github.io` ke domain mandiri (misal `digitaltools.id`):
- Buat record CNAME DNS:
  - `keuangan.digitaltools.id`
  - `kesehatan.digitaltools.id`
- Terlihat seperti entitas produk yang berdiri sendiri bagi audiens, namun pengelolaannya tetap di bawah satu organisasi.

---

## 4. Tips Penting Saat Berbagi ke Komunitas

1. **Optimasi Open Graph (OG Meta Tags) untuk WhatsApp & Telegram**:
   - Pasang tag `<meta property="og:title">`, `<meta property="og:description">`, dan `<meta property="og:image">` yang spesifik per kategori.
   - Ketika link `/keuangan/` dibagikan di grup WhatsApp saham/investasi, kartu pratinjau menampilkan gambar grafik/kalkulator finansial yang profesional.
2. **Pelacakan Efektivitas Menggunakan UTM Parameter**:
   - Gabungkan URL dengan UTM untuk mengetahui komunitas mana yang paling aktif:
     `https://digitaltoolsid.github.io/keuangan/?utm_source=wa_komunitas_investasi&utm_medium=group_share`
   - Data kunjungan dapat dipantau langsung di Google Analytics (`G-7M8E7QRYNY`).

---

## 5. Rencana Aksi Saat Siap Dilanjutkan
1. Tentukan apakah ingin memakai **Opsi 1 (Folder `/keuangan/`)** atau **Opsi 2 (Filter Parameter `?topik=finance`)**.
2. Rancang tampilan header, filter kartu, dan Open Graph meta tags untuk media sosial.
3. Uji coba bagikan ke target komunitas terpilih.
