---
description: Bagaimana cara mendapatkan token akses sebelum MiAuth diperkenalkan.
---

# Cara mendapatkan token akses menggunakan metode pembuatan aplikasi

Pada bagian ini menjelaskan tentang cara mendapatkan token akses sebelum adanya MiAuth (12.27.0).  
Metode lama ini harus digunakan pada peladen Misskey dengan versi di bawah.

## 1. Membuat Aplikasi
Kirim informasi ke [endpoint `app/create`](endpoints/app/create.html)untuk mendapatkan `appSecret`.

```json
{
    // Nama Aplikasi
    "name": "test",
    // Deskripsi Aplikasi
    "description": "my test application",
    // Ijin Aplikasi
    "permission": ["write:notes"]
}
```

Pada saat ini, jika kamu memasukkan URL favoritmu ke dalam `callbackUrl`, perintah tersebut akan memanggil kembali ke fungsi tersebut ketika operasi ijin berikutnya telah selesai, termasuk `token` pada string kueri.

## 2. Otentikasikan Pengguna
Kirim POST `appSecret` ke [endpoint `auth/session/generate`](endpoints/auth/session/generate).

```json
{
    "appSecret": "fAb12cD34Ef56gH78Ij16kL32Mn64oPf"
}
```

Akan mengeluarkan sebuah `token` (secara tentatif disini adalah `798b9f6e-248d-43a7-a919-fabc664027f1`) dan `url`. Maka akses url ini terlebih dahulu di peramban lalu pilih "Bolehkan akses".

## 3. Meminta accessToken
Setelah mengonfirmasi tahap 2 selesai, lakukan POST dengan data `appSecret` dan `token` dari sebelumnya ke [endpoint `auth/session/userkey`](endpoints/auth/session/userkey).

```json
{
  "appSecret": "fAb12cD34Ef56gH78Ij16kL32Mn64oPf",
  "token": "798b9f6e-248d-43a7-a919-fabc664027f1"
}
```

String yang kamu dapatkan disini disebut `accessToken`. `accessToken` hanya bisa didapatkan sekali.

## 4. Menghasilkan i
`i` dapat dihasilkan dalam Node.js dengan kode berikut yang merupakan angka heksadesimal 64-digit. Tidak seperti yang kamu dapatkan pada layar konfigurasi.

```javascript
const crypto = require("crypto")
const i = crypto.createHash("sha256")
    .update(accessToken + appSecret, "utf8")
    .digest("hex")
console.log(i)
```

## 5. Lakukan percobaan tes
```javascript
fetch("https://misskey.io/api/notes/create", {
    method: 'POST',
    body: JSON.stringify({
        i: "/* Masukkan i disini */",
        text: "Hello Misskey API World with My Application!"
    }),
    headers: {
        'Content-Type': 'application/json',
    },
	credentials: 'omit',
});
```
