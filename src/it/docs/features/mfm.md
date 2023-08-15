---
description: "MFM è uno speciale linguaggio di marcatura del testo che può essere usato in varie zone di Misskey."
---

# MFM, Misskey Flavoured Markdown

Uno speciale linguaggio di marcatura del testo che può essere usato in varie zone di Misskey.

::: tip
Alcune parti sono compatibili con MarkDown
:::

## Elenco delle zone in cui è accettato

- Testo della Nota
- Testo del Content Warning
- Nome del profilo
- Biografia del profilo

## Sintassi

### Menzioni

Puoi nominare utenti locali o remoti, usando il carattere `@` (at oppure chiocciola)

```:no-line-numbers
@ai
```

```:no-line-numbers
@ai@misskey.io
```

### Hashtag

Puoi taggare le parole chiave usando `#` il cancelletto

```:no-line-numbers
#misskey
```

### Emoji personalizzati

Puoi utilizzarli includendo il nome tra il simbolo `:` due punti.

```:no-line-numbers
:misskey:
```

### Link

Puoi indicare link senza mostrare l'url completa.

```:no-line-numbers
[Sito Example](https://example.com)
```

### Grassetto

Il testo racchiuso da `**` due asterischi, diventerà grassetto, o bold.

```:no-line-numbers
**Grassetto**
```

---

::: tip
Puoi trovare più esempi nella pagina **Bigliettino MFM** che trovi presso la tua istanza, all'indirizzo `/mfm-cheat-sheet`
:::

## Informazioni per sviluppatori

L'implementazione del parser MFM è una libreria disponibile sotto licenza opensource, per facilitare l'integrazione nel tuo client personalizzato.

- Implementazione JavaScript del parser: [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js)
