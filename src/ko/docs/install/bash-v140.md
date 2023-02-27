# Misskey install shell script v1.4.0
Install Misskey with one shell script!  

You can install misskey on an Ubuntu server just by answering some questions.  

There is also an update script.

## License
[MIT License](./LICENSE)

## Ingredients
1. A Domain
2. An Ubuntu Server
3. A Cloudflare Account (recommended)

## Configure Cloudflare
If you are using nginx and Cloudflare, you must configure Cloudflare:

- Set DNS.
- On SSL/TLS setting tab, switch the encryption mode to "Full".

## Procedures
### 1. SSH
Connect to the server via SSH.  
(If you have the server's desktop open, open the shell.)

### 2. Clean up
Make sure all packages are up to date and reboot.

```
sudo apt update; sudo apt full-upgrade -y; sudo reboot
```

### 3. Start the installation
Reconnect SSH and let's start installing Misskey. 

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/ubuntu.sh -O ubuntu.sh; sudo bash ubuntu.sh
```

### 4. To update
There is also an update script.

First, download the script.

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/update.ubuntu.sh -O update.sh
```

Run it when you want to update Misskey.

```
sudo bash update.sh
```

- In the systemd environment, the `-r` option can be used to update and reboot the system.
- In the docker environment, you can specify repository:tag as an argument.

## Environments in which the operation was tested

### Oracle Cloud Infrastructure

This script runs well on following compute shapes complemented by Oracle Cloud Infrastructure Always Free services.

- VM.Standard.E2.1.Micro (AMD)
- VM.Standard.A1.Flex (ARM) [1OCPU RAM6GB or greater]

Answer to use iptables.

## Issues & PRs Welcome
If it does not work in the above environment, it may be a bug. We would appreciate it if you could report it as an issue, with the specified requirements you entered to the script.

It is difficult to provide assistance for environments other than the above, but we may be able to solve your problem if you provide us with details of your environment.

Suggestions for features are also welcome.

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

ロードバランサーを設置する場合にはnginxをインストールせず、[Misskeyのnginx設定](https://github.com/misskey-dev/misskey/blob/develop/docs/examples/misskey.nginx)を参考にロードバランサーを設定するのがよいと思います。

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

それでもアップデート後にアクセスできない、ということが稀にあります。

もしくは、yarn installに失敗しているというものです。  

Misskeyディレクトリで次の内容を実行し、もう一度アップデートを実行してみてください。

```
npm run cleanall
```

journalctlでログを確認すると、たいていre2が云々という記述が見当たります。

## Q. 同じサーバーにもう1つMisskeyを建てたい
スクリプトは同じサーバーに追加でMisskeyをインストールすることは想定していません。  
幾つかの設定が上書きされるか、途中でエラーになってしまうでしょう。
