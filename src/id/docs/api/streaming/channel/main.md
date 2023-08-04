---
description: "Kanal dimana informasi dasar bergulir."
---

# `main`
Kanal dimana informasi dasar bergulir.

## Parameter
Tidak ada

## Event
### `notification`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Notification'
}"/>

Dijalankan ketika notifikasi diterima.

### `mention`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Dijalankan ketika disebut.

### `reply`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Dijalankan ketika dibalas.

### `renote`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Dijalankan ketika direnote.

### `follow`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Dijalankan ketika mengikuti pengguna lain.

### `followed`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Dijalankan ketika diikuti pengguna lain.

### `unfollow`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Dijalankan ketika batal mengikuti pengguna lain.

### `messagingMessage`
<MkSchemaViewer :schema="{
	$ref: 'misskey://MessagingMessage'
}"/>

Dijalankan ketika menerima pesan.

### `readAllNotifications`
Dijalankan ketika semua notifikasi telah dibaca.

### `unreadNotification`
Dijalankan ketika ada notifikasi baru.

### `unreadMention`
Dijalankan ketika ada sebutan baru.

### `readAllUnreadMentions`
Dijalankan ketika semua sebutan telah dibaca.

### `unreadSpecifiedNote`
Dijalankan ketika ada catatan langsung.

### `readAllUnreadSpecifiedNotes`
Dijalankan ketika semua catatan langsung telah dibaca.

### `unreadMessagingMessage`
Dijalankan ketika ada pesan baru.

### `readAllMessagingMessages`
Dijalakan ketika semua pesan telah dibaca.

## Aksi
Tidak ada
