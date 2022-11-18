# Gestione delle emoji personalizzati

Possono essere gestiti solamente da amministratori o moderatori, tramite il **Pannello di controllo**, nel menu **Emoji Personalizzati**.

La pagina di mostra l'elenco delle emoji attualmente installate. All'inizio l'elenco sarà vuoto ma puoi aggiungerne in vari modi.

## Copiare le Emoji

Puoi copiarle da altre istanze, scegli il pannello **Remoto** nel menu **Emoji Personalizzati**.
Puoi cercarli per nome della emoji o della istanza di provenienza.

Quando hai trovato quella che ti piace, clicca per aprire il menu di importazione.

Considera che quella emoji potrebbe essere soggetta al diritto d'autore e marchi brevettati, gli amministratori sono legalmente responsabili per qualsiasi violazione.

## Importazione individuale

Se hai una immagine che vuoi convertire in una emoji personalizzata, puoi importarla. Funziona come allegare una immagine ad una nota.
Carichi un nuovo file, scegli dal tuo Drive o indichi la URL dove si trova l'immagine.

::: danger
Quando importi la emoji dal tuo Drive, il file rimarrà lì dove si trova.
Misskey non lo copia, se fosse eliminato la emoji risulterebbe rotta.
:::

## Importazione massiccia

Le emoji possono essere importate in modo massiccio da pacchetti in formato ZIP, organizzate in modo speciale.

Questa funzionalità si trova nel menu a pallini (...) in alto a destra nella pagina **Emoji Personalizzati**.

::: warning
Una importazione massiccia potrebbe sovrascrivere quelle esistenti oppure danneggiare la tua istanza.
Assicurati di importare emoji solamente da fonti affidabili. L'ideale sarebbe che fossero importate solo quelle esportate da te.
:::

### Formato del pacchetto emoji

Alla radice c'è il file `meta.json` che contiene informazioni sulle emoji contenute nel pacchetto.
Segue un esempio di un ipotetico pacchetto, in cui `Meta` è la struttura del file completo.

```typescript
class Meta {
	metaVersion: number;
	host: string;
	/**
	 * Rappresentazione del giorno e orario, come restituito da ECMAScript `Date.prototype.toString`.
	 */
	exportedAt: string;
	emojis: Emoji[];
}

class Emoji {
	downloaded: boolean;
	fileName: string;
	emoji: {
		id: string;
		updatedAt: string;
		name: string;
		host: null;
		category: string;
		originalUrl: string;
		publicUrl: string;
		uri: null;
		type: string;
		aliases: string[];
	};
}
```

Gli attributi di `Meta` in questo momento non vengono utilizzati o controllati in fase di importazione, tranne che per l'attributo `emojis`.

Per ogni `Emoji`:

- `downloaded`: dovrebbe essere sempre _True_, se il valore è mancante o diverso, non verrà importata
- `fileName`: nome dell'immagine all'interno del pacchetto
- `emoji`: metadati associati alla emoji come stanno nel database. Attualmente, alcuni non vengono nemmeno verificati. Ad esempio:
  - `name`: nome della emoji `sorrisone` se occorre scrivere `:sorrisone:` per attivarla. Attenzione: Se esiste già una con lo stesso nome, questa verrà sovrascritta!
  - `category`: categoria di emoji
  - `aliases`: lista di parole sinonimi del nome. Nella interfaccia web sono i: "tags".

## Modificare ed eliminare

Le proprietà di una emoji si modificano cliccandola nella lista di quelle _Locali_
Comparirà una finestra di dialogo in cui modificare i parametri oppure eliminare la emoji.

::: danger
Quando elimini una emoji personalizzata, le vecchie note che la contenevano inizieranno a mostrare invece il testo (campo `name`). E non potranno essere più rappresentate correttamente.
:::

Le emoji remote non si possono modificare, né eliminare.

Ogni emoji può avere solo un nome, una categoria ma più tag.
La categoria si usa per raggrupparle nella finestrella di selezione.
I tag possono essere usati come alternativa ai nomi, poiché sono ricercabili.

Quando hai finito con le modifiche, ricordati di salvare cliccando il baffetto di spunta (✔️) nell'angolo in alto a destra.

### Modifiche massiccie

Le emoji si possono modificare in modo massiccio attivando la selezione multipla **"Select Mode"**

In questo modo, cliccando le emoji non si aprirà la finestra di dialogo, ma verranno evidenziate, indicando quali siano selezionate per la modifica.

Le modifiche che si possono svolgere vengono mostrate come bottoni. Ogni bottone avvia la modifica massiccia di quel parametro, per tutte le emoji evidenziate.

Per terminare le modifiche, disattivare il campo _Select Mode_
