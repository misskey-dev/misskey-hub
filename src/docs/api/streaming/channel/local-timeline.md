---
description: "ローカルタイムラインのノートが流れるチャンネルです。"
---

# `localTimeline`
ローカルタイムラインのノートが流れるチャンネルです。

## パラメータ
なし

## イベント
### `note`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}">
	<template #title>ペイロード</template>
</MkSchemaViewer>

ローカルタイムラインに新しいノートが追加されたときに発生します。

## 操作
なし
