# Create Misskey Instance with Kubernetes/TrueNAS
This guide describes how to install and setup Misskey using Kubernetes and Helm charts.

::: danger
Never change the domain name (hostname) of an instance once you start using it!
:::

## TrueCharts and TrueNAS Scale
The Helm chart for Misskey is hosted on TrueCharts which is a repository designed to be used with TrueNAS Scale, but its charts can also be installed as normal Helm charts. The [TrueCharts](https://truecharts.org/charts/incubator/misskey/) site has a list of all the charts available as well as documentation on how to install. The TrueCharts [Discord](https://discord.gg/Ax9ZgzKx9t) server is also a resource that can be used if you have questions. Misskey is currently on the *incubator* train.

::: tip Requirements
- TrueNAS Scale
OR
- Kubernetes cluster and Helm
:::

## TrueNAS Scale
Follow the instructions on the [TrueCharts Guide](https://truecharts.org/manual/guides/Adding-TrueCharts/). Add the *incubator* train, and install the Misskey app. The only Misskey configuration option that is required is the instance URL. The app also uses the Traefik reverse proxy to expose the service to the outside world over HTTPS. TrueCharts integrates with Traefik by default, but other options can be used with manual configuration.

## Manual Helm
If you are not using TrueNAS Scale, you can install Misskey using Helm directly. The `misskey` object in the values.yaml file has the options that you will want to override as necessary. The `misskey.url` property is the only required change. A reverse proxy is recommended to secure access to the server as the chart does not currently support enabling TLS inside the Misskey container.
```
helm repo add TrueCharts https://charts.truecharts.org
helm repo update
helm install misskey TrueCharts/misskey
```

## Upgrade Misskey
To upgrade Misskey, use the upgrade feature built into TrueNAS Scale or if running kubernetes manually use [helm repo update](https://helm.sh/docs/helm/helm_repo_update/) and [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/). It is highly recommended to create a snapshot of your data before upgrading in case there is an issue and you need to rollback.
