---
description: MiAuth의 도입 이전의 액세스 토큰 취득 방법을 설명합니다.
---

# 앱 생성 방식에서의 액세스 토큰 취득 방법
MiAuth의 도입(12.27.0) 이전의 기존 액세스 토큰 취득 방법에 대해 설명합니다.
12.27.0 이전 버전의 인스턴스에서는 이 방식만 사용할 수 있습니다.

## 1. 어플리케이션 작성
[`app/create 엔드포인트`](endpoints/app/create.html)로 정보를 보내, `appSecret`을 취득합니다.
```json
{
    // 앱 이름
    "name": "test",
    // 앱 설명
    "description": "my test application",
    // 앱 권한
    "permission": ["write:notes"]
}
```

이때 `callbackUrl`에서 원하는 URL을 포함시키면, 다음 접근 허가 조작이 종료되었을 때 `token`을 쿼리 문자열에 포함시켜 리턴합니다.

## 2. 사용자에게 인증
[`auth/session/generate` 엔드포인트](endpoints/auth/session/generate)에 `appSecret`을 POST 요청합니다.
```json
{
    "appSecret": "fAb12cD34Ef56gH78Ij16kL32Mn64oPf"
}
```

`token`(여기에서는 `798b9f6e-248d-43a7-a919-fabc664027f1`)과 `url`을 반환하므로, 우선 해당 URL에 접속해 "액세스 허가"를 선택해야 합니다.

## 3. accessToken 요청
액세스 허가를 확인하면 [`auth/session/userkey` 엔드포인트](endpoints/auth/session/userkey)에 `appSecret`과 `token`을 POST합니다.
```json
{
  "appSecret": "fAb12cD34Ef56gH78Ij16kL32Mn64oPf",
  "token": "798b9f6e-248d-43a7-a919-fabc664027f1"
}
```

여기서 취득할 수있는 문자열을 `accessToken`이라 부릅니다. `accessToken`은 한 번만 취득할 수 있습니다.

## 4. i 생성
Node.js에서 `i`는 다음과 같이 생성하며, 설정 화면에서 취득하는 것과는 달리 64자리 16진수로 발급됩니다.
```javascript
const crypto = require("crypto")
const i = crypto.createHash("sha256")
    .update(accessToken + appSecret, "utf8")
    .digest("hex")
console.log(i)
```

## 5. 실제 작동 확인
```javascript
fetch("https://misskey.io/api/notes/create", {
    method: 'POST',
    body: JSON.stringify({
        i: "/* 여기에 i를 입력 */",
        text: "Hello Misskey API World with My Application!"
    }),
    headers: {
        'Content-Type': 'application/json',
    },
	credentials: 'omit',
});
```
