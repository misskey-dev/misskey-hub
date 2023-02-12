# Fil

Le fil affiche les [notes](.note) dans l’ordre anti-chronologique.
Les différents types de fil sont décit ci-dessous, chacun affichant certaines notes.
À noter que certains fils peuvent être désactivés sur des instances.

## Accueil

Les notes de personnes que vous suivez. Abrégé en HTL.

## Local

Les notes de personnes de votre instance et que vous ne suivez pas. Abrégé en LTL.
All local users' posts that do not have the visibility of "Accueil" will be shown. Abbreviated as LTL.

## Social

Les notes de personnes que vous suivez ou qui font partie de votre instance. Abrégé STL, comprendre que STL = HTL + LTL.

## Global

Toutes les notes accessibles depuis votre serveur. Abrégé GTL.

## Fils personnalisés

Une des fonctions Misskey est de créer ses propres fils. Voir [listes](./list.md) et [antennes](./antenna.md) pour plus de détails.

## Comparaison

| Source                |            |           |   Fil    |            |            |
|-----------------------|------------|-----------|----------|------------|------------|
| Membre                | Visibilité | Accueil   | Local    | Social     | Global     |
| Local (Abonnés)       | Public     | ✔         | ✔        | ✔          | ✔          |
|                       | Accueil    | ✔         |          | ✔          |            |
|                       | Abonnés    | ✔         |          | ✔          |            |
| Distant (Abonnés)     | Public     | ✔         |          | ✔          | ✔          |
|                       | Accueil    | ✔         |          | ✔          |            |
|                       | Abonnés    | ✔         |          | ✔          |            |
| Local (Non-Abonnés)   | Public     |           | ✔        | ✔          | ✔          |
|                       | Accueil    |           |          |            |            |
|                       | Abonnés    |           |          |            |            |
| Distant (Non-Abonnés) | Public     |           |          |            | ✔          |
|                       | Accueil    |           |          |            |            |
|                       | Abonnés    |           |          |            |            |
