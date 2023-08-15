# Stwórz własną instancję Misskey
Dziękujemy za twoje zainteresowanie w stworzeniu własnej instancji Misskey 🚀
Jest kilka sposobów by stworzyć instancję, więc wybierz któryś z nich i przeczytaj poradnik.

::: danger
Nigdy nie zmieniaj nazwy domeny (hostname) instancji odkąd zaczniej z niej korzystać!
:::

::: danger
Jeśli korzystasz z Cloudflare na swoim serwerzę, nie korzystaj z ustawienia Automatycznej Minimalizacji (Auto Minify).

Misskey nie będzie działać prawidłowo ponieważ Cloudflare nie zinterpretuje najnowszego kodu JavaScripta i złamie kod źródłowy wewnątrz.

Zobacz również: [misskey-dev/misskey #9791](https://github.com/misskey-dev/misskey/issues/9791)
:::

## Używając Dockera
[Zobacz tutaj](./install/docker.html)

## Używając skryptu BASH
[Zobacz tutaj](./install/bash.html)

## Manualnie
[Zobacz tutaj](./install/manual.html)

## Używając Yunohost
Misskey może być zainstalowane jako Aplikacjia na YunoHost. Po więcej informacji zobacz [repozytorium paczki Misskey dla YunoHost](https://github.com/YunoHost-Apps/misskey_ynh).

## Używając Kubernetesa/TrueNAS Scale
[Zobacz tutaj](./install/kubernetes.html)
