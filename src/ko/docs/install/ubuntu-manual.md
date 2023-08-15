# 우분투에서의 Misskey 설치 방법 자세히 보기

::: tip
본 문서는 DeepL을 통해 기계 번역 및 수정되었습니다. 향후 직접 번역이 제공될 예정입니다.
:::

## 기타 Misskey 설치 방법
- [기본 버전 Misskey 구축 가이드 (manual.html)](./manual.html)
- [기타 설치 방법 목록](../install.html)

## 쉘 스크립트 안내
복사, 붙여넣기만 하면 쉘 스크립트로 하면 되지 않느냐는 생각에 **쉘 스크립트로 거의 모든 작업을 해주는 것을 만들어 봤습니다!**  
[쉘 스크립트에 대한 자세한 내용과 사용법은 여기에서 확인하세요! **](./bash.html)

::: tip
쉘 스크립트로 개발 환경에 설치하는 것은 권장하지 않습니다.
:::

::: tip
도메인 구매 및 Cloudflare 설정, 서버 확보는 직접 준비해 주시기 바랍니다.
:::

문제가 있으면 [@aqz@p1.a9z.dev 에 멘션](https://p1.a9z.dev/@aqz)으로 알려주시면 감사하겠습니다.

## 이 글에 대해
이 글은 [Misskey 구축 가이드 (manual.html)](./manual.html)에 소개된 대로 systemd에서 Misskey를 동작시키고 있습니다.

[docker-compose](./docker.html)을 사용하면 수작업으로도 조금 더 쉽게 실행할 수 있습니다.

::: danger
한 번 사용을 시작한 도메인/호스트명으로 DB를 새로 생성하지 마세요!
:::

## 시작
이 글에서는 [Misskey 구축 가이드 (manual.html)](./manual.html)을 바탕으로 일반적인 우분투 서버에 Misskey를 설치하고 공개하는 방법을 하나하나 설명합니다.

Bash 명령어 입력, 몇 가지 설정 파일 편집, 그리고 브라우저 조작만으로 설정이 완료되도록 하고 있습니다.  
설치하는 소프트웨어에 대해 간략하게 설명하고 있지만, 신경 쓸 필요는 없습니다.

이 글에서는 구체성을 중시하여 특정 환경에 특화된 설명을 하고 있습니다.  
OS의 차이, Misskey 본체나 의존하는 소프트웨어의 버전업으로 변경된 부분 등이 있을 수 있지만, 양해해 주세요.

모르는 단어에 대해서는 [『"알 것 같지만""모르지만""알 것 같지만""알 것 같은" IT 용어사전』](https://wa3.i-3-i.info/)에서 찾아보고 이해한 다음 보시면 좋습니다.

## 환경과 조건
* OS는 **Ubuntu 22.04.1 LTS**를 이용합니다.
* 하드웨어 요구사항은 다음과 같습니다.
  - CPU: 최신 CPU라면 동작합니다. AMD64 (x86-x64), ARM64 모두에 대해 이용 가능합니다.
  - RAM: Vite 도입 등으로 빌드에 필요한 RAM 양이 줄어듦에 따라, 1.5GB 수준에서도 충분히 작동합니다.
* 도메인을 직접 구매하고, CloudFlare를 사용해 연결합니다.
  - 설명을 따라오기 전에 도메인을 미리 구입해 주십시오.
  - 여기선 도메인을 `example.tld`로 설명합니다. 프로덕션 환경일 경우 자신이 구입한 도메인, 개발 환경의 경우 `localhost`로 적절히 대체해 읽어 주세요.

::: danger
일단 사용하기 시작한 서버의 도메인 및 호스트 이름은 절대로 변경하지 마십시오!
:::

## nano 사용법
텍스트 편집기로는 nano를 사용합니다. nano 실행은 다음과 같이 합니다.

```sh
nano /path/to/file
```

커서는 화살표 버튼이나 Home/End 등으로 이동할 수 있습니다.

nano 편집기는 Ctrl+X로 종료하며, 변경 사항을 저장할지 물어오면 Y를 입력하고 Enter를 눌러 저장할 수 있습니다.

하단에 명령어 예시가 표시되니, ^를 Crtl, M-를 Alt로 바꿔 참고하면 됩니다.

## 사용자 생성
Misskey는 root로 실행하지 않는 것이 좋으니, 전용 사용자를 생성해 줍시다.

```sh
sudo adduser --disabled-password --disabled-login misskey
```

::: tip
개발 환경이라면 설정할 필요가 없습니다.
:::

## 기본 소프트웨어 설치 및 설정
기본적인 소프트웨어를 설치합니다.

### Node.js
Node.js는 서버 측 자바스크립트 환경으로 미스키의 기본 실행 환경입니다.

```sh
sudo apt install -y curl

curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install -y nodejs

# Node.js가 설치되었으므로 버전을 확인합니다.
node -v

# corepack enable
sudo corepack enable
```

v20.x.x 등으로 표시되면 OK.  
v8.x.x와 같이 낮은 버전이 표시되면 제대로 설치되지 않은 것이므로 시스템을 재부팅하고 다시 설치하는 등의 조치를 취해 봅시다.

### PostgreSQL
PostgreSQL은 객체 관계형 데이터베이스 관리 시스템입니다. 미스키의 각종 데이터를 저장하는 데 필수적인 소프트웨어입니다.

#### 설치
쉘 스크립트를 실행하여 최신 버전(v15)을 설치해 봅시다.

```
sudo apt install -y postgresql-common

sudo sh /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -i -v 15

# systemctl로 데몬의 상태를 확인한다.
systemctl status postgresql
```

systemctl의 결과가 active이면 OK.

#### 사용자 및 데이터베이스 생성
:::danger
개발 환경이 아니라면, SQL 인젝션에 대비해 SQL 사용자, 비밀번호, DB 명칭 등을 다르게 설정하는 것이 좋습니다.
:::

psql을 실행합니다.

```sh
sudo -u postgres psql
```

Misskey에서 사용할 사용자를 생성합니다.  
사용자 이름을 misskey, 비밀번호를 hoge로 설정하면 다음과 같습니다.  
(리눅스 사용자와 PostgreSQL의 사용자는 별개이므로 혼동하지 않도록 주의)

```sql
CREATE ROLE misskey LOGIN CREATEDB PASSWORD 'hoge';
```

이어 데이터베이스를 생성합니다. 데이터베이스 이름을 mk1으로 설정합니다.

```sql
CREATE DATABASE mk1 OWNER misskey;
\q
```

### Redis
Redis는 NoSQL의 인메모리 데이터베이스 소프트웨어로, 데이터베이스 및 연합과의 통신 관리 등에 필요합니다.  
redis.io의 문서에 따라 설치합니다. https://redis.io/docs/getting-started/installation/install-redis-on-linux/

:::tip
이 부분의 shell은 Ubuntu를 기준으로 설명합니다. 다른 Linux 환경에서 구성하는 경우 redis.io에서 확인해 직접 설정해야 합니다.
:::

```sh
sudo apt install -y curl ca-certificates gnupg2 lsb-release
		
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/ apt/sources.list.d/redis.list

sudo apt update

sudo apt install -y redis
```

systemctl로 데몬의 상태를 확인합니다.

```sh
systemctl status redis-server
```

active이면 OK.

### nginx
nginx는 주로 리버스 프록시에 사용되는 웹 서버 소프트웨어로, Misskey에는 필수적인 것은 아닙니다.  
다만 캐시 등을 활용하는 경우 nginx를 사용하면 성능이 향상되고 http에서 https로 전송하는 등의 작업을 할 수 있습니다.

::: tip
개발 환경의 경우 nginx 설정이 필요하지 않습니다.
:::

nginx.org의 문서 http://nginx.org/en/linux_packages.html#Ubuntu 에 따라 설치합니다.

:::tip
이 부분의 shell은 Ubuntu를 기준으로 설명합니다. 다른 Linux 환경에서 구성하는 경우 nginx.org에서 확인해 직접 설정해야 합니다.
:::

```sh
sudo apt install ubuntu-keyring

curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```

이때 출력에 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62가 있는지 확인합니다.

```sh
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee / etc/apt/sources.list.d/nginx.list

echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | sudo tee /etc/apt/preferences.d/99nginx

sudo apt update

sudo apt install -y nginx
```

systemctl로 데몬 상태를 확인합니다.

```sh
systemctl status nginx
```

active이면 OK, 그렇지 않으면 다음 명령어를 실행해 줍니다.

```sh
sudo systemctl start nginx

sudo systemctl enable nginx
```

<http://localhost> 에 접속하여 \*Welcome to nginx!\*라고 표시되면 OK.
curl로 확인하는 것도 괜찮습니다.

```sh
curl http://localhost
```

### 기타
Git(버전 관리 프로그램) 및 build-essential(Misskey 빌드 시 필요)을 설치합니다.

```sh
sudo apt update

sudo apt install -y git build-essential
```

## 추가 설정 및 설치
서버를 인터넷에 공개할 준비를 합니다.

::: tip
개발 환경의 경우 방화벽, CloudFlare, Certbot 설정은 필요하지 않습니다.
:::

### 방화벽
이번에는 방화벽으로 ufw를 사용합니다.

다음에서는 접속 허용을 화이트리스트 형태로 설정하고, 22번 SSH 포트를 접속 횟수 제한을 두어 개방, 80번 HTTP 포트 및 443번 HTTPS 포트를 개방합니다.

```sh
sudo ufw enable

sudo ufw default deny

sudo ufw limit 22

sudo ufw allow 80

sudo ufw allow 443
```

ufw의 상태를 확인합니다.

```sh
sudo ufw status
```

이어 systemctl로 영구화합니다.

```sh
sudo systemctl enable ufw
```

::: tip
ufw는 netfilter(iptables)를 사람이 쉽게 조작할 수 있도록 하는 앱입니다.

설치 스크립트는 OCI 환경에서는 netfilter를 직접 조작합니다. 즉, ufw를 설치하지 않고 설치가 진행됩니다.
:::

### CloudFlare
CloudFlare는 자신의 도메인에 대해 DNS 서버, 리버스 프록시, CDN을 한 번에 제공해 주는 매우 편리한 서비스입니다.  
CloudFlare를 거치지 않고 서버를 공개하는 것도 가능하지만, 적용하는 것이 매우 편리하므로 도입하는 것을 추천합니다.
[**→ CDN 설정**](../../admin/cdn.html)

[CloudFlare에 가입](https://dash.cloudflare.com/sign-up)하고 구매한 도메인을 안내에 따라 등록합니다.

DNS 등록 화면에서 서버의 IP 주소를 입력하면 됩니다.  
도메인 구매처에 따라 최초 등록이 적용되는 데에 최대 3일 정도 소요될 수 있습니다.

### Certbot (Let's Encrypt) 설정하기
HTTPS WSS 통신에 사용할 인증서를 CloudFlare를 사용하는 방식으로 Let's Encrypt에서 발급받습니다.

우선, certbot과 CloudFlare 플러그인을 설치합니다.

```sh
sudo apt install -y certbot python3-certbot-dns-cloudflare
```

이어 Cloudflare의 API 키를 가져옵니다.

1. <https://dash.cloudflare.com/profile/api-tokens>에 접속합니다.
2. Global API Key의 View를 선택합니다.
3. 비밀번호를 입력하고 hCaptcha를 해제하고 View를 선택합니다.

이제 CloudFlare의 정보를 담은 설정 파일 /etc/cloudflare/cloudflare.ini를 생성합니다.

```sh
mkdir /etc/cloudflare
nano /etc/cloudflare/cloudflare.ini
```

dns_cloudflare_email(아래의 `bar@fuga.foo`)에 CloudFlare에 등록한 이메일 주소를 입력해 주세요.

```ini
dns_cloudflare_email = bar@fuga.foo
dns_cloudflare_api_key = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

이를 저장하고 권한을 600으로 설정해 줍니다.

```sh
sudo chmod 600 /etc/cloudflare/cloudflare/cloudflare.ini
```

준비가 되었으니 명령을 실행합니다. **중간에 있는 두 `example.tld`는 자신의 것으로 대체**합니다.

```sh
sudo certbot certonly --dns-cloudflare --dns-cloudflare-credentials /etc/cloudflare/cloudflare/cloudflare.ini --dns-cloudflare-propagation-seconds 60 --server https://acme-v02.api.letsencrypt.org/directory -d example.tld -d *.example.tld
```

\*Congratulations!\*라고 표시되면 OK. 생성된 .pem 파일의 경로는 나중에 사용할 것이므로 기록해 둡시다.

자동 업데이트 설정은 설치와 동시에 이루어지므로 불필요합니다.

## Misskey 설치
이것으로 사전 준비가 어느 정도 끝났으니 Misskey를 준비합시다.

우선 misskey 사용자로 변경합니다.

```sh
sudo su - misskey
```

Git으로 파일들을 가져옵니다.

```sh
git clone -b master https://github.com/misskey-dev/misskey.git --recurse-submodules

cd misskey

git checkout master
```

필요한 npm 패키지를 설치합니다.

```sh
NODE_ENV=production pnpm install --frozen-lockfile
```

:::tip
개발 환경이면 `NODE_ENV=production`을 붙일 필요가 없습니다.
:::

## Misskey 설정하기
### default.yml
설정 파일 .config/default.yml을 생성합니다.

```sh
nano .config/default.yml
```

다음 내용을 붙여넣고 적절히 고쳐 주세요. 설정값의 변경이 필요한 부분은 ●로, 지금까지의 흐름에서 설정한 값을 사용하는 부분은 〇로 표시합니다.

이 설정 파일은 YAML 형식으로 작성되어 있어 줄의 시작 부분의 띄어쓰기 등을 잘못하면 Misskey가 동작하지 않으므로 특히 주의해야 합니다.

설정할 수 있는 값과 작성 방법은 [.config/example.yml](https://github.com/syuilo/misskey/blob/develop/.config/example.yml)에 나와 있습니다.

::: tip
개발 환경의 경우 url은 `url: http://localhost:3000`로 지정하세요.
:::

```yml
# ● Misskey를 공개할 URL
url: https://example.tld/
# 포트를 3000으로 설정.
port: 3000

# ● PostgreSQL 설정. DB의 이름, 사용자, 비밀번호를 다르게 설정했다면 그걸 입력해 주세요.
db:
  host: localhost
  port: 5432
  db : mk1 # 〇 PostgreSQL의 데이터베이스 이름
  user: misskey # 〇 PostgreSQL의 사용자 이름
  pass: hoge # 〇 PostgreSQL의 비밀번호

# Redis 설정.
redis:
  host: localhost
  port: 6379

# ID 타입 설정.
id: 'aid'

# syslog
syslog:
  host: localhost
  port: 514
```

완료되었다면 저장해 주세요.

### nginx 설정
nginx 설정은 루트 권한으로 진행합니다. 이를 위해 misskey 사용자에서 빠져나옵니다.

```sh
exit
```

`/etc/nginx/conf.d/misskey.conf`를 생성합니다.

```sh
sudo nano /etc/nginx/conf.d/misskey.conf
```

[Misskey Hub](https://misskey-hub.net/docs/admin/nginx.html)의 설정 예시를 nano에 복사하여 붙여넣고 다음 부분을 자신의 것으로 바꾼다.

* 18행과 30행의 도메인 이름
* 34~35행의 인증서 경로를 Certbot으로 취득한 인증서 경로로 (기본적으로 `example.tld`를 대체하면 됩니다)
* 56번째 줄 (`If it's behind another reverse proxy or CDN, remove the following.`) 에서 4줄을 삭제

변경 사항을 저장하고 설정이 제대로 작동하는지 확인합니다.

```sh
sudo nginx -t
```

OK라면 nginx 데몬을 재시작해 줍니다.

```sh
sudo systemctl restart nginx

sudo systemctl status nginx
```

`systemctl status`에서 active이면 OK.

## Misskey 빌드
misskey 사용자로 다시 로그인합니다.

```sh
sudo su - misskey
```

이제 Misskey를 빌드할 수 있습니다.

```sh
cd misskey
NODE_ENV=production pnpm run build
```

::: tip
개발 환경의 경우 `NODE_ENV=production`은 필요하지 않습니다. 이후 명령어에서도 마찬가지로 삭제해 주세요.
:::

### 서버에서 빌드할 수 없는 경우
RAM이 부족해서일 가능성이 큽니다.

Misskey 빌드 및 DB 이전/초기화 과정에는 Misskey 12까지는 2GB, Misskey 13부터는 1.5GB 이상의 남은 RAM 공간이 필요합니다.  
RAM이 이보다 부족하다면, 다음과 같은 과정을 생각해볼 수 있습니다.

* 서버에 swap을 추가
* 로컬에서 빌드한 것(`built` 디렉토리)을 sftp로 전송

## 데이터베이스 초기화
```sh
pnpm run init
```

## Misskey 실행하기
```sh
NODE_ENV=production pnpm run start
```

**Now listening on port 3000 on** __**http://example.tld**__이라고 표시되면 설정한 URL로 접속합니다.  
Misskey의 Welcome 페이지가 표시될 것입니다.

계정 생성, 노트 작성, 파일 업로드 등 일련의 작업이 정상적으로 진행되는지 확인해 줍시다.

### 접속이 안 되는 경우
#### CloudFlare의 DNS를 확인한다.
CloudFlare의 DNS 설정이 올바른 IP 주소로 설정되어 있는지 다시 한 번 확인해 주세요.

#### 라우터 설정 확인
홈 서버의 경우, 라우터가 서버와 외부의 80, 443 포트의 통신을 허용하도록 설정되어 있는지 확인해 주세요.  
클라우드의 경우에도 네트워크 설정에서 포트를 직접 열어야 하는 경우가 많습니다.

## Misskey 데몬 생성
::: tip
개발 환경의 경우, 데몬 생성은 필요하지 않습니다.
:::

일단 `Ctrl+C`로 프로세스를 종료하고, Misskey를 데몬으로 실행하도록 설정합니다.
root 권한으로 설정합니다.

```sh
exit
```

`/etc/systemd/system/misskey.service`를 생성합니다.

```sh
sudo nano /etc/systemd/system/misskey.service
```

다음 내용을 붙여넣고 저장합니다.

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

systemd를 설정하고 misskey 데몬을 시작합니다.

```sh
sudo systemctl daemon-reload

sudo systemctl enable misskey

sudo systemctl start misskey
```

systemctl로 데몬의 상태를 확인합니다. 시작에 시간이 조금 걸리므로 15초 정도 기다렸다가 확인하는 것이 좋습니다.

```sh
sudo systemctl status misskey
```

active이면 OK.

**이것으로 Misskey 설치가 거의 완료되었습니다.**

Misskey 서버에 자신의 계정을 등록하고 로그인하여 설정을 계속해 봅시다.

## Misskey 설정 계속하기
* [**Misskey 서버에서 가장 먼저 설정해야 할 서버 설정 및 기타 설정에 대한 설명**](https://hide.ac/articles/Y504SIabp)
* [**Squid 프록시를 설정하여 Misskey를 보호하세요**](https://hide.ac/articles/MC7WsPDqw)
* [**Misskey의 데이터베이스를 백업하자【OCI 오브젝트 스토리지 편】**](https://hide.ac/articles/E2Ea3cauk)

## Misskey 업데이트
[→ manual.html #Misskey 업데이트 방법](https://misskey-hub.net/docs/install/manual.html#misskey%E3%81%AE%E3%82%A2%E3%83%83%E3%83%95%E3%82 %9A%E3%83%86%E3%82%99%E3%83%BC%E3%83%88%E6%96%B9%E6%B3%95)

작업 중에는 Misskey를 사용할 수 없습니다.

```sh
sudo systemctl stop misskey

su - misskey

git pull;
NODE_ENV=production pnpm install --frozen-lockfile
pnpm run clean;
NODE_ENV=production pnpm run build;
pnpm run migrate;

exit
```

### Case 1: apt upgrade를 하는 경우
```sh
sudo apt update -y
sudo apt full-upgrade -y
sudo reboot
```

재부팅 후 Misskey는 자동으로 실행됩니다.

### Case 2: 그대로 부팅
```sh
sudo systemctl start misskey
```
