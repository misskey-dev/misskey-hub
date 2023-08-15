Panduan Pemasangan dan Penyetelan Misskey
================================================================

Kami sangat berterima kasih atas ketertarikanmu untuk memasang peladen Misskey kamu sendiri!
Panduan ini akan menjelaskan bagaimana cara memasang dan menyetel peladen Misskey.

----------------------------------------------------------------

::: danger
Jangan pernah mengubah nama domain (hostname) peladen ketika kamu sudah mulai menggunakannya!
:::

*1.* Pasang aplikasi yang dibutuhkan
----------------------------------------------------------------
Mohon pasang dan setel aplikasi berikut:

#### Aplikasi :package:
* **[Node.js](https://nodejs.org/en/)** (20.4.x)
* **[PostgreSQL](https://www.postgresql.org/)** (15.x)
* **[Redis](https://redis.io/)**
* **[FFmpeg](https://www.ffmpeg.org/)**

Jika kamu menggunakan Debian/Ubuntu, kamu harus memasang paket `build-essential`.

corepack harus dinyalakan.

```sh
sudo corepack enable
```

*2.* Buat pengguna Misskey
----------------------------------------------------------------
Menjalankan Misskey sebagai root bukanlah ide yang bagus. Oleh karena itu, kita akan membuat pengguna baru untuk menangani masalah tersebut.
Sebagai contoh dalam debian:

```sh
adduser --disabled-password --disabled-login misskey
```

*3.* Pasang Misskey
----------------------------------------------------------------
1. Hubungkan ke pengguna `misskey`

	`sudo -iu misskey`

2. Klon repositori Misskey

	`git clone --recursive https://github.com/misskey-dev/misskey.git`

3. Beralih ke direktori repositori

	`cd misskey`

4. Checkout ke branch [rilisan terbaru](https://github.com/misskey-dev/misskey/releases/latest)

	`git checkout master`

5. Unduh submodul

    `git submodule update --init`

6. Pasang dependensi Misskey

	`pnpm install --frozen-lockfile`

*4.* Konfigurasikan Misskey
----------------------------------------------------------------
1. Salin berkas `.config/example.yml` dan ubah namanya ke `default.yml`.

	`cp .config/example.yml .config/default.yml`

2. Sunting `default.yml`

*5.* Bangun Misskey
----------------------------------------------------------------

Bangun Misskey dengan perintah berikut:

`NODE_ENV=production pnpm run build`

Apabila kamu menggunakan distribusi Debian, kamu perlu memasang paket `build-essential` dan `python`.

*6.* Inisialisasi Basis Data
----------------------------------------------------------------
1. Buat pengguna PostgreSQL yang sesuai dengan kata sandi masing-masing dan basis data kosong sesuai dengan nama pada berkas konfigurasi.
	Pastikan koneksi basis data juga bekerja dengan benar apabila dijalankan dari pengguna yang nantinya akan menjalankan Misskey. Jika tidak, nantinya akan menyebabkan masalah. Encoding basis data harus UTF-8.

	```
	sudo -u postgres psql
	create database misskey with encoding = 'UTF8';
	create user misskey with encrypted password '{KATA_SANDI_KAMU}';
	grant all privileges on database misskey to misskey;
	alter database misskey owner to misskey;
	\q
	```

2. Jalankan inisialisasi basis data
	`pnpm run init`

*7.* Udah, gitu aja.
----------------------------------------------------------------
Mantab! Sekarang, kamu sudah punya lingkungan yang menjalankan Misskey.

### Menjalankan secara normal
Hanya jalankan perintah `NODE_ENV=production pnpm run start`. Selesai!

### Menjalankan dengan systemd

1. Buat layanan systemd di sini

	`/etc/systemd/system/misskey.service`

2. Sunting, tempelkan konfigurasi berikut dan simpan:

	::: details
	```
	[Unit]
	Description=Misskey daemon

	[Service]
	Type=simple
	User=misskey
	ExecStart=/usr/bin/npm start
	WorkingDirectory=/home/misskey/misskey
	Environment="NODE_ENV=production"
	TimeoutSec=60
	StandardOutput=journal
	StandardError=journal
	SyslogIdentifier=misskey
	Restart=always

	[Install]
	WantedBy=multi-user.target
	```
	:::

3. Nyalakan ulang systemd dan nyalakan layanan misskey.

	`sudo systemctl daemon-reload; sudo systemctl enable misskey`

4. Jalankan layanan misskey.

	`sudo systemctl start misskey`

Kamu dapat mengecek apakah layanannya berjalan dengan memasukkan perintah `systemctl status misskey`.

### Jalankan dengan OpenRC

1. Salin teks berikut ke `/etc/init.d/misskey`:

	::: details
	```sh
	#!/sbin/openrc-run

	name=misskey
	description="Misskey daemon"

	command="/usr/bin/npm"
	command_args="start"
	command_user="misskey"

	supervisor="supervise-daemon"
	supervise_daemon_args=" -d /home/misskey/misskey -e NODE_ENV=\"production\""

	pidfile="/run/${RC_SVCNAME}.pid"

	depend() {
		need net
		use logger

		# alternatively, uncomment if using nginx reverse proxy
		#use logger nginx
	}
	```
	:::

2. Atur layanan untuk mulai pada saat boot

	`rc-update add misskey`

3. Jalankan layanan misskey

	`rc-service misskey start`

Kamu dapat mengecek apakah layanannya berjalan dengan memasukkan perintah `rc-service misskey status`.

### Bagaimana cara memutakhirkan peladen Misskey ke versi terbaru
1. `git checkout master`
2. `git pull`
3. `git submodule update --init`
4. `NODE_ENV=production pnpm install --frozen-lockfile`
5. `NODE_ENV=production pnpm run build`
6. `pnpm run migrate`
7. Restart your Misskey process to apply changes
8. Enjoy

Apabila kamu menemukan masalah pada saat memutakhirkan, coba jalankan perintah berikut:
1. `pnpm run clean` atau `pnpm run clean-all`
2. Coba mutakhirkan lagi (Jangan lupa `pnpm install`)
