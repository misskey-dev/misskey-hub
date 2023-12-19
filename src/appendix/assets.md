---
description: 'Misskeyのロゴ、アイコンなどのアセットのコレクションです。'
---

# アセット集
Misskeyのロゴ、アイコンなどのアセットのコレクションです。

::: tip
アセットは、**CC BY-NC-SA**のライセンスの下で自由にお使いいただけます🎉

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="CC BY-NC-SA" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
:::

::: tip
全てのアセットは、[misskey-dev/assets](https://github.com/misskey-dev/assets)で管理されています。
:::

## ロゴ
<a class="asset" href="https://assets.misskey-hub.net/public/misskey.svg" target="_blank" download>
<img src="https://assets.misskey-hub.net/public/misskey.svg">
</a>

## アイコン
<a class="asset" href="https://assets.misskey-hub.net/public/icon.png" target="_blank" download>
<img src="https://assets.misskey-hub.net/public/icon.png">
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
