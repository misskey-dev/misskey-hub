# 創建外掛程式
Misskey Web 用戶端的外掛程式功能可讓您擴展客戶端並添加各種功能。本文件將解釋如何建立插件。

## AiScript
外掛程式是使用 AiScript 編寫的腳本。

## 中繼資料
外掛程式應使用 AiScript 中繼資料嵌入工具將外掛程式中繼資料定義為預設值。
中繼資料是一個包含下列屬性的物件

### name
外掛程式名稱

### author
外掛程式作者

### version
外掛程式版本。只能使用數字。

### description
外掛程式說明

### permissions
外掛程式要求的權限。發送請求給 Misskey API 時使用。

### config
表示外掛程式設定資訊的物件。

在鍵中包含設定名稱，在值中包含下列屬性。

#### type
表示設定值類型的字串。從以下選項中選擇。
string number boolean

#### label
設定向使用者顯示的名稱

#### description
設定的說明

#### default
設定的預設值

## API
Misskey Web為插件提供應用程式界面，可用於擴展客戶端的功能。
請參閱[外掛程式 API 參考](./plugin-api-reference.md)，以了解可用的 API。
