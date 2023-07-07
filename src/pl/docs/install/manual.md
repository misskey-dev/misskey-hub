Poradnik instalacji i konfiguracji Misskey
================================================================

Dziękujemy za zainteresowanie stworzeniem własnej instancji Misskey!
Ten poradnik opisuje jak zainstalować i skonfigurować MIsskey.

----------------------------------------------------------------

::: danger
Nigdy nie zmieniaj nazwy domeny(hostname) kiedy będziesz korzystać z instacji!
:::

*1.* Zainstaluj dependencje
----------------------------------------------------------------

Proszę zainstalować wymagane zależności i je skonfigurować:

#### Dependencje :package

* **[Node.js](https://nodejs.org/en/)** (20.4.x)
* **[PostgreSQL](https://www.postgresql.org/)** (15.x)
* **[Redis](https://redis.io/)**
* **[FFmpeg](https://www.ffmpeg.org/)**

Jeżeli używasz Debian/Ubuntu, powinieneś zainstalować pakiet `build-essential`.

corepack musi być włączony.

```sh
sudo corepack enable
```

*2.* Stwórz użytkownika dla Misskey
----------------------------------------------------------------

Używanie Misskey z prawami root'a nie jest dobrym pomysłem, więc stwórz użytkownika dla tego.
W debiano-podobnych systemach na przykład za pomocą tej komendy:

```sh
adduser --disabled-password --disabled-login misskey
```

*3.* Zainstaluj Misskey
----------------------------------------------------------------

1. Połącz się z użytkownikiem `misskey`

 `sudo -iu misskey`

2. Sklonuj repozytorium Misskey

 `git clone --recursive https://github.com/misskey-dev/misskey.git`

3. Przejdź do folderu z pobranym repozytorium

 `cd misskey`

4. Sprawdź [najnowsze wydanie](https://github.com/misskey-dev/misskey/releases/latest)

 `git checkout master`

5. Pobierz submoduły

    `git submodule update --init`

5. Zainstaluj Misskey's dependencje

 `pnpm install --frozen-lockfile`

*4.* Skonfiguruj Misskey
----------------------------------------------------------------

1. Skopiuj `.config/example.yml` i zmień nazwę na `default.yml`.

 `cp .config/example.yml .config/default.yml`

2. Edytuj `default.yml`

*5.* Zbuduj Misskey
----------------------------------------------------------------

Zbuduj Misskey z podanymi parametrami:

`NODE_ENV=production pnpm run build`

Jeśli używasz Debiana to musisz mieć zainstalowane paczki  `build-essential`, `python`.

*6.* Zainicjuj bazę danych
----------------------------------------------------------------

1. Utwórz bazę danych PostgreSQL z prawidłowymi danymi użytkownika
 oraz pustą bazą danych o nazwie podanej w pliku konfiguracyjnym.
 Upewnij się że baza danych łączy się bez problemów z użytkownikiem który będzie później uruchamiał Misskey czy nic nie powodoje problemów.
Enkodowanie bazy danych powinno być ustawione na `UTF8`.

 ```
 sudo -u postgres psql
 create database misskey with encoding = 'UTF8';
 create user misskey with encrypted password '{YOUR_PASSWORD}';
 grant all privileges on database misskey to misskey;
 \q
 ```

2. Uruchom inicjalizacje bazy danych

 ```
 pnpm run init
 ```

*7.* Koniec
----------------------------------------------------------------

Dobra robota! Teraz masz środowisko które uruchamia Misskey.

### Uruchamianie normalnie

Wystarczy `NODE_ENV=production pnpm run start` i GLHF!

### Uruchom z SystemD

1. Utwórz usługę SystemD

 `/etc/systemd/system/misskey.service`

2. Edytuj plik i wklej następujący kod:

 ::: details

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

 :::

3. Odświerz systemD i aktywuj usługę Misskey.

 `sudo systemctl daemon-reload; sudo systemctl enable misskey`

4. Uruchom usługę Misskey.

 `sudo systemctl start misskey`

Możesz sprawdzić działanie usługi wpisując

 ```
 systemctl status misskey
 ```

### Uruchom z OpenRC

1. Skopiuj poniższy tekst do  `/etc/init.d/misskey`:

 ::: details

 ```sh
 #!/sbin/openrc-run

 name=misskey
 description="Misskey daemon"

 command="/usr/bin/npm"
 command_args="start"
 command_user="misskey"

 supervisor="supervise-daemon"
 supervise_daemon_args=" -d /home/misskey/misskey -e NODE_ENV=\"production\""

 pidfile="/run/${RC_SVCNAME}.pid"

 depend() {
  need net
  use logger

  # alterbnatynie usuń komentaż jeżeli używasz nginx
  #use logger nginx
 }
 ```

 :::

2. Usutaw uruchomienie usługi przy starcie systemu

 `rc-update add misskey`

3. Uruchom usługę Misskey

 `rc-service misskey start`

Możesz sprawdzić działanie usługi z komendą

 ```
 rc-service misskey status
 ```

### Aktualizowanie Misskey do najnowszej wersji

1. `git checkout master`
2. `git pull`
3. `git submodule update --init`
4. `NODE_ENV=production pnpm install --frozen-lockfile`
5. `NODE_ENV=production pnpm run build`
6. `pnpm run migrate`
7. Zrestartuj proces Misskey
8. GLHF!

Jeżeli napotkasz problemy to spróbuj:

1. `pnpm run clean` lub `pnpm run clean-all`
2. Ponów aktualizację (Nie zapomnij o `pnpm install`)
