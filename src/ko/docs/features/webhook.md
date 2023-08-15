# Webhook
::: info
본 문서는 번역되지 않아 영문으로 제공됩니다.
:::

::: tip
This feature is available as of Misskey version 12.109.0.
:::

::: warning
This is an experimental feature and may be unstable or subject to change in the future.
:::

Misskey provides a webhook which allows you to receive various events from Misskey in real time.

You can manage your webhooks by going to Settings > Webhook.

Once a webhook is registered, an HTTP request is sent to the specified URL each time the specified event occurs. The request method will be POST and contain JSON in its body.
In addition, the request header will contain the secret that was set during registration with the name `X-Misskey-Hook-Secret`. You can use this secret to verify that the request is legitimate.

The payload wil contain the following properties.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		hookId: {
			type: 'string',
			description: 'Webhook ID',
		},
		userId: {
			type: 'string',
			description: 'User ID of webhook creator',
		},
		eventId: {
			type: 'string',
			description: 'Event ID',
		},
		createdAt: {
			type: 'integer',
			description: 'Date and time of event occurrence (UNIX time, ms)',
		},
		type: {
			type: 'string',
			description: 'Event type',
		},
		body: {
			type: 'object',
			description: 'Event payload',
		},
	}
}"/>

If the destination server returns a 5XX error or does not respond, the request is resent after a time delay.

Webhooks can individually have their active status changed from the administration screen to temporarily stop sending requests.

## Event
The following is a description and payload for each event type.

### follow
Occurs when you follow someone.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'User that is followed',
		},
	}
}"/>

### followed
Occurs when you are followed by someone.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'User that is following you',
		},
	}
}"/>

### unfollow
Occurs when you unfollow someone.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'misskey://User',
			description: 'The user being unfollowed',
		},
	}
}"/>

### note
Occurs when you post a note.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'The composed note',
		},
	}
}"/>

### reply
Occurs when someone has replied to your note.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'The reply',
		},
	}
}"/>

### renote
Occurs when your note is renoted.

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
Occurs when someone has mentioned you.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'The note that contains the mention',
		},
	}
}"/>
