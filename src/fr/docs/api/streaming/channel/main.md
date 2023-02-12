---
description: "Ce canal fournit des informations basiques."
---

# `main`
Ce canal fournit des informations basiques.

## Paramètres
Aucun

## Évènements
### `notification`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Notification'
}"/>

Lorsque vous recevez une notification.

### `mention`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Lorqu’un message est envoyé.

### `reply`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Lors de la réception d’une réponse.

### `renote`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Lorqu’une de vos notes est renotée.

### `follow`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Lorqsue vous vous abonnez à une autre personne.

### `followed`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Lorsqu’une autre personne vous suit.

### `unfollow`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Lorsque vous arrêtez de suivre une autre personne.

### `messagingMessage`
<MkSchemaViewer :schema="{
	$ref: 'misskey://MessagingMessage'
}"/>

Lorsqu’un message instantané est reçu.

### `readAllNotifications`
Lorsque toutes les notifications ont été lues.

### `unreadNotification`
Lorsqu’il y a de nouvelles notifications.

### `unreadMention`
Lorsqu’il y a une nouvelle mention.

### `readAllUnreadMentions`
Lorsque toutes les mentions ont été vues.

### `unreadSpecifiedNote`
Lorqu’il y a de nouvelles notes directes.

### `readAllUnreadSpecifiedNotes`
Lorsque toutes les notes directes ont été lues.

### `unreadMessagingMessage`
Lorsqu’il y a un nouveau message instantané.

### `readAllMessagingMessages`
Lorsque ltous les messages instantanés ont été lus.

## Opérations
Aucune
