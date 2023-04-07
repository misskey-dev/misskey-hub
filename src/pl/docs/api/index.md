---
description: 'Misskey udostępnia API które możesz wykorzystać do tworzenia klientów do Misskey, usług internetowych połączonych z Misskey, botów, itp. ("Aplikacje").'
---

# Misskey API

Misskey udostępnia API które możesz wykorzystać do tworzenia klientów do Misskey, usług internetowych połączonych z Misskey, botów, itp. ("Aplikacje").Posiadamy również API strumieniowe, dzięki czemu można tworzyć aplikacje z możliwością pracy w czasie rzeczywistym.

::: tip
Używając oficjalnego SDK Misskey lub bibliotek nieoficjalnych można wygodniej korzystać z API, na przykład upraszczając niektóre z kroków opisanych w tym dokumencie.
Zobacz [tutaj](TODO) więcej informacji na temat bibliotek.
:::

Aby zacząć korzystać z API, musisz zdobć **token dostępu** powiązany z kontem którego chcesz używać z API.
Ten dokument poprowadzi Cię przez proces zdobywania tokenu dostępu i pokaże jak korzystać z API.

## Zdobywanie tokenu dostępu

Zazwyczaj API wymaga Tokenu Dostępu żeby wykonać żądanie.
Token dostępu jest to zestaw danych powiązanych z użytkownikem, które identyfikuje który użytkownik korzsta z API i kontroluje jakie dostęp do operacji każdego tokenu dostępu.

::: tip
Może być wiele relacji pomiędzy użytkownikiem a tokenem dostępu powiązanym z użytkownikiem i wiele tokenów dostępu może być wygenerowane dla danego użytkownika.
:::

Możesz łatwo [zdobyć token dostępu dla siebie](#Manually-issue-an-access-token), lub możesz [zdobyć token dostępu dla użytkownika, który będzie korzystał z aplikacji](#Request-an-access-token-to-be-issued).

### Manualnie stwórz token dostępu

Możesz manualnie stworzyć swój token dostępu w Przeglądarkowym Interfejsie Misskey w 'Ustawienia > API'.

::: warning
NIKOMU NIE UDOŚTĘPNIAJ SWOJEGO TOKENU DOSTĘPU
:::

### Zażadaj utworzenia tokenu

Any uzyskać token dostępu dla użytkownika aplikacji (lub po prostu "użytkownika"), możesz zarządać by został stworzony w następujący sposób.

::: tip
Metoda tutaj opisana nazywa się MiAuth i ona tworzy token dostępu bez tworzenia aplikacji.

Nadal możesz [stworzyć aplikację by uzyskać token dostępu](./app.md).
:::

#### Krok 1

Wygeneruj UUID. Od teraz będziemy na niego mówić **ID Sesji**.

::: warning
ID Sesji powinien być generowany za każdym razem i nie powinien być ponownie używany.
:::

#### Krok 2

Formularz uwierzytelniania aplikacji powinien zostac wyświetlony w przeglądarce użytkownika. Formularz uwierzytelniania może zostać otwarty za pomocą URL podobnego do tego:

```:no-line-numbers
https://{host}/miauth/{session}
```

gdzie:

- `{host}` to instancja użytkownika (zazwczaj manualnie wpisana przez niego).
- `{session}` to jest ID Sesji.

Jest też kilka parametrów żądań w URL:

| Nazwa | Opis |
| ---- | ---- |
| `name` | Nazwa Aplikacji |
| `icon` | Ikona Aplikacji。 |
| `callback` | URL do którego użytkowink zostanie przekierowany po uwierzytelnieniu z ID Sesji dodanym by przekierować z parametrem żądania `session`. |
| `permission` | Zgody których aplikacjia wymaga. <br>Lista zezwoleń które mogą być żądane, podzelona`,`. Lista zezwoleń jest dostępna [tutaj](TODO). |

::: tip

Przykład:

```:no-line-numbers
https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&permisson=write:notes,write:following,read:drive
```

:::

#### Krok 3

Po tym jak użytkownik odtrzymał dostęp do aplikacji, żądanie POST do URL formularza zwróci wynik w JSON zawierający token dostępowy jako odpowiedź.

```:no-line-numbers
https://{host}/api/miauth/{session}/check
```

gdzie:

- `{host}` to instancja użytkownika (zazwczaj manualnie wpisana przez niego).
- `{session}` to jest ID Sesji.- `{session}` is the session ID.

Właściwości zawarte w odpowiedzi:

| Nazwa | Opis |
| ---- | ---- |
| `token` | teoken dostępu użytkownika |
| `user` | informacje na temat użytkownika |

## Używanie API

Kiedy zdobędziesz token dostępu API możesz skorzystać z API tworząc rządania do różnych miejsc.

::: tip

- Wszytkie API HTTP są żądaniami POST, i zarówno żądanie jak i odpowiedź są w formacie JSON (wyjątkiem stanowią dysk/pliki/utwórz (drive/files/create)).
- Określ `Content-Type: application/json` w nagłówku żądania.
- Token dostępu jest zawarty w JSONie żądania z parametrem `i`.

:::

Przykład JSONa z tokenem dostępu:

```json
{
    "i": "HogEFugA1341",
    "detail": false
}
```

Token dostępu jest zawarty w JSONie żądania z parametrem `i`.

Po więcej informacji na temat API zobacz [API Reference](./endpoints.html).

::: info
Misskey nie używa API typu REST.
:::

Oprócz interfejsu API HTTP, Misskey udostępnia również interfejs API strumieniowania. Więcej informacji o API strumieniowym można znaleźć [tutaj](./streaming/).

::: tip
Twoja instancja Misskey również zawiera dokumentacji api w `/api-doc`.
:::
