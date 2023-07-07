---
description: "Questa guida spiega come installare e configurare Misskey"
---

# Guida alla costruzione di Misskey

Questa guida spiega come installare e configurare Misskey

::: danger
Never change the domain name (hostname) of an instance once you start using it!
:::

::: tip
Occorre installare il seguente software

- **[Node.js](https://nodejs.org/en/)** (20.4 o successivo)
- **[PostgreSQL](https://www.postgresql.org/)** (15 o successivo)
- **[Redis](https://redis.io/)**
- **[FFmpeg](https://www.ffmpeg.org/)**

Debian/Ubuntuをお使いであれば、`build-essential`パッケージをインストールしておくと良いです。

corepackが有効化されていること
```sh
sudo corepack enable
```
:::

## Creazione utente

Misskey non va eseguito tramite l'utente amministratore _root_. Occorre creare un utente ad-hoc, esempio per Debian/Ubuntu:

```sh
adduser --disabled-password --disabled-login misskey
```

## Installazione Misskey

```sh
sudo -iu misskey
git clone --recursive https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
git submodule update --init
NODE_ENV=production pnpm install --frozen-lockfile
```

## Variabili d'ambiente

Copia il file `.config/example.yml` in un file chiamato `default.yml`

```sh
cp .config/example.yml .config/default.yml
```

Modifica `default.yml` seguendo le indicazioni nel file.

## Costruzione e inizializzazione

Avvia la build e inizializza il DB, potrebbe richiedere un po' di tempo.

```sh
NODE_ENV=production pnpm run build
pnpm run init
```

::: tip
Chi usa Debian/Ubuntu ha bisogno del pacchetto `build-essential`
:::

## Avviamento

Al termine avvia Misskey usando:

```sh
NODE_ENV=production pnpm run start
```

:::: Configurazione di systemd

Crea il file `/etc/systemd/system/misskey.service`

Incollaci questa configurazione:

```ini
[Unit]
Description=Misskey daemon

[Service]
Type=simple
User=misskey
ExecStart=/usr/bin/npm start
WorkingDirectory=/home/misskey/misskey
Environment="NODE_ENV=production"
TimeoutSec=60
StandardOutput=journal
StandardError=journal
SyslogIdentifier=misskey
Restart=always

[Install]
WantedBy=multi-user.target
```

::: warning
Se usi Misskey su CentOS e una porta inferiore a 1024, Devi configurare `ExecStart=/usr/bin/sudo /usr/bin/npm start`
:::

Ricarica systemd, abilita e avvia il servizio

```sh
sudo systemctl daemon-reload
sudo systemctl enable misskey
sudo systemctl start misskey
```

::: tip
Per controllare lo stato del servizio: `systemctl status misskey`
:::

::::

## Aggiornamento di Misskey

::: warning
Leggi sempre le [Note di rilascio](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md) per sapere se ci siano attività aggiuntive da svolgere.
:::

Ottieni il codice sorgente dal branch `master` e le migrazioni del database:

```sh
git checkout master
git pull
git submodule update --init
NODE_ENV=production pnpm install --frozen-lockfile
NODE_ENV=production pnpm run build
pnpm run migrate
```

A seconda della grandezza del database e dal contenuto degli aggiornamenti, potrebbe impiegarci più o meno tempo.

Riavvia il servizio Misskey al termine dell'aggiornamento.

```sh
sudo systemctl restart misskey
```

::: tip
Se ricevi errori in fase di compilazione, prova i seguenti comandi:

- `pnpm run clean`または`pnpm run clean-all`
- `pnpm rebuild`

:::
