Dockerを使ったMisskey構築
================================================================

このガイドはDockerを使ったMisskeyセットアップ方法を説明します。

::: tip 前提条件
- dockerおよびdocker-composeがインストールされていること。
:::

リポジトリの取得
----------------------------------------------------------------
```bash
git clone -b master git://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

設定
----------------------------------------------------------------
下記コマンドで、各種設定ファイルのサンプルをコピーします。

```bash
cp .config/example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
```

`default.yml`と`docker.env`をファイル内の説明に従って編集してください。

::: warning
`default.yml`の、Postgresql/Redisのホストはそれぞれ`db`/`redis`にしてください。
:::

必要に応じて、`docker-compose.yml`を編集します。(ポートを変更したい場合など)

ビルドと初期化
----------------------------------------------------------------
次のコマンドでMisskeyのビルドとデータベースの初期化を行います。
これにはしばらく時間がかかります。

``` shell
sudo docker-compose build
sudo docker-compose run --rm web yarn run init
```

起動
----------------------------------------------------------------
お疲れ様でした。以下のコマンドでMisskeyを起動できます。

```bash
sudo docker-compose up -d
```

GLHF✨

最新バージョンにアップデートする方法
----------------------------------------------------------------
```bash
git stash
git checkout master
git pull
git submodule update --init
git stash pop
sudo docker-compose build
sudo docker-compose stop && sudo docker-compose up -d
```

cliコマンドを実行する方法
----------------------------------------------------------------
```bash
sudo docker-compose run --rm web node built/tools/mark-admin @example
```
