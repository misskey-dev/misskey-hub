---
description: Opisuje, jak uzyskać token dostępu przed wprowadzeniem MiAuth.
---

Uwaga - ten plik został przetłumaczony z Japońskiego tłumaczem internetowym. Może zawierać błędy.

# Jak uzyskać token dostępu przy użyciu metody tworzenia aplikacji

W tej sekcji opisano starą metodę uzyskiwania tokena dostępu przed wprowadzeniem MiAuth (12.27.0).  
Serwery z wersjami mniejszymi niż 12.27.0 muszą używać tej starej metody.

## 1. tworzenie aplikacji

Wyślij informacje do punktu końcowego [`app/create`](endpoints/app/create.html), aby uzyskać `appSecret`.

`json.
{
    // App Name.
    "name": "test",.
    // App description.
    "description": "moja aplikacja testowa",.
    // Uprawnienia dla aplikacji.
    "permission": ["write:notes"]
}

```

W tym momencie możesz zawrzeć w `callbackUrl` wybrany przez siebie adres URL, tak aby po zakończeniu kolejnej operacji związanej z uprawnieniami nastąpiło tam wywołanie zwrotne, zawierające `token` w ciągu zapytania.

## 2. Uwierzytelnienie użytkownika.
POST an `appSecret` do punktu końcowego [`auth/session/generate`](endpoints/auth/session/generate).

`json.
{
    "appSecret": "fAb12cD34Ef56gH78Ij16kL32Mn64oPf"
}
```

Zwraca on `token` (tutaj wstępnie `798b9f6e-248d-43a7-a919-fabc664027f1`) oraz `url`, więc najpierw wejdź na ten url za pomocą przeglądarki internetowej i wybierz 'allow access'.

## 3. query the accessToken

Gdy już jesteś pewien, że ## 2 jest zrobiony, POSTuj `appSecret` i `token` z wcześniejszego punktu końcowego [`auth/session/userkey`](endpoints/auth/session/userkey).

`json.
{
  "appSecret": "fAb12cD34Ef56gH78Ij16kL32Mn64oPf",.
  "token": "798b9f6e-248d-43a7-a919-fabc664027f1"
}

```

Ciąg znaków, który można tu uzyskać nazywa się `accessToken`. `accessToken` może być pobrany tylko raz.

## 4. generowanie `i`.
`i` można wygenerować w Node.js za pomocą poniższego kodu, który jest 64-cyfrową liczbą szesnastkową, w przeciwieństwie do tej, którą otrzymujemy na ekranie konfiguracyjnym.

`javascript
const crypto = require("crypto")
const i = crypto.createHash("sha256")
    .update(accessToken + appSecret, "utf8")
    .digest("hex")
console.log(i).
```

## 5. faktycznie przetestuj to

````javascript
fetch("https://misskey.io/api/notes/create", {
    method: 'POST', {
    body: JSON.stringify({
        i: "/* Enter i here */",.
        text: "Hello Misskey API World with My Application!"
    }),
    headers: {
        'Content-Type': 'application/json',.
    },
 credentials: 'omit', }
});
```
