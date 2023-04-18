---
description: 'MFM jest to dedykowany język znaczników do używania z Misskey.'
---

# MFM

MFM(Misskey Flavoured Markdown) jest to dedykowany język znaczników do używania z Misskey.

::: tip
Część składni jest kompatybilna z Markdown
:::

## Przykłady gdzie można wykorzystać MFM

- treść notki
- ostrzeżenia zawartości
- nazwy użytkownika
- profilu użytkownika

## Składnia

### Wspominanie użytkowników

::: tip
Po więcej informacji zobacz [tutaj](./mention.md).
:::

```:no-line-numbers
@alice
```

```:no-line-numbers
@alice@example.com
```

### Hasztagi

::: tip
Po więcej informacji zobacz [tutaj](./hashtag).
:::

```:no-line-numbers
#misskey
```

### Personalizowane Emoji

::: tip
Po więcej informacji zobacz [tutaj](./custom-emoji).
:::

```:no-line-numbers
:misskey:
```

### Linki

```:no-line-numbers
[example link](https://example.com)
```

### Pogrubienie

```:no-line-numbers
**Bold**
```

---

::: tip
Więcej składni można zobaczyć w ***Ściądze MFM** dostępnej w przeglądarkowym Menu Misskey pod `/mfm-cheat-sheet` twojej instancji.
:::

## Informacje dla deweloperów

Implementacja parsera MFM jest dostępna jako biblioteka, dzięki czemu łatwiej jest osadzić MFM w swoich klientach.

- [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js) - implementacja parsera w JavaScript
