---
description: 'Liste de logos, icônes, et autres ressources Misskey.'
---

# Liste de ressources
Voici une liste de logos, icônes, et autres ressources Misskey.

::: tip
Ces ressources sont libres d’utilisation sous la licence **CC BY-NC-SA** !🎉

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="CC BY-NC-SA" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
:::

::: tip
Toutes les ressources sont disponibles dans [misskey-dev/assets](https://github.com/misskey-dev/assets).
:::

## Logo
<a class="asset" href="https://raw.githubusercontent.com/misskey-dev/assets/main/misskey.svg" target="_blank" download>
<img src="https://raw.githubusercontent.com/misskey-dev/assets/main/misskey.svg">
</a>

## Icône
<a class="asset" href="https://raw.githubusercontent.com/misskey-dev/assets/main/icon.png" target="_blank" download>
<img src="https://raw.githubusercontent.com/misskey-dev/assets/main/icon.png">
</a>

<style>
.asset {
	display: block;
	background-color: #777;
	background-image:
		linear-gradient(45deg, #999 25%, transparent 25%),
		linear-gradient(135deg, #999 25%, transparent 25%),
		linear-gradient(45deg, transparent 75%, #999 75%),
		linear-gradient(135deg, transparent 75%, #999 75%);
	background-size: 25px 25px; /* Must be a square */
	background-position: 0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px; /* Must be half of one side of the square */
	animation: asset-bg 0.5s linear infinite;

	margin: 1em 0;
	padding: 16px;
	text-align: center;
}

@keyframes asset-bg {
  0% {background-position: 0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px;}
  100% {background-position: 12.5px 12.5px, 25px 12.5px, 25px 0px, 12.5px 25px;}
}
</style>
