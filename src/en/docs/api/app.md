---
description: MiAuth導入以前のアクセストークン取得方法について説明する。
---

# アプリ作成方式でのアクセストークン取得方法

MiAuth導入（12.27.0）より前の、旧来のアクセストークン取得方法について説明します。  
12.27.0未満のバージョンのサーバーではこの旧来の方式を使用する必要があります。

## 1. アプリケーションの作成
[`app/create`エンドポイント](endpoints/app/create.html)に情報を送信し、`appSecret`を取得します。

```json
{
    // アプリの名前
    "name": "test",
    // アプリの説明
    "description": "my test application",
    // アプリのパーミッション
    "permission": ["write:notes"]
}
```

この時、`callbackUrl`でお好きなURLを含めると、次のアクセス許可操作が終了したときに`token`をクエリ文字列に含めながらそこにコールバックするようになります。

## 2. ユーザーに認証させる
[`auth/session/generate`エンドポイント](endpoints/auth/session/generate)に`appSecret`をPOSTします。

```json
{
    "appSecret": "fAb12cD34Ef56gH78Ij16kL32Mn64oPf"
}
```

`token`（ここでは仮に`798b9f6e-248d-43a7-a919-fabc664027f1`）と`url`を返してくるので、まずはこのurlにウェブブラウザでアクセスし「アクセスを許可」を選択。

## 3. accessTokenを問い合わせる
2が終わったことが確認できたら、[`auth/session/userkey`エンドポイント](endpoints/auth/session/userkey)に`appSecret`と先ほどの`token`をPOSTします。

```json
{
  "appSecret": "fAb12cD34Ef56gH78Ij16kL32Mn64oPf",
  "token": "798b9f6e-248d-43a7-a919-fabc664027f1"
}
```

ここで取得できる文字列は`accessToken`と呼ばれます。`accessToken`は一度限りしか取得できません。

## 4. iを生成
`i`は、Node.jsであれば以下のようなコードで生成でき、設定画面で取得するものとは違って64桁の16進数となります。

```javascript
const crypto = require("crypto")
const i = crypto.createHash("sha256")
    .update(accessToken + appSecret, "utf8")
    .digest("hex")
console.log(i)
```

## 5. 実際にテストする
```javascript
fetch("https://misskey.io/api/notes/create", {
    method: 'POST',
    body: JSON.stringify({
        i: "/* ここにiを入力 */",
        text: "Hello Misskey API World with My Application!"
    }),
    headers: {
        'Content-Type': 'application/json',
    },
	credentials: 'omit',
});
```
