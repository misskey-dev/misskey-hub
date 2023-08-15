# Configurer un CDN
En publiant votre instance Misskey, nous recommandons d’utiliser un CDN comme [Cloudflare](https://www.cloudflare.com/).

Utiliser un CDN présente les avantages suivants :
- Le contenu statique peut être mis en cache, ce qui réduit la charge sur votre serveur ;
- L’adresse IP de votre serveur est moins exposée, ce qui limite les risques d’attaque DoS et autres.

## Mise en cache
Misskey Web est complétement statique et ne nécessite pas de serveur. Il peut de fait être intégralement mis en cache par un CDN.
L’API Misskey ne peut pas être mise en cache.

Vous devez configurer l’option suivante dans votre CDN :
- Mettre en cache toutes les requêtes sauf `/api/*`.

::: tip
Pas besoin de vider le cache lorsque vous mettez à jour Misskey.
::::
