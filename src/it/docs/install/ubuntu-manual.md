# Come installare Misskey su Ubuntu

## Altri tipi di installazione

- [Installazione manuale](./manual.html)
- [Tutti i tipi di installazione](../install.html)

## Script per il terminale bash

::: tip
Questa installazione non è destinata alla installazione di ambienti di sviluppo.
:::

Smetti di fare copia incolla, è fastidioso, noioso, richiede tempo!

Vuoi svolgere una installazione automatica? C'è lo [script per il terminale bash](./bash.html) che fa quasi tutto!

Ti serve soltanto: un dominio, la configurazione di Cloudflare e la protezione del server.

## A proposito

Il tipo di [Installazione manuale](./manual) prevede l'esecuzione di Misskey tramite `systemd`

Il tipo di installazione tramite [docker-compose](./docker) è la più facile e ti permette di eseguire Misskey in un ambiente virtuale, senza modificare il sistema che la ospita.

## Introduzione

Questa pagina indica come [Installare Misskey](./manual) su sistema operativo GNU/Linux Ubuntu.

Occorre soltanto eseguire alcuni comandi _bash_, modificare alcuni file di configurazione e usare il browser.

Le indicazioni sono specifiche per il sistema operativo Ubuntu, alcune parti potrebbero cambiare in futuro, rendendo inutile la guida. Ce ne scusiamo.

## Ambiente e requisiti

- Sistema operativo **Ubuntu 22.04.1 LTS**.
- Requisiti hardware, occorre una CPU moderna, di architettura amd64 o arm64.
- Memoria RAM necessaria, circa 1.5GB.
- Dominio web già configurato e account Cloudflare attivo.

::: tip
Se prepari un ambiente di sviluppo, dominio e Cloudflare non servono
:::

::: danger
Never change the domain name (hostname) of an instance once you start using it!
:::

## Come usare l'editor Nano

L'editor di testo si apre con questo comando. `nano /percorso/al/file`. Il cursore si muove coi tasti freccia, home, end ecc... Per uscire, premi `CTRL+x`, successivamente, decidi se salvare le modifiche, premi `Y` per accettare.

## Creare un utente

Crea un utente di sistema, poiché Misskey non dovrebbe girare con privilegi di super utente _root_.

`sudo adduser --disabled-password --disabled-login misskey`

::: tip
Se prepari un ambiente di sviluppo, non importa crearlo.
:::

## Installazione software iniziale

Occorre del software per svolgere le prossime attività, per favore installalo se non è già presente.

### Node.js

Si tratta di un linguaggio di programmazione lato server, basato su JavaScript. Necessario per eseguire Misskey.

```
sudo apt install -y curl

curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install -y nodejs

node -v

sudo corepack enable
```

Ti occorre la versione `v20.x.y`. Se appare un'altra versione, come la `v8.x.y` allora l'installazione non è andata a buon fine. Potresti usare il [progetto Node Version Manager](https://github.com/nvm-sh/nvm#about).

### PostgreSQL

Questo è il Data Base Management System. Il gestore della base dati relazionale, ad oggetti. Essenziale per il funzionamento di Misskey.

#### Installazione DBMS

Occorre avere l'ultima versione, `v.15`

```
sudo apt install -y postgresql-common

sudo sh /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -i -v 15;

systemctl status postgresql
```

Se tutto è andato bene, leggerai: **OK**

#### Configurazione DBMS

Esegui il client che si connette al DBMS. `sudo -u postgres psql`

Ora devi creare una utenza per Misskey. Se scegli username **misskey** e password **gattino**, dovrai digitare la query:

`CREATE ROLE misskey LOGIN CREATEDB PASSWORD 'gattino';`

Poi occorre il database: `CREATE DATABASE mkdb OWNER misskey;`

Per uscire da `psql` scrivi `\q`

### Redis

Si tratta di un database non relazionale (noSQL), gestito nella memoria. Necessario per gestire la connessione tra le federazioni e il database.

Installa Redis seguendo la [documentazione ufficiale](https://redis.io/docs/getting-started/installation/install-redis-on-linux/).

```
sudo apt install -y curl ca-certificates gnupg2 lsb-release

curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt update

sudo apt install -y redis

systemctl status redis-server
```

Se tutto è andato bene, leggerai : **Ok**

### Nginx

Si tratta di un Application Web Server. Anche se non è essenziale, svolge comunque un compito importante, come il caching e la crittografia SSL (https).

::: tip
Se configuri un ambiente di sviluppo, non serve.
:::

Installa Nginx seguendo la [documentazione ufficiale](http://nginx.org/en/linux_packages.html#Ubuntu].

```
sudo apt install ubuntu-keyring

curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```

Controlla se ottieni `573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62` come risposta.

```
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list

echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | sudo tee /etc/apt/preferences.d/99nginx

sudo apt update

sudo apt install -y nginx

systemctl status nginx
```

Se tutto è andato bene, leggerai : **Ok**

Attiva il servizio e abilita la partenza automatica al riavvio.

```
sudo systemctl start nginx

sudo systemctl enable nginx

curl http://localhost
```

Se leggi **Welcome to ngnix!** allora tutto è andato bene.

### Altri software

Occorrono due pacchetti aggiuntivi. Servono per la creazione di Misskey.

```
sudo apt update

sudo apt install -y git build-essential
```

## Altre configurazioni

Preparati ad esporre il servizio su internet

::: tip
se stai preparando un ambiente di sviluppo, queste configurazioni non sono necessarie.
:::

### Firewall

Useremo 'ufw' come firewall per bloccare le connessioni non autorizzate.

Si configura una whitelist e si aprono le porte dei servizi SSH 22, HTTP 80, HTTPS 443.

```
sudo ufw enable

sudo ufw default deny

sudo ufw limit 22

sudo ufw allow 80

sudo ufw allow 443
```

Controlla la configurazione con: `sudo ufw status`
Attiva la partenza automatica al riavvio: `sudo systemctl enable ufw`

::: tip
ufw semplifica l'uso di Netfilter (IPTABLES)
:::

### CloudFlare

Si tratta di un servizio utile per gestire DNS, Reverse Proxy e CDN sul tuo dominio. Si può anche evitare ma è consigliato, oltre che comodo. [Configurazione CDN](../admin/cdn)

[Iscrizione a CloudFlare](https://dash.cloudflare.com/sign-up) segui le indicazioni per configurare il dominio prescelto.

Digita l'indirizzo IP del server nella schermata DNS. A seconda del servizio, potrebbero essere necessarie fino a 48 ore prima della ricezione delle configurazioni.

### Configurazione Certbot (Let’s Encrypt)

Per attivare la protezione SSL su **https**, ti occorre un certificato.

Installa il plugin che integra Certbot e Cloudflare: `sudo apt install -y certbot python3-certbot-dns-cloudflare`

Ottieni una APIKey dal sito Cloudflare

1.  [Apri la pagina](https://dash.cloudflare.com/profile/api-tokens)
2.  Seleziona: visualizza API Key Globale
3.  Inserisci la password e indica che sei una persona umana

Crea un file di configurazione con le informazioni di Cloudflare.

```
mkdir /etc/cloudflare
nano /etc/cloudflare/cloudflare.ini
```

Scrivi questi parametri dentro al file di configurazione:

```
dns_cloudflare_email = tuo.accountn@registrato.su.cloudflare
dns_cloudflare_api_key = xxxxxxxxxxxxxxxxxxxxxxxxxx
```

Salva il file e imposta i privilegi di lettura: `sudo chmod 600 /etc/cloudflare/cloudflare.ini`

Esegui il seguente comando, modificando `example.tld` con il tuo dominio: `sudo certbot certonly --dns-cloudflare --dns-cloudflare-credentials /etc/cloudflare/cloudflare.ini --dns-cloudflare-propagation-seconds 60 --server https://acme-v02.api.letsencrypt.org/directory -d example.tld -d *.example.tld`

Se leggi **Congratulations!** è andato tutto bene. Annota il percorso dei file `.pem`, ti serviranno dopo.

## Installazione Misskey

Ora che i preparativi sono finiti, puoi installare Misskey.

Diventa l'utente `misskey` preparato in precedenza: `sudo su - misskey`

Ottieni il codice sorgente tramite git:

```
git clone -b master https://github.com/misskey-dev/misskey.git`

cd misskey

git checkout master
```

Installa le librerie necessarie: 

```
NODE_ENV=production pnpm install --frozen-lockfile
```

## Configurazione di Misskey

### Il file default.yml

Crea il file e scrivici i contenuti indicati di seguito: `nano .config/default.yml`.

I parametri col pallino ● vanno modificati. I parametri col cerchietto 〇 sono i valori che hai configurato fino ad ora.

Puoi vedere un [esempio di configurazione](https://github.com/misskey-dev/misskey/blob/develop/.config/example.yml)

::: tip
Se stai configurando un ambiente di sviluppo, indica `url: http://localhost:3000`
:::

```
# ● URL pubblico di Misskey
url: https://example.tld/

# Imposta la porta numero 3000
port: 3000

# ● Configurazione PostgreSQL。
db:
	host: localhost
	port: 5432
	db  : mkdb # 〇 Nome del database PostgreSQL
	user: misskey # 〇 Nome utente PostgreSQL
	pass: gattini # ● Password di PostgreSQL

# Configurazione Redis
redis:
	host: localhost
	port: 6379

# Configurazione del tipo di ID
id: 'aid'

# 　 syslog
syslog:
	host: localhost
	port: 514
```

Ricordati di salvare le modifiche.

### Configurazione di Nginx

Configurare usando i privilegi di super utente _root_. Smetti di essere l'utente misskey: `exit`

Crea la configurazione: `sudo nano /etc/nginx/conf.d/misskey.conf`

Copia la [configurazione di Nginx](../admin/nginx) e incollala dentro a Nano.

Svolgi le seguenti modifiche indicando le tue configurazioni:

- Righe 18 e 30 URL del dominio
- Righe 34-35 Sostituisci il percorso al file Certificato di Certbot (.pem)
- Se usi la CDN o un altro Reverse Proxy, elimina 4 righe a partire dalla 56

Ricordati di salvare le modifiche.

Controlla il funzionamento: `sudo nginx -t`

Se ottieni **OK** riavvia il servizio: `sudo systemctl restart nginx` poi verifica il funzionamento: `sudo systemctl status nginx`

Se ottieni **OK** va tutto bene.

## Costruire Misskey

Adesso torna ad essere utente misskey: `sudo su - misskey`

Avvia la build:

```
cd misskey
NODE_ENV=production npm run build
```

::: tip
Se stai preparando un ambiente di sviluppo, `NODE_ENV=production` non serve.
:::

### Se non riesci a costruire la build sul server

Potresti avere a disposizione meno di 2GB di memoria RAM. Servono per costruire Misskey e svolgere gli aggiornamenti.

Possibili soluzioni:

- Aggiungi memoria swap al server
- Trasferisci i file del repository git sul tuo pc e avvia la build da lì.

## Inizializza il Database

`npm run init`

## Avvia Misskey

`NODE_ENV=production pnpm run start`

Quando leggi: **Now listening on port 3000 on**, accedi alla URL indicata.

Dovresti vedere la pagina iniziale di Misskey. Inizia a verificare se funziona.

### Se non riesci ad accedere

#### Controlla il DNS di CloudFlare

Visita il sito Cloudflare e verifica che la configurazione DNS punti verso l'indirizzo IP che hai indicato.

#### Controlla il router

Se hai installato Misskey in un server che stà dietro una sottorete, verifica che le porte 80 e 443 siano raggiungibili dall'esterno.

## Creazione servizio Misskey

::: tip
Se stai preparando un ambiente di sviluppo, non è necessario
:::

Termina Misskey premendo `CTRL+c`. poi torna ad essere utente super amministratore: `exit`

Crea la configurazione del servizio: `sudo nano /etc/systemd/system/misskey.service`

Incolla il seguente testo e salva:

```
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

Abilita la configurazione e riavvia il servizio:

```
sudo systemctl daemon-reload

sudo systemctl enable misskey

sudo systemctl start misskey
```

Aspetta circa 15 secondi e verifica il funzionamento: `sudo systemctl status misskey`, se ottieni **Ok** va tutto bene.

Per finire registra il primo utente, amministratore e accedi per completare la configurazione.

## Aggiornare Misskey

C'è uno [script automatico per aggiornare](https://github.com/joinmisskey/bash-install/blob/main/update.ubuntu.sh)

[Aggiornamento manuale](./manual#)

Misskey deve essere spento per svolgere queste azioni:

```
sudo systemctl stop misskey

su - misskey

git pull;

NODE_ENV=production pnpm install --frozen-lockfile

pnpm run clean;

NODE_ENV=production pnpm run build;

pnpm run migrate;

exit
```

### Opzione 1: aggiorna anche il sistema

```
sudo apt update -y
sudo apt full-upgrade -y
sudo reboot
```

In questo caso Misskey tornerà disponibile dopo il riavvio.

### Opzione 2: avvia subito Misskey

`sudo systemctl start misskey`
