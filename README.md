# Movia

Website prototipe jasa transportasi untuk tugas mata kuliah Kewirausahaan Digital.

## Menjalankan secara lokal

### Cara paling mudah tanpa Terminal

1. Ekstrak seluruh folder ZIP.
2. Klik dua kali file `BUKA-WEBSITE.bat`.
3. Website akan langsung terbuka di browser.

File `index.html` juga dapat diklik dua kali tanpa Node.js, npm, XAMPP, atau koneksi internet.

### Menjalankan melalui VS Code

1. Pastikan Node.js sudah terpasang.
2. Buka folder `movia` menggunakan VS Code.
3. Buka menu **Terminal > New Terminal**.
4. Jalankan `npm start` atau klik dua kali `jalankan.bat`.
5. Buka `http://localhost:4173` di browser.

Jika source website diubah, jalankan `npm run build` dari Git Bash atau WSL sebelum menjalankan `npm start`.

## Fitur

- Beranda dan formulir estimasi cepat
- Pemesanan dan estimasi tarif
- Jenis layanan, promo, informasi penting, tentang, FAQ, dan kontak
- Testimoni dengan penilaian bintang dan penyimpanan database D1
- Chat AI sebelum diteruskan ke Customer Service melalui WhatsApp
- Slider promo, ekosistem layanan, blog, dan Movia News
- Daftar, login, edit profil, logout, dan riwayat pesanan
- Tampilan responsif untuk desktop dan ponsel

Catatan: akun dan pesanan prototipe tersimpan di browser. Testimoni tersimpan di database D1 saat website dijalankan melalui Sites, dengan fallback IndexedDB untuk mode lokal.
