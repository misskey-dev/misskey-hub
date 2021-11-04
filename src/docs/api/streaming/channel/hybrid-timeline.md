---
description: "ソーシャルタイムラインのノートが流れるチャンネルです。"
---

# `hybridTimeline`
ソーシャルタイムラインのノートが流れるチャンネルです。

## パラメータ
なし

## イベント
### `note`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}">
	<template #title>ペイロード</template>
</MkSchemaViewer>

ソーシャルタイムラインに新しいノートが追加されたときに発生します。

## 操作
なし
