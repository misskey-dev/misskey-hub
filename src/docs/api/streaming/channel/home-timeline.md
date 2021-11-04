---
description: "ホームタイムラインのノートが流れるチャンネルです。"
---

# `homeTimeline`
ホームタイムラインのノートが流れるチャンネルです。

## パラメータ
なし

## イベント
### `note`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}">
	<template #title>ペイロード</template>
</MkSchemaViewer>

ホームタイムラインに新しいノートが追加されたときに発生します。

## 操作
なし
