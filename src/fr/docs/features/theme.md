# Thème

Vous pouvez changer l’apparence et le comportement du client Misskey en appliquant un thème.

## Options de thème

Paramètres > Themes

## Créer un thème

Le code du thème utilise des fichiers JSONs.
Chaque objet du thème sera de format :

``` js
{
	id: '17587283-dd92-4a2c-a22c-be0637c9e22a',

	name: 'Danboard',
	author: 'syuilo',

	base: 'light',

	props: {
		accent: 'rgb(218, 141, 49)',
		bg: 'rgb(218, 212, 190)',
		fg: 'rgb(115, 108, 92)',
		panel: 'rgb(236, 232, 220)',
		renote: 'rgb(100, 152, 106)',
		link: 'rgb(100, 152, 106)',
		mention: '@accent',
		hashtag: 'rgb(100, 152, 106)',
		header: 'rgba(239, 227, 213, 0.75)',
		navBg: 'rgb(216, 206, 182)',
		inputBorder: 'rgba(0, 0, 0, 0.1)',
	},
}

```

* `id` ... ID unique du thème, UUID recommandé ;
* `name` ... Nom du thème ;
* `author` ... Créateur·ice du thème ;
* `desc` ... Description du thème (Objet) ;
* `base` ... Thème clair ou sombre ;
	* Utilisez `light` pour un thème clair ou `dark` pour un thème sombre ;
	* Le thème hérite du thème de base décrit ici.
* `props` ... Définition du style de thème. Expliqué ci-dessous.

### Définition du style de thème

Défini le style de thème au sein des `props`.
Les clés sont les noms des variables CSS, et les valeurs indiquent les contenus.
L’objet `props` hérite du thème de base.
Le thème de base est [_light.json5] si la `base` du thème est `light` et [_dark.json5] pour `dark`.
À défaut de clé `props` nommée `panel` dans ce thème, celui du thème de base sera utilisé.

[_light.json5] : https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_light.json5
[_dark.json5] :  https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_dark.json5

#### Syntaxe des valeurs

* Couleurs héxadécimales ;
	* exemple : `#00ff00`
* Couleurs au format `rgb(r, g, b)` ;
	* exemple : `rgb(0, 255, 0)`
* Couleurs contenant une valeur de transparence/alpha au format `rgb(r, g, b, a)` ;
	* exemple : `rgba(0, 255, 0, 0.5)`
* Références à la valeur d’autres clés ;
	* `@{key name}` est une référence à la valeur d’une autre clé. Remplacez `{key name}` par le nom d’une de vos clé en référence.
	* exemple : `@panel`
* Référence constante ;
	* `${constant name}` est une référence vers une constante. Remplacez `{constant name` par le nom d’une constante choisie en référence.
	* exemple : `$main`
* Fonctions ;
	* `:{関数名}<{引数}<{色}`

#### Constantes

Les constantes permettent de définir des valeurs utiles pour d’autres variables CSS.

#### Fonctions

WIP
