---
description: "ユーザーを表すエンティティです。"
---

# User
ユーザーを表すエンティティです。

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
		username: {
			type: 'string',
		},
		host: {
			type: 'string',
			nullable: true,
		},
		name: {
			type: 'string',
		},
		onlineStatus: {
			type: 'string',
			enum: ['online', 'active', 'offline', 'unknown',],
		},
		avatarUrl: {
			type: 'string',
		},
		avatarBlurhash: {
			type: 'string',
		},
	},
}">
</MkSchemaViewer>
