# Impostare una CDN

Quando pubblichi la tua istanza Misskey, ti raccomandiamo che avvenga dietro ad una CDN, come ad esempio [Cloudflare](https://www.cloudflare.com/).

Usare Misskey dietro alla CDN, ti permette di avere i contenuti statici cachati, in maniera che le richieste non arrivino al tuo server. L'indirizzo IP del server non viene esposto, diminuendo il rischio di un attacco DDOS.

## Copia cache

L'interfaccia web di Misskey è completamente statica e non necessita del server per funzionare. Questa è la parte migliore per cui funziona la **copia cache**.

Però non tutta Misskey può essere "cachata", le API non devono esserlo. Dunque, devi configurare la seguente eccezione nella tua CDN:

- Metti in cache tutte le richieste, tranne: `/api/*`.

::: tip
Non è necessario svuotare la cache quando aggiorni Misskey.
::::
