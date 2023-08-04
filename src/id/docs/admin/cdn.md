# Siapkan CDN
Saat meluncurkan instansi Misskey milikmu, kami sangat sarankan untuk menggunakan CDN seperti [Cloudflare](https://www.cloudflare.com/).

Ada manfaat menggunakan CDN
- Konten statis dapat tersedia sebagai tembolok, yang akan mengurangi proses muat server
- Alamat IP server tidak terlalu terekspos, yang dapat memitigasi ancaman serangan DoS dll.

## Tembolok
Web Misskey berbentuk statis penuh dan tidak memerlukan server untuk menjalankannya. Karena itu, seluruh Web Misskey dapat menjadi tembolok dalam CDN.
API Misskey tidak dapat menjadi tembolok.

Kamu perlu mengonfigurasi CDN dengan pengaturan berikut
- Atur tembolok semua permintaan kecuali `/api/*`.

::: tip
Kamu tidak perlu membersihkan tembolok saat memutakhirkan Misskey.
::::
