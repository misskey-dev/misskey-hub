# FAQ domande frequenti

Questa pagina raccoglie le domande poste di frequente, sia sul progetto Misskey, sia sull'uso che se ne fa di una istanza.

## Qual'è l'obiettivo del progetto?

Francamente Misskey mira soltanto ad essere una buona piattaforma di comunicazione a tutto tondo. Diversamente da altre, non è fondata su idee specifiche, per esempio l'anti-centralizzazione, né viene sviluppata con quello scopo. Sotto questo aspetto è un po' "senza obiettivi", il che permette di cambiare facilmente i piani se necessario.

<!-- TODO: ここにロードマップへのリンク (link alla roadamap) -->

## Misskey è sviluppato da una azienda?

No. Misskey è sviluppato da una singola persona e non viene commercializzato tramite alcuna azienda. I membri del team di sviluppo di solito sono volontari. Dovessero presentarsi alcuni sponsor, lo sviluppo rimane comunque incentrato sulla comunità di utilizzatori.

## Chi gestisce Misskey?

Essendo un sistema distribuito, ogni istanza, individualmente, è governata da uno o più amministratori.
Per tanto non c'è una singola persona o azienda che controlla Misskey. Significa anche che il team di sviluppo non ha alcun controllo delle istanze individuali. Le questioni specifiche vanno risolte con gli amministratori di questa o quella istanza. Per scoprire chi sono gli amministratori di una istanza, occorre visitare la pagina: [Informazioni sull'istanza](/about).
I creatori di una istanza, sono essi stessi gli amministratori.

## Quale istanza dovrei scegliere?

Abbiamo un [elenco di istanze Misskey](../instances.md), sebbene non sia completo.
La risposta è: dipende. Dall'istanza, dalla grandezza della community o dal motivo che la anima.
Scegliere una istanza che coincide con i tuoi interessi è probabilmente una buona scelta.
Anche se, la quantità di persone, la velocità del servizio, l'area in cui è posizionata o la lingua parlata, potrebbero essere criteri validi per la scelta.
Nessuna istanza è quella **ufficiale**, anche tu potresti avere la capacità di aprire la tua istanza.
In generale, qualsiasi istanza scegli, avrai modo di connetterti con tutti gli utenti in modo trasparente.

## Come installo la mia istanza?

Grazie per l'interesse ad avviare una nuova istanza di Misskey. Fino al 2022 non ci sono servizi di hosting specializzati nella fornitura di Misskey chiavi in mano. Quindi avviare la propria istanza richiede un certo quantitativo di competenza tecnica. La [guida di installazione](./install.md) ti aiuterà con ulteriori informazioni a riguardo.

## Quale tecnologia usa Misskey?

Durante lo sviluppo di Misskey, la tecnologia è cambiata enormemente. All'inizio si usava una combinazione di MySQL + PHP + jQuery (denominata LAMP), ma oggi le cose sono cambiate:

- Applicazione: Node.js
- Base dati: PostgreSQL, Redis
- Interfaccia utente: Vue.js
- Linguaggio di programmazione: TypeScript

In aggiunta a tutto ciò, c'è MFM e AiScript, che sono due tecnologie Open Source originali di Misskey.

## È una derivazione di Mastodon?

No. Misskey è un progetto completamente diverso da Mastodon o altri progetti simili. Lo sviluppo si protrae da molto più tempo. Sebbene sia diventato federato e distribuito soltanto dopo l'apparizione di Mastodon. Entrambi i progetti implementano il protocollo ActivityPub, anche se non c'è relazione tra entrambi.

## Mi serve il logo e l'icona di Misskey, come si scaricano?

Abbiamo a disposizione diverse [risorse grafiche](../appendix/assets.html).

## Chi è quella ragazza carina con le orecchie da gatto?

Si tratta della dea guardiana di Misskey, si chiama Ai.

<div class="info">ℹ️ Per ulteriori <a href="https://xn--931a.moe/" target="_blank">informazioni su Ai</a> sul sito dedicato, in giapponese.</div>

## È disponibile la App per iOS o Android?

Sebbene non esista alcuna App ufficiale di Misskey, esistono alcune [applicazioni sviluppate da terzi](./apps). Comunque, la funzionalità di App terze, inevitabilmente rimane al passo della versione ufficiale via web. Se puoi fare a meno dalla App nativa per il tuo device, noi ti raccomandiamo di usare la versione ufficiale via web. Essa infatti supporta PWA ed è possibile fare in modo che si comporti come una App nativa. <!-- TODO: Manca il link alla PWA -->

## Posso entrare usando una App Mastodon?

Siccome Misskey non è compatibile con le API Mastodon, tranne poche eccezioni, l'uso dei client Mastodon non è possibile.

## Cosa devo fare per seguire un profilo su un altra istanza?

Nel menu laterale, scegli **"Cerca"** e digita il nome utente comprensivo dell'indirizzo della istanza. Ad esempio: `@syuilo@misskey.io`

## Come annullo una "Rinota"?

Premi il bottone coi tre puntini ("...") in alto a destra, vicino all'orario della tua [Rinota](../features/note#renote) e scegli la voce di menu **"Annulla Rinota"**.

## Vorrei nascondere l'anteprima della URL quando c'è un link

Puoi evitare di mostrare l'anteprima usando MFM. Sulla tua istanza, puoi avere gli esempi cliccando il logo in alto a sinistra e segliendo questo menu: **"Guida > Bigliettino MFM"**

## Voglio una emoji particolare

Le emoji possono essere gestite solamente dagli amministratori della istanza. Chiedi supporto a loro e faranno del loro meglio per aiutarti.

## Vorrei sviluppare un BOT

Per sviluppare un profilo di tipo BOT occorre fare uso delle [API Misskey](../docs/api) della tua istanza.

## Che servizio di traduzione viene utilizzato?

Le istanze Misskey possono usare il servizio di traduzione [DeepL](https://www.deepl.com/)

## Posso pubblicare un servizio con «Misskey» nel nome?

Il marchio «Misskey» è in attesa di registrazione (2022-054788) a partire da novembre 2022. Viene concesso di pubblicare un servizio che riporta la parola «Misskey» nel nome, non è previsto alcun pagamento.
