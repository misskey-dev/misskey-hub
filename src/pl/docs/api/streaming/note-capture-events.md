# Wydarzenia wyłapujące wpisy

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

Dzieje się kiedy ktoś zareaguje na wpis docelowy

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

Dzieje się kiedy ktoś zagłosuje na ankiecie w poście.

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

Dzieje się kiedy post jest usunięty.
