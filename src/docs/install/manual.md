---
description: 'このガイドではMisskeyのインストール・セットアップ方法について解説します。'
---

Misskey構築の手引き
================================================================

このガイドではMisskeyのインストール・セットアップ方法について解説します。

::: danger
一度使用を始めたサーバーのドメイン・ホスト名は、決して変更しないでください！
:::

::: tip 前提条件
以下のソフトウェアがインストール・設定されていること
- **[Node.js](https://nodejs.org/en/)** (20.4.x以上)
- **[PostgreSQL](https://www.postgresql.org/)** (15以上)
- **[Redis](https://redis.io/)**
- **[FFmpeg](https://www.ffmpeg.org/)**

Debian/Ubuntuをお使いであれば、`build-essential`パッケージをインストールしておくと良いです。

corepackが有効化されていること
```sh
sudo corepack enable
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
sudo -iu misskey
git clone --recursive https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
git submodule update --init
NODE_ENV=production pnpm install --frozen-lockfile
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
NODE_ENV=production pnpm run build
pnpm run init
```

起動
----------------------------------------------------------------
お疲れ様でした。以下のコマンドでMisskeyを起動できます。

```sh
NODE_ENV=production pnpm run start
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
StandardOutput=journal
StandardError=journal
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
sudo systemctl daemon-reload
sudo systemctl enable misskey
```

misskeyサービスの起動

```sh
sudo systemctl start misskey
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
NODE_ENV=production pnpm install --frozen-lockfile
NODE_ENV=production pnpm run build
pnpm run migrate
```

アップデート内容、およびデータベースの規模によっては時間がかかることがあります。

アップデートが終わり次第、Misskeyプロセスを再起動してください。

```sh
sudo systemctl restart misskey
```

::: tip
ビルドや起動時にエラーが発生した場合は、以下のコマンドをお試しください:
- `pnpm run clean`または`pnpm run clean-all`
- `pnpm rebuild`
:::
