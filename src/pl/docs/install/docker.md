Skonfiguruj instancje Misskey za pomocą Docker Compose
================================================================

Ten poradnik opisze instalację i konfigurację Misskey za pomocą Docker Compose.

::: danger
Nigdy nie zmieniaj nazwy domeny(hostname) instancji kiedy zaczniesz z niej korzystać!!

:::

::: Wymagania

- docker i dockercompose zainstalowane
:::

Pobierz repozytorium
----------------------------------------------------------------

```sh
git clone -b master https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

Skonfiguruj
----------------------------------------------------------------

Skopiuj pliki przykładowe:

```sh
cp .config/docker_example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
cp ./docker-compose.yml.example ./docker-compose.yml
```

Edytuj `default.yml` i `docker.env` do instrkcji w pliku.

Edytuj `docker-compose.yml` jeśli wymagane. (kiedy na przykład: chcesz zmienić port).

Zbuduj i zinicjuj
----------------------------------------------------------------

Podana komenda zbuduje Misskey i uruchomi bazę danych. Zajmie to trochę czasu.

``` shell
sudo docker compose build
sudo docker compose run --rm web pnpm run init
```

Uruchom Misskey
----------------------------------------------------------------

SUPER! Możesz uruchomić Misskey za pomocą poniższej komendy.

```sh
sudo docker compose up -d
```

GLHF✨

Aktualizacja serwera Misskey
----------------------------------------------------------------

::: Uwaga
Aktualizując proszę sprawdź [informacje o wydaniach](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md) by wiedzieć wcześniej o zmianachoraz czy nie będzie trzeba wykonać jakiś dodatkowych zmian.(zazwyczaj nie trzeba).
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

Może to potrwać trochę czasu w zależności od wielkości danych instancji.

Wykonywanie komendy w CLI
----------------------------------------------------------------

```sh
sudo docker compose run --rm web node packages/backend/built/tools/foo bar
```
