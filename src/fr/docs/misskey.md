# À propos de Misskey

Misskey est une plateforme libre et distribuée de microblogage. Son développement a débuté en 2014 par syuilo au Japon. De nombreuses fonctions sont disponibles comme Drive ou Réactions ainsi qu’une grande flexibilité de l’interface.

## Historique
D’abord pensé comme un tableau public, le gain en popularité suite à l’ajout d’un fil d’actualité (permettant aux membres de publier des messages courts et de les visualiser dans un ordre chronologique) a opéré un changement graduel du développement vers ce type de fonctionnalité. Misskey n’a pas toujours été un service décentralisé et l’est devenu avec l’adoption d’ActivityPub en 2018. C’est depuis lors un service utilisé et reconnu par la population.

::: tip
Le nom « Misskey » vient de la chanson « Brain Diver » d’un groupe, alors appelé May’n, que syuilo écoutait.
:::

Tout le monde pouvant participer à son développement, Misskey est encore activement développé.

## Que signifie « Distribué » ?
Un service <b>distribué</b> ou <b>décentralizé</b>, désigne un service où la communauté est divisée en différents serveurs capable de <b>communiquer (fédération)</b> entre eux pour partager leurs contenus, construisant ainsi un  <b>réseau (Fédivers)</b>. Les services reposant sur un serveur unique, ou des serveurs indépendants, sont considérés comme centralisés. La plupart font partie de cette dernière catégorie, comme Twitter ou Facebook. L’avantage de services distribués est de pouvoir librement choisir l’équipe d’administration ou le serveur qui nous correspond. Il est également possible de créer son propre serveur. Grâce à la fédération, il est possible d’accéder à la même communauté peu importe le serveur choisi.

## Code ouvert
Misskey a toujours été, et sera toujours, libre. De manière simplifiée, cela signifie <b>rendre visible au public le code source d’un logiciel.</b>. Cela permet également de modifier ou redistribuer le code. L’intégralité du [code de Misskey](https://github.com/misskey-dev) est sous licence [AGPL](https://github.com/misskey-dev/misskey/blob/develop/LICENSE), ce qui signifie que vous êtes libre de l’auditer, utiliser, modifier, et redistribuer de manière à assurer qu’il ne contient rien de dangereux et pouvoir participer à son développement. Pour concrétiser la nature distribuée de Misskey, cet aspect libre est indispensable. Comme précédemment, les services à but lucratif comme Twitter ou Facebook n’ont pas de code ouvert.

::: tip
Techniquement, le code source de Misskey est géré via Git, et son dépot est hébergé sur [GitHub.](https://github.com/misskey-dev).
:::

## Contribuer au développement et supporter le projet
Si Misskey vous plaît, il est possible de supporter le projet de différentes manières, certaines étant décrites ci-dessous. Certaines ne nécessitent pas de compétence en programmation et tout le monde peut contribuer à sa manière. Nous vous accueillerons volontiers.

### Ajouter des fonctions ou résoudre des problèmes
Si vous possédez des compétences logicielles, vous pouvez contribuer au projet en modifiant son code source. Pour les règles à ce sujet, voir [ici](https://github.com/misskey-dev/misskey/blob/develop/CONTRIBUTING.md).

### Participer aux discussions
Vous pouvez contribuer en partageant votre opinion sur des fonctions existantes ou en développement, ainsi qu’en signalant des problèmes. Ces discussions ont lieu sur [GitHub](https://github.com/misskey-dev) ou le [Forums](https://forum.misskey.io/).

### Traduction
Misskey est disponible dans de multiples langues (également appelé i18n, une abréviation de Internationalisation). La langue initiale étant le japonais, des bénévoles l’ont traduit dans d’autres langues. Aider à la traduction est une forme de contribution, Misskey utilise pour cela le service [Crowdin](https://crowdin.com/project/misskey).

### Partager vos impressions
Au delà des problèmes, n’hésitez pas à donner votre opinion sur les fonctions que vous appréciez ou trouvez amusantes. Cela constitue une motivation supplémentaire pour l’équipe de développement, et compte comme une forme indirecte de soutien du projet.

### Augmenter le nombre de Misskists
« Misskist » est le nom donné aux personnes utilisant Misskey. En parlant de Misskey dans votre entourage, le nombre de Misskists augmente et constitue une motivation pour l’équipe de développmeent.

### Faire une donation
[Voir ici](./donate.md)

## Foire Aux Questions
### Quel est l’objectif de ce projet ?
En résumé, et bien que vague, Misskey vise à être une plateforme généraliste populaire. Contrairement aux autres plateformes, Misskey n’est pas fixé dans une idée (ex : anti-centralisation) ou une vision unique, ce qui est reflété dans son développement qui est parfois un peu « exploratoire ». À l’inverse, cela permet une flexibilité en n’ayant pas de direction unique.
<!-- TODO: ここにロードマップへのリンク -->

### Est-ce que Misskey est développée par une entreprise ?
Non. Misskey n’est pas développée par une personne unique et n’est pas commercialisée en lien avec quelqu’entreprise qu’il soit. Le développement est porté par des bénévoles. De plus, bien qu’il y ait des sponsors commerciaux, le développement est centré sur la communauté.

### Qui contrôle Misskey ?
De part sa nature distribuée, chaque serveur a sa propre équipe d’administration. Misskey n’est ainsi pas contrôlé par une personne ou un une entreprise. Cela signifie que l’équipe de développement n’a pas de contrôle sur ces serveurs, pour les questions liées au management, c’est votre administration qu’il faut contacter. Vous retrouverez les informations sur votre serveur sur [cette page](/about). Créer votre propre serveur ferait de vous la tête de son équipe d’administration.

### Quel serveur choisir ?
Vous trouverez une [liste incomplète des serveur ici](../instances.md). Selon votre serveur, sa communauté et son thème peuvent varier et il est pertinent de rejoindre un serveur qui vous corresponde. De la même façon, la taille du serveur, le nombre de membre, la langue parlé, la notoriété de l’administration et divers autres critères peuvent orienter votre choix. Il n’existe pas de serveur officiel unique. Vous pouvez également créer votre propre serveur.

En général, peu importe le serveur que vous rejoignez, vous aurez accès au contenu de tous les autres serveurs.

### Comment créer son propre serveur ?
Merci de votre intérêt dans la création d’un serveur Misskey. En 2022, il n’existe pas de service spécialisé dans l’hébergement Misskey, créer un serveur requiert un certain niveau de connaissances. Pour plus d’informations, voir [ici](./install.md).

### Sur quelle technologie repose Misskey ?
Au fil du développement, Misskey a utilisé de nombreuses technologies. Originellement sur une combinaison de MySQL + PHP + jQuery, sont actuellement utilisés :
- Server : Node.js
- Base de données : PostgreSQL, Redis
- Interface : Vue.js
- Langage de programmation : TypeScript

De plus, Misskey dispose de ses propres technologies dérivées comme MFM ou AiScript.

### Quelle différence avec Mastodon ?
Misskey est un projet complètement différent de Mastodon et autres dérivés. Son développement est en cours depuis de nombreuses années déjà mais il n’est devenu un réseau distribué qu’après l’apparition de Mastodon. La seule similitude des deux projets est la prise en charge du protocole ActivityPub.

### Existe-t’il des applications Android/iOs ?
Bien qu’il n’existe pas d’application Misskey officielle pour d’autres systèmes d’exploitation, il existe des applications tierces. Pour plus de détails, voir [ici](./apps).

Seulement, les fonctionnalités de ces applications sera forcément en retard par rapport au client Web officiel. À moins de vouloir utiliser une application native, nous recommendons d’utiliser le client Web officiel. Celui-ci prenant en charge WPA, il est également possible d’en faire une application native. Pour plus de détails, voir [ici](todo].

### Où télécharger le logo ou l’icône Misskoy ?
Vous les trouverez dans les [ressources](../appendix/assets.html).

### Qui est cette fille aux oreilles de chat que l’on voit parfois ?
C’est l’ange gardien de Misskey, Ai (On l’a trouvé mignonne, youpi !).
<div class="info">ℹ️  Pour plus d’informations sur Ai, voir <a href="https://xn--931a.moe/" target="_blank">ici</a> (Japonais).</div>
