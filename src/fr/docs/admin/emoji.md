# Émoticônes personnalisées

Les émoticônes personnalisées peuvent être modifiées par l’administration et la modération via les paramètres d’instance dans le menu correspondant.
Par défaut, vous verrez une liste des émoticônes installées localement.
Au démarrage, cette liste sera vide, mais vous pouvez l’alimenter de différentes manières.

## Copier depuis d’autres instances

Les émoticônes peuvent être facilement copiées depuis d’autres instances.
Pour cela, utiliser l’ongles « Remote » dans les paramètres.
Vous pouvez alors chercher des émoticônes par nom ou instance.

Cliquez sur l’émoticône de votre choix pour ouvrir un menu qui vous permettra de l’importer.

À noter que les droits d’auteur s’appliquent et qu’il est de votre responsabilité de vous assurer que vous pouvez l’utiliser.

## Import individuel

Si vous disposez d’une image que vous souhaiter utiliser, celle-ci peut être importée.
Cela fonctionne comme en joignant des fichiers à une note :
Vous pouvez choisir de téléverser un nouveau fichier, et le sélectionner depuis votre Drive Misskey ou une URL distante.

::: warning
En important une émoticône sur votre Drive, le fichier y restera.
Misskey ne fait pas de copies de ce fichier et si vous le supprimez celui-ci sera cassé.
:::

L’émoticône sera ajoutée à l’instance et vous pourez la modifier ou supprimer.

## Import en masse

Les émoticônes peuvent être importées en masse à partir d’un format spécial au sein d’une archive ZIP.
Cette fonction est disponible dans le menu du coin supérieur droit de l’onglet d’émoticônes personnalisées.

::: warning
L’import en masse peut écraser les émoticônes existant et créer de nombreux problèmes sur l’instance.
Assurez vous de n’importer que depuis des sources de confiance, voire que vous aurez-vous même exporté dans l’idéal.
:::

### Format émoticône empaquetée

À la racine se trouve un fichier `meta.json` contenant les informations à propos des émoticônes contenus.
Un exemple de définition de type pour ce fichier serait comme suit, où `Meta` est la structure du fichier complet :

```typescript
class Meta {
	metaVersion: number;
	host: string;
	/**
	 * Date and time representation returned by ECMAScript `Date.prototype.toString`.
	 */
	exportedAt: string;
	emojis: Emoji[];
}

class Emoji {
	downloaded: boolean;
	fileName: string;
	emoji: {
		id: string;
		updatedAt: string;
		name: string;
		host: null;
		category: string;
		originalUrl: string;
		publicUrl: string;
		uri: null;
		type: string;
		aliases: string[];
	};
}
```

Les champs de `Meta` ne sont actuellement pas utilisés ou vérifiés lors d’un import à l’exception de `emojis`.

Pour chaque `Emoji` :
- `downloaded` : doit toujours être `true`, à défaut l’émoticône ne sera pas importée ;
- `fileName` : nom du fichier au sein de l’archive ;
- `emoji` : les données associées comme stockées dans la base de données. Généralement les champs ne sont pas vérifiés.
Seul les suivants sont utilisés :
  - `name` : nom de l’émoticône (ex : `blobfox` s’il faut taper `:blobfox:` pour utiliser l’émoticône) ;
    Si une émoticône utilisait ce nom, elle ** sera écrasée** !
  - `category` : catégorie de l’émoticône ;
  - `aliases` : liste de mots pouvant être utilisés comme alias. Référencés dans l’interface administration comme « étiquettes ».

## Modifier et supprimer

Les propriétés d’une émoticône peuvent être modifiése en la sélectionnant dans la liste locale.
Un menu permet de la modifier ou supprimer.

::: warning
En supprimant une émoticône personnalisées, les anciennes notes seront modifiées.
:::

À noter que les émoticônes distantes ne peuvent être modifiées ou supprimées.

Chaque émoticône peut avoir un nom, une catégorie, et plusieurs étiquettes.
La catégorie est utilisée pour la structure de l’assistant de sélection.
Les étiquettes sont utilisées comme noms altenatifs permettant de trouver une émoticône.

Une fois les modifications faites, validez les en cliquant sur le symbole dans le coin supérieur droit.

### Modification en masse

Les émoticônes peuvent être modifiées en masse en cochant la case sous le champ de recherche.
Cela permet de sélectionner les émoticônes plutôt que d’ouvrir la fenêtre de modifications.

Les options de modifications seront disponibles via un bouton à proximité de la case à cocher.
Pour revenir au comportement normal, décocher la case à nouveau.
