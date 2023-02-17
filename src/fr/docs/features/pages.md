# Pages

La fonction Pages permet de créer des pages web personnalisées. Vous pouvez y inclure du contenu multimédia, du formatage, et même lancer des scripts. Comme les autres fonctions de Misskey, votre contenu peut utiliser le format [MFM](./mfm.md).

Les pages sont composées de différents blocs, pouvant être déplacés par glisser-déposer.

## Blocs de contenu

Les blocs de contenu affichent différent types de contenu.

### Section

Un groupe de blocs pouvant contenir d’autres blocs. Chaque bloc de contenu possède un titre qui sera affiché comme en-tête.

### Texte

Affiche un texte. Celui-ci peut être formaté et contenir des variables (Voir la section correspondante).

### Images

Affiche une image depuis votre stockage.

### Zone de texte

Affiche du texte avec une étiquette `text area`. Ce bloc ne prend pas en charge le MFM mais autorise l’interpolation de variable.

### Note interne

TODO

### Canevas

TODO

## Bloc d’entrée

Les blocs d’entrée permettent de créer des pages interactives avec des formulaires. Ces blocs peuvent être utilisés pour interagir avec les variables et les script d’une page.

## Blocs spéciaux

Les blocs spéciaux fournissent des fonctions uniques à votre page. Par exemple le fait un formulaire de publication de note et le contrôle de page.

## Variables

Les variables sont utilisées pour des pages dynamiques. Vous pouvez indiquer la valeur d’une variable via <b>{ nom de variable }</b> dans le texte. Par exemple dans <b>Hello { thing } world!</b>, si la valeur de la variable (thing) est <b>ai</b>, alors le texte deviendrait <b>Hello ai world!</b>.

Les variables sont évaluées de haut en bas, et il n’est pas possible d’appeler une variable avant qu’elle ne soit définie.Par exemple, soit <b>A, B, C</b> définies dans cet ordre, <b>A</b> et <b>B</b> peuvent être appelées dans <b>C</b> mais  <b>B</b> et <b>C</b> ne peuvent pas être appelées dans <b>A</b>.

Pour recevoir une entrée, placez un bloc « Entrée » sur la page et utilisez le nom de variable pour indiquer la variable où enregistrer la valeur entrée (la variable sera automatiquement créée).
La variable peut ensuite être utilisée pour réaliser des actions en fonction de l’entrée.

Les fonctions peuvent être utilisées pour répéter des groupes de calculs. Pour cela, créez une variable de type « Fonction ». Une fonction peut avoir différents arguments, dont les valeurs sont disponibles comme variables au sein de la fonction. Il existe différentes fonctions d’ordre primaire, appelant d’autres fonctions comme arguments. Les fonctions peuvent être prédéfinies ou placées à même l’emplacement d’argument.
