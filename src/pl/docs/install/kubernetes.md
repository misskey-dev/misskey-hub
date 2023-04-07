# Stwórz instancje Misskey przy użyciu Kubernetesa/TrueNAS Scale

Ten poradnik opisze instalację i konfigurację Misskey przy użyciu Kubernetesa i Helm charts.

::: danger
Nigdy nie zmieniaj nazwy domeny(hostname) instancji kiedy zaczniesz z niej korzystać!!
:::

## TrueCharts i TrueNAS Scale

Helmy dla Misskey są hostowane na TrueCharts które jest repozytorium zaprojektowanym z myślą o TrueNAS Scale ale mogą one też być zainstalowane jako normalne Helmy. [TrueCharts](https://truecharts.org/charts/incubator/misskey/) ma listę wszystkich dostępnych Helmów oraz dokumentację na temat instalacji. [TrueCharts Discord](https://discord.gg/Ax9ZgzKx9t) jest również źródłem na którym możesz uzyskać pomoc. Misskey jest obecnie na *incubator*.

::: tip Wymagania

- TrueNAS Scale
lub
- Klaster Kubernetes i Helm
:::

## TrueNAS Scale

Podążaj za instrukcjami na [TrueCharts Guide](https://truecharts.org/manual/guides/Adding-TrueCharts/). Dodaj *incubator* train i zainstaluj aplikację Misskey. Jedyna konfiguracja Misskey która jest wymagana to URL instancji. Aplikacja również używa reverse proxy Traefik aby udostępnić usługę na zewnątrz świata przez HTTPS. TrueCharts integruje się z Traefikiem domyślnie, ale inne opcje mogą być używane z ręczną konfiguracją.

## Manualny Helm

Jeżeli nie używasz TrueNAS Scale to możesz zainstalować Misskey używając Helm bezpośrednio. Obiekt `misskey` w pliku values.yaml ma opcje które chcesz nadpisać. Właściwość `misskey.url` jest jedyną wymaganą zmianą. Zalecane jest użycie reverse proxy aby zabezpieczyć dostęp do serwera ponieważ chart nie obsługuje włączania TLS wewnątrz kontenera Misskey.

```
helm repo add TrueCharts https://charts.truecharts.org
helm repo update
helm install misskey TrueCharts/misskey
```

## Aktualizuj Misskey

Aby zaktualizować Misskey, użyj funkcji wbudowanej do TrueNAS Scale albo jeżeli używasz kubernetesa to manualnie użyj [helm repo update](https://helm.sh/docs/helm/helm_repo_update/) i [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/). Zalecane jest utworzenie kopii danych przed aktualizacją na wypadek gdyby coś poszło nie tak i trzeba byłob by powrócić do działającej wersji.
