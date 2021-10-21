Dockerを使ったMisskey構築
================================================================

このガイドはDockerを使ったMisskeyセットアップ方法を説明します。

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

ビルド
----------------------------------------------------------------
次のコマンドでMisskeyをビルドしてください:

`sudo docker-compose build`

データベースを初期化
----------------------------------------------------------------
``` shell
sudo docker-compose run --rm web yarn run init
```

起動
----------------------------------------------------------------
お疲れ様でした。これでMisskeyを動かす準備は整いました。

`sudo docker-compose up -d`するだけです。GLHF!

最新バージョンにアップデートする方法
----------------------------------------------------------------

1. `git stash`
2. `git checkout master`
3. `git pull`
4. `git submodule update --init`
5. `git stash pop`
6. `sudo docker-compose build`
7. [ChangeLog](../CHANGELOG.md)でマイグレーション情報を確認する
8. `sudo docker-compose stop && sudo docker-compose up -d`

cliコマンドを実行する方法
----------------------------------------------------------------

`sudo docker-compose run --rm web node built/tools/mark-admin @example`
