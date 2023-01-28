---
description: "Questa guida spiega come installare Misskey dentro Docker"
---

# Costruire Misskey tramite Docker Compose

Questa guida spiega come installare Misskey dentro Docker Compose

::: danger
Never change the domain name (hostname) of an instance once you start using it!
:::

::: tip
Requisiti iniziali: installare **Docker** e **Docker Compose**
:::

## Ottieni il codice sorgente

```sh
git clone -b master https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

## Variabili d'ambiente

Copia la configurazione d'esempio, su quella di default.

```sh
cp .config/example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
cp ./docker-compose.yml.example ./docker-compose.yml
```

Modificare sia `default.yml` che `docker.env` come indicato nei file.

Modificare `docker-compose.yml` secondo le necessità (ad esempio se intendi cambiare porta)

## Costruzione e inizializzazione

Costruisci i container necessari e popola il database.

```shell
sudo docker compose build
sudo docker compose run --rm web pnpm run init
```

## Avvio

Questo comando avvia i container e li imposta come servizio al riavvio.

```sh
sudo docker compose up -d
```

## Aggiornare Misskey in Docker

::: warning
Prima di procedere, leggiti le [Note di rilascio](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md) per verificare se ci siano attività aggiuntive da svolgere.
:::

```sh
git stash
git checkout master
git pull
git submodule update --init
git stash pop
sudo docker compose build
sudo docker compose stop && sudo docker compose up -d
```

L'attività potrebbe richiedere del tempo, a seconda della grandezza del database e del contenuto dell'aggiornamento.

## Eseguire comandi dentro ai Container

Per eseguire uno script nel container `web`

```sh
sudo docker compose run --rm web node packages/backend/built/tools/foo bar
```
