---
description: "グローバルタイムラインのノートが流れるチャンネルです。"
---

# `globalTimeline`
グローバルタイムラインのノートが流れるチャンネルです。

## パラメータ
なし

## イベント
### `note`
<MkSchemaViewer :schema="{
	$ref: 'misskey://Note'
}">
	<template #title>ペイロード</template>
</MkSchemaViewer>

グローバルタイムラインに新しいノートが追加されたときに発生します。

## 操作
なし
