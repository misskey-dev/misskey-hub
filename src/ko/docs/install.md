---
description: 'Misskey 인스턴스의 생성 방법에 대해 안내합니다.'
---

# Misskey 인스턴스 생성
Misskey 인스턴스 구축에 관심을 가져 주셔서 감사합니다. 인스턴스의 생성 방법은 여러 가지가 있으며, 아래 중에서 원하는 방법을 선택하여 구축할 수 있습니다.

::: danger
이용을 시작한 이후에는 도메인 이름(호스트명)을 변경하지 마세요!
:::

::: danger
자신의 서버에 Cloudflare 를 사용하는 경우, Auto Minify 설정을 사용하지 마십시오.

Cloudflare 가 최신 자바스크립트를 해석하지 않고 내부 소스코드를 파괴하기 때문에 Misskey가 정상적으로 작동하지 않습니다.

자세한 내용은 여기 [misskey-dev/misskey #9791](https://github.com/misskey-dev/misskey/issues/9791)
:::

## Docker를 통한 설치 (추천)
[해당 문서 참고](./install/docker.md)

## bash 스크립트를 통한 설치
[해당 문서 참고](./install/bash.md)

## 수동 설치
[기본 수동 설치](./install/manual.md)\
[자세히: Ubuntu에 수동 설치](./install/ubuntu-manual.md)

## YunoHost를 통한 설치
Misskey는 YunoHost의 앱으로써 설치할 수 있습니다. 자세한 사항은 [Yunohost용 Misskey 패키지 저장소](https://github.com/YunoHost-Apps/misskey_ynh)를 참고해 주세요.

## Kubernetes/TrueNAS를 통한 설치
[해당 문서 참고](./install/kubernetes.md)
