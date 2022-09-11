---
description: 'MFMは、Misskeyの様々な場所で使用できる専用のマークアップ言語です。'
---

# MFM
MFMは、Markup language For Misskeyの略で、Misskeyの様々な場所で使用できる専用のマークアップ言語です。

::: tip
一部の構文はMarkdownと互換性があります。
:::

## MFMが使用可能な場所の例
- ノート本文
- CW注釈
- ユーザーの名前
- ユーザーの自己紹介

## 構文
### メンション
::: tip
メンションについての詳細は[こちら](./mention.md)を参照してください。
:::

```:no-line-numbers
@alice
```
```:no-line-numbers
@alice@example.com
```

### ハッシュタグ
::: tip
ハッシュタグについての詳細は[こちら](./hashtag.md)を参照してください。
:::

```:no-line-numbers
#misskey
```

### カスタム絵文字
::: tip
カスタム絵文字についての詳細は[こちら](./custom-emoji.md)を参照してください。
:::

```:no-line-numbers
:misskey:
```

### リンク
```:no-line-numbers
[example link](https://example.com)
```

### 太字
```:no-line-numbers
**太字**
```

---

::: tip
使用可能なより多くの構文はMisskey Webの**MFMチートシート**で確認できます。
:::

## 開発者向け情報
MFMのパーサー実装はライブラリとして公開されており、簡単にクライアントにMFMを組み込むことが可能です。
- [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js) - JavaScriptパーサー実装
