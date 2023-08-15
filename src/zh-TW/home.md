---
home: true
title: Misskey Hub
heroImage: /banner.svg
tagline: 開放原始碼的分散式微網誌平台「Misskey」的官方網站
footer: Copyright &copy; 2023 syuilo and other contributors
actions:
  - text: 開始使用Misskey
    link: /docs/getting-started
    type: primary
  - text: Misskey是什麼？
    link: /docs/misskey
    type: secondary
features:
  - title: 分散🪐
    details: 獨立的社群在多個伺服器上運作，並且彼此互相連接。
  - title: 輕量🚀
    details: 由於採用高速運行的Node.js，即使與許多伺服器互連也能輕鬆地運作。
  - title: 樂趣🍮
    details: 具備獨特的功能，例如反應與可高度自訂的UI。
---

<ClientOnly>
	<MkParticles/>
</ClientOnly>

<div class="contents">

# Sponsors
<div class="sponsors">
	<a class="rss3" title="RSS3" href="https://rss3.io/" target="_blank"><img src="/sponsors/rss3.svg" alt="RSS3"></a>
</div>
</div>

<style>
.hero {
	position: relative;
	z-index: 2;
}

.contents {
	text-align: center;
}

.sponsors {
	text-align: center;
	margin-bottom: 32px;
}

.sponsors > .rss3 {
	display: inline-block;
	padding: 0px 20px;
	background: #fff;
	border: solid 1px #000;
}
.sponsors > .rss3 img {
	display: inline-block;
	height: 120px;
}
</style>
