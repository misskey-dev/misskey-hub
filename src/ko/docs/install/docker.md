Docker Compose로 Misskey 인스턴스 만들기
================================================================

이 가이드에서는 Docker Compose를 사용해 Misskey를 설치하고 준비하는 과정을 설명하려 합니다.

::: danger
인스턴스를 한 번이라도 시작하고 나서는 절대로 도메인 이름 (hostname)을 변경하지 마세요!
:::

::: tip 요구사항
- Docker와 Docker-compose가 설치되어 있어야 합니다.
:::

레포지토리 가져오기
----------------------------------------------------------------
```sh
git clone -b master https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

설정
----------------------------------------------------------------
다음 명령어로 예시 설정 파일을 복사해 주세요.

```sh
cp .config/docker_example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
cp ./docker-compose.yml.example ./docker-compose.yml
```

그 다음, 복사된 `default.yml`과 `docker.env` 파일을 파일 안의 안내에 따라 수정해 주세요.

만약 포트 변경 등의 설정 수정이 필요하다면 `docker-compose.yml` 파일도 수정해 주세요.

빌드 및 초기화
----------------------------------------------------------------
다음으로 Misskey를 빌드하고 Misskey 데이터베이스를 초기화하기 위해 다음 명령어를 입력합니다.
완료되는 데에 시간이 조금 걸릴 수 있습니다.

``` shell
sudo docker compose build
sudo docker compose run --rm web pnpm run init
```

실행하기
----------------------------------------------------------------
Well done! You can start Misskey with the following command.
여기까지 문제 없이 완료했다면, 다음 명령어로 Misskey를 시작할 수 있습니다!


```sh
sudo docker compose up -d
```

잘 하셨습니다! 이제 미스키를 즐겨 봐요.✨

How to update your Misskey server
미스키 서버 업데이트하기
----------------------------------------------------------------
::: warning
다음 버전으로 업데이트하기 전에 반드시 [릴리즈 노트](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md)를 확인하고, 필요한 경우 몇 가지 추가 작업을 수행해 주세요(대부분의 경우 수행할 필요가 없긴 하지만요).
:::

```sh
git stash
git checkout master
git pull
git submodule update --init
git stash pop
sudo docker compose build
sudo docker compose stop && sudo docker compose up -d
```

데이터베이스에 업데이트 해야 될 컨텐츠의 양에 따라 약간의 시간이 걸릴 수 있습니다.

CLI 명령어 실행하기
----------------------------------------------------------------
```sh
sudo docker compose run --rm web node packages/backend/built/tools/foo bar
```
