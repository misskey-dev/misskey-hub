# Webhook

::: tip
Fitur ini telah tersedia sejak Misskey versi 12.109.0.
:::

::: warning
Fitur ini eksperimental dan kemungkinan tidak stabil atau terdapat perubahan kedepannya nanti.
:::

Misskey menyediakan webhook yang mana membolehkanmu untuk menerima berbagai event dari Misskey secara realtime.

Kamu dapat mengelola webhookmu dengan menuju ke menu Pengaturan > Webhook.

Ketika webhook telah terdaftar, permintaan HTTP dikirimkan ke URL yang telah ditentukan setiap kali event yang ditentukan terjadi. Metode permintaan tersebut berjenis POST dan berisi JSON pada body.
Sebagai tambahan, header permintaan akan memuat secret yang telah diatur pada saat registrasi dengan nama `X-Misskey-Hook-Secret`. Kamu dapat menggunakan secret ini untuk memverifikasi apakah permintaan tersebut sah.

Muatan dari permintaan memiliki isi properti sebagai berikut.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		hookId: {
			type: 'string',
			description: 'ID Webhook',
		},
		userId: {
			type: 'string',
			description: 'ID pengguna dari pembuat webhook',
		},
		eventId: {
			type: 'string',
			description: 'ID Event',
		},
		createdAt: {
			type: 'integer',
			description: 'Waktu dan Tanggal terjadinya event (Waktu UNIX, ms)',
		},
		type: {
			type: 'string',
			description: 'Tipe event',
		},
		body: {
			type: 'object',
			description: 'Tipe muatan',
		},
	}
}"/>

Jika peladen tujuan mengeluarkan error 5XX atau tidak merespon, maka permintaan akan dikirimkan kembali setelah jeda waktu.

Webhook secara terpisah dapat memiliki status aktif mereka diubah dari layar administrator untuk menghentikan pengiriman permintaan dalam sementara waktu.

## Event

Berikut deskripsi dan muatan dari setiap tipe event.

### follow

Terjadi ketika mengikuti seseorang.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'Pengguna yang diikuti',
		},
	}
}"/>

### followed

Terjadi ketika kamu diikuti seseorang.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'Pengguna yang mengikuti kamu',
		},
	}
}"/>

### unfollow

Terjadi ketika kamu batal mengikuti seseorang.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'Pengguna tidak lagi diikuti',
		},
	}
}"/>

### note

Terjadi ketika kamu memposting catatan.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'Catatan yang ditulis',
		},
	}
}"/>

### reply

Terjadi ketika seseorang telah membalas catatanmu.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'Balasan',
		},
	}
}"/>

### renote

Terjadi ketika catatanmu direnote.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'Renote',
		},
	}
}"/>

### mention

Terjadi ketika seseorang menyebut kamu.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'Catatan yang berisi sebutan',
		},
	}
}"/>
