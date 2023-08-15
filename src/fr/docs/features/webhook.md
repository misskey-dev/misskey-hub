# Webhook

::: tip
Cette fonction est disponible à partir de la version 12.109.0.
:::

::: warning
C’est une fonction expérimentale qui peut être instable ou être modifiée à l’avenir.
:::

Misskey fournit un webhook qui vous permet de recevoir des évènements Misskey en temps réel.

Vous pouvez les gérer via la section éponyme de vos paramètres.

Une fois défini, une requête HTTP est envoyée à l’URL indiquée chaque fois qu’un évènement défini survient. La requête sera en POST et contiendra du JSON.
De pluis, l’entête de requête contient une clé secrète définie lors de la création avec le nom `X-Misskey-Hook-Secret`. Celui-ci vous permet de vérifier l’authenticité de la requête.

Les propriétés suivantes seront transmises :

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

Si le serveur de destination retourne une erreur 5xx ou ne répond pas, la requête est renvoyée après un certain délai.

Les webhooks peuvent être désactivés individuellement depuis le tableau d’administration pour arrêter les requêtes.

## Évènement

Ci-dessous une description de chaque type d’évènement.

### follow

Lorsque vous suivez une personne.

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

Lorsqu’une personne vous suit.

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

Lorsque vous arrêtez de suivre une personne.

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

Lorsque vous publiez une note.

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

Lorsqu’une personne répond à votre note.

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

Lorsque votre note est renotée.

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

Lorsqu’une personne vous mentionne.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'misskey://Note',
			description: 'The note that contains the mention',
		},
	}
}"/>
