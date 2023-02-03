---
description: '
Misskey espone una API che puoi usare per sviluppare client mobile, servizi web connessi a Misskey, bot, altre applicazioni.'
---

# Le API di Misskey

Misskey espone una API che puoi usare per sviluppare client mobile, servizi web connessi a Misskey, bot e altre applicazioni.

Abbiamo anche una **API di streaming** per ccreare applicazioni con caratteristiche push, in realtime.

::: tip
Usando la SDK ufficiale di Misskey, o librerie di terze parti, puoi fruire della API in modo più conveniente. Per esempio semplificando alcuni dei passi descritti in questa pagina.
:::

Tanto per cominciare, ti occorre ottenere il **token di accesso** associato all'account che intendi usare per fruire delle API.

Questa pagina ti spiega passo passo come ottenerlo e le basi per fruire delle API.

## Ottenere un token di accesso

Le API, in generale, richiedono l'accesso autenticato da un token. Si tratta di un set di credenziali associate ad un profilo, che lo identificano e controllano quali operazioni sia autorizzato a svolgere quello specifico token.

::: tip
Tra il profilo e i token c'è la relazione uno-a-molti, significa che per ogni profilo si possono creare più token (anche con diversi livelli di privilegi)
:::

Ci sono due modi per ottenere il token:

- [Richiederlo per se stessi](#richiedere-un-token-di-accesso-manualmente)
- [Richiederlo per un altro profilo che userà l'applicazione](#richiedere-l-emissione-di-un-token-di-accesso)

### Richiedere un token di accesso manualmente

Per ottenere un token per il proprio profilo, è sufficiente aprire il proprio profilo in Misskey e, nelle impostazioni, scegliere il menu API. Da lì, seguire le indicazioni.

::: danger
Fai attenzione! Non condividere il token con nessuno, deve rimanere segreto, altrimenti qualcuno potrebbe ottenere l'accesso del profilo.
:::

### Richiedere l'emissione di un token di accesso

Per richiedere il token di accesso per un altro profile, occorre inizializzare la richiesta come indicato.

::: tip

以下に説明する方法は、アプリを作成せずインスタントにアクセストークンを発行する、MiAuthと呼ばれるものです。

[アプリ作成方式でのアクセストークン取得方法もあります（旧来型）。](./app)
:::

#### Passo 1

Genera un UUID (identificativo unico dell'utente). Da ora in poi lo chiameremo _ID Sessione_.

::: danger
L'**ID Sessione** dovrebbe essere generato ogni volta e mai riutilizzato.
:::

#### Passo 2

Nel browser della persona utilizzatrice dovrebbe comparire il modulo di autenticazione. Il modulo di autenticazione può essere aperto usando una URL simile a questa:

```:no-line-numbers
https://{host}/miauth/{session}
```

- `{host}` è il nome dell'istanza (di solito lo ha digitato la persona stessa)
- `{session}` è il valore **ID Sessione**

Si possono anche aggiungere alcune opzioni, come parametri GET nella URL:

| Nome         | Descrizione                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `name`       | Nome dell'applicazione                                                                                                         |
| `icon`       | Indirizzo URL dell'icona (immagine)                                                                                            |
| `callback`   | Indirizzo URL a cui reindirizzare dopo l'autenticazione (con **ID Sessione** aggiunto come parametro GET denominato `session`) |
| `permission` | I permessi richiesti dall'applicazione. Permessi multipli vanno suddivisi con la virgola `,`                                   |

::: tip Esempio concreto

```:no-line-numbers
https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&permisson=write:notes,write:following,read:drive
```

:::

#### Passo 3

Dopo che la persona ha autorizzato l'accesso alla tua applicazione, una richiesta HTTP, di tipo `POST` alla seguente risorsa restituirà il **token di accesso** come risposta.

```:no-line-numbers
https://{host}/api/miauth/{session}/check
```

- `{host}` è il nome dell'istanza della persona utilizzatrice (di solito lo ha digitato egli stessa)
- `{session}` è il valore **ID Sessione**

Le proprietà incluse nella risposta sono le seguenti:

| Parametro | Descrizione              |
| --------- | ------------------------ |
| `token`   | token di accesso         |
| `user`    | informazioni sul profilo |

## Fruire delle API

Una volta che hai ottenuto il **token di accesso** puoi usare le API inviando richieste HTTP alle varie risorse.


::: tip

- HTTP APIはすべてPOSTで、リクエスト/レスポンスともにJSON形式です（drive/files/createを除く）。
- 要求ヘッダーに`Content-Type: application/json`を指定します。
- アクセストークンは、`i`というパラメータ名でリクエストボディJSONに含めます。

:::

アクセストークン付きのボディの例（metaの場合）:

```json
{
    "i": "HogEFugA1341",
    "detail": false
}
```

Il **token di accesso** deve essere incluso nel corpo nella richiesta, in un parametro chiamato `i`. Per avere maggiori informazioni sulle API, vedere il catalogo.

In aggiunta alle API HTTP, Misskey mette a disposizione anche le [Streaming API](./streaming/).

::: warning
Le API di Misskey non sono RESTful.
:::

::: tip
La tua istanza Misskey mette a disposizione il **Catalogo delle API** e la documentazione, al seguente indirizzo: `/api-doc`
:::
