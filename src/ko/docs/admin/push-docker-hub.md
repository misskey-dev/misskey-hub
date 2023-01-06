# GitHub Actions로 Docker Hub에 푸시하기

::: 경고
이 문서는 아직 영문/국문으로 번역되지 않아, 일본어로 제공됩니다.

추후 번역되기 전까지는, 아래의 일문을 기계 번역하여 읽어주시기 바랍니다.
:::

[/.github/workflows/docker.yml](https://github.com/misskey-dev/misskey/blob/develop/.github/workflows/docker.yml) に  
GitHub Action により Docker Hub へ push するワークフローが記述されています。

オリジナルリポジトリでは、リリースされたタイミングで `latest`, `<リリース名>` それぞれのタグで Docker Hub に push されます。  
※ Docker Hub に`<ブランチ名>`のようなタグがあるかもしれませんが、こちらは自動 push 対象ではありません。

Fork 先でこのワークフローを実行すると失敗します。

以下では、Fork 先で自分の Docker Hub リポジトリに push するようにする方法を記述します。

## 自分の Docker Hub リポジトリに push するように設定する方法

1. Docker Hub でリポジトリを作成します。
2. ワークフローファイルの [images](https://github.com/misskey-dev/misskey/blob/53f3b779bf16abcda4f6e026c51384f3b8fbcc62/.github/workflows/docker.yml#L20) を作成したリポジトリに置き換えます。
3. GitHub にて [暗号化されたシークレット](https://docs.github.com/ja/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) を作成します。  
   作成が必要なのは `DOCKER_USERNAME` と `DOCKER_PASSWORD` で、それぞれ Docker Hub のユーザーとパスワードになります。

## push する方法

上記設定によりリリース時に自動的に Docker Hub に push されるようになります。  
具体的には、GitHub のリリース機能でリリースしたタイミングで `latest`, `<リリース名>` それぞれのタグで Docker Hub に push されます。

また、GitHub 上から手動で push することも出来ます。  
それを行うには、Actions => Publish Docker image => Run workflow から branch を選択してワークフローを実行します。  
ただし、この場合作成されるタグは`<ブランチ名>`になります。
