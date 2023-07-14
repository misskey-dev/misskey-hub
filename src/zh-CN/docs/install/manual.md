Misskey 安装与配置教程
================================================================

感谢您对搭建 Misskey 服务器感兴趣！
本篇教程叙述了如何安装和配置 Misskey。

----------------------------------------------------------------

::: danger
请注意，一旦 Misskey 开始运行，不要更改域名和服务器的主机名。
:::

*1.* 安装依赖
----------------------------------------------------------------
请安装以下软件：

#### Dependencies :package:
* **[Node.js](https://nodejs.org/en/)** (20.4.x)
* **[PostgreSQL](https://www.postgresql.org/)** (15.x)
* **[Redis](https://redis.io/)**
* **[FFmpeg](https://www.ffmpeg.org/)**

在 Debian 和 Ubuntu 系统中，您还需要安装 `build-essential` 与 `python` 。

执行以下命令启用 corepack：
```sh
sudo corepack enable
```

*2.* 创建一个运行 Misskey 的用户
----------------------------------------------------------------
在 root 下运行 Misskey 不是一个好主意，所以我们创建一个新用户 misskey。
例如，在 Debian 中：

```sh
adduser --disabled-password --disabled-login misskey
```

*3.* 安装 Misskey
----------------------------------------------------------------
1. 切换至 `misskey` 用户：

	`sudo -iu misskey`

2. 将 Misskey 克隆至本地：

	`git clone --recursive https://github.com/misskey-dev/misskey.git`

3. 进入 misskey 仓库：

	`cd misskey`

4. 检查是否为 [最新版本](https://github.com/misskey-dev/misskey/releases/latest) （分支是否为 master）：

	`git checkout master`

5. 下载子模块：

    `git submodule update --init`

5. 安装 Misskey 的依赖项：

	`pnpm install --frozen-lockfile`

*4.* 配置 Misskey
----------------------------------------------------------------
1. 复制 `.config/example.yml` 并重命名为 `default.yml`.

```sh
cp .config/example.yml .config/default.yml
```

2. 编辑 `default.yml`

```sh
nano default.yml
```


*5.* 编译 Misskey
----------------------------------------------------------------

执行以下命令编译 Misskey：

```sh
NODE_ENV=production pnpm run build
```

如果您使用 Debian，则需要安装 build-essential 和 python 软件包。

*6.* 创建并初始化数据库
----------------------------------------------------------------
1. 下面我们来新建数据库。输入以下命令切换至 postgres 用户并进入数据库：

	```
	sudo -u postgres psql
	```
	输入以下命令来新建数据库及用户（请注意，数据库需要以 UTF8 编码：
	```
	create database misskey with encoding = 'UTF8';
	create user misskey with encrypted password '{YOUR_PASSWORD}';
	grant all privileges on database misskey to misskey;
	\q
	```

2. 执行以下命令来初始化数据库：
	`pnpm run init`

*7.* 环境配置完成！
----------------------------------------------------------------
干得漂亮！现在，您有一个可以运行  Misskey 的环境了。

### 正常启动（前台，不可退出终端或 ssh）
运行 `NODE_ENV=production pnpm run start`。

### 以 systemd 方式启动

1. 创建 systemd 服务：

	`nano /etc/systemd/system/misskey.service`

2. 将以下内容复制进去：

	::: details
	```
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
	:::

3. 重载 systemd 并使 misskey service 开机自启：

	`sudo systemctl daemon-reload; sudo systemctl enable misskey`

4. 启动 misskey service：

	`sudo systemctl start misskey`

您可以执行 `systemctl status misskey`检查该服务项是否正在运行。

### 使用 OpenRC 启动

1. 将以下文本复制到 `/etc/init.d/misskey`:

	::: details
	```sh
	#!/sbin/openrc-run

	name=misskey
	description="Misskey daemon"

	command="/usr/bin/npm"
	command_args="start"
	command_user="misskey"

	supervisor="supervise-daemon"
	supervise_daemon_args=" -d /home/misskey/misskey -e NODE_ENV=\"production\""

	pidfile="/run/${RC_SVCNAME}.pid"

	depend() {
		need net
		use logger

		# alternatively, uncomment if using nginx reverse proxy
		#use logger nginx
	}
	```
	:::

2. 设置开机自启：

	`rc-update add misskey`

3. 启动 Misskey service：

	`rc-service misskey start`

您可以执行 `rc-service misskey status`来检查该服务项是否正在运行。

### 如何更新 Misskey？
执行以下命令：
1. `git checkout master`
2. `git pull`
3. `git submodule update --init`
4. `NODE_ENV=production pnpm install --frozen-lockfile`
5. `NODE_ENV=production pnpm run build`
6. `pnpm run migrate`
7. 重新启动 Misskey 进程以应用更改
8. 开始使用吧～

如果更新遇到任何问题，请尝试以下操作：
1. `pnpm run clean` 或 `pnpm run clean-all`
2. 重新更新 (别忘了执行 `pnpm install`)
