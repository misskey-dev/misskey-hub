# Mengelola Emoji Kustom

Emoji kustom dapat dikelola oleh administrator atau moderator dengan mengunjungi pengaturan instansi lalu ke submenu emoji kustom.
Secara bawaan kamu akan melihat daftar lokal emoji yang terinstal saat ini.
Pada awalnya daftar ini kosong, tapi kamu dapat menambahkan emoji kustom dengan beberapa cara berbeda.

## Menyalin Emoji dari Instansi lain

Emoji dapat secara mudah disalin dari instansi lain.
Untuk melakukannya, pindah ke tab "remote" pada pengaturan emoji kustom.
Kamu dapat mencari emoji berdasarkan nama dan/atau host asal.

Ketika kamu menemukan emoji yang diinginkan, klik lalu buka menu kecil yang mengizinkanmu mengimpor emoji tersebut.

Harap dicatat, Emoji tersebut bisa saja memiliki hak cipta dan kamu kamu bertanggung jawab boleh tidaknya menggunakan emoji lain secara legal.

## Impor Emoji Satu Persatu

Jika kamu memiliki berkas gambar yang ingin dijadikan sebagai emoji kustom, kamu dapat mengimpornya sebagai emoji.
Ini dapat dilakukan seperti melampirkan berkas ke catatan:
Kamu dapat memilih untuk mengunggah berkas baru, memilih berkas dari drive Misskey atau mengunggah berkas dari URL lain.

::: danger
Ketika mengimpor emoji dari drive, berkas akan tetap berada di drive.
Misskey tidak menyalin berkas tersebut, sehingga jika kamu menghapusnya, emoji akan rusak.
:::

Emoji akan ditambahkan ke instansi dan kamu akan dapat mengedit atau menghapusnya seperti biasa.

## Impor Emoji Massal

Emoji dapat diimpor secara massal menggunakan berkas terkemas ZIP dengan format khusus.
Kemampuan ini dapat ditemukan di menu titik tiga di pojok kanan atas menu emoji kustom.

::: warning
Impor emoji massal mungkin dapat menimpa emoji yang sudah ada atau merusak instansimu.
Pastikan hanya mengimpor emoji dari sumber terpercaya, idealnya hanya yang kamu ekspor sendiri sebelumnya.
:::

### Format emoji terkemas
Pada level tertinggi terdapat berkas dengan nama `meta.json` yang berisi informasi tentang emoji yang berisi berkas terkemas.
Definisi dari berkas tersebut seperti ini, tempat `Meta` menjadi struktur dari keseluruhan berkas.

```typescript
class Meta {
	metaVersion: number;
	host: string;
	/**
	 * Date and time representation returned by ECMAScript `Date.prototype.toString`.
	 */
	exportedAt: string;
	emojis: Emoji[];
}

class Emoji {
	downloaded: boolean;
	fileName: string;
	emoji: {
		id: string;
		updatedAt: string;
		name: string;
		host: null;
		category: string;
		originalUrl: string;
		publicUrl: string;
		uri: null;
		type: string;
		aliases: string[];
	};
}
```

Bidang `Meta` kini tidak dipakai atau diperiksa saat mengimpor emoji, kecuali untuk bidang `emoji`.

Untuk setiap `Emoji`:
- `downloaded`: harus bernilai true. Jika bidang kosong atau tidak terpercaya, emoji tidak akan diimpor.
- `fileName`: nama dari berkas gambar yang ada di dalam berkas terkemas.
- `emoji`: data yang berhubungan dengan emoji seperti yang disimpan dalam basis data. Saat ini mayoritas bidang tersebut tidak diperiksa keberadaannya. Berikut yang dipakai:
  - `name`: nama emoji untuk pengguna, contoh `blobfox` jika penggguna mengetikkan `:blobfox:` untuk mendapatkan emoji.
    Jika emoji sebelumnya memiliki nama sama, itu **akan ditimpa**!
  - `category`: kategori emoji
  - `aliases`: daftar string yang harus ditambahkan sebagai alias. Admin antarmuka menjulukinya sebagai "tags".

## Mengedit dan Menghapus Emoji
Properti dari emoji dapat diedit dengan mengklik pada daftar emoji lokal.
Saat kamu mengklik emoji kustom, dialog untuk mengedit properti akan terbuka.
Dialog ini juga akan mengizinkanmu menghapus emoji.

::: danger
Saat menghapus emoji kustom, catatan lama yang menggunakannya akan tetap menampilkan nama teks dari emoji tersebut.
Emoji tidak akan lagi dirender dengan benar.
:::

Catatan, emoji jarak jauh tidak dapat diedit atau dihapus.

Setiap emoji dapat memiliki nama dan kategori serta beberapa tag.
Kategori dipakai untuk menstrukturisasi pemilih emoji.
Sementara itu, tag dapat dipakai sebagai nama alternatif saat menelusuri emoji pada fitur pemilih emoji.

Saat selesai mengedit, simpan perubahan dengan mengklik centang pada pojok kanan atas dialog.

### Mengedit secara massal
Emoji dapat diedit secara massal dengan menyentang kotak di bawah bidang pencarian.
Saat itu, mengklik emoji akan memilihnya alih-alih membuka dialog pengeditan.

Opsi pengeditan akan ditampilkan sebagai tombol di bawah kotak centang.
Untuk kembali ke perilaku sebelumnya, cukup batal centang kotak tersebut.
