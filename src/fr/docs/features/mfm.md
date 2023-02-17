---
description: 'MFM est un langage de balise spécifique à Misskey.'
---

# MFM
MFM, abréviation de Misskey Flavoured Markdown, est un langage de balise spécifique à Misskey.

::: tip
Une partie de la syntaxe est compatible avec Markdown.
:::

## Exemples de champs prenant en charge le MFM
- corps de note ;
- avertissement de contenu ;
- pseudonyme ;
- profil.

## Syntaxe
### Mentions
::: tip
Pour plus d’informations sur les mentions, voir [ici](./mention.md).
:::

```:no-line-numbers
@alice
```
```:no-line-numbers
@alice@example.com
```

### Mot-croisillon

::: tip
Pour plus d’informations sur les mots-croisillons, voir [ici](./hashtag).
:::

```:no-line-numbers
#misskey
```

### Émoticône personnalisé

::: tip
Pour plus d’informations sur les émoticônes personnalisés, voir [ici](./custom-emoji).
:::

```:no-line-numbers
:misskey:
```

### Liens

```:no-line-numbers
[example link](https://example.com)
```

### Gras

```:no-line-numbers
**Bold**
```

---

::: tip
Plus de détails sur la syntaxe sont disponibles sur le **pense-bête MFM** de l’interface web Misskey sur la page `/mfm-cheat-sheet` de votre instance.
:::

## Informations pour le développement

L’analyse syntaxique de MFM est disponible comme librairie, facilitant son implémentation dans vos applications.
- [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js) - Analyseur syntaxique en JavaScript.
