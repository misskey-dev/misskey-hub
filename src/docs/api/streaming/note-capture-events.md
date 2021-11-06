# 投稿キャプチャイベント

## `reacted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		reaction: {
			type: 'string',
			description: 'リアクションの種類',
		},
		userId: {
			type: 'string',
			description: 'リアクションを行ったユーザーのID',
		},
	}
}"/>

対象のノートにリアクションがされた場合に発生します。

## `pollVoted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		choice: {
			type: 'number',
			description: '選択肢ID',
		},
		userId: {
			type: 'string',
			description: '投票を行ったユーザーのID',
		},
	}
}"/>

対象のノートに添付されたアンケートに投票がされた場合に発生します。

## `deleted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		deletedAt: {
			type: 'string',
			description: '削除日時',
		},
	}
}"/>

対象のノートが削除された場合に発生します。
