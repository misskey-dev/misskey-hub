---
description: 'Misskey에 대하여 설명하는 문서입니다.'
---

# Misskey에 대하여

Misskey는 오픈소스 분산형 마이크로블로깅 플랫폼 프로젝트입니다.
개발은 일본의 syuilo에 의해 2014년부터 시작되었습니다.
드라이브, 리액션 등의 풍부한 기능과, 높은 커스터마이징 자유도를 갖춘 UI가 특징입니다.

## 역사
개발 초기에는 게시판 형식을 메인으로 하는 서비스였으나, 유저가 짧은 글을 게시하고, 그 글들을 시간 순서대로 흘러가는 '타임라인' 기능을 추가한 뒤로 인기가 높아져, 나중에는 이 기능에 비중을 두고 개발이 이루어 지게 됩니다.
당초에는 분산형이 아니었으나, 2018년에 ActivityPub을 통해 분산형 소셜 네트워킹을 지원함으로써 더욱 많은 분들에게 알려지고, 지금에까지 이릅니다.

::: tip
Misskey라는 이름은, syuilo가 프로젝트 이름을 구상할 때 우연히 듣고 있던 May'n의 노래 'Brain Diver'의 가사에서 따 온 것입니다.
:::

누구나 개발에 참가할 수 있으며, 지금도 활발하게 개발이 진행되고 있습니다.

## "분산형"이 무엇인가요?
<b>분산형(Distibuted)<b>, 또는 탈중앙형(Decentralized)이란, 여러 개의 서버에 산재하는 각각의 커뮤니티가 서로 <b>통신(연합/Federation)</b>함으로써, 컨텐츠를 주고 받는 <b>네트워크(연합우주/Fediverse)</b>를 형성하는 구조를 가리키는 말입니다.
이와 반대로, 서버가 하나밖에 존재하지 않거나, 여러 곳이 있더라도 서로의 교류가 없는 닫힌 구조를 중앙집권형 서비스라고 합니다. Twitter나 Facebook 등, 기존에 있던 대부분의 SNS 서비스가 이에 해당합니다.
분산형 서비스의 이점은 자신에게 맞는 운영자나 테마의 서버를 선택할 수 있다는 것입니다. 자신이 직접 서버를 만들 수도 있습니다. 어느 서버에 들어가도 같은 커뮤니티에 접근할 수 있습니다.

## 지금도, 앞으로도 오픈 소스
Misskey는 지금까지, 그리도 앞으로도 계속 오픈소스 프로젝트로서 존재할 것입니다. 여기에서 오픈 소스란 <b>소프트웨어의 소스 코드(원본)이 공개</b>되어 있어, 누구나 열람할 수 있는 것을 말하며, 소스 코드의 수정이나 재배포까지 오픈 소스의 정의에 포함하는 경우도 있습니다.
Misskey의 모든 소스 코드는 [AGPL](https://github.com/misskey-dev/misskey/blob/develop/LICENSE) 라이선스 하에 [공개](https://github.com/misskey-dev)되어 있으며, 누구나 자유롭게 열람, 사용, 수정 및 변형, 재배포할 수 있습니다.
오픈 소스로 공개함으로써 자신이 원하는 대로 프로그래램을 변경하거나, 유해한 코드가 포함되어 있지 않은지 확인할 수 있고, 아무나 개발 과정에 참여하는 것이 가능해집니다.
앞서 언급한 분산형 체계를 실현하는 것 또한, 오픈 소스와 뗄레야 뗄 수 없는 관계를 유지하고 있습니다.
재차 언급되고 있지만, Twitter나 Facebook과 같은 영리 서비스들 대부분은 오픈 소스가 아닙니다.

::: tip
기술적인 부분으로, Misskey의 소스 코드는 Git으로 관리되고 있으며, 저장소는 [GitHub에 의해 호스팅되고 있습니다.](https://github.com/misskey-dev)
:::

## 개발에 참가하거나 프로젝트를 지원하기
Misskey가 마음에 드셨다면 부디 저희 프로젝트를 지원해 주시기 바랍니다. 아래에서 설명하는 것과 같이 프로젝트를 지원하는 방법은 다양하며, 개발에 대한 지식이 없더라도 프로젝트를 지원하는 방법은 여러 가지 있으니, 누구나 부담없이 참가하거나 기여할 수 있습니다. 여러분의 많은 응원을 기다리고 있겠습니다.

### 기능 추가나 버그 수정
개발에 대한 지식이 있는 분이라면, 소스 코드 편집에 참가하는 방식으로 프로젝트에 기여할 수 있습니다.
기여에 대한 가이드라인은 [이 문서에서 확인하실 수 있습니다](https://github.com/misskey-dev/misskey/blob/develop/CONTRIBUTING.md).

### 논의에 참가하기
새로운 기능, 또는 기존에 있던 기능에 대한 의견이나, Misskey에서 발생하는 버그를 제보받고 있습니다.
이러한 논의는 [GitHub](https://github.com/misskey-dev)  저장소 또는 [포럼](https://forum.misskey.io/) 등에서 이루어집니다.

### 텍스트 번역하기
Misskey는 다국어를 지원하고 있습니다. (국제화, Internationalization이나 i18n이라고도 합니다). 원래는 일본어로 제공되나, 자원봉사자 분들에 의해 다른 언어로 번역이 이루어지고 있습니다.
번역 작업에 참가하시는 것으로도 Misskey 프로젝트에 기여하실 수 있습니다.
Misskey의 번역은 [Crowdin에서 제공하는 서비스](https://crowdin.com/project/misskey)를 통해 관리하고 있습니다.

### 이용 경험을 공유하기
이용 상의 버그 뿐만 아니라, Misskey를 사용하면서 느낀 점, 재미있었던 것들도 공유해 주세요. 사소하게 느껴질 지도 모르지만, 개발의 원동력으로 이어지는 엄연한 기여입니다.

### 미스키스트를 늘리기
Misskey를 사용하는 유저를 "미스키스트"(Misskist)라고 부릅니다.
친구나 지인을 Misskey에 초대하는 것을 비롯하여 다양한 방법으로 Misskey를 널리 알려 주는 것 또한 개발에 대한 동기 부여로 이어집니다.

### 기부하기
Misskey는 영리 목적의 사업이 아니며, 무료로 이용할 수 있기 때문에 모든 수익을 기부로 의존하고 있습니다. (인스턴스에 따라 광고를 통해 수익을 얻는 경우도 있으나, 어디까지나 해당 인스턴스의 운영자에 의한 것으로 개발자에 직접 돌아오지 않습니다)
프로젝트에 기부해 주시면 개발을 계속할 수 있게 되며, 앞으로도 Misskey 프로젝트를 지속 가능하게 하는 데에 기여할 수 있습니다.
기부는 일반적으로 [Patreon](https://www.patreon.com/syuilo)을 통해 접수하고 있습니다.
일정 금액 이상 기여해 주시면, Misskey Web의 정보 페이지에 기부자분의 성함을 기재해 드리고 있습니다.

마찬가지로 서버의 운영자도 대부분 수익을 내지 않습니다. 서버를 운영하는 것에는 필연적으로 비용이 발생하기 때문에, 각 서버의 운영자를 지원하는 것도 검토해 주시기 바랍니다.
개발에 직접적으로 영향을 주는 것은 아니나, 다양한 서버가 존재함으로써 프로젝트가 존속하고 있는 점에서 운영이 지속되는 것 또한 개발과 마찬가지로 중요합니다.

## 자주 묻는 질문
### 이 프로젝트의 지향점은 무엇인가요?
엄밀히 말하면, 막연한 목표이지만 널리 쓰이는 범용 플랫폼이 되는 것을 목표로 하고 있습니다.
Misskey는 다른 프로젝트와 다르게 어떤한 사상(반 중앙집권 등)이나 비전에 기반하지 않으며, 중립적으로 개발되고 있습니다.
저희는 이 중립성이 오히려 특정 방향성에 얽매이지 않은 유연함을 만들어 내는 것이라고 믿고 있습니다.
<!-- TODO: Link to Roadmaps -->

### 기업에 의해 개발되고 있나요?
No.Misskey is being developed by an individual person and not commercialized through connection with any particular company. Development members are generally volunteers. Additionally, while there are some corporate sponsors, development is still centered around the community.

### Misskey는 누가 운영하고 있나요?
Due to the distributed nature of Misskey, each individual server has their own administration.Therefore, not all of Misskey is managed by one individual person or company. This means that, as the development team does not control individual servers, for management-related questions you should contact your server's administration instead. You can verify who is managing your individual server on [this page](/about). If you were to create a server, then you would also become its administrator.

### 어떤 서버를 선택해야 하나요?
[You can find an (incomplete) list of servers here.](../instances.md) Depending on the server, its community or central theme (for example, liking a show) may vary, so if there is a server that suits your interests, joining it would likely be a good choice. Besides that, server size, userbase, country or spoken language, reliance or trust in the administration team and many other things can also serve as criteria. There is however no single server that serves as the official server of Misskey.You also have the choice of creating a new server of your own.

Generally speaking, no matter which server you join, you will still be able to connect with users from all other servers.

### How can I create my own server?
Thank you for having an interest in creating a Misskey server. In the current year of 2021 there is no specialized Misskey hosting service, so creating a new server requires a certain amount of knowledge. Please see [here](./install.md) for more information regarding this.

### Misskey는 어떤 기술을 이용하고 있나요?
As development on Misskey progressed, the technology it has used has changed greatly.In the beginning, it used a combination of MySQL + PHP + jQuery, but currently uses the following.
- Server-side: Node.js
- Database: PostgreSQL, Redis
- UI Framework: Vue.js
- Programming language: TypeScript

In addition to this, from Misskey derived technology such as MFM or AiScript are also being used.

### Mastodon의 포크 버전인가요?
No.Misskey is a project completely different from Mastodon or other alike projects. It has been in development for a long time already.However, it only became a distributed network after the appearance of Mastodon. Besides both projects implementing the ActivityPub protocol, there is no relation between the two.

### iOS / Android 용 앱이 있나요?
While no official Misskey app for either OS exists, there are several third-party applications. For details, please check [here](./apps).

However, functionality of third-party applications will inevitably lag behind the official Web client, so unless you really want to use a native application, we recommend the official Web client instead. As the Misskey Web client supports PWA, it is also possible to make it act as if it was a native application instead. For details regarding this, please check [here](todo).

### Misskey의 로고나 아이콘을 다운로드 받을 수 있나요?
Please refer to the [assets collection](../appendix/assets.html).

### 가끔 가다 고양이 귀가 붙어있는 귀여운 캐릭터가 보이는데...
It's Misskey's guardian deity, Ai.(They called Ai cute, yay!)
<div class="info">ℹ️ To read more about Ai, check <a href="https://xn--931a.moe/" target="_blank">here</a> (Japanese-only).</div>
