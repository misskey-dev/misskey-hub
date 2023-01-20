---
home: true
title: Misskey Hub
heroImage: /banner.svg
tagline: 오픈소스 분산형 마이크로블로깅 플랫폼, Misskey의 공식 홈페이지
footer: Copyright (c) 2021 syuilo and other contributors
actions:
  - text: Misskey 시작하기
    link: ./docs/getting-started
    type: primary
  - text: 더 알아보기
    link: ./docs/misskey
    type: secondary
features:
  - title: 분산형🪐
    details: 다양한 서버에서 독립적인 커뮤니티가 운영되고 있으며, 이들은 모두 상호 연결되어 있습니다.
  - title: 가벼움🚀
    details: 빠르게 동작하는 Node.js를 이용하여, 많은 수의 서버와 연합하더라도 리소스를 많이 사용하지 않습니다.
  - title: 즐거움🍮
    details: 리액션이나 고도의 커스터마이징이 가능한 UI 등, 특징적인 기능을 가지고 있습니다.
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
