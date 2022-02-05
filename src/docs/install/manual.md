---
description: 'このガイドではMisskeyのインストール・セットアップ方法について解説します。'
---

Misskey構築の手引き
================================================================

このガイドではMisskeyのインストール・セットアップ方法について解説します。

::: tip 前提条件
以下のソフトウェアがインストール・設定されていること
- **[Node.js](https://nodejs.org/en/)** (16.x)
- **[PostgreSQL](https://www.postgresql.org/)** (10以上)
- **[Redis](https://redis.io/)**
- **[Yarn](https://yarnpkg.com/)** (v1系)
- **[FFmpeg](https://www.ffmpeg.org/)**

環境変数が次のように設定されていること
```sh
NODE_ENV=production
```
:::

ユーザーの作成
----------------------------------------------------------------
Misskeyはrootユーザーで実行しない方がよいため、代わりにユーザーを作成します。
Debianの例:

```sh
adduser --disabled-password --disabled-login misskey
```

Misskeyのインストール
----------------------------------------------------------------
```sh
su - misskey
git clone --recursive -b master https://github.com/misskey-dev/misskey.git
git submodule update --init
cd misskey
git checkout master
yarn install
```

設定
----------------------------------------------------------------
設定サンプルの`.config/example.yml`をコピーし、`default.yml`にリネームします。

```sh
cp .config/example.yml .config/default.yml
```

`default.yml` をファイル内の指示に従って編集します。

ビルドと初期化
----------------------------------------------------------------
次のコマンドでMisskeyのビルドとデータベースの初期化を行います。
これにはしばらく時間がかかります。

```sh
yarn build
yarn run init
```

::: tip
Debianをお使いであれば、`build-essential`パッケージをインストールする必要があります。
:::

::: tip エラーが発生する場合
何らかのモジュールでエラーが発生する場合はnode-gypを使ってください:
```sh
npx node-gyp configure
npx node-gyp build
yarn build
```
:::

起動
----------------------------------------------------------------
お疲れ様でした。以下のコマンドでMisskeyを起動できます。

```sh
yarn start
```

GLHF✨

:::: details systemdを用いた管理

systemdサービスのファイルを作成

`/etc/systemd/system/misskey.service`

エディタで開き、以下のコードを貼り付けて保存:

``` ini
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
```

::: warning
CentOSで1024以下のポートを使用してMisskeyを使用する場合は`ExecStart=/usr/bin/sudo /usr/bin/npm start`に変更する必要があります。
:::

systemdを再読み込みしmisskeyサービスを有効化

```sh
systemctl daemon-reload; systemctl enable misskey
```

misskeyサービスの起動

```sh
systemctl start misskey
```

::: tip
`systemctl status misskey`と入力すると、サービスの状態を調べることができます。
:::
::::

## Misskeyのアップデート方法
::: warning
アップデートの際は必ず[リリースノート](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md)を確認し、変更点や追加で必要になる作業の有無(ほとんどの場合ありません)を予め把握するようにしてください。
:::

masterをpullし直し、インストール、ビルド、データベースのマイグレーションを行います:

```sh
git checkout master
git pull
git submodule update --init
yarn install
yarn build
yarn migrate
```

アップデート内容、およびデータベースの規模によっては時間がかかることがあります。

アップデートが終わり次第、Misskeyプロセスを再起動してください。

::: tip
ビルドや起動時にエラーが発生した場合は、以下のコマンドをお試しください:
- `yarn clean`または`yarn cleanall`
- `npm rebuild`
:::
