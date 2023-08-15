# Motyw

Możesz zmienić motyw kolorystyczny Misskey zgodnie z własnym gustem.

## Ustawienia motywów

Ustawienia > Motywy

## Tworzenie motywów

Motywy są pisane za pomocą JSON5.
Motywy mają obiekty tak jak ten przykład:

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

* `id` ... ID Motywu. UUID jest rekomendowane.
* `name` ... Nazwa motywu
* `author` ... Autor motywu
* `desc` ... Opis motywu (Object)
* `base` ... tryb jasny czy ciemny?
  * Użyj `light` dla jasnego i `dark` dla ciemnego trybu.
  * Motyw używa bazy wyspecyfikowanej.
* `props` ... Definicje stylu motywu. Wytłumacznone w następujących punktach.

### Definicje stylów motywu

Definiuj style motywów z `props`.
Wartości to nazwy wartości CSS i one ustawiają materiały.The
Poza tym `props` pobiera dane z bazowego motywu.
Bazowy motyw to [_light.json5] jeśli `base` motywu jest `light` i [_dark.json5] jeśli `dark`.
Jeśli nie ma wartości `props` nazwanej `panel` w motywie, to będzie użyta wartość `panel` z bazowego motywu.

[_light.json5]: https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_light.json5
[_dark.json5]:  https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_dark.json5

#### Składnia wartości

* Kolory w formacie `#rrggbb`
  * Na przykład: `#00ff00`
* Kolory w formacie  `rgb(r, g, b)`
  * Na przykład: `rgb(0, 255, 0)`
* kolory w wartościach alfa/przezroczystość w formacie `rgb(r, g, b, a)`
  * przykład: `rgba(0, 255, 0, 0.5)`
* Inne wartości
  * `@{key name}` Nazwa wartości z innego klucza. Zamień `{key name}` z nazwą klucza do którego chcesz nawiązać.
  * example: `@panel`
* Zmienne:
  * `${constant name}` nawiązuje do stałej. Zamień `{constant name}` z nawą stałej do której chcesz nawiązać.
  * przykład: `$main`
* Funkcje:
  * `:{nazwa funkcji}<{argumenty}}<{kod}`

#### Stałe

Stałe są przydatne kiedy masz wartości których nie chcesz wyświetlać jako zmienną CSS, ale chcesz użyć ich jako wartości dla innych zmiennych CSS.

#### Funkcje

WIP (TODO)
