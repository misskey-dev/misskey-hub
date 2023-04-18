# 使用Kubernetes/TrueNAS创建Misskey实例
本篇教程介绍了如何使用Kubernetes和Helm charts安装和设置Misskey，请注意，部分内容为机翻。

::: danger
请注意，一旦 Misskey 开始运行，不要更改域名和服务器的主机名。
:::

## TrueCharts and TrueNAS Scale
Misskey的 Helm chart托管在TrueCharts上，这是一个专为TrueNAS Scale设计的存储库，但它的chart也可以作为普通Helm chart安装。 [TrueCharts](https://truecharts.org/charts/incubator/misskey/) 网站列出了所有可用的charts以及安装方式的文档。如果您有疑问，TrueCharts的 [Discord](https://discord.gg/Ax9ZgzKx9t) 服务器也是一个可以使用的资源。Misskey 目前处于 *incubator* train.

::: tip 先决条件
- TrueNAS Scale
或
- Kubernetes 集群和 Helm
:::

## TrueNAS Scale
按照 [TrueCharts 指南](https://truecharts.org/manual/guides/Adding-TrueCharts/)上的说明操作。添加 *incubator* train, 并安装Misskey应用程序。唯一需要的Misskey配置选项是实例URL。该应用程序还使用Traefik反向代理将服务通过HTTPS暴露给外部世界。TrueCharts默认集成Traefik，但也可以通过手动配置使用其他选项。

## 手动安装 Helm
如果您没有使用TrueNAS Scale，您可以直接使用Helm安装Misskey。 values.yaml文件中的misskey对象有您需要根据需要覆盖的选项。misskey.url属性是唯一需要更改的内容。由于chart目前不支持在Misskey容器内启用TLS，建议使用反向代理来保护对服务器的访问。
```
helm repo add TrueCharts https://charts.truecharts.org
helm repo update
helm install misskey TrueCharts/misskey
```

## 升级 Misskey
要升级Misskey，请使用内置在TrueNAS Scale中的升级功能，或者如果手动运行kubernetes，请使用 [helm repo update](https://helm.sh/docs/helm/helm_repo_update/) 与 [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/). 强烈建议在升级之前创建快照，以防出现问题，需要回滚。
