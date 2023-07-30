# Pemecahan Masalah Pada Saat Pemasangan Manual

<small>27 Oktober 2018 / Terakhir dimutakhirkan 20 Desember 2021 / Ditulis oleh aqz/tamaina</small>

Partisipan dari MisskeyInstallBattle bertambah, begitu pula jumlah partisipan yang mendapatkan cedera ringan dan serius makin meningkat dari waktu ke waktu.\
Artikel ini akan memberikan penjelasan mengenai tren beserta tindakan penanggulangan di area yang pernah terjadi kecelakaan di masa lalu untuk mengurangi cedera tersebut.

**Pertama-tama, baca [petunjuk pemasangan ini](./install/manual.html) dengan seksama**

Kamu juga dapat membaca petunjuk pemasangan Misskey dengan [systemd untuk Ubuntu](./install/ubuntu-manual.html), atau penjelasan rinci tentang [Oracle Cloud](https://hide.ac/articles/csERs-7SU) sebagai referensi.

# Pemberitahuan skrip shell untuk Ubuntu
Penjelasan untuk ubuntu yang hanya copas terus itu membosankan! Memakan waktu! Belum lagi ribet!

……Eh, kalau dengan copas aja bisa, bukankah berarti juga bisa diotomasi sepenuhnya?

Ya... dengan begitu akhirnya saya membuat **skrip shell yang melakukan hampir semuanya untuk saya!**  
[**Informasi lebih lanjut dan petunjuk cara menggunakannya, klik disini!** https://github.com/joinmisskey/bash-install#readme](https://github.com/joinmisskey/bash-install#readme)

Untuk memasang peladenmu sendiri, bersiaplah untuk membeli domain terlebih dahulu, menyiapkan Cloudflare, dan juga mengamankan peladenmu.

Apabila kalian memiliki masalah denga skrip shellnya, mohon beritahu [pembuat (aqz)](https://p1.a9z.dev/@aqz).

# Pasang dan bangun
Baca panduan [memasang dan membangun](/docs/install/manual.html) peladen Misskey dengan seksama.

## Terkait dengan ImageMagick
***Tidak perlu memasang ImageMagick***

## Gagal membangun
Untuk membangun Misskey dengan mudah, dibutuhkan setidaknya memori minimal sebesar 2GB.
Kamu dapat melakukan scale-up terhadap peladenmu ataupun menggunakan PC untuk membangun Misskey lalu menggunakannya ke peladenmu.

## Ada yang masih tidak beres
- Baca [panduan memasang dan membangun](/docs/install/manual.html) dengan benar-benar seksama.
- Apakah versi Node.js kamu versi lama？
  * Gunakan versi yang terbaru.
- Kamu mungkin mendapatkan Error atau WARN pada saat pemasangan atau membangun, namun itu bukanlah masalah. Langsung saja mari kita jalankan `npm start` dan kita cek apakah bekerja.
- Mungkin node-gyp tidak terpasang？
  * Coba jalankan perintah `apt install build-essential`.
  * Untuk Windows, mohon merujuk pada [artikel ini](https://qiita.com/AkihiroTakamura/items/25ba516f8ec624e66ee7).
- Apabila ini masih tidak membantu, coba lagi dari awal dengan mengikuti langkah-langkah dalam prosedur [panduan memasang dan membangun](/docs/install/manual.html).

## Masalah terjadi setelah versi Misskey dimutakhirkan
- Baca [panduan memasang dan membangun](/docs/install/manual.html) dan catatan rilis dengan seksama.
- Ketika memutakhirkan Misskey, pastikan untuk menjalankan `pnpm install` dan `pnpm run migrate`. Apabila perintah tersebut tidak dapat memperbaiki masalah, coba `pnpm run clean-all && pnpm install` lalu `pnpm run build && pnpm run migrate && pnpm start`.
- Apabila ini masih tidak membantu, coba lagi dari awal dengan mengikuti langkah-langkah dalam prosedur [panduan memasang dan membangun](/docs/install/manual.html).

---

# Pengaturan
Baca [panduan memasang dan membangun](/docs/install/manual.html) dengan benar-benar seksama.

Atur konfigurasi peladen di `.config/default.yml`.
Salin [`.config/example.yml`](https://github.com/misskey-dev/misskey/blob/develop/.config/example.yml) dan ikuti sesuai perintah yang ada di deskripsi komentar dalam berkas.

(Dalam berkas berformat YAML, semua tanda `#` hingga akhir baris diperlakukan sebagai komentar.)

## URL dan nomor port
Mekanisme URL dan nomor port cukup sedikit membingungkan untuk dipahami.

### Pengaturan URL, Port, dan Sertifikat TLS（Port and TLS settings）bagian A: Penjelasan example.yml
Dalam berkas [.config/example.yml](https://github.com/misskey-dev/misskey/blob/develop/.config/example.yml) pada nomor revisi [85a0f69](https://github.com/misskey-dev/misskey/blob/85a0f696bcea779b02749dae596fff94a1df2467/.config/example.yml), pengaturan ditulis secara berurutan dengan diagram penjelasan sebagai "Port and TLS Settings".
Penjelasan dalam teks diterjemahkan ke dalam bahasa Indonesia.

#### Pengaturan URL
```yml
# Final accessible URL seen by a user.
# URL final yang dapat dilihat dan diakses oleh pengguna
url: https://example.tld/
```

**Dalam bidang `url: `, tuliskan URL *(yang diinginkan)* untuk ditampilkan pada bilah alamat peramban ketika peladen diakses oleh pengguna melalui peramban web.**

#### Pengaturan Port dan Sertifikat TLS
```yml

#   ┌───────────────────────┐
#───┘ Port and TLS settings └───────────────────────────────────
#### Pengaturan Port dan Sertifikat TLS ####################################
#
# Misskey supports two deployment options for public.
# Misskey mendukung dua opsi peluncuran peladen untuk publik.
#

# Option 1: With Reverse Proxy
# Opsi 1: Menggunakan Reverse Proxy
#
#                 +----- https://example.tld/ ------------+
#   +------+      |+-------------+      +----------------+|
#   | User | ---> || Proxy (443) | ---> | Misskey (3000) ||
#   +------+      |+-------------+      +----------------+|
#                 +---------------------------------------+
#
#   You need to setup reverse proxy. (eg. Nginx)
#   Metode ini membutuhkan reverse proxy (contoh: Nginx) untuk menyiapkan peladen.
#   You do not define 'https' section.
#   Bagian 'https' (lihat di bawah) tidak perlu diatur dan harus tetap dikosongkan.

# Option 2: Standalone
# Opsi 2: Berdiri sendiri
# (Menerima akses dari pengguna secara langsung ke dalam proses node dan tidak ada campur tangan dari reverse proxy).
#
#                 +- https://example.tld/ -+
#   +------+      |   +---------------+    |
#   | User | ---> |   | Misskey (443) |    |
#   +------+      |   +---------------+    |
#                 +------------------------+
#
#   You need to run Misskey as root.
#   Metode ini mengharuskan Misskey untuk dijalankan sebagai root (hak akses root).
#   You need to set Certificate in 'https' section.
#   Sertifikat harus diatur di bagian 'https' (lihat di bawah).
```

##### Metode 1: Ketika reverse proxy digunakan

```yml
# To use option 1, uncomment below line.
# Hilangkan tanda komentar pada baris berikut jika ingin mengatur menggunakan opsi 1.
port: 3000    # A port that your Misskey server should listen.
```

Tiga baris di atas merupakan untuk reverse proxy.
Pada contoh kali ini, Misskey berkomunikasi pada port 3000.
Reverse proxy menentukan nomor port ini untuk tujuan di sisi lokal.

##### Metode 2: Ketika tidak menggunakan reverse proxy

```yml
# To use option 2, uncomment below lines.
# Hilangkan tanda komentar pada 6 baris berikut jika kamu ingin mengatur menggunakan opsi 2.
port: 443

https:
  # path for certification
  key: /etc/letsencrypt/live/example.tld/privkey.pem
  cert: /etc/letsencrypt/live/example.tld/fullchain.pem
```

8 baris di atas merupakan untuk tidak menggunakan reverse proxy.
Menghubungkan langsung dengan pengguna pada port 443 (Proses Misskey harus memiliki ijin root karena menggunaka port 443).

Dapatkan sertifikat TLS terpisah dan atur direktori dari sertifikat yang didapatkan dengan `https:`.
Berikut contoh bagaimana Let's Encrypt menerbitkan sertifikat untuk `example.tld`.

---

### Pengaturan URL, Port dan Sertifikat TLS（Port and TLS settings）bagian B: Ikhtisar
Tanpa teks penjelasan di example.yml, berikut pengaturan port dan sertifikat TLS pada default.yml.

#### Metode 1: Ketika reverse proxy digunakan
```yml
url: https://example.tld/
port: 3000
# https:
#   # path for certification
#   key: /etc/letsencrypt/live/example.tld/privkey.pem
#   cert: /etc/letsencrypt/live/example.tld/fullchain.pem
```

#### Metode 2: Ketika tidak menggunakan reverse proxy
```yml
url: https://example.tld/
# port: 3000
https:
  # path for certification
  key: /etc/letsencrypt/live/example.tld/privkey.pem
  cert: /etc/letsencrypt/live/example.tld/fullchain.pem
```

----

# Kesalahan umum yang ditemukan ketika mengakses atau menjalankan `npm start`
Kamu mungkin dapat menyiapkan peladen dengan `npm start`, namun seketika kamu menemukan masalah.

Yang pertama, baca dengan seksama [panduan memasang dan membangun](/docs/install/manual.html).

## Keluar error YAML
Kemungkinan terdapat kesalahan sintaks dalam berkas `default.yml`.
Apakah sudah dicek tidak ada spasi berlebih pada awal baris?

## Tidak dapat terhubung ke Redis
Apakah redis-server telah berjalan？
Apakah kamu telah mencapai batas koneksi？

Versi Misskey sebelum 11.20.2 tidak dapat memecahkan kata sandi Redis. Mohon untuk mengecek dua poin berikut.

- Jangan mengatur kata sandi untuk Redis.
- Hilangkan tanda komentar di `pass:` pada `redis:` dalam berkas `default.yml`.

## Muncul bilah merah di atas bertuliskan "This is a development build"
Selalu gunakan build production ketika mempublikasikan peladenmu.

Untuk menggunakan build production, atur variabel lingkungan ke `NODE_ENV=production` dan jalankan perintah `npm run build && npm start`.

## Tidak dapat mendaftarkan akun baru
Sepertinya kamu tidak dapat terhubung ke API.
Cek apakah `url:` di awal dari berkas `default.yml` telah diatur dengan benar.
Cek juga versi Node.js dan pengaturan pemasangan lagi dengan seksama.

Juga, cek kembali apakah `default.yml` telah ditulis dengan benar?

## Masalah pada melihat lini masa, data tidak termutakhirkan secara realtime
Jika lini masa gagal untuk memuat, kemungkinan versi dari MongoDB atau PostgreSQL sudah kedaluwarsa.
Mohon gunakan PostgreSQL versi 13 sebisa mungkin.

Kamu seharusnya juga mengecek koneksi Redismu. [→ Tidak dapat terhubung dengan Redis?](#tidak-dapat-terhubung-ke-redis)

## "Menghubungkan ulang" ditampilkan di pojok kanan bawah layar seterusnya, dan lini masa tidak termutakhirkan secara realtime
Jika kamu menggunakan proksi, kemungkinan proksi tersebut memblokir komunikasi WebSocket.

## Masalah muncul ketika menggunakan Object Storage
Terdapat kemungkinan bahwa pengaturan ijin object storage diatur terlalu ketat. Coba atur pengaturan ijin tersebut agar "berkas (objek) tersebut dapat diambil oleh siapa saja".
Tidak lupa cek `default.yml` kembali

### Contoh S3 (dengan CDN, domain kustom)

Contoh S3 (dengan CDN, domain kustom) merupakan contoh ketika kamu ingin mempublikasikan penyimpanan ke domain milikmu sendiri daripada menggunakan domain bawaan AWS.
Jika endpoint dan domain yang terpublikasi berada dalam satu layanan, tidak perlu untuk menentukan `baseUrl` sebagaimana dalam contoh S3, dan jika layanan S3 kamu tidak mengenal konsep region, maka baris region tidak perlu diisi.

### Pengaturan dengan layanan S3 yang kompatibel
Misskey menggunakan [aws-sdk](https://www.npmjs.com/package/aws-sdk) untuk melakukan koneksi penyimpanan objek.
Penyimpanan objek apapun yang kompatibel dengan Amazon S3 dapat digunakan.

Mohon baca dokumentasi dari setiap layanan/perangkat lunak secara seksama dan coba untuk mengkonfigurasikannya.

---

# Apabila masalah masih belum terpecahkan sama sekali
Coba ikuti langkah berikut.

1. Baca dokumentasi Misskey dengan seksama.
2. Coba untuk cari solusinya dengan pencarian mesin pencari.
3. Coba cari masalahmu di halaman [isu repositori Misskey](https://github.com/misskey-dev/misskey/issues) (kemungkinan kamu menemukan error yang sama, atau mungkin itu adalah bug di Misskey).
4. Coba cari masalahmu juga di [Misskey Forum](https://forum.misskey.io/)
5. Apabila kamu tidak dapat menemukannya solusinya dengan cara apapun setelah banyak mencari, coba tanyakan ke ahlinya.
   1. Tanyakan ke [peladen Discord Misskey](https://discord.gg/P4yYqYBjEp) atau [Admin Misskey Indonesia](https://misskey.id/@sandycorzeta).
   2. Tanya dan kirimkan balasan atau pesan langsung pertanyaanmu ke akun pengembang [aqz](https://p1.a9z.dev/@aqz) atau @syuilo
