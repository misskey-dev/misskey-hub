# Create your own Misskey instance
Thank you for your interest in building a Misskey instance 🚀
There are several ways to create an instance, so please choose one below and read the guide.

::: danger
Never change the domain name (hostname) of an instance once you start using it!
:::

::: danger
If you use Cloudflare for your own server, do not use the Auto Minify setting.

Misskey will not work properly because Cloudflare will not interpret the latest JavaScript and will break the source code inside.

See also: [misskey-dev/misskey #9791](https://github.com/misskey-dev/misskey/issues/9791)
:::

## Using Docker
[See here](./install/docker.html)

## Using Bash Script
[See here](./install/bash.html)

## Manually
[See here](./install/manual.html)

## Using Yunohost
Misskey can be installed as an App on YunoHost. For more information see [the repository of the Misskey package for YunoHost](https://github.com/YunoHost-Apps/misskey_ynh).

## Using Kubernetes/TrueNAS Scale
[See here](./install/kubernetes.html)
