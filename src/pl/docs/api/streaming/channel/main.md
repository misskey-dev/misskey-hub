---
description: "This channel provides basic information."
---

# `main`
This channel provides basic information.

## Parameters
none

## Events
### `notification`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Notification'
}"/>

Occurs when you receive a notification.

### `mention`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Occurs when a message is sent.

### `reply`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Occurs when a reply is received.

### `renote`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Occurs when one of your notes is renoted.

### `follow`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Occurs when you follow another user.

### `followed`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Occurs when another user follows you.

### `unfollow`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

Occurs when you unfollow another user.

### `messagingMessage`
<MkSchemaViewer :schema="{
	$ref: 'misskey://MessagingMessage'
}"/>

Occurs when a chat message is received.

### `readAllNotifications`
Occurs when all notifications have been read.

### `unreadNotification`
Occurs when there is a new notification.

### `unreadMention`
Occurs when there is a new mention.

### `readAllUnreadMentions`
Occurs when all mentions have been seen.

### `unreadSpecifiedNote`
Occurs when there is a new direct note.

### `readAllUnreadSpecifiedNotes`
Occurs when all direct notes have been read.

### `unreadMessagingMessage`
Occurs when there is a new  chat message.

### `readAllMessagingMessages`
Occurs when all chat messages have been read.

## Operations
none
