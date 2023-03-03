---
description: 'Misskey는 클라이언트, 연동 웹 서비스, 봇 등("어플리케이션"이라 합니다)을 개발할 수 있도록 API를 제공합니다.'
---

# Misskey API

::: tip
이 문서는 아직 국문으로 번역되지 않아, 일부 영문으로 제공됩니다.

API 레퍼런스는 [여기](/docs/api/endpoints)를 참고해주세요.
:::

Misskey는 클라이언트, 연동 웹 서비스, 봇 등("어플리케이션"이라 합니다)을 개발할 수 있도록 API를 제공합니다.
스트리밍 API도 제공하고 있어, 실시간 호환성을 가진 어플리케이션을 제작할수도 있습니다.

::: tip
공식 Misskey SDK나 서드파티 라이브러리를 이용하면 이 문서의 몇몇 단계를 간소화하는 등 API를 더 간편하게 이용할 수 있습니다. [여기](TODO)를 통해 자세히 알아보세요.
:::

API를 사용하려면, 먼저 API를 사용하려는 계정과 연결된 **엑세스 토큰**을 얻어야 합니다.
이 문서에서는 엑세스 토큰을 얻는 과정과 API를 활용하는 기본적인 방법을 알아봅니다.

## 엑세스 토큰 얻기

API는 일반적으로 요청을 생성하기 위해 액세스 토큰이 필요합니다.
액세스 토큰은 사용자를 식별하고 API를 통한 작업을 제어하는 자격 증명 집합입니다.

::: tip
사용자와 엑세스 토큰 사이에는 한 개에서 여러 개의 연결이 존재하며, 한 사용자가 여러 엑세스 토큰을 생성하는 것도 가능합니다.
:::

엑세스 토큰은 손쉽게 [직접 얻거나](#엑세스-토큰-수동으로-생성하기) [어플리케이션을 사용하려는 유저로부터 얻을](#엑세스-토큰-생성-요청하기) 수 있습니다.

### 엑세스 토큰 수동으로 생성하기

엑세스 토큰은 Misskey Web의 '설정 > API'에서 생성할 수 있습니다.

::: warning
엑세스 토큰은 다른 사람과 공유하지 마십시오.
:::

### 엑세스 토큰 생성 요청하기

어플리케이션의 사용자로부터 엑세스 토큰을 얻으려면, 뒤에 설명되어 있는 방법으로 요청할 수 있습니다.

::: tip
아래에서 설명하는 것은 MiAuth를 통해 앱을 만들지 않고도 액세스 토큰을 발행하는 방법입니다.

[기존처럼 앱을 생성해 액세스 토큰을 취득할 수도 있습니다.](./app.md)
:::

#### 1단계

UUID를 생성하세요. 이 UUID는 앞으로 **세션 ID**라 부르게 됩니다.

::: warning
이 세션 ID는 매번 생성해야 하며, 재사용되어서는 안 됩니다.
:::

#### 2단계

어플리케이션의 인증 폼이 사용자의 브라우저에 표시될 것입니다. 인증 폼은 이러한 URL로 표시될 것입니다:

```:no-line-numbers
https://{host}/miauth/{session}
```

여기에서

- `{host}`는 사용자의 인스턴스 호스트(주로 사용자로부터 직접 입력받습니다)이고,
- `{session}`은 세션 ID입니다.

이 URL의 쿼리 파라미터로 몇몇 옵션을 지정할 수도 있습니다:

| 이름         | 설명                                                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`       | 어플리케이션 이름                                                                                                                |
| `icon`       | 어플리케이션 아이콘 이미지 URL                                                                                                   |
| `callback`   | 인증 후 사용자가 돌아갈 URL입니다. 쿼리 파라미터로 `session`이 추가됩니다.                                                       |
| `permission` | 어플리케이션이 요청하는 권한입니다.<br>권한은 `,`로 구분된 목록으로 요청됩니다. 권한 목록은 [여기](TODO)에서 확인할 수 있습니다. |

::: 예시

```:no-line-numbers
https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&permisson=write:notes,write:following,read:drive
```

:::

#### 3단계

사용자가 어플리케이션 엑세스 권한을 부여하면, 다음 양식으로 POST 요청을 전송하면 토큰이 포함된 JSON이 응답으로 전송됩니다.

```:no-line-numbers
https://{host}/api/miauth/{session}/check
```

여기에서

- `{host}`는 사용자의 인스턴스이며
- `{session}`은 세션 ID입니다.

응답에 포함된 항목은 다음과 같습니다:

| 이름    | 설명                      |
| ------- | ------------------------- |
| `token` | 사용자에 대한 엑세스 토큰 |
| `user`  | 사용자 정보               |

## Using the API
Once you have your API access token, you can use the API by making requests to the various endpoints.

::: tip

- All HTTP APIs are POST, and both request and response are in JSON format (excluding drive/files/create).
- Specify `Content-Type: application/json` in the request header.
- The access token is included in the request body JSON with the parameter name `i`.

:::

Example of a body with an access token (for meta):

```json
{
    "i": "HogEFugA1341",
    "detail": false
}
```

The access token is included in the request body JSON at the parameter `i`.

For more information on the API, see the [API Reference](./endpoints.html).

::: warning
Misskey does not use REST.
:::

In addition to the HTTP API, Misskey also provides a streaming API. More information about the streaming API can be found [here](./streaming/).

::: tip
Your Misskey instance also provides API documentation at `/api-doc`.
:::
