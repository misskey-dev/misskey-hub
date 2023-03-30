# Misskey 一键安装脚本 v3.0.0
一键安装 Misskey！ 

需要 ubuntu 系统。

下面的链接是**更新** Misskey 的脚本：

[For v12](https://github.com/joinmisskey/bash-install/blob/a096e874f93d493aa68975a31be9ce12d644e767/README.en.md)  
[**日本語版はこちら**](./README.md)

## 使用许可
[MIT License](./LICENSE)

## 需要准备...
1. 一个域名
2. ubuntu 系统的服务器（推荐18.04及以上的 LTS 版本）
3. 一个 Cloudflare 帐户 (如果使用其 CDN)

::: danger
请注意，一旦 Misskey 开始运行，不要更改域名和服务器的主机名。
:::

## 配置 Cloudflare
如果 DNS 提供商为 Cloudflare，请在安装之前完成如下设定：

- 设置域名解析 IP 地址。
- 在 SSL/TLS 设置界面, 将加密模式设置为 "完全"。

请确保域名已解析到该服务器上，再进行安装。

## 安装
### 1. 连接到服务器 SSH
通过 SSH 连接到服务器。 
如果系统有图形化界面，打开终端（terminal）。

### 2. 更新软件包
确保所有软件为最新版本。
输入以下命令来更新，更新完成后将重启服务器。

```
sudo apt update; sudo apt full-upgrade -y; sudo reboot
```

### 3. 下载脚本
重新连接到服务器，输入以下命令来下载和运行脚本

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/ubuntu.sh -O ubuntu.sh; sudo bash ubuntu.sh
```
之后，按照提示输入内容。

### 4. 更新  Misskey
更新 Misskey 也是有一个脚本的呢。

请注意，更新 Misskey 的脚本不会升级运行环境。 
对于脚本的更新内容，另请参阅 “更新日志” (日文) 与 [GitHub release 列表 (英语)](https://github.com/joinmisskey/bash-install/releases) 。

首先，输入以下命令来下载脚本

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/update.ubuntu.sh -O update.sh
```

输入以下命令来运行脚本

```
sudo bash update.sh
```

- 使用 **systemd** 的小伙伴, 添加 `-r` 可以更新并重启系统。
- 使用 **docker** 的小伙伴, 可以特定软件包版本 repository:tag 来更新。

## 测试通过的环境

### Oracle Cloud 服务器

该脚本在以下的甲骨文的免费服务器中运行良好～

- VM.Standard.E2.1.Micro (AMD)
- VM.Standard.A1.Flex (ARM) [1OCPU RAM6GB 或更高规格]

或许可以试一下 iptables，如果出现问题的话。

## 欢迎提出 issue 和 pull request！
如果在上述环境下不起作用，可能是bug。如果您能描述安装时的环境并使用 GitHub 的 Issue 来报告问题，我们会非常感谢的！

如果问题出在不是上述所提及的运行环境，处理起来会有一点点困难，但是如果您告诉我们更多有关情况，我们也许可以解决。

欢迎小伙伴们提出任何意见和建议。

# 常见问题
下面为安装时可能遇到的问题。

## 选择 Systemd 还是 Docker 呢?
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
