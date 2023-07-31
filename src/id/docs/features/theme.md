# Tema

Kamu dapat mengubah tampilan dan nuansa dari klien Misskey dengan menerapkan tema.

## Pengaturan Tema

Pengaturan > Tema

## Membuat Tema

Kode objek tema ditulis menggunakan JSON5.
Tema memiliki tibe objek seperti yang ditunjukkan di bawah.

``` js
{
	id: '17587283-dd92-4a2c-a22c-be0637c9e22a',

	name: 'Danboard',
	author: 'syuilo',

	base: 'light',

	props: {
		accent: 'rgb(218, 141, 49)',
		bg: 'rgb(218, 212, 190)',
		fg: 'rgb(115, 108, 92)',
		panel: 'rgb(236, 232, 220)',
		renote: 'rgb(100, 152, 106)',
		link: 'rgb(100, 152, 106)',
		mention: '@accent',
		hashtag: 'rgb(100, 152, 106)',
		header: 'rgba(239, 227, 213, 0.75)',
		navBg: 'rgb(216, 206, 182)',
		inputBorder: 'rgba(0, 0, 0, 0.1)',
	},
}

```

* `id` ... ID unik tema. UUID lebih direkomendasikan.
* `name` ... Nama tema
* `author` ... Pembuat tema
* `desc` ... Deskripsi tema (Objek)
* `base` ... tema gelap atau terang
	* Gunakan `light` untuk tema terang dan `dark` untuk tema gelap.
	* Tema mewarisi tema dasar yang diatur di sini.
* `props` ... Definisi gaya tema. Dijelaskan dalam seksi berikut.

### Definisi Gaya Tema

Definisikan gaya tema di dalam `props`.
Kunci merupakan nama dari variabel, dan nilai menentukan konten.
Selanjutnya, objek `props` ini mewariskan dari tema dasar.
Tema dasarnya adalah [_light.json5] jika `base` dari tema ini adalah `light` dan [_dark.json5] jika `dark`.
Artinya, jika tidak ada kunci `props` yang bernama `panel` dalam tema ini, maka nilai `panel` akan diatur menggunakan nilai dari tema dasar.

[_light.json5]: https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_light.json5
[_dark.json5]:  https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_dark.json5

#### Sintaks Nilai

* Warna diekspresikan dengan heksadesimal
	* contoh: `#00ff00`
* Warna diekspresikan dengan format `rgb(r, g, b)`
	* contoh: `rgb(0, 255, 0)`
* Warna yang memiliki nilai alfa/transparansi diekspresikan dengan format `rgb(r, g, b, a)`
	* contoh: `rgba(0, 255, 0, 0.5)`
* Referensi nilai kunci lain
	* `@{key name}` merupakan referensi ke nilai dari kuncil lain. Ganti `{key name}` dengan nama dari kunci yang ingin kamu referensikan.
	* contoh: `@panel`
* Referensi konstan (didiskusikan di bawah)
	* `${constant name}` merupakan referensi ke konstan.is a reference to a constant. Ganti `{constant name}` dengan nama dari konstan yang ingin kamu referensikan.
	* contoh: `$main`
* Fungso (didiskusikan di bawah)
	* `:{関数名}<{引数}<{色}`

#### Konstan

Konstan berguna ketika kamu memiliki nilai yang tidak ingin kamu keluarkan sebagai variabel CSS namun ingin kamu gunakan sebagai nilai untuk variabel CSS yang lain. "Aku tidak ingin mengeluarkannya sebagai variabel CSS, tapi aku ingin menggunakannya sebagai nilai untuk variabel CSS".

#### Fungsi

WIP
