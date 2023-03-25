---
home: true
title: Misskey Hub
heroImage: /banner.svg
tagline: Oficjalna strona internetowa otwartoźródłowej interplanetarnej platformy do mikro-blogowania Misskey 
footer: Prawa Autorskie &copy; 2023 syuilo i inni współpracownicy
actions:
  - text: Rozpocznij
    link: ./docs/getting-started
    type: primary
  - text: Czym jest Misskey?
    link: ./docs/misskey
    type: secondary
features:
  - title: Rozproszona 🪐
    details: Niezależne społeczności działające na wielu serwerach połączonych z sobą.
  - title: Lekka 🚀
    details: Ponieważ używa Node.js które działa bardzo szybko, jest bardzo lekka nawet jeżeli łączy się z dużą liczbą serwerów 
  - title: Fun 🍮
    details: Ma wyróżniające się cechy jak reakcje i bardzo personalizowalny interfejs
---

<ClientOnly>
	<MkParticles/>
</ClientOnly>

<div class="contents">

# Sponsorzy
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
