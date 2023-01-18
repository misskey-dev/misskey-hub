---
description: "Leggi questa pagina quando ci sono degli errori"
---

# Soluzione agli errori di installazione

::: tip
Per prima cosa, leggi attentamente la [guida di installazione](../install/manual.html).
:::

## Script automatico per Ubuntu

Per chi non volesse seguire i passi dell'installazione su Ubuntu, con _systemd_ c'è a disposizione uno [script automatizzato di installazione](https://github.com/joinmisskey/bash-install/blob/main/README.en.md)

## Installazione manuale

Leggi la [guida di installazione](../install/manual.html)

## La build fallisce

In generale, per creare Misskey sono necessari almeno 2GB di memoria. Assicurati di averne abbastanza sul server, oppure puoi crearlo sul tuo PC e distribuirlo successivamente sul server.

## Qualcosa va storto

- Leggi attentamente la [guida di installazione](../install/manual.html).
- Verifica che la versione di NodJS sia la più recente.
- Errori o WARN possono apparire durante l'installazione o la compilazione, ma di solito non sono veri problemi. Per il momento, esegui `npm start` e controlla l'operazione.
- Verifica l'installazione di `node-gyp`
  - Installa con `apt install build-essential`
  - Su Windows, fare riferimento a [questo articolo](https://qiita.com/AkihiroTakamura/items/25ba516f8ec624e66ee7) (in giapponese)
- Se non dovesse funzionare, riprova dall'inizio seguendo i passaggi nella [guida di installazione](../install/manual.html).

## Fallimento dell'aggiornamento

- Assicurati che abbiano funzionato sia `pnpm install` che `pnpm run migrate` durante l'aggiornamento di Misskey. Se non funzionano, prova con `pnpm run clean-all && pnpm install` e `pnpm run build && pnpm run migrate && pnpm start`.
- Se non sembra funzionare, riprova dall'inizio seguendo i passaggi nella [guida di installazione](../install/manual.html).

## Configurazione ambiente

Leggi attentamente la [guida di installazione](../install/manual.html).
Configura le impostazioni in `.config/default.yml`.
Copia [`.config/example.yml`](https://github.com/misskey-dev/misskey/blob/develop/.config/example.yml) e modifica seguendo le indicazioni che trovi nei commenti.

(Nel formato YAML, qualsiasi linea che inizia con cancelletto (#) viene trattata come un commento.)
