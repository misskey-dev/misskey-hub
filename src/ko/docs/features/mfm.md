# MFM
Misskey를 위한 마크다운 문법인 MFM은 Misskey 내의 여러 곳에서 활용할 수 있는 마크업 언어입니다.

::: tip
기본적인 문법은 Markdown과 호환됩니다.
:::

## MFM을 사용할 수 있는 곳 예시
- 노트 내용
- 콘텐츠 경고
- 유저네임
- 프로필

## 문법
### 멘션
멘션을 하면 멘션받은 사용자에게 알림이 발송됩니다. `@` 마크와 사용자 이름으로 특정 사용자를 나타냅니다.

```:no-line-numbers
@alice
```
```:no-line-numbers
@alice@example.com
```

### 해시태그
`#` 마크와 이름을 이어 적어 해시태그를 작성할 수 있습니다.

::: tip
해시태그에 대한 더 자세한 내용은 [여기](./hashtag.md)에서 확인해주세요.
:::

```:no-line-numbers
#misskey
```

### 링크
문장 일부분을 URL로 연결할 수 있습니다.
```:no-line-numbers
[example link](https://example.com)
```

### 커스텀 이모지
`:`으로 이름을 둘러싸면 커스텀 이모지를 표시할 수 있습니다.

::: tip
커스텀 이모지에 관련한 더 자세한 내용은 [여기](./custom-emoji.md)를 참조해주세요.
:::

```:no-line-numbers
:misskey:
```

### 굵은 글씨
글자를 굵게 표시해 강조할 수 있습니다.
```:no-line-numbers
**Bold**
```

### 작은 글자
내용을 작고 얇게 표시할 수 있습니다.
```:no-line-numbers
<small>MisskeyでFediverseの世界が広がります</small>
```

### 인용
내용이 인용임을 나타낼 수 있습니다.
```:no-line-numbers
> MisskeyでFediverseの世界が広がります
```

### 가운데 정렬
내용을 가운데 정렬할 수 있습니다.
```:no-line-numbers
<center>MisskeyでFediverseの世界が広がります</center>
```

### 인라인 코드
짧은 한 줄의 코드를 나타낼 때 이용합니다.
```:no-line-numbers
`<: "Hello, world!"`
```

### 코드 블록
` 마크를 3겹으로 감싸 여러 줄의 코드를 나타낼 수 있습니다.
<div class="language-text ext-text"><pre v-pre class="language-text"><code>```
~~(#i, 100) {
	&lt;: ? ((i % 15) = 0) "FizzBuzz"
	.? .? ((i % 3) = 0) "Fizz"
	.? .? ((i % 5) = 0) "Buzz"
	. . i
}
```
</code></pre></div>

### 반전
내용을 상하 또는 좌우로 반전시킵니다.
```:no-line-numbers
$[flip MisskeyでFediverseの世界が広がります]
$[flip.v MisskeyでFediverseの世界が広がります]
$[flip.h,v MisskeyでFediverseの世界が広がります]
```

### 글꼴
글꼴을 강제로 변경해 표시할 수 있습니다.
```:no-line-numbers
$[font.serif MisskeyでFediverseの世界が広がります]
$[font.monospace MisskeyでFediverseの世界が広がります]
$[font.cursive MisskeyでFediverseの世界が広がります]
$[font.fantasy MisskeyでFediverseの世界が広がります]
```

### 흐리게
내용을 흐리게 가릴 수 있습니다. 마우스를 위에 올려놓거나 터치하면 내용을 볼 수 있습니다.
```:no-line-numbers
$[blur MisskeyでFediverseの世界が広がります]
```

### 플레인
안쪽의 구문을 모두 비활성화합니다.
```:no-line-numbers
<plain>**bold** @mention #hashtag `code` $[x2 🍮]</plain>
```

## 개발자를 위한 정보

MFM의 파서는 별도의 라이브러리로 제공되고 있으며, 이를 적용해 클라이언트에서 MFM을 더 쉽게 이용할 수 있습니다.
- [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js) - Javascript 파서 라이브러리
