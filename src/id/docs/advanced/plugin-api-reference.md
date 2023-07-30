# Referensi API Plugin

## Mk:dialog(title text type)
Menampilkan dialog. `type` dapat memiliki nilai berikut.\
info success warn error question\
Apabila nilai dihilangkan secara bawaan akan menjadi `info`.

## Mk:confirm(title text type)
Menampilkan dialog konfirmasi. `type` dapat memiliki nilai berikut.\
info success warn error question\
Apabila nilai dihilangkan secara bawaan akan menjadi `question`.\
Akan mengeluarkan output `true` bila pengguna memilih "OK" atau `false` bila pengguna memilih "Cancel"

## Mk:api(endpoint params)
Permintaan ke Misskey API. Argumen pertama adalah nama endpoint dan argumen kedua adalah parameter objek.

## Mk:save(key value)
Menyimpan nilai arbitrer dengan nama arbitrer. Nilai yang tersimpan tetap ada setelah konteks AiScript diakhiri dan dapat dibaca oleh Mk:load.

## Mk:load(key)
Membaca nilai dari nama yang ditentukan tersimpan dibuat oleh Mk:save.

## Plugin:register_post_form_action(title fn)
Menambahkan aksi ke form postingan. Argumen pertama merupakan nama dari aksi dan argumen kedua merupakan fungsi panggilan balik ketika item dipilih.\
Fungsi panggilan balik meneruskan objek target pengguna sebagai argumen pertama.

## Plugin:register_note_action(title fn)
Menambahkan item ke menu catatan. Argumen pertama merupakan nama dari item dan argumen kedua merupakan fungsi panggilan balik ketika item dipilih.\
Fungsi panggilan balik meneruskan objek target catatan sebagai argumen pertama.

## Plugin:register_user_action(title fn)
Menambahkan item ke menu pengguna. Argumen pertama merupakan nama dari item dan argumen kedua merupakan fungsi panggilan balik ketika item dipilih.\
Fungsi panggilan balik meneruskan objek target pengguna sebagai argumen pertama.

## Plugin:register_note_view_interruptor(fn)
Menulis ulang informasi catatan yang ditampilkan di antarmuka.\
Fungsi panggilan balik meneruskan objek target catatan sebagai argumen pertama.\
Catatan ditulis ulang pada nilai keluaran dari fungsi panggilan balik.

## Plugin:register_note_post_interruptor(fn)
Menulis ulang informasi catatan ketika catatan telah dipost.\
Fungsi panggilan balik meneruskan objek target catatan sebagai argumen pertama.\
Catatan ditulis ulang pada nilai keluaran dari fungsi panggilan balik.

## Plugin:open_url(url)
Membuka URL yang diteruskan sebagai argumen pertama ke dalam tab baru peramban.

## Plugin:config
Objek dimana konfigurasi plugin disimpan. Nilai dimasukkan dengan aturan key dalam config pada definisi plugin.
