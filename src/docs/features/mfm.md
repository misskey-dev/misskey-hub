---
description: 'MFMは、Misskeyの様々な場所で使用できる専用のマークアップ言語です。'
---

# MFM
MFMは、Markup language For Misskeyの略で、Misskeyの様々な場所で使用できる専用のマークアップ言語です。

::: tip
一部の構文はMarkdownやHTMLと互換性があります。
:::

## MFMが使用可能な場所の例
- ノート本文
- CW注釈
- ユーザーの名前
- ユーザーの自己紹介

## 構文
### メンション
アットマーク + ユーザー名で、特定のユーザーを示すことができます。
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
ナンバーサイン + タグで、ハッシュタグを示すことができます。
::: tip
ハッシュタグについての詳細は[こちら](./hashtag.md)を参照してください。
:::

```:no-line-numbers
#misskey
```

### URL
URLを示すことができます。
```:no-line-numbers
https://example.com
```

### リンク
文章の特定の範囲を、URLに紐づけることができます。
```:no-line-numbers
[example link](https://example.com)
```

### カスタム絵文字
コロンでカスタム絵文字名を囲むと、カスタム絵文字を表示させることができます。
::: tip
カスタム絵文字についての詳細は[こちら](./custom-emoji.md)を参照してください。
:::

```:no-line-numbers
:misskey:
```

### 太字
文字を太く表示して強調することができます。
```:no-line-numbers
**太字**
```

### 目立たなくする
内容を小さく・薄く表示させることができます。
```:no-line-numbers
<small>MisskeyでFediverseの世界が広がります</small>
```

### 引用
内容が引用であることを示すことができます。
```:no-line-numbers
> MisskeyでFediverseの世界が広がります
```

### 中央寄せ
内容を中央寄せで表示させることができます。
```:no-line-numbers
<center>MisskeyでFediverseの世界が広がります</center>
```

### コード(インライン)
プログラムなどのコードをインラインでシンタックスハイライトします。
```:no-line-numbers
`<: "Hello, world!"`
```

### コード(ブロック)
複数行のプログラムなどのコードをブロックでシンタックスハイライトします。
```:no-line-numbers
~ (#i, 100) {
	<: ? ((i % 15) = 0) "FizzBuzz"
		.? ((i % 3) = 0) "Fizz"
		.? ((i % 5) = 0) "Buzz"
		. i
}
```

### 反転
内容を上下または左右に反転させます。
```:no-line-numbers
$[flip MisskeyでFediverseの世界が広がります]
$[flip.v MisskeyでFediverseの世界が広がります]
$[flip.h,v MisskeyでFediverseの世界が広がります]
```

### フォント
内容のフォントを指定することができます。
```:no-line-numbers
$[font.serif MisskeyでFediverseの世界が広がります]
$[font.monospace MisskeyでFediverseの世界が広がります]
$[font.cursive MisskeyでFediverseの世界が広がります]
$[font.fantasy MisskeyでFediverseの世界が広がります]
```

### ぼかし
内容をぼかすことができます。ポインターを上に乗せるとはっきり見えるようになります。
```:no-line-numbers
$[blur MisskeyでFediverseの世界が広がります]
```

### プレーン
内側の構文を全て無効にします。
```:no-line-numbers
<plain>**bold** @mention #hashtag `code` $[x2 🍮]</plain>
```

## 開発者向け情報
MFMのパーサー実装はライブラリとして公開されており、簡単にクライアントにMFMを組み込むことが可能です。
- [misskey-dev/mfm.js](https://github.com/misskey-dev/mfm.js) - JavaScriptパーサー実装
