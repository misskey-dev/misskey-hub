# Halaman

Halaman Misskey merupakan fitur dimana kamu dapat membuat halaman web kustom. Dalam Halaman Misskey kamu dapat memasukkan tipe media dan pemformatan yang berbeda-beda. Bahkan kamu dapat menjalankan skrip pemrograman juga. Seperti banyak hal lainnya dari Misskey, kamu dapat memformat konten kamu menggunakan [MFM](./mfm.md).

Halaman di Misskey terdiri dari beberapa tipe Blok, dan blok tersebut dapat dipindahkan sesuka hati menggunakan seret dan lepas.

## Blok Konten

Blok konten menampilkan beberapa time konten kepada pengguna.

### Seksi

Sebuah blok grup yang dapat memuat blok lainnya. Setiap konten blok memiliki judul yang nantinya ditampilkan di atas blok tersebut.

### Teks

Menampilkan konten teks kepada pengguna. Konten teks dapat diformat dan dapat dimasukkan interpolasi variable (Lihat variabel di bawah).

### Gambar

Menampilkan gambar yang dapat kamu pilih dari drive.

### Area Teks

Menampilkan teks di dalam tag teks area. Blok ini tidak mendukung MFM namun interpolasi variabel diperbolehkan.

### Catatan Tersemat

TODO

### Kanvas

TODO

## Blok Input

Blok input dapat digunakan untuk membuat halaman interaktif dengan elemen form. Blok ini dapat digunakan untuk berinteraksi dengan variabel dan skrip dalam halaman.

## Blok Spesial

Blok spesial menyediakan fitur unik untuk halaman kamu. Ini termasuk form posting catatan dan alur kendali halaman.

## Variabel

Variabel dapat digunakan untuk membuat halaman dinamis. Kamu dapat menyematkan nilai dari variabel dengan menulis <b>{ nama variabel }</b> di dalam teks. Sebagai contoh, dalam <b>Halo { hal } dunia!</b>, jika nilai dari variabel (hal) adalah <b>ai</b>, maka teks tersebut akan menjadi <b>Halo ai dunia!</b>.

Variabel dievaluasi dari atas ke bawah, jadi kamu tidak dapat merujuk ke variabel yang didefinisikan di bawahmu dalam variabel yang diberikan. Sebagai contoh, jika terdapat tiga variabel, <b>A, B, C</b>, yang didefinisikan pada urutan tersebut, <b>A</b> dan <b>B</b> dapat direferensikan dalam definisi <b>C</b>; Akan tetapi, <b>B</b> dan <b>C</b> tidak dapat direferensikan dalam definisi <b>A</b>.

Untuk menerima input dari pengguna, letakkan blok "Input" di dalam halaman dan atur "Nama Variabel" ke nama dari variabel yang kamu ingin simpan nilainya (variabel akan secara otomatis dibuat oleh blok).
Variabel dapat digunakan untuk melakukan aksi sebagai respon dari input pengguna.

Fungsi dapat digunakan untuk mengenkapsulasi kalkulasi nilai pada form yang dapat digunakan kembali. Untuk membuat fungsi, buat variabel dengan tipe "Fungsi". Fungsi dapat memiliki slot (argumen), dan nilai dari slot tersedia sebagai variabel di dalam fungsi. Terdapat juga fungsi yang disebut fungsi tingkat tinggi yang dapat mengambil fungsi lain sebagai argumen. Fungsi dapat ditentukan atau diinstantiasi sejalan dalam slot dari fungsi tingkat tinggi.
