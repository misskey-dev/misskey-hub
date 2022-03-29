---
description: 'Misskey를 이용하면서 자주 묻는 질문에 대해 다룹니다.'
---

# 자주 묻는 질문
여기에서는 Misskey를 이용하면서 자주 묻는 질문에 대해 다루고 있습니다. <br>
Misskey 프로젝트 자체에 대한 자주 묻는 질문은 [여기에서](./misskey)에서 확인하실 수 있습니다.

## Android/iOS용 어플리케이션이 있나요?
Misskey 프로젝트에서 특정 OS를 대상으로 하여 개발하고 있는 어플리케이션은 없지만, 제 3자에 의해 개발된 서드파티 어플리케이션이 존재합니다. 자세한 사항은 [여기](./apps)에서 확인하실 수 있습니다.

단, 서드파티 어플리케이션은 Misskey의 최신 기능을 이용할 수 없는 경우가 필연적으로 발생하기 때문에, 필요한 경우가 아니라면 공식 Misskey Web 클라이언트를 이용하시는 것을 추천드립니다. 또한, 공식 Web 클라이언트는 PWA를 지원하고 있어 일반적인 앱처럼 사용하실 수 있습니다. 자세한 사항은 [여기](./todo)에서 확인하실 수 있습니다.

## Mastodon용 어플리케이션으로 로그인할 수 있나요?
Misskey은 Mastodon의 API와 호환되지 않아, 일부를 제외하면 Mastodon용 어플리케이션이나 웹 클라이언트로는 Misskey를 이용하실 수 없습니다.
Misskey 공식 웹 클라이언트를 이용해 주십시오.

## 다른 서버의 유저를 팔로우하고 싶어요!
메뉴에서 검색을 선택하여, 팔로우하려는 유저의 주소를 입력하여 다른 서버의 유저를 찾을 수 있습니다. 유저의 주소는 이메일 주소와 비슷한 형태로, **@로 시작하는 사용자명**과 **유저가 속한 서버의 호스트명**으로 이루어져 있습니다.

예를 들어, `misskey.io`에 있는 `@syuilo`라는 유저를 찾을 때에는, `@syuilo@misskey.io`와 같이 입력합니다.

Misskey뿐만 아니라, Mastodon이나 Pleroma를 비롯한 많은 분산형 플랫폼에서 이러한 주소 형식을 사용하여 다른 서버의 유저를 찾을 수 있습니다.

## misskey.io는 Misskey 공식 인스턴스인가요?
misskey.io는 Misskey 공식 인스턴스가 아니며, Misskey 프로젝트와 별개로 운영되고 있습니다. misskey.io는 특정한 주제 없이 다양한 이야기가 오가며, 가벼운 마음으로 이용할 수 있는 Misskey 최대 규모 인스턴스입니다.

## 「Misskey」の名前の由来は何ですか？
syuiloがその名前を考えていたときに偶然聴いていた、May'nの楽曲『Brain Diver』の歌詞から採られています。

## "How do I take back a Renote?"
Press the three dots ("...") displayed next to the renote timestamp and select "Take back Renote". To read more about Renotes, please check [here](../features/note).

## "I don't want the preview of an URL to be displayed."
You can prevent an URL from being previewed using MFM. Please check the [MFM Cheatsheet](/mfm-cheat-sheet) for more details.

## "I want to add custom emoji."
Only administrators can add, edit or delete custom emoji. If you'd like to do either of these things, please ask your instance administrator.

## "I want to develop a Bot."
It is possible to develop a Bot using the Misskey API. Please, [see here](../advanced/develop-bot).

## Which service does the note translation function use?
[DeepL](https://www.deepl.com/) is being used for this.
