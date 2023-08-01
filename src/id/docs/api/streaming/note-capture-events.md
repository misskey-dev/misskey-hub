# Event Penangkap Postingan

## `reacted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		reaction: {
			type: 'string',
			description: 'Tipe reaksi',
		},
		userId: {
			type: 'string',
			description: 'ID dari pengguna yang membuat reaksi',
		},
	}
}"/>

Dijalankan ketika reaksi dibuat ke catatan target.

## `pollVoted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		choice: {
			type: 'number',
			description: 'Opsi ID',
		},
		userId: {
			type: 'string',
			description: 'ID dari pengguna yang memilih',
		},
	}
}"/>

Dijalankan ketika pemilihan dilakukan dalam survei yang terlampir dari catatan yang bersangkutan.

## `deleted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		deletedAt: {
			type: 'string',
			description: 'Tanggal dan waktu penghapusan',
		},
	}
}"/>

Dijalankan ketika catatan target dihapus.
