# CDN 的設定
我們強烈推薦在 Misskey 伺服器上線時，使用 [Cloudflare](https://www.cloudflare.com/)之類的 CDN。

使用 CDN 有以下優點：
- 可以快取靜態內容，減少伺服器的負荷
- 藉由增加伺服器的 IP 位址的暴露難度，可以緩和 DoS 攻擊

## 快取
Misskey Web 是完全靜態的，不需要服務器來運行。因此整個 Misskey Web 可以在 CDN 上快取。
Misskey API 無法快取。

在 CDN 上進行以下設定：
- 快取除了 `/api/*` 以外的所有請求

::: tip
更新 Misskey 時不需要清除快取。
:::
