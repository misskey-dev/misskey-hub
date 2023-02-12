# Évènements de capture de note

## `reacted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		reaction: {
			type: 'string',
			description: 'type of reaction',
		},
		userId: {
			type: 'string',
			description: 'ID of the user who made the reaction',
		},
	}
}"/>

Lorsqu’une personne réagit à une note.

## `pollVoted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		choice: {
			type: 'number',
			description: 'choice ID',
		},
		userId: {
			type: 'string',
			description: 'ID of the user who cast the vote',
		},
	}
}"/>

Lorsque qu’une personne participe à un sondage.

## `deleted`
<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		deletedAt: {
			type: 'string',
			description: 'deletion time',
		},
	}
}"/>

Lorsqu’une note est supprimée.
