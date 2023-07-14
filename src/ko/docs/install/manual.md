# Misskey 수동 설치 가이드

이 가이드에서는 Misskey의 설치 및 준비 방법에 대해 설명합니다.

::: danger
한 번 사용을 시작한 인스턴스의 도메인 호스트 이름은 절대 변경하지 마세요!
:::

::: tip 준비사항
다음을 미리 설치해주세요:
- [Node.js](https://nodejs.org) 20.4 이상
- [PostgreSQL](https://www.postgresql.org) 15 이상
- [Redis](https://redis.io)
- [FFmpeg](https://www.ffmpeg.org)

GNU/Linux 환경이면 `build-essential` 패키지를 설치해 두면 좋습니다.

또한 corepack이 활성화되어 있어야 합니다.
```sh
sudo corepack enable
```
:::

## 사용자 생성
root로 Misskey를 실행하는 것은 좋은 생각이 아닙니다. 별도의 사용자를 만들어 설치하는 것이 좋습니다.

```sh
adduser --disabled-password --disabled-login misskey
```

## Misskey 설치
위에서 생성한 사용자로 전환해 Misskey 설치를 시작합니다.

```sh
sudo -iu misskey
git clone --recursive https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
git submodule update --init
NODE_ENV=production pnpm install --frozen-lockfile
```

## Misskey 설정
설정 예시 파일(`.config/example.yml`)을 복사해 `default.yml` 파일을 만듭니다.
```sh
cp .config/example.yml .config/default.yml
```

텍스트 편집기를 이용해 `default.yml` 파일을 열어, 파일 내의 지시에 따라 수정합니다.

## Misskey 빌드 및 초기화
다음 명령을 실행해 Misskey를 빌드(`pnpm run build`)하고 데이터베이스를 초기화(`pnpm run init`)합니다. 본 작업은 시간이 소요되는 작업입니다.
```sh
NODE_ENV=production pnpm run build
pnpm run init
```

## Misskey 실행
Misskey의 실행을 위한 모든 준비가 끝났습니다. 이제 다음 명령을 통해 Misskey를 실행할 수 있습니다.
```sh
NODE_ENV=production pnpm run start
```

### details systemd를 이용한 관리
우선 systemd 서비스 파일을 생성합니다.

`/etc/systemd/system/misskey.service` 파일을 에디터로 열고 아래 코드를 작성해 넣습니다.
```ini
[Unit]
Description=Misskey daemon

[Service]
Type=simple
User=misskey
ExecStart=/usr/bin/npm start
WorkingDirectory=/home/misskey/misskey
Environment="NODE_ENV=production"
TimeoutSec=60
StandardOutput=journal
StandardError=journal
SysLogIdentifier=misskey
Restart=always

[Install]
WantedBy=multi-user.target
```

::: warning
CentOS에서 1024 이하의 포트를 이용해 Misskey를 실행하는 경우 `ExecStart=/usr/bin/sudo/usr/bin/npm start`로 변경해야 합니다.
:::

이제 systemd를 다시 시작해 서비스를 활성화합니다.
```sh
sudo systemctl daemon-reload
sudo systemctl enable misskey
```

이렇게 하면 Misskey 서비스를 부팅할 수 있습니다.
```sh
sudo systemctl start misskey
```

::: tip
이제 `systemctl status misskey` 명령어로 Misskey의 서비스 상태를 확인할 수 있습니다.
:::

## Misskey 업데이트 방법
::: warning
업데이트 시 반드시 [변경사항](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md)를 확인하고 변경사항이나 필요한 추가 작업을 미리 확인해 주십시오.
:::

master를 다시 풇하고 설치, 빌드, DB 마이그레이션을 실시합니다.
```sh
git checkout master
git pull
git submodule update --init
NODE_ENV=production pnpm install --frozen-lockfile
NODE_ENV=production pnpm run build
pnpm run migrate
```

업데이트의 내용 및 DB 규모에 따라 시간이 소요될 수 있습니다.

업데이트가 완료되는 대로 Misskey를 다시 시작합니다.
```sh
sudo systemctl restart misskey
```

::: tip
빌드 혹은 실행 중 오류가 발생한 경우 아래 명령을 실행해보세요.
- `pnpm run clean` 또는 `pnpm run clean-all`
   - 이 명령을 실행한 후에는 반드시 `pnpm install`을 다시 실행해주세요.
- `pnpm rebuild`
:::
