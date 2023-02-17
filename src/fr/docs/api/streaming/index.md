---
description: 'L’API de flux fournit des informations en temps réel (ex : nouvelles notes, réactions, abonnements, etc…) ainsi que d’autres opérations.'
---

# API de flux

::: tip
Assurez-vous d’avoir lu la [documention API Misskey](../index.md) au préalable.
:::

L’API de flux fournit des informations en temps réel (ex : nouvelles notes, réactions, abonnements, etc…) ains que d’autres opérations.

## Se connecter au flux

Pour utiliser l’API vous devez vous connecter au serveur Misskey via **websocket**.

L’URL de celui-ci ressemble à :

```:no-line-numbers
wss://{host}/streaming?i={token}
```

où
- `{host}` est le nom de l’hôte de l’instance ;
- `{token}` est la clé d’accès.

::: tip
Vous pouvez vous connecter sans clé d’accès, mais cela limitera les informations reçues et les opérations possibles.
:::

Une fois la connexion établie, vous pourrez vous abonner aux publications décrites ci-dessous. Il n’est pas encore possible, par exemple, de recevoir les nouvelles publications de votre fil.

Pour recevoir ces évènements, vous devez rejoindre un **canal** sur le flux, tel que décrit ci-dessous.

**Toutes les données sont au format JSON**

## Canal
L’API de flux Misskey utilise un concept de canaux. Ce mécanisme sépare les informations reçus et envoyées.
En rejoignant des canux, vous aurez la possibilité de recevoir et envoyer de nombreuses informations.

::: tip
Vous pouvez rejoindre plusieurs canaux simultanément via un flux unique.
:::

Les sections suivantes décrivent comment utiliser les canaux. Pour voir quels canaux sont disponible, se référer à la [liste des canaux](./channel/index.md).

### Rejoindre un canal
Pour rejoindre un canad, envoyez les données JSON suivant sur le flux :

```js
{
	type: 'connect',
	body: {
		channel: 'xxxxxxxx',
		id: 'foobar',
		params: {
			...
		}
	}
}
```

où
- `channel` est le nom du canal auquel se connecter. Les type de canaux sont décrits par la suite ;
- `id` est un identifiant arbitraire pour interragir avec ce canal. Il est nécessaire pour identifier de quel canal le message provient, un flux pouvant contenir différent canaux. Cet identifiant peut être un UUID ou un nombre aléatoire ;
- `params` sont les paramètres requis pour rejoindre un canal. Chaque canal requiert des paramètres propres. Si un canal n’en demande pas, alors cette propriété peut être laissée vide.

::: tip
L’identifiant n’est pas unique par canal mais par connexion car un canal peut être utilisé plusieurs fois avec différents paramètres.
:::

### Recevoir des messages de canaux
Lors de la réception d’un message indiquant une nouvelle publication sur un canal, vous saurez en temps réel qu’une nouvelle publication est disponible sur votre fil.

Quand un canal génère un message, les données JSON suivantes sont envoyées :
```js
{
	type: 'channel',
	body: {
		id: 'foobar',
		type: 'something',
		body: {
			some: 'thing'
		}
	}
}
```

où
- `id` est l’identifiant utilisé lors de la connexion au canal. Cela vous permet de savoir de quel canal le message vient ;
- `type` est le type de message. Selon le canal, celui-ci diffère ;
- `body` contient le contenu du message, celui-ci diffère selon le canal.

### Envoyer un message via un canal
Sur certains canaux, il est également possible d’envoyer des messages et d’effectuer d’autres opérations en plus de la réception.

Pour envoyer un message à un canal, envoyez les données JSON suivantes :
```js
{
	type: 'channel',
	body: {
		id: 'foobar',
		type: 'something',
		body: {
			some: 'thing'
		}
	}
}
```

où
- `id` est l’identifiant utilisé lors de la connexion au canal. Cela vous permet d’indiquer à quel canal le message est destiné ;
- `type` est le type de message, celui-ci diffère selon les canaux ;
- `body` contient le corps du message, celui-ci diffère selon les canaux.

### Se déconnecter d’un canal
Pour se déconnecter d’un canal, envoyez les données JSON suivantes :
```js
{
	type: 'disconnect',
	body: {
		id: 'foobar'
	}
}
```

où
- `id` est l’identifiant utilisé lors de la connexion au canal. Cela permet d’indiquer de quel canal se déconnecter.

## Capturer des notes
Misskey propose un mécanisme de capture de note. Cela permet de recevoir un flux d’évènements pour une note spécifique.

Par exemple, si vous affichez un fil et qu’une personne réagit à une des publications, le client ne peut pas savoir de quelle publication il s’agit et il n’est pas possible d’afficher la réaction en temps réel.

En capturant une note, vous recevrez les évènements qui y sont liés, et pourrez afficher les réactions en temps réel.

La section suivante décrit l’usage de cette fonction. Pour voir les type d’évènements sont capturables, vour la [liste](./note-capture-events.md).

### Capturer une note

Pour capturer une note, envoyer les données JSON suivantes :

```js
{
	type: 'subNote',
	body: {
		id: 'xxxxxxxxxxxxxxxx'
	}
}
```

où
- `id` est l’identifiant de la note à capturer.

En envoyant ce message, vous demandez à Misskey de capturer la note, et les évènements qui y sont liés vous seront relayés.

Si une note reçoit une réacton, vous recevrez un message au format suivant :
```js
{
	type: 'noteUpdated',
	body: {
		id: 'xxxxxxxxxxxxxxxx',
		type: 'reacted',
		body: {
			reaction: 'like',
			userId: 'yyyyyyyyyyyyyyyy'
		}
	}
}
```

où
- `body.id` est l’identifiant de la note ;
- `body.type` est letype d’évènement ;
- `body.body` contient les détails de l’évènement.

### Dé-capturer une note

Pour ne plus recevoir d’évènements liés à une note, par exemple si celle-ci n’est plus affichée à l’écran. envoyez les données JSON suivantes :
```js
{
	type: 'unsubNote',
	body: {
		id: 'xxxxxxxxxxxxxxxx'
	}
}
```

où
- `id` est l’identifiant de la note.

Une fois ce message envoyé, les évènements liés à cette note ne vous seront plus transmises.
