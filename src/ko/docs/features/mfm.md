# MFM
Misskey를 위한 마크다운 문법인 MFM은 Misskey 내의 여러 곳에서 활용할 수 있는 마크업 언어입니다.

::: tip
기본적인 문법은 Markdown과 호환됩니다.
:::

::: tip
모든 MFM은 중첩할 수 있습니다. `$[`...`]`, `<>`...`</>`의 ... 부분에 중첩할 MFM이 있는 내용을 넣으면 중첩 적용됩니다.  
단 가독성 등의 문제로 중첩의 정도에는 제한이 있기에, 너무 많은 중첩은 삼가해주세요.
:::

## MFM을 사용할 수 있는 곳 예시
- 노트 내용
- 콘텐츠 경고
- 유저네임
- 프로필

## 기본 MFM 문법
### 굵은 글씨
글자를 **굵게** 표시해 강조할 수 있습니다.
```markdown:no-line-numbers
**Bold**
__Bold__
```

### 기울이기
글자를 <i>기울임꼴</i>로 표시할 수 있습니다. 이텔릭체라고도 불립니다.
```markdown:no-line-numbers
<i>Italic</i>
```

### 작은 글자
내용을 <small>작고 얇게</small> 표시할 수 있습니다.
```markdown:no-line-numbers
<small>작게</small>
```

### 취소선
글자에 ~~취소선~~을 그을 수 있습니다.
```markdown:no-line-numbers
~~Cancel~~
```

### 인용
> 인용글을 나타낼 때 사용하는 문법입니다.

```markdown:no-line-numbers
> 인용글을 여기에 입력하는 거에요!
```

### 하이퍼링크
일반적으로 링크를 그대로 입력하면 하이퍼링크로 동작합니다. 하지만 일부 동작하지 않는 경우가 있으니 `<url...>`의 형태로 적는 것도 허용됩니다.
```markdown:no-line-numbers
https://misskey.io
<https://misskey-hub.net>
[Misskey GitHub](https://github.com/misskey-dev/misskey)
[Misskey Hub GitHub](<https://github.com/misskey-dev/misskey-hub>)
```

::: tip
URL 미리보기를 숨기려면 URL의 가장 마지막에 ?를 입력하면 됩니다.
```markdown:no-line-numbers
<https://misskey-hub.net/ko?>
```
:::

### 소스코드와 코드 블록
문장 중간에 짧은 코드나 키워드를 넣고 싶다면, 문장 중간에 ` 문자로 둘러싼 문구를 넣으면 됩니다.
```markdown:no-line-numbers
`<: "Hello, world!"`
```

긴 코드를 입력하려면 ` 문자 세 겹으로 둘러싼 코드 블록을 넣어야 해요.
<div class="language-text ext-text"><pre v-pre class="language-text"><code>```
~~(#i,100) {
	&lt;: ? ((i % 15) = 0) "FizzBuzz"
	.? .? ((i % 3) = 0) "Fizz"
	.? .? ((i % 5) = 0) "Buzz"
	. . i
}
```
</code></pre></div>

::: tip
일반적으로, Markdown에서는 여는 세 겹의 ` 뒤에 붙여 그 코드의 성격을 명시하는 것이 가능합니다. GitHub 등 대부분의 Markdown 렌더링 기능이 있는 곳에서는 이에 따라 스타일링을 해주기도 해요.  
다만 Misskey에서는 이를 무시하고 AiScript 기반으로 스타일링하는 것으로 보입니다.
:::

### 멘션
멘션을 하면 멘션받은 사용자에게 알림이 발송됩니다. `@` 마크와 사용자 이름으로 특정 사용자를 나타냅니다.  
리모트 사용자인 경우, 추가적인 `@` 뒤에 해당 서버의 주소까지 전부 입력해야 정상 동작합니다. 로컬 사용자의 경우 서버 주소 입력을 생략할 수 있습니다.
```markdown:no-line-numbers
@alice
@alice@example.com
```

### 가운데 정렬
`<center>`와 `</center>`로 내용을 감싸면 그 내용을 공간의 중앙에 오게 할 수 있습니다. 줄 단위로만 적용하는 것이 가능하며, 여러 줄에 적용하는 것도 가능합니다.

### 플레인
안쪽의 구문을 모두 비활성화합니다.
```:no-line-numbers
<plain>**bold** @mention #hashtag `code` $[x2 🍮]</plain>
```

### 해시태그
`#` 마크와 이름을 이어 적어 해시태그를 작성할 수 있습니다.

::: tip
해시태그에 대한 더 자세한 내용은 [여기](./hashtag.md)에서 확인해주세요.
:::

```:no-line-numbers
#misskey
```

### 커스텀 이모지
`:`으로 이름을 둘러싸면 커스텀 이모지를 표시할 수 있습니다.

::: tip
커스텀 이모지에 관련한 더 자세한 내용은 [여기](./custom-emoji.md)를 참조해주세요.
:::

```:no-line-numbers
:misskey:
```

### 흐리게
내용을 흐리게 가릴 수 있습니다. 마우스를 위에 올려놓거나 터치하면 내용을 볼 수 있습니다.
```:no-line-numbers
$[blur MisskeyでFediverseの世界が広がります]
```

## 고급 MFM 문법
### 반전
내용을 상하 또는 좌우로 반전시킵니다.
```:no-line-numbers
$[flip MisskeyでFediverseの世界が広がります]
$[flip.v MisskeyでFediverseの世界が広がります]
$[flip.h,v MisskeyでFediverseの世界が広がります]
```

### 돌리기
내용을 일정 각도 돌려서 표시합니다.
```:no-line-numbers
$[rotate 기본적으로 90도 돌아가요]
$[rotate.deg=30 30도만 돌릴수도 있어요]
$[rotate.deg=-70 음수 각도도 됩니다]
```

### 글자, 배경 색상 변경
글자와 배경의 색을 바꿀 수 있습니다.
```:no-line-numbers
$[fg.color=0af 글자색] $[bg.color=c3f8 배경색]
```

::: tip
`color`는 HEX 컬러 코드를 입력합니다. RGB, RGBA, RRGGBB 형식을 지원합니다.
:::

### 글꼴
글꼴을 강제로 변경해 표시할 수 있습니다.
```:no-line-numbers
$[font.serif MisskeyでFediverseの世界が広がります]
$[font.monospace MisskeyでFediverseの世界が広がります]
$[font.cursive MisskeyでFediverseの世界が広がります]
$[font.fantasy MisskeyでFediverseの世界が広がります]
```

### 위치 바꾸기
글자의 위치를 변형해 표시할 수 있습니다. 기존의 KaTEX 문법이 삭제되면서 대체용으로 추가되었습니다.
```:no-line-numbers
* 본 예제는 https://k.lapy.link/@lapy/pages/MFM 에서 가져왔습니다.
$[position.y=-0.5 위로] $[position.x=-0.5 조금 옆으로]
이모지 쓰다듬기 -> :lapy_lapy3:$[position.x=-2,y=-0.3 :patting_hand:]
```

### 글자 늘리기/줄이기
내용을 잡아 늘리거나 누를 수 있습니다. 가능한 범위는 0~5. 기존의 KaTEX 문법이 삭제되면서 대체용으로 추가되었습니다.
```:no-line-numbers
$[scale.x=1,y=0.5 위아래 누르기] $[scale.x=0.5,y=1 좌우로 누르기]
```

::: tip
단순히 크게 표시하고 싶다면, `x2`, `x3`, `x4`를 이용할 수도 있습니다.
이 경우, 좌우의 늘리는 정도와 위아래의 늘리는 정도가 동일합니다.

```:no-line-numbers
$[x2 두 배]
$[x3 세 배]
$[x4 네 배]
```

일반적으로 `x3` 정도만 되어도 아주 큽니다.
:::

## 움직이는 MFM
움직이는 MFM은 움직이는 것이 불편한 사용자를 위해 설정에서 움직이지 않도록 변경할 수 있습니다.  
거의 모든 움직이는 MFM은 `speed=1s` 등을 이용해 속도를 조절할 수 있습니다. 속도에는 소수를 사용할 수 있으며, 음수를 입력해 반대 방향으로 적용할 수도 있습니다.

### 무지개
무채색이 아닌 색상에 무지개 효과를 넣습니다.
```:no-line-numbers
$[rainbow.speed=3s 🍮]
```

### 반짝이
감싼 내용에 반짝이 효과를 추가합니다.
```:no-line-numbers
$[sparkle.speed=4s 반짝반짝! 이건 좀 느리게 한 거긴 하지만요]
```

### 강조 효과
특별한 강조 효과를 추가합니다.
```:no-line-numbers
$[tada 짜잔 효과]
$[jelly 말랑말랑 효과]
$[jump 통통 튀는 효과]
$[bounce 말랑말랑 튀는 효과]
$[shake 부들부들 떨어요]
$[twitch 아주 강하게 떨어요. 글을 읽기 어려울 수 있어요]
```

### 돌리기 효과
글자를 빙빙 돌릴 수 있습니다. `alternative`를 추가해 왕복하는 애니메이션으로 바꿀 수 있습니다.
```:no-line-numbers
$[spin 시계방향] $[spin.left 반시계방향]
$[spin.x 아래에서 위로 뒤집기] $[spin.x,left 위에서 아래로 뒤집기]
$[spin.y 오른쪽으로 뒤집기] $[spin.y,left 왼쪽으로 뒤집기]
```

### 검색
노트 중간에 검색창을 표시할 수 있습니다.
```:no-line-numbers
뉴진스의 하잎보이요 [Search]
아무 노래 Search
아이짱 [検索]
미스키 検索
```

## 개발자를 위한 정보

MFM의 파서는 별도의 라이브러리로 제공되고 있으며, 이를 적용해 클라이언트에서 MFM을 더 쉽게 이용할 수 있습니다.
- [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js) - Javascript 파서 라이브러리
