---
home: true
title: Misskey Hub
heroImage: /banner.svg
tagline: Situs web ofisial platform mikroblog interplanet open-source Misskey
footer: Hak cipta &copy; 2023 syuilo dan kontributor lainnya
actions:
  - text: Memulai
    link: ./docs/getting-started
    type: primary
  - text: Apa itu Misskey?
    link: ./docs/misskey
    type: secondary
features:
  - title: Terdistribusi 🪐
    details: Komunitas independen dijalankan di banyak server, dan semuanya saling terhubung.
  - title: Ringan 🚀
    details: Karena menggunakan Node.js, yang berjalan dengan kecepatan tinggi, ringan bahkan saat terfederasi dengan banyak server.
  - title: Menyenangkan 🍮
    details: Memiliki fitur-fitur unik seperti reaksi dan antarmuka yang sangat dapat disesuaikan sendiri.
---

<ClientOnly>
	<MkParticles/>
</ClientOnly>

<div class="contents">

# Sponsor
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
