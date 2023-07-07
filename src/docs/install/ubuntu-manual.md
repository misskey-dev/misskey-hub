# Ubuntu版Misskeyインストール方法詳説

## その他のMisskeyインストール方法

- [基本版 Misskey構築の手引き (manual.html)](./manual.html)
- [その他のインストール方法一覧](../install.html)

## シェルスクリプトのお知らせ

コピペばかりならシェルスクリプトでいいじゃん、と言うことで**シェルスクリプトでほぼ全部やってくれるやつを作ってみました！**\
[**シェルスクリプトの詳細と使用方法はこちらから！**](./bash.html)

::: tip
シェルスクリプトでの開発環境へのインストールは想定されていません。
:::

::: tip
ドメインの購入とCloudflareのセットアップ、サーバーの確保についてはご自身でご準備ください。
:::

不具合があれば[ @aqz@p1.a9z.dev へのメンション](https://p1.a9z.dev/@aqz)にてお知らせいただければと思います。

## この記事について

この記事では、[Misskey構築の手引き (manual.html)](./manual.html)で紹介されている通り、systemdでMisskeyを動作させています。

[docker-compose](./docker.html)なら、手作業でももうちょっと簡単に実行できるはずです。

::: danger
一度使用を始めたサーバーのドメイン・ホスト名は、決して変更しないでください！
:::

## はじめに

この記事では、[Misskey構築の手引き (manual.html)](./manual.html)を基に、一般的なUbuntuサーバーへMisskeyをインストールし公開する方法の一挙手一投足を解説する。

Bashのコマンド入力、いくつかの設定ファイルの編集、そしてブラウザの操作だけで設定が完了するようにしている。インストールするソフトウェアについて簡単に説明しているが、気にする必要はない。

この記事では、具体性を重視し、特定の環境に特化した記述をしている。

OSの違い、Misskey本体や依存するソフトウェアのバージョンアップで変わってしまった部分等があるかもしれないが、ご容赦いただきたく思う。

わからない単語については、[『「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典』](https://wa3.i-3-i.info/) で調べて分かった気になってほしい。

## 環境と条件

*   OSは**Ubuntu 22.04.1 LTS**を利用する。
*   ハードウェア要件としては、CPUは最近のものなら最小限で動く。アーキテクチャはamd64及びarm64を想定している。
*   メモリは1.5GB程度あればよい。（Viteの導入等により、1.5GB程度でもビルド可能になった）
*   独自のドメインを購入し、CloudFlareを使用する。
*   ドメインは[Google Domains](https://domains.google/intl/ja_jp/)などで予め用意しておくこと。
*   ここではドメインをexample.tldとして解説を進めるので、自分が買ったドメインに適宜置き換えて読むこと。開発環境の場合はlocalhostと読み替えます（設定ファイルの項で別途説明）

::: danger
一度使用を始めたサーバーのドメイン・ホスト名は、決して変更しないでください！
:::

## nanoの使い方

今回はテキストエディターにnanoを使う。次のように起動する。

```sh
nano /path/to/file
```

一般的な矢印ボタンやHome/Endなどを利用してカーソルを移動できる。

終了はCtrl+Xで、変更を保存するか聞かれた場合Y(Yes)を入力しEnterすると保存できる。

下部にコマンド一覧が表示されるので、^をCtrl、M-をAltと読み替えて参考にしよう。

## ユーザーの作成

Misskeyはrootで実行しない方がよいため、専用のユーザーを作成する。

```
sudo adduser --disabled-password --disabled-login misskey
```

::: tip
開発環境の場合はユーザーを分ける必要はありません
:::

## 基本的なソフトウェアのインストールと設定

基本的なソフトウェアのインストールを行う。

### Node.js

Node.jsは、サーバーサイドJavaScript環境であり、Misskeyの基本的な実行環境である。

```sh
sudo apt install -y curl

curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install -y nodejs

# Node.jsがインストールされたので、バージョンを確認する。
node -v

# corepack enable
sudo corepack enable
```

v20.x.xなどと表示されればOK。v8.x.xのように低いバージョンが表示された場合は、正しくインストールが行えていないため、サーバーを再起動してもう一度インストールし直すなどしてみよう。

### PostgreSQL

PostgreSQLは、オブジェクト関係データベース管理システムであり、Misskeyの種々のデータを保存するために必要不可欠なソフトだ。

#### インストール

シェルスクリプトを実行し、最新バージョン（v15）をインストールしよう。

```
sudo apt install -y postgresql-common

sudo sh /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -i -v 15;

# systemctlでデーモンの状態を確認。
systemctl status postgresql
```

activeならOK。

#### ユーザーとデータベースの作成

psqlを起動。

```sh
sudo -u postgres psql
```

Misskeyで使うユーザーを作成する。\
ユーザー名をmisskey、パスワードをhogeとする場合は次のようになる。\
（LinuxのユーザーとPostgreSQLのユーザーは別物なので、混同しないよう注意すること。）

```sql
CREATE ROLE misskey LOGIN CREATEDB PASSWORD 'hoge';
```

データベースを作成。データベース名をmk1としている。

```sql
CREATE DATABASE mk1 OWNER misskey;
¥q
```

### Redis

Redisは、NoSQLのインメモリデータベースソフトであり、データベースや連合との通信を管理するなどのために必要だ。
redis.ioのドキュメントに従いインストールする。 https://redis.io/docs/getting-started/installation/install-redis-on-linux/

```sh
sudo apt install -y curl ca-certificates gnupg2 lsb-release

curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt update

sudo apt install -y redis
```

systemctlでデーモンの状態を確認。

```sh
systemctl status redis-server
```

activeならOK。

### nginx

nginxは、主としてリバースプロキシに用いられるWebサーバーソフトである。Misskeyには必須ではないが、キャッシュ等をするとパフォーマンスが向上したり、httpからhttpsへの転送などをするために、インストールしておこう。

::: tip
開発環境の場合はnginxのセットアップは不要です
:::

nginx.orgのドキュメント http://nginx.org/en/linux_packages.html#Ubuntu に従ってインストールする。

```sh
sudo apt install ubuntu-keyring

curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```

このとき出力に 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 とあるか確認する。

```sh
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list

echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" | sudo tee /etc/apt/preferences.d/99nginx

sudo apt update

sudo apt install -y nginx
```

systemctlでデーモンの状態を確認。

```sh
systemctl status nginx
```

activeならOK。そうでなければ、次のコマンドを実行。

```sh
sudo systemctl start nginx

sudo systemctl enable nginx
```

<http://localhost> にアクセスし、\*Welcome to nginx!\*と表示されればOK。\
curlで確認するのもよいだろう。

```sh
curl http://localhost
```

### その他

Git（バージョン管理ソフト）およびbuild-essential（Misskeyのビルド時に必要）をインストールする。

```sh
sudo apt update

sudo apt install -y git build-essential
```

## 追加の設定とインストール

サーバーをインターネットに公開する準備をする。

::: tip
開発環境の場合はファイヤーウォールやCloudFlare、Certbotの設定は不要です
:::

### ファイヤーウォール

今回は、ファイヤーウォールとしてufwを使用する。

次では、接続許可をホワイトリスト形式とし、22番SSHポートを接続回数制限を設けながら開放、80番HTTPポート及び443番HTTPSポートを開放とした。

```sh
sudo ufw enable

sudo ufw default deny

sudo ufw limit 22

sudo ufw allow 80

sudo ufw allow 443
```

ufwのステータスを確認しておく。

```sh
sudo ufw status
```

systemctlで永続化する。

```sh
sudo systemctl enable ufw
```

::: tip
ufwは、netfilter(iptables)を人間が操作しやすいようにするアプリだ。インストールスクリプトは、OCI環境ではnetfilterを直接操作する。
:::

### CloudFlare

CloudFlareは、自分のドメインに対してDNSサーバー・リバースプロキシ・CDNをいっぺんに提供してくれるたいへん便利なサービスである。\
CloudFlareを経由せずにサーバーを公開することも可能だが、たいへん便利なので導入することをお勧めする。
[**→ CDNの設定**](/docs/admin/cdn.html)

[CloudFlareにサインアップ](https://dash.cloudflare.com/sign-up) し、購入したドメインを案内に従って登録する。

DNSの登録画面でサーバーのIPアドレスを入力しておくとよい。

ドメインを購入した所によっては適用に3日程度かかる場合がある。

### Certbot (Let’s Encrypt) の設定

HTTPS･WSS通信に使用する証明書をCloudFlareを使う方式でLet’s Encryptから取得する。

certbotとCloudFlareプラグインをインストール

```sh
sudo apt install -y certbot python3-certbot-dns-cloudflare
```

CloudflareのAPIキーを取得する。以下の手順で取得されたい。

1.  <https://dash.cloudflare.com/profile/api-tokens> にアクセス
2.  Global API KeyのViewを選択
3.  パスワードを入力しhCaptchaを解除、Viewを選択

CloudFlareの情報を記載した設定ファイル/etc/cloudflare/cloudflare.iniを作成する。

```sh
mkdir /etc/cloudflare
nano /etc/cloudflare/cloudflare.ini
```

dns_cloudflare_email（下の例ではbar@fuga.foo）にはCloudFlareで登録しているメールアドレスを設定する。

```sh
dns_cloudflare_email = bar@fuga.foo
dns_cloudflare_api_key = xxxxxxxxxxxxxxxxxxxxxxxxxx
```

これを保存し、パーミッションを600に設定。

```sh
sudo chmod 600 /etc/cloudflare/cloudflare.ini
```

準備ができたのでコマンドを実行する。**途中の2箇所のexample.tldは自分のものに置き換えること**。

```sh
sudo certbot certonly --dns-cloudflare --dns-cloudflare-credentials /etc/cloudflare/cloudflare.ini --dns-cloudflare-propagation-seconds 60 --server https://acme-v02.api.letsencrypt.org/directory -d example.tld -d *.example.tld
```

\*Congratulations!\*と表示されたらOK。生成された.pemファイルのパスは今後使うので記録しておくこと。

自動更新の設定はインストールと同時に行われているため不要。

## Misskeyのインストール

これで前準備はあらかた終わったので、Misskeyを準備していく。

misskeyユーザーに変更。

```sh
sudo su - misskey
```

Gitでファイル類を展開。

```sh
git clone -b master https://github.com/misskey-dev/misskey.git --recurse-submodules

cd misskey

git checkout master
```

必要なnpmパッケージをインストール。

```sh
NODE_ENV=production pnpm install --frozen-lockfile
```

## Misskeyを設定する

### default.yml

設定ファイル.config/default.ymlを作成。

```sh
nano .config/default.yml
```

次の内容を貼り付け、適宜置き換える。設定値の変更が必要な箇所は●で、これまでの流れの中で設定した値を用いる箇所は〇で示した。

この設定ファイルはYAML形式で書かれており、行頭のスペースの数などを間違えるとMisskeyが動かないので、特に注意すること。

設定できる値と記述方法は[.config/example.yml](https://github.com/syuilo/misskey/blob/develop/.config/example.yml)に書かれている。

::: tip
開発環境の場合、urlは`url: http://localhost:3000`と指定します。
:::

```yml
# ● Misskeyを公開するURL
url: https://example.tld/
# ポートを3000とする。
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
```

指定できたら保存する。

### nginxの設定

nginxの設定を行う。

ルート権限で行う。

```sh
exit
```

/etc/nginx/conf.d/misskey.confを作成する。

```sh
sudo nano /etc/nginx/conf.d/misskey.conf
```

[Misskey Hub](https://misskey-hub.net/docs/admin/nginx.html)の設定例をnanoへコピー＆ペーストし、次の部分を自分のものに書き換える。

*   18行目と30行目のドメイン名
*   34-35行目の証明書へのパスをCertbotで取得したものに (基本的にexample.tldを置き換えるだけでOK)
*   56行目 (If it's behind another reverse proxy or CDN, remove the following.) から4行を削除

変更を保存する。

設定ファイルがきちんと機能するか確認。

```sh
sudo nginx -t
```

OKならば、nginxデーモンを再起動。

```sh
sudo systemctl restart nginx
```

ステータスを確認。

```sh
sudo systemctl status nginx
```

activeであればOK。

## Misskeyのビルド

misskeyユーザーにログインし直す。

```sh
sudo su - misskey
```

ビルドをする。yes we can…

```sh
cd misskey
NODE_ENV=production pnpm run build
```

::: tip
開発環境の場合、`NODE_ENV=production`は不要です。以降のコマンドでも同様に削除してください。
:::

### サーバーでビルドできない場合

RAMの不足が考えられる。

Misskeyのビルドやデータベースのマイグレーション（初期化を含む）には、RAMが2GB以上必要になっている。\
RAMが足りない場合、以下のような解決策が考えられる。

*   サーバーにスワップを追加する
*   ローカルでビルドしたもの（builtディレクトリ）をsftpで転送する

## データベースの初期化

```sh
pnpm run init
```

## Misskeyを起動する

```sh
NODE_ENV=production pnpm run start
```

**Now listening on port 3000 on** [**http://example.tld**](http://example.tld) と表示されたら、設定したURLにアクセスする。

Misskeyのウェルカムページが表示されるはずだ。

アカウントの作成、ノートの作成やファイルのアップロードといった一通りの操作が正しく行えるか確認しよう。

### アクセスできない場合

#### CloudFlareのDNSを確認する

CloudFlareのDNS設定が正しいIPアドレスになっているかもう一度確認しよう。

#### ルーターの設定を確認する

自宅サーバーの場合、ルーターがサーバーと外部との80ポート・443ポートの通信を許可する設定になっているかどうか確認しよう。

クラウドの場合でも、ネットワーク設定でポート開放が必要な場合が多い。

## Misskeyのデーモンを作成

::: tip
開発環境の場合、デーモンの作成は不要です。
:::

いったんCtrl+Cでプロセスをキルし、Misskeyをデーモンで起動する設定をしよう。

ルート権限で行う。

```sh
exit
```

/etc/systemd/system/misskey.serviceを作成する。

```sh
sudo nano /etc/systemd/system/misskey.service
```

次の内容を貼り付け、保存する。

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

systemdを設定し、misskeyデーモンを開始。

```sh
sudo systemctl daemon-reload

sudo systemctl enable misskey

sudo systemctl start misskey
```

systemctlでデーモンの状態を確認。起動に少し時間がかかるため、15秒程度待ってからのほうが良い。

```sh
sudo systemctl status misskey
```

activeならOK。

**これでMisskeyのインストールはほぼ完了だ。**

Misskeyサーバーに自分のアカウントを登録・ログインし、設定を続けよう。

## Misskeyの設定を続ける

*   [**Misskeyサーバーで最初に設定するべきサーバー設定とその他設定の説明**](https://hide.ac/articles/Y504SIabp)
*   [**Squidプロキシを設定してMisskeyを守る**](https://hide.ac/articles/MC7WsPDqw)
*   [**Misskeyのデータベースをバックアップしよう【OCIオブジェクトストレージ編】**](https://hide.ac/articles/E2Ea3cauk)

## Misskeyのアップデート

[→ manual.html#Misskeyのアップデート方法](https://misskey-hub.net/docs/install/manual.html#misskey%E3%81%AE%E3%82%A2%E3%83%83%E3%83%95%E3%82%9A%E3%83%86%E3%82%99%E3%83%BC%E3%83%88%E6%96%B9%E6%B3%95)

作業中はMisskeyを使うことができません。

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

### Case 1: apt upgradeをする場合

```sh
sudo apt update -y
sudo apt full-upgrade -y
sudo reboot
```

再起動後はMisskeyは自動で起動します。

### Case 2: そのまま起動

```sh
sudo systemctl start misskey
```
