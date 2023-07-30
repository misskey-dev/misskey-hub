# Form Berbagi

Ketika kamu membuka `/share` di Misskey Web, kamu membuka form submisi berbagi. Form berbagi ini berguna jika kamu ingin pengguna membagikan konten dari halamanmu dengan Misskey dari halaman web eksternal.

Kamu dapat menentukan berbagai opsi di dalam URl, termasuk konten yang dibagikan sebagai parameter kueri.

## Parameter Kueri

::: tip
Semua parameter merupakan **opsional**.
:::

| nama | deskripsi |
| ---- | ---- |
| `title` | Judul, akan dimasukkan sebelum bodi utama dalam tanda kurung |
| `text` | bodi utama |
| `url` | URL, dimasukkan setelah bodi utama |

### Informasi Balasan

Kamu dapat membuat catatan menjadi balasan ke catatan yang diberikan dengan menentukan salah satu dari berikut.

| nama | deskripsi |
| ---- | ---- |
| `replyId` | ID dari catatan yang kamu balas |
| `replyUri` | URL untuk membalas ke (tentukan objek catatan remote) |

### Informasi Renote

Kamu dapat membuat catatan menjadi renote ke catatan yang diberikan dengan menentukan salah satu dari berikut.

| nama | deskripsi |
| ---- | ---- |
| `renoteId` | ID dari catatan yang ingin direnote |
| `renoteUri` | URL dari catatan yang ingin direnote (tentukan objek catatan remote) |

### Lingkup Publikasi

Opsi berikut memungkinkan kamu untuk memilih lingkup publikasi.

| nama | deskripsi |
| ---- | ---- |
| `visibility` | salah satu dari `public`, `home`, `followers`, `specified` |
| `localOnly` | 0(false) atau 1(true) |
| `visibleUserIds` | ID pengguna target |
| `visibleAccts` | [acct](../glossary.md#acct) pengguna target (dipisah koma) |

::: warning
Jika `visibility` diatur ke `specified`, sebaiknya `visibleUserIds` atau `visibleAccts` harus diatur juga.
:::

### Lampiran

Kamu dapat menentukan lampiran dengan opsi berikut.

| nama | deskripsi |
| ---- | ---- |
| `fileIds` | ID dari berkas yang ingin dilampirkan (dipisah koma) |
