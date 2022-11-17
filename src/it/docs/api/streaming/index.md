---
description: "La Streaming API mette a disposizione informazioni in real-time (es: nuovi post nella timeline, reazioni, followers ecc...) oltre ad altre attività."
---

# Streaming API

::: tip
Prima di continuare, dovresti aver già letto [Le API di Misskey](../index.md).
:::

La Streaming API mette a disposizione informazioni in real-time (es: nuovi post nella timeline, reazioni, followers ecc...) oltre ad altre attività.

## Conttettersi al flusso.

Per usare la Streaming API, occorre connettersi al server tramite **websocket**.

La URL di tipo websoket è simile a questa:

```:no-line-numbers
wss://{host}/streaming?i={token}
```

- `{host}` È il dominio dell'istanza a cui connettersi
- `{token}` È il token di accesso ottenuto in precedenza

::: tip
Puoi anche connetterti senza il token di accesso, ma in questo caso otterrai informazioni limitate e svolgere attività limitate.
:::

Dopo aver aperto la connessione al flusso, potrai iscriverti ai post come descritto di seguito, ma in questo momento ancora no. Se intendi ricevere i post dalla tua timeline devi entrare in un **canale** del flusso, come descritto di seguito.

**Tutti i dati dovrebbero essere codificati come JSON**

## Canale

La Streaming API di Misskey ha il concetto dei canali. Con questo stratagemma si possono separare le informazioni da spedire e ricevere.
Entrando in un canale del flusso potrai ricevere vari tipi di informazione e spedirne di altre.

::: tip
Puoi entrare in più canali contemporaneamente con una unica connessione al flusso.
:::

Di seguito descriviamo come usare i canali. Per sapere quali siano disponibili, consulta la [Lista dei canali](./channel/index.md).

### Entrare in un canale

Per entrare in un canale del flusso, spedisci i seguenti dati in formato JSON:

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

- `channel` è il nome del canale in cui vuoi entrare. I tipi di canale verranno descritti dopo.
- `id` è un identificativo arbitrario pe interagire col canale. Necessario per indentificare da quale canale proviene il messaggio, perché il flusso contiene più canali. Potrebbe essere un UUID oppure un numero casuale.
- `params` sono i parametri richiesti per entrare nel canale. Ogni canale necessita dei suoi paremtri specifici. Quando entri in un canale che non necessita di parametri, questo valore può essere ommesso (opzionale)

::: tip
L' ID non è per canale ma _per ingresso al canale_, poiché potrebbe essere neccessario entrarci più volte ma con parametri diversi.
:::

### Ricevere messaggi dai canali

Mettiamo che un _canale timeline_ spedisca un messaggio quando arriva una nota.
Ricevendo il messaggio, sarai al corrente, in tempo reale, della presenza di una nuova nota nella tua timeline.

Quando un canale spedisci un messaggio, ottieni i seguenti dati JSON:

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

- `id` è l'identificativo che hai impostato entrando nel canale, come indicato in precedenza. Questo ti permette di capire da quale ingresso al canale arriva il messaggio.
- `type` il tipo di messaggio. Dipende dal canale che lo ha spedito.
- `body` contenitore del messaggio. Il contenuto dipende dal canale che lo ha spedito.

### Spedire un messaggio al canale

Ad alcuni canali è possibile spedire messaggi e svolgere altre operazioni oltre alla ricezione di messaggi.

Per spedire un messaggio nel canale, spedisci il seguente JSON al flusso:

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

- `id` è l'identificativo che hai impostato entrando nel canale, come indicato in precedenza. Questo ti permette di capire da quale ingresso al canale arriva il messaggio.
- `type` tipo di messaggio. Ogni canale accetta diversi tipi di messaggi.
- `body` Contenitore del messaggio. Ogni canale accetta diversi contenuti.

### Uscire da un canale

Per uscire da un canale, spedisci il seguente JSON al flusso:

```js
{
	type: 'disconnect',
	body: {
		id: 'foobar'
	}
}
```

- `id` è l'identificativo che hai impostato entrando nel canale, come indicato in precedenza. Questo ti permette di capire da quale ingresso al canale arriva il messaggio.

## Capturing Notes

Misskey mette a disposizione uno stratagemma chiamato **cattura nota** che ti mette in condizione di ricevere un flusso di eventi per una nota specifica.

Ad esempio, mettiamo che vorresti mostrare le reazioni ad una nota in tempo reale. Di solito, è il client che inizia le richieste dati, non può sapere dei cambiamenti lato server, prima di averli richiesti.

Per aggirare questo ostacolo Misskey mette a disposizione lo stratagemma **cattura nota**, con cui puoi ottenere anche tutti gli eventi correlati e quindi mostrare le reazioni in tempo reale.

Nel prossimo capitolo leggerai come attuare lo stratagemma. Per sapere quali altri eventi si possono catturare, leggi la [Lista di eventi catturabili](./note-capture-events.md).

### Catturare una Nota

Per catturare una nota e i suoi eventi, spedisci il seguente JSON al flusso:

```js
{
	type: 'subNote',
	body: {
		id: 'xxxxxxxxxxxxxxxx'
	}
}
```

- `id` è l'identificativo della Nota che vuoi catturare

Inviando questo messaggio, chiedi a Misskey di catturare la Nota, gli eventi correlati verranno quindi indirizzati al tuo flusso.

Mettiamo il caso che una nota ottiene una reazione, vedrai un messaggio simile a questo:

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

- `body.id` sarà l'identificativo della nota che ha innescato l'evento
- `body.type` sarà il tipo di evento che si è innescato
- `body.body` sarà il contenitore dei dettagli dell'evento innescato

### Interrompere la cattura della Nota

Se vuoi interrompere la ricezione di eventi di una Nota, ad esempio quando scompare dallo schermo, puoi annullare la richiesta di cattura.

Spedisci il seguente JSON al flusso:

```js
{
	type: 'unsubNote',
	body: {
		id: 'xxxxxxxxxxxxxxxx'
	}
}
```

- `id` è l'identificativo della Nota di riferimento

Una volta spedito questo messaggio, non riceverai più alcun evento relativo a quella Nota.
