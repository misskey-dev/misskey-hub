---
description: '關於 Misskey 的文件。'
---

# 關於 Misskey

Misskey是開放原始碼的分散式微網誌平台專案。
由日本的 syuilo 自 2014 年開始開發。
特點是具有雲端硬碟、反應等豐富的功能，以及高度可自訂的UI。

## 歴史
在開發的初期，主要的服務是布告欄，但是當增加了時間軸功能，使用者發布的短文按時序流動，它變得更受歡迎，並逐漸成為主要開發的服務。
最初並不是分散式的，但是在 2018 年實作了 ActivityPub 之後成為分散式，使這個服務被更多人認可和使用，並延續至今。

::: tip
Misskey 這個名稱，來自 syuilo 當時正在聽著藝人 May'n 的歌曲「Brain Diver」當中的歌詞。
:::

任何人都可以參與開發，現在仍在積極開發中。

## 什麼是分散式？
<b>分散式 (distributed)</b>，也被稱為<b>去中心化 (decentralized)</b>，社群分散存在多個伺服器上，透過彼此之間的<b>通訊 (聯邦、federation)</b>來形成內容共享<b>網路 (Fediverse)</b>是這個服務的特徵。
如果只存在單一的伺服器上，或者即使有多個伺服器存在但彼此獨立，這樣的情況下稱為中心化的服務，例如 Twitter 和 Facebook 等大多數的服務都屬於這個類型。
分散式的優點在於可以選擇適合自己的管理者和主題的伺服器，也可以自己建立伺服器。由於聯邦的關係，不論選擇哪個伺服器，都可以存取相同的社群。

## 始終開放原始碼
Misskey 無論是過去或未來都將持續保持開放原始碼。所謂的開放原始碼，簡單來說<b>軟體的原始碼（程式碼）是公開的</b>。有時也包括定義中允許對原始碼進行修改和重新分發。
Misskey 的所有原始碼都在一個名為 [AGPL](https://github.com/misskey-dev/misskey/blob/develop/LICENSE) 的開放原始碼授權下[公開](https://github.com/misskey-dev)，任何人都可以自由瀏覽、使用、修正、改編和重新分發。
開放原始碼具有多種優點，例如可以根據自己的需求自由修改，可以確保程式中沒有包含有害的處理，以及任何人都可以參與開發等。
正如前面提到的，要實現上述的分散式服務，開放原始碼是不可欠缺的要素。
再次提及，Twitter 和 Facebook 等大多數獲利的服務，並不是開放原始碼的。

::: tip
技術上，Misskey 的原始碼是以 Git 管理，並且儲存庫托管在 [GitHub 上。](https://github.com/misskey-dev)
:::

## 參與開發、支援專案
如果您喜歡 Misskey，請務必支援這個專案。你可以用以下介紹的各種方式來貢獻這個專案。有些方式不需要開發技能，任何人都可以輕鬆參與並作出貢獻。我們隨時期待您的加入。

### 添加功能或修復錯誤
如果您具備軟體工程師的技能，您可以透過編輯原始碼的方式貢獻本專案。
關於貢獻的指引在[這裡](https://github.com/misskey-dev/misskey/blob/develop/CONTRIBUTING.md)。

### 參與討論
您可以就新功能或現有功能提出意見、報告問題來作出貢獻。
這類討論在 [GitHub](https://github.com/misskey-dev) 以及[論壇](https://forum.misskey.io/)等進行。

### 文字翻譯
Misskey 支援多種語言 (i18n -internationalization 的簡稱)。雖然原始語言主要為日語，但志願者已經將它翻譯為其他語言。
您可以加入這個翻譯工作來貢獻 Misskey。
Misskey使用 [Crowdin 服務來管理翻譯工作。](https://crowdin.com/project/misskey)

### 發布你的感想
不只是錯誤報告，也請分享關於 Misskey 的優點、有趣之處等正面意見。這可以鼓勵開發，也是對專案的間接貢獻。

### 增加 Misskist 的人數
Misskist 是使用 Misskey 的人。
如果你向朋友介紹 Misskey 來傳播它，就會增加 Misskist 的數量並激勵開發。

### 捐獻
[請看這裡](./donate.md)

## 常見問題
### 這個專案的目標是什麼？
硬要說的話，我們的目標是成為一個被廣為使用的泛用平台，儘管這個目標相對模糊。
不同於其他專案，Misskey 的開發並不基於特定的思想（例如反中心化）或者願景，從這個角度來看，它更加平衡。
反而，這種方式產生了一種不受特定方向限制的靈活性，這正是我們所感受到的。
<!-- TODO: 路線圖的連結 -->

### Misskey 是由企業所開發的嗎？
不是。Misskey 的開發是由個人進行的，並且不涉及商業利益，因此沒有特定企業的參與。
開發成員基本上都是志願者。
雖然有時企業可能會對開發提供贊助，但開發仍然由個人社群主導。

### 是誰在運營？
由於 Misskey 是分散式的，每個伺服器都有不同的運營者。因此，所有 Misskey 的運營並不由特定的個人或企業負責。
此外，開發團隊也不負責運營，如果您有關於運營的問題，請聯繫您使用的伺服器的運營者。
您可以在伺服器的資訊頁面上查詢運營者的相關資訊。
如果您建立了自己的伺服器，那麼您就是這個伺服器的運營者。

### 該選擇哪個伺服器好呢？
[伺服器列表是公開的。](../instances.md)
有些伺服器可能會有特定的社群主題（例如特定的事物或興趣等），所以如果有適合自己主題的伺服器，選擇那裡可能是個好主意。
此外，您還可以考慮伺服器的規模、使用者群、所在國家和語言，以及運營者的可信度等因素。
請注意，Misskey 沒有官方的伺服器。您也可以選擇自己建立新的伺服器。

基本上，無論您選擇哪個伺服器，都可以與其他所有伺服器的使用者相互連接。

### 要如何建立伺服器呢？
感謝您對於建立 Misskey 有興趣。
截至2022年，還沒有提供 Misskey 的托管服務，因此建立伺服器需要一定的知識。
關於建立伺服器的方法請見[這裡](./install.md)。

### 使用了那些技術？
隨著 Misskey 的開發進展，使用的技術也發生了巨大的變化。在最初的開發階段，Misskey 使用的是 MySQL + PHP + jQuery 的組合，但已經演化為以下的形式：
- 伺服器端：Node.js
- 資料庫：PostgreSQL、Redis
- UI框架：Vue.js
- 程式語言：TypeScript

此外，還開發了一些源自 Misskey 的獨特技術，例如 MFM 和 AiScript。

### 這是 Mastodon 的分支嗎？
不，Misskey 是完全獨立於 Mastodon 和其他專案的專案。
就開發而言，Misskey 的開發比 Mastodon 更早。然而，它變成分散式是在 Mastodon 出現以後。
除了實現相同的分散式協議 ActivityPub 之外，這兩者之間沒有特別的相關性。

### 是否有 iOS/Android 的 App？
官方目前沒有開發此類原生操作系統的應用程式，但有一些第三方製造的應用程式可供使用。
詳細資訊請參考[這裡](./apps.md)。

然而，由於第三方製造的應用程式對於功能的支援可能會有延遲，如果沒有特別要求的話，我們建議使用官方的網頁客戶端。
此外，Misskey 的網頁客戶端支援 PWA，因此也可以像原生應用程式一樣運作。
詳細資訊請參考[這裡](todo)。

### Misskey 的標誌和圖標可以在哪裡取得？
[這裡](../appendix/assets.md)

### 那位時不時能看到戴著貓耳的可愛女孩是誰？
Misskey 的守護神小藍。小藍好可愛呀！

::: tip
關於小藍的資訊可以在[這裡](https://xn--931a.moe/)找到。
:::