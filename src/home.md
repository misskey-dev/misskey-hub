---
home: true
title: Misskey Hub
heroImage: /banner.svg
tagline: オープンソースの分散型マイクロブログプラットフォーム、Misskeyの公式サイト
footer: Copyright &copy; 2023 syuilo and other contributors
actions:
  - text: Misskeyを始める
    link: /docs/getting-started
    type: primary
  - text: Misskeyとは？
    link: /docs/misskey
    type: secondary
features:
  - title: 分散🪐
    details: 複数のサーバーで独立したコミュニティが運営され、それらが相互に繋がります。
  - title: 軽量🚀
    details: 高速で動作するNode.jsを採用しているため、多数のサーバーと連合していても軽量に動作します。
  - title: 楽しい🍮
    details: リアクションやカスタマイズ性の高いUIなど、特徴的な機能を備えています。
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
