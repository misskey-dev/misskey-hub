# Webhook
::: tip
バージョン 12.109.0 以降の機能です。
:::

::: warning
実験的な機能であるため、動作が不安定だったり今後仕様が変更される可能性があります。
:::

MisskeyにはWebhookが用意されています。Webhookを利用すると、Misskey上の様々なイベントをリアルタイムに受け取ることが可能です。

設定>Webhook でWebhookの管理を行えます。

Webhookが登録されると、指定したイベントが発生した際に、指定したURLにHTTPリクエストが送信されます。リクエストのメソッドはPOSTで、ボディはJSONです。
さらに、リクエストヘッダーには`X-Misskey-Hook-Secret`という名前で、登録時に設定したシークレットが含まれます。このシークレットが正しいか検証することで、リクエストが正規のものか判定することができます。

リクエストペイロードは以下のプロパティが入ります。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		hookId: {
			type: 'string',
			description: 'Webhook ID',
		},
		userId: {
			type: 'string',
			description: 'Webhook作成者のユーザーID',
		},
		eventId: {
			type: 'string',
			description: 'イベントのID',
		},
		createdAt: {
			type: 'integer',
			description: 'イベントが発生した日時(UNIX time、ミリ秒)',
		},
		type: {
			type: 'string',
			description: 'イベントの種類',
		},
		body: {
			type: 'object',
			description: 'イベントのペイロード',
		},
	}
}"/>

送信先サーバーが5xxエラーを返すか、応答しなかった場合は時間を開けてリクエストが再送されます。

Webhookは管理画面から個別にアクティブ状態を設定でき、一時的にリクエストの送信を停止させることができます。

## イベント
イベントごとに説明とペイロードを示します。

### follow
自分が誰かをフォローした際に発生します。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'フォローしたユーザー',
		},
	}
}"/>

### followed
自分が誰かからフォローされた際に発生します。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'フォローを行ったユーザー',
		},
	}
}"/>

### unfollow
自分が誰かをフォロー解除した際に発生します。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'フォロー解除したユーザー',
		},
	}
}"/>

### note
自分がノートを投稿した際に発生します。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: '作成されたノート',
		},
	}
}"/>

### reply
自分のノートに返信された際に発生します。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: '返信',
		},
	}
}"/>

### renote
自分のノートがRenoteされた際に発生します。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'Renote',
		},
	}
}"/>

### mention
自分にメンションされた際に発生します。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'メンションを含むノート',
		},
	}
}"/>
