# Créer votre propre instance Misskey
Merci de votre intérêt à créer votre instance Misskey 🚀
Il existe différentes façons de créer votre instance, choisissez en une en bas et suivez le guide.

::: danger
Ne changez jamais le nom de domaine (hostname) d’une instance une fois celle-ci lancée !
:::

::: danger
Si vous utilisez Cloudflare, n'utilisez pas le paramètre Auto Minify.

Misskey ne fonctionnera pas correctement car Cloudflare n'interprétera pas le dernier JavaScript et cassera le code source à l'intérieur.

Pour plus d'informations [misskey-dev/misskey #9791](https://github.com/misskey-dev/misskey/issues/9791)
:::

## Via Docker
[Voir ici](./install/docker.html).

## Via script Bash
[Voir ici](./install/bash.html).

## Manuellement
[Voir ici](install/manual.html).

## Via Yunohost
Misskey peut être installé en tant qu’application sur YunoHost. Pour plus d’informations, voir le [dépot du paquet Misskey sur YunoHost](https://github.com/YunoHost-Apps/misskey_ynh).

## Via Kubernetes/TrueNAS Scale
[Voir ici](./install/kubernetes.html).
