# I temi

Servono per cambiare l'aspetto del client Web di Misskey.

## Impostazioni tema

Per configurarli occorre visitare la pagina «Impostazioni» alla voce «Tema».

## Creare un tema

Il tema è un oggetto JSON5 che assomiglia a questo:

```js
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

## Parametri

- `id`: codice identificativo univoco, possibilmente un UUID
- `name`: nome
- `author`: autore
- `desc`: descrizione (facoltativa)
- `base`: riferimento sul tema di partenza
  - `light`: se estendi un tema chiaro; `dark`: se ne estendi uno scuro
  - il tuo tema erediterà le caratteristiche di uno dei due.
- `props`: proprietà del tema, spiegate di seguito

### Definizione degli stili

`props`下にはテーマのスタイルを定義します。
キーが CSS の変数名になり、バリューで中身を指定します。
なお、この`props`オブジェクトはベーステーマから継承されます。
ベーステーマは、このテーマの`base`が`light`なら[_light.json5]で、`dark`なら[_dark.json5]です。
つまり、このテーマ内の`props`に`panel`というキーが無くても、そこにはベーステーマの`panel`があると見なされます。

[_light.json5]: https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_light.json5
[_dark.json5]:  https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_dark.json5

#### Sintassi per i valori

- Colore esadecimale
  - es: `#00ff00`
- Colore `rgb(r, g, b)`
  - es: `rgb(0, 255, 0)`
- Colore con trasparenza alpha `rgb(r, g, b, a)`
  - es: `rgba(0, 255, 0, 0.5)`
- Riferimenti ad altre variabili
  - Scrivendo `@{variabile}` si farà riferimento al valore di quella variabile.
  - es: `@panel`
- Riferimenti alle costanti (vedi sotto)
  - Scrivendo `${costante}` si farà riferimento al valore di quelal costante.
  - es: `$main`
- Riferimenti alle funzioni (vedi sotto)
  - `:{funzione}<{argomento}<{colore}`

#### Costanti

Le costanti sono utili quando si ha un valore che non si desidera restituire come variabile CSS, ma si desidera riutilizzarlo come valore di un'altra variabile CSS.

Se il nome della chiave inizia con `$`, la chiave non verrà esportata come variabile CSS.

#### Funzioni

TODO
