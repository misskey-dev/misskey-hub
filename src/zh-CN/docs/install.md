# 创建您自己的Misskey实例
感谢您对创建 Misskey 实例的关注 🚀
创建实例有几种方法，请从下面选择一种并阅读指南。

::: danger
开始使用数据库后，请勿使用服务器的域名/主机名重新创建数据库！
:::

::: danger
如果你在自己的服务器上使用 Cloudflare，请不要使用 Auto Minify（自动压缩）设置。

由于 Cloudflare 无法解析最新的 JavaScript，并会破坏内部源代码，所以 Misskey 将无法正常工作。

参见：[misskey-dev/misskey #9791](https://github.com/misskey-dev/misskey/issues/9791)
:::

## 使用 Docker
[点击查看](./install/docker.html)

## 使用 Bash 脚本
[点击查看](./install/bash.html)

## 手动安装
[点击查看](./install/manual.html)

## 使用 Yunohost
Misskey 可以作为一个应用安装在 YunoHost 上。更多信息请查看 [YunoHost 的 Misskey 包的仓库 ↗](https://github.com/YunoHost-Apps/misskey_ynh).

## 使用 Kubernetes/TrueNAS Scale
[点击查看](./install/kubernetes.html)
