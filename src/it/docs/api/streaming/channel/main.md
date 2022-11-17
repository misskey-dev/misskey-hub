---
description: "Questo canale fornisce informazioni di base"
---

# `main`

Questo canale fornisce informazioni di base

## Parametri

nessuno

## Eventi

### `notification`

<MkSchemaViewer :schema="{
	$ref: 'misskey://Notification'
}"/>

Avviene quando ricevi una notifica

### `mention`

<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Avviene quando il profilo viene nominato

### `reply`

<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Avviene quando si riceve una risposta

### `renote`

<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Avviene quando è _"Rinotata"_ una delle tue Note

### `follow`

<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Avviene quando segui un altro profilo

### `followed`

<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Avviene quando un altro profilo ti segue

### `unfollow`

<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Avviene quando un altro profilo smette di seguirti

### `messagingMessage`

<MkSchemaViewer :schema="{
	$ref: 'misskey://MessagingMessage'
}"/>

Avviene alla ricezione di un messaggio di chat

### `readAllNotifications`

Avviene quando sono state lette tutte le notifiche

### `unreadNotification`

Avviene quando c'è una nuova notifica

### `unreadMention`

Avviene quando c'è una nuova menzione

### `readAllUnreadMentions`

Avviene quando sono state lette tutte le menzioni

### `unreadSpecifiedNote`

Avviene quando c'è una nuova Nota diretta

### `readAllUnreadSpecifiedNotes`

Avviene quando sono state lette tutte le Note dirette

### `unreadMessagingMessage`

Avviene quando c'è un nuovo messaggio nella chat

### `readAllMessagingMessages`

Avviene quando sono stati letti tutti i messaggi in chat

## Operazioni

nessuna
