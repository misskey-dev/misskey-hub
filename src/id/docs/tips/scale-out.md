# Meningkatkan skala peladen Misskey

Seiring bertambahnya jumlah pengguna dalam peladen instansimu, menjadi sebuah kebutuhan untuk meningkatkan meningkatkan spesifikasi mesin peladen atau meningkatkan jumlah mesin peladen untuk menanggung beban. Artikel ini akan menjelaskan tips untuk meningkatkan skala peladen Misskey kamu.

## Replikasi PostgreSQL
Replikasi PostgreSQL memungkinkan kamu untuk mendistribusikan beban basis data ke beberapa mesin peladen. Untuk informasi mengenai replikasi, mohon merujuk ke dokumentasi PostgreSQL.
Misskey mendukung replikasi PostgreSQL dan dapat dikonfigurasikan dalam berkas config sebagai berikut:

``` yml
# Atur ke `true` apabila replikasi digunakan
dbReplications: true

# Atur daftar replika `read` disini (berapapun jumlah replika yang dimiliki tulis di sini)
dbSlaves:
  -
    host: foo
    port: 5432
    db: misskey
    user: xxxxx
    pass: xxxxx
  -
    host: bar
    port: 5432
    db: misskey
    user: xxxxx
    pass: xxxxx
```

Dengan pengaturan seperti ini, ketika Misskey melakukan kueri baca ke basis data, Misskey akan secara acak memilih replika `read` dari `dbSlaves` yang dikonfigurasi dan mengirimkan kueri tersebut. Dengan begitu beban yang didapatkan oleh basis data terdistribusikan.

## Membagi Redis sesuai perannya
Misskey menggunakan Redis untuk berbagai tujuan, diantaranya:

- Mengelola antrian kerja
- Mengelola batasan rate
- Caching
- Menyimpan notifikasi dan informasi lainnya
- Pub/Sub dari event global

Misskey dapat dikonfigurasikan untuk menggunakan peladen Redis yang berbeda dalam setiap penggunaan. Dengan begitu beban peladen dapat terdistribusikan ke beberapa mesin peladen.
Konfigurasikan pengaturan berikut dalam berkas config.

``` yml
redisForPubsub:
  host: foo
  port: 6379
  #family: 0  # 0=Both, 4=IPv4, 6=IPv6
  #pass: example-pass
  #prefix: example-prefix
  #db: 1

redisForJobQueue:
  host: bar
  port: 6379
  #family: 0  # 0=Both, 4=IPv4, 6=IPv6
  #pass: example-pass
  #prefix: example-prefix
  #db: 1
```

Untuk saat ini penambahan peladen Redis hanya dapat dikonfigurasikan untuk 'Pub/Sub dari Event Global' dan 'Manajemen antrian kerja' saja seperti contoh di atas.

## Menonaktifkan bagan grafik remote
Apabila kamu tidak memerlukan bagan grafik seperti aktivitas untuk pengguna remote atau bagan grafik untuk peladen remote, kamu dapat menonaktifkannya dengan menonaktifkan "Buat bagan untuk pengguna remote" dan "Buat bagan untuk peladen remote" dari panel kendali. Dengan menonaktifkan bagan grafik tersebut, kinerja performa peladen akan meningkat.
