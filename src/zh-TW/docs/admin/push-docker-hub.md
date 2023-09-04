如何使用 GitHub Actions 推送到 Docker Hub
================================================================

在 [/.github/workflows/docker.yml](https://github.com/misskey-dev/misskey/blob/develop/.github/workflows/docker.yml) 描述了經由 
GitHub Action 推送到 Docker Hub 的工作流程。

在原始儲存庫中，在發布時使用標籤 `latest` 和 `<release name>` 推送至 Docker Hub。  
※ Docker Hub 中可能存在 `<branch name>` 之類的標籤，但這不受自動推送影響。

從分叉執行此工作流程將會失敗。

以下，將描述如何推送分叉到自己的 Docker Hub 儲存庫。

## 自分のDocker Hubリポジトリにpushするように設定する方法

1. 在 Docker Hub 上建立儲存庫。
2. 將工作流程檔案的 [images](https://github.com/misskey-dev/misskey/blob/53f3b779bf16abcda4f6e026c51384f3b8fbcc62/.github/workflows/docker.yml#L20) 替換為建立的存儲庫。
3. 在 GitHub 上建立 [加密密鑰](https://docs.github.com/ja/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)。  
   要建立的是 `DOCKER_USERNAME` 與 `DOCKER_PASSWORD`，它們分別是您的 Docker Hub 使用者名稱與密碼。

## 如何推送

透過以上的設定，發布時會自動推送到 Docker Hub。  
具體而言，當用 GitHub 的發布功能發布時，會以 `latest` 和 `<release name>` 標籤推送到 Docker Hub。

您還可以從 GitHub 手動推送。  
要手動推送，請從 Actions => Publish Docker image => Run workflow 選擇 branch 來執行工作流。  
但是，在這個情況下建立的標籤為 `<branch name>`。
