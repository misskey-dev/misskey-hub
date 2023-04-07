# Skrypt do powłoki BASH do instalacji Misskey -  wersja 3.0.0 
Możesz zainstalować Misskey za pomocą pojedyńczego skryptu.  

Skrypt jest przystosowany pod Ubuntu i pomoże ci zainstalować Misskey zadając kilka podstawowych pytań.

Poza jest też skrypt do aktualizacji Misskey.

[Dla v12](https://github.com/joinmisskey/bash-install/blob/a096e874f93d493aa68975a31be9ce12d644e767/README.en.md)  
[**Kliknij tutaj, aby zobaczyć wersję japońską. / 日本語版はこちら**](./README.md)

## Licencja
[MIT License](./LICENSE)

## Składniki
1. Domena
2. Serwer (najlepiej się sprawdzi Ubuntu)
3. Konto CloudFlare (zalecane)

::: danger
Nigdy nie zmieniaj nazwy domeny (hostname) instancji kiedy zaczniesz z niej korzystać!!
:::

## Skonfiguruj CloudFlare
Jeśli korzystasz z nginx i Cloudflare, musisz skonfigurować Cloudflare:

- Ustaw DNS.
- W zakładce ustawień SSL/TLS, przełącz tryb szyfrowania na"Full".

## Procedury

### 1. SSH

Połącz się z serwerem za pomocą SSH
(Jeśli masz fizyczny dostęp do serwera to uruchom terminal)

### 2. Przygotowanie systemu
Zaktualizuj paczki systemu i go zrestartuj.

```
sudo apt update; sudo apt full-upgrade -y; sudo reboot
```

### 3. Rozpocznij instalację
Połącz się z powrotem i rozpocznij instalacje Misskey. 

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/ubuntu.sh -O ubuntu.sh; sudo bash ubuntu.sh
```

### 4. Aktualizacja Misskey
Jest też skrypt do aktualizacji Misskey.

Skrypt ten nie aktualizuje środowiska.
Proszę odwołać się do Dziennika zmian (po japońsku (translator pomoże)) i [Listy wydań GitHub(po angielsku)](  
(https://github.com/joinmisskey/bash-install/releases) i odpowienio dokonywać migracji.

Najpierw pobierz skrypt aktualizacji.

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/update.ubuntu.sh -O update.sh
```

Uruchom pobrany skrypt kiedy chcesz aktualizować Misskey


```
sudo bash update.sh
```

- W środowisku używającym systemd opcją `-r` można zaktualizować i zrestartować system.
- W środowisku dockerowym możesz określić repozytorium:tag jako argument

## Przetestowane środowska

### Oracle Cloud Infrastructure

Ten skrypt działą dobrze na następujących środowiskach oferowanych przez Oracle Cloud Infrastructure Always Free.

- VM.Standard.E2.1.Micro (AMD)
- VM.Standard.A1.Flex (ARM) [1OCPU RAM6GB lub więcej]

Należy używać iptables.

Oraz nie zapomnij o ustawieniu portów w ustawieniach sieci po stronie Oracle

## Problemy i Pull Requesty witamy
Jeżeli coś nie działa w podanych wyżej środowiskach, może to być błąd. Będziemy wdzięczni, jeśli zgłosisz go jako problem, z podanymi wymaganiami, które wprowadziłeś do skryptu.

Ciężko jest pomóc z środowiskami innymi niż powyżej, ale możemy rozwiązać Twój problem, jeśli podasz nam szczegóły środowiska.

Suggestie równierz witamy.

# UWAGA CZĘŚĆ TŁUMACZONA MASZYNOWO - może nie być 100% prawidłowa

# Porady.
Jak wybrać pomiędzy dwoma opcjami i specyfikacją.

## Systemd czy Docker?
Od v1, możesz wybrać między systemd i Docker jako metodą instalacji.

Kiedy mówimy Docker, tylko **Misskey jest uruchamiany na Dockerze**, podczas gdy Redis, Postgres itp. są uruchamiane bezpośrednio na hoście.  
[Aby uzyskać więcej informacji o tym, jak uruchomić wszystkie funkcje za pomocą docker-compose, polecamy ten artykuł stworzony przez mamemononga] (https://gist.github.com/mamemomonga/5549bb69cad8e5618e5527593d4890e0)

Jeśli jest skonfigurowany do korzystania z obrazów Docker Hub, jest to **najbardziej zalecane**, ponieważ eliminuje potrzebę budowania Misskey.  
Jednak migracja jest wymagana, więc nie będzie zerowego czasu, w którym nie można użyć Misskey podczas aktualizacji.  
Ponadto nie przygotowujesz środowiska budowania dla Misskey (nie ma git pull), więc staje się kłopotliwy do skonfigurowania, gdy chcesz przenieść fork.

Lokalna metoda budowania Docker jest zdeprecjonowana ze względu na wydajność.

Systemd jest zalecany, jeśli chcesz użyć forka, chociaż nie musisz przesyłać obrazu do Docker Hub.

Zalecana kolejność jest następująca.

1. docker hub
2. systemd
3. docker build.

## Czy używać nginx
Jeśli budujesz Misskey na pojedynczym serwerze, zalecamy użycie nginx.

Jeśli instalujesz load balancer, nie instaluj nginx, ale [konfiguracja nginx dla Misskey](https://github.com/misskey-dev/misskey/blob/develop/docs/examples/misskey.nginx) Lepiej jest skonfigurować load balancer w odniesieniu do.

## Dodaj więcej swapów!
Jeśli masz skonfigurowane swapy, skrypt nie zostanie uruchomiony, jeśli nie masz łącznie co najmniej 3 GB pamięci.

## Jeśli skrypt zawiedzie w połowie i chcesz go uruchomić ponownie
W mało prawdopodobnym przypadku, gdy skrypt zawiedzie w połowie i będziesz chciał uruchomić go ponownie, zwróć uwagę na następujące kwestie: ## Dodaj więcej swapów!

- Jeśli masz już zainstalowane Redis i Postgres, ustaw 'install locally' na No.  
  Ustawienia hosta i portu należy pozostawić tak jak są i nacisnąć Enter.
  Wprowadź nazwę użytkownika i hasło określone w poprzednim uruchomieniu.

## O plikach .env
Skrypt instalacyjny tworzy dwa pliki .env.  
Używane do aktualizacji.

### /root/.misskey.env
Wymagane do zapamiętania użytkownika do uruchomienia misskey.

### /home/(użytkownik misskey)/.misskey.env
Generowany dla systemd.  
Głównie używany do zapamiętania katalogów.

### /home/(misskey user)/.misskey-docker.env
Wygenerowany dla Dockera.  
Przechowuje numer uruchomionego kontenera i obrazu.  
Numery kontenerów są aktualizowane podczas aktualizacji. Stare obrazy są usuwane.

## Zarządzaj sobą.
Po instalacji, oto kilka uwag, które mogą być przydatne podczas zmiany konfiguracji.

Zastąp "example.com" własną domeną.

### Katalog Misskey
Źródło Misskey jest sklonowane jako `/home/user/directory`.  
(Domyślne wartości zarówno dla użytkownika jak i katalogu to misskey).

Aby dostać się do katalogu misskey, możesz nawigować w następujący sposób.

```
sudo -iu user
cd katalog.
```

Aby powrócić do pierwotnego użytkownika, wykonaj exit.

```
exit.
```

### systemd

Zastąp "example.com" własną domeną.

Nazwa procesu systemd to example.com.  
Na przykład, aby go zrestartować, wykonaj następujące czynności.

```
sudo systemctl restart example.com
```

Możesz sprawdzić logi za pomocą journalctl.

```
journalctl -t example.com
```

Plik konfiguracyjny jest przechowywany jako `/etc/systemd/system/example.com.service`.

### Docker
Docker jest uruchamiany bez roota jako użytkownik Misskey.

Wchodząc na użytkownika Misskey za pomocą sudo, należy zmienić `XDG_RUNTIME_DIR` i `DOCKER_HOST`.

```
sudo -iu user
export XDG_RUNTIME_DIR=/run/user/$UID
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock

# Wyświetl listę procesów
docker ps.

# Zbuduj (repozytorium: local/misskey:latest)
docker build -t local/misskey:latest . /misskey

# docker run
docker run -d -p 3000:3000 --add-host=docker_host:10.0.0.1 -v /home/misskey/misskey/files:/misskey/files -v "/home/misskey/misskey/.config/ default.yml":/misskey/.config/default.yml:ro --restart unless-stopped -t "local/misskey:latest"

# Pokaż logi
docker logs --tail 50 -f container-id
```

W przypadku one-linerów użyj następującego.

```
sudo -u user XDG_RUNTIME_DIR=/run/user/$(id -u user) DOCKER_HOST=unix:///run/user/$(id -u user)/docker.sock docker ps
```

### nginx
Konfiguracja nginx jest przechowywana jako `/etc/nginx/conf.d/example.com.conf`.

### Redis
Requirepass i bind są ustawione w `/etc/redis/misskey.conf`.

## Q. Nie mogę uzyskać dostępu do 502 po aktualizacji.
Docker wykonuje migrację po uruchomieniu, więc nie można uzyskać do niego dostępu od razu.  
Proszę sprawdzić, czy migracja została zakończona.

W przypadku systemd, instalacja pnpm mogła się nie powieść.  

Spróbuj uruchomić następujące w katalogu Misskey i ponownie uruchomić aktualizację.

```
pnpm run clean-all
```

Jeśli sprawdzisz dzienniki za pomocą journalctl, zwykle znajdziesz oświadczenie mówiące, że re2.

## Q. Chcę zbudować kolejny Misskey na tym samym serwerze.
Skrypt nie przewiduje instalacji dodatkowych instancji Misskey na tym samym serwerze.  
Niektóre ustawienia zostaną nadpisane lub otrzymasz błąd w procesie.
