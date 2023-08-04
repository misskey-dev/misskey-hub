# Pembuatan Plugin
Fitur plugin dalam klien Misskey Web memperbolehkan kamu untuk memperluas fungsionalitas klien dan menambah fitur lain.
Dokumen ini akan menjelaskan bagaimana cara membuat plugin Misskey.

## AiScript
Plugin merupakan script yang dituliskan menggunakan bahasa pemrograman AiScript.

## Metadata
Plugin harus mendefinisikan metadata plugin dengan menggunakan bawaan fitur sematan metadata AiScript.
Metadata merupakan objek yang berisi properti di bawah ini.

### name
Nama Plugin

### author
Pembuat Plugin

### version
Versi Plugin. Mohon tentukan nilai numerik.

### description
Deskripsi Plugin

### permissions
Izin yang dibutuhkan oleh plugin. Digunakan ketika membuat permintaan ke Misskey API.

### config
Objek merepresentasikan informasi konfigurasi plugin.
`key` merupakan nama konfigurasi dan `value` berisi properti di bawah ini.

#### type
String yang merepresentasikan tipe dari nilai konfigurasi. Pilih salah satu dari berikut
string number boolean

#### label
Nama dari konfigurasi yang ditampilkan ke pengguna

#### description
Deskripsi konfigurasi 

#### default
Nilai bawaan dari konfigurasi

## API
Misskey Web menyediakan API untuk plugin yang mana dapat digunakan dan dimanfaatkan untuk memperluas fungsionalitas dari klien.
Untuk melihat API yang tersedia, mohon merujuk pada [Referensi API Plugin](./plugin-api-reference.md).
