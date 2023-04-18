---
description: '關於使用Misskey時的常見問題。'
---

# 常見問題
本節是關於使用Misskey時的常見問題。<br>
關於Misskey專案本身的常見問題在[這裡](../misskey#%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%B3%AA%E5%95%8F)。

## 有Android/iOS上的App嗎？
Misskey專案不為移動作業系統開發原生應用程式，但是有一些第三方的應用程式。詳見[這裡](./apps)。<br>

然而，第三方應用程式對Misskey最新功能的支援可能會有所延遲，如果沒有特別的偏好，我們建議使用Misskey Web。由於Misskey Web支援PWA模式，因此它也可以像原生App一樣運作。詳見[這裡](todo)。

## 可以使用Mastodon的App登入嗎？
Misskey與Mastodon的API不相容，因此Misskey不能透過Mastodon的App或web客戶端使用，但有一些例外。<br>
請使用Misskey官方的Web客戶端Misskey Web。

## misskey.io是Misskey專案的官方伺服器嗎？
misskey.io不是Misskey官方的伺服器，也不屬於Misskey專案。misskey.io是泛用的、無特定主題的、很容易註冊以及最大的Misskey伺服器。

## 「Misskey」名稱的由來？
主要syuilo在考慮名稱時，偶然間聽到May'n的歌曲『Brain Diver』，取自其歌詞。

## 要怎麼追蹤其他的Misskey・Pleroma伺服器、Mastodon伺服器上的使用者？
從選單中選擇搜索，並按照以下格式輸入使用者帳戶。使用者帳戶由使用者名稱與所屬的伺服器或伺服器主機名稱所組成。不限於Misskey，Mastodon和Pleroma等多數的分散式軟體，以下的使用者帳戶格式是很常見的。<br>

使用者帳戶的格式：`@使用者名稱@Misskey・Pleroma伺服器或Mastodon伺服器的主機名稱`<br>
使用者帳戶範例：`@syuilo@misskey.io`<br>

儘管使用者帳戶的格式並非所有的分散式軟體都相同，但是這種格式允許您追蹤安裝了各式分散式軟體的其他伺服器或其上的使用者。

## 如何刪除轉發？
點擊轉發的時間顯示旁的「...」，選擇「取消轉發」。<br>
關於轉發，詳見[這裡](../docs/features/note.html#renote)。

## 不想顯示貼文內URL的預覽
Misskey自己的標記式語言MFM (Markup language For Misskey)具有停用URL預覽的語法。詳見MFM小抄。MFM小抄可以在您所屬的伺服器上輸入以下的地址查閱：`https://您的伺服器主機名稱/mfm-cheat-sheet`

## 想要新增、編輯、刪除自訂表情符號
只有您所屬伺服器的管理者可以新增、編輯、刪除自訂表情符號。如果需要的話，請直接連絡伺服器管理者。

## 想要開發機器人
可以利用Misskey API開發Bot。詳見[這裡](../docs/api)。

## 翻譯貼文的功能是使用哪個服務？
正在使用機器翻譯服務的[DeepL翻譯](https://www.deepl.com/)。

## 已經建立了伺服器，但是需要通知電信事業嗎？
### 短的答案
如果是出於商業目的經營，**需要**。否則**不需要**。

### 長的答案
根據[總務省的文件](https://www.soumu.go.jp/main_content/000477428.pdf)，「經營者」的定義是「透過提供服務，並收取對架費用以獲得收益者」。因此，非商業目的不需要通知。此外，據總務省的答覆，即使有捐贈等收入，如果不是經營目的(賺錢)則不屬於需要通知的經營者範疇。<br>
詳見總務省的[電信事業入門手冊](https://www.soumu.go.jp/main_content/000477428.pdf)等資料，或洽詢總務省。

## 發布名稱能否包含「Misskey」呢？
「Misskey」是Misskey的作者篠田英司(syuilo)截至2022年11月正在申請的商標(2022-054788)。即使已註冊商標，發布名稱中帶有「Misskey」(例: Misskey Tools等)服務也沒有問題。
此外，即使在那種情況下也沒有收取使用費的計畫。
