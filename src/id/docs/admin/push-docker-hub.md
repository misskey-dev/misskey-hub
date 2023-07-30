Menggunakan GitHub Actions untuk melakukan push ke Docker Hub
================================================================

Berikut penjelasan mengenai alur kerja dari [/.github/workflows/docker.yml](https://github.com/misskey-dev/misskey/blob/develop/.github/workflows/docker.yml) untuk melakukan push ke Docker Hub menggunakan Github Action.

Repoositori asli dipush ke Docker Hub dengan tag `latest` dan `<nama rilis>` ketika dirilis.  
※ Kemungkinan terdapat tag seperti `<nama branch>` di Docker Hub, namun tag ini bukan target push otomatis.

Apabila kamu mengeksekusi alur kerja ini pada destinasi fork, eksekusi akan gagal.

Berikut penjelasan mengenai cara melakukan push ke repositori Docker Hub pada destinasi fork.

## Cara mengatur push ke repositori Docker Hub milikmu

1. Buat repositori di Docker Hub.
2. Ganti berkas alur kerja dari repositori yang telah kamu buat [images](https://github.com/misskey-dev/misskey/blob/53f3b779bf16abcda4f6e026c51384f3b8fbcc62/.github/workflows/docker.yml#L20).
3. Buat [secret terenkripsi](https://docs.github.com/ja/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)  di Github.  
   Kamu harus membuat `DOCKER_USERNAME` dan `DOCKER_PASSWORD` yang mana merupakan nama pengguna dan kata sandi Docker Hub masing-masing.

## Cara melakukan push

Konfigurasi di atas akan secara otomatis melakukan push ke Docker Hub pada saat melakukan rilis. Secara spesifik, fungsi rilis Github akan melakukan push ke Docker Hub dengan tag `latest` dan `<nama rilisan>` pada saat waktu rilis.

Kamu juga dapat melakukan push manual dari Github. 
Untuk melakukan tersebut, pilih branch dari Actions => Publish Docker image => Run workflow.  
Akan tetapi, tag yang nantinya dibuat dalam kasus ini akan menjadi `<nama branch>`.
