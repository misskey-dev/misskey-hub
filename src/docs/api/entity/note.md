---
description: "ノートを表すエンティティです。"
---

# Note
ノートを表すエンティティです。

## スキーマ
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		id: {
			type: 'string',
		},
		createdAt: {
			type: 'string',
		},
		text: {
			type: 'string',
			nullable: true,
		},
		cw: {
			type: 'string',
			nullable: true,
		},
		user: {
			$ref: 'misskey://User',
		},
		userId: {
			type: 'string',
		},
		visibility: {
			type: 'string',
			enum: ['public', 'home', 'followers', 'specified',],
		},
	},
}">
</MkSchemaViewer>
