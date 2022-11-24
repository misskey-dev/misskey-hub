# Gli eventi di _cattura Nota_

## `reacted`

<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		reaction: {
			type: 'string',
			description: 'tipo di reazione',
		},
		userId: {
			type: 'string',
			description: 'ID del profilo che ha reagito',
		},
	}
}"/>

Avviene quando c'è una reazione alla Nota specificata

## `pollVoted`

<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		choice: {
			type: 'number',
			description: 'ID della scelta',
		},
		userId: {
			type: 'string',
			description: 'ID del profilo che ha votato',
		},
	}
}"/>

Avviene quando c'è un voto alla nota con sondaggio

## `deleted`

<MkSchemaViewer :schema="{
	type: 'object',
	properties: {
		deletedAt: {
			type: 'string',
			description: 'orario di eliminazione',
		},
	}
}"/>

Avviene quando la Nota specifica viene eliminata
