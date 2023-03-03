---
description: 'このガイドはDockerを使ったMisskeyセットアップ方法を説明します。'
---

Docker Composeを使ったMisskey構築
================================================================

このガイドはDocker Composeを使ったMisskeyセットアップ方法を説明します。

::: danger
一度使用を始めたサーバーのドメイン・ホスト名は、決して変更しないでください！
:::

::: tip 前提条件
- DockerおよびDocker Composeがインストールされていること。
:::

リポジトリの取得
----------------------------------------------------------------
```sh
git clone -b master https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

設定
----------------------------------------------------------------
下記コマンドで、各種設定ファイルのサンプルをコピーします。

```sh
cp .config/docker_example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
cp ./docker-compose.yml.example ./docker-compose.yml
```

`default.yml`と`docker.env`をファイル内の説明に従って編集してください。  
また、必要に応じて、`docker-compose.yml`を編集します。(ポートを変更したい場合など)

ビルドと初期化
----------------------------------------------------------------
次のコマンドでMisskeyのビルドとデータベースの初期化を行います。
これにはしばらく時間がかかります。

``` shell
sudo docker compose build
sudo docker compose run --rm web pnpm run init
```

起動
----------------------------------------------------------------
お疲れ様でした。以下のコマンドでMisskeyを起動できます。

```sh
sudo docker compose up -d
```

GLHF✨

Misskeyのアップデート方法
----------------------------------------------------------------
::: warning
アップデートの際は必ず[リリースノート](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md)を確認し、変更点や追加で必要になる作業の有無(ほとんどの場合ありません)を予め把握するようにしてください。
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

アップデート内容、およびデータベースの規模によっては時間がかかることがあります。

cliコマンドを実行する方法
----------------------------------------------------------------
```sh
sudo docker compose run --rm web node packages/backend/built/tools/foo bar
```
