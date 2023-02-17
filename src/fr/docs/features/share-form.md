# Formulaire de partage

Depuis la page `/share` sur Misskey Web, vous accédez à un formulaire de partage. Celui-ci permet au contenu de vos pages Misskey d’être partagé vers des pages web externes.

Différentes options sont disponibles dans l’URL, dont le contenu partagé, en tant que paramètres de requête.

## Paramètres de requête

::: tip
Tous les paramètres sont **facultatifs**.
:::

| nom | description |
| ---- | ---- |
| `title` | titre, sera inséré avant le corps principal entre crochets |
| `text` | corps principal |
| `url` | URL, insérée après le corps principal |

### Information de réponse

Vous pouvez faire d’une note une réponse à une autre en indiquant :

| nom | description |
| ---- | ---- |
| `replyId` | ID de la note à laquelle répondre |
| `replyUri` | URL de la note à laquelle répondre |

### Information de renote

Vous pouvez faire d’une note une renote en iniquant :

| nom | description |
| ---- | ---- |
| `renoteId` | ID de la note à renoter |
| `renoteUri` | URL de la note à renoter |

### Portée de publication

Les options suivantes vous permettent de sélectionner la portée :

| nom | description |
| ---- | ---- |
| `visibility` | `public`, `home`, `followers`, ou `specified` |
| `localOnly` | 0(false) ou 1(true) |
| `visibleUserIds` | ID du profil cible |
| `visibleAccts` | [acct](../glossary.md#acct) des profils cibles (séparés par des virgules) |

::: warning
Si `visibility` est réglé sur `specified`,  `visibleUserIds` ou `visibleAccts` sont nécessaires.
:::

### Pièces-jointes

Vous pouvez préciser des pièces-jointes avec les options suivantes :

| nom | description |
| ---- | ---- |
| `fileIds` | ID des fichiers à joindre (séparés par des virgules) |
