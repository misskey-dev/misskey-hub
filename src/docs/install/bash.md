# Misskey install shell script v3.0.0

Misskeyを簡単にインストールするためのシェルスクリプトができました！

いくつかの質問に答えるだけで、UbuntuサーバーへMisskey(v12)を簡単にインストールできます！

また、アップデートスクリプトもあります。

[v12の場合はこちら](https://github.com/joinmisskey/bash-install/blob/a096e874f93d493aa68975a31be9ce12d644e767/README.md)  
[**English version**](./README.en.md)

## ライセンス
[MIT License](./LICENSE)

## 準備するもの
1. ドメイン
2. Ubuntuがインストールされたサーバー
3. Cloudflareアカウント（推奨）

::: danger
一度使用を始めたサーバーのドメイン・ホスト名は、決して変更しないでください！
:::

Let's Encryptの認証を試行できる回数が少ないので、サーバーのネットワークやDNSの設定を十分確認してからインストールを開始してください。

## Cloudflareの設定
Cloudflareを使う場合、Cloudflareのドメインの設定を完了してからインストールを開始するようにしてください。  
ネームサーバーの適用には最大で3日程度かかる場合があります。

また、nginxとCloudflareを設定する場合、Cloudflareの設定画面にて、

- DNSを設定してください。
- SSL/TLS設定にて、暗号化モードを「フル」に設定してください。

## 操作
### 1. SSH
サーバーにSSH接続します。  
（サーバーのデスクトップを開いている方はシェルを開きましょう。）

### 2. 環境を最新にする
すべてのパッケージを最新にし、再起動します。

```
sudo apt update; sudo apt full-upgrade -y; sudo reboot
```

### 3. インストールをはじめる
SSHを接続しなおして、Misskeyのインストールを始めましょう。

ただ、インストール前に[Tips](#Tips)を読むことを強くお勧めします。

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/ubuntu.sh -O ubuntu.sh; sudo bash ubuntu.sh
```

example.comは自分のドメインに置き換えてください。

### 4. アップデートする
アップデートのためのスクリプトもあります。

アップデートスクリプトは、環境のアップデートは行いません。CHANGELOG（日本語）および[GitHubのリリース一覧（英語）](https://github.com/joinmisskey/bash-install/releases)を参考に、適宜マイグレーション操作を行なってください。

まずはダウンロードします。

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/update.ubuntu.sh -O update.sh
```

アップデートしたいときにスクリプトを実行してください。

```
sudo bash update.sh
```

- systemd環境では、`-r`オプションでシステムのアップデートと再起動を行うことができます。
- docker環境では、引数に更新後のリポジトリ名:タグ名を指定することができます。

## 動作を確認した環境

### Oracle Cloud Infrastructure

このスクリプトは、Oracle Cloud InfrastructureのAlways Freeサービスで提供されている2種類のシェイプのいずれにおいても動作します。

- VM.Standard.E2.1.Micro (AMD)
- VM.Standard.A1.Flex (ARM) [1OCPU RAM6GB or greater]

iptablesを使うようにしてください。

## Issues & PRs Welcome
上記の環境で動作しない場合、バグの可能性があります。インストールの際に指定された条件を記載の上、GitHubのIssue機能にてご報告いただければ幸いです。

上記以外の環境についてのサポートは難しいですが、状況を詳しくお教えいただければ解決できる可能性があります。

機能の提案についても歓迎いたします。

# Tips
選択肢の選び方や仕様についてなど。

## Systemd or Docker?
v1から、インストールメソッドにsystemdとDockerとを選べるようにしました。

Dockerと言っても、**MisskeyだけをDockerで実行**し、RedisやPostgresなどはホストで直接実行します。  
[docker-composeですべての機能を動かす方法については、mamemonongaさんが作成したこちらの記事がおすすめです。](https://gist.github.com/mamemomonga/5549bb69cad8e5618e5527593d4890e0)

Docker Hubイメージを使う設定であれば、Misskeyのビルドが不要になるため、**一番お勧めです**。  
ただし、マイグレーションは必要なので、アップデート時にMisskeyを使えない時間がゼロになるわけではありません。  
また、Misskeyのビルド環境を準備しない(git pullしない)ので、フォークを動かしたくなった時に設定が面倒になります。

ローカルでDockerをビルドする方式は、パフォーマンス面で非推奨です。

systemdは、Docker Hubにイメージを上げるまでもないものの、フォークを使いたい場合にお勧めです。

お勧めする順番は次の通りです。

1. Docker Hub
2. systemd
3. Dockerビルド

## nginxを使うかどうか
サーバー1台でMisskeyを構築する場合は、nginxの使用をお勧めします。

ロードバランサーを設置する場合にはnginxをインストールせず、[Misskeyのnginx設定](https://misskey-hub.net/docs/admin/nginx.html)を参考にロードバランサーを設定するのがよいと思います。

## Add more swaps!
スワップを設定している場合、メモリが合計で3GB以上でなければスクリプトが動作しないようになっています。

## 途中で失敗してまたスクリプトを実行する場合
万が一途中で失敗してもう一度スクリプトを動作させる場合、次のことに注意してください。

- RedisやPostgresのインストールが終わっている場合、「install locally」はNoにしてください。  
  host・port設定はそのままEnterを押します。
  ユーザー名やパスワードは、前回実行した際に指定したものを入力します。

## .envファイルについて
インストールスクリプトは、2つの.envファイルを作成します。  
アップデートの際に使用します。

### /root/.misskey.env
misskeyを実行するユーザーを覚えておくために必要です。

### /home/(misskeyユーザー)/.misskey.env
systemdの場合に生成されます。  
主にディレクトリを覚えておくのに使用します。

### /home/(misskeyユーザー)/.misskey-docker.env
Dockerの場合に生成されます。  
実行されているコンテナとイメージの番号を保存しています。  
コンテナの番号はアップデートの際に更新されます。古いイメージは削除されます。

## 自分で管理する
インストール後、構成を変更する際に役立つかもしれないメモです。

"example.com"を自分のドメインに置き換えて読んでください。

### Misskeyディレクトリ
Misskeyのソースは`/home/ユーザー/ディレクトリ`としてcloneされます。  
（ユーザー、ディレクトリの初期値はともにmisskeyです。）

Misskeyディレクトリへは、以下のように移動するとよいでしょう。

```
sudo -iu ユーザー
cd ディレクトリ
```

もとのユーザーに戻るにはexitを実行します。

```
exit
```

### systemd
systemdのプロセス名はexample.comです。  
たとえば再起動するには次のようにします。

```
sudo systemctl restart example.com
```

journalctlでログを確認できます。

```
journalctl -t example.com
```

設定ファイルは`/etc/systemd/system/example.com.service`として保存されています。

### Docker
DockerはMisskeyユーザーでrootless実行されています。

sudo でMisskeyユーザーに入るときは、`XDG_RUNTIME_DIR`と`DOCKER_HOST`を変更する必要があります。

```
sudo -iu ユーザー
export XDG_RUNTIME_DIR=/run/user/$UID
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock

# プロセス一覧を表示
docker ps

# ビルド (リポジトリ: local/misskey:latest)
docker build -t local/misskey:latest ./misskey

# docker run
docker run -d -p 3000:3000 --add-host=docker_host:10.0.0.1 -v /home/misskey/misskey/files:/misskey/files -v "/home/misskey/misskey/.config/default.yml":/misskey/.config/default.yml:ro --restart unless-stopped -t "local/misskey:latest"

# ログを表示
docker logs --tail 50 -f コンテナID
```

ワンライナーなら次のようにします。

```
sudo -u ユーザー XDG_RUNTIME_DIR=/run/user/$(id -u ユーザー) DOCKER_HOST=unix:///run/user/$(id -u ユーザー)/docker.sock docker ps
```

### nginx
nginxの設定は`/etc/nginx/conf.d/example.com.conf`として保存されています。

### Redis
requirepassとbindを`/etc/redis/misskey.conf`で設定しています。

## Q. アップデート後に502でアクセスできない
Dockerでは、起動後にマイグレーションをするため、すぐにアクセスできません。  
マイグレーションが終わっているかどうか確認してみてください。

systemdの場合では、pnpm installに失敗している可能性があります。  

Misskeyディレクトリで次の内容を実行し、もう一度アップデートを実行してみてください。

```
pnpm run clean-all
```

journalctlでログを確認すると、たいていre2が云々という記述が見当たります。

## Q. 同じサーバーにもう1つMisskeyを建てたい
スクリプトは同じサーバーに追加でMisskeyをインストールすることは想定していません。  
幾つかの設定が上書きされるか、途中でエラーになってしまうでしょう。
