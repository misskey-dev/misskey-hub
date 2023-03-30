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

如果选择 Dcoker 版本（注意不是 docker-compose）的  Misskey，宿主机中仍须安装 Redis 和 Postgres。推荐选择 docker-compose 方式安装 Misskey，该方式将 Redis，Postgres 和 Misskey 都安装在了 docker 中，另请参阅 利用 docker-compose 安装 Misskey：
另外，这里也有一片文章讲述了利用 docker-compose 功能：
[mamemononga 的这篇文章被推荐用于如何使用 docker-compose 运行所有功能。](https://gist.github.com/mamemomonga/5549bb69cad8e5618e5527593d4890e0)

如果使用 Docker Hub 镜像，则不需要编译 Misskey。
如果想对Misskey进行高度自定义（例如fork到本地修改），我们推荐选择编译安装 Misskey（systemd 方式），而不是docker。

三种方式的推荐度（从大到小排列）：
1. Docker-compose (via docker hub)
2. systemd
3. Docker 编译

## 是否要使用 Nginx？
如果您想仅用一台服务器搭建 Misskey，我们推荐使用 nginx。

如果您想配置负载均衡器，推荐不要使用 Nginx。 可以参考[Misskeyのnginx設定](https://github.com/misskey-dev/misskey/blob/develop/docs/examples/misskey.nginx)来设置负载均衡器。

## SWAP 分区
如果您设置了SWAP，除非您的总内存为 3GB 或更多，否则该脚本将无法运行。

## 如果在途中失败并再次运行脚本
如果中途失败后再次运行脚本，请注意以下事项：

- 如果您已经安装了 Redis 或 Postgres，请将“Install locally” 设置为 No。
保持主机名和端口设置不变，然后按 Enter。输入上次执行命令时指定的用户名和密码。

## 关于 .env 文件
安装脚本创建了几个 .env 文件，这些文件在更新时有用。

### /root/.misskey.env
记住运行  Misskey 的用户。

### /home/(misskeyユーザー)/.misskey.env
由 systemd 生成，主要用来记录运行目录。

### /home/(misskeyユーザー)/.misskey-docker.env
由 Docker 生成，其中存储有正在运行的容器和映像的编号。
容器编号随着更新而更新，更新后，旧的映像会被删除。

## 自行更改配置文档
在安装结束后，您可以自行探索本项目的配置文档，并依据自身情况进行修改。

### Misskey 安装目录 （该部分为机翻）
Misskey的源代码会被克隆到 /home/user/dictionary 中。
（user和dictionary的默认值都是misskey。）

若要访问 Misskey 的安装目录，建议使用以下命令：

```
sudo -iu user
cd dictionary
```

要返回之前的用户，执行以下命令：

```
exit
```

### systemd 中的 Misskey （仅限使用一键安装脚本安装的 Misskey）
Misskey 在 systemd 中的进程名称为您设定的域名（例如，exmaple.com，仅限使用一键安装脚本安装的 Misskey）  
若要重启 Misskey，执行以下命令：

```
sudo systemctl restart example.com
```

可以使用 journalctl 查看日志：

```
journalctl -t example.com
```

systemd的配置文件为：`/etc/systemd/system/example.com.service`

### Docker
Docker 让 Misskey 以第三者用户运行

如果要使用sudo进入Misskey用户，则需要更改XDG_RUNTIME_DIR和DOCKER_HOST。

```
sudo -iu user
export XDG_RUNTIME_DIR=/run/user/$UID
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock

# 显示进程列表
docker ps

# 编译（仓库: local/misskey:latest)
docker build -t local/misskey:latest ./misskey

# docker run
docker run -d -p 3000:3000 --add-host=docker_host:10.0.0.1 -v /home/misskey/misskey/files:/misskey/files -v "/home/misskey/misskey/.config/default.yml":/misskey/.config/default.yml:ro --restart unless-stopped -t "local/misskey:latest"

# 显示日志
docker logs --tail 50 -f 容器ID
```

下面的命令为上面的命令们的结合体（除了显示日志）：

```
sudo -u user XDG_RUNTIME_DIR=/run/user/$(id -u user) DOCKER_HOST=unix:///run/user/$(id -u user)/docker.sock docker ps
```

### nginx
Nginx 站点配置文档为：`/etc/nginx/conf.d/example.com.conf`

### Redis
已经在 `/etc/redis/misskey.conf` 设定了requirepass 与 bind。

## 升级实例后出现 502 无法访问错误
如果使用 Docker，由于升级需要进行迁移，所以无法立即访问。请检查迁移是否完成。

如果使用 systemd，可能会出现 pnpm install 运行失败的情况：

在 Misskey 的安装目录中运行以下命令，并再次尝试进行更新。

```
pnpm run clean-all
```

如果查看 journalctl 日志，通常会看到有关re2的记录。

## 可以在同一台服务器上再建立一个Misskey实例吗？
一键安装脚本不适用于在同一台服务器上安装另一个Misskey实例。因为某些设置可能会被覆盖，或者在过程中可能会发生错误。
