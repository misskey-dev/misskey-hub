# Formularz udostępniania

Kiedy otworzysz `/share` w Misskey w Przeglądarce dostaniesz formularz udostepniania. Ten formularz jest przydatny jeśli chcesz aby użytkownicy udostępniali zawartość swojej strony z zewnątrz.

Możesz też wyspecyfikować opcje w adresie, w tym udostępniana zawartość, jako parametry.

## Parametry

::: tip
Wszystkie parametry są **opcjonalne**.
:::

| Parametr | Opis |
| ---- | ---- |
| `title` | tytuł umieszczony przed treścią materiału |
| `text` | treść materiału |
| `url` | Adres URL umieszczony po materiale |

### Informacje odpowiedzi

Możesz utworzyć wpis który jest odpowiedzią na inny wpis przy użyciu tych parametrów.

| Paramentr | Opis |
| ---- | ---- |
| `replyId` | ID wpisu na który odpowiadasz |
| `replyUri` | URL do wpisu na który odpowiadasz (określa inny serwer) |

### Informacje o repostowaniu

Możesz utworzyć wpis który jest wpisem inne osoby przy użyciu tych parametrów.

| Parametr | Opis |
| ---- | ---- |
| `renoteId` | ID wpisu do repostowania |
| `renoteUri` | URL wpisu do repostowania (określa serwer z którego jest wpis) |

### Widoczność

Podane opcje pozwalają ustalić widoczność.

| Parametr | Opis |
| ---- | ---- |
| `visibility` |  widoczność albo -  `public`, `home`, `followers`, `specified` |
| `localOnly` | 0(nie) albo 1(tak) |
| `visibleUserIds` | docelowe ID użytkowników |
| `visibleAccts` | docelowy użytkownik [acct](../glossary.md#acct)s (podzielone przecinkiem) |

::: uwaga
jeżeli `visibility`(widoczność) jest `specified`(ustalona) to `visibleUserIds` i `visibleAccts` muszą też być ustawione.
:::

### Załączniki

Możesz załączyć załączniki do swojego wpisu.

| Parametr | Opis |
| ---- | ---- |
| `fileIds` | ID plików załączonych (podzielone przecinkami) |
