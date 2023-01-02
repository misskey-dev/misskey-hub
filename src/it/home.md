---
home: true
title: Misskey Hub
heroImage: /banner.svg
tagline: Sito ufficiale di Misskey, la piattaforma opensource di microblog interplanetario
footer: Copyright &copy; 2023 syuilo ed altri co-autori
actions:
  - text: Inizia con Misskey
    link: ./docs/getting-started
    type: primary
  - text: Che cos'è Misskey?
    link: ./docs/misskey.html
    type: secondary
features:
  - title: Distribuita 🪐
    details: Le comunità indipendenti si organizzano sui propri server, sebbene siano interconnesse.
  - title: Leggera 🚀
    details: Grazie al linguaggio di programmazione NodeJS e la capacità di sfruttare le risorse in modo efficiente, la piattaforma risulta leggera anche quando c'è traffico.
  - title: Divertente 🍮
    details: Le funzionalità uniche, come le reazioni infite e la personalizzazione, permettono di cambiare il divertimento ogni giorno, se lo desideri.
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
