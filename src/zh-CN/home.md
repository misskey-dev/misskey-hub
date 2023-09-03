---
home: true
title: Misskey Hub
heroImage: /banner.svg
tagline: 开源的星际微博客平台 Misskey 的官方网站
footer: Copyright &copy; 2023 syuilo and other contributors
actions:
  - text: 让我们开始吧！
    link: ./docs/getting-started
    type: primary
  - text: Misskey 是什么？
    link: ./docs/misskey
    type: secondary
features:
  - title: 分布式 🪐
    details: 独立社区在多个服务器上运行，这些服务器相互连接。
  - title: 轻量级 🚀
    details: 由于它使用的是高速运行的 Node.js，因此即使与大量服务器联合，它也是轻量级的。
  - title: 足够有趣 🍮
    details: 它具有反馈和高度可定制的用户界面等独特功能。
---

<ClientOnly>
	<MkParticles/>
</ClientOnly>

<div class="contents">

# 赞助者
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
