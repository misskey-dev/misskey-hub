---
description: "Ten kanał zawiera podstawowe informacje."
---

# `main`

Ten kanał zawiera podstawowe informacje.

## Parametery

brak

## Zdarzenia

### `notification`

<MkSchemaViewer :schema="{
 $ref: 'misskey://Notification'
}"/>

Kiedy odtrzymasz wiadomość

### `mention`

<MkSchemaViewer :schema="{
 $ref: 'misskey://Note'
}"/>

Kiedy wiadomość jest wysłana

### `reply`

<MkSchemaViewer :schema="{
 $ref: 'misskey://Note'
}"/>

Kiedy odebrana jest odpowiedź

### `renote`

<MkSchemaViewer :schema="{
 $ref: 'misskey://Note'
}"/>

Kiedy post jest zrepostowany

### `follow`

<MkSchemaViewer :schema="{
 $ref: 'misskey://User'
}"/>

Kiedy zaobserwujesz użytkownika.

### `followed`

<MkSchemaViewer :schema="{
 $ref: 'misskey://User'
}"/>

Kiedy inny użytkownik ciebie zaobserwuje

### `unfollow`

<MkSchemaViewer :schema="{
 $ref: 'misskey://User'
}"/>

Kiedy przestaniesz obserwować kogoś

### `messagingMessage`

<MkSchemaViewer :schema="{
 $ref: 'misskey://MessagingMessage'
}"/>

Kiedy wiadomość czatu jest odebrana

### `readAllNotifications`

Wszytkie powiadomienia zostały przeczytane

### `unreadNotification`

Nieprzeczytane powiadomienia

### `unreadMention`

Nowa wzmianka.

### `readAllUnreadMentions`

Wszystkie wzmianki były widziane.

### `unreadSpecifiedNote`

Nowa wiadomość bezpośrednia.

### `readAllUnreadSpecifiedNotes`

Wszystkie posty bezpośrednie przeczytane.

### `unreadMessagingMessage`

Nieprzeczytana wiadomość czatu.

### `readAllMessagingMessages`

Wszystkie wiadomości czatu przeczytane.

## Operacje

brak
