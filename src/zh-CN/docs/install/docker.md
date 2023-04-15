利用 Docker Compose 搭建 Misskey 实例
================================================================

本篇教程叙述了如何使用 Docker Compose 安装和设置 Misskey。

::: danger
请注意，一旦 Misskey 开始运行，不要更改域名和服务器的主机名。
:::

::: tip 在安装之前，请确保：
- 已安装 docker 与 docker-compose。
:::

将 Misskey 克隆至本地并同步 master
----------------------------------------------------------------
```sh
git clone -b master https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

修改配置文档
----------------------------------------------------------------
执行以下命令来复制并重命名配置文档们:

```sh
cp .config/docker_example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
cp ./docker-compose.yml.example ./docker-compose.yml
```

根据文件中的说明编辑 default.yml 和 docker.env。

如有必要，编辑 docker-compose.yml（如果要更改某些端口）。

编译与初始化
----------------------------------------------------------------
执行以下命令以开始编译 Misskey 并初始化数据库，这需要一些时间。

``` shell
sudo docker compose build
sudo docker compose run --rm web pnpm run init
```

启动
----------------------------------------------------------------
干得漂亮！您可以使用以下命令启动 Misskey。


```sh
sudo docker compose up -d
```

祝您好运✨

如何更新
----------------------------------------------------------------
::: warning
更新前，请务必查看 [版本说明](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md) 以预先了解更改和是否需要额外工作（大多数情况下不需要）。
:::
执行以下命令来更新：

```sh
git stash
git checkout master
git pull
git submodule update --init
git stash pop
sudo docker compose build
sudo docker compose stop && sudo docker compose up -d
```

根据更新内容和数据库大小，可能需要一些时间。

如何执行 CLI 命令
----------------------------------------------------------------
```sh
sudo docker compose run --rm web node packages/backend/built/tools/foo bar
```
