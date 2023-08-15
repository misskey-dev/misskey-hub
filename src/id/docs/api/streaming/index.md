---
description: 'Streaming API memungkinkan kamu untuk menerima berbagai macam informasi (contoh: postingan baru di lini masamu, reaksi, ikuti, dll.) dan melakukan operasi lainnya secara realtime.'
---

# API Streaming

::: tip
Pertama, baca terlebih dahulu dokumentasi [Misskey API](../index.md).
:::

Streaming API memungkinkan kamu untuk menerima berbagai macam informasi (contoh: postingan baru di lini masamu, reaksi, ikuti, dll.) dan melakukan operasi lainnya secara realtime.

## Menghubungkan ke stream

Untuk menggunakan API Streaming, kamu harus terhubung dahulu ke peladen Misskey dengan menggunakan **websocket**.

Buat koneksi websocket ke URL dari form berikut:

```:no-line-numbers
wss://{host}/streaming?i={token}
```
- Ganti `{host}` dengan host peladen yang ingin dihubungkan.
- Bagian `{token}` diganti dengan token akses pengguna.

::: tip
Token akses dapat dihilangkan, namun nantinya informasi yang dapat diterima dan operasi yang dapat dilakukan terbatasi karena pengguna tidak melakukan log masuk.
:::

Setelah terhubung dengan stream, kamu dapat berlangganan ke postingan yang dijelaskan di bawah, namun kamu tidak dapat menerima postingan baru di lini masa. Sebagai contoh pada tahap ini, untuk mendapatkan event kamu harus terhubung ke **kanal** yang disebutkan di bawah ini pada stream.

**Semua pertukaran yang terjadi di stream menggunakan JSON**

## Kanal
API Streaming Misskey menggunakan konsep kanal. Konsep ini merupakan mekanisme untuk memisahkan informasi yang akan dikirim dan diterima.
Dengan menyambungkan ke salah satu kanal dalam stream, kamu dapat menerima dan mengirim berbagai jenis informasi

::: tip
Dalam satu koneksi tunggal, kamu dapat terhubung ke beberapa kanal secara bersamaan.
:::

Bagian berikut ini menjelaskan tentang cara menggunakan kanal. Untuk melihat kanal apa saja yang tersedia, lihat [daftar kanal](./channel/index.md).

### Menyambung ke kanal
Untuk menyambung ke kanal, kirimkan data berikut ke stream dengan bentuk JSON:

```js
{
	type: 'connect',
	body: {
		channel: 'xxxxxxxx',
		id: 'foobar',
		params: {
			...
		}
	}
}
```

- Atur `channel` ke nama kanal yang ingin kamu sambungkan. Lihat [daftar kanal](./channel/index.md).
- Atur `id` ke ID arbitrer apapun untuk berkomunikasi dengan kanal. Hal ini dibutuhkan karena banyaknya aliran pesan yang ada di dalam stream sehingga perlu untuk mengidentifikasi dari kanal mana pesan tersebut berasal. ID juga bisa dari UUID atau angka acak.
- `params` adalah parameter untuk menghubungkan ke kanal. Kanal yang berbeda membutuhkan parameter yang berbeda untuk menghubungkannya. Ketika menghubungkan ke kanal yang tidak memerlukan parameter, properti ini dapat dihilangkan.

::: tip
ID bukanlah per kanal, melainkan per koneksi kanal. Hal ini dikarenakan dalam beberapa kasus terdapat adanya beberapa koneksi ke kanal yang sama dengan parameter yang berbeda.
:::

### Menerima pesan dari kanal
Sebagai contoh, kanal lini masa dapat mengirim pesan baru ketika terdapat postingan baru telah dibuat. Dengan menerima pesan ini, pengguna akan tahu secara realtime bahwa postingan baru telah dibuat pada lini masa.

Ketika kanal mengirimkan pesan, data stream yang terkait dikirimkan ke dalam bentuk JSON:
```js
{
	type: 'channel',
	body: {
		id: 'foobar',
		type: 'something',
		body: {
			some: 'thing'
		}
	}
}
```

- `id` diatur ke ID yang telah kamu atur ketika menghubungkan ke kanal yang sudah dijelaskan di atas sebelumnya.
- `type` diatur ke tipe dari pesan tersebut. Tipe dari pesan kemungkinan bervariasi bergantung pada kanal yang terhubung.
- `body` diatur ke konten dari pesan tersebut. Konten dari pesan bergantung pada kanal yang terhubung.

### Mengirim pesan ke kanal
Tergantung pada kanal yang terhubung, kamu tidak hanya dapat menerima pesan. Namun juga dapat mengirim pesan tersebut untuk melakukan beberapa operasi.

Untuk mengirim pesan ke kanal, kirimkan data berikut ke stream dalam bentuk JSON:
```js
{
	type: 'channel',
	body: {
		id: 'foobar',
		type: 'something',
		body: {
			some: 'thing'
		}
	}
}
```

- `id` diatur ke ID yang telah kamu atur ketika menghubungkan ke kanal yang sudah dijelaskan di atas sebelumnya. Hal ini memungkinkan kamu untuk mengidentifikasi kanal mana untuk pesan yang ingin dikirim.
- `type` diatur ke tipe dari pesan tersebut. Tipe dari pesan kemungkinan bervariasi bergantung pada kanal yang terhubung.
- `body` diatur ke konten dari pesan tersebut. Konten dari pesan bergantung pada kanal yang terhubung.

### Memutuskan koneksi dari kanal
Untuk memutuskan koneksi dari kanal, kirim data berikut ke stream dalam bentuk JSON:

```js
{
	type: 'disconnect',
	body: {
		id: 'foobar'
	}
}
```

- `id` diatur ke ID yang telah kamu atur ketika menghubungkan ke kanal yang sudah dijelaskan di atas sebelumnya. 

## Misskey Capture

Misskey menyediakan mekanisme yang dapat disebut dengan Misskey Capture. Misskey Capture memiliki kemampuan untuk menerima stream dari sebuah event untuk postingan tertentu.

Sebagai contoh misalkan kamu telah mengambil data lini masa dan menampilkannya ke penggunamu. Misalkan seseorang mereaksi salah satu postingan di lini masa. Namun, karena klien tidak mengetahui bahwa postingan tersebut telah direaksi, sangat tidak mungkin untuk menayangkan reaksi di lini masa tersebut secara realtime.

Untuk memecahkan masalah ini, Misskey menyediakan mekanisme penangkapan postingan. Menangkap postingan memungkinkan kamu untuk menerima event terkait dengan postingan tersebut, sehingga kamu dapat menayangkan reaksi dari postingan tersebut secara realtime.

Di bawah ini menjelaskan cara bagaimana menggunakan fitur Misskey Capture. Untuk melihat jenis event penangkapan yang tersedia, mohon merujuk ke [Daftar Event Tangkapan](./note-capture-events.md).

### Menangkap postingan

Untuk menangkap postingan, kirim pesan berikut ke stream dalam bentuk JSON:

```js
{
	type: 'subNote',
	body: {
		id: 'xxxxxxxxxxxxxxxx'
	}
}
```

- Atur `id` ke `id` yang ingin kamu tangkap.

Ketika kamu mengirim pesan ini, kamu meminta Misskey untuk menangkap postingan tersebut lalu event yang terkait dengan postingan tersebut akan distream ke kamu.

Sebagai contoh, jika kamu memiliki reaksi pada sebuah postingan, kamu akan menerima pesan seperti ini:

```js
{
	type: 'noteUpdated',
	body: {
		id: 'xxxxxxxxxxxxxxxx',
		type: 'reacted',
		body: {
			reaction: 'like',
			userId: 'yyyyyyyyyyyyyyyy'
		}
	}
}
```

- `id` dalam `body` merupakan ID dari postingan yang dihasilkan oleh event.
- `type` dalam `body` merupakan tipe dari event.
- `body` dalam `body` merupakan detil event.

### Berhenti dari menangkap postingan

Jika kamu sudah tidak ingin lagi menerima event terkait dari sebuah postingan seperti postingan tersebut sudah tidak muncul lagi pada layar kamu. Kamu dapat meminta penghapusan penangkap postingan.

Kirim pesan yang dimaksud sebagai berikut:

```js
{
	type: 'unsubNote',
	body: {
		id: 'xxxxxxxxxxxxxxxx'
	}
}
```

ここで、
- `id` merupakan `id` dari postingan yang ingin kamu hapus tangkapannya.

Setelah pesan ini terkirim, tidak ada lagi event yang terkait akan muncul di stream.
