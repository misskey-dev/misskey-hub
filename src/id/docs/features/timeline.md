# Lini masa

Lini masa menampilkan [catatan](.note) dalam urutan kronologis terbalik.
Terdapat perbedaan tipe lini masa yang ditampilkan di bawah ini dan catatan yang ditampilkan berbeda tergantung dari tipe lini masa tersebut.
Perhatikan bahwa beberapa tipe dari lini masa kemungkinan dinonaktifkan oleh instansi.

## Beranda

Postingan oleh pengguna yang kamu ikuti akan ditampilkan. Disingkat sebagai LMB.

## Lokal

Semua postingan pengguna lokal yang tidak memiliki visibilitas "Beranda" akan ditampilkan. Disingkat sebagai LML.

## Sosial

Postingan dari pengguna yang kamu ikuti dan semua postingan pengguna lokal yang tidak memiliki visibilitas "Beranda" akan ditampilkan. Disingkat sebagai LMS. Bayangkan LMS = LMB + LML.

## Global

Semua postingan pengguna lokal yang tidak memiliki visibilitas "Beranda" dan semua postingan pengguna remote yang tidak memiliki visibilitas "Beranda" dan mencapai peladen. Disingkat sebagai LMG.

## Lini masa Kustom

Misskey memiliki fitur lain dimana kamu dapat membuat lini masa dengan kedetilan lebih. Lihat [Daftar](./list.md) dan [Antena](./antenna.md) untuk lebih detilnya.

## Perbandingan

| Sumber                |            |        |   Lini masa |       |            |
|-----------------------|------------|--------|---------|------------|------------|
| Pengguna                  | Visibilitas | Beranda   | Lokal    | Sosial     | Global |
| Lokal (Pengikut)     | Publik     | ✔      | ✔        | ✔          | ✔          |
|                       | Beranda       | ✔      |          | ✔          |            |
|                       | Pengikut  | ✔      |          | ✔          |            |
| Remote (Pengikut)    | Publik     | ✔      |          | ✔          | ✔          |
|                       | Beranda       | ✔      |          | ✔          |            |
|                       | Pengikut  | ✔      |          | ✔          |            |
| lokal (Non-pengikut) | Publik     |        | ✔        | ✔          | ✔          |
|                       | Beranda       |        |          |            |            |
|                       | Pengikut  |        |          |            |            |
| Remote (Non-pengikut)| Publik     |        |          |            | ✔          |
|                       | Beranda       |        |          |            |            |
|                       | Pengikut  |        |          |            |            |
