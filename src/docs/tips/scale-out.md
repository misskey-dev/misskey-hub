# Misskeyサーバーのスケールアウト

サーバーの利用者が増えるにしたがって、サーバーマシンのスペックを強化したり台数を増やして負荷に対応する必要が生じます。この記事ではMisskeyサーバーのスケールアウトに関するTipsを紹介します。

## PostgreSQLのレプリケーション
PostgreSQLのレプリケーションを行うと、データベースの負荷を複数のサーバーマシンに分散させることができます
レプリケーションについての詳細はPostgreSQLのドキュメントを参照してください。
MisskeyではPostgreSQLのレプリケーションに対応しており、configファイルで以下のように設定します。(一部抜粋)

``` yml
# レプリケーションを使用する場合は true にします
dbReplications: true

# リードレプリカのリストをここで設定します(いくつでも設定可能)
dbSlaves:
  -
    host: foo
    port: 5432
    db: misskey
    user: xxxxx
    pass: xxxxx
  -
    host: bar
    port: 5432
    db: misskey
    user: xxxxx
    pass: xxxxx
```

このように設定すると、Misskeyがデータベースに対してreadクエリを発行するとき設定した`dbSlaves`の中からランダムにreadレプリカ選択してクエリを送信するようになり、データベースの負荷が分散されます。

## 役割に応じたRedisの分割
Misskeyは以下のように様々な用途でRedisを使用します。

- ジョブキューの管理
- レートリミットの管理
- キャッシュ
- 通知などの情報の保存
- グローバルなイベントのPub/Sub

Misskeyでは、これらの用途ごとに異なるRedisサーバーを使用するように設定することができ、負荷を複数のサーバーマシンに分散させることができます。
configファイルで以下のように設定します。(一部抜粋)

``` yml
redisForPubsub:
  host: foo
  port: 6379
  #family: 0  # 0=Both, 4=IPv4, 6=IPv6
  #pass: example-pass
  #prefix: example-prefix
  #db: 1

redisForJobQueue:
  host: bar
  port: 6379
  #family: 0  # 0=Both, 4=IPv4, 6=IPv6
  #pass: example-pass
  #prefix: example-prefix
  #db: 1
```

現在設定可能なのはメインのRedisに加えて上記のように「グローバルなイベントのPub/Sub」と「ジョブキューの管理」用のRedisです。

## リモートのチャートの無効化
個々のリモートユーザーのアクティビティなどのチャートや個々のリモートサーバーのチャートが必要無い場合、それらの生成を無効にするとパフォーマンスが向上します。
コントロールパネルから、「リモートユーザーのチャートを生成」および「リモートサーバーのチャートを生成」をオフにすることで無効にできます。
