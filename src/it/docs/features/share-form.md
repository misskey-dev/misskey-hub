# Modulo di condivisione

Quando apri la pagina `/share` sulla tua istanza Misskey, apri un modulo per la condivisione via web. Utile, ad esempio, se vuoi che le persone iscritte possano condividere contenuti da un sito esterno.

Puoi specificare alcune opzioni sui contenuti, tramite la configurazione dei parametri della URL.

## Parametri della URL

::: tip
Tutti i parametri sono facoltativi
:::

| chiave  | valore                                                          |
| ------- | --------------------------------------------------------------- |
| `title` | Il titolo, verrà inserito prima del testo, tra parentesi quadre |
| `text`  | testo della Nota                                                |
| `url`   | URL, inserito al termine della Nota                             |

### Informazioni sulla risposta

Puoi decidere che la Nota venga composta come risposta ad una Nota specifica, indicando uno dei seguenti parametri

| chiave     | valore                                                         |
| ---------- | -------------------------------------------------------------- |
| `replyId`  | ID della Nota locale a cui vuoi rispondere                     |
| `replyUri` | URL a cui rispondere (specifica l'indirizzo di un post remoto) |

### Informazioni sul Rinota

Puoi decidere che la Nota venga composta come un Rinota di una Nota specifica, indicando uno dei seguenti parametri

| chiave      | valore                                                    |
| ----------- | --------------------------------------------------------- |
| `renoteId`  | ID della Nota locale che vuoi Rinotare                    |
| `renoteUri` | URL da Rinotare (specifica l'indirizzo di un post remoto) |

### Ambito di pubblicazione

Queste opzioni ti permettono di scegliere in che ambito pubblicare

| chiave           | valore                                                     |
| ---------------- | ---------------------------------------------------------- |
| `visibility`     | deve essere `public`, `home`, `followers` o `specified`    |
| `localOnly`      | 0 (Falso) oppure 1 (Vero)                                  |
| `visibleUserIds` | target user IDs                                            |
| `visibleAccts`   | target user [acct](../glossary.md#acct)s (comma separated) |

::: warning
Se `visibility` viene impostato a `specified`, allora occorre inviare anche uno dei parametri `visibleUserIds` o `visibleAccts`.
:::

### Allegati

Puoi specificare allegati caricati nel Drive.

| chiave    | valore                                        |
| --------- | --------------------------------------------- |
| `fileIds` | ID dei file da allegare (separati da virgole) |
