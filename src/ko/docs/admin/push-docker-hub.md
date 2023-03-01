# GitHub Actions로 Docker Hub에 푸시하기

[/.github/workflows/docker.yml](https://github.com/misskey-dev/misskey/blob/develop/.github/workflows/docker.yml)에 GitHub Action을 통해 Docker Hub로 푸시하는 워크플로우가 작성되어 있습니다.

원본 저장소에서는, 실행된 타이밍에 `latest`, `<릴리스 명칭>` 각각의 태그로 Docker Hub에 푸시됩니다.

::: info
Docker Hub에 `<브랜치명>`과 같은 태그가 있을 수도 있지만, 이러한 것은 자동 푸시 대상이 아닙니다.
:::

포크가 생성되어 있는 곳에서 실행하면 푸시에 실패합니다.

여기에서는, 포크가 생성되어 있는 곳에서 자신의 Docker Hub 저장소로 푸시하는 방법을 설명합니다.

## 내 Docker Hub 저장소에 푸시하도록 설정하기
1. Docker Hub 저장소를 생성합니다.
2. 워크플로우 파일의 [images](https://github.com/misskey-dev/misskey/blob/develop/.github/workflows/docker.yml#L25)를 자신의 저장소로 대체합니다.
3. GitHub에서 [암호화된 시크릿](https://docs.github.com/ko/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)을 생성합니다.  
`DOCKER_USERNAME` 및 `DOCKER_PASSWORD`를 생성해 줍니다. 이들은 각각 Docker Hub의 사용자명과 비밀번호입니다.

## 푸시하기
위 설정에 의해, 릴리스 시 자동으로 Docker Hub에 푸시하게 됩니다.
릴리스한 타이밍에 `latest`와 `<릴리스명>` 각각의 태그로 푸시되며, 이때 기존의 `latest`는 삭제됩니다.

또, GitHub 상에서 수동으로 푸시를 실행할 수도 있습니다.
Actions > Publish Docker Image > Run workflow에서 브랜치를 선택해 워크플로우를 실행하면 됩니다.
다만, 이렇게 하면 태그는 `<브랜치명>`으로 생성됩니다.
