---
description: '關於如何建立 Misskey 伺服器的資訊。'
---

# 建立 Misskey 伺服器
感謝您對於構建 Misskey 伺服器有興趣。建立伺服器的方式有好幾個，請從下面選擇一種並閱讀指引。

::: danger
一旦開始使用，切記伺服器的網域和主機名稱不可變更！
:::

::: danger
將 Cloudflare 使用於自己的伺服器時，請勿使用 Auto Minify 設定。

由於 Cloudflare 不理解最新的 JavaScript 並破壞了其中的原始碼，從而使得 Misskey 無法正常工作。

詳見 [misskey-dev/misskey #9791](https://github.com/misskey-dev/misskey/issues/9791)。
:::

## 使用 Docker Compose 安裝
[這裡](./install/docker.html)

## 使用 bash 腳本安裝
[這裡](./install/bash.html)

## 全部自己安裝
[基本篇](./install/manual.html)\
[Ubuntu 版詳細説明](./install/ubuntu-manual.html)

## 使用 YunoHost 安裝
Misskey 可以作為 App 安裝在 YunoHost 上。詳見 [Yunohost 的 Misskey 儲存庫](https://github.com/YunoHost-Apps/misskey_ynh)。

## 使用 Kubernetes/TrueNAS 安裝
[這裡](./install/kubernetes.html)
