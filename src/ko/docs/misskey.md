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
A <b>Distributed</b> service, also called a <b>Decentralized</b> service, refers to a service which features the division of a community into many servers that all mutually <b>communicate (federate)</b> with each other to share their contents, building a <b>network (Fediverse)</b>. Services for which only one server exists, or for which many independent server exist, are called centralized. Most services fall under the category of centralized, some examples for this are Twitter or Facebook. The advantage of distributed services is being able to select the administration or server theme that suits you freely.It's also possible for you to make your own server.Thanks to the federated nature, you will be able to access the same community, no matter which server you choose.

## Always Open-Source
Misskey has always been, and will always be, open source.Open source means, simply speaking, <b>making the source code of software (a program) publicly available</b>.This also includes being able to adjust or redistribute the source code in its definition. The entirety of Misskey's source code is [being licensed](https://github.com/misskey-dev) under an open-source license called [AGPL](https://github.com/misskey-dev/misskey/blob/develop/LICENSE), which means anyone can freely inspect, use, adjust, change or redistribute as they see fit. Open source has many merits, including allowing anyone being able to make changes as they like, to make sure the code does not include any harmful components and being able to easily participate in its development. For realizing the distributed nature of Misskey, this concept of open source is indispensable. Using the same example as before, most profit-oriented services like Twitter, Facebook etc. are not open source.

::: tip
Technically speaking, Misskey's source code is being managed via Git, and its repository is being hosted at [GitHub.](https://github.com/misskey-dev)
:::

## Joining development and supporting the project
If you like Misskey, please support the project.Supporting the project can be done in many ways, with some of them introduced below.Some of these do not require programming skills, so anyone can feel free to support Misskey their own way.We're always waiting for you.

### Adding features or fixing bugs
If you possess software engineering skills, you can contribute to the project through editing its source code. For guidelines regarding this, please see [here](https://github.com/misskey-dev/misskey/blob/develop/CONTRIBUTING.md).

### Participating in discussions
You can contribute by sharing your opinion on new or existing features, as well as by reporting bugs. Such discussions can be held at [GitHub](https://github.com/misskey-dev) or the [Forums](https://forum.misskey.io/) etc.

### Translating text
Misskey is available in many languages (also called i18n, which is an abbreviation for Internationalization).While the original language is generally japanese, volunteers are translating Misskey into other languages. Helping out with this translation work is also a form of contributing. Misskey uses a service called [Crowdin to manage its translations.](https://crowdin.com/project/misskey)

### Sharing your impressions
Besides reporting bugs, please also feel free to share positive impressions such as which parts of Misskey you personally like, or things about Misskey that you find fun.As things like these serve as motivation for the developers, it also counts as indirect support for the project.

### Increasing the number of Misskists
"Misskist" refers to the people using Misskey. By spreading the word about Misskey through introducing it to your acquaintances, the number of Misskists may increase, which serves as motivation for the developers.

### Making donations
Misskey is not a business, and stays free to use by receiving its earnings through donations from everyone.(Depending on the instance, some revenue may be earned through showing advertisments, but these earnings go straight to the instance administrator and not to the developers of Misskey) As donations make it possible for the project to continue to be developed, they are another way of supporting Misskey. Donations are generally accepted via [Patreon](https://www.patreon.com/syuilo). By donating a certain amount of money, you can also have your username displayed on Misskey's [About page](/about-misskey).

In addition to this, server administrators are also generally speaking not earning revenue.As operating a server costs money, please also consider supporting your server's administrator. This does not have a direct relation to the development of Misskey, but the existence of servers is what makes up the project, meaning the continued existence of servers is just about as important as that of the project itself.

## Frequently Asked Questions
### What is this project aiming to achieve?
To put it bluntly, while this is a bit vague, Misskey is aiming to be a widely-used all-purpose platform. Unlike other platforms, Misskey is not grounded in a specific idea (for example, anti-centralization) or vision and being developed with that in mind, so it's a bit "aimless" in this respect. On the other hand though, this creates a flexibility due to not being bound by a specific direction to go towards.
<!-- TODO: ここにロードマップへのリンク -->

### Is Misskey being developed by a company?
No.Misskey is being developed by an individual person and not commercialized through connection with any particular company. Development members are generally volunteers. Additionally, while there are some corporate sponsors, development is still centered around the community.

### Who is managing Misskey?
Due to the distributed nature of Misskey, each individual server has their own administration.Therefore, not all of Misskey is managed by one individual person or company. This means that, as the development team does not control individual servers, for management-related questions you should contact your server's administration instead. You can verify who is managing your individual server on [this page](/about). If you were to create a server, then you would also become its administrator.

### Which server should I choose?
[You can find an (incomplete) list of servers here.](../instances.md) Depending on the server, its community or central theme (for example, liking a show) may vary, so if there is a server that suits your interests, joining it would likely be a good choice. Besides that, server size, userbase, country or spoken language, reliance or trust in the administration team and many other things can also serve as criteria. There is however no single server that serves as the official server of Misskey.You also have the choice of creating a new server of your own.

Generally speaking, no matter which server you join, you will still be able to connect with users from all other servers.

### How can I create my own server?
Thank you for having an interest in creating a Misskey server. In the current year of 2021 there is no specialized Misskey hosting service, so creating a new server requires a certain amount of knowledge. Please see [here](./install.md) for more information regarding this.

### What kind of technology does Misskey use?
As development on Misskey progressed, the technology it has used has changed greatly.In the beginning, it used a combination of MySQL + PHP + jQuery, but currently uses the following.
- Server-side: Node.js
- Database: PostgreSQL, Redis
- UI Framework: Vue.js
- Programming language: TypeScript

In addition to this, from Misskey derived technology such as MFM or AiScript are also being used.

### Is this a fork of Mastodon?
No.Misskey is a project completely different from Mastodon or other alike projects. It has been in development for a long time already.However, it only became a distributed network after the appearance of Mastodon. Besides both projects implementing the ActivityPub protocol, there is no relation between the two.

### Are there any apps for iOS / Android available?
While no official Misskey app for either OS exists, there are several third-party applications. For details, please check [here](./apps).

However, functionality of third-party applications will inevitably lag behind the official Web client, so unless you really want to use a native application, we recommend the official Web client instead. As the Misskey Web client supports PWA, it is also possible to make it act as if it was a native application instead. For details regarding this, please check [here](todo).

### Where can I download Misskey's logo or icon?
Please refer to the [assets collection](../appendix/assets.html).

### Who's that cute cat-eared girl that you see sometimes?
It's Misskey's guardian deity, Ai.(They called Ai cute, yay!)
<div class="info">ℹ️ To read more about Ai, check <a href="https://xn--931a.moe/" target="_blank">here</a> (Japanese-only).</div>
