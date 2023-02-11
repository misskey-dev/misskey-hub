# Note Capture Events

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

Occurs when a reaction is made to the target note.

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

Occurs when the survey attached to the target note is voted on.

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

Occurs when the target note is deleted.
