---
description: 'Strumieniowe API podaje informacje w czasie rzeczywistym (np: nowe posty na ośi czasu, reakcje, obserwujący itp.) i wiele innych'
---

# Api strumieniowe

::: tip
Na początek powinieneś przeczytać [dokumentację API Misskey](../index.md).
:::

Strumieniowe API podaje informacje w czasie rzeczywistym (np: nowe posty na ośi czasu, reakcje, obserwujący itp.) i wiele innych.

## Łączenie

Aby używać API strumieniowego, musisz połączyć się z serwerem Misskey za pomocą **websocket**.

O to przykładowy URL Websocketu:

```:no-line-numbers
wss://{host}/streaming?i={token}
```

gdzie:

- `{host}` instancja z którą chcesz się połączyć.
- `{token}` token dostępowy użytkownika.

::: tip
Możesz też się połączyć bez tokenu dostępu ale nie będziesz miał dostępu do wszystkich danych.
:::

Kiedy połączyłeś się, możesz subskrybować do postów opisanych poniżej, ale  nadal nie możesz odtrzymywać nowych postów na ośi czasu

Aby odtrzymywać takie zdarzenia musisz połączyć się z **kanałem** jak opisano poniżej.

**Wszystkie dane powinny być w JSONie.**

## Kanał

API Strumieniowe Miskey używa kanałów. Jest to mechanizm do oddzielania informacji do wysłania i odbioru.
Dołączając na kanał na strumieniu, będziesz mógł otrzymywać różne rodzaje informacji i wysyłać informacje.

::: tip
Możesz dołączyć do wielu kanałów na jednym strumieniu
:::

Ta sekcja opisuje jak używać kanałów. Aby sobaczyć jakie kanały są dostępne, zapoznaj się z [listą kanałów](./channel/index.md).

### Dołączanie do kanału

Dołączając do kanału, wysyłasz strumieniem podane dane w JSONie:

```js
{
 type: 'connect',
 body: {
  channel: 'xxxxxxxx',
  id: 'foobar',
  params: {
   ...
  }
 }
}
```

gdzie

- `channel` to nazwa kanału z którym chcesz się połączyć. Rodzaje kanałów są opisane niżej w tym dokumencje.
- `id` jest to arbitralne ID do wykonywania interakcji z kanałem. Jest ono wymagane do identyfikowania, z którego kanału jest wiadomość, ponieważ strumień zawiera wiele kanałów. To ID może być czymś w stylu UUID albo losową liczbą.
- `params`  to parametry wymagane kiedy dołącza się na kanał. Różne kanały wymagają innych parametrów przy połączeniu. Kiedy kanał nie wymaga parametrów, można tą wartość zignorować.

::: tip
ID nie jest co kanał, a co połączenie z kanałem, ponieważ kanał może być potrzebny kilka razy ale z innym parametrem.
:::

### Zdobywanie wiadomości z kanałów

Na przykłąd, oś czasu kanału wyśle wiadomość kiedy jest nowy post. Zdobywając wiadomość, możesz wiedzieć w czasie rzeczywistym że nowy post został opublikowany na twojej ośi casu.

Kiedy kanał wysyła wiadomość, podany JSON jest wysłany:

```js
{
 type: 'channel',
 body: {
  id: 'foobar',
  type: 'something',
  body: {
   some: 'thing'
  }
 }
}
```

gdzie

- `id` to ID ustawionie kiedy łączono z kanałem jak podano wyżej. Pozwala wiedzieć z którego kanału jest wiadomość
- `type` to jest rodzaj wiadomości. Rodzaje wiadomości zależą od tgo co jest wysyłane na kanał.
- `body` zawiera zawartość wiadomości. Zawartość zależy od kanału.

### Wysyłanie wiadomości na kanał

Na niektórych kanałach jest możliwość wysyłąnia wiadomości i wykonywania innych operacji poza zdobywaniem wiadomości.

Aby wysłać wiadomość, wyślij podane dane w JSONie na strumień:

```js
{
 type: 'channel',
 body: {
  id: 'foobar',
  type: 'something',
  body: {
   some: 'thing'
  }
 }
}
```

gdzie:

- `id` to ID ustawionie kiedy łączono z kanałem jak podano wyżej. Pozwala wiedzieć dla którego kanału jest to wiadomość.
- `type` to jest rodzaj wiadomości. Rodzaje wiadomości zależą od kanału.
- `body` zawiera zawartość wiadomości. Zawartość zależy od kanału.

### Rozłączanie się z kanału

Aby się rozłączyć z kanału (instantiation), wyślij podane dane JSONem na strumień:

```js
{
 type: 'disconnect',
 body: {
  id: 'foobar'
 }
}
```

where

- `id` to ID kanału do którego się łączyłeś i z którego chcesz się rozłączyć.

## Wyłapywanie postów

Misskey udostępnia mechanizm zwany przechwytywaniem postów. Jest to zdolność do otrzymania strumienia zdarzeń dla danego wpisu.

Na przykład, powiedzmy, że chwytasz oś czasu i wyświetlasz ją swoim użytkownikom. Powiedzmy, że ktoś reaguje na jeden z postów na osi czasu.
Ponieważ jednak klient nie ma sposobu, aby wiedzieć, że notka została zareagowana, nie jest możliwe odzwierciedlenie reakcji na osi czasu w czasie rzeczywistym.

Aby rozwiązać ten problem, Misskey zapewnia mechanizm przechwytywania wpisów. Gdy przechwycisz notkę, otrzymasz zdarzenia związane z tą notką i możesz wyświetlić reakcje na nią w czasie rzeczywistym.

W kolejnych rozdziałach opisano, jak korzystać z funkcji przechwytywania notek. Aby zobaczyć, jakie zdarzenia przechwytywania są dostępne, zobacz listę [Capture Events List](./note-capture-events.md).

### Wyłapanie posta

Aby wyłapać post wyślij JSON na strumień:

```js
{
 type: 'subNote',
 body: {
  id: 'xxxxxxxxxxxxxxxx'
 }
}
```

gdzie

- `id` to ID posta do wyłapania.

Kiedy wysyłasz wiadomość, prosisz Misskey o przechwycenie notki, a następnie zdarzenia związane z tą notką będą przesyłane do ciebie.

Na przykład jak odtrzymasz reakcje to odtrzymasz taką odpowiedź JSONem

```js
{
 type: 'noteUpdated',
 body: {
  id: 'xxxxxxxxxxxxxxxx',
  type: 'reacted',
  body: {
   reaction: 'like',
   userId: 'yyyyyyyyyyyyyyyy'
  }
 }
}
```

gdzie

- `body.id` to ID posta które spowodowało zdarzenie.
- `body.type` typ zdarzenia.
- `body.body` informacje o zdarzeniu.

### Usuwanie przechwytywania posta

Jeśli nie chcesz już otrzymywać zdarzeń związanych z postem, np. gdy nie pojawia się ona już na ekranie, możesz usunąć żądanie przechwycenia.

Wyślij następujące dane JSON:
``js
{
 type: 'unsubNote',
 body: {
  id: 'xxxxxxxxxxxxxx'
 }
}

```

gdzie
- `id` to ID notatki, którą chcesz odhaczyć.

Po wysłaniu tej wiadomości nie będą już wysyłane żadne zdarzenia związane z tą notką.
