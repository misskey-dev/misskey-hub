---
description: 'Misskey offre une API pour développer son propre client Misskey, des services, des bots, etc… (« Applications ».'
---

# API Misskey
Misskey dispose d’une APi pour développer son propre client Misskey, des services liés, des bots, etc… (« Applications »).
Il existe également un flux API pour créer des applications avec des fonctions en temps réel.

::: tip
En utilisant le SDK officiel Misskey ou une librairie tierce, vous pouvez utiliser l’API de manière à simplifier des étapes décrites dans ce document.
Voir [ici](TODO) pour plus d’informations à propos des librairies.
:::

Pour commencer à utiliser l’API vous aurez besoin une **clé d’accès** associée à un compte.
Ce document vous accompagne dans l’obtention de cette clé et montre comment l’utiliser pour un usage basique.

## Obtenir une clé d’accès
L’API requiert une clé d’accès pour ses requêtes.
Une clé d’accès est un ensemble de données associée à une personne, l’identifiant comme utilisant l’API et contrôlant les opérations qui sont effectuées.

::: tip
La clé est nominative et ne peut être utilisée que par une personne, plusieurs clés peuvent être possédées par une personne.
:::

Vous pouvez facilement [obtenir votre clé d’accès](#Méthode-manuelle), ou une [clé pour une personne utilisant votre application](#Demander-une-clé-d’accès)..

### Méthode manuelle
Vous pouvez créer votre propre clé d’accès via l’interface Misskey Web dans la section API des paramètres.

::: warning
Ne communiquez pas cette clé.
:::

### Demander une clé d’accès
Pour obtenir une clé d’accès pour une personne utilisant votre application, suivre les étapes suivantes :

::: tip
以下に説明する方法は、アプリを作成せずインスタントにアクセストークンを発行する、MiAuthと呼ばれるものです。

[アプリ作成方式でのアクセストークン取得方法もあります（旧来型）。](./app)
:::

#### Étape 1
Générer un UUID, ci-après dénommé **ID session**.

::: warning
Cet ID session est à usage unique.
:::

#### Étape 2
Le formulaire d’identification de l’application doit s’afficher dans le navigateur. Cela peut être fait via une URL de format :

```:no-line-numbers
https://{host}/miauth/{session}
```

où
- `{host}` est l’hôte de l’instance, généralement entré manuellement ;
- `{session}` est l’ID session.

Vous pouvez également ajouter des options telles que des paramètres dans l’URL :

| nom | description |
| ---- | ---- |
| `name` | nom de l’application |
| `icon` | URL de l’icône de l’application |
| `callback` | L’URL de redirection après identificaton, avec l’ID session en tant que `session`. |
| `permission` | Les permissions requises par l’application. <br>Liste les permissions à demander, séparées par `,`. La liste complète est consultable [ici](TODO). |

```:no-line-numbers
https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&permisson=write:notes,write:following,read:drive
```

#### Étape 3
Après l’identification, une requête POST à une URL du format suivant retournera en un JSON contenant la clé d’accès :
```:no-line-numbers
https://{host}/api/miauth/{session}/check
```

où
- `{host}` est l’hôte de l’instance ;
- `{session}` est l’ID session.

Les propriétés incluses dans la réponse sont les suivantes :

| nom | description |
| ---- | ---- |
| `token` | clé d’accès |
| `user` | information sur la personne |

## Utilisation de l’API
Une fois la clé en main, vous pouvez utiliser l’API pour faire des requêtes.

::: tip
- Toutes les API HTTP sont POST, et les requête comme les réponses sont au format JSON (à l’exception de drive/files/create ;
- Indiquez `Content-Type: application/json` dans l’entête de requête ;
- La clé d’accès est dans le corps de requête JSON avec comme valeur de name `i`.

:::
Exemple de corps avec une clé d’accès pour meta :

```json
{
    "i": "HogEFugA1341",
    "detail": false
}
```

La clé d’accès est incluse dans le corps de requête JSON comme paramètre `i`.

Pour plus d’informations à propos de l’API voir [référence API](./endpoints.html).

::: warning
Misskey n’utilise pas REST.
:::

En plus de l’API HTTP, Misskey fourni un flux API. Plus d’informations à ce sujet [ici](.streaming/).

::: tip
Votre instance Misskey dispose de sa propre documentation d’API à `/api-doc`.
:::
