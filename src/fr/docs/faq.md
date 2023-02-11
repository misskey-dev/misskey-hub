# Foire Aux Questions
Ce document liste les réponses aux questions fréquentes au sujet de l’usage de Misskey. Les réponses concernant le projet Misskey dans son ensemble sont consultables [ici](../misskey#frequently-asked-questions).

## « Existe-t’il une application Android/iOS ? »
Bien qu’il n’existe pas d’application Misskey officielle pour d’autres systèmes d’exploitations, il existe de nombreuses applications tierces. Pour les détails, voir [ici](./apps).

À noter que les fonctionnalités de ces applications seront nécessairement en retard par rapport au client Web officiel, à moins que vous ne souhaitiez vraiment utiliser une application, nous vous recommendons d’utiliser le client Web officiel. Celui-ci prend en charge PWA ce qui rend possible son utilisation en tant qu’application. Pour plus de détails, voir [ici](todo).

## « Est-il possible de se connecter via un client Mastodon ? »
Misskey n’est pas compatible avec l’API Mastodon, sauf exceptions, il n’est pas possible d’utiliser un client Mastodon pour se connecter à Misskey.

## « Comment suivre des personnes d’autres serveurs ? »
Sélectionnez la barre de recherche dans le menu et entrez leur pseudonyme en incluant leur serveur (ex : `@syuilo@misskey.io`).

## « Comment annuler une ReNote ? »
Sélectionnez les points de suspension (« … ») à proximité de la date de publication puis « Annuler ReNote ». Pour plus de détails à propos des ReNotes, voir [ici](../features/note#renote).

## « Je ne veux pas de prévisualisation des liens »
La prévisualisation des liens URL peut être évitée à l’aide de MFM. Un pense-bête MFM est constultable dans votre instance via l’URL `https://NomDeVotreInstance/mfm-cheat-sheet`.

## « Je veux ajouter des émoticônes personnalisés »
Seule l’administration du serveur peut ajouter, modifier, et supprimer des émoticônes personnalisées. C’est auprès d’elle qu’il faut se renseigner.

## « Je veux développer un Bot »
Le développement de Bot est possible via l’API Misskey. Voir [ici](../docs/api).

## « Quel service est utilisé pour la fonction de traduction de Note ? »
[DeepL](https://www.deepl.com/) est utilisé pour cela.
