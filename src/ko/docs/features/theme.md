# 테마
테마를 적용해 미스키 클라이언트의 분위기와 느낌을 바꿀 수 있습니다.

## 테마 설정
`설정 > 테마`로 들어가 설정할 수 있습니다.

## 테마 작성
테마 오브젝트는 JSON5 형식으로 작성됩니다.
이러한 테마는 아래의 오브젝트 형식을 가지고 있습니다.
``` js
{
	id: '17587283-dd92-4a2c-a22c-be0637c9e22a',

	name: 'Danboard',
	author: 'syuilo',

	base: 'light',

	props: {
		accent: 'rgb(218, 141, 49)',
		bg: 'rgb(218, 212, 190)',
		fg: 'rgb(115, 108, 92)',
		panel: 'rgb(236, 232, 220)',
		renote: 'rgb(100, 152, 106)',
		link: 'rgb(100, 152, 106)',
		mention: '@accent',
		hashtag: 'rgb(100, 152, 106)',
		header: 'rgba(239, 227, 213, 0.75)',
		navBg: 'rgb(216, 206, 182)',
		inputBorder: 'rgba(0, 0, 0, 0.1)',
	},
}
```

* `id` ... 테마별로 지정하는 특정 ID입니다. UUID를 사용할 것을 권장합니다.
* `name` ... 테마의 이름
* `author` ... 테마 작성자
* `desc` ... 테마 설명 (오브젝트)
* `base` ... 라이트 혹은 다크 테마
	* 밝은 테마에 `light`, 어두운 테마에 `dark`를 사용하세요.
	* 이 설정은 여기에 설정한 테마의 기본 테마를 덮어씌웁니다.
* `props` ... 테마의 스타일 설정. 아래 섹션에 설명되어 있습니다.

### 테마 스타일 정의
`props` 아래에 테마의 스타일을 정의합니다.
키는 CSS 변수의 명칭이며, 값은 해당 변수의 값을 정의합니다.
또한, `props` 변수를 통해 기본 테마를 덮어씌웁니다.
`base`가 `light`이면 기본 테마의 이름은 [_light.json5](https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_light.json5)이고, `dark`이면 [_dark.json5](https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_dark.json5)입니다.
이렇게 해서, 만약 `props`에 `panel` 값이 설정되어 있지 않다면 기본 테마의 `panel` 값이 이용됩니다.

#### 값 형식
* 16진수 형식의 색상 코드 (`#RRGGBB`, `#RRGGBBAA`)
  - 예시: `#00ff00`
* `rgb(r, g, b)` 형식의 색상 코드
  - 예시: `rgb(0, 255, 0)`
* `rgba(r, g, b, a)` 형식의 색상 코드
  - 예시: `rgba(0, 255, 0, 0.5)`
* 다른 키 값 사용
  - `@{key name}`을 이용해 다른 키의 값을 사용할 수 있습니다. `{key name}`을 다른 키의 이름으로 변경해 사용합니다.
	- 예시: `@panel`
* 상수 사용
  - `${constant name}`로 상수의 값을 이용할 수 있습니다. `{constant name}`을 상수의 이름으로 변경해 사용합니다.
	- 예시: `$main`
* 함수
  - `:{関数名}<{引数}<{色}`

#### 상수
상수는 CSS 값을 지정하고 싶지만 해당값을 출력하지 않고 다른 CSS 값으로서만 이용하려 할 때 유용합니다.

#### 함수
WIP
