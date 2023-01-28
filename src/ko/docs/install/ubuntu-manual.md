# Ubuntu 版 Misskey インストール方法詳説

::: info
이 문서는 아직 영문/국문으로 번역되지 않았습니다. 따라서 이 페이지는 일본어로 표시됩니다.
:::

## その他の Misskey インストール方法

- [基本版 Misskey 構築の手引き (manual.html)](./manual)
- [その他のインストール方法一覧](../install)

## シェルスクリプトのお知らせ

コピペばかりでつまらない！時間がかかる！とにかく面倒！  
……あれ、コピペだけでできるなら、完全自動化できるのでは？

というわけで、**シェルスクリプトでほぼ全部やってくれるやつを作ってみました！**\
[**詳細と使用方法はこちらから！**](./bash.html)

::: tip
シェルスクリプトでの開発環境へのインストールは想定されていません。
:::

::: tip
ドメインの購入と Cloudflare のセットアップ、サーバーの確保についてはご自身でご準備ください。
:::

不具合があれば[ @aqz@p1.a9z.dev へのメンション](https://p1.a9z.dev/@aqz)にてお知らせいただければと思います。

## この記事について

この記事では、[Misskey 構築の手引き (manual.html)](./manual.html)で紹介されている通り、systemd で Misskey を動作させています。

[docker-compose](./docker.html)なら、手作業でももうちょっと簡単に実行できるはずです。

## はじめに

この記事では、[Misskey 構築の手引き (manual.html)](./manual.html)を基に、一般的な Ubuntu サーバーへ Misskey をインストールし公開する方法の一挙手一投足を解説する。

Bash のコマンド入力、いくつかの設定ファイルの編集、そしてブラウザの操作だけで設定が完了するようにしている。インストールするソフトウェアについて簡単に説明しているが、気にする必要はない。

大まかな流れは上の**目次**をクリックし展開することで確認できる。

この記事では、具体性を重視し、特定の環境に特化した記述をしている。

OS の違い、Misskey 本体や依存するソフトウェアのバージョンアップで変わってしまった部分等があるかもしれないが、ご容赦いただきたく思う。

わからない単語については、[『「分かりそう」で「分からない」でも「分かった」気になれる IT 用語辞典』](https://wa3.i-3-i.info/) で調べて分かった気になってほしい。

## 環境と条件

- OS は**Ubuntu 22.04.1 LTS**を利用する。
- ハードウェア要件としては、CPU は最近のものなら最小限で動く。アーキテクチャは amd64 及び arm64 を想定している。
- メモリは 1.5GB 程度あればよい。（Vite の導入等により、1.5GB 程度でもビルド可能になった）
- 独自のドメインを購入し、CloudFlare を使用する。
- ドメインは[Google Domains](https://domains.google/intl/ja_jp/)などで予め用意しておくこと。
- ここではドメインを example.tld として解説を進めるので、自分が買ったドメインに適宜置き換えて読むこと。開発環境の場合は localhost と読み替えます（設定ファイルの項で別途説明）

## nano の使い方

今回はテキストエディターに nano を使う。次のように起動する。

    nano /path/to/file

一般的な矢印ボタンや Home/End などを利用してカーソルを移動できる。

終了は Ctrl+X で、変更を保存するか聞かれた場合 Y(Yes)を入力し Enter すると保存できる。

下部にコマンド一覧が表示されるので、^を Ctrl、M-を Alt と読み替えて参考にしよう。

## ユーザーの作成

Misskey は root で実行しない方がよいため、専用のユーザーを作成する。

    sudo adduser --disabled-password --disabled-login misskey

::: tip
開発環境の場合はユーザーを分ける必要はありません
:::

## 基本的なソフトウェアのインストールと設定

基本的なソフトウェアのインストールを行う。

### Node.js

Node.js は、サーバーサイド JavaScript 環境であり、Misskey の基本的な実行環境である。

    sudo apt install -y curl

    curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -

    sudo apt install -y nodejs

    # Node.jsがインストールされたので、バージョンを確認する。
    node -v

v18.x.x などと表示されれば OK。v8.x.x のように低いバージョンが表示された場合は、正しくインストールが行えていないため、サーバーを再起動してもう一度インストールし直すなどしてみよう。

### PostgreSQL

PostgreSQL は、オブジェクト関係データベース管理システムであり、Misskey の種々のデータを保存するために必要不可欠なソフトだ。

#### インストール

シェルスクリプトを実行し、最新バージョン（v15）をインストールしよう。

    sudo apt install -y postgresql-common

    sudo sh /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -i -v 15;

    # systemctlでデーモンの状態を確認。
    systemctl status postgresql

active なら OK。

#### ユーザーとデータベースの作成

psql を起動。

    sudo -u postgres psql

Misskey で使うユーザーを作成する。\
ユーザー名を misskey、パスワードを hoge とする場合は次のようになる。\
（Linux のユーザーと PostgreSQL のユーザーは別物なので、混同しないよう注意すること。）

    CREATE ROLE misskey LOGIN CREATEDB PASSWORD 'hoge';

データベースを作成。データベース名を mk1 としている。

    CREATE DATABASE mk1 OWNER misskey;
    ¥q

### Redis

Redis は、NoSQL のインメモリデータベースソフトであり、データベースや連合との通信を管理するなどのために必要だ。  
redis.io のドキュメントに従いインストールする。 https://redis.io/docs/getting-started/installation/install-redis-on-linux/

    sudo apt install -y curl ca-certificates gnupg2 lsb-release

    curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

    echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

    sudo apt update

    sudo apt install -y redis

systemctl でデーモンの状態を確認。

    systemctl status redis-server

active なら OK。

### nginx

nginx は、主としてリバースプロキシに用いられる Web サーバーソフトである。Misskey には必須ではないが、キャッシュ等をするとパフォーマンスが向上したり、http から https への転送などをするために、インストールしておこう。

::: tip
開発環境の場合は nginx のセットアップは不要です
:::

nginx.org のドキュメント http://nginx.org/en/linux_packages.html#Ubuntu に従ってインストールする。

    sudo apt install ubuntu-keyring

    curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

    gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

このとき出力に 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 とあるか確認する。

    echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list

    echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | sudo tee /etc/apt/preferences.d/99nginx

    sudo apt update

    sudo apt install -y nginx

systemctl でデーモンの状態を確認。

    systemctl status nginx

active なら OK。そうでなければ、次のコマンドを実行。

    sudo systemctl start nginx

    sudo systemctl enable nginx

<http://localhost> にアクセスし、\*Welcome to nginx!\*と表示されれば OK。\
curl で確認するのもよいだろう。

    curl http://localhost

### その他

Git（バージョン管理ソフト）および build-essential（Misskey のビルド時に必要）をインストールする。

    sudo apt update

    sudo apt install -y git build-essential

## 追加の設定とインストール

サーバーをインターネットに公開する準備をする。

::: tip
開発環境の場合はファイヤーウォールや CloudFlare、Certbot の設定は不要です
:::

### ファイヤーウォール

今回は、ファイヤーウォールとして ufw を使用する。

次では、接続許可をホワイトリスト形式とし、22 番 SSH ポートを接続回数制限を設けながら開放、80 番 HTTP ポート及び 443 番 HTTPS ポートを開放とした。

    sudo ufw enable

    sudo ufw default deny

    sudo ufw limit 22

    sudo ufw allow 80

    sudo ufw allow 443

ufw のステータスを確認しておく。

    sudo ufw status

systemctl で永続化する。

    sudo systemctl enable ufw

::: tip
ufw は、netfilter(iptables)を人間が操作しやすいようにするアプリだ。インストールスクリプトは、OCI 環境では netfilter を直接操作する。
:::

### CloudFlare

CloudFlare は、自分のドメインに対して DNS サーバー・リバースプロキシ・CDN をいっぺんに提供してくれるたいへん便利なサービスである。\
CloudFlare を経由せずにサーバーを公開することも可能だが、たいへん便利なので導入することをお勧めする。
[**→ CDN の設定**](/docs/admin/cdn.html)

[CloudFlare にサインアップ](https://dash.cloudflare.com/sign-up) し、購入したドメインを案内に従って登録する。

DNS の登録画面でサーバーの IP アドレスを入力しておくとよい。

ドメインを購入した所によっては適用に 3 日程度かかる場合がある。

### Certbot (Let’s Encrypt) の設定

HTTPS･WSS 通信に使用する証明書を CloudFlare を使う方式で Let’s Encrypt から取得する。

certbot と CloudFlare プラグインをインストール

    sudo apt install -y certbot python3-certbot-dns-cloudflare

Cloudflare の API キーを取得する。以下の手順で取得されたい。

1.  <https://dash.cloudflare.com/profile/api-tokens> にアクセス
2.  Global API Key の View を選択
3.  パスワードを入力し hCaptcha を解除、View を選択

CloudFlare の情報を記載した設定ファイル/etc/cloudflare/cloudflare.ini を作成する。

    mkdir /etc/cloudflare
    nano /etc/cloudflare/cloudflare.ini

dns_cloudflare_email（下の例ではbar@fuga.foo）には CloudFlare で登録しているメールアドレスを設定する。

    dns_cloudflare_email = bar@fuga.foo
    dns_cloudflare_api_key = xxxxxxxxxxxxxxxxxxxxxxxxxx

これを保存し、パーミッションを 600 に設定。

    sudo chmod 600 /etc/cloudflare/cloudflare.ini

準備ができたのでコマンドを実行する。**途中の 2 箇所の example.tld は自分のものに置き換えること**。

    sudo certbot certonly --dns-cloudflare --dns-cloudflare-credentials /etc/cloudflare/cloudflare.ini --dns-cloudflare-propagation-seconds 60 --server https://acme-v02.api.letsencrypt.org/directory -d example.tld -d *.example.tld

\*Congratulations!\*と表示されたら OK。生成された.pem ファイルのパスは今後使うので記録しておくこと。

自動更新の設定はインストールと同時に行われているため不要。

## Misskey のインストール

これで前準備はあらかた終わったので、Misskey を準備していく。

misskey ユーザーに変更。

    sudo su - misskey

Git でファイル類を展開。

    git clone -b master https://github.com/misskey-dev/misskey.git

    cd misskey

    git checkout master

必要な npm パッケージをインストール。

    npx yarn install

## Misskey を設定する

### default.yml

設定ファイル.config/default.yml を作成。

    nano .config/default.yml

次の内容を貼り付け、適宜置き換える。設定値の変更が必要な箇所は ● で、これまでの流れの中で設定した値を用いる箇所は〇で示した。

この設定ファイルは YAML 形式で書かれており、行頭のスペースの数などを間違えると Misskey が動かないので、特に注意すること。

設定できる値と記述方法は[.config/example.yml](https://github.com/syuilo/misskey/blob/develop/.config/example.yml)に書かれている。

::: tip
開発環境の場合、url は`url: http://localhost:3000`と指定します。
:::

    # ● Misskeyを公開するURL
    url: https://example.tld/

    # 　 ポートを3000とする。
    port: 3000

    # ● PostgreSQLの設定。
    db:
      host: localhost
      port: 5432
      db  : mk1 # 〇 PostgreSQLのデータベース名
      user: misskey # 〇 PostgreSQLのユーザー名
      pass: hoge # ● PostgreSQLのパスワード

    # 　 Redisの設定。
    redis:
      host: localhost
      port: 6379

    # 　 IDタイプの設定。
    id: 'aid'

    # 　 syslog
    syslog:
      host: localhost
      port: 514

指定できたら保存する。

### nginx の設定

nginx の設定を行う。

ルート権限で行う。

    exit

/etc/nginx/conf.d/misskey.conf を作成する。

    sudo nano /etc/nginx/conf.d/misskey.conf

[Misskey Hub](https://misskey-hub.net/docs/admin/nginx.html)の設定例を nano へコピー＆ペーストし、次の部分を自分のものに書き換える。

- 18 行目と 30 行目のドメイン名
- 34-35 行目の証明書へのパスを Certbot で取得したものに (基本的に example.tld を置き換えるだけで OK)
- 56 行目 (If it's behind another reverse proxy or CDN, remove the following.) から 4 行を削除

変更を保存する。

設定ファイルがきちんと機能するか確認。

    sudo nginx -t

OK ならば、nginx デーモンを再起動。

    sudo systemctl restart nginx

ステータスを確認。

    sudo systemctl status nginx

active であれば OK。

## Misskey のビルド

misskey ユーザーにログインし直す。

    sudo su - misskey

ビルドをする。yes we can…

    cd misskey
    NODE_ENV=production npm run build

::: tip
開発環境の場合、`NODE_ENV=production`は不要です。以降のコマンドでも同様に削除してください。
:::

### サーバーでビルドできない場合

RAM の不足が考えられる。

Misskey のビルドやデータベースのマイグレーション（初期化を含む）には、RAM が 2GB 以上必要になっている。\
RAM が足りない場合、以下のような解決策が考えられる。

- サーバーにスワップを追加する
- ローカルでビルドしたもの（built ディレクトリ）を sftp で転送する

## データベースの初期化

    npm run init

## Misskey を起動する

    NODE_ENV=production npx yarn start

**Now listening on port 3000 on** [**http://example.tld**](http://example.tld) と表示されたら、設定した URL にアクセスする。

Misskey のウェルカムページが表示されるはずだ。

アカウントの作成、ノートの作成やファイルのアップロードといった一通りの操作が正しく行えるか確認しよう。

### アクセスできない場合

#### CloudFlare の DNS を確認する

CloudFlare の DNS 設定が正しい IP アドレスになっているかもう一度確認しよう。

#### ルーターの設定を確認する

自宅サーバーの場合、ルーターがサーバーと外部との 80 ポート・443 ポートの通信を許可する設定になっているかどうか確認しよう。

クラウドの場合でも、ネットワーク設定でポート開放が必要な場合が多い。

## Misskey のデーモンを作成

::: tip
開発環境の場合、デーモンの作成は不要です。
:::

いったん Ctrl+C でプロセスをキルし、Misskey をデーモンで起動する設定をしよう。

ルート権限で行う。

    exit

/etc/systemd/system/misskey.service を作成する。

    sudo nano /etc/systemd/system/misskey.service

次の内容を貼り付け、保存する。

    [Unit]
    Description=Misskey daemon

    [Service]
    Type=simple
    User=misskey
    ExecStart=/usr/bin/npm start
    WorkingDirectory=/home/misskey/misskey
    Environment="NODE_ENV=production"
    TimeoutSec=60
    StandardOutput=syslog
    StandardError=syslog
    SyslogIdentifier=misskey
    Restart=always

    [Install]
    WantedBy=multi-user.target

systemd を設定し、misskey デーモンを開始。

    sudo systemctl daemon-reload

    sudo systemctl enable misskey

    sudo systemctl start misskey

systemctl でデーモンの状態を確認。起動に少し時間がかかるため、15 秒程度待ってからのほうが良い。

    sudo systemctl status misskey

active なら OK。

**これで Misskey のインストールはほぼ完了だ。**

Misskey サーバーに自分のアカウントを登録・ログインし、設定を続けよう。

## Misskey の設定を続ける

- [**Misskey インスタンスで最初に設定するべきインスタンス設定とその他設定の説明**](https://hide.ac/articles/Y504SIabp)
- [**Squid プロキシを設定して Misskey を守る**](https://hide.ac/articles/MC7WsPDqw)
- [**Misskey のデータベースをバックアップしよう【OCI オブジェクトストレージ編】**](https://hide.ac/articles/E2Ea3cauk)

## Misskey のアップデート

アップデートについてもシェルスクリプトがあります。\
<https://github.com/joinmisskey/bash-install/blob/main/update.systemd.sh>

手作業でやる場合は次の通りです。\
[→ manual.html#Misskey のアップデート方法 (yarn は npx yarn に読み替えます)](https://misskey-hub.net/docs/install/manual.html#misskey%E3%81%AE%E3%82%A2%E3%83%83%E3%83%95%E3%82%9A%E3%83%86%E3%82%99%E3%83%BC%E3%83%88%E6%96%B9%E6%B3%95)

作業中は Misskey を使うことができません。

    sudo systemctl stop misskey

    su - misskey

    git pull;
    npx yarn install;
    npm run clean;
    NODE_ENV=production npm run build;
    npm run migrate;

    exit

### Case 1: apt upgrade をする場合

    sudo apt update -y
    sudo apt full-upgrade -y
    sudo reboot

再起動後は Misskey は自動で起動します。

### Case 2: そのまま起動

    sudo systemctl start misskey
