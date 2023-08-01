---
description: 'Misskey memiliki API yang dapat digunakan untuk mengembangkan klien Misskey, layanan web terintegrasi Misskey, bot, dll. (dalam hal ini merujuk pada "aplikasi")'
---

# Misskey API
Misskey memiliki API yang dapat digunakan untuk mengembangkan klien Misskey, layanan web terintegrasi Misskey, bot, dll. (dalam hal ini merujuk pada "aplikasi"
Terdapat juga API Streaming yang mana kamu dapat membuat aplikasi realtime.

::: tip
Dengan menggunakan SDK Misskey resmi atau library pihak ketiga, kamu dapat menggunakan API dengan mudah. Seperti contoh dengan menyederhanakan tahap-tahap yang dijelaskan pada dokumen ini.\
Untuk informasi lebih lanjut mengenai library, [lihat disini](./libraries).
:::

Untuk memulai menggunakan API, kamu butuh mendapatkan sebuah **token akses** yang terasosiasi dengan akun yang akan menggunakan API.
Dokumen ini menjelaskan tahap-tahap untuk mendapatkan token akses lalu menjelaskan penggunaan API dasar.

## Mendapatkan token akses
Pada dasarnya, API membutuhkan token akses untuk melakukan permintaan.
Token akses merupakan informasi otentikasi yang terasosiasi dengan pengguna, yang mana mengidentifikasikan pengguna menggunakan API dan mengelola operasi apapun yang token akses diotorisasikan.

::: tip
Pengguna dan token akses yang diasosiasikan dengan pengguna tersebut memiliki hubungan satu ke banyak, dan token akses ganda atau lebih dapat diterbitkan oleh pengguna.
:::

Kamu dapat mendapatkan token aksesmu sendiri dengan mudah, atau kamu dapat mendapatkan token akses dari pengguna tidak ditentukan yang akan menggunakan aplikasi kamu.

- Kasus lama: **Menerbitkan token akses milikmu secara manual**.
- Kasus sekarang: **Meminta pengguna aplikasi untuk menerbitkan token akses**.

### Menerbitkan token akses milikmu secara manual
Kamu dapat menerbitkan token akses milikmu sendiri di menu "Pengaturan > API" pada klien Misskey Web.

::: danger
Jangan beritahu token aksesmu kepada orang lain.
:::

### Meminta pengguna aplikasi untuk menerbitkan token akses
Untuk mendapatkan token akses dari pengguna aplikasi (dalam hal ini kita sederhanakan dengan menyebut mereka sebagai "pengguna"), ikuti langkah-langkah berikut untuk meminta penerbitan.

::: tip

Metode di bawah ini disebut dengan MiAuth, yang mana menerbitkan token akses secara instan tanpa harus membuat aplikasi.

[Terdapat cara lain juga untuk mendapatkan token akses menggunakan metode pembuatan aplikasi (metode lama).](./app)
:::

#### Langkah 1
Membuat UUID. UUID ini nantinya disebut sebagai Session ID.

::: danger
Buat Session ID ini setiap kali dan jangan pernah menggunakan Session ID yang sama kembali.
:::

#### Langkah 2
Tampilkan form otentikasi di dalam peramban pengguna. Form otentikasi dapat dibuka dengan URL form berikut: 

```:no-line-numbers
https://{host}/miauth/{session}
```

- Ganti `{host}` dengan host dari peladen pengguna. Host biasanya diinputkan oleh pengguna.
- Bagian `{session}` diganti dengan Session ID.

Kamu juga dapat mengatur beberapa opsi sebagai parameter kueri pada URL:

| Nama         | Deskripsi                                                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`       | Nama aplikasi.                                                                                                             |
| `icon`       | URL gambar ikon aplikasi.                                                                                              |
| `callback`   | URL untuk redirect setelah otentikasi.<br>Pada saat melakukan redirect, Session ID dipasangkan dengan parameter kueri `session`.         |
| `permission` | Izin yang diminta aplikasi.<br>Daftar izin yang diminta dipisahkan dengan `,`. Daftar izin dapat dilihat [disini](./permission.md). |

::: tip Contoh
```:no-line-numbers
https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&permission=write:notes,write:following,read:drive
```
:::

#### Langkah 3
Setelah pengguna telah memberikan ijin akses aplikasi, permintaan POST ke URL dari form terkait akan mengeluarkan JSON dengan token akses sebagai respon.

```:no-line-numbers
https://{host}/api/miauth/{session}/check
```

- Ganti `{host}` dengan host dari peladen pengguna. 
- Bagian `{session}` diganti dengan Session ID.

Properti yang termasuk di dalam respon adalah sebagai berikut:

| Nama    | Deskripsi                         |
| ------- | ---------------------------- |
| `token` | Token akses pengguna. |
| `user`  | Informasi pengguna.             |

## Menggunakan API
Setelah kamu mendapatkan token akses, kamu dapat menggunakan API dengan membuat permintaan ke beberapa endpoint.

::: tip

- Semua adalah POST, permintaan serta respon menggunakan format JSON (kecuali untuk drive/files/create).
- Tentukan `Content-Type: application/json` pada header permintaan.
- Token akses dimasukkan dalam body permintaan JSON dengan nama parameter `i`.
- URL Dasar adalah `https://{サーバーのドメイン}/api`.

:::

Contoh body dengan token akses (untuk meta):

```json
{
    "i": "HogEFugA1341",
    "detail": false
}
```

Untuk informasi lebih lanjut mengenai API, lihat [Referensi API](./endpoints.html).

::: warning
Misskey tidak menggunakan REST.
:::

Misskey juga menyediakan API streaming sebagai HTTP API. Untuk informasi detil mengenai API streaming, mohon merujuk ke [dokumen ini](./streaming/index.md).
