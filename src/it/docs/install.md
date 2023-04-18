# Crea la tua istanza Misskey

Grazie per il tuo interesse nel costruire una istanza Misskey 🚀

Ci sono vari modi per crearne una, scegli tra quelli elencati e segui la relativa guida.

::: danger
Never change the domain name (hostname) of an instance once you start using it!
:::

::: danger
Se si utilizza Cloudflare per il proprio server, non utilizzare l'impostazione Auto Minify.

Misskey non funzionerà correttamente perché Cloudflare non interpreterà il JavaScript più recente e romperà il codice sorgente al suo interno.

Per maggiori informazioni [misskey-dev/misskey #9791](https://github.com/misskey-dev/misskey/issues/9791)
:::

## Usando Docker Compose

Se vuoi eseguire l'istanza in un container segui la [guida di installazione con Docker](./install/docker.html)

## Usando uno script bash

Se vuoi usare uno script automatico, segui la [guida installazione con script bash](./install/bash.html)

## In modo manuale

Se vuoi svolgere l'installazione passo passo, segui la [guida installazione manuale](./install/manual.html)

## Usando YunoHost

Misskey può essere installato come App di YunoHost, la documentazione si trova nel [repository della versione Misskey per YunoHost](https://github.com/YunoHost-Apps/misskey_ynh).
