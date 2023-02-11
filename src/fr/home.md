---
home: true
title: Misskey Hub
heroImage: /banner.svg
tagline: Site officiel de la plateforme ouverte de microblogage interplanétaire Misskey
footer: Copyright &copy; 2023 syuilo et autres contributeur·ice·s
actions:
  - text: Débuter
    link: ./docs/getting-started
    type: primary
  - text: Qu’est ce que Misskey?
    link: ./docs/misskey
    type: secondary
features:
  - title: Distribué 🪐
    details: Independent communities are run on multiple servers, and these are interconnected.
  - title: Léger 🚀
    details: Because it uses Node.js, which runs at high speed, it is lightweight even when federated with a large number of servers.
  - title: Fun 🍮
    details: It has distinctive features such as reactions and a highly customizable UI.
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
