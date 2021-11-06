---
description: "基本的な情報が流れるチャンネルです。"
---

# `main`
基本的な情報が流れるチャンネルです。

## パラメータ
なし

## イベント
### `notification`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Notification'
}"/>

通知を受け取ったときに発生します。

### `mention`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

メンションされたときに発生します。

### `reply`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

返信されたときに発生します。

### `renote`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}"/>

Renoteされたときに発生します。

### `follow`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

自分が他のユーザーをフォローしたときに発生します。

### `followed`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

他のユーザーが自分をフォローしたときに発生します。

### `unfollow`
<MkSchemaViewer :schema="{
	$ref: 'misskey://User'
}"/>

自分が他のユーザーをフォロー解除したときに発生します。

### `messagingMessage`
<MkSchemaViewer :schema="{
	$ref: 'misskey://MessagingMessage'
}"/>

メッセージを受け取ったときに発生します。

### `readAllNotifications`
全ての通知が既読になったときに発生します。

### `unreadNotification`
新しい通知があるときに発生します。

### `unreadMention`
新しいメンションがあるときに発生します。

### `readAllUnreadMentions`
全てのメンションが既読になったときに発生します。

### `unreadSpecifiedNote`
新しいダイレクト投稿があるときに発生します。

### `readAllUnreadSpecifiedNotes`
全てのダイレクト投稿が既読になったときに発生します。

### `unreadMessagingMessage`
新しいメッセージがあるときに発生します。

### `readAllMessagingMessages`
全てのメッセージが既読になったときに発生します。

## 操作
なし
